---
layout: default
title: Home
---
<div class="container">
  <div class="home-grid">
    <div class="home-main">
      <div class="hero">
        <h1>Open-source 3D-printed assistive technology</h1>
        <p>Hi, I'm Brennen! I lead the 3D Printed Assistive Technology Program for WATAP, providing <a href="https://watap.org/3d-printed-assistive-technology" rel="noopener">free 3D-printed assistive devices and resources to Washington state residents</a>.</p>
        <p>I work to connect engineering, medicine, and the disability community, primarily through open-source design.</p>
        <p>You can learn more about WATAP's wider mission here: <a href="https://watap.org/" rel="noopener">watap.org</a>.</p>
        <p>Every design here is free to download, print, and adapt.</p>
        <ul class="button-row" role="list">
          <li><a class="button button--green" href="{{ '/projects/' | relative_url }}">Browse ready-to-print devices</a></li>
          <li><a class="button" href="{{ '/collaborate/' | relative_url }}">See works in progress</a></li>
        </ul>
      </div>

      <h2>Recently added</h2>
      {% assign recent = site.projects | sort: "date" | reverse %}
      <ul class="card-grid" role="list">
        {% for p in recent limit: 3 %}
        <li>{% include project-card.html project=p %}</li>
        {% endfor %}
      </ul>

      <section class="callout callout--help" aria-labelledby="wa-residents">
        <h2 id="wa-residents">Washington State residents</h2>
        <p>WATAP's 3D Printed Assistive Technology Program provides free 3D-printed assistive devices to Washington State residents. <a href="https://watap.org/3d-printed-assistive-technology" rel="noopener">See the program catalog and request form</a>.</p>
      </section>
    </div>

    {% include home-sidebar.html %}
  </div>
</div>
