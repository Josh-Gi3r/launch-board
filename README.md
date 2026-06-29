<div align="center">

# Launch Board

### Spin up your own Product Hunt — makers submit, the crowd browses, searches, and upvotes.

<a href="#"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript"></a>
<a href="#"><img src="https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React"></a>
<a href="#"><img src="https://img.shields.io/badge/Vite_7-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite"></a>
<a href="#"><img src="https://img.shields.io/badge/License-MIT-555555?style=flat-square" alt="MIT License"></a>

</div>

<div align="center"><img src="./docs/hero.png" alt="Launch Board screenshot" width="90%" /></div>

---

Launch Board is a rebrandable, self-hosted launch board for whatever niche you care about — a Product-Hunt-style site where makers submit products through a review form, the crowd browses and searches a catalog, and upvotes push the best work to the top of a trending grid. It's a React single-page app with a neo-brutalist design system and exactly one real write path: a pluggable submission backend you point at Supabase, your own REST API, or nothing at all (demo mode). Built for indie hackers, accelerators, and agencies who want a polished directory live in an afternoon without designing or wiring a front end from scratch.

**Self-hosted. Your brand, your data, your infrastructure.**

## What you can build

- **A niche launch board** — a Product-Hunt-style home for AI tools, open-source apps, or web3 projects where makers submit and the crowd upvotes.
- **An accelerator or community showcase** — collect cohort submissions into Supabase, then curate a public gallery with a builder roster, cohort stats, and a partners directory (the Builders page ships ready for this).
- **A hackathon or demo-day board** — take entries through the form, list them in a searchable library, and let attendees vote on favorites in-session.
- **An internal tools directory** — teams submit apps, everyone browses, filters by category, and bookmarks; leadership sees what's trending.
- **A white-label client site** — an agency starting point for any "directory + submission" build, rebranded through two config files.
- **A marketplace or app-store prototype** — listings, categories, search, and a product detail page to validate the idea before building real infrastructure.

## Features

