/**
 * A file is fetched ahead or
 * the first time it is wanted, decoded once and kept.
 * Every sound passes through its group's level and one master, which
 * the sounds setting silences.
 * @license GPL-3.0-or-later
 */

// The key sets, by the group:
const KEY_SETS = {
  buttons: ['button-1', 'button-2'],
  links: ['link-1', 'link-2', 'link-3'],
  typing: ['typing-1', 'typing-2'],
};
// A scroll's tick:
// four takes in turn, down a little lower and up a little higher, each
// straying a little; the end of the page a sound of its own,
// at a level of its own.
const SCROLL_FILES = [1, 2, 3, 4].map(
  (n) => `/assets/sounds/scroll/tick-${n}.wav`
);
const SCROLL_END_FILE = '/assets/sounds/scroll/end.wav';
const SCROLL_END_DB = -2;
const SCROLL_WAY_CENTS = 70;
const SCROLL_STRAY_CENTS = 15;
const SCROLL_STRAY_DB = 1;
const MOMENT_FILES = {
  on: ['/assets/sounds/moments/on.wav', 0],
};
// A browser that has not let the page make sound yet leaves the audio
// context waiting; past this the sound is given up.
const START_TIMEOUT_MS = 1000;

// The groups a sound plays in, each at its own level under the master.
// Every sound stays within 20 dB of every other, so none stands out and
// none is lost when the volume moves.
const GROUP_LEVELS_DB = {
  buttons: 0,
  links: -3,
  arrive: -6,
  typing: -12,
  scroll: -16,
  hover: -18,
  moments: 0,
};
// Muting fades the master out over this, so a sound stops without a click.
const MUTE_RAMP_S = 0.02;

let _context = null;
let _mixer = null;
let _muted = false;
const _bytes = new Map();
const _buffers = new Map();
let _armed = false;
const _turn = new Map();

function _contextClass() {
  return window.AudioContext || window.webkitAudioContext;
}

function _audioContext() {
  const Context = _contextClass();
  if (!Context) throw new Error('Web Audio is not available');
  if (!_context || _context.state === 'closed') _context = new Context();
  return _context;
}

async function _fetchBytes(url) {
  const response = await fetch(url);
  const type = response.headers.get('content-type') || '';
  // The dev server answers a missing file with the page itself, status 200.
  if (!response.ok || !type.startsWith('audio/')) {
    throw new Error(
      `${url} is not a sound (${response.status}, ${type || 'no type'})`
    );
  }
  return response.arrayBuffer();
}

function _bytesFor(url) {
  if (!_bytes.has(url)) {
    const loading = _fetchBytes(url).catch((error) => {
      _bytes.delete(url);
      throw error;
    });
    _bytes.set(url, loading);
  }
  return _bytes.get(url);
}

function _bufferFor(url, context) {
  if (!_buffers.has(url)) {
    // Decoding takes its bytes away, so it is given a copy and the bytes stay.
    const decoding = _bytesFor(url)
      .then((bytes) => context.decodeAudioData(bytes.slice(0)))
      .catch((error) => {
        _buffers.delete(url);
        throw error;
      });
    _buffers.set(url, decoding);
  }
  return _buffers.get(url);
}

// The audio context is made at the first press on the page, when a browser
// lets it start, so the first sound is not waiting on it.
function _armContext() {
  if (_armed) return;
  _armed = true;
  const arm = () => {
    _audioContext().resume();
  };
  for (const type of ['pointerdown', 'keydown']) {
    document.addEventListener(type, arm, {
      capture: true,
      once: true,
      passive: true,
    });
  }
}

function _fetchAhead(urls, what) {
  if (!_contextClass()) return;
  for (const url of urls) {
    _bytesFor(url).catch((error) => {
      console.warn(
        `[Sounds] The ${what} sound was not fetched ahead:`,
        error
      );
    });
  }
  _armContext();
}

const _gainOf = (db) => 10 ** (db / 20);

function _checkGroup(name) {
  if (!Object.prototype.hasOwnProperty.call(GROUP_LEVELS_DB, name)) {
    throw new Error(`No such sound group: ${name}`);
  }
}

// The master and the groups, made with the context's first sound.
function _mixerFor(context) {
  if (_mixer?.context === context) return _mixer;
  const master = context.createGain();
  master.gain.value = _muted ? 0 : 1;
  master.connect(context.destination);
  const groups = {};
  for (const [name, db] of Object.entries(GROUP_LEVELS_DB)) {
    const node = context.createGain();
    node.gain.value = _gainOf(db);
    node.connect(master);
    groups[name] = node;
  }
  _mixer = { context, master, groups };
  return _mixer;
}

// A level moves on from where it stands, so a change arriving in the middle
// of another does not jump.
function _holdFrom(param, at) {
  param.cancelScheduledValues(at);
  param.setValueAtTime(param.value, at);
}

// Waits for the context to run, a second at most.
async function _whenRunning(running) {
  let timer = null;
  await Promise.race([
    running,
    new Promise((resolve, reject) => {
      timer = setTimeout(
        () => reject(new Error('The browser did not let the sound start')),
        START_TIMEOUT_MS
      );
    }),
  ]).finally(() => clearTimeout(timer));
}

