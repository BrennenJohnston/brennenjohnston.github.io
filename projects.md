---
layout: default
title: My Projects
permalink: /projects/
---
<div class="container">
  <h1>My Projects</h1>
  <p class="prose">This is a collection of projects I found worth sharing. Some are published and ready to print, some are prototypes I'm still iterating on, and some were one of a kind builds for a specific person that might spark ideas.</p>

  <h2 class="visually-hidden">Badge legend</h2>
  <ul class="badge-legend" role="list">
    <li><span class="badge badge--ready">Ready to print</span> — published design with downloadable files.</li>
    <li><span class="badge badge--wip">Work in progress</span> — a prototype I'm iterating on.</li>
    <li><span class="badge badge--custom">Custom build</span> — a completed one off project made for a specific individual.</li>
  </ul>

  {% assign sorted = site.projects | sort: "date" | reverse %}
  {% assign by_year = sorted | group_by_exp: "p", "p.date | date: '%Y'" %}
  {% for year in by_year %}
  <h2 class="timeline-year">{{ year.name }}</h2>
  <ul class="card-grid" role="list">
    {% for p in year.items %}
    <li>{% include project-card.html project=p %}</li>
    {% endfor %}
  </ul>
  {% endfor %}
</div>
