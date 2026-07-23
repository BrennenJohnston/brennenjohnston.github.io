---
title: Braille Charm Maker
date: 2026-06-19
status: ready
categories: [communication]
summary: Type a name or word and generate 3D-printable bracelet charms with braille letters, for name bracelets and wearable braille labels.
cover_image: /assets/images/projects/braille-charm-maker/braille-charm-bracelet.jpg
cover_alt: "Purple silicone bracelet fitted with seven light-blue 3D-printed charms, each showing braille dots for one letter."
links:
  - label: Customize in the web app (OpenSCAD Assistive Forge)
    url: https://openscad-assistive-forge.pages.dev/
  - label: GitHub (braille-wedge-card-openscad)
    url: https://github.com/BrennenJohnston/braille-wedge-card-openscad
  - label: "Thingiverse (STL generator, work in progress)"
    url: https://www.thingiverse.com/thing:7386099
gallery:
  - image: /assets/images/projects/braille-charm-maker/braille-charm-customizer.jpg
    alt: "Braille charm customizer showing the name Brennen translated to braille, with seven yellow charm previews standing on their sides in the 3D viewer."
    caption: Charms are automatically oriented on their side for better braille dot printing, and rotated so they read correctly on a bracelet.
help_wanted: ""
---
The Braille Charm Maker turns text into small 3D-printable bracelet charms, one braille letter per charm. Type a name or word, preview the charms in 3D, and download the STL to string on a bracelet, for braille name bracelets and wearable braille labels. Braille translation uses [Liblouis](https://liblouis.io/), the open-source braille translator, and runs on your device.

The tool orients each charm on its side for better dot quality and rotates the braille so the charms read correctly when placed on a bracelet.

This is the braille variation of the [OpenSCAD Assistive Forge]({{ '/projects/openscad-assistive-forge/' | relative_url }}) braille tool, alongside the [Braille Sign Maker]({{ '/projects/braille-sign-maker/' | relative_url }}) and [Braille Card Maker]({{ '/projects/braille-card-maker/' | relative_url }}). For picture symbols instead of braille, see the separate [Charm Customizer]({{ '/projects/picture-charm-customizer/' | relative_url }}).

## Two ways to use it

The same OpenSCAD file ([`Braille_Charm_STL_Generator.scad`](https://github.com/BrennenJohnston/braille-wedge-card-openscad)) works two ways:

1. **In the browser, no install needed.** Open the [OpenSCAD Assistive Forge]({{ '/projects/openscad-assistive-forge/' | relative_url }}) web app, type a name, preview the charms in 3D, and download the STL. Braille translation runs on your device.
2. **In desktop OpenSCAD.** Download the file from the [braille-wedge-card-openscad repo](https://github.com/BrennenJohnston/braille-wedge-card-openscad) and use OpenSCAD's built-in Customizer panel directly.

If you make a bracelet with it, feedback on braille readability from your printer is especially welcome; share it on the model pages linked above.