// Waits for the context to run, then starts the buffer in its group,
// `offset` seconds in, at `rate` times its speed. With `own`, the sound has
// a level of its own (`source.level`, `levelDb` to start) between it and the
// group, so it can be set apart from the group or faded out.
async function _start(
  context,
  running,
  buffer,
  group,
  { offset = 0, own = false, levelDb = 0, rate = 1 } = {}
) {
  await _whenRunning(running);
  const source = context.createBufferSource();
  source.buffer = buffer;
  if (rate !== 1) source.playbackRate.value = rate;
  const into = _mixerFor(context).groups[group];
  if (own) {
    source.level = context.createGain();
    source.level.gain.value = _gainOf(levelDb);
    source.level.connect(into);
    source.connect(source.level);
  } else {
    source.connect(into);
  }
  source.start(0, offset);
  return source;
}

/**
 * The gain a group's sounds pass through, or null before the first sound.
 * @param {'buttons'|'links'|'arrive'|'typing'|'scroll'|'hover'|'moments'} name
 * @returns {GainNode|null}
 */
export function soundGroup(name) {
  _checkGroup(name);
  return _mixer ? _mixer.groups[name] : null;
}

/**
 * Silence every sound, or let them be heard again: the master fades over
 * 20 ms. Kept in step with the sounds setting; a mixer made later starts as
 * this left it.
 * @param {boolean} on
 */
export function setMuted(on) {
  _muted = Boolean(on);
  if (!_mixer) return;
  const { context, master } = _mixer;
  const now = context.currentTime;
  _holdFrom(master.gain, now);
  master.gain.linearRampToValueAtTime(_muted ? 0 : 1, now + MUTE_RAMP_S);
}

export function preloadMomentSounds() {
  _fetchAhead(
    Object.values(MOMENT_FILES).map(([url]) => url),
    'moment'
  );
}

/**
 * Fetch a set's key files now, once, so the first press is not waiting.
 * @param {'buttons'|'links'|'typing'} set
 */
export function preloadKeySounds(set) {
  const takes = KEY_SETS[set];
  if (!takes) throw new Error(`No such key set: ${set}`);
  const urls = new Set();
  for (const take of takes) {
    urls.add(_keyUrl(take));
  }
  _fetchAhead([...urls], 'key');
}

function _keyUrl(take) {
  return `/assets/sounds/keys/${take}.wav`;
}

/** Fetch the scroll's ticks now, once. */
export function preloadScrollSounds() {
  _fetchAhead([...SCROLL_FILES, SCROLL_END_FILE], 'scroll');
}

// A share of a sound's stray, between -1 and 1.
const _stray = () => Math.random() * 2 - 1;

/**
 * Play a key for a button: the set's keys take turns, so a repeated press
 * does not stutter on one recording.
 * @param {'buttons'|'links'|'typing'} set - The key set
 * @returns {Promise<number>} The sound's length in seconds once it has begun
 */
export async function playKeySound(set) {
  const takes = KEY_SETS[set];
  if (!takes) throw new Error(`No such key set: ${set}`);
  const turn = _turn.get(set) ?? 0;
  _turn.set(set, (turn + 1) % takes.length);
  const context = _audioContext();
  const running = context.resume();
  const buffer = await _bufferFor(_keyUrl(takes[turn]), context);
  await _start(context, running, buffer, set);
  return buffer.duration;
}

/**
 * Play one of the moments whole. Call it from the press that made it.
 * @param {keyof typeof MOMENT_FILES} name
 * @param {number} [rate] - How fast it plays: under 1, slower and lower
 * @returns {Promise<number>} The sound's length in seconds once it has begun
 */
export async function playMomentSound(name, rate = 1) {
  if (!MOMENT_FILES[name]) throw new Error(`No such moment: ${name}`);
  const [url, levelDb] = MOMENT_FILES[name];
  const context = _audioContext();
  const running = context.resume();
  const buffer = await _bufferFor(url, context);
  await _start(context, running, buffer, 'moments', {
    own: true,
    levelDb,
    rate,
  });
  return buffer.duration / rate;
}

/**
 * Play one of the moments as notes, each at its own time and pitch, all
 * through one level, so they can be stopped together.
 * @param {keyof typeof MOMENT_FILES} name
 * @param {Array<[number, number]>} notes - Seconds from now, and a pitch as a
 *   MIDI number
 * @param {number} own - The MIDI number of the file's own note
 * @param {number} [levelDb] - Every note's level, under the moment's own
 * @returns {Promise<AudioBufferSourceNode[]>} The notes, once they are set
 */
export async function playMomentNotes(name, notes, own, levelDb = 0) {
  if (!MOMENT_FILES[name]) throw new Error(`No such moment: ${name}`);
  const [url, momentDb] = MOMENT_FILES[name];
  const context = _audioContext();
  const running = context.resume();
  const buffer = await _bufferFor(url, context);
  await _whenRunning(running);
  const voice = context.createGain();
  voice.gain.value = _gainOf(momentDb + levelDb);
  voice.connect(_mixerFor(context).groups.moments);
  const now = context.currentTime;
  return notes.map(([seconds, pitch]) => {
    const source = context.createBufferSource();
    source.buffer = buffer;
    source.playbackRate.value = 2 ** ((pitch - own) / 12);
    source.connect(voice);
    source.start(now + seconds);
    return source;
  });
}

