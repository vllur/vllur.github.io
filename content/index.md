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
src="blog_theme"
alt="Modern blog theme"
title="Modern blog theme"
figcaption="Modern blog theme"
link="https://vllur.github.io/Magazine/" -%}

<div class="figure-full-mobile">
{%- include figure.html 
src="artist_portfolio"
alt="Artist portfolio"
title="Artist portfolio"
figcaption="Artist portfolio"
link="https://themiczal.github.io/" -%}

{%- include figure.html 
src="artist_portfolio_mobile"
alt="Artist portfolio"
title="Artist portfolio"
figcaption="" -%}
</div>

{%- include figure.html
src="online_shop"
alt="Online clothing shop"
title="Online clothing store concept"
figcaption="Online clothing shop concept"-%}

# Projects
{% for project in site.projects %}
<article class="project">
  <picture>
    <source srcset="{{- project.img | prepend: 'content/img/' | append: '.webp' | relative_url  -}}" type="image/webp">
    <img src="{{- project.src | prepend: 'content/img/' | append: '.jpg' | relative_url  -}}" alt="{{ project.alt }}" draggable='false'>
  </picture>  
  <div>
    <h2><a href="{{ project.link }}">{{ project.name }}</a></h2>
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
    <li><a rel="me" href="{{- site.mastodon -}}">Mastodon</a></li>
  </ul>
  <ul>
    <li><a href="mailto:{{- site.mail -}}">Mail</a></li>
    <li><a href="{{- site.blog -}}">Blog</a></li>
  </ul>
</nav>

Hello. I'm interested in web development and web design. I like doing websites with Jekyll and designs in Figma and Inkscape. If you want to contact me, feel free to send an email.
