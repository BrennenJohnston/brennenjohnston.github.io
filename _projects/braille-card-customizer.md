---
title: Braille Card Customizer
date: 2026-06-20
status: ready
categories: [communication]
summary: "Type any text and generate a 3D-printable braille sign, card, or bracelet charm, with a Liblouis braille translation."
cover_image: /assets/images/projects/braille-card-maker/braille-card-customizer.jpg
cover_alt: "The braille card customizer open in the OpenSCAD Assistive Forge web app, with a tool dropdown listing Braille Sign, Braille Card, and Braille Charm options."
redirect_from:
  - /projects/braille-card-maker/
  - /projects/braille-sign-maker/
  - /projects/braille-charm-maker/
links:
  - label: Customize in the web app (OpenSCAD Assistive Forge)
    url: https://openscad-assistive-forge.pages.dev/
  - label: GitHub (braille-sign-openscad)
    url: https://github.com/BrennenJohnston/braille-sign-openscad
  - label: GitHub (braille-wedge-card-openscad)
    url: https://github.com/BrennenJohnston/braille-wedge-card-openscad
  - label: GitHub (braille-charm-openscad)
    url: https://github.com/BrennenJohnston/braille-charm-openscad
gallery:
  - image: /assets/images/projects/braille-sign-maker/braille-sign-customizer.jpg
    alt: "OpenSCAD Assistive Forge web app showing the braille sign customizer: a parameter panel on the left and a yellow 3D preview of a two-part sign reading CREATE TINKER TUESDAY, with the braille section angled on a stand."
    caption: "The sign customizer in the OpenSCAD Assistive Forge web app: type your text, preview in 3D, download the model file."
  - image: /assets/images/projects/braille-sign-maker/braille-sign-printed.jpg
    alt: "3D-printed tactile sign reading CREATE TINKER TUESDAY in raised black letters, with a braille translation section below the text."
    caption: A finished sign, with the raised-letter plate and the braille section glued into one piece.
  - image: /assets/images/projects/braille-sign-maker/braille-sign-slicer.jpg
    alt: "Slicer preview of the sign's two parts on a print bed: the lettered plate lying flat and the braille section standing at an angle with support fins."
    caption: The braille section prints at 75 degrees with quick-removal support fins for better braille dome quality.
  - image: /assets/images/projects/braille-charm-maker/braille-charm-customizer.jpg
    alt: "Braille charm customizer showing the name Brennen translated to braille, with seven yellow charm previews standing on their sides in the 3D viewer."
    caption: Charms are automatically oriented on their side for better braille dot printing, and rotated so they read correctly on a bracelet.
  - image: /assets/images/projects/braille-charm-maker/braille-charm-bracelet.jpg
    alt: "Purple silicone bracelet fitted with seven light-blue 3D-printed charms, each showing braille dots for one letter."
    caption: A finished braille name bracelet, one letter per charm.
help_wanted: ""
---
The Braille Card Customizer turns text you type into a 3D-printable braille object. One tool covers three shapes, chosen from a dropdown: tactile **signs**, braille **cards**, and bracelet **charms**. Braille translation uses [Liblouis](https://liblouis.io/), the open-source braille translator, and runs on your device, so there is no install and no account.

You can generate either uncontracted braille (Grade 1, where every letter is spelled out) or contracted braille (Grade 2, which uses the standard contractions most experienced readers prefer). Pick whichever suits the reader — a beginner learning the alphabet and a fluent reader want different output from the same text.

## Braille signs

Tactile signs get raised letters on top and a Liblouis-translated braille section below. The tool automatically splits the two into separate printable sections, and an optional border makes the pieces look and feel like one continuous sign after gluing.

Braille dots print poorly when they face straight up on an FDM (fused deposition modeling) printer, so the braille section is angled at 75 degrees on a stand with quick-removal support fins, a small trick that makes a big difference in dot quality and readability.

## Braille cards

Braille cards cover business cards, labels, and tags. The braille sits on a slight wedge — this is the original "wedge card" design the repo is named for — so the dots print cleanly instead of facing straight up, where dome quality and readability suffer.

Text longer than one card fits is split across multiple cards automatically, so a full address or a multi-line label becomes a numbered set rather than something you have to break up by hand.

This tool generates a printable braille card *model*. It is a different project from the [Custom Braille Card Embosser]({{ '/projects/braille-card-embosser/' | relative_url }}), which is a printed, hand-operated machine that presses braille into blank paper cards.

## Braille charms

Charms are small bracelet pieces carrying one braille letter each, for braille name bracelets and wearable braille labels. The tool orients each charm on its side for better dot quality and rotates the braille so the charms read correctly once they are on a bracelet.

For charms carrying picture symbols instead of braille, see the separate [Charm Customizer]({{ '/projects/picture-charm-customizer/' | relative_url }}).

## Two ways to use it

Each shape is an ordinary OpenSCAD file, and each one works two ways:

1. **In the browser, no install needed.** Open the [OpenSCAD Assistive Forge]({{ '/projects/openscad-assistive-forge/' | relative_url }}) web app, pick the shape, type your text, preview it in 3D, and download the STL (stereolithography) model file.
2. **In desktop OpenSCAD.** Download the file and use OpenSCAD's built-in Customizer panel offline. The three variants live in three separate repositories: [`Braille_Sign_STL_Generator.scad`](https://github.com/BrennenJohnston/braille-sign-openscad), [`Braille_Wedge_Card_STL_Generator.scad`](https://github.com/BrennenJohnston/braille-wedge-card-openscad), and [`Braille_Charm_STL_Generator.scad`](https://github.com/BrennenJohnston/braille-charm-openscad).

If you print with it, feedback on braille readability from your printer is especially welcome; share it on the model pages linked above.