/**
 * Play a scroll's tick, its takes in turn; or the end of the page.
 * @param {{way?: -1|0|1, end?: boolean}} [how] - way: down (-1), a little
 *   lower, or up (1), a little higher
 * @returns {Promise<number>} The sound's length in seconds once it has begun
 */
export async function playScrollSound({ way = 0, end = false } = {}) {
  const files = SCROLL_FILES;
  let url = SCROLL_END_FILE;
  let rate = 1;
  let levelDb = SCROLL_END_DB;
  if (!end) {
    const turn = _turn.get('scroll') ?? 0;
    _turn.set('scroll', (turn + 1) % files.length);
    url = files[turn];
    rate =
      2 ** ((way * SCROLL_WAY_CENTS + _stray() * SCROLL_STRAY_CENTS) / 1200);
    levelDb = _stray() * SCROLL_STRAY_DB;
  }
  const context = _audioContext();
  const running = context.resume();
  const buffer = await _bufferFor(url, context);
  await _start(context, running, buffer, 'scroll', {
    own: true,
    levelDb,
    rate,
  });
  return buffer.duration / rate;
}

// The big buttons, by where they sit on the page. Any other link is a
// hyperlink, with a sound of its own.
const BIG_BUTTONS = [
  '.site-nav a',
  'a.site-title',
  '.title-bar a',
  'aside.home > section.full ul.post-list a',
  'button',
].join(', ');
const PRESS_TARGET = 'button, a[href]';
const STORAGE_KEY_SOUNDS = 'sounds';
// Whether Windows High Contrast starts with sounds off, as reduced motion
// and more contrast do.
const FORCED_COLORS_COUNT = true;
const SOUNDS_TEXT = { on: 'Sounds: on', off: 'Sounds: off' };

let _soundsOn = true;
/** The last control a press sounded for, so its click does not sound again. */
let _pressHeard = null;

/**
 * Whether sounds start on. A saved choice wins. With none saved they start
 * off for reduced motion, for more contrast, and for forced colors when
 * that counts; otherwise on.
 * @param {{saved: string|null, reducedMotion: boolean,
 *   moreContrast: boolean, forcedColors: boolean,
 *   forcedColorsCounts: boolean}} given
 * @returns {boolean}
 */
export function soundsStartOn({
  saved,
  reducedMotion,
  moreContrast,
  forcedColors,
  forcedColorsCounts,
}) {
  if (saved === 'on') return true;
  if (saved === 'off') return false;
  if (reducedMotion || moreContrast) return false;
  return !(forcedColors && forcedColorsCounts);
}

function _prefers(query) {
  return Boolean(window.matchMedia?.(query).matches);
}

function _savedSounds() {
  try {
    return localStorage.getItem(STORAGE_KEY_SOUNDS);
  } catch (error) {
    console.warn('[Sounds] Could not save the sounds setting:', error);
    return null;
  }
}

function _preloadPressSounds() {
  preloadKeySounds('buttons');
  preloadKeySounds('links');
}

// The sounds a page fetches ahead are fetched at the first sign of a hand
// on it (a pointer moving, a press, a key, the wheel, a touch) and not as
// the page loads, so a page nobody touches fetches none.
const HAND_SIGNS = [
  'pointermove',
  'pointerdown',
  'keydown',
  'wheel',
  'touchstart',
];
let _handSeen = false;
const _atHand = new Set([_preloadPressSounds]);

function _fetchForHand() {
  if (!_handSeen || !_soundsOn) return;
  for (const fetchIt of _atHand) fetchIt();
}

function _installFirstHand() {
  const seen = () => {
    _handSeen = true;
    for (const type of HAND_SIGNS) {
      document.removeEventListener(type, seen, true);
    }
    _fetchForHand();
  };
  for (const type of HAND_SIGNS) {
    document.addEventListener(type, seen, { capture: true, passive: true });
  }
}

function _syncSoundsButton(on) {
  const button = document.getElementById('sounds-switch');
  if (!button) return;
  button.querySelector('span').textContent = on
    ? SOUNDS_TEXT.on
    : SOUNDS_TEXT.off;
  button.hidden = false;
}

// Puts a choice to work without saving it.
function _useSounds(on) {
  _soundsOn = Boolean(on);
  setMuted(!_soundsOn);
  if (!_soundsOn) _cutCanon();
  _syncSoundsButton(_soundsOn);
  // On: the sounds are fetched ahead, once a hand has shown itself.
  _fetchForHand();
}

function _setSoundsOn(on) {
  try {
    localStorage.setItem(STORAGE_KEY_SOUNDS, on ? 'on' : 'off');
  } catch (error) {
    console.warn('[Sounds] Could not save the sounds setting:', error);
  }
  _useSounds(on);
}

// The button or link a press lands on. The sounds switch has its own sound.
function _pressTarget(event) {
  const el = event.target?.closest?.(PRESS_TARGET);
  if (!el || el.id === 'sounds-switch' || el.disabled) return null;
  return el;
}

