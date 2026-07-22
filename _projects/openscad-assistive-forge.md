---
title: OpenSCAD Assistive Forge
date: 2026-06-15
status: prototype
categories: [communication, computer-access]
summary: A free web app for customizing 3D-printable braille signs, cards, and charm bracelets — type text, preview in 3D, download and print.
cover_image: /assets/images/projects/openscad-assistive-forge/braille-sign-printed.jpg
cover_alt: "3D-printed tactile sign reading CREATE TINKER TUESDAY in raised black letters, with a braille translation section below the text."
links:
  - label: Live app (openscad-assistive-forge.pages.dev)
    url: https://openscad-assistive-forge.pages.dev/
  - label: GitHub
    url: https://github.com/BrennenJohnston/openscad-assistive-forge
  - label: Thingiverse (early charm design)
    url: https://www.thingiverse.com/thing:7153594
  - label: Hackathon project collection on GitHub
    url: https://github.com/tanvibachu/GitHub-OS-AT-Hackathon-x-HuskyADAPT-UW
gallery:
  - image: /assets/images/projects/openscad-assistive-forge/braille-sign-customizer.jpg
    alt: "OpenSCAD Assistive Forge web app showing the braille sign customizer: a parameter panel on the left and a yellow 3D preview of a two-part sign reading CREATE TINKER TUESDAY, with the braille section angled on a stand."
    caption: The braille sign customizer translates text with Liblouis and splits raised letters and braille into separate printable sections.
  - image: /assets/images/projects/openscad-assistive-forge/braille-sign-slicer.jpg
    alt: "Slicer preview of the sign's two parts on a print bed: the lettered plate lying flat and the braille section standing at an angle with support fins."
    caption: The braille section prints at 75 degrees with quick-removal support fins for better braille dome quality on FDM printers.
  - image: /assets/images/projects/openscad-assistive-forge/braille-card-customizer.jpg
    alt: "Braille Card Customizer tool page with a dropdown listing Braille Sign, Braille Card, and Braille Charm options."
    caption: One tool page covers braille signs, braille cards, and braille charms.
  - image: /assets/images/projects/openscad-assistive-forge/braille-charm-customizer.jpg
    alt: "Braille charm customizer showing the name Brennen translated to braille, with seven yellow charm previews standing on their sides in the 3D viewer."
    caption: Charms are automatically oriented on their side for better braille dot printing, and rotated so they read correctly on a bracelet.
  - image: /assets/images/projects/openscad-assistive-forge/braille-charm-bracelet.jpg
    alt: "Purple silicone bracelet fitted with seven light-blue 3D-printed charms, each showing braille dots for one letter."
    caption: A printed braille name bracelet made with the charm customizer.
  - image: /assets/images/projects/openscad-assistive-forge/svg-editor.jpg
    alt: "SVG preparation editor comparing an original rocket graphic to a simplified print version, next to a yellow 3D charm preview engraved with the rocket."
    caption: The SVG editing tool highlights individual line features so small details can be adjusted for printability.
  - image: /assets/images/projects/openscad-assistive-forge/symbol-charm-bracelet.jpg
    alt: "Green bracelet with black square charms showing a sad face, a thumbs up, a question mark, and an angry face."
    caption: A communication charm bracelet made with the charm customizer.
  - image: /assets/images/projects/openscad-assistive-forge/task-charm-bracelet.jpg
    alt: "Red bracelet with numbered yellow and red square charms worn as a task list; the first charm shows a hearing aid and the second a microphone."
    caption: A task-list charm bracelet made by an assistive technology paraeducator for a student who is hard of hearing.
  - image: /assets/images/projects/openscad-assistive-forge/task-charm-strip.jpg
    alt: "Row of seven square charms before assembly: numbered yellow charms 1 to 4 showing a hearing aid, a microphone, a chain link, and a charging plug, separated by red decorative charms."
    caption: The four numbered task charms before assembly.
help_wanted: "Try the new braille tools (sign, card, and charm customizers) and the SVG editing feature, and share what works and what doesn't — especially braille readability on your printer."
---
OpenSCAD Assistive Forge is a working web app prototype for customizing 3D-printable assistive designs directly in your browser. It currently includes a braille sign customizer, a braille card customizer, and braille and SVG charm customizers. Braille translation runs on your device using [Liblouis](https://liblouis.io/), the open-source braille translator.

## Why it exists

This project started as a request to recreate a discontinued AAC (augmentative and alternative communication) product called a "Q-Charm" — a bracelet of small picture charms used for communication and task prompts. The idea developed through several hands: an individual design request from job coaches at a university employment program was first taken on by a 3D print club student ([early design on Thingiverse](https://www.thingiverse.com/thing:7153594)), then iterated through hackathons including the Adaptive Solutions Mini-Hackathon with CREATE, HuskyADAPT, and KCLS, and the GitHub Open Source Assistive Technology Hackathon.

## What the braille tools do

The braille sign customizer automatically splits the raised letters and the braille into separate sections. An optional border makes the two pieces look and feel like one continuous sign after gluing. The braille section is angled at 75 degrees and includes quick-removal support fins, which together make braille dots print much better on FDM printers.

The braille charm customizer orients each charm on its side for better dot quality and rotates the braille so that charms read correctly when placed on a bracelet.

## A real-world example

A paraeducator working in audiology and assistive technology, Daniel K., used the charm customizer to make a task-list charm bracelet for a student who is hard of hearing. The numbered charms are a visual reminder to put on their hearing aid, get the teacher's DM microphone, connect it wirelessly to the hearing aid, and charge it at the end of the school day. Daniel shared the charm photos above for public use.

<!-- TODO(owner): confirm you are comfortable naming Daniel K. and the role description above; the photos were explicitly shared for public use. -->
