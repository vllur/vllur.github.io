---
layout: default
permalink: /
---
<nav class="nav-main">
  <h1>{{site.header}}</h1>
  <ul>
    <li><a href="#websites">Websites</a></li>
    <li><a href="#designs">Designs</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="{{- site.blog -}}">Blog</a></li>
  </ul>
</nav>

<section class="splide">
  <h3 id="websites" class="figure-header">Websites</h3>
  <div class="splide__track">
		<ul class="splide__list">
			<li class="splide__slide">
        {%- include figure.html
        src="blog_theme"
        alt="Modern blog theme"
        title="Modern blog theme"
        figcaption="Modern blog theme"
        link="https://vllur.github.io/Magazine/" -%}
      </li>
			<li class="splide__slide">
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
      </li>
		</ul>
  </div>
</section>

<section class="splide">
  <h3 id="designs" class="figure-header">Designs</h3>
  <div class="splide__track">
		<ul class="splide__list">
			<li class="splide__slide">
        {%- include figure.html
        src="online_shop"
        alt="Online clothing shop"
        title="Online clothing store concept"
        figcaption="Online clothing shop concept"-%}
      </li>
		</ul>
  </div>
</section>

<script src="{{- 'assets/js/splide_conf.js' | relative_url -}}"></script>

<section>
<h3 class="figure-header"><a href="{{- site.blog -}}">Blog</a></h3>
{%- include figure.html
src="blog"
img_href_override=site.blog
alt="Screenshot of blog post"
title="Blog"
figcaption="Blog about web, design and web design "-%}
</section>

<section class="section-about">
<h1 id="about">About</h1>
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

<p>Hello. I'm interested in web development and web design. I like doing websites with Jekyll and designs in Figma and Inkscape. If you want to contact me, feel free to send an email.</p>
</section>