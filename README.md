# manos.im

Personal website for [Emmanouil Konstantinidis](https://www.manos.im), built with Astro 6 and Tailwind CSS v4.

## Stack

- [Astro 6](https://astro.build) — static site generator
- [Tailwind CSS v4](https://tailwindcss.com) — via `@tailwindcss/vite`
- TypeScript — strict mode

## Commands

```sh
npm run dev              # Start dev server at localhost:4321
npm run build            # Build to ./dist/
npm run preview          # Preview production build locally
npm run prettier:check   # Check formatting
npm run prettier:apply   # Auto-format all files
```

## Environment

Copy `.env.example` to `.env` and set the required variables before running locally:

```sh
ENVIRONMENT="development"
SITE_URL="http://localhost:4321"
```

## Project structure

```text
src/
├── components/
│   ├── BlogContent.astro
│   ├── Button.astro          # Primary / secondary variants
│   ├── FeaturedProject.astro
│   ├── Footer.astro
│   ├── Glow.astro            # Ambient hero background
│   ├── Logo.astro
│   └── Navbar.astro
├── layouts/
│   └── Layout.astro
├── pages/
│   ├── index.astro           # Home
│   ├── projects.astro
│   └── blog/
│       ├── index.astro
│       └── [...slug].astro
├── posts/                    # MDX blog posts (content collection)
├── styles/
│   └── global.css            # Tailwind theme tokens + animations
└── utils/
    ├── blog.ts
    ├── constants.ts          # Site data: projects, socials, previously
    ├── meta.ts
    └── marked.ts
```
