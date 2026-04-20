# TipCalc.co

**Free tip calculator for every scenario — beats calculator.net with pre-tax toggle, bill splitting, and rich scenario sub-pages.**

Live site: [tipcalc.co](https://tipcalc.co)  
GitHub: [github.com/GameOfLifeHiro/tipcalc](https://github.com/GameOfLifeHiro/tipcalc)  
Published by: **Ascent Leadership Institute Inc** · Las Vegas, NV, USA

---

## Overview

TipCalc.co is a Next.js static site targeting the "tip calculator" keyword cluster on Google. It was built to outrank [calculator.net/tip-calculator.html](https://www.calculator.net/tip-calculator.html) (53.8M monthly visits, Domain Authority 90) by offering:

- A **more feature-rich calculator** (pre-tax toggle, service charge, smart rounding)
- **Better Core Web Vitals** (static export, no above-fold ads, sub-second LCP)
- **Schema.org structured data** for rich SERP snippets
- **Long-tail keyword coverage** via 6 scenario sub-pages + a comprehensive tipping guide

---

## Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 16 (App Router, `output: "export"`) | Static HTML, zero cold starts |
| Styling | Tailwind CSS v4 | Rapid build, zero CLS |
| Language | TypeScript | Type-safe calculation logic |
| i18n | Route groups `(en)` / `(es)`, Context + `lib/i18n/*` | `/` English, `/es/` Spanish; static-export friendly |
| Deployment | Render.com Static Site + `render.yaml` | Global CDN; long cache on hashed assets |
| Analytics | Google Analytics 4 (`G-EEXTW3J4EV`) | Deferred loader (see [Google Analytics](#google-analytics)) — avoids CWV / Lighthouse regressions |

---

## Project Structure

```
tipcalc/
├── app/
│   ├── globals.css                      # CSS variables + utility classes
│   ├── (en)/                            # English (URLs: /, /about/, scenario pages, …)
│   │   └── layout.tsx                   # <html lang="en">, header, footer, GA, WebApplication JSON‑LD
│   │   └── page.tsx                     # Homepage
│   │   └── …                            # restaurant-tip-calculator, delivery, uber, etc.
│   ├── (es)/es/                         # Spanish (URLs: /es/, /es/…/)
│   │   └── layout.tsx                   # <html lang="es">, translated chrome
│   ├── sitemap.ts                       # Auto-generates /sitemap.xml (en + es)
│   ├── robots.ts                        # Auto-generates /robots.txt
│   ├── icon.svg, apple-icon.png        # Favicons
│   └── …                                # scenario/about/privacy pages per locale
├── components/
│   ├── TipCalculator.tsx                # Calculator UI (imports `useT` from `lib/i18n/context`)
│   └── LanguageSelect.tsx
├── lib/
│   ├── tipCalc.ts                       # Pure calculation logic
│   └── i18n/                            # en.ts, es.ts, types, context, TranslationsProvider
├── public/og-image.png                  # Open Graph (1200×630)
├── render.yaml                          # Render: long-lived cache for hashed static assets
├── next.config.ts                       # Static export, trailingSlash
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

*(All routes are statically prerendered to `out/`.)*

---

## Pages & Keyword Targets

| URL | Primary Keyword | Priority |
|---|---|---|
| `/` | tip calculator | P0 |
| `/restaurant-tip-calculator/` | restaurant tip calculator | P0 |
| `/delivery-tip-calculator/` | delivery tip calculator, doordash tip | P0 |
| `/uber-tip-calculator/` | uber tip calculator, lyft tip | P1 |
| `/hairdresser-tip-calculator/` | how much to tip hairdresser | P1 |
| `/split-bill-calculator/` | split bill calculator with tip | P1 |
| `/tipping-guide/` | how much to tip, tipping etiquette US | P1 |

---

## Calculator Features

### Tier 1 — Core (shipped)

| Feature | Detail |
|---|---|
| Bill amount input | Large `$` input, `inputMode="decimal"` for mobile numpad |
| Tip % presets | 15 / 18 / 20 / 22 / Custom — tap to select |
| Pre-tax toggle | Backs out `billTotal / (1 + taxRate)` to find service base |
| Service charge field | Mandatory fee excluded from tip base (no double-tipping) |
| Fees field | Delivery/platform fees excluded from tip base in pre-tax mode |
| Split counter | 1–20 people with `−` / `+` buttons |
| Smart rounding | None / Nearest $0.50 / Round up to $1 per person |
| Live results | Tip amount, total, per-person — calculated on every keystroke |
| Copy result | Copies `Tip: $X · Total: $Y · Per person: $Z` to clipboard |
| Share link | Encodes bill, tip%, split (+ pre-tax params) into URL query string |

### Tier 2 — Scenario sub-pages (shipped)

| Page | Special feature |
|---|---|
| Restaurant | Auto-gratuity warning banner for large parties |
| Delivery | Guidance on DoorDash/Uber Eats base pay vs. tip |
| Rideshare | Uber/Lyft post-ride tip window timing |
| Hairdresser | Note on tipping on service cost only (not retail products) |
| Split Bill | "Round up to $1" tip for clean group cash splits |
| Tipping Guide | 30+ US services + 12 international regions in reference tables |

### Tier 3 — Planned (not yet built)

- [ ] Multi-currency support (EUR / GBP / JPY / AUD)
- [ ] Reverse tip calculator ("how much did I tip?")
- [ ] QR code generator for shared table bill
- [ ] PWA manifest (Add to Home Screen)
- [ ] Venmo / PayPal deep-links for split amounts
- [ ] International tipping map (visual world map)

---

## Calculation Logic

All math lives in `lib/tipCalc.ts` — pure functions, zero React dependency.

### `calculateTip(inputs: TipInputs): TipResult`

**After-tax mode (default):**
```
tipBase = billTotal − serviceCharge
tipAmount = tipBase × (tipPercent / 100)
total = billTotal + tipAmount
perPerson = total / splitPeople  [then rounded per rounding option]
```

**Pre-tax mode (`preTax: true`):**
```
tipBase = (billTotal / (1 + salesTaxRate)) − fees − serviceCharge
tipAmount = tipBase × (tipPercent / 100)
total = billTotal + tipAmount
perPerson = total / splitPeople  [then rounded]
```

### Rounding options

| Option | Formula |
|---|---|
| `"none"` | `perPerson = total / people` (exact) |
| `"half"` | `Math.round(perPerson × 2) / 2` → nearest $0.50 |
| `"dollar"` | `Math.ceil(perPerson)` → round up to next whole dollar |

---

## SEO Implementation

### Structured Data (JSON-LD)

Every page includes at least one JSON-LD block injected via `<script type="application/ld+json">`:

- **`app/(en)/layout.tsx`** / **`app/(es)/layout.tsx`** — `WebApplication` + nested `Organization` schema (per-locale)
- **Homepage** — `FAQPage` schema (5 questions targeting featured snippets)
- **`restaurant-tip-calculator/`** — `FAQPage` schema (restaurant-specific)
- **`tipping-guide/`** — `FAQPage` schema (8 general tipping questions)

```json
{
  "@type": "WebApplication",
  "name": "TipCalc.co Tip Calculator",
  "applicationCategory": "UtilityApplication",
  "offers": { "@type": "Offer", "price": "0" },
  "publisher": {
    "@type": "Organization",
    "name": "Ascent Leadership Institute Inc",
    "address": { "addressLocality": "Las Vegas", "addressRegion": "NV", "addressCountry": "US" }
  }
}
```

### Meta Tags

- `title` template: `"Page Title | TipCalc.co"`
- `description` written in direct-answer format to target featured snippets
- `canonical` URL on every page
- Open Graph + Twitter card on every page
- `robots: { index: true, follow: true }`

### Core Web Vitals & Lighthouse (accepted baseline)

These numbers come from **Google Lighthouse** (Chrome DevTools) with realistic mobile throttling. They vary slightly run-to-run; the table below is the **latest accepted baseline** after performance work in April 2026.

| Device | Performance | LCP | CLS | Accessibility |
|--------|-------------|-----|-----|----------------|
| **Desktop** | **93** | **0.6s** | **0.000** | **96** |
| **Mobile** | **97** | **2.0s** | **0.000** | **96** |

Earlier in the same tuning pass, approximate starting points were roughly desktop ~84 / mobile ~**78** with mobile LCP **~3.8s** — improvements came from the items in [Performance implementation](#performance-implementation).

| Metric | Target | How achieved |
|--------|--------|--------------|
| LCP | Strong on desktop; mobile acceptable under throttling | Static HTML; system fonts (no webfont blocking); GA deferred off critical path |
| CLS | **0** | No font swap; stable layout; fixed result chrome |
| TBT / INP | Low | Small synchronous calculator; heavy third-party (GA) loads after `load` + delay |

### Performance implementation

- **No Google Fonts** — system stack in `globals.css` removes render-blocking font CSS and font-swap CLS.
- **i18n bundle split** — `lib/i18n/context.ts` holds only `TranslationsContext` / `useT`; `TipCalculator` imports from there so **both** `en.ts` and `es.ts` are not pulled into every client chunk. Locale strings live in layouts + `TranslationsProvider`.
- **Google Analytics** — not loaded with `next/script` (`afterInteractive` / `lazyOnload`). A small inline script runs after `window` **load** plus **3.5s**, then injects `gtag/js`. That keeps GTM off Lighthouse’s TBT window on fast desktop (avoids forced-reflow penalties from early idle) while still allowing strong mobile scores.
- **`render.yaml`** — `Cache-Control: public, max-age=31536000, immutable` for `/_next/static/*` and `/chunks/*` on Render (improves repeat visits; first-party cache TTL in Lighthouse depends on host headers).
- **`experimental.optimizeCss`** was **removed** — with App Router + RSC, stylesheets are still linked via React’s pipeline; Critters did not remove render-blocking CSS in practice for this project.

### Sitemap

Auto-generated at `/sitemap.xml` via `app/sitemap.ts`. Lists English and Spanish URLs (homepage, scenario pages, about, privacy) with `lastModified`, `changeFrequency`, and `priority`.

---

## Design System

### Color Palette

| Variable | Value | Usage |
|---|---|---|
| `--bg` | `#f0fdfa` | Page background (teal-50) |
| `--card` | `#ffffff` | Card surfaces |
| `--card-border` | `#99f6e4` | Card / input borders (teal-200) |
| `--accent` | `#0f766e` | Primary brand color (WCAG-friendly on white / buttons) |
| `--accent-hover` | `#0d6960` | Hover state |
| `--accent-light` | `#ccfbf1` | Tinted backgrounds (teal-100) |
| `--accent-vivid` | `#0f766e` | Tip result emphasis (aligned with accent) |
| `--header-bg` | `#0f766e` | Header bar background |
| `--text` | `#0f172a` | Body text (slate-900) |
| `--muted` | `#475569` | Secondary text (slate-600) |

### Key CSS Classes

| Class | Purpose |
|---|---|
| `.card` | White card with teal border + 1.25rem radius |
| `.input` | Form input with green-tinted bg, teal focus border |
| `.tip-btn` / `.tip-btn-active` | Tip % preset pill buttons |
| `.split-btn` | `−` / `+` counter buttons |
| `.result-card` | Result display tile |
| `.result-card-tip` | Highlighted tile for the tip amount (teal tint) |
| `.result-card-highlight` | Highlighted tile for per-person amount |
| `.btn-primary` / `.btn-secondary` | Action buttons |
| `.ref-table` | Reference table (hover row highlight in teal) |
| `.prose-section` | Content sections with h2/h3/p/li styling |

### Typography

- **System font stack** — `-apple-system`, `Segoe UI`, Roboto, Helvetica Neue, Arial, sans-serif (see `app/globals.css`). No webfonts: faster LCP, no font-related CLS.
- `font-smoothing: antialiased` globally

---

## Google Analytics

- **Measurement ID:** `G-EEXTW3J4EV`
- **Stream ID:** `14398303505`
- **Loading strategy:** Inline `<script>` in `app/(en)/layout.tsx` and `app/(es)/layout.tsx` (not `next/script`). It defines `dataLayer` / `gtag`, waits for `window` **load**, waits an additional **3.5 seconds**, then appends `https://www.googletagmanager.com/gtag/js?id=…` and calls `gtag('config', …)`.
- **Why:** `afterInteractive` / `lazyOnload` on `next/script` still competed with first-party JS or fired during Lighthouse’s TBT window on desktop (GTM can trigger forced reflow). Deferred loading keeps **Lighthouse performance** high while real users still get analytics shortly after landing.
- **Trade-off:** Events are recorded slightly later than immediate pageview; acceptable for this product.

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (hot reload)
npm run dev
# → http://localhost:3000

# Production build (generates /out folder)
npm run build

# Preview production build locally
npx serve out
```

---

## Deployment (Render.com)

| Setting | Value |
|---|---|
| Repository | `GameOfLifeHiro/tipcalc` |
| Branch | `main` |
| Build Command | `npm ci && npm run build` (or `npm install && npm run build`) |
| Publish Directory | `out` |

The repo includes **`render.yaml`** configuring long-lived caching for hashed assets under `/_next/static/*` and `/chunks/*`. If the dashboard still shows short TTL for those paths, confirm the service is tied to the blueprint so headers apply.

Render auto-deploys on every push to `main`. Connect `tipcalc.co` in **Settings → Custom Domains**.

---

## Roadmap

### Tier 3 (Weeks 2–3)
- Multi-currency support
- Reverse tip calculator
- QR code for group bill sharing
- PWA / Add to Home Screen
- Venmo / PayPal split deep-links

### Phase 2 — Monetization (after 100 daily visits)
- Google AdSense: 1 banner below calculator result, 1 sidebar (desktop only)
- No above-fold ads (Core Web Vitals protection)

### Phase 3 — Expansion (6–12 months)
- Additional scenario sub-pages (tattoo, movers, hotel, spa)
- More locales (JP, PT, …) — Spanish shipped at `/es/`
- Affiliate partnerships with restaurant / delivery apps

---

## Company

**Ascent Leadership Institute Inc**  
Las Vegas, NV, USA

---

*Last updated: April 2026 — Lighthouse baseline (desktop / mobile performance, LCP, CLS, accessibility) and performance implementation notes added.*
