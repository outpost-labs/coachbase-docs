# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `bun dev` — Start dev server (http://localhost:3000)
- `bun run build` — Production build
- `bun lint` — ESLint

## Architecture

This is a Next.js 16 documentation site using the **Tailwind Plus "Syntax" template**. It uses Markdoc for content rendering and Tailwind CSS v4.

### Content System

Documentation pages are **Markdoc files** at `src/app/docs/<slug>/page.md`. Each page uses YAML frontmatter with a `title` field. The page content is rendered through Markdoc's pipeline:

- `src/markdoc/nodes.js` — Custom node renderers (document → `DocsLayout`, headings with auto-slugification, fenced code blocks → `Fence` component)
- `src/markdoc/tags.js` — Custom Markdoc tags: `{% callout %}` (note/warning), `{% figure %}`, `{% quick-links %}`, `{% quick-link %}`
- `next.config.mjs` — Chains `@markdoc/next.js` with a custom search plugin; enables `.md` as a page extension

### Navigation

Sidebar navigation is defined manually in `src/lib/navigation.js` as a structured array of sections with links. Adding a new doc page requires both creating the `.md` file and adding an entry here.

### Search

Global search (⌘K) is powered by FlexSearch. The index is built at compile time by `src/markdoc/search.mjs`, which scans all `page.md` files via webpack loader. No configuration needed — it auto-indexes all doc pages.

### Key Directories

- `src/components/` — React components (JSX, not TSX)
- `src/styles/tailwind.css` and `src/styles/prism.css` — Stylesheets
- `src/lib/` — Utilities (navigation config, section extraction)
- `src/fonts/` — Local font files (Lexend)

### Conventions

- Components use `.jsx` extension (no TypeScript)
- Path alias `@/` maps to `src/`
- Styling uses Tailwind CSS v4 with `@tailwindcss/postcss`
- Dark mode supported via `next-themes`
