---
layout: page
title: Tactile Map Making Quick Reference Guide
permalink: /tactile-map-guide/
---
This guide is a working draft, and feedback is welcome. It is also available as a [PDF]({{ '/assets/docs/tactile-map-guide.pdf' | relative_url }}). The PDF's figures are not reproduced here; what they show is written into the text.

*All dimensions provided include metric millimeters and inches.*

## Minimum Letter Dimensions for Raised Character Signs

(For tactile characters only; visual requirements have separate parameters)

<table>
<thead>
<tr><th scope="col">Parameter</th><th scope="col">Dimensions</th></tr>
</thead>
<tbody>
<tr><th scope="row"><strong>Depth</strong> (letter height from background)</th><td><strong>at least 0.8 mm</strong> (1⁄32 inch)<br>Source: ADA Signage Guidelines (703.2.1)</td></tr>
<tr><th scope="row"><strong>Character height</strong> (uppercase "I")</th><td><strong>at least 16 mm</strong> (⅝ inch)<br><strong>at most 51 mm</strong> (2 inches)<br>Source: ADA Signage Guidelines (703.2.5)</td></tr>
<tr><th scope="row"><strong>Stroke thickness</strong> (width of uppercase "I")</th><td><strong>at most 15%</strong> of character height<br>Source: ADA Signage Guidelines (703.2.6)</td></tr>
<tr><th scope="row"><strong>Character width proportion</strong> (uppercase "O")</th><td><strong>at least 55%</strong> of uppercase "O" height to the uppercase letter "I" height.<br>Source: ADA Signage Guidelines (703.2.4)</td></tr>
</tbody>
</table>

## Font Style and Spacing

<table>
<thead>
<tr><th scope="col">Parameter</th><th scope="col">Specification</th></tr>
</thead>
<tbody>
<tr><th scope="row"><strong>Typeface</strong></th><td>Sans-serif, uppercase only, no italic/script<br>Source: ADA Signage Guidelines (703.2.2)</td></tr>
<tr><th scope="row"><strong>Letter-to-letter spacing</strong></th><td>Closest points between letters: <strong>10% to 35%</strong> of character height <strong>and at least 3.2 mm</strong> (⅛ inch)<br>Source: ADA Signage Guidelines (703.2.7)</td></tr>
<tr><th scope="row"><strong>Line spacing (baseline-to-baseline)</strong></th><td><strong>135% to 170%</strong> of character height<br>Source: ADA/Braille Signage Guidelines (703.2.8)</td></tr>
</tbody>
</table>

## Spacing Guidelines

<table>
<thead>
<tr><th scope="col">Parameter</th><th scope="col">Specification</th></tr>
</thead>
<tbody>
<tr><th scope="row"><strong>Space around tactile letters and symbols</strong> (includes borders, braille, raised letters and symbols)</th><td><strong>at least 9.5 mm</strong> (⅜ inch)<br>Source: ADA/Braille Signage Guidelines (703.2.7)</td></tr>
</tbody>
</table>

## Finish and Contrast Recommendations

<table>
<thead>
<tr><th scope="col">Parameter</th><th scope="col">Specification</th></tr>
</thead>
<tbody>
<tr><th scope="row"><strong>Surface finish</strong></th><td>Matte/non-glare<br>Source: ADA Signage Guidelines</td></tr>
<tr><th scope="row"><strong>Color contrast</strong></th><td>High-contrast (at least 70% LRV difference), dark-on-light or light-on-dark<br>Source: ADA Signage Guidelines</td></tr>
</tbody>
</table>

## Quick implementation tips

1. **Spacing Consistency**: Keep every doorway gap exactly the same width. Keep lettering and symbols on the map and the key the exact same size.
2. **Print preview check**: In your slicer’s layer view, check wall count matches intended sizing.
3. **User testing**: Before the final process is saved, get feedback from a tactile map user to be sure nothing was missed and all information can be easily understood.

