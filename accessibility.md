---
layout: page
title: Accessibility Statement
permalink: /accessibility/
---
This statement was written using the [W3C WAI Accessibility Statement Generator](https://www.w3.org/WAI/planning/statements/).

Brennen Johnston is committed to ensuring digital accessibility for people with disabilities. Everything published here is assistive technology, so a site that is hard to use would defeat its own purpose. I am continually improving the user experience for everyone and applying the relevant accessibility standards.

## Measures to support accessibility

I take the following measures to ensure the accessibility of this site:

- Include accessibility throughout internal policies for how projects are documented and published.
- Assign clear accessibility goals and responsibilities: every page must work without JavaScript, without a mouse, and without color perception.
- Employ formal accessibility quality assurance methods, including automated checks that run on every proposed change.

The site is assembled from pieces made by other people under licenses that allow reuse. Every piece and its author is listed on the [Credits page]({{ '/credits/' | relative_url }}), and the borrowed code was adapted, not rewritten, to meet the standards on this page.

## Conformance status

The [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) define requirements for designers and developers to improve accessibility for people with disabilities. They define three levels of conformance: Level A, Level AA, and Level AAA.

This site is **partially conformant with WCAG 2.2 level AA**. Partially conformant means that some parts of the content do not fully conform to the accessibility standard. The specific gaps are listed under Limitations and alternatives below.

## Feedback

I welcome your feedback on the accessibility of this site. Please let me know if you encounter an accessibility barrier:

- **On any project's model page.** Every project links to its listing on Printables, MakerWorld, or Thingiverse, and comments there reach me.
- **On GitHub.** Open an issue at [github.com/BrennenJohnston](https://github.com/BrennenJohnston) against this site's repository or the repository for the design you are using.

I try to respond to accessibility feedback within five business days.

## Compatibility with browsers and assistive technology

This site is designed to be compatible with current versions of Chrome, Edge, Firefox, and Safari on desktop and mobile, used with the screen readers, screen magnifiers, refreshable braille displays, speech input, and switch access built into or commonly used with those platforms.

The site is plain HTML and CSS. One small script adds optional sounds; every page works the same without it, and content stays readable at 400% zoom and with a user stylesheet applied.

## Sound

This site plays short sounds when you press a button or a link, point at a button with a mouse, scroll by hand, or type in the link code box. They are optional. The switch at the top of every page, "Sounds: on" or "Sounds: off", turns all of them off, and your choice is kept on your device. Sounds start off when your device asks for reduced motion or more contrast, or uses a Windows contrast theme.

Moving keyboard focus makes no sound, so the site does not talk over a screen reader, and nothing is told by sound alone. The [sounds page]({{ '/sounds/' | relative_url }}) lists every sound, when it plays, and what you get without it.

## Technical specifications

Accessibility of this site relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:

- HTML
- WAI-ARIA
- CSS

These technologies are relied upon for conformance with the accessibility standards used.

The site's typeface, M PLUS Rounded 1c, is served from this site under the SIL Open Font License, so no request goes to a font service.

## Limitations and alternatives

Despite my best efforts to ensure the accessibility of this site, there are some known limitations. Please contact me if you observe an issue not listed here.

1. **The PDF version of the Tactile Map Making Quick Reference Guide is not accessible.** Its tags mark no headings or tables, and its figures have no text alternatives. The same guide is published as a [web page]({{ '/tactile-map-guide/' | relative_url }}), which has all of its text and describes what the figures show. Please use the web page with a screen reader, a braille display or a magnifier.

2. **One video has no captions, and no video has a transcript.** The three-part [Custom Braille Card Embosser]({{ '/projects/braille-card-embosser/' | relative_url }}) series and the two [Charm Designer]({{ '/projects/picture-charm-customizer/' | relative_url }}) videos on YouTube carry captions I wrote or corrected myself. The 26-second assembly animation for the [Click Me switch]({{ '/projects/click-me-switch/' | relative_url }}) has speech but no captions yet. None of the videos has a text transcript, and without one a video is unusable for people who are deaf-blind. Every step shown in the videos is also written out in text: on the project pages for the Embosser and the Charm Designer, and in the Click Me's [assembly guide on GitHub](https://github.com/BrennenJohnston/click-me-solderless-hotswap-access-switch/blob/main/Documentation/ASSEMBLY.md). No build information exists only in video.

3. **Photographs of prototypes carry alt text but no long descriptions.** Gallery images describe what is visible in one or two sentences. For a photo where the fine detail matters to you, please ask and I will describe it in as much depth as you need.

4. **Third-party model pages are outside my control.** Printables, MakerWorld, Thingiverse, and YouTube host the downloadable files, and their accessibility is set by those platforms. Every design is also published as source on GitHub, which can be browsed and downloaded as plain files.

5. **Links inside sentences can be smaller than 44 by 44 pixels.** Links in the site's menu are at least 44 pixels tall, but a link inside a sentence keeps the size of its text. WCAG 2.2 allows this for links in a sentence, but they can still be hard to hit with a tremor or limited hand control. Zooming the page in makes them larger, and every link can be reached with the Tab key.

6. **The Sounds switch has not been checked with a screen reader yet.** Pressing it changes its visible text between "Sounds: on" and "Sounds: off". I have not yet confirmed that a screen reader says the change as it happens; the new text is on the button to read either way. I will test it with NVDA and update this statement.

## Assessment approach

I assessed the accessibility of this site by the following approaches:

- **Self-evaluation** against WCAG 2.2 level AA, including keyboard-only navigation, 400% zoom and 320 pixel reflow, Windows High Contrast Mode, and contrast measurement of every text and non-text pair used in the design.
- **Automated testing in continuous integration.** Every proposed change runs html-proofer for broken links and missing alternative text, pa11y-ci (axe-core and HTML_CodeSniffer) against the built site for WCAG 2.2 AA violations, and html-validate for markup validity.

This site has not been evaluated by an external accessibility auditor and has no formal third-party accessibility certification.

## Date

This statement was created on 27 July 2026 and updated on 10 November 2026.
