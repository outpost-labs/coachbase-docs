# CoachBase Docs

Documentation site for CoachBase, the SaaS CRM for independent coaches.

This repo contains the public-facing help center and product documentation used by CoachBase customers. It is built as a static documentation site with Next.js and Markdoc.

## Architecture

- `Next.js 16` with the App Router
- `React 19`
- `Markdoc` for markdown-driven docs pages
- `Tailwind CSS 4` for styling
- `FlexSearch` for local documentation search

Content lives primarily in [`src/app`](/Users/josh/Projects/coachbase-docs/src/app), with product docs under [`src/app/docs`](/Users/josh/Projects/coachbase-docs/src/app/docs). Shared rendering for Markdoc lives in [`src/markdoc`](/Users/josh/Projects/coachbase-docs/src/markdoc) and reusable UI components live in [`src/components`](/Users/josh/Projects/coachbase-docs/src/components).

## Getting Started

Install dependencies with Bun:

```bash
bun install
```

Start the local development server:

```bash
bun run dev
```

The docs site runs locally at [http://localhost:3001](http://localhost:3001).

## Available Commands

```bash
bun run dev
bun run build
bun run start
bun run lint
```

## Writing Docs

Docs pages are authored as `page.md` files and rendered through Markdoc. Feature guides currently live under:

- [`src/app/docs/features/clients`](/Users/josh/Projects/coachbase-docs/src/app/docs/features/clients)
- [`src/app/docs/features/scheduling`](/Users/josh/Projects/coachbase-docs/src/app/docs/features/scheduling)

The homepage content is in [`src/app/page.md`](/Users/josh/Projects/coachbase-docs/src/app/page.md).

## Search

The site includes built-in local search powered by FlexSearch. The search index is generated from the Markdoc pages in this repo. Search indexing logic lives in [`src/markdoc/search.mjs`](/Users/josh/Projects/coachbase-docs/src/markdoc/search.mjs).

## Deployment

Production builds use the standard Next.js build:

```bash
bun run build
```

This project is currently deployed on Netlify.

## Origins

This repo started from the Tailwind Plus Syntax template, but it has been adapted into CoachBase's end-user documentation site.
