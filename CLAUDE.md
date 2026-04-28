# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server on port 8080
npm run build      # Production build (also copies dist/index.html → dist/404.html for SPA routing)
npm run build:dev  # Development mode build
npm run lint       # Run ESLint
npm run preview    # Preview production build
npm run deploy     # Deploy to GitHub Pages via gh-pages
```

## Architecture

WayGaming eSports — a Portuguese esports organization website. React SPA with Shopify ecommerce integration.

**Stack**: React 18 + TypeScript + Vite + Tailwind CSS + shadcn/ui

**Routing**: Uses `HashRouter` (not `BrowserRouter`) — all routes are hash-based (`/#/page`). This is intentional for GitHub Pages static hosting. The `postbuild` script copies `dist/index.html` to `dist/404.html` as a fallback.

**State**: Zustand (`src/stores/cartStore.ts`) manages the shopping cart with localStorage persistence. TanStack Query handles Shopify API data fetching.

**Shopify integration**: `src/lib/shopify.ts` wraps the Shopify Storefront GraphQL API. Products, collections, and checkout all go through this module.

**Component layers**:
- `src/pages/` — route-level page components
- `src/components/layout/` — Navbar, Footer, Layout wrapper
- `src/components/{feature}/` — feature-specific components (home, store, teams, players, wg-colosseum)
- `src/components/ui/` — shadcn/ui primitives (do not modify these directly; use the shadcn CLI)

**Path alias**: `@/` maps to `./src/` (configured in `vite.config.ts` and `tsconfig.json`).

**Styling**: Tailwind CSS with a custom theme in `tailwind.config.ts`. Colors are defined as HSL CSS variables. Custom fonts: Bebas Neue, Anton, Inter.

**Deployment**: GitHub Actions (`.github/workflows/static.yml`) deploys to GitHub Pages on push to main.