// A press with Ctrl, Shift, Alt or the Windows key held does something else
// than follow the link, so it stays quiet.
const _plain = (event) =>
  !(event.ctrlKey || event.shiftKey || event.altKey || event.metaKey);

function _playPress(el) {
  if (!_soundsOn) return;
  const set = el.matches(BIG_BUTTONS) ? 'buttons' : 'links';
  playKeySound(set).catch((error) => {
    console.warn('[Sounds] A press sound did not play:', error);
  });
}

function _installPressSounds() {
  // A mouse or a pen sounds as it goes down. A touch may turn into a scroll,
  // so it waits for its click.
  const down = (event) => {
    _pressHeard = null;
    if (event.pointerType === 'touch') return;
    if (event.button !== 0 || !_plain(event)) return;
    const el = _pressTarget(event);
    if (!el) return;
    _pressHeard = el;
    _playPress(el);
  };
  // Enter on a focused link or button, or Space on a button, is a press too,
  // once per press: a held key's repeats and their clicks stay quiet.
  const keydown = (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    const el = _pressTarget(event);
    if (!el || el !== event.target || !_plain(event)) return;
    if (event.key === ' ' && el.localName !== 'button') return;
    _pressHeard = el;
    if (!event.repeat) _playPress(el);
  };
  // A click no press of ours came before: a touch, or a screen reader's
  // Enter in browse mode, which the page gets as a click alone. Anything
  // else the page clicks for itself stays quiet.
  const click = (event) => {
    const el = _pressTarget(event);
    if (!el) return;
    if (el === _pressHeard) {
      _pressHeard = null;
      return;
    }
    if (!event.isTrusted || !_plain(event)) return;
    _playPress(el);
  };
  const listeners = [
    ['pointerdown', down],
    ['keydown', keydown],
    ['click', click],
  ];
  for (const [type, fn] of listeners) {
    document.addEventListener(type, fn, true);
  }
}

// Scrolling by hand ticks a line at a time: a tick for every 40 px the page
// moves, going down a little lower and up a little higher, at most every
// 70 ms (a line that would tick sooner is passed over), and the end of the
// page once as it is reached. Only a scroll by hand: the wheel, a finger,
// the scrollbar or a key that scrolls, and the glide after them; a scroll
// the page makes (a jump to a place on it) is silent.
const SCROLL_LINE_PX = 40;
const SCROLL_TICK_GAP_MS = 70;
const SCROLL_HAND_MS = 1000;
const SCROLL_KEYS = new Set([
  'ArrowUp',
  'ArrowDown',
  'PageUp',
  'PageDown',
  'Home',
  'End',
  ' ',
]);
let _scrollHandUntil = 0;
let _scrollTickAt = -Infinity;
const _scrolls = new WeakMap();
let _scrollFetched = false;

// A browser lets a page sound only once its visitor has pressed something
// on it (a click, a key, a tap); a wheel or a dragging finger is not a
// press. Until then a sound that no press made is not tried, so nothing is
// refused and nothing is logged.
const _mayStart = () => Boolean(navigator.userActivation?.hasBeenActive);

function _playScrollTick(way) {
  const now = performance.now();
  if (now - _scrollTickAt < SCROLL_TICK_GAP_MS) return;
  _scrollTickAt = now;
  if (!_soundsOn || !_mayStart()) return;
  playScrollSound({ way }).catch((error) => {
    console.warn('[Sounds] A scroll tick did not play:', error);
  });
}

function _playScrollEnd() {
  if (!_soundsOn || !_mayStart()) return;
  playScrollSound({ end: true }).catch((error) => {
    console.warn("[Sounds] The end of the page's sound did not play:", error);
  });
}

function _installScrollTicks() {
  const hand = () => {
    _scrollHandUntil = performance.now() + SCROLL_HAND_MS;
    // The scroll's sounds are fetched at the first sign of a hand, so a page
    // that is never scrolled by hand fetches none.
    if (_soundsOn && !_scrollFetched) {
      _scrollFetched = true;
      preloadScrollSounds();
    }
  };
  const key = (event) => {
    if (SCROLL_KEYS.has(event.key)) hand();
  };
  // A press on a scrollbar lands on the element that scrolls, outside its
  // content.
  const bar = (event) => {
    const el = event.target;
    if (
      el instanceof Element &&
      el.clientWidth > 0 &&
      (event.offsetX > el.clientWidth || event.offsetY > el.clientHeight)
    ) {
      hand();
    }
  };
  const scrolled = (event) => {
    const el =
      event.target === document ? document.scrollingElement : event.target;
    if (!(el instanceof Element)) return;
    const top = el.scrollTop;
    const seen = _scrolls.get(el);
    if (!seen) {
      _scrolls.set(el, { top, carry: 0, end: null });
      return;
    }
    const moved = top - seen.top;
    seen.top = top;
    if (!moved) return;
    if (performance.now() > _scrollHandUntil) {
      seen.carry = 0;
      seen.end = null;
      return;
    }
    const bottom = el.scrollHeight - el.clientHeight;
    const end = top <= 0 ? 'top' : top >= bottom - 1 ? 'bottom' : null;
    // The end is said within a pixel of it; the glide's last part of a pixel
    // after that is not a line, so the end stays the last sound.
    if (end && end === seen.end) return;
    seen.carry =
      Math.sign(seen.carry) === Math.sign(moved) ? seen.carry + moved : moved;
    if (Math.abs(seen.carry) >= SCROLL_LINE_PX) {
      seen.carry %= SCROLL_LINE_PX;
      _playScrollTick(moved > 0 ? -1 : 1);
    }
    if (end) _playScrollEnd();
    seen.end = end;
  };
  const listeners = [
    ['wheel', hand],
    ['touchstart', hand],
    ['touchmove', hand],
    ['touchend', hand],
    ['keydown', key],
    ['pointerdown', bar],
    ['scroll', scrolled],
  ];
  for (const [type, fn] of listeners) {
    document.addEventListener(type, fn, { capture: true, passive: true });
  }
}

