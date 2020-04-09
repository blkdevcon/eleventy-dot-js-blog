---
title: Your Blog Title
navTitle: Blog
tags: nav
weight: 3
layout: layouts/archive
pagination:
  data: collections.posts
  size: 3
  alias: posts
  reverse: true
permalink: "{{ site.en.postsArchive.url }}/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber + 1 }}/{% endif %}index.html"
---

Content for your blog landing page that you’d like to appear before the list of posts.

Anything else you’d like to add to this page can go in `_includes/layouts/archive.11ty.js`.
