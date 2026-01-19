---
layout: default
title: Blog
permalink: /blog/
---

<section class="post-list">
  <h1 class="section-title">Archive</h1>
  <ul>
    {% for post in site.posts %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <span class="post-date">{{ post.date | date: "%b %d, %Y" }}</span>
        {% if post.excerpt %}
          <p class="post-excerpt">{{ post.excerpt | strip_html | truncate: 160 }}</p>
        {% endif %}
      </li>
    {% endfor %}
  </ul>
</section>
