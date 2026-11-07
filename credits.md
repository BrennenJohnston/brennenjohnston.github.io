---
layout: page
title: Credits
permalink: /credits/
---
<p>This site is a collage. The layout, the glass boxes, the typeface, the icons and the photographs were made by other people and shared under licenses that let me reuse them, and every one of them is listed here with a link to its author or its source. The pieces I made myself are the photographs of my own work. The full record, with license texts and file hashes, is in the repository's <a href="https://github.com/BrennenJohnston/brennenjohnston.github.io/blob/main/vendor/pristine/PROVENANCE.md">PROVENANCE.md</a>.</p>

<ul class="post-list" role="list">
  {%- for credit in site.data.credits -%}
  <li><a href="{{ credit.url }}">{{ credit.author | escape }}</a>, {{ credit.piece }}. License: {{ credit.license }}. Where: {{ credit.where }}.</li>
  {%- endfor -%}
</ul>
