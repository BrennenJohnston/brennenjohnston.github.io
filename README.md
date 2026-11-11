# DIY Assistive Technology created by Brennen

A free, accessible static website showcasing open-source 3D-printed assistive technology by Brennen Johnston, lead of WATAP's 3D Printed Assistive Technology Program. The site presents ready-to-print devices, works in progress seeking collaboration, and completed custom builds, plus a curated hub of assistive technology maker resources.

Built with [Jekyll](https://jekyllrb.com/) and hosted for free on GitHub Pages. There is one small script, for optional sounds; there is no build pipeline to maintain and no framework: adding a project is just adding one Markdown file.

## Adding or editing projects

See **[HOW-TO-ADD-A-PROJECT.md](HOW-TO-ADD-A-PROJECT.md)**, a step-by-step guide that uses only the github.com web editor in your browser.

## How this site is built

The look of this site is a collage of pieces other people made and shared under licenses that allow reuse. I chose the pieces and set their colors, sizes and names; the design itself was not written from scratch. The page is light sky glass with a thin dark edge and a white line inside it, the way Windows 7 drew its windows, so the leaves and bubbles of the photograph show through the frame, the title banner and the glossy nav buttons. Every paragraph sits on a deep blue reading pane inside its window, and the titles and buttons on the glass carry a dark glow behind their letters, which is what keeps them readable over the photograph. The home page shows the latest projects as tiles, the smaller boxes in rows, and the categories as round glossy bubbles.

| Piece | By | License |
| --- | --- | --- |
| The glass windows, [7.css](https://khang-nd.github.io/7.css/) | Khang Nguyen Duy | MIT License |
| The box layout, [Cyanobacteria](https://ribo.zone/free/layouts/) | ribo.zone | ribo.zone's terms of use |
| The page templates, [Minima](https://github.com/jekyll/minima) | Parker Moore and the minima contributors | MIT License |
| The typeface, [M PLUS Rounded 1c](https://fonts.google.com/specimen/M+PLUS+Rounded+1c) | Coji Morishita and the M+ Fonts Project | SIL Open Font License 1.1 |
| The icons, [Nuvola](http://web.archive.org/web/20090831103737/http://www.icon-king.com/projects/nuvola/) | David Vignoni | GNU LGPL 2.1 |
| The bubble wallpaper, [Bubble Rain](https://www.flickr.com/photos/44124348109@N01/10525957/), edited for brightness and color | Steve Jurvetson | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) |
| The feed link, [jekyll-feed](https://github.com/jekyll/jekyll-feed) | Ben Balter and jekyll-feed contributors | MIT License |
| The skip link and the hidden heading, [a11y-boilerplate](https://github.com/jbmoelker/a11y-boilerplate) | Jasper Moelker | MIT License |
| The two KEMi symposium photographs on the collaborations page | Kren Engineering-based Medicine Initiative (KEMi), University of Washington | used with KEMi's permission |
| The button sound, two cork pops, [cork.aif](https://freesound.org/people/Traveler/sounds/13635/) and [cork2.aif](https://freesound.org/people/Traveler/sounds/14634/) | Traveler | CC BY 4.0 |
| The link sound, a water drip, [RBH_Household_drip 02.wav](https://freesound.org/people/RHumphries/sounds/1014/) | RHumphries | CC BY 4.0 |
| The arrival sound, [Dropping tiny pebble in still water surface](https://freesound.org/people/jorickhoofd/sounds/160119/) | jorickhoofd | CC BY 4.0 |
| The scroll sound, a laptop's disc drive spinning, [20081117kijjaz-PowerBookCDROM01.wav](https://freesound.org/people/kijjaz/sounds/63249/) | kijjaz | CC0 |
| The sound at the top and bottom of a page, [Glass Being Set on Counter.wav](https://freesound.org/people/jpkweli/sounds/154773/) | jpkweli | CC0 |
| The auto scroll sound, a bamboo stick swished, [Whoosh](https://freesound.org/people/qubodup/sounds/60013/) | qubodup | CC0 |
| The typing sound, a pen click, [Pen Clicks-GAIN_01.wav](https://freesound.org/people/XxBirdoxX/sounds/52283/) | XxBirdoxX | CC0 |
| The sound for pointing at a button, a drip recorded under water, [Dripping.wav](https://freesound.org/people/digifishmusic/sounds/46934/) | digifishmusic | CC BY 4.0 |
| The sound for turning sounds on, from the [Oxygen sound theme](https://github.com/KDE/oxygen-sounds) | Nuno Filipe Povoa | GNU LGPL 3.0 or later |
| The notes of the switch's tune, [Canon per 3 Violini e Basso](https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=2047), Pachelbel, typeset by Michael Fischer v. Mollard | Mutopia Project | CC BY 4.0 |

The project photographs are my own; the two symposium photographs on the collaborations page are KEMi's. The footer of every page names each author, and the Credits page (`credits.md`, published at /credits/) lists every piece with its license.

- **The untouched copies.** Every borrowed file is kept exactly as it was downloaded, with its license, in `vendor/pristine/`, which is left out of the published site. `vendor/pristine/PROVENANCE.md` records each piece's source, author, license, the date it was fetched, its SHA-256 hash, and where its adapted copy lives.
- **The adapted copies.** The site itself uses copies: the stylesheets in `assets/css/borrowed/` and `assets/css/fonts.css`, and Minima's templates in `_layouts/` and `_includes/`. Each borrowed stylesheet begins with a comment that lists every change from the original, and PROVENANCE.md lists the changes to the templates.
- **The rule for code.** Pieces are copied, and only their values, names and paths change. A line that had to be newly written is in the ledger below, and I approved each one before it went in.

| Line | What it does | Where |
| --- | --- | --- |
| L1 | Tells screen readers which nav link is the current page | `_includes/header.html` |
| L4 | Links the projects feed from each page's head | `_includes/head.html` |
| L9 | The breadcrumb on project and category pages | `_layouts/project.html`, `_includes/category-page.html` |
| L10 | Forwards the four old addresses to their new pages | `_includes/head.html`, `_layouts/redirect.html` |
| L11 | Names the site nav "Main" | `_includes/header.html` |
| L12 | Sets the home page's boxes side by side | `assets/css/borrowed/cyanobacteria.css` |
| L13 | Makes list links, card titles and the site title at least 44 px tall | `assets/css/borrowed/cyanobacteria.css` |
| L14 | Lets a long word break in the main column, so no page scrolls sideways at 320 px | `assets/css/borrowed/cyanobacteria.css` |
| L15 | Sets the text outside the glass windows to 17 px at weight 500 | `assets/css/borrowed/cyanobacteria.css` |
| L16 | Gives three links that stand alone in a paragraph Minima's `post-link` class | `_layouts/project.html`, `_includes/category-page.html`, `_includes/footer.html`, `_includes/home-sidebar.html` |
| L17 | Keeps a wrapped list link's bullet beside its first line | `assets/css/borrowed/cyanobacteria.css` |
| L18 | Keeps each photo's shape now that it carries its width and height | `assets/css/borrowed/cyanobacteria.css` |
| L19 | The look's settings: the sky glass, the frame, the boxes, the pills, the panes, the two-tone edge, the lift, the gloss and the glows | `assets/css/borrowed/cyanobacteria.css` |
| L20 | Puts the glow behind the words on the glass and the lift and gloss on the frame, the banner, the nav and the boxes | `assets/css/borrowed/cyanobacteria.css` |
| L21 | The title banner | `assets/css/borrowed/cyanobacteria.css` |
| L22 | The glossy nav buttons with their icons at the left | `assets/css/borrowed/cyanobacteria.css` |
| L23 | Makes the window titles bold and at least 19 px, so they count as large text | `assets/css/borrowed/cyanobacteria.css` |
| L24 | The reading panes under the footer's words and the breadcrumb, and no glass inside a pane | `assets/css/borrowed/cyanobacteria.css` |
| L25 | The denser glow on titles, and no glow on a pane or in the code box | `assets/css/borrowed/cyanobacteria.css` |
| L26 | The banner heading over the project tiles | `assets/css/borrowed/cyanobacteria.css` |
| L27 | Makes every piece of glass solid when the reader asks for more contrast | `assets/css/borrowed/cyanobacteria.css`, `assets/css/borrowed/7css.css` |
| L28 | Marks the home page's project tiles as a list for screen readers once their bullets are hidden | `index.md` |
| L29 | The latest projects as tiles in a row | `assets/css/borrowed/cyanobacteria.css` |
| L30 | The home page's smaller boxes in rows, and the update log across the width | `assets/css/borrowed/cyanobacteria.css` |
| L31 | The categories as round glossy bubbles | `assets/css/borrowed/cyanobacteria.css` |
| L32 | Shows a project page's cover photo, status sections, help request and photo gallery only when the project has them | `_layouts/project.html` |
| L33 | Shows a project card's photo and category links only when the project has them | `_includes/project-card.html` |
| L34 | Shows a project's "Get the files" section only when it has links | `_includes/project-links.html` |
| L35 | Shows a section's sentence and its project cards, or its empty message when it has none | `_includes/project-list.html` |
| L36 | Shows each status section of a category page only when it has projects, and a message when the category has none | `_includes/category-page.html` |
| L37 | Aligns the Tactile Map guide's row headers to the left at normal weight, like the PDF | `assets/css/borrowed/cyanobacteria.css` |
| L38 | Names the sound files for a button press, a link press and typing | `assets/js/sound.js` |
| L39 | Names the sound files for a scroll tick and for the top and bottom of a page | `assets/js/sound.js` |
| L40 | Builds a press sound's address | `assets/js/sound.js` |
| L41 | Plays a press sound's takes in turn, so a repeated press does not repeat one recording | `assets/js/sound.js` |
| L42 | Says which links count as big buttons: the menu, the site's title, a project's title, a category bubble | `assets/js/sound.js` |
| L43 | Names the switch's two texts and the one thing the browser remembers | `assets/js/sound.js` |
| L44 | Decides whether sounds start on: a saved choice first, then off for reduced motion, more contrast or a contrast theme | `assets/js/sound.js` |
| L45 | Reads the device's preferences and the saved choice | `assets/js/sound.js` |
| L46 | Asks for the press sounds ahead of the first press, and writes the switch's text | `assets/js/sound.js` |
| L47 | Puts a choice to work, and saves it when the switch is pressed | `assets/js/sound.js` |
| L48 | Finds what a press landed on, and tells a plain press from one made with a modifier key | `assets/js/sound.js` |
| L49 | Plays a press sound | `assets/js/sound.js` |
| L50 | Listens for presses by mouse, touch and keyboard, one sound to a press | `assets/js/sound.js` |
| L51 | Starts everything up, answers the switch, and keeps a page shown again by Back in step with the choice | `assets/js/sound.js` |
| L52 | Starts the script only in a browser | `assets/js/sound.js` |
| L53 | Loads the script | `_includes/head.html` |
| L54 | The Sounds switch, hidden until the script runs | `_includes/header.html` |
| L55 | Makes the switch at least 44 px tall | `assets/css/borrowed/cyanobacteria.css` |
| L56 | The scroll tick's settings: one tick for every 40 px, at most one every 70 ms | `assets/js/sound.js` |
| L57 | Holds every sound back until the visitor has pressed something, as browsers require | `assets/js/sound.js` |
| L58 | Plays a scroll tick and the sound for the top and bottom of a page | `assets/js/sound.js` |
| L59 | Listens for scrolling by hand and tells it from a scroll the page makes by itself | `assets/js/sound.js` |
| L60 | Plays a pen click for each change in the link code box | `assets/js/sound.js` |
| L61 | Starts the scroll and typing sounds | `assets/js/sound.js` |
| L62 | The arrival sound: a note left at a press and read by the page it leads to | `assets/js/sound.js` |
| L63 | Starts the arrival sound | `assets/js/sound.js` |
| L64 | Fetches the sounds at the first sign of a hand, not as the page loads, so pages stay light | `assets/js/sound.js` |
| L65 | Asks for that fetch when sounds are turned on | `assets/js/sound.js` |
| L66 | Adds the arrival sound to that fetch | `assets/js/sound.js` |
| L67 | Starts listening for the first sign of a hand | `assets/js/sound.js` |
| L68 | The sound for pointing at a button: a quiet drip as the mouse comes onto one | `assets/js/sound.js` |
| L69 | The switch's first tune, eight notes; removed when the Canon replaced it | none |
| L70 | Lets the switch's sound play slower, and so lower | `assets/js/sound.js` |
| L71 | The pointing sound's level, and its start | `assets/js/sound.js` |
| L72 | Keeps an audio player inside a narrow page | `assets/css/borrowed/cyanobacteria.css` |
| L73 | Each sound's player on the sounds page: its label, the browser's own player and its caption | `sounds.md` |
| L74 | A captions track in each player, with its caption file | `sounds.md`, `assets/sounds/captions/` |
| L75 | Plays one sound as many notes, each at its own time and pitch, so they can be stopped together | `assets/js/sound.js` |
| L76 | What the Canon on the switch is, its numbers, and what the script remembers between presses | `assets/js/sound.js` |
| L77 | The Canon's notes as numbers, from the Mutopia Project's edition | `assets/js/sound.js` |
| L78 | Builds the piece from those numbers, works out what each press plays, plays it, stops it, and rests the switch for 3 seconds | `assets/js/sound.js` |
| L79 | Turning sounds off, or leaving the page, stops the Canon, and the switch waits out its rest | `assets/js/sound.js` |
| L80 | Greys the switch while it rests, with 7.css's own look for a disabled button | `assets/css/borrowed/cyanobacteria.css` |
| L81 | The Canon a bar per press; removed when a beat per press came back | none |
| L82 | Plays the Canon a beat per press with shorter stages: 8 single notes, then 16 beats as the other parts come in, and the rest of the piece from press 25 | `assets/js/sound.js` |
| L83 | The auto scroll sound's own level, 14 dB under a button press | `assets/js/sound.js` |
| L84 | Plays a bamboo swish again and again while the mouse wheel's auto scroll moves the page, lower going down and higher going up | `assets/js/sound.js` |
| L85 | The auto scroll sound's player on the sounds page, with its caption file | `sounds.md`, `assets/sounds/captions/` |

The missing numbers were never needed in the site: licensed pieces covered L2, L6 and L7, L3 and L5 were dropped, and L8 was a one-off script outside the site. L19 to L31 came in a second pass, after I tested the first version and wanted the light glass and the arrangement of the site I took inspiration from back without losing the accessibility work. L32 to L36 are 18 condition and loop lines the project templates have had since July 2026, before this ledger began; I approved them as they stand. L37 came with the Tactile Map guide page. L38 to L82 came with the sounds in November 2026. The sound script is cut down from one I wrote for the OpenSCAD Assistive Forge; the lines it shares with that project are my own and have no numbers, and the numbered lines are the ones written or reshaped for this site.

- **Adding a piece.** First save it untouched, with its license text, in `vendor/pristine/`; then add its row to `vendor/pristine/PROVENANCE.md`; then add its author to `_data/credits.yml`, so the footer and the Credits page name them; only then use it in a stylesheet or a template.
- **Photo sizes.** `_data/image-sizes.yml` holds every project photo's width and height, so a page holds each photo's space while it loads. A new photo missing from that list still shows, just without the held space; to add it, copy an entry with the photo's path, width and height.

## Site structure

```
├── _config.yml            # Site settings (title, URL, collections, feed)
├── index.md               # Home page
├── projects.md            # All projects, grouped by status (/projects/)
├── collaborations.md      # Partners and contributors, prose only (/collaborations/)
├── resources.md           # Resource Hub (curated AT maker resources)
├── about.md               # Bio, profile links, contact
├── accessibility.md       # Accessibility statement (/accessibility/)
├── credits.md             # Credits: every borrowed piece and its author (/credits/)
├── sounds.md              # Every sound: when it plays, why, and who recorded it (/sounds/)
├── 404.html               # Page-not-found page
├── _projects/             # ONE FILE PER DEVICE: this is where projects live
├── projects/category/     # One stub per category (/projects/category/<name>/)
├── guides/
│   └── onshape-quick-start.md   # Beginner CAD guide (/guides/onshape/)
├── _data/                 # Credits, project statuses, categories, photo sizes
├── _layouts/              # Page templates adapted from Minima (default, home, page, project, redirect)
├── _includes/             # Head, header, footer, project card/links/list, home sidebar, category page
├── .github/workflows/     # Pull-request QA checks (links, a11y, markup)
├── vendor/pristine/       # Untouched copies of every borrowed piece, with PROVENANCE.md (not published)
└── assets/
    ├── css/fonts.css      # The typeface's font faces
    ├── css/borrowed/      # The adapted stylesheets: 7.css, Cyanobacteria, a11y-boilerplate
    ├── fonts/             # M PLUS Rounded 1c, self-hosted, with its license
    ├── js/sound.js        # The one script: optional sounds and their switch
    ├── sounds/            # The sound files, with their notice, licenses and captions
    ├── docs/              # PDFs (tactile map guide)
    └── images/
        ├── icons/nuvola/  # Nuvola icons, with their license
        ├── collaborations/   # The two KEMi symposium photographs
        ├── site/          # The Bubble Rain wallpaper and its edit settings
        └── projects/<slug>/   # Photos, one folder per project
```

Project cards render only on `/`, `/projects/`, and `/projects/category/*`. Organisation
descriptions live only on `/collaborations/`, and third-party link listings only on
`/resources/`. Everywhere else links out instead of repeating, so the same facts do not
drift apart in two places.

## Accessibility

The site targets WCAG 2.2 AA: semantic HTML with landmarks and a skip link, one `h1` per page, alt text on every meaningful image, each project's status written out in words, 4.5:1+ text contrast and 3:1+ for borders and outlines (measured on the rendered pages and over the lightest and darkest parts of the wallpaper photograph), 44px+ targets for every link or button that stands on its own, a 3px white focus ring with a black halo, glass that turns opaque when the reader asks for more contrast, box borders and a system focus ring that stay visible in Windows High Contrast Mode, text of at least 17px at weight 500, reflow down to 320px (400% zoom), and nothing that moves.

The published statement, including known exceptions, is at [/accessibility/](accessibility.md).

## Quality checks

`.github/workflows/qa.yml` runs on pull requests:

| Tool | What it catches |
| --- | --- |
| html-proofer | Broken internal links, missing images, missing alt text |
| pa11y-ci (axe-core + HTML_CodeSniffer) | WCAG 2.2 AA violations in the built pages |
| html-validate | Invalid markup |

External links are checked by a separate weekly job, because Thingiverse, MakerWorld, and Printables block datacenter IP addresses and would fail every pull request for reasons unrelated to the change.

Two rules are deliberately relaxed, both because a tool cannot see what a human can:

- `axe/color-contrast` is off in `.pa11yci`. Every surface in this design is translucent glass over the wallpaper photograph, drawn with gradient and pseudo-element layers, so axe reports that it cannot determine the background of text on the glass. Contrast was measured instead, in two ways. A script composites each color pair over the photograph's lightest and darkest parts, and a second tool reads the rendered pages and compares every piece of text with the pixels within 2 px of its letters, glows included, which is what a reader sees: every text pair is at least 4.5:1 (large titles at least 3:1, the lowest 3.09:1 on the light glass with its glow) and every box edge at least 3:1 (the lowest 3.29:1, the better of the dark line and the white line inside it). The two stylesheets for the glass and the layout, in `assets/css/borrowed/`, list their changes and the measured ratios in their header comments.
- `no-redundant-role` is off in `.htmlvalidate.json`. `role="list"` on a `<ul>` is redundant per spec, but it is the standard workaround for Safari and VoiceOver dropping list semantics from a list styled with `list-style: none`.

Run them locally with `bundle exec jekyll build`, then `bundle exec htmlproofer ./_site --disable-external` and `npx html-validate "_site/**/*.html"`.

## Deployment

Hosted on GitHub Pages with the native Jekyll build (no Actions workflow needed):

1. Push to the `main` branch.
2. Repository Settings → Pages → Source: "Deploy from a branch" → `main` / root.
3. After the first deploy, set `url:` in `_config.yml` to the live URL (and `baseurl:` to `/<repo-name>` if the repo is not `<username>.github.io`).

Local preview is optional and requires Ruby: `bundle install && bundle exec jekyll serve`.

## Future enhancement ideas (not built yet)

- Client-side category filter buttons on the Projects page (progressive-enhancement JavaScript).
- Dark mode via `prefers-color-scheme` (needs a second round of contrast checks).
- A CMS admin panel (e.g. Decap CMS) if browser Markdown editing ever feels limiting.
- A custom domain (works with GitHub Pages for just the domain registration cost).
- Site search (e.g. Pagefind; it would require moving to a GitHub Actions build).
