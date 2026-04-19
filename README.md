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
| Deployment | Render.com Static Site | Global CDN, free tier |
| Analytics | Google Analytics 4 (`G-EEXTW3J4EV`) | Loaded `afterInteractive` — no CWV impact |

---

## Project Structure

```
tipcalc/
├── app/
│   ├── globals.css                      # CSS variables + utility classes
│   ├── layout.tsx                       # Root layout: header, footer, GA4, JSON-LD
│   ├── page.tsx                         # Homepage — main tip calculator
│   ├── restaurant-tip-calculator/
│   │   └── page.tsx                     # Restaurant scenario sub-page
│   ├── delivery-tip-calculator/
│   │   └── page.tsx                     # Delivery (DoorDash, Uber Eats) sub-page
│   ├── uber-tip-calculator/
│   │   └── page.tsx                     # Rideshare (Uber, Lyft) sub-page
│   ├── hairdresser-tip-calculator/
│   │   └── page.tsx                     # Salon / hairdresser sub-page
│   ├── split-bill-calculator/
│   │   └── page.tsx                     # Bill splitting sub-page
│   ├── tipping-guide/
│   │   └── page.tsx                     # Full US + international tipping guide
│   ├── about/
│   │   └── page.tsx                     # About + company info
│   ├── privacy/
│   │   └── page.tsx                     # Privacy policy
│   ├── sitemap.ts                       # Auto-generates /sitemap.xml
│   └── robots.ts                        # Auto-generates /robots.txt
├── components/
│   └── TipCalculator.tsx                # Main interactive calculator widget
├── lib/
│   └── tipCalc.ts                       # Pure calculation logic (no React)
├── next.config.ts                       # Static export config
├── postcss.config.mjs                   # Tailwind PostCSS plugin
├── tsconfig.json
└── package.json
```

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

- **`layout.tsx`** — `WebApplication` + nested `Organization` schema (site-wide)
- **`app/page.tsx`** — `FAQPage` schema (5 questions targeting featured snippets)
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

### Core Web Vitals Targets

| Metric | Target | How achieved |
|---|---|---|
| LCP | < 1.2s | Static HTML export — no server, no JS needed for initial render |
| CLS | 0 | Fixed-height result container; no layout shift |
| INP | < 100ms | All calculations synchronous < 1ms; no heavy client JS |

### Sitemap

Auto-generated at `/sitemap.xml` via `app/sitemap.ts`. Lists all 9 content pages with `lastModified`, `changeFrequency`, and `priority`.

---

## Design System

### Color Palette

| Variable | Value | Usage |
|---|---|---|
| `--bg` | `#f0fdfa` | Page background (teal-50) |
| `--card` | `#ffffff` | Card surfaces |
| `--card-border` | `#99f6e4` | Card / input borders (teal-200) |
| `--accent` | `#0d9488` | Primary brand color (teal-600) |
| `--accent-hover` | `#0f766e` | Hover state (teal-700) |
| `--accent-light` | `#ccfbf1` | Tinted backgrounds (teal-100) |
| `--accent-vivid` | `#10b981` | Tip result value emphasis (emerald-500) |
| `--header-bg` | `#0d9488` | Header bar background |
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

- Font: **Inter** (Google Fonts, 400/500/600/700)
- Loaded via `<link>` in `<head>` — no layout shift
- `font-smoothing: antialiased` globally

---

## Google Analytics

- **Measurement ID:** `G-EEXTW3J4EV`
- **Stream ID:** `14398303505`
- Loaded via Next.js `<Script strategy="afterInteractive">` — fires after page is interactive, zero impact on Core Web Vitals

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
| Build Command | `npm install && npm run build` |
| Publish Directory | `out` |

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
- International localized pages (JP, ES, PT)
- Affiliate partnerships with restaurant / delivery apps

---

## Company

**Ascent Leadership Institute Inc**  
Las Vegas, NV, USA

---

*Last updated: April 2026*
