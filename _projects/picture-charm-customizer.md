---
title: Charm Customizer
date: 2026-06-18
status: ready
categories: [communication]
summary: Make 3D-printable bracelet charms from a built-in symbol library or your own picture, for communication aids, task-list prompts, and picture bracelets.
cover_image: /assets/images/projects/picture-charm-customizer/symbol-charm-bracelet.jpg
cover_alt: "Green bracelet with black square charms showing a sad face, a thumbs up, a question mark, and an angry face."
links:
  - label: Customize in the web app (OpenSCAD Assistive Forge)
    url: https://openscad-assistive-forge.pages.dev/
  - label: GitHub (openscad-assistive-forge)
    url: https://github.com/BrennenJohnston/openscad-assistive-forge/tree/main/public/examples/nasif-charm-maker
  - label: "Video: Charm Customizer tutorial"
    url: https://youtu.be/Kz3sCmPIjQM
  - label: "Video: Charm Customizer real-world example"
    url: https://youtu.be/ExYVh3Dx0x8
  - label: "AAC Charms for Silicone Bracelets, the WOOF3D original by Duy Do (fixed model, not customizable)"
    url: https://www.thingiverse.com/thing:7153594
  - label: "REMIX: AAC Charms for Silicone Bracelets, Brennen's print-fixed version of the WOOF3D original (fixed model, not customizable)"
    url: https://www.thingiverse.com/thing:7155293
gallery:
  - image: /assets/images/projects/picture-charm-customizer/svg-editor.jpg
    alt: "SVG preparation editor comparing an original rocket graphic to a simplified print version, next to a yellow 3D charm preview engraved with the rocket."
    caption: The SVG editing tool highlights individual line features so small details can be adjusted for printability.
  - image: /assets/images/projects/picture-charm-customizer/task-charm-bracelet.jpg
    alt: "Red bracelet with numbered yellow and red square charms worn as a task list; the first charm shows a hearing aid and the second a microphone."
    caption: A task-list charm bracelet made by an assistive technology paraeducator for a student who is hard of hearing.
  - image: /assets/images/projects/picture-charm-customizer/task-charm-strip.jpg
    alt: "Row of seven square charms before assembly: numbered yellow charms 1 to 4 showing a hearing aid, a microphone, a chain link, and a charging plug, separated by red decorative charms."
    caption: The four numbered task charms before assembly.
help_wanted: ""
---
The Charm Customizer makes small 3D-printable charms carrying picture symbols, for communication aids, wearable task-list prompts, and picture bracelets. Pick a symbol, preview the charm in 3D, and download the STL (stereolithography) model file to print.

It builds three shapes:

- **Bracelet Clip Charms** that snap directly onto a silicone bracelet.
- **Flat pendants** in circle, square, hexagon, or oval.
- **Logo plates** built from an imported SVG (scalable vector graphics) drawing.

You do not need to supply artwork. The tool ships with a built-in symbol library you can pick from, and importing your own SVG file is the alternative for anything the library does not cover.

This is a separate tool from the braille charms in the [Braille Card Customizer]({{ '/projects/braille-card-customizer/' | relative_url }}): those carry braille letters, while these carry picture symbols. Both run in the [OpenSCAD Assistive Forge]({{ '/projects/openscad-assistive-forge/' | relative_url }}), but they are independent customizers with different inputs.

An SVG editing step is built in: it highlights individual line features so small details can be simplified until they print reliably at charm size.

## Where it came from

This design started as a request to recreate a discontinued AAC (augmentative and alternative communication) product called a "Q-Charm", a bracelet of small picture charms used for communication and task prompts.

The first answer to that request was a fixed, non-customizable model by Duy Do, a student in WOOF3D, the University of Washington's 3D printing club: [AAC Charms With Boardmaker Symbols For Silicone Bracelets](https://www.thingiverse.com/thing:7153594). I later published [a remix of Duy's design](https://www.thingiverse.com/thing:7155293) with print fixes applied; both are still fixed STL files rather than customizers. The idea was then iterated through hackathons including the Adaptive Solutions Mini-Hackathon with CREATE (the University of Washington's Center for Research and Education on Accessible Technology and Experiences), HuskyADAPT, and King County Library System, and the GitHub Open Source Assistive Technology Hackathon, which is where it grew into this customizer.

## Credits

The Charm Customizer exists because of work by several people and groups:

- **Nasif Zaman** wrote the OpenSCAD charm generator that the tool runs.
- **Duy Do (UW WOOF3D)** created the original AAC charm design the tool is descended from.
- **[HuskyADAPT](https://www.huskyadapt.me.uw.edu/our-mission)**, the University of Washington's accessible design and inclusive play organization, hosted the hackathon work that shaped it.

## A real-world example

A paraeducator working in audiology and assistive technology, Daniel K., used the Charm Customizer to make a task-list charm bracelet for a student who is hard of hearing. The numbered charms are a visual reminder to put on their hearing aid, get the teacher's DM microphone, connect it wirelessly to the hearing aid, and charge it at the end of the school day. Daniel shared the charm photos on this page for public use.

## Two ways to use it

1. **In the browser, no install needed.** Open the [OpenSCAD Assistive Forge]({{ '/projects/openscad-assistive-forge/' | relative_url }}) web app, pick a symbol from the library or import your own, preview the charms in 3D, and download the STL.
2. **In desktop OpenSCAD.** The charm generator is open source in the [OpenSCAD Assistive Forge repo](https://github.com/BrennenJohnston/openscad-assistive-forge/tree/main/public/examples/nasif-charm-maker), so you can also run it in OpenSCAD's built-in Customizer panel offline.

If you make a bracelet with it, feedback is very welcome; share it on the model pages linked above.