// Typing in the link code box is a quiet key per change, at most this many
// a second; a change that would sound sooner is passed over.
const TYPING_PER_SECOND = 14;
let _typingLastAt = -Infinity;

function _playTypingSound() {
  if (!_soundsOn || !_mayStart()) return;
  playKeySound('typing').catch((error) => {
    console.warn('[Sounds] A typing sound did not play:', error);
  });
}

function _installTypingSounds() {
  const box = document.getElementById('link-code');
  if (!box) return;
  // The box's sounds are fetched when it takes focus.
  box.addEventListener('focus', () => {
    if (_soundsOn) preloadKeySounds('typing');
  });
  // A change in the box: the quiet key. A paste is one change.
  box.addEventListener('input', () => {
    const now = performance.now();
    if (now - _typingLastAt < 1000 / TYPING_PER_SECOND) return;
    _typingLastAt = now;
    _playTypingSound();
  });
}

// Hover. This block and its one call in _startSounds are the whole cue:
// take both out and it is gone.
// A mouse coming onto a big button: one quiet sound, as the pointer comes
// onto the button, not as it moves about on it; never close behind a
// scroll's tick. A touch, a pen and keyboard focus stay silent.
const HOVER_FILE = '/assets/sounds/hover/hover.wav';
const HOVER_AFTER_TICK_MS = 150;
/** The big button the pointer is on, so it sounds once, as it is reached. */
let _hoverOn = null;

function _playHover() {
  const context = _audioContext();
  const running = context.resume();
  _bufferFor(HOVER_FILE, context)
    .then((buffer) => _start(context, running, buffer, 'hover'))
    .catch((error) => {
      console.warn('[Sounds] The hover sound did not play:', error);
    });
}

function _installHoverSounds() {
  const over = (event) => {
    if (event.pointerType !== 'mouse') return;
    const el = event.target?.closest?.(BIG_BUTTONS) ?? null;
    if (el === _hoverOn) return;
    _hoverOn = el;
    if (!el || !_soundsOn || !_mayStart()) return;
    if (performance.now() - _scrollTickAt < HOVER_AFTER_TICK_MS) return;
    _playHover();
  };
  document.addEventListener('pointerover', over, {
    capture: true,
    passive: true,
  });
  _atHand.add(() => _fetchAhead([HOVER_FILE], 'hover'));
}

// Arrival. This block and its one call in _startSounds are the whole cue:
// take both out and it is gone.
// A plain press on a link to another page of this site leaves a note of
// when. The page it leads to takes the note away and, if the note is fresh
// and the browser lets the page sound at once, plays one sound. A sound
// that could not begin at once is not played late.
const ARRIVE_FILE = '/assets/sounds/moments/arrive.wav';
const ARRIVE_KEY = 'sounds-arrive';
const ARRIVE_FRESH_MS = 10000;
const ARRIVE_WITHIN_MS = 200;

/**
 * Whether the note a press left is fresh: a time no later than now and
 * less than ten seconds before it.
 * @param {string|null} stored - What the note holds, a time in ms
 * @param {number} now - The time now, in ms
 * @returns {boolean}
 */
export function arrivalIsFresh(stored, now) {
  if (stored === null || stored === '') return false;
  const at = Number(stored);
  return Number.isFinite(at) && at <= now && now - at < ARRIVE_FRESH_MS;
}

function _playArrival() {
  const began = performance.now();
  const context = _audioContext();
  const running = context.resume();
  _bufferFor(ARRIVE_FILE, context)
    .then((buffer) => {
      const late = performance.now() - began > ARRIVE_WITHIN_MS;
      if (late || context.state !== 'running') return null;
      return _start(context, running, buffer, 'arrive');
    })
    .catch((error) => {
      console.warn('[Sounds] The arrival sound did not play:', error);
    });
}

