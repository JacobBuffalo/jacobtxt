# jacobtxt

A minimal, calm Jekyll blog designed for GitHub Pages.

## Local development

1. Install dependencies (first time only):

   ```bash
   bundle install
   ```

2. Run the site:

   ```bash
   bundle exec jekyll serve
   ```

3. Open <http://localhost:4000> in your browser.

> If you don't already have a `Gemfile`, you can create one with `bundle init` and then add the
> `github-pages` gem per the GitHub Pages documentation.

## Posting workflow (Zapier-friendly)

Zapier (or any automation) can create a new post by writing a Markdown file into `_posts/` using the
standard naming convention: `YYYY-MM-DD-title.md`.

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

## Guestbook setup

The guestbook uses [Giscus](https://giscus.app) (GitHub Discussions). To activate it:

1. Enable Discussions in your GitHub repository.
2. Create a discussion category named `Guestbook` (or update the page to match yours).
3. Replace the placeholder values in `guestbook.md`:
   - `data-repo`
   - `data-repo-id`
   - `data-category`
   - `data-category-id`

## Visit counter

The footer includes a lightweight counter image from [hits.sh](https://hits.sh). Update the domain in
`_layouts/default.html` from `example.github.io` to your live site, or delete the `<img>` entirely to
remove it.
