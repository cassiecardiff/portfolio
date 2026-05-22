# Cassandra Christodolo, portfolio

Personal portfolio and blog for Cassie, senior user researcher at Torchbox.

## Stack

Eleventy for static site generation, deployed to Netlify from GitHub. Markdown for blog posts. No CMS. No client side framework.

## Local development

```bash
npm install
npm start
```

The dev server runs at `http://localhost:8080`.

## Build

```bash
npm run build
```

Output goes to `_site/`.

## Project shape

```
src/
  _data/        site-wide data, case studies, logos
  _includes/    layouts and partials, including SVG illustrations
  assets/       css, js, images, fonts
  blog/         markdown posts under blog/posts/
  work/         case study pages
  index.njk     homepage
  about.njk
  work.njk
  contact.njk
```

## Accessibility bar

WCAG 2.1 AA. Keyboard navigable. Reduced motion alternatives for every animation. Visible focus states everywhere.

## Voice rules

No em dashes. No Oxford commas. Sentences under 20 words. Plain language.

## Case study password protection

The four full case studies under `/work/*` are protected via Netlify role based redirects (see `netlify.toml`). Set up roles in the Netlify dashboard under Identity. Spotlights and the work index page are open.