function _installArrival() {
  let stored = null;
  try {
    stored = sessionStorage.getItem(ARRIVE_KEY);
    sessionStorage.removeItem(ARRIVE_KEY);
  } catch (error) {
    console.warn('[Sounds] Could not read the arrival note:', error);
  }
  // The sound is fetched with the others, so it is at hand on the next page.
  _atHand.add(() => _fetchAhead([ARRIVE_FILE], 'arrival'));
  const leave = (event) => {
    const link = event.target?.closest?.('a[href]');
    if (!link || !event.isTrusted || event.button !== 0 || !_plain(event)) {
      return;
    }
    if (link.origin !== location.origin || link.target) return;
    if (link.hasAttribute('download')) return;
    // A place on this same page is not another page.
    const here = link.pathname === location.pathname;
    if (here && link.search === location.search) return;
    try {
      sessionStorage.setItem(ARRIVE_KEY, String(Date.now()));
    } catch (error) {
      console.warn('[Sounds] Could not leave the arrival note:', error);
    }
  };
  document.addEventListener('click', leave, true);
  // Back and Forward are not arrivals by a press: only a fresh visit counts.
  const how = performance.getEntriesByType('navigation')[0]?.type;
  if (how !== 'navigate' || !_soundsOn || !_mayStart()) return;
  if (arrivalIsFresh(stored, Date.now())) _playArrival();
}

