# Repository Guidelines

## Project Structure & Module Organization
- Stack: Next.js 14 (App Router) + Tailwind CSS, deployed on Vercel.
- Key paths:
  - `src/app/`: routes, `layout.tsx`, and pages (`page.tsx`).
  - `src/app/globals.css`: Tailwind layers (base, components, utilities).
  - `public/`: static assets (`favicon.svg`, `logo.svg`).
  - Config: `next.config.ts`, `tailwind.config.ts`, `postcss.config.js`, `tsconfig.json`.
  - `tests/`: add when introducing automated tests; mirror `src/` structure.

## Build, Test, and Development Commands
- `npm run dev`: start Next.js on port 3000 (local development).
- `npm run build`: production build.
- `npm run start`: serve the build on port 3000.
- `npm run lint`: placeholder (configure ESLint/Prettier in a future PR).

## Coding Style & Naming Conventions
- TypeScript enabled with strict settings; prefer typed props and helpers.
- Indentation: 2 spaces. Components in `PascalCase`; route segments in `kebab-case`.
- Use Tailwind utility classes; keep class lists readable (layout → spacing → color).
- Use import alias `@/*` for modules under `src/`.

## Testing Guidelines
- Recommended stack: Vitest + React Testing Library for unit/UI; Playwright for e2e.
- Naming: `*.test.tsx` colocated under `tests/` mirroring `src/` (e.g., `tests/app/...`).
- Aim for fast, deterministic tests; prioritize core marketing logic and forms.
- Add `npm test` script once the test setup is introduced.

## Commit & Pull Request Guidelines
- Conventional Commits: `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `test:`, `build:`.
- Small, focused commits with clear bodies for context.
- PRs: concise description, linked issues, test plan, and screenshots/GIFs for UI changes.

## Security & Configuration Tips
- Do not commit secrets. Use `.env.local` and provide `.env.example` for required vars.
- Configure any Vercel Environment Variables in the dashboard.
- Static image optimization is unoptimized by default; define remote patterns if enabling Next Image.
