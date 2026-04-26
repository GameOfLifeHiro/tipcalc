# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Dev server at http://localhost:3000
npm run build      # Static export → /out (required before deploy)
npm run lint       # ESLint
npx serve out      # Preview the production build locally
```

There are no tests. The build output in `out/` is committed to the repo — run `npm run build` and commit `out/` after any content or code changes.

## Architecture

**Goal:** outrank calculator.net on "tip calculator" keywords via better features, Core Web Vitals, and structured data. Site is deployed as a static export on Render.com.

### Routing & i18n

Two Next.js route groups handle both locales without a third-party i18n library:

- `app/(en)/` → English pages at `/`, `/restaurant-tip-calculator/`, etc.
- `app/(es)/es/` → Spanish mirrors at `/es/`, `/es/restaurant-tip-calculator/`, etc.

Each group has its own `layout.tsx` that wraps children in `<TranslationsProvider translations={en|es}>`. The `TipCalculator` component calls `useT()` (from `lib/i18n/context.ts`) to get strings — it never imports locale files directly, which keeps both locale bundles out of the shared client chunk.

### Calculator data flow

All math is in `lib/tipCalc.ts` (pure functions, no React). `TipCalculator.tsx` is the only `"use client"` component; all page files are server components. State is local to `TipCalculator` — no global store.

Share links encode calculator state into URL query params (`?bill=&tip=&split=&pretax=1&tax=&fees=&sc=`); a `useEffect` reads them on mount to restore state.

### Scenario pages

Each scenario page (`app/(en)/[scenario]/page.tsx`) follows this structure:
1. Export `metadata` with `alternates.canonical`
2. Inline `faqSchema` JSON-LD (FAQPage) and/or `breadcrumbSchema` (BreadcrumbList) as `<script type="application/ld+json">`
3. Hero band → `<TipCalculator defaultTipPercent={N} />` → editorial content → FAQ accordion

The `WebApplication` + `Organization` JSON-LD lives in the layout (applied to every page); per-page schemas are added inline in each page file.

### Styling

No Tailwind utility classes for colors or spacing in component files — use CSS custom properties (`var(--accent)`, `var(--card-border)`, etc.) and named CSS classes (`.card`, `.input`, `.tip-btn`, `.result-card`, `.prose-section`, etc.) defined in `app/globals.css`. Tailwind is used only for layout utilities (`flex`, `grid`, `gap-*`, `px-*`, `hidden sm:inline`, etc.).

### Google Analytics

GA is **not** loaded via `next/script`. Both layouts use an inline `<script>` that defers loading until `window.load` + 3.5 seconds. This keeps GTM off the Lighthouse TBT measurement window. Do not change this to `next/script` — it caused desktop performance regressions.

### SEO checklist for new pages

When adding a page (EN or ES):
- Add `alternates.canonical` in `metadata`
- Add hreflang counterpart in the other locale (and add it to the other locale's page too)
- Add the URL to `app/sitemap.ts`
- Add a `FAQPage` JSON-LD block with 4–6 questions
- Add a `BreadcrumbList` JSON-LD block
- Add footer nav links in both `app/(en)/layout.tsx` and `app/(es)/layout.tsx`
- Add a scenario card in `app/(en)/page.tsx` and `app/(es)/es/page.tsx`

### Adding a new locale

1. Create `app/(xx)/xx/` route group mirroring the `(es)` structure
2. Add `lib/i18n/xx.ts` implementing the `Translations` type from `lib/i18n/types.ts`
3. Add hreflang links in all three layouts
4. Add the locale's URLs to `app/sitemap.ts`