// The switch's melody: Pachelbel's Canon in D, as the Mutopia Project's
// edition of his parts gives it ("Canon per 3 Violini e Basso", typeset by
// Michael Fischer v. Mollard, CC BY 4.0). Each time sounds come on, the
// chime plays the next beat in its own rhythm: 24 beats of the first violin
// alone, then 56 with all four parts, the bass an octave higher than
// written. The press after that hands over to the piece: the rest plays by
// itself, and the switch rests for 3 seconds before it can stop it. After
// the hand over, the next time sounds come on starts from the top again.
// A note is the chime played faster or slower. Times are in thirty-second
// notes, 8 to a beat; each violin comes in two bars after the one before it
// and plays the same line, then the first violin's ending or the start of it.
const CANON_LINE = [
  78, 8, 76, 8, 74, 8, 73, 8,
  71, 8, 69, 8, 71, 8, 73, 8,
  74, 8, 73, 8, 71, 8, 69, 8,
  67, 8, 66, 8, 67, 8, 64, 8,
  62, 4, 66, 4, 69, 4, 67, 4, 66, 4, 62, 4, 66, 4, 64, 4,
  62, 4, 59, 4, 62, 4, 69, 4, 67, 4, 71, 4, 69, 4, 67, 4,
  66, 4, 62, 4, 64, 4, 73, 4, 74, 4, 78, 4, 81, 4, 69, 4,
  71, 4, 67, 4, 69, 4, 66, 4, 62, 4, 74, 4, 74, 6, 73, 2,
  74, 2, 73, 2, 74, 2, 62, 2, 61, 2, 69, 2, 64, 2, 66, 2, 62, 2, 74, 2, 73, 2, 71, 2, 73, 2, 78, 2, 81, 2, 83, 2,
  79, 2, 78, 2, 76, 2, 79, 2, 78, 2, 76, 2, 74, 2, 73, 2, 71, 2, 69, 2, 67, 2, 66, 2, 64, 2, 67, 2, 66, 2, 64, 2,
  62, 2, 64, 2, 66, 2, 67, 2, 69, 2, 64, 2, 69, 2, 67, 2, 66, 2, 71, 2, 69, 2, 67, 2, 69, 2, 67, 2, 66, 2, 64, 2,
  62, 2, 59, 2, 71, 2, 73, 2, 74, 2, 73, 2, 71, 2, 69, 2, 67, 2, 66, 2, 64, 2, 71, 2, 69, 2, 71, 2, 69, 2, 67, 2,
  66, 4, 78, 4, 76, 12, 74, 4, 78, 8,
  83, 8, 81, 8, 83, 8, 85, 8,
  86, 4, 74, 4, 73, 12, 71, 4, 74, 8,
  74, 12, 74, 4, 74, 4, 79, 4, 76, 4, 81, 4,
  81, 2, 78, 1, 79, 1, 81, 2, 78, 1, 79, 1, 81, 1, 69, 1, 71, 1, 73, 1, 74, 1, 76, 1, 78, 1, 79, 1, 78, 2, 74, 1, 76, 1, 78, 2, 66, 1, 67, 1, 69, 1, 71, 1, 69, 1, 67, 1, 69, 1, 66, 1, 67, 1, 69, 1,
  67, 2, 71, 1, 69, 1, 67, 2, 66, 1, 64, 1, 66, 1, 64, 1, 62, 1, 64, 1, 66, 1, 67, 1, 69, 1, 71, 1, 67, 2, 71, 1, 69, 1, 71, 2, 73, 1, 74, 1, 69, 1, 71, 1, 73, 1, 74, 1, 76, 1, 78, 1, 79, 1, 81, 1,
  78, 2, 74, 1, 76, 1, 78, 2, 76, 1, 74, 1, 76, 1, 73, 1, 74, 1, 76, 1, 78, 1, 76, 1, 74, 1, 73, 1, 74, 2, 71, 1, 73, 1, 74, 2, 62, 1, 64, 1, 66, 1, 67, 1, 66, 1, 64, 1, 66, 1, 74, 1, 73, 1, 74, 1,
  71, 2, 74, 1, 73, 1, 71, 2, 69, 1, 67, 1, 69, 1, 67, 1, 66, 1, 67, 1, 69, 1, 71, 1, 73, 1, 74, 1, 71, 2, 74, 1, 73, 1, 74, 2, 73, 1, 71, 1, 73, 1, 74, 1, 76, 1, 74, 1, 73, 1, 74, 1, 71, 1, 73, 1,
  74, 8, 73, 8, 71, 8, 74, 8,
  62, 8, 62, 8, 62, 8, 64, 12,
  69, 8, 69, 8, 66, 8, 69, 8,
  67, 8, 66, 8, 67, 8, 76, 4,
  78, 2, 66, 2, 67, 2, 66, 2, 64, 2, 76, 2, 78, 2, 76, 2, 74, 2, 66, 2, 62, 2, 71, 2, 69, 2, 57, 2, 55, 2, 57, 2,
  59, 2, 71, 2, 73, 2, 71, 2, 69, 2, 57, 2, 55, 2, 57, 2, 59, 2, 71, 2, 69, 2, 71, 2, 73, 2, 61, 2, 59, 2, 61, 2,
  62, 2, 74, 2, 76, 2, 74, 2, 73, 2, 61, 2, 62, 2, 61, 2, 59, 2, 71, 2, 69, 2, 71, 2, 73, 2, 61, 2, 66, 2, 64, 2,
  62, 2, 74, 2, 76, 2, 79, 2, 78, 2, 66, 2, 69, 2, 78, 2, 74, 2, 79, 2, 78, 2, 79, 2, 76, 2, 69, 2, 67, 2, 69, 2,
  66, 2, 69, 2, 69, 2, 69, 2, 69, 2, 69, 2, 69, 2, 69, 2, 66, 2, 66, 2, 66, 2, 66, 2, 66, 2, 66, 2, 69, 2, 69, 2,
  67, 2, 67, 2, 67, 2, 74, 2, 74, 2, 74, 2, 74, 2, 74, 2, 74, 2, 74, 2, 71, 2, 71, 2, 69, 2, 69, 2, 76, 2, 73, 2,
  69, 2, 78, 2, 78, 2, 78, 2, 76, 2, 76, 2, 76, 2, 76, 2, 74, 2, 74, 2, 74, 2, 74, 2, 81, 2, 81, 2, 81, 2, 81, 2,
  83, 2, 83, 2, 83, 2, 83, 2, 81, 2, 81, 2, 81, 2, 81, 2, 83, 2, 83, 2, 83, 2, 83, 2, 85, 2, 73, 2, 73, 2, 73, 2,
  74, 2, 62, 1, 64, 1, 66, 2, 62, 2, 61, 2, 73, 1, 74, 1, 76, 2, 73, 2, 71, 2, 59, 1, 61, 1, 62, 2, 59, 2, 61, 2, 69, 1, 67, 1, 66, 2, 64, 2,
  62, 2, 67, 1, 66, 1, 64, 2, 67, 2, 66, 2, 62, 1, 64, 1, 66, 2, 69, 2, 67, 2, 71, 1, 69, 1, 67, 2, 66, 2, 64, 2, 69, 1, 67, 1, 66, 2, 64, 2,
  66, 2, 74, 1, 73, 1, 74, 2, 66, 2, 69, 2, 69, 1, 71, 1, 73, 2, 69, 2, 66, 2, 74, 1, 76, 1, 78, 2, 74, 2, 78, 2, 78, 1, 76, 1, 74, 2, 73, 2,
  71, 2, 71, 1, 69, 1, 71, 2, 73, 2, 74, 2, 78, 1, 76, 1, 74, 2, 78, 2, 79, 2, 74, 1, 73, 1, 71, 2, 71, 2, 69, 2, 64, 2, 69, 2, 69, 2,
  69, 12, 69, 4, 62, 12, 69, 4,
  67, 8, 69, 8, 67, 4, 62, 4, 62, 6, 61, 2,
  62, 4, 74, 4, 73, 8, 71, 8, 69, 8,
  62, 6, 64, 2, 66, 8, 71, 8, 64, 6, 64, 2,
  66, 6, 78, 2, 78, 2, 79, 2, 78, 2, 76, 2, 74, 6, 74, 2, 74, 2, 76, 2, 74, 2, 73, 2,
  71, 8, 74, 8, 74, 2, 72, 2, 71, 2, 72, 2, 69, 6, 69, 2,
  69, 6, 81, 2, 81, 2, 83, 2, 81, 2, 79, 2, 78, 6, 78, 2, 78, 2, 79, 2, 78, 2, 76, 2,
  74, 2, 72, 2, 71, 2, 72, 2, 69, 6, 69, 2, 67, 4, 74, 4, 73, 6, 73, 2,
  74, 4, 74, 8, 73, 8, 71, 8, 69, 8,
  67, 8, 66, 10, 64, 2, 64, 8,
  66, 4, 78, 8, 76, 4, 74, 4, 86, 8, 84, 4,
  83, 8, 86, 4, 81, 4, 83, 8, 81, 8,
  81, 8, 69, 6, 67, 2, 66, 8, 78, 6, 76, 2,
  74, 12, 74, 4, 74, 8, 73, 8,
];
const CANON_ENDING = [
  74, 4, 62, 4, 61, 4, 73, 4, 71, 4, 59, 4, 57, 4, 69, 4,
  67, 4, 79, 4, 78, 4, 66, 4, 64, 4, 71, 4, 64, 4, 76, 4,
  78, 4, 66, 4, 64, 4, 76, 4, 74, 4, 62, 4, 61, 4, 73, 4,
  71, 4, 83, 4, 81, 4, 69, 4, 67, 6, 76, 2, 69, 4, 69, 4,
  69, 32,
];
const CANON_ENDINGS = [33, 17, 1];
const CANON_GROUND = [50, 45, 47, 42, 43, 38, 43, 45];
const CANON_CHIME = 78;
const CANON_ENTRY = 64;
const CANON_END = 57 * 32;
const CANON_ALONE = 24;
const CANON_FINALE = 80;
const CANON_BEAT_S = 1.1;
const CANON_PARTS_DB = -7;
const CANON_REST_MS = 3000;
let _canonScore = null;
let _canonNext = 0;
let _canonPlaying = [];
let _canonRun = 0;

