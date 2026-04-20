import type { Metadata } from "next";
import Script from "next/script";
import TranslationsProvider from "@/lib/i18n/TranslationsProvider";
import LanguageSelect from "@/components/LanguageSelect";
import en from "@/lib/i18n/en";
import "../globals.css";

const GA_ID = "G-EEXTW3J4EV";

export const metadata: Metadata = {
  metadataBase: new URL("https://tipcalc.co"),
  title: {
    default: "Tip Calculator – Split Bill, Pre-Tax & All Scenarios | TipCalc.co",
    template: "%s | TipCalc.co",
  },
  description:
    "Fast, accurate tip calculator with pre-tax toggle, bill splitter, and rounding. For restaurants, delivery, rideshare, salons & more. No sign-up, no ads above the fold.",
  keywords: ["tip calculator", "tip calculator split", "restaurant tip calculator", "delivery tip calculator", "how much to tip", "tip percentage calculator", "bill splitter", "pre-tax tip calculator", "split bill calculator", "uber tip calculator"],
  openGraph: {
    title: "TipCalc.co – Fast Tip Calculator for Every Scenario",
    description: "Calculate tips instantly with pre-tax toggle, bill splitting, and rounding. Restaurant, delivery, rideshare, salons & more.",
    url: "https://tipcalc.co",
    siteName: "TipCalc.co",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "TipCalc.co – Fast Tip Calculator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TipCalc.co – Fast Tip Calculator",
    description: "Tip calculator with pre-tax toggle, bill splitting, and rounding for every scenario.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://tipcalc.co",
    languages: {
      "en": "https://tipcalc.co/",
      "es": "https://tipcalc.co/es/",
    },
  },
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "TipCalc.co Tip Calculator",
  url: "https://tipcalc.co",
  description: "Free online tip calculator with pre-tax toggle, bill splitting, and rounding. Covers restaurants, delivery, rideshare, salons, hotels, and more.",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  browserRequirements: "Any modern browser",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  publisher: {
    "@type": "Organization",
    name: "Ascent Leadership Institute Inc",
    url: "https://tipcalc.co",
    address: { "@type": "PostalAddress", addressLocality: "Las Vegas", addressRegion: "NV", addressCountry: "US" },
  },
};

const NAV_LINKS = [
  { href: "/", label: en.nav.calculator },
  { href: "/restaurant-tip-calculator/", label: en.nav.restaurant },
  { href: "/delivery-tip-calculator/", label: en.nav.delivery },
  { href: "/tipping-guide/", label: en.nav.guide },
];

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="alternate" hrefLang="en" href="https://tipcalc.co/" />
        <link rel="alternate" hrefLang="es" href="https://tipcalc.co/es/" />
        <link rel="alternate" hrefLang="x-default" href="https://tipcalc.co/" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      </head>
      <body className="min-h-screen flex flex-col">
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}</Script>
        <TranslationsProvider translations={en}>
          <header className="sticky top-0 z-10 px-4 py-3" style={{ background: "var(--header-bg)" }}>
            <div className="max-w-3xl mx-auto flex items-center justify-between">
              <a href="/" className="font-bold text-xl tracking-tight" style={{ color: "white" }}>
                TipCalc<span style={{ color: "rgba(255,255,255,0.88)" }}>.co</span>
              </a>
              <nav className="flex items-center gap-4 sm:gap-5">
                {NAV_LINKS.map((l) => (
                  <a key={l.href} href={l.href}
                    className="hidden sm:inline text-sm font-medium opacity-90 hover:opacity-100 transition-opacity"
                    style={{ color: "white" }}
                  >{l.label}</a>
                ))}
                <LanguageSelect
                  current={{ href: "/", label: "EN" }}
                  others={[{ href: "/es/", label: "ES" }]}
                />
              </nav>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer style={{ borderTop: "1px solid var(--card-border)" }} className="px-4 py-8 mt-12">
            <div className="max-w-3xl mx-auto space-y-3 text-center">
              <p className="font-semibold" style={{ color: "var(--accent)" }}>TipCalc.co</p>
              <nav className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm">
                {[
                  { href: "/", label: "Tip Calculator" },
                  { href: "/restaurant-tip-calculator/", label: "Restaurant" },
                  { href: "/delivery-tip-calculator/", label: "Delivery" },
                  { href: "/uber-tip-calculator/", label: "Uber / Rideshare" },
                  { href: "/hairdresser-tip-calculator/", label: "Hairdresser" },
                  { href: "/split-bill-calculator/", label: "Split Bill" },
                  { href: "/tipping-guide/", label: "Tipping Guide" },
                  { href: "/about/", label: "About" },
                  { href: "/privacy/", label: "Privacy" },
                  { href: "/es/", label: "Español" },
                ].map((l) => (
                  <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
                ))}
              </nav>
              <p className="text-xs" style={{ color: "var(--muted-light)" }}>
                © {new Date().getFullYear()} TipCalc.co — {en.footer.tagline}
              </p>
              <p className="text-xs" style={{ color: "var(--muted-light)" }}>{en.footer.company}</p>
            </div>
          </footer>
        </TranslationsProvider>
      </body>
    </html>
  );
}