## Braille Reference Guide

> **703.3.1 Dimensions and Capitalization.** Braille dots shall have a domed or rounded shape and shall comply with Table 703.3.1. The indication of an uppercase letter or letters shall only be used before the first word of sentences, proper nouns and names, individual letters of the alphabet, initials, and acronyms.

Braille dots are domed or rounded, not flat or squared. On a sign, the braille sits at least 0.375 inch (9.5 mm) below the raised letters above it and at least 0.375 inch (9.5 mm) from the sign's raised border.

## Brennen’s 3D Printed Map Quick Reference Guide: Depth

(In general, use a 0.6 mm difference between layers, and 0.8 mm for symbols)

<table>
<thead>
<tr><th scope="col">Feature</th><th scope="col">Depth</th></tr>
</thead>
<tbody>
<tr><th scope="row"><strong>Braille Base Layer</strong></th><td>0.1 mm</td></tr>
<tr><th scope="row"><strong>General Base Layer</strong></th><td>0.4 mm</td></tr>
<tr><th scope="row"><strong>Interior Floor Layer</strong></th><td>1.0 mm</td></tr>
<tr><th scope="row"><strong>Symbols Layer</strong></th><td>1.8 mm</td></tr>
<tr><th scope="row"><strong>Outer Walls Layer</strong></th><td>2.4 mm</td></tr>
</tbody>
</table>

Test of an alternate version on 24 June 2025:

- Braille Base 0.1 or 0.7 (0.3 mm separation)
- Starting base plate street below 0.4
- Starting base plate garage floor 1.0 (0.6 mm depth)
- Sidewalk 1.6 (0.6 mm depth)
- Symbols layer 1.2 or 1.8 or 2.4 (0.8 mm depth above base)
- Bollards height 3.0 (0.6 mm depth)
- Wall Height 3.6 (0.6 mm depth)

## Brennen’s 3D Printed Map Quick Reference Guide: Sound Transit Symbol Sizing

<table>
<thead>
<tr><th scope="col">Feature</th><th scope="col">Width</th><th scope="col">Height</th></tr>
</thead>
<tbody>
<tr><th scope="row"><strong>Wall</strong></th><td>0.2 mm</td><td>N/A</td></tr>
<tr><th scope="row"><strong>Curb</strong></th><td>0.1 mm</td><td>N/A</td></tr>
<tr><th scope="row"><strong>Shoreline Side</strong></th><td>1.5 mm</td><td>N/A</td></tr>
<tr><th scope="row"><strong>Paid Fare Zone</strong> (Repeating Line Width)</th><td>0.8 mm</td><td>16 mm</td></tr>
<tr><th scope="row"><strong>Platform Edge</strong></th><td>1.5 mm</td><td>N/A</td></tr>
<tr><th scope="row"><strong>Track</strong> (Reference to Curb)</th><td>2 x 1 mm (with 1.5 mm gap)</td><td>N/A</td></tr>
<tr><th scope="row"><strong>Turnstiles</strong></th><td>6 mm</td><td>2 mm</td></tr>
<tr><th scope="row"><strong>Stairs</strong></th><td>1.2 mm</td><td>16 mm</td></tr>
<tr><th scope="row"><strong>Escalator</strong></th><td>1.2 mm</td><td>18 mm</td></tr>
<tr><th scope="row"><strong>Elevator Up / Down</strong> (Outer Line Width)</th><td>2.2 mm</td><td>16 mm</td></tr>
<tr><th scope="row"><strong>Ticket Fare Machine</strong> (Outer Line Width)</th><td>1.0 mm</td><td>16 mm</td></tr>
<tr><th scope="row"><strong>Directional Arrow</strong> (Line on arrow)</th><td>1.2 mm</td><td>16 mm</td></tr>
<tr><th scope="row"><strong>Skybridge Number</strong></th><td>2.0 mm</td><td>16 mm</td></tr>
</tbody>
</table>
