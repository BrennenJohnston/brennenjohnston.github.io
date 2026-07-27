---
title: Charm Customizer
date: 2026-06-18
status: ready
categories: [communication]
summary: Turn an SVG graphic into 3D-printable bracelet charms, for communication aids, task-list prompts, and picture bracelets.
cover_image: /assets/images/projects/picture-charm-customizer/symbol-charm-bracelet.jpg
cover_alt: "Green bracelet with black square charms showing a sad face, a thumbs up, a question mark, and an angry face."
links:
  - label: Customize in the web app (OpenSCAD Assistive Forge)
    url: https://openscad-assistive-forge.pages.dev/
  - label: GitHub (openscad-assistive-forge)
    url: https://github.com/BrennenJohnston/openscad-assistive-forge/tree/main/public/examples/nasif-charm-maker
  - label: "REMIX: AAC Charms With Boardmaker Symbols For Silicone Bracelets - WOOF3D (static STL, not customizable)"
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
The Charm Customizer makes small 3D-printable bracelet charms from picture symbols. In its current state the tool requires an SVG file as input: upload an SVG graphic, preview the charm in 3D, and download the STL to string on a bracelet, for communication aids, wearable task-list prompts, and picture bracelets.

This is a separate tool from the [Braille Charm Maker]({{ '/projects/braille-charm-maker/' | relative_url }}): that one carries braille letters, while this one carries picture symbols. Both run in the [OpenSCAD Assistive Forge]({{ '/projects/openscad-assistive-forge/' | relative_url }}), but they're independent customizers with different inputs.

An SVG editing step is built in: it highlights individual line features so small details can be simplified until they print reliably at charm size.

## Where it came from

This design started as a request to recreate a discontinued AAC (augmentative and alternative communication) product called a "Q-Charm", a bracelet of small picture charms used for communication and task prompts. A static remix on Thingiverse, [AAC Charms With Boardmaker Symbols for Silicone Bracelets](https://www.thingiverse.com/thing:7155293) (a fixed STL by a WOOF3D student), answered the original request, and the idea was then iterated through hackathons including the Adaptive Solutions Mini-Hackathon with CREATE, HuskyADAPT, and KCLS, and the GitHub Open Source Assistive Technology Hackathon.

## A real-world example

A paraeducator working in audiology and assistive technology, Daniel K., used the Charm Customizer to make a task-list charm bracelet for a student who is hard of hearing. The numbered charms are a visual reminder to put on their hearing aid, get the teacher's DM microphone, connect it wirelessly to the hearing aid, and charge it at the end of the school day. Daniel shared the charm photos on this page for public use.

## Two ways to use it

1. **In the browser, no install needed.** Open the [OpenSCAD Assistive Forge]({{ '/projects/openscad-assistive-forge/' | relative_url }}) web app, upload an SVG, preview the charms in 3D, and download the STL.
2. **In desktop OpenSCAD.** The charm generator is open source in the [OpenSCAD Assistive Forge repo](https://github.com/BrennenJohnston/openscad-assistive-forge/tree/main/public/examples/nasif-charm-maker), so you can also run it in OpenSCAD's built-in Customizer panel offline.

If you make a bracelet with it, feedback is very welcome; share it on the model pages linked above.
