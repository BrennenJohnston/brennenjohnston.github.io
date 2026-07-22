---
layout: default
title: Prototypes & Collaboration
permalink: /collaborate/
---
<div class="container">
  <h1>Prototypes &amp; Collaboration</h1>
  <p class="prose">These projects are works in progress — designs I'm actively iterating on. They're shared early on purpose: real feedback from users, clinicians, and makers is what turns a rough prototype into a device that actually works for people. If something here interests you, please try it, break it, and tell me what happened.</p>

  <h2>Current prototypes</h2>
  {% assign prototypes = site.projects | where: "status", "prototype" | sort: "date" | reverse %}
  <ul class="card-grid" role="list">
    {% for p in prototypes %}
    <li>{% include project-card.html project=p %}</li>
    {% endfor %}
  </ul>

  <div class="prose">
    <h2>How to collaborate</h2>
    <ol>
      <li><strong>Comment on the model page.</strong> Every published design has a comments section — on <a href="https://makerworld.com/en/@WATAP_3D" rel="noopener">MakerWorld (WATAP_3D)</a>, <a href="https://www.printables.com/@Brengineered_4921802" rel="noopener">Printables (Brengineered)</a>, or <a href="https://www.thingiverse.com/Brennen_WATAP/designs" rel="noopener">Thingiverse (Brennen_WATAP)</a>.</li>
      <li><strong>Open a GitHub issue.</strong> For the OpenSCAD Assistive Forge, use <a href="https://github.com/BrennenJohnston/openscad-assistive-forge/issues" rel="noopener">the Forge issue tracker</a>. For anything else on this site, open an issue on this website's repository. <!-- TODO(owner): add the website repo issues URL after deploy --></li>
      <li><strong>Email me.</strong> Send feedback, questions, or collaboration ideas to <a href="mailto:your-email@example.com">your-email@example.com</a>. <!-- TODO(owner): replace with your real email address --></li>
    </ol>

    <h2>For AT professionals</h2>
    <p>The most useful feedback answers questions like: Did the device fit the person it was intended for? How much force did it take to use? How does it hold up to cleaning? What happened after a week of real use? Client outcomes — good and bad — directly shape the next iteration, and your observations reach far beyond a single client when they're folded back into an open design.</p>
  </div>
</div>
