# HLC Energies — Website

Official institutional website for **HLC Energias Renováveis e Infraestruturas, LDA**
(`hlcenergies.com`). Bilingual (Portuguese / English), server-rendered, built on
**TanStack Start** (React + Vite) with **Tailwind CSS v4** and **TanStack Query**.

Content is grounded in the approved copy pack under [`assets/`](./assets); `COPY.md`
is the factual source of truth. HLC and CC1 are separate entities — every CC1 reference
project is attributed to CC1, and this is enforced at build time and in tests.

## Requirements

- Node.js ≥ 20
- pnpm (this project pins native build approvals in `pnpm-workspace.yaml`)

## Setup

```bash
pnpm install
cp .env.example .env   # fill in real values locally; never commit .env
pnpm dev               # http://localhost:3000
```

## Scripts

| Command | What it does |
|---|---|
| `pnpm dev` | Dev server with SSR + HMR at http://localhost:3000 |
| `pnpm build` | Production build (client + SSR); runs CC1 attribution validation |
| `pnpm generate-routes` | Regenerate `src/routeTree.gen.ts` |
| `pnpm test` | Vitest — incl. CC1 attribution validation |
| `pnpm exec tsc --noEmit` | Typecheck |

## Routes

- `/` → 307 redirect to `/pt` (Portuguese is authoritative)
- `/pt` — Portuguese home · `/en` — English home

## Structure

```text
src/
  content/     # typed PT/EN copy, reference-project data + attribution validation
  components/  # Nav, LanguageSwitcher, Footer, HomePage, ProjectCard
  lib/i18n.ts  # locale helpers + equivalent-page switching
  routes/      # __root (locale-aware shell), index redirect, pt/, en/
  styles.css   # Tailwind v4 + HLC blue/white/gold tokens
  integrations/tanstack-query/  # QueryClient provider + devtools
tests/         # Vitest — attribution validation
```

## Content & attribution controls

`src/content/validate.ts` throws at build/import time (and in tests) if any reference
project is missing CC1 attribution or is not attributed to CC1. Do not remove the
attribution notices — see `assets/09_AGENT_MASTER_PROMPT.md`.

## Not yet built (next phases)

- Contact form + secure server-function endpoint (honeypot, rate limiting, no PII logging)
- Inner pages: Technical Capacity, Capacity Transfer, per-project detail; Areas tabs/accordion
- SEO: sitemap, robots, hreflang alternate links, Open Graph, Organization schema
- Media/perf: AVIF/WebP, hero video + poster, self-hosted fonts; Lighthouse CI + axe
- Production hosting adapter + deployment (host TBD)
