---
title: Braille & Picture Charm Customizer
date: 2026-06-18
status: ready
categories: [communication]
summary: Make 3D-printable bracelet charms with braille letters or picture symbols — for name bracelets, communication aids, and task-list prompts.
cover_image: /assets/images/projects/braille-charm-customizer/braille-charm-bracelet.jpg
cover_alt: "Purple silicone bracelet fitted with seven light-blue 3D-printed charms, each showing braille dots for one letter."
links:
  - label: Customize in the web app (OpenSCAD Assistive Forge)
    url: https://openscad-assistive-forge.pages.dev/
  - label: GitHub (braille-wedge-card-openscad)
    url: https://github.com/BrennenJohnston/braille-wedge-card-openscad
  - label: Thingiverse (early charm design)
    url: https://www.thingiverse.com/thing:7153594
gallery:
  - image: /assets/images/projects/braille-charm-customizer/braille-charm-customizer.jpg
    alt: "Braille charm customizer showing the name Brennen translated to braille, with seven yellow charm previews standing on their sides in the 3D viewer."
    caption: Charms are automatically oriented on their side for better braille dot printing, and rotated so they read correctly on a bracelet.
  - image: /assets/images/projects/braille-charm-customizer/svg-editor.jpg
    alt: "SVG preparation editor comparing an original rocket graphic to a simplified print version, next to a yellow 3D charm preview engraved with the rocket."
    caption: The SVG editing tool highlights individual line features so small details can be adjusted for printability.
  - image: /assets/images/projects/braille-charm-customizer/symbol-charm-bracelet.jpg
    alt: "Green bracelet with black square charms showing a sad face, a thumbs up, a question mark, and an angry face."
    caption: A communication charm bracelet made with the charm customizer.
  - image: /assets/images/projects/braille-charm-customizer/task-charm-bracelet.jpg
    alt: "Red bracelet with numbered yellow and red square charms worn as a task list; the first charm shows a hearing aid and the second a microphone."
    caption: A task-list charm bracelet made by an assistive technology paraeducator for a student who is hard of hearing.
  - image: /assets/images/projects/braille-charm-customizer/task-charm-strip.jpg
    alt: "Row of seven square charms before assembly: numbered yellow charms 1 to 4 showing a hearing aid, a microphone, a chain link, and a charging plug, separated by red decorative charms."
    caption: The four numbered task charms before assembly.
help_wanted: ""
---
The charm customizer makes small 3D-printable bracelet charms carrying braille letters or picture symbols (from any SVG graphic). String them on a bracelet to make braille name bracelets, communication aids, or wearable task-list prompts.

The braille charm tool orients each charm on its side for better dot quality and rotates the braille so that charms read correctly when placed on a bracelet. The SVG charm tool includes an editing step that highlights individual line features, so small details can be simplified until they print reliably at charm size.

## Where it came from

This design started as a request to recreate a discontinued AAC (augmentative and alternative communication) product called a "Q-Charm" — a bracelet of small picture charms used for communication and task prompts. An [early design on Thingiverse](https://www.thingiverse.com/thing:7153594) by a 3D print club student answered the original request, and the idea was then iterated through hackathons including the Adaptive Solutions Mini-Hackathon with CREATE, HuskyADAPT, and KCLS, and the GitHub Open Source Assistive Technology Hackathon.

## A real-world example

A paraeducator working in audiology and assistive technology, Daniel K., used the charm customizer to make a task-list charm bracelet for a student who is hard of hearing. The numbered charms are a visual reminder to put on their hearing aid, get the teacher's DM microphone, connect it wirelessly to the hearing aid, and charge it at the end of the school day. Daniel shared the charm photos on this page for public use.

## Two ways to use it

The same OpenSCAD file ([`Braille_Charm_STL_Generator.scad`](https://github.com/BrennenJohnston/braille-wedge-card-openscad)) works two ways:

1. **In the browser — no install needed.** Open the [OpenSCAD Assistive Forge]({{ '/projects/openscad-assistive-forge/' | relative_url }}) web app, type a name or upload an SVG, preview the charms in 3D, and download the STL. Braille translation runs on your device.
2. **In desktop OpenSCAD.** Download the file from the [braille-wedge-card-openscad repo](https://github.com/BrennenJohnston/braille-wedge-card-openscad) and use OpenSCAD's built-in Customizer panel directly.

If you make a bracelet with it, feedback is very welcome — reach out through the [contact options]({{ '/about/' | relative_url }}).
