---
title: Braille Sign Maker
date: 2026-06-20
status: ready
categories: [communication]
summary: Type any text and generate a 3D-printable tactile sign with raised letters and a braille translation, in a web app or in desktop OpenSCAD.
cover_image: /assets/images/projects/braille-sign-maker/braille-sign-printed.jpg
cover_alt: "3D-printed tactile sign reading CREATE TINKER TUESDAY in raised black letters, with a braille translation section below the text."
links:
  - label: Customize in the web app (OpenSCAD Assistive Forge)
    url: https://openscad-assistive-forge.pages.dev/
  - label: GitHub (braille-wedge-card-openscad)
    url: https://github.com/BrennenJohnston/braille-wedge-card-openscad
  - label: "Thingiverse (STL generator, work in progress)"
    url: https://www.thingiverse.com/thing:7386098
gallery:
  - image: /assets/images/projects/braille-sign-maker/braille-sign-customizer.jpg
    alt: "OpenSCAD Assistive Forge web app showing the braille sign customizer: a parameter panel on the left and a yellow 3D preview of a two-part sign reading CREATE TINKER TUESDAY, with the braille section angled on a stand."
    caption: "The sign customizer in the OpenSCAD Assistive Forge web app: type your text, preview in 3D, download the STL."
  - image: /assets/images/projects/braille-sign-maker/braille-sign-slicer.jpg
    alt: "Slicer preview of the sign's two parts on a print bed: the lettered plate lying flat and the braille section standing at an angle with support fins."
    caption: The braille section prints at 75 degrees with quick-removal support fins for better braille dome quality on FDM printers.
help_wanted: ""
---
The Braille Sign Maker generates 3D-printable tactile signs from any text you type: raised letters on top, a [Liblouis](https://liblouis.io/)-translated braille section below. It automatically splits the two into separate printable sections, and an optional border makes the pieces look and feel like one continuous sign after gluing.

Braille dots print poorly when they face straight up on an FDM printer, so the braille section is angled at 75 degrees on a stand with quick-removal support fins, a small trick that makes a big difference in dot quality and readability.

## Two ways to use it

The same OpenSCAD file ([`Braille_Sign_STL_Generator.scad`](https://github.com/BrennenJohnston/braille-wedge-card-openscad)) works two ways:

1. **In the browser, no install needed.** Open the [OpenSCAD Assistive Forge]({{ '/projects/openscad-assistive-forge/' | relative_url }}) web app, type your text, preview the sign in 3D, and download the STL. Braille translation runs on your device.
2. **In desktop OpenSCAD.** Download the file from the [braille-wedge-card-openscad repo](https://github.com/BrennenJohnston/braille-wedge-card-openscad) and use OpenSCAD's built-in Customizer panel to set the text and dimensions yourself.

If you print signs with it, feedback on braille readability from your printer is especially welcome; share it on the model pages linked above.
