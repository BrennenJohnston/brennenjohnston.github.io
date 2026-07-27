---
title: OpenSCAD Assistive Forge
date: 2026-06-15
status: prototype
categories: [communication, computer-access]
summary: "A free web app that runs OpenSCAD customizers in your browser: type text, preview in 3D, download and print, no install needed."
cover_image: /assets/images/projects/openscad-assistive-forge/braille-sign-customizer.jpg
cover_alt: "OpenSCAD Assistive Forge web app showing the braille sign customizer: a parameter panel on the left and a yellow 3D preview of a two-part sign reading CREATE TINKER TUESDAY, with the braille section angled on a stand."
links:
  - label: Live app (openscad-assistive-forge.pages.dev)
    url: https://openscad-assistive-forge.pages.dev/
  - label: GitHub
    url: https://github.com/BrennenJohnston/openscad-assistive-forge
  - label: Hackathon project collection on GitHub
    url: https://github.com/tanvibachu/GitHub-OS-AT-Hackathon-x-HuskyADAPT-UW
gallery:
  - image: /assets/images/projects/openscad-assistive-forge/braille-card-customizer.jpg
    alt: "Braille Card Customizer tool page with a dropdown listing Braille Sign, Braille Card, and Braille Charm options."
    caption: One tool page covers braille signs, braille cards, and braille charms.
  - image: /assets/images/projects/openscad-assistive-forge/braille-charm-customizer.jpg
    alt: "Braille charm customizer showing the name Brennen translated to braille, with seven yellow charm previews standing on their sides in the 3D viewer."
    caption: The charm customizer running in the browser; the same OpenSCAD file also works in desktop OpenSCAD.
  - image: /assets/images/projects/openscad-assistive-forge/svg-editor.jpg
    alt: "SVG preparation editor comparing an original rocket graphic to a simplified print version, next to a yellow 3D charm preview engraved with the rocket."
    caption: The SVG editing tool highlights individual line features so small details can be adjusted for printability.
help_wanted: "Try the braille tools (sign, card, and charm customizers) and the SVG editing feature, and share what works and what doesn't, especially braille readability on your printer."
---
OpenSCAD Assistive Forge is a working web app prototype that runs OpenSCAD customizers for assistive designs directly in your browser, with no install and no account. Pick a tool, set the parameters, preview the model in 3D, and download the STL. Braille translation runs on your device using [Liblouis](https://liblouis.io/), the open-source braille translator.

## What's in it

The Forge currently hosts these design tools, each with its own project page.

The **braille tool** turns text into a [Liblouis](https://liblouis.io/) braille translation, with three variations:

- **[Braille Sign Maker]({{ '/projects/braille-sign-maker/' | relative_url }})** — tactile signs with raised letters and a braille translation, split into printable sections with an angled braille stand.
- **[Braille Card Maker]({{ '/projects/braille-card-maker/' | relative_url }})** — braille business cards, labels, and tags on the repo's original wedge-card design.
- **[Braille Charm Maker]({{ '/projects/braille-charm-maker/' | relative_url }})** — bracelet charms carrying braille letters, for name bracelets and wearable braille labels.

A separate, independent tool handles pictures instead of braille:

- **[Charm Customizer]({{ '/projects/picture-charm-customizer/' | relative_url }})** — bracelet charms made from SVG graphics, for communication aids and task-list prompts, with a built-in SVG editing step.

Every tool is an ordinary OpenSCAD file underneath — the braille tools come from the [braille-wedge-card-openscad](https://github.com/BrennenJohnston/braille-wedge-card-openscad), [braille-sign-openscad](https://github.com/BrennenJohnston/braille-sign-openscad), and [braille-charm-openscad](https://github.com/BrennenJohnston/braille-charm-openscad) repos — so each one also works in desktop OpenSCAD's Customizer if you prefer working offline.

## Why it exists

This project started as a request to recreate a discontinued AAC (augmentative and alternative communication) product called a "Q-Charm", a bracelet of small picture charms used for communication and task prompts. The idea developed through several hands: an individual design request from job coaches at a university employment program was first taken on by a 3D print club student ([early design on Thingiverse](https://www.thingiverse.com/thing:7153594)), then iterated through hackathons including the Adaptive Solutions Mini-Hackathon with CREATE, HuskyADAPT, and KCLS, and the GitHub Open Source Assistive Technology Hackathon. Along the way the goal grew from one charm design into a general web front-end for OpenSCAD assistive design tools.
