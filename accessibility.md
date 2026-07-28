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

The site is plain HTML and CSS with no JavaScript, so it does not depend on scripting being available, and content stays readable at 400% zoom and with a user stylesheet applied.

## Technical specifications

Accessibility of this site relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:

- HTML
- WAI-ARIA
- CSS

These technologies are relied upon for conformance with the accessibility standards used.

## Limitations and alternatives

Despite my best efforts to ensure the accessibility of this site, there are some known limitations. Please contact me if you observe an issue not listed here.

1. **The Tactile Map Making Quick Reference Guide is only available as a PDF.** The [guide]({{ '/assets/docs/tactile-map-guide.pdf' | relative_url }}) is written partly for people who are blind and make tactile maps, which is exactly the audience a PDF serves worst. Its tagging and reading order have not yet been verified against PDF/UA. I intend to publish an HTML version of the guide alongside the PDF. Until then, please [ask for the guide's content in another format](https://github.com/BrennenJohnston) and I will send it as plain text or HTML.

2. **Video captions and transcripts are unverified.** The three-part [Custom Braille Card Embosser]({{ '/projects/braille-card-embosser/' | relative_url }}) series and the two [Charm Customizer]({{ '/projects/picture-charm-customizer/' | relative_url }}) videos are hosted on YouTube, and I have not confirmed that they carry accurate human-authored captions or a text transcript. Auto-generated captions are not sufficient, and without a transcript the videos are unusable for people who are deaf-blind. Every step shown in the videos is also written out on the project pages, so no build information exists only in video. Verified captions and published transcripts are planned.

3. **Photographs of prototypes carry alt text but no long descriptions.** Gallery images describe what is visible in one or two sentences. For a photo where the fine detail matters to you, please ask and I will describe it in as much depth as you need.

4. **Third-party model pages are outside my control.** Printables, MakerWorld, Thingiverse, and YouTube host the downloadable files, and their accessibility is set by those platforms. Every design is also published as source on GitHub, which can be browsed and downloaded as plain files.

## Assessment approach

I assessed the accessibility of this site by the following approaches:

- **Self-evaluation** against WCAG 2.2 level AA, including keyboard-only navigation, 400% zoom and 320 pixel reflow, Windows High Contrast Mode, and contrast measurement of every text and non-text pair used in the design.
- **Automated testing in continuous integration.** Every proposed change runs html-proofer for broken links and missing alternative text, pa11y-ci (axe-core and HTML_CodeSniffer) against the built site for WCAG 2.2 AA violations, and html-validate for markup validity.

This site has not been evaluated by an external accessibility auditor and has no formal third-party accessibility certification.

## Date

This statement was created on 27 July 2026.
