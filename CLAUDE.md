# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm run dev          # Start dev server at localhost:4321
npm run build        # Build to ./dist/
npm run preview      # Preview production build locally
npm run prettier:check  # Check formatting
npm run prettier:apply  # Auto-format all files
```

No test suite exists.

## Environment

Copy `.env` and set the required vars before running locally — Astro validates them at build/dev time:

```
ENVIRONMENT="development"
SITE_URL="http://localhost:4321"
```

Both vars are required (non-optional) and defined in `astro.config.mjs`'s `env.schema`.

## Architecture

Personal website for Emmanouil Konstantinidis, migrated from Gatsby to **Astro 6** with **Tailwind CSS v4** (via `@tailwindcss/vite`). TypeScript strict mode is enabled.

**Routing** — Astro file-based: every `.astro` or `.md` file in `src/pages/` becomes a route.

**Layout** — `src/layouts/Layout.astro` is the single shared layout. It pulls SEO metadata via `getMeta()` from `src/utils/meta.ts`, which combines a page `title` prop with site-wide defaults from `src/utils/constants.ts`. All pages pass a `title` prop to `<Layout>`.

**Styles** — Tailwind v4 is imported via `@import "tailwindcss"` in `src/styles/global.css`. Custom theme tokens go in the `@theme {}` block there. The `container` utility is also defined there with responsive padding.

**Blog posts** — Markdown files live in `src/posts/` (not yet wired up to routes as of the current branch).

**Static assets** — Images and favicons go in `public/`.
