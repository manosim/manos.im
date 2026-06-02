# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm run dev              # Start dev server at localhost:4321
npm run build            # Build to ./dist/
npm run preview          # Preview production build locally
npm run prettier:check   # Check formatting
npm run prettier:apply   # Auto-format all files
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

Personal website for Emmanouil Konstantinidis, built with **Astro 6** and **Tailwind CSS v4** (via `@tailwindcss/vite`). TypeScript strict mode is enabled.

**Routing** — Astro file-based. Pages: `/` (`index.astro`), `/projects` (`projects.astro`), `/blog` (`blog/index.astro`), `/blog/[slug]` (`blog/[...slug].astro`).

**Layout** — `src/layouts/Layout.astro` is the single shared layout. It accepts a required `title` prop and an optional `showGlow` boolean (renders the ambient hero background on the home page). SEO metadata is built via `getMeta()` in `src/utils/meta.ts`, with site-wide defaults in `src/utils/constants.ts`.

**Styles** — Tailwind v4 is imported via `@import "tailwindcss"` in `src/styles/global.css`. All design tokens (colors, fonts, shadows) are defined in the `@theme {}` block. Custom utilities are defined with `@utility`: `container` (responsive padding), and `enter-delay-*` (animation delay steps used with the `.enter` entrance animation class).

**Components** — reusable Astro components live in `src/components/`. `Button.astro` supports `variant="primary"` and `variant="secondary"` and renders as `<a>` when `href` is provided. `Logo.astro` accepts a Tailwind size class via `class` prop (e.g. `class="size-8"`).

**Blog posts** — MDX files in `src/posts/`, wired up as a content collection via `src/content.config.ts`. Loaded with `getCollection("blog")` and routed through `src/pages/blog/`.

**Site data** — projects, socials, and previously-at list live in `src/utils/constants.ts`.

**Static assets** — Images and favicons go in `public/`.
