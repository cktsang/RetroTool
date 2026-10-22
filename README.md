# Retro

Internal retrospective tool by Enrise. Frontend-only in v1: a Next.js App Router app backed by `localStorage` behind a typed data-access layer.

## Setup

Requires Node.js 24 (see `.nvmrc`) and npm 11. `engine-strict=true` makes installs fail on older Node versions.

```sh
npm ci                            # install (use `npm install` only when changing dependencies)
npx playwright install chromium   # browser for E2E tests
```

## Commands

| Command                           | Description                                                       |
| --------------------------------- | ----------------------------------------------------------------- |
| `npm run dev`                     | Start the dev server on http://localhost:3000.                    |
| `npm run lint`                    | Run ESLint; any warning fails.                                    |
| `npm run format:check`            | Check formatting with Prettier.                                   |
| `npm run format`                  | Format all files with Prettier.                                   |
| `npm run typecheck`               | Generate Next.js route types, then run `tsc --noEmit`.            |
| `npm run test`                    | Run unit, component and integration tests once with Vitest.       |
| `npm run test:watch`              | Run Vitest in watch mode.                                         |
| `npm run e2e`                     | Run Playwright tests against a production build on port 3100.     |
| `npm run build`                   | Create a production build.                                        |
| `npm run start`                   | Start the production build.                                       |
| `npm run verify`                  | Run format check, lint, typecheck, tests, build and E2E in order. |
| `npx playwright install chromium` | Install the Chromium browser used by E2E tests.                   |

## Known notes

- `npm audit` reports 5 high findings in one dev-only lint dependency chain (`braces`, `micromatch`, `fast-glob`, `eslint-config-next`). Accepted for now.
- `@mobile` tag matching is not implemented. The Playwright `mobile` project runs only files whose names match `*mobile*.spec.ts`.
- `jsdom` is pinned to 29.1.1 (see ADR-0001 deviation); newer versions need Node `^24.15.0`.
