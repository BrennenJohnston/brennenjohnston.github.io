---
layout: default
title: Home
---
<div class="container">
  <div class="hero">
    <h1>Free, open-source 3D-printed assistive technology</h1>
    <p>I'm Brennen Johnston, and I design 3D-printed assistive devices — from braille tools to daily-living aids. Every design here is free to download, print, and adapt.</p>
    <ul class="button-row" role="list">
      <li><a class="button" href="{{ '/projects/' | relative_url }}">Browse ready-to-print devices</a></li>
      <li><a class="button button--secondary" href="{{ '/collaborate/' | relative_url }}">See works in progress</a></li>
    </ul>
  </div>

  <h2>Recently added</h2>
  {% assign recent = site.projects | sort: "date" | reverse %}
  <ul class="card-grid" role="list">
    {% for p in recent limit: 3 %}
    <li>{% include project-card.html project=p %}</li>
    {% endfor %}
  </ul>

  <h2>Who this site is for</h2>
  <div class="audience-grid">
    <section aria-labelledby="audience-professionals">
      <h3 id="audience-professionals">AT professionals</h3>
      <p>Find field-tested device designs to print for your clients, see how custom builds solved real problems, and share feedback that improves the next iteration.</p>
    </section>
    <section aria-labelledby="audience-clients">
      <h3 id="audience-clients">Clients &amp; families</h3>
      <p>Browse what 3D printing can do — ready-to-print devices you can request or print locally, and one-of-a-kind builds that show what's possible.</p>
    </section>
    <section aria-labelledby="audience-makers">
      <h3 id="audience-makers">Makers</h3>
      <p>Download files, print devices for your community, collaborate on prototypes, and use the <a href="{{ '/resources/' | relative_url }}">Resource Hub</a> to plug into the wider AT maker network.</p>
    </section>
  </div>

  <section class="callout callout--help" aria-labelledby="wa-residents">
    <h2 id="wa-residents">Washington State residents</h2>
    <p>WATAP's 3D Printed Assistive Technology Program provides free 3D-printed assistive devices to Washington State residents. <a href="https://watap.org/3d-printed-assistive-technology" rel="noopener">See the program catalog and request form</a>.</p>
  </section>
</div>