// Every note of the piece as [time, pitch, part]: parts 0 to 2 are the
// violins, 3 the bass.
function _canonNotes() {
  if (_canonScore) return _canonScore;
  _canonScore = [];
  CANON_ENDINGS.forEach((ending, violin) => {
    const line = CANON_LINE.concat(CANON_ENDING.slice(0, 2 * ending));
    let at = CANON_ENTRY * (violin + 1);
    for (let i = 0; i < line.length; i += 2) {
      _canonScore.push([at, line[i], violin]);
      at += line[i + 1];
    }
  });
  for (let at = 0; at < CANON_END - 32; at += 8) {
    _canonScore.push([at, CANON_GROUND[(at / 8) % 8] + 12, 3]);
  }
  _canonScore.push([CANON_END - 32, CANON_GROUND[0] + 12, 3]);
  return _canonScore;
}

/**
 * What a press of "on" plays, counted from the first since the Canon began.
 * @param {number} press - 0 for the first
 * @returns {{notes: Array<[number, number]>, alone: boolean,
 *   finale: boolean}} Each note as seconds after the press and a MIDI
 *   pitch; whether the first violin plays alone; whether it is the hand over
 */
export function canonPress(press) {
  const from = CANON_ENTRY + 8 * press;
  const alone = press < CANON_ALONE;
  const finale = press >= CANON_FINALE;
  const to = finale ? CANON_END : from + 8;
  const notes = _canonNotes()
    .filter(([at, , part]) => at >= from && at < to && (!alone || part === 0))
    .map(([at, pitch]) => [((at - from) * CANON_BEAT_S) / 8, pitch]);
  return { notes, alone, finale };
}

function _playCanon() {
  const press = canonPress(_canonNext);
  _canonNext = press.finale ? 0 : _canonNext + 1;
  if (press.finale) _restSwitch();
  const run = _canonRun;
  const levelDb = press.alone ? 0 : CANON_PARTS_DB;
  playMomentNotes('on', press.notes, CANON_CHIME, levelDb)
    .then((sources) => {
      if (run === _canonRun) _canonPlaying = sources;
      else for (const source of sources) source.stop();
    })
    .catch((error) => {
      console.warn('[Sounds] The on sound did not play:', error);
    });
}

// Turning sounds off stops every note the Canon has set, as the master
// fades out.
function _cutCanon() {
  _canonRun += 1;
  const at = _context ? _context.currentTime + MUTE_RAMP_S : 0;
  for (const source of _canonPlaying) source.stop(at);
  _canonPlaying = [];
}

// A button that is disabled loses keyboard focus, so the switch keeps it and
// says it is unavailable instead.
function _restSwitch() {
  const button = document.getElementById('sounds-switch');
  if (!button) return;
  button.setAttribute('aria-disabled', 'true');
  setTimeout(() => button.removeAttribute('aria-disabled'), CANON_REST_MS);
}

function _startSounds() {
  _useSounds(
    soundsStartOn({
      saved: _savedSounds(),
      reducedMotion: _prefers('(prefers-reduced-motion: reduce)'),
      moreContrast: _prefers('(prefers-contrast: more)'),
      forcedColors: _prefers('(forced-colors: active)'),
      forcedColorsCounts: FORCED_COLORS_COUNT,
    })
  );
  _installPressSounds();
  _installScrollTicks();
  _installTypingSounds();
  _installHoverSounds();
  _installArrival();
  _installFirstHand();
  const button = document.getElementById('sounds-switch');
  button?.addEventListener('click', () => {
    if (button.getAttribute('aria-disabled') === 'true') return;
    const on = !_soundsOn;
    _setSoundsOn(on);
    if (on) _playCanon();
  });
  // Leaving the page ends the Canon, so a page kept for Back does not bring
  // it back part way.
  window.addEventListener('pagehide', _cutCanon);
  // Back can show a page the browser kept as it was, from before the choice
  // was changed on a later page.
  window.addEventListener('pageshow', (event) => {
    if (!event.persisted) return;
    const saved = _savedSounds();
    if (saved === 'on' || saved === 'off') _useSounds(saved === 'on');
  });
}

if (typeof document !== 'undefined') _startSounds();
