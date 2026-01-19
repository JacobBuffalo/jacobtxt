# jacobtxt

A minimal, calm Jekyll blog designed for GitHub Pages.

## Local development

1. Install dependencies:

   ```bash
   bundle install
   ```

2. Run the site:

   ```bash
   bundle exec jekyll serve
   ```

3. Open <http://localhost:4000> in your browser.

## Posting workflow (Zapier-friendly)

Zapier (or any automation) can create a new post by committing a Markdown file into `_posts/` using the
standard naming convention: `YYYY-MM-DD-slug.md`.

Each post should include YAML front matter and use the `post` layout:

```markdown
---
layout: post
title: "Your post title"
date: 2025-01-01
excerpt: "Optional short summary for lists."
---

Your content here.
```

## Homepage status, links, and chatbox

- Update the live status text in `_config.yml` under `status`.
- Add or remove items in `_config.yml` under `links` to control the Links section.
- The chatbox stores a note in the visitor’s browser (localStorage). Remove the Chatbox section in `index.html` if you don’t want it.

## Visit counter

The footer includes a lightweight counter image from [hits.sh](https://hits.sh). Update the domain in
`_layouts/default.html`:

- **User site:** change `example.github.io` to `YOUR_USERNAME.github.io`.
- **Project site:** change `example.github.io` to `YOUR_USERNAME.github.io/YOUR_REPO`.

To remove the counter entirely, delete the single `<img class="visit-counter" ... />` line in
`_layouts/default.html`.
