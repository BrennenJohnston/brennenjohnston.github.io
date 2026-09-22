---
title: "Click Me: Solderless Hot-Swap Access Switch"
date: 2026-09-22
status: prototype
categories: [computer-access, gaming-recreation]
summary: A 3D-printed accessibility switch with a 3.5 mm plug, built without soldering, where the button is an ordinary mechanical keyboard switch you can swap in seconds to change how hard it is to press.
cover_image: /assets/images/projects/click-me-switch/click-me-switch-01.jpg
cover_alt: "A black-gloved finger presses the large lime-green button of the Click Me switch, and a black cable runs from the switch to a toy fire truck with a red cab and a clear body full of red, blue, and teal gears. The truck's lights are on and teal beams shine from its side across a pale wood table."
links:
  - label: GitHub
    url: https://github.com/BrennenJohnston/click-me-solderless-hotswap-access-switch
  - label: Video of the assembly animation on YouTube
    url: https://youtu.be/RXbbdtwFPiI
gallery:
  - image: /assets/images/projects/click-me-switch/click-me-switch-02.jpg
    alt: "The finished Click Me, a textured lime-green keycap on a light blue housing and rounded black base, beside a spare purple circuit board with a clear mechanical keyboard switch fitted in its centre, on a wooden desk."
  - image: /assets/images/projects/click-me-switch/click-me-switch-03.jpg
    alt: "Every part laid out in two rows on a wooden desk. Top row: a black base plate, a light blue carrier with a round opening, a lime-green keycap, and a purple circuit board showing its printed lettering. Bottom row: a grey X-braced retainer, a blue housing with a square window, a small blue and clear mechanical keyboard switch, and a second circuit board showing the black jack and socket."
    caption: Everything that goes into one Click Me. The circuit board arrives with both parts already soldered.
  - image: /assets/images/projects/click-me-switch/click-me-switch-04.jpg
    alt: "The component face of the purple circuit board: a black 3.5 mm jack at one edge, a small blue hot-swap socket in the middle, magenta traces linking the two, and a gold-plated oval mounting slot at opposite corners."
    caption: The whole circuit. The socket grips the pins of any Cherry MX compatible keyboard switch, so the switch is held by friction rather than solder.
  - image: /assets/images/projects/click-me-switch/click-me-switch-05.jpg
    alt: "A blue and clear mechanical keyboard switch pressed through the square window of the blue housing, seated flat against the circuit board inside, with the green keycap and a spare board on the desk beside it."
  - image: /assets/images/projects/click-me-switch/click-me-switch-06.jpg
    alt: "A computer rendering of four keycap options in red: a tall chamfered dome, a tall dome with a faceted star pattern radiating from its centre, a lower rounded dome, and a thin flat slab."
    caption: Four of the five keycap shapes in the files, including one with a tactile pattern you can find by touch.
help_wanted: "If you use an access switch, or support someone who does, print one, try two or three different keyboard switches in it, and tell me which actuation force suited the person and why. That is the one thing I cannot decide from here."
---
The Click Me is a 3D-printed access switch with a 3.5 mm mono plug, the standard connector for switch-adapted toys, communication aids, and switch interfaces. It is built around a small custom printed circuit board that carries a 3.5 mm jack and a hot-swap socket for an ordinary mechanical keyboard switch.

Nobody has to solder anything. The board is ordered from JLCPCB with both parts already fitted, so building one means pressing a keyboard switch into the socket by hand, pushing on a printed keycap, and snapping the four printed housing parts together. No screws and no glue either.

## Why the button is a keyboard switch

Commercial access switches arrive with one actuation force baked in. When it is too heavy or too light for the person in front of me, there is not much I can do except order a different switch and wait. Mechanical keyboard switches are mass-produced, cheap, and sold in a wide range of forces, feels, and sounds: light linear for limited strength, heavier for someone who rests a hand on the button, clicky for someone who needs to hear that the press registered. Swapping one takes seconds and no tools, so the button can be matched to the person, and matched again when their needs change.

Five interchangeable keycaps change the size, height, and texture of the pressing surface, including one with a tactile pattern you can find by touch.

## What is in the repository

The GitHub repository linked above has everything needed to make one and to build on it: the board files ready to upload to JLCPCB with assembly turned on, the parts and placement lists, the nine printable parts, a step-by-step ordering guide, and an assembly guide where every step has a photograph and every photograph is described in words. It also has the real costs from my own orders. A finished switch currently comes to about $8.43 in small quantities, most of that the cable and the board, and the board alone drops from $4.82 to $2.36 each when ordered fifty at a time.

## Where it stands

This is a working prototype, not a finished release. The housing is at version 0.5 and the board at version 0.2, both built and in daily use. The Fusion 360 sources for the printed parts are not published yet; I will add them once they are cleaned up, so for now the parts can be reproduced from the mesh files but not easily modified. The assembly animation on YouTube shows an earlier housing revision, with the same order of assembly.
