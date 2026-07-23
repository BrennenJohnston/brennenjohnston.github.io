---
layout: default
title: Collaborations
permalink: /collaborate/
---
<div class="container">
  <h1>Collaborations</h1>
  <p class="prose">Alongside my own designs, I collaborate with agencies, universities, and maker organizations on assistive technology projects. Below are a few ongoing partnerships, followed by the prototypes I'm currently iterating on. They are shared early on purpose, because real feedback from users, clinicians, and makers is what turns a rough prototype into a device that actually works for people.</p>

  <div class="prose">
    <h2>WATAP &amp; Sound Transit tactile maps</h2>
    <p>WATAP is partnering with Sound Transit and Portland State University to develop 3D-printed tactile transit maps that help riders who are blind or low vision navigate train stations by touch. The work explores hybrid maps with a detachable symbol key and research-based dimensions for tactile readability. See the <a href="{{ '/projects/tactile-maps/' | relative_url }}">tactile maps project</a> for prototypes and details.</p>

    <h2>UW CREATE &amp; the Kren Engineering-based Medicine Initiative</h2>
    <p>Through <a href="https://create.uw.edu/" rel="noopener">UW CREATE</a> (the Center for Research and Education on Accessible Technology and Experiences), I contribute to the project <em>Integrating Engineering and Rehabilitation Medicine to Improve Healthcare and Assistive Technology Access and Customizability</em>, funded through the <a href="https://kemi.uw.edu/projects" rel="noopener">Kren Engineering-based Medicine Initiative (KEMi)</a>. A focus of this work is developing more accessible documentation standards for DIY and 3D-printed assistive technology, so open designs are easier to share, reproduce, and adapt. Related efforts and repositories are gathered at <a href="https://a11yhood.org" rel="noopener">a11yhood.org</a>.</p>
  </div>

  <h2>Current prototypes</h2>
  {% assign prototypes = site.projects | where: "status", "prototype" | sort: "date" | reverse %}
  <ul class="card-grid" role="list">
    {% for p in prototypes %}
    <li>{% include project-card.html project=p %}</li>
    {% endfor %}
  </ul>
</div>
