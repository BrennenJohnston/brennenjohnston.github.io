---
title: Braille Card Maker
date: 2026-06-17
status: ready
categories: [communication]
summary: "Type any text and generate a 3D-printable braille card: business cards, labels, and tags with a Liblouis braille translation."
cover_image: /assets/images/projects/braille-card-maker/braille-card-customizer.jpg
cover_alt: "The braille card customizer open in the OpenSCAD Assistive Forge web app, with a tool dropdown listing Braille Sign, Braille Card, and Braille Charm options."
links:
  - label: Customize in the web app (OpenSCAD Assistive Forge)
    url: https://openscad-assistive-forge.pages.dev/
  - label: GitHub (braille-wedge-card-openscad)
    url: https://github.com/BrennenJohnston/braille-wedge-card-openscad
  - label: "Thingiverse (STL generator, work in progress)"
    url: https://www.thingiverse.com/thing:7386097
help_wanted: ""
---
The Braille Card Maker generates 3D-printable braille cards from any text you type: business cards, labels, and tags. It adds a [Liblouis](https://liblouis.io/)-translated braille section to a printable card, so translation runs on your device with no install or account.

The braille sits on a slight wedge (this is the repo's original "wedge card" design) so the dots print cleanly on an FDM printer instead of facing straight up, where dome quality and readability suffer.

This is the card variation of the [OpenSCAD Assistive Forge]({{ '/projects/openscad-assistive-forge/' | relative_url }}) braille tool, alongside the [Braille Sign Maker]({{ '/projects/braille-sign-maker/' | relative_url }}) and [Braille Charm Maker]({{ '/projects/braille-charm-maker/' | relative_url }}). It's a different project from the [Custom Braille Card Embosser]({{ '/projects/braille-card-embosser/' | relative_url }}): the embosser is a printed hand-operated machine that presses braille into blank paper cards, while this tool generates the printable braille card model itself.

## Two ways to use it

The same OpenSCAD file ([`Braille_Wedge_Card_STL_Generator.scad`](https://github.com/BrennenJohnston/braille-wedge-card-openscad)) works two ways:

1. **In the browser, no install needed.** Open the [OpenSCAD Assistive Forge]({{ '/projects/openscad-assistive-forge/' | relative_url }}) web app, type your text, preview the card in 3D, and download the STL. Braille translation runs on your device.
2. **In desktop OpenSCAD.** Download the file from the [braille-wedge-card-openscad repo](https://github.com/BrennenJohnston/braille-wedge-card-openscad) and use OpenSCAD's built-in Customizer panel directly.

If you print cards with it, feedback on braille readability from your printer is especially welcome; share it on the model pages linked above.
