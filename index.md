---
layout: home
title: Home
list_title: Latest projects
nav_icon: /assets/images/icons/nuvola/apps-kfm_home.png
---
<section class="half">
  <div class="window glass active">
    <div class="title-bar">
      <div class="title-bar-text"><h1>Open-source 3D-printed assistive technology</h1></div>
    </div>
    <div class="window-body has-space">
      <p>Hi, I'm Brennen! I lead the 3D Printed Assistive Technology Program for WATAP, providing <a href="https://watap.org/3d-printed-assistive-technology" rel="noopener">free 3D-printed assistive devices and resources to Washington state residents</a>.</p>
      <p>I work to connect engineering, medicine, and the disability community, primarily through open-source design.</p>
      <p>You can learn more about WATAP's wider mission here: <a href="https://watap.org/" rel="noopener">watap.org</a>.</p>
      <p>Every design here is free to download, print, and adapt.</p>
      <ul role="list">
        <li><a href="{{ '/projects/#ready-to-print' | relative_url }}">Browse ready-to-print devices</a></li>
        <li><a href="{{ '/projects/#work-in-progress' | relative_url }}">See works in progress</a></li>
        <li><a href="{{ '/collaborations/' | relative_url }}">Collaborations</a></li>
      </ul>
    </div>
  </div>
</section>

<section class="half">
  <div class="window glass active">
    <div class="title-bar">
      <div class="title-bar-text"><h2>Welcome</h2></div>
    </div>
    <div class="window-body has-space">
      <img src="{{ '/assets/images/projects/click-me-switch/click-me-switch-07.jpg' | relative_url }}" width="{{ site.data.image-sizes['/assets/images/projects/click-me-switch/click-me-switch-07.jpg'].width }}" height="{{ site.data.image-sizes['/assets/images/projects/click-me-switch/click-me-switch-07.jpg'].height }}" alt="Three finished Click Me switches on a wood table, each with a different keycap. Back left: a flat lime-green keycap with a finely textured top, in a black housing over a grey layer and a light blue base. Back right: a tall lime-green keycap whose sloped sides rise to a raised flat square, in a magenta housing over a grey layer and a light blue base. In front: an all-black Click Me with a tall red keycap shaped like a four-sided pyramid, with a raised, finely ridged X on its peak whose arms point to the corners.">
      <p>Three of those keycaps printed and in use, with the housing parts printed in different colours. The red one in front has the tactile pattern.</p>
    </div>
  </div>
</section>

<section class="full">
  <h2 class="post-list-heading">{{ page.list_title | default: "Posts" }}</h2>
  {%- assign projects = site.projects | sort: "date" | reverse -%}
  <ul class="post-list" role="list">
    {%- for post in projects limit: 3 -%}
    <li>{% include project-card.html project=post %}</li>
    {%- endfor -%}
  </ul>
</section>

<section class="full" aria-labelledby="wa-residents">
  <div class="window glass active">
    <div class="title-bar">
      <div class="title-bar-text"><h2 id="wa-residents">Washington State residents</h2></div>
    </div>
    <div class="window-body has-space">
      <p>WATAP's 3D Printed Assistive Technology Program provides free 3D-printed assistive devices to Washington State residents. <a href="https://watap.org/3d-printed-assistive-technology" rel="noopener">See the program catalog and request form</a>.</p>
    </div>
  </div>
</section>

<section class="small">
  <div class="window glass active">
    <div class="title-bar">
      <div class="title-bar-text"><h2>Resource Hub</h2></div>
    </div>
    <div class="window-body has-space">
      <p><a href="{{ '/resources/' | relative_url }}">Here is my curated list of DIY (do it yourself) assistive technology resources and maker communities.</a></p>
    </div>
  </div>
</section>

<section class="small">
  <div class="window glass active">
    <div class="title-bar">
      <div class="title-bar-text"><h2>Link to this site</h2></div>
    </div>
    <div class="window-body has-space">
      <p><a class="post-link" href="{{ '/' | relative_url }}">DIY Assistive Technology created by Brennen</a></p>
      <label for="link-code">Code for a link to this site</label>
      <textarea id="link-code" rows="3">&lt;a href="https://brennenjohnston.github.io/"&gt;DIY Assistive Technology created by Brennen&lt;/a&gt;</textarea>
    </div>
  </div>
</section>

{% include home-sidebar.html %}
