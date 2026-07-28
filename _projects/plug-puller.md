---
title: Parametric Plug Puller (Customizable)
date: 2026-07-12
status: prototype
categories: [daily-living]
summary: A customizable tool that grips an electrical plug so you can pull it from the outlet without straining fingers or cords.
cover_image: /assets/images/projects/plug-puller/plug-puller-01.jpg
cover_alt: "A gloved hand uses a blue 3D-printed handle, strapped around an orange plug with zip ties, to pull the plug from a wall outlet."
links:
  - label: GitHub (openscad-plug-puller, customizable source)
    url: https://github.com/BrennenJohnston/openscad-plug-puller
  - label: Thingiverse
    url: https://www.thingiverse.com/thing:7386095
gallery:
  - image: /assets/images/projects/plug-puller/plug-puller-02.jpg
    alt: "Close-up of the blue plug puller fastened around an orange extension-cord plug with three black zip ties, showing two large finger holes."
  - image: /assets/images/projects/plug-puller/plug-puller-03.jpg
    alt: "Two blue 3D-printed plug puller frames lying on a wooden table on either side of an unattached orange plug."
  - image: /assets/images/projects/plug-puller/plug-puller-04.jpg
    alt: "The two halves of the plug puller clamped around the plug body with zip ties threaded through their slots."
help_wanted: "Print one for a plug you find hard to remove and tell me how the fit and grip feel; measurements that didn't work are just as useful as ones that did."
---
This is the OpenSCAD-customizable version of the Plug Puller, an assistive tool for people with limited grip strength or hand dexterity. The tool straps securely around the body of an electrical plug, adding large finger holes and a solid handle so the plug can be pulled straight out of the outlet without bending fingernails, yanking the cord, or damaging the plug or outlet.

This is the customizable version of the design. To make your own, get the model from the [openscad-plug-puller repo on GitHub](https://github.com/BrennenJohnston/openscad-plug-puller) or from its [Thingiverse listing](https://www.thingiverse.com/thing:7386095). For the original fixed-size design that prints ready to use, see the separate [Plug Puller - Assistive Technology Solution from WATAP]({{ '/projects/plug-puller-watap/' | relative_url }}).

The OpenSCAD version makes the design adjustable: measure your plug and your hand, type the numbers into OpenSCAD's Customizer, and export a tool that fits both. It builds two tool styles from one model: a flat puller for standard plugs, and a heavy-duty clamshell (the paired plates shown in the photos) for thick round extension-cord plugs.

The model is currently at **version 0.8** and approaching a **version 1.0 milestone**, so it is still a work in progress. The repository includes beginner guides (a five-minute measuring guide, quick-start walkthrough, and fit troubleshooting), ready-to-print Small / Medium / Large STL (stereolithography) model files, and a single-file build for web customizers.
