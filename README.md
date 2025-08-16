# Biavati Imóveis — Paraná Marketing Site

Vite + React + Tailwind CSS website to promote real-estate services in Paraná, Brasil. The site is a static SPA suitable for static hosting (e.g., Render Static Sites).

## Quick Start

- Prerequisites: Node.js 18.17+ (or 20+), npm.
- Install: `npm install`
- Develop (port 3000): `npm run dev` → http://localhost:3000
- Production preview (static): `npm run build` then `npm run start` (serves `build/`)

## Project Structure

- `src/App.tsx` — App shell (header, homepage, footer).
- `src/main.tsx` — React entry point.
- `src/components/` — UI components.
- `src/lib/` — helpers (links, media parsing).
- `src/styles/globals.css` — Tailwind base/components/utilities.
- `public/` — static assets (`logo.svg`, `favicon.svg`).
 
- Config — `vite.config.ts`, `tailwind.config.ts`, `postcss.config.js`, `tsconfig.json`.
- `tests/` — add when test suite is introduced.

## Customize

- Branding: replace `public/logo.svg` and `public/favicon.svg`.
- Contact: WhatsApp link is generated via env in `src/lib/links.ts`; email text lives in `src/components/SiteHeader.tsx` and `src/App.tsx`.
- Hero media: configure via env in `src/lib/media.ts`.

 

## Deploy on Render (Static Site)

1. Push this repo to your Git provider.
2. In Render, create a Static Site:
   - Build Command: `npm run build`
   - Publish Directory: `build`
   - Node version: 18+ (via Render settings or `.nvmrc` if you add one)
3. Deploy. The site is served as static files; no server process is needed.

## Scripts

- `npm run dev` — Vite dev server on port 3000.
- `npm run build` — Build to `build/`.
- `npm run start` — Preview static build on port 3000.
- `npm run preview` — Alias for `npm run start`.
- `npm run lint` — Placeholder; ESLint/Prettier to be added.

For contributor guidelines, see `AGENTS.md`.
