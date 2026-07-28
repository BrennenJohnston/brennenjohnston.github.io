---
layout: default
title: Projects
permalink: /projects/
---
{% assign sorted = site.projects | sort: "date" | reverse %}
{% assign ready = sorted | where: "status", "ready" %}
{% assign prototype = sorted | where: "status", "prototype" %}
{% assign custom = sorted | where: "status", "custom" %}
<div class="container">
  <h1>Projects</h1>
  <p class="prose">This is a collection of projects I found worth sharing. Some are published and ready to print, some are prototypes I'm still iterating on, and some were one-of-a-kind builds for a specific person that might spark ideas.</p>

  <nav aria-labelledby="jump-to">
    <h2 id="jump-to">Jump to a section</h2>
    <ul role="list">
      <li><a href="#ready-to-print">Ready to print ({{ ready.size }})</a></li>
      <li><a href="#work-in-progress">Work in progress ({{ prototype.size }})</a></li>
      <li><a href="#custom-builds">Custom one-off builds ({{ custom.size }})</a></li>
      <li><a href="#browse-by-category">Browse by category</a></li>
    </ul>
  </nav>

  {% include project-list.html projects=ready heading="Ready to print" id="ready-to-print" description="Published designs with downloadable files, ready to send to a printer." %}
  {% include project-list.html projects=prototype heading="Work in progress" id="work-in-progress" description="Prototypes I'm still iterating on. Feedback from testers is what moves these forward." %}
  {% include project-list.html projects=custom heading="Custom one-off builds" id="custom-builds" description="Completed builds made for one specific person, shared to spark ideas rather than to be reprinted as-is." %}

  <h2 id="browse-by-category">Browse by category</h2>
  <ul role="list">
    {% assign all_categories = "communication,daily-living,mobility,computer-access,gaming-recreation,eating-drinking,writing-drawing,other" | split: "," %}
    {% for cat in all_categories %}
    {% assign in_cat = site.projects | where_exp: "p", "p.categories contains cat" %}
    <li><a href="{{ '/projects/category/' | append: cat | append: '/' | relative_url }}">{{ cat | replace: "-", " " | capitalize }}</a> ({{ in_cat.size }})</li>
    {% endfor %}
  </ul>
</div>