Everything below is in the code today. The honest line between "real" and "scaffolded" is in [Status](#status--whats-real-vs-stubbed).

### Submission flow

- **Hand-rolled submit form with a full state machine.** Captures product name, tagline, category (a `<select>` populated from your config categories), description, website URL (`type=url`), an optional GitHub/source URL, pricing model (radio: FREE / FREEMIUM / PAID / OPEN SOURCE), and contact email. The submit button stays **disabled until both the Terms/Community-Guidelines checkbox is ticked and a pricing model is chosen**. It walks through loading (`SUBMITTING...`), a success screen (`SUBMISSION RECEIVED / reviewed within 48 hours`), and inline error states, with a **SUBMIT ANOTHER** button that resets the entire form. Form fields are mapped from camelCase to the snake_case `ProductSubmission` payload. Built with plain `useState` + native HTML5 validation — no `react-hook-form` or `zod`.
- **Pluggable submission backend (repository + adapter seam).** `getRepository()` is a memoized async factory that resolves an adapter by env-var precedence: **Supabase → REST → demo no-op**. Adapters are **dynamically imported**, so the SDK for whichever backend you don't use never enters the bundle. A single `ProductSubmission` interface is the shared contract across all three.
- **Supabase adapter (default).** Inserts into `public.product_submissions` with `status: 'pending'` and `created_at: new Date().toISOString()`, and throws on any Supabase error. `.env.example` ships the full `CREATE TABLE` DDL plus an RLS **"anon can insert"** policy — insert-only, with no public select.
- **REST adapter.** POSTs `{ ...data, status: 'pending' }` as JSON to `${baseUrl}/submissions`; on a non-2xx it reads the response body and throws `Submission failed: <status> <text>`.
- **Seamless demo mode.** With no backend env set, the demo repository just `console.info`s the payload — and the form goes further: it **catches network errors whose message includes `Failed to fetch` or `Invalid URL` and still shows the success screen**, so a fresh clone demos the whole flow end-to-end without a backend. Other errors surface in an inline error box.

### Browse, search & vote

- **Client-side upvoting on the Trending grid.** Vote counts seed from your config into React state. Clicking **VOTE_UP** increments that product's count and flips the button to a locked **VOTED** (cursor-default, no re-voting in the session).
- **Live, reactive aggregate counters.** Voting on any card updates **two** aggregate tallies at once — the header **Community Votes** badge and the Community Pulse **Total Votes Cast** panel — both reducing over all live vote values and formatted with `toLocaleString()`.
- **Searchable + filterable Library.** Live, case-insensitive search matches across **both title and description** (not just the name). Category filter tabs are `['ALL', ...your 6 categories]`, filtered via `useMemo`. The header shows a correctly pluralized count (`N products indexed`), the search box has a clear (×) button, and the empty state (`No products found` + `search_off` icon) offers a **CLEAR FILTERS** reset. A **LOAD MORE PRODUCTS** button is present as a placeholder.
- **Per-card bookmarking.** Each Library card has a bookmark toggle backed by a `Set<number>` in component state; toggling flips the icon between outlined/filled and highlights the border/background. `e.preventDefault()` stops the card's navigation while bookmarking. In-memory only.
- **Per-card hover accent shadow.** Library cards apply a colored 12px hard box-shadow on hover via a `shadowColors` lookup (primary violet / secondary cyan / tertiary lime) keyed by each product's `color` field, cleared on mouse-leave.

### Pages

- **Home.** Hero (badge, headline, dual CTAs to `/library` and `/submit`), a horizontally-scrollable featured-product carousel of rotated neo-brutalist cards, the **Trending Now** grid (live voting, a `HOT_RELEASE` gradient-border treatment for hot items, padded index numbers), a Browse Library preview (3 cards), an Accelerator/Cohort CTA with a `BOOST` watermark and 4 perk tiles, the **Community Pulse** (animated percentage progress bars plus the live total-votes panel), and a Partners strip (grayscale→color on hover).
- **Builders / Accelerator roster.** A tertiary-colored hero, a 4-stat band (`240+ launched / $42M raised / 12 cohorts / 98% satisfaction` — explicitly commented "replace with real numbers"), builder profile cards from config (handle, real name, product, cohort, raised amount, avatar with grayscale→color hover, accent color), a "What You Get" 6-perk grid, a 5-step connected timeline (Apply → Interview → Selection → Build → Launch), and a gradient CTA.
- **Partners directory.** A tier legend (CORE / PROTOCOL / INFRASTRUCTURE) whose tier→accent color comes from your config `partnerTiers`, partner cards that open each partner's URL in a new tab (`rel="noopener noreferrer"`) with a category chip and description, plus a "Become a Partner" CTA with stat tiles.
- **Product detail.** Breadcrumb, hero image, a title block with version/STABLE tag and verified badge, a 4-image screenshot gallery, a 6-item KEY FEATURES grid, 3 community reviews with 5-star ratings/handles/dates, and a sticky sidebar (pricing, Download Now + View Source buttons, stats, tag chips, and related products linking back to `/library`).
- **About / Manifesto.** A static mission page — "The Open Product Board" hero, a "What We Are" block (Product Index / Open Template), a "What We Believe" declaration, and a 6-item Core Principles grid. Served at **both `/about` and the legacy `/manifesto` alias**.
- **404.** A dedicated not-found page for unmatched routes.

### Design, shell & infrastructure

- **Tailwind 4 theme-token system.** An `@theme` block defines a Material-3-style palette — primary violet `#a855f7`, secondary cyan `#22d3ee`, tertiary lime, a full dark surface/container ramp, error and outline — plus font tokens (Space Grotesk for headlines/labels, Manrope for body) and small border radii. A comment block flags the **three accent groups as the rebrand knobs**. Includes Material Symbols outlined/filled font-variation rules and a pure-CSS, **inline-SVG `feTurbulence` "grainy-gradient" hero** — zero image dependency.
- **Rebrand-by-config layer (two files).** `site.ts` holds identity (name, tagline, description), auto-year copyright, the nav array, the **6 categories (CREATIVE / UTILITIES / SECURITY / WEB3 / SYSTEM / OTHER) shared by both the Library filter and the Submit dropdown** so they never drift, and the `partnerTiers`→color map. `data.ts` holds all catalog content: featured, trending, library preview, community votes, ecosystem partner names, the 12-item `allProducts` list, 6 builders, and 6 partners.
- **Responsive header.** A fixed translucent, backdrop-blurred nav with a violet hard-shadow, desktop links from config with active-route underline highlighting (`useLocation`), a Submit Product CTA, a decorative `account_circle` icon, and a mobile hamburger that opens a full-screen overlay menu (animated bars→X).
- **Footer.** A 4-column layout (brand + 3 social tiles, Discover links, Build links, and a newsletter email capture) over a bottom bar with config-driven copyright and Terms/Privacy/API Docs/Status links. (Social links, newsletter, and legal links are placeholders.)
- **Provider-agnostic AuthDialog (scaffold).** A self-contained Radix sign-in modal taking `providerName` / `providerDescription` / `logo` / `onLogin`, supporting both controlled and uncontrolled open state — ready to wire to any OAuth. Not mounted by default (no-auth mode).
- **ThemeProvider + useTheme (scaffold).** A context provider with `defaultTheme`, a switchable flag, light/dark via the `documentElement.dark` class, and localStorage persistence. Present but not mounted — the app runs hardcoded dark.
- **Minimal Express production server.** Serves the built SPA from `dist/public` (or `./public` in prod) with a catch-all `app.get('*')` that returns `index.html`, so client-side routing survives deep links and refreshes. Configurable `PORT` (default 3000). The build is `vite build` plus an esbuild bundle of `server/index.ts` to ESM.
- **shadcn / Radix UI kit.** ~50 prebuilt `ui/` primitives (dialog, dropdown, carousel, chart, command, sidebar, sonner, form, and more). `Input`/`Textarea` use a custom `useComposition` hook for correct IME composition handling. Vite aliases: `@` → `client/src`, plus `@shared` and `@assets`.

### What makes it nice to work with

- **One contract, three swappable backends.** The dynamic-import adapter pattern means Supabase, REST, and demo are selected purely by env vars, with documented precedence — and the unused SDK is never bundled.
- **A demo that never looks broken.** No env config required, and the Submit form swallows `Failed to fetch` / `Invalid URL` to still show success, so a fresh clone demos the full loop with zero setup.
- **A neo-brutalist design system done right.** Hard offset shadows, skewed accents, grayscale→color hovers, and a hero noise texture generated entirely from an inline SVG `feTurbulence` — no image assets.
- **A genuinely small rebrand surface.** `site.ts` for identity/nav/categories/tiers and `data.ts` for all catalog content, with categories shared between the Library filter and the Submit form.

## Tech stack

- **Frontend:** React 19 · TypeScript · Vite 7 · TailwindCSS 4 (`@theme` tokens) · react-router-dom 7 (`BrowserRouter`)
- **UI & icons:** Radix UI / shadcn component kit · lucide + Google Material Symbols · Space Grotesk + Manrope fonts
- **Data:** pluggable repository — Supabase JS client (default) or a generic REST adapter, with a demo no-op fallback
- **Server:** minimal Express 4 static SPA host (catch-all → `index.html`), bundled with esbuild

> Note: `framer-motion`, `recharts`, `next-themes`, `sonner`, `react-hook-form`, and `zod` are in `package.json`, but they're pulled in only by the bundled shadcn `ui/` kit — the actual pages barely touch it. The Submit form, in particular, is hand-rolled with `useState` and native validation, not `react-hook-form`/`zod`.

## Quickstart

```bash
git clone <your-fork-url>
cd launch-board
cp .env.example .env      # optional — demo mode runs with none of these set
npm install
npm run dev               # Vite dev server
```

Build and serve the production bundle:

```bash
npm run build
npm start                 # http://localhost:3000
```

## Configuration

The submission form picks its backend from environment variables. With none set, it runs in demo mode.

| Env var                  | Purpose                                                              | Default / notes                                |
| ------------------------ | ------------------------------------------------------------------- | ---------------------------------------------- |
| `VITE_SUPABASE_URL`      | Supabase project URL (Project Settings → API)                       | Blank → demo mode. Takes precedence over REST. |
| `VITE_SUPABASE_ANON_KEY` | Supabase anon key; writes guarded by your RLS insert policy         | Blank → demo mode                              |
| `VITE_API_URL`           | Your own endpoint that accepts a POST `ProductSubmission` JSON body | Used only if the Supabase vars are unset       |
| `PORT`                   | Express server port                                                 | `3000`                                         |
| `NODE_ENV`               | `development` / `production`                                        | `development`                                  |

**Adapter resolution order:** Supabase (if URL + anon key set) → REST (if `VITE_API_URL` set) → demo mode (console-logs the submission and shows the success screen without saving).

The full Supabase table schema and the required RLS insert policy live in `.env.example`.

## Make it yours

1. **Branding & nav** — edit `client/src/config/site.ts` for the site name, tagline, navigation, category list, and partner-tier colors.
2. **Catalog content** — replace the mock featured / trending / library / builders / partners data in `client/src/config/data.ts` (and the sample product in `Product.tsx`) with your own.
3. **Accent colors** — retune the three accent groups in the `@theme` block of `client/src/index.css`.
4. **Submission backend** — set the Supabase vars (and run the schema from `.env.example`), or point `VITE_API_URL` at your own API.
5. **Auth (optional)** — wire your OAuth provider into `client/src/components/AuthDialog.tsx` and mount it where you want login-gated submissions.

## Status — what's real vs stubbed

This is a front-end starter with exactly one real write path (the submission form). Credibility over hype — here's precisely what still needs building:

- **Votes are not persisted.** They live in React state only, reset to seed numbers on reload, and have no per-user identity or anti-double-vote beyond the current browser session.
- **Catalog content is mock data.** Featured, trending, library, builders, partners, reviews, download counts, ratings, and the Builders stat band are all hardcoded in `config/data.ts` and `Product.tsx` until you replace them.
- **Only the Submit form writes anywhere**, and only when Supabase or `VITE_API_URL` is configured. With no env vars it's demo mode (console.log + success screen, no save).
- **Broken product navigation.** Library cards link to `/product/:id`, but `App.tsx` only defines `/product`, so clicking a Library item currently lands on the 404 page. The `/product` page itself is fully static — hardwired to a single sample product (`NEURAL_SHIELD V2`) regardless of what was clicked. Wire up the dynamic route and data.
- **Auth is unwired.** `AuthDialog` exists but is never mounted, and the header `account_circle` icon is decorative; submissions are open and unauthenticated by default.
- **Theme toggle is scaffolding.** `ThemeProvider` / `useTheme` (and an `ErrorBoundary`) exist but are never mounted — the app effectively runs hardcoded dark.
- **Bookmarks are in-memory** (a local `Set`, lost on reload). Placeholder/no-op UI includes: Load More Products, GET / GET_FREE, Download Now, View Source, the newsletter signup, footer social + legal links, and the Submit "Product Images" dropzone (visual only — no file input or upload handling).
- **No admin/moderation UI.** Submissions land as `status: 'pending'` in your database; reviewing and publishing them to the live index is left to you. Reviews, ratings, and download stats are decorative — there's no review-writing or analytics system.
- **The Supabase anon key is exposed client-side** (expected). The RLS insert policy in `.env.example` is the only thing guarding writes — set it, or the table is open to abuse.
- **Minor leftovers.** The 404 page is off-brand (light slate/blue, lucide icons) and uses `wouter`'s `useLocation` for its Go-Home button while the rest of the app uses `react-router-dom`; `shared/const.ts` defines `COOKIE_NAME` / `ONE_YEAR_MS`, which are re-exported but unused.

## License

MIT © 2026 — see [LICENSE](./LICENSE).
