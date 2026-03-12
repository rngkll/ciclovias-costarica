# Agent Instructions: Ciclovias Costa Rica


## Project Overview

This document is the single source of truth for agentic contributors working on `ciclovias-app`. It captures current build commands, code style expectations, and productivity notes to help keep the project intentional, readable, and easy to extend.

This project aims to check and display the current state of bike lanes across Costa Rica. The codebase is in early stages and will evolve to include mapping, data collection, and visualization features.

## Rules
- Every documentation is going to be in english
- Site should be translatable to english, spanish and french
- Main language of the site is going to be spanish
- Everything is open source

## Tool selection
- vue.js
- CyclOSM

## Quick Context

- **Framework**: Vue 3 + Vite with `script setup` + Pinia for state.
- **Styling**: Tailwind CSS 4 via `@tailwindcss/vite` plus component-scoped CSS modules.
- **Routing + i18n**: `vue-router@5` and `vue-i18n@11`, with locales in `src/i18n/locales/{en,es,fr}.json` and the default site language Spanish.
- **Data focus**: Geographic data follows WGS84 (long, lat) and the UI prioritizes Costa Rican bike-lane insight.

## Env Setup

- Node 20+ (locked via `engines.node`).
- TypeScript 5.9.x with `vue-tsc --build` for type safety.
- Alias `@` → `src` configured in `vite.config.ts` and `tsconfig.*`.

## Build / Dev / Test Commands

- `npm install` — install deps (run once per machine or after dependency bump).
- `npm run dev` — hot-reload local site at http://localhost:5173 (Vite dev server).
- `npm run build` — production build (runs `type-check` then `vite build`).
- `npm run type-check` — static type validation across the project via `vue-tsc`.
- `npm run preview` — preview the production build locally (`vite preview`).

### Lint / Format

- `npm run lint` — umbrella task that runs both `lint:eslint` and `lint:oxlint` via `npm-run-all2`.
- `npm run lint:eslint` — ESLint (Vue + TypeScript + Oxc) with `--fix` and cache enabled.
- `npm run lint:oxlint` — `oxlint . --fix`, which enforces additional correctness rules.
- `npm run format` — Prettier applies the config under `.prettierrc.json` (single quotes, no semicolons, 100 print width).

### Running Tests

- This repo currently ships without explicit test scripts—the `scripts` block has no `test` entry and no spec files yet.
- When you add a test runner (Vitest, Jest, or playwright, etc.), add a dedicated script such as `npm run test`.
- **Single file**: mimic the future command with `npm run test -- path/to/suite.spec.ts` or `npm run test -- path/to/file.test.ts` once available.
- Focus on small, deterministic units (composables, services) before adding UI coverage.

## Code Style Guidelines

### Imports

- Order imports consistently: 1) external packages, 2) shared internal utilities or stores (using alias `@`), 3) types/interfaces, 4) styles/assets.
- Keep imports explicit—avoid `import *`.
- Prefer alias paths (e.g., `@/components`) when available to prevent brittle relative paths.
- Always remove unused imports before a PR (ESLint + OXLint catch leftovers but tidy proactively).

### Naming & Organization

- **Files**: kebab-case (`bike-lane-map.vue`, `map-utils.ts`).
- **Components / Classes**: PascalCase (`BikeLaneGrid`, `MapStore`).
- **Functions / Composables**: camelCase; Boolean-returning helpers should use `is`, `has`, or `should` prefixes (`isVisible`, `hasValidGeometry`).
- **Constants**: SCREAMING_SNAKE, especially for config values, string literals, or API URLs.
- **Stores & Composables**: keep hooks focused (`useBikeLaneFilters`, `useMapBounds`) and colocate related types near usage.

### Vue / TypeScript Patterns

- Prefer `<script setup lang="ts">` for component logic.
- Keep props typed with `defineProps` + `PropType` when necessary; provide defaults using `withDefaults`.
- Use `defineEmits` with typed event payloads.
- Export composables/stores as named exports; prefer `const useBikeLanesStore = defineStore('bike-lanes', { ... })` over anonymous defaults.
- Avoid `any`: either strongly type an object or rely on inference; explicit return types for async helpers are encouraged for clarity.

### State + Stores

- Pinia stores should expose getters and actions that mirror business intent (no low-level mutations in consumers).
- Keep state normalized, co-locate shape definitions (interfaces) near the store file.
- Use `store.$hydrate` or `setTimeout` sparingly—prefer derived getters or computed values.

### Styling

- Base styles live in `src/assets/main.css` & `base.css`; component styles should use `<style scoped>`/module syntax.
- Tailwind utility classes are allowed inside templates but keep markup readable by grouping related utilities and adding comments for dense patterns.
- Use CSS variables for reusable color/spacing tokens (especially for gradients or themes).
- Global gradients/background shapes should feel intentional—avoid plain flat walls; prefer layered gradients or subtle texture spans.

### Formatting & Linting Behavior

- The `.prettierrc.json` expects no semicolons, single quotes, and a 100-char print width—stick to it even outside Prettier runs.
- ESLint config comes from `eslint.config.ts` (Vue essentials + OXLint). Align with rules like `correctness: error` and respect `.editorconfig` whitespace settings.
- Auto-fix linters before reviews; if lint errors remain, capture rationale in the PR description.

### Error Handling and Side Effects

- Wrap async API calls in `try/catch`, log context details via `console.error`/custom logger before surfacing to UI.
- Return structured responses (`{ success: boolean, data?, error? }`) from services backing UI components.
- Validate inputs at boundaries—component props, API responses, and user-submitted forms should all be type-guarded.
- Fail fast: use early returns in migrations or data transforms to skip invalid shapes rather than letting them propagate.

### Testing & Reliability (future-focused)

- Design tests around business logic: map filters, locale switching, report submission.
- Adopt Arrange-Act-Assert structure; mock services (Leaflet, external APIs) when necessary.
- Capture edge cases for geographic data (null coords, out-of-bounds lat/lng).
- When adding e2e specs, keep them limited (a handful of flows) to avoid flaky runs behind heavy map rendering.

## Repository Etiquette

- Document decisions—use inline comments sparingly but write short ADRs in `docs/` or `RESEARCH.md` when direction is uncertain.
- Keep files under ~300 lines when practical; split large components into logical subcomponents + composables.
- Respect Spanish-first, multilingual UI goals; wrap visible strings with `i18n.t()` or `t()` helpers in components.
- No `.cursor/rules` or `.github/copilot-instructions.md` exist currently—if they appear, integrate their directives here and note the addition.

## Git & Collaboration

- Use conventional commits (e.g., `feat(map): add bike lane heatmap`). Mention issues when relevant.
- Rebase or merge cleanly; resolve conflicts locally, run lint/type-check before pushing.
- Tag PRs that introduce translations so reviewers can verify all languages.

## Monitoring & Observability

- Keep logging concise; include route/id context for failures (e.g., `console.error('Fetch failed on /map', { route: router.currentRoute.value }`).
- Track broken maps: capture Leaflet errors and surface them via UI alerts with retry hints.

## Suggested Agent Workflows

1. Start by running `npm run type-check` + `npm run lint` to confirm a clean slate.
2. Build (`npm run build`) before PRs to guard against bundler regressions.
3. If adding tests, create targeted scripts that wrap the chosen runner and document them here.
4. Update this AGENTS file whenever you introduce new tooling, formatters, or global rules.

This document should grow with the repo—keep it precise, actionable, and written in English. Verify new guidance against existing patterns before generalizing.
