---
layout: page
title: Projects
nav_icon: /assets/images/icons/nuvola/filesystems-folder.png
permalink: /projects/
---
{% assign sorted = site.projects | sort: "date" | reverse %}
{% assign ready = sorted | where: "status", "ready" %}
{% assign prototype = sorted | where: "status", "prototype" %}
{% assign custom = sorted | where: "status", "custom" %}
<p>This is a collection of projects I found worth sharing. Some are published and ready to print, some are prototypes I'm still iterating on, and some were one-of-a-kind builds for a specific person that might spark ideas.</p>

<nav aria-labelledby="jump-to">
  <h2 id="jump-to">Jump to a section</h2>
  <a href="#ready-to-print">Ready to print ({{ ready.size }})</a>
  <a href="#work-in-progress">Work in progress ({{ prototype.size }})</a>
  <a href="#custom-builds">Custom one-off builds ({{ custom.size }})</a>
  <a href="#browse-by-category">Browse by category</a>
</nav>

{% include project-list.html projects=ready heading="Ready to print" id="ready-to-print" description="Published designs with downloadable files, ready to send to a printer." %}
{% include project-list.html projects=prototype heading="Work in progress" id="work-in-progress" description="Prototypes I'm still iterating on. Feedback from testers is what moves these forward." %}
{% include project-list.html projects=custom heading="Custom one-off builds" id="custom-builds" description="Completed builds made for one specific person, shared to spark ideas rather than to be reprinted as-is." %}

<h2 id="browse-by-category">Browse by category</h2>
<ul role="list">
  {%- for c in site.data.categories -%}
  {%- assign in_cat = site.projects | where_exp: "p", "p.categories contains c.slug" -%}
  <li><a href="{{ c.url | relative_url }}">{{ c.name }} ({{ in_cat.size }})</a></li>
  {%- endfor -%}
</ul>
