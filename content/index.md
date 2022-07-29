---
layout: default
permalink: /
---
<nav class="nav-main">
  <h1>{{site.header}}</h1>
  <ul>
    <li><a href="#designs">Designs</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="{{- site.blog -}}">Blog</a></li>
  </ul>
</nav>

{%- include figure.html 
id="designs"
src="p2.png"
alt="Project"
title="Project"
figcaption="Lorem ipsum dolor" -%}

<div class="figure-full-mobile">
{%- include figure.html 
src="p2.png"
alt="Project"
title="Project"
figcaption="Lorem ipsum dolor" -%}

{%- include figure.html 
src="p3.png"
alt="Project"
title="Project"
figcaption="" -%}
</div>

{%- include figure.html 
src="p2.png"
alt="Project"
title="Project"
figcaption="Lorem ipsum dolor" -%}

{%- include figure.html 
src="p2.png"
alt="Project"
title="Project"
figcaption="Lorem ipsum dolor" -%}

# Projects
{% for project in site.projects %}
<article class="project">
  <img src="{{- project.img | prepend: 'content/img/' -}}">
  <div>
    <h2><a href="#">{{ project.name }}</a></h2>
    <p class="project-tags">
    {% for tag in project.tags%}
      {{ tag }}
    {% endfor %}
    </p>

    {{ project.content | markdownify }}
  </div>
</article>
{% endfor %}

# About
<nav class="nav-about">
  <ul>
    <li><a href="{{- site.github -}}">GitHub</a></li>
    <li><a href="{{- site.linkedin -}}">LinkedIn</a></li>
    <li><a href="{{- site.mastodon -}}">Mastodon</a></li>
  </ul>
  <ul>
    <li><a href="mailto:{{- site.mail -}}">Mail</a></li>
    <li><a href="{{- site.blog -}}">Blog</a></li>
  </ul>
</nav>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus nisi sem, non posuere neque convallis sed. Curabitur tellus erat, faucibus non tellus nec, feugiat feugiat erat. Phasellus aliquam, massa ut tincidunt condimentum, neque diam sodales magna, eu dictum mi libero at tortor. Nunc malesuada felis est, vel ultricies purus ultrices rutrum. Aenean mollis imperdiet dui, sed accumsan lorem volutpat nec.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus nisi sem, non posuere neque convallis sed. Curabitur tellus erat, faucibus non tellus nec, feugiat feugiat erat. Phasellus aliquam, massa ut tincidunt condimentum, neque diam sodales magna, eu dictum mi libero at tortor. Nunc malesuada felis est, vel ultricies purus ultrices rutrum. Aenean mollis imperdiet dui, sed accumsan lorem volutpat nec.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus nisi sem, non posuere neque convallis sed. Curabitur tellus erat, faucibus non tellus nec, feugiat feugiat erat. Phasellus aliquam, massa ut tincidunt condimentum, neque diam sodales magna, eu dictum mi libero at tortor. Nunc malesuada felis est, vel ultricies purus ultrices rutrum. Aenean mollis imperdiet dui, sed accumsan lorem volutpat nec.