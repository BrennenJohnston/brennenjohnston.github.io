---
title: OpenSCAD Assistive Forge
date: 2026-06-15
status: prototype
categories: [communication, computer-access]
summary: "A free web app that runs OpenSCAD customizers in your browser: type text, preview in 3D, download and print, no install needed."
cover_image: /assets/images/projects/braille-sign-maker/braille-sign-customizer.jpg
cover_alt: "OpenSCAD Assistive Forge web app showing the braille sign customizer: a parameter panel on the left and a yellow 3D preview of a two-part sign reading CREATE TINKER TUESDAY, with the braille section angled on a stand."
links:
  - label: Live app (openscad-assistive-forge.pages.dev)
    url: https://openscad-assistive-forge.pages.dev/
  - label: "Source files on GitHub"
    url: https://github.com/BrennenJohnston/openscad-assistive-forge
  - label: Hackathon project collection on GitHub
    url: https://github.com/tanvibachu/GitHub-OS-AT-Hackathon-x-HuskyADAPT-UW
gallery:
  - image: /assets/images/projects/braille-card-maker/braille-card-customizer.jpg
    alt: "Braille Card Customizer tool page with a dropdown listing Braille Sign, Braille Card, and Braille Charm options."
    caption: One tool page covers braille signs, braille cards, and braille charms.
  - image: /assets/images/projects/braille-charm-maker/braille-charm-customizer.jpg
    alt: "Braille charm customizer showing the name Brennen translated to braille, with seven yellow charm previews standing on their sides in the 3D viewer."
    caption: The charm customizer running in the browser; the same OpenSCAD file also works in desktop OpenSCAD.
  - image: /assets/images/projects/picture-charm-customizer/svg-editor.jpg
    alt: "SVG preparation editor comparing an original rocket graphic to a simplified print version, next to a yellow 3D charm preview engraved with the rocket."
    caption: The SVG editing tool highlights individual line features so small details can be adjusted for printability. The rocket icon is by Iconatrenda from Noun Project, used under the Creative Commons Attribution 3.0 license.
help_wanted: "Try the Braille Card Designer (signs, cards, and charms) and the Charm Designer's drawing editing, and share what works and what doesn't, especially braille readability on your printer."
---
OpenSCAD Assistive Forge is a free web app that runs OpenSCAD customizers directly in your browser, with no install and no account, built to work with a keyboard, a screen reader, high contrast and a small screen. Open one of its built-in tools or your own OpenSCAD file, set the parameters, preview the model in 3D, and download the STL (stereolithography) model file for a 3D printer, or a flat file for a laser cutter. Everything runs on your device: nothing you type or upload leaves your browser, and braille translation uses [Liblouis](https://liblouis.io/), the open-source braille translator.

It opens by asking which interface you want: Assistive Forge, a guided layout for screen readers, keyboard use and people new to OpenSCAD, in light, dark and high-contrast themes; or Classic, the layout of the desktop OpenSCAD program, for people who already know it. A design can be shared as one link that opens it ready to customize, as the links on the [Parametric Plug Puller]({{ '/projects/plug-puller/' | relative_url }}) page do, and the app can be installed from the browser to work offline.

## What's in it

The Forge's main page offers two built-in tools, each with its own project page here.

- **[Braille Card Designer]({{ '/projects/braille-card-customizer/' | relative_url }})**: turns text into a [Liblouis](https://liblouis.io/) braille translation, with a Sign / Card / Charm selector choosing between tactile signs, braille cards, and bracelet charms, and a braille editor that takes hand corrections and six-key entry.
- **[Charm Designer]({{ '/projects/picture-charm-customizer/' | relative_url }})**: bracelet clip charms, flat pendants and logo plates carrying picture symbols instead of braille, from a built-in symbol library or your own SVG (scalable vector graphics) drawing or photo, with a built-in drawing-editing step.

Every tool is an ordinary OpenSCAD file underneath (the braille variants come from the [braille-sign-openscad](https://github.com/BrennenJohnston/braille-sign-openscad), [braille-wedge-card-openscad](https://github.com/BrennenJohnston/braille-wedge-card-openscad), and [braille-charm-openscad](https://github.com/BrennenJohnston/braille-charm-openscad) repositories), so each one also works in desktop OpenSCAD's Customizer if you prefer working offline.

The Charm Designer is the work of Nasif Zaman, Duy Do (UW WOOF3D) and [HuskyADAPT](https://www.huskyadapt.me.uw.edu/our-mission); I build and maintain the Forge itself.

## Why it exists

This project started as a request to recreate a discontinued AAC (augmentative and alternative communication) product called a "Q-Charm", a bracelet of small picture charms used for communication and task prompts. The idea developed through several hands: an individual design request from job coaches at a university employment program was first taken on by a 3D print club student ([early design on Thingiverse](https://www.thingiverse.com/thing:7153594)), then iterated through hackathons including the Adaptive Solutions Mini-Hackathon with CREATE (the University of Washington's Center for Research and Education on Accessible Technology and Experiences), HuskyADAPT, and King County Library System, and the GitHub Open Source Assistive Technology Hackathon. Along the way the goal grew from one charm design into a general web front-end for OpenSCAD assistive design tools.
