# Biavati Imóveis — Paraná Marketing Site

Next.js (App Router) + Tailwind CSS website to promote real-estate services in Paraná, Brasil. Optimized for Vercel deployment and fast local iteration.

## Quick Start
- Prerequisites: Node.js 18.17+ (or 20+), npm.
- Install: `npm install`
- Develop (port 3000): `npm run dev` → http://localhost:3000
- Production preview: `npm run build && npm run start`

## Project Structure
- `src/app/` — routes, `layout.tsx`, and homepage `page.tsx`.
- `src/app/globals.css` — Tailwind base/components/utilities.
- `public/` — static assets (`logo.svg`, `favicon.svg`).
- Config — `next.config.ts`, `tailwind.config.ts`, `postcss.config.js`, `tsconfig.json`.
- `tests/` — add when test suite is introduced.

## Customize
- Branding: replace `public/logo.svg` and `public/favicon.svg`.
- Contact: update WhatsApp and email in `src/app/layout.tsx` and `src/app/page.tsx`.
- SEO: adjust `metadata` in `src/app/layout.tsx` (title, description, OG).

## Deploy on Vercel
1) Push this repo to your Git provider.
2) In Vercel, New Project → Import the repo.
3) Framework auto-detects Next.js. Build: `npm run build` (default). Dev Command (optional): `npm run dev`.

## Scripts
- `npm run dev` — Next dev server on port 3000.
- `npm run build` — Production build.
- `npm run start` — Start production server on port 3000.
- `npm run lint` — Placeholder; ESLint/Prettier to be added.

For contributor guidelines, see `AGENTS.md`.
