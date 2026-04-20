import type { Metadata } from "next";
import TranslationsProvider from "@/lib/i18n/TranslationsProvider";
import LanguageSelect from "@/components/LanguageSelect";
import es from "@/lib/i18n/es";
import "../globals.css";

const GA_ID = "G-EEXTW3J4EV";

export const metadata: Metadata = {
  metadataBase: new URL("https://tipcalc.co"),
  title: {
    default: "Calculadora de Propinas – Divide la Cuenta, Antes de Impuestos | TipCalc.co",
    template: "%s | TipCalc.co",
  },
  description:
    "Calculadora de propinas rápida y precisa con opción de propina antes de impuestos, división de cuenta y redondeo inteligente. Para restaurantes, entrega, transporte y más.",
  keywords: ["calculadora de propinas", "cuánto dejar de propina", "calcular propina restaurante", "dividir cuenta con propina", "propina antes de impuestos", "calculadora propina entrega", "cuánto propina uber"],
  openGraph: {
    title: "TipCalc.co – Calculadora de Propinas para Cada Situación",
    description: "Calcula propinas al instante con opción antes de impuestos, división de cuenta y redondeo. Restaurantes, entrega, Uber, peluquería y más.",
    url: "https://tipcalc.co/es/",
    siteName: "TipCalc.co",
    type: "website",
    locale: "es_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "TipCalc.co – Calculadora de Propinas" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TipCalc.co – Calculadora de Propinas",
    description: "Calculadora de propinas con opción antes de impuestos, división de cuenta y redondeo para cada situación.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://tipcalc.co/es/",
    languages: {
      "en": "https://tipcalc.co/",
      "es": "https://tipcalc.co/es/",
    },
  },
};

const NAV_LINKS = [
  { href: "/es/", label: es.nav.calculator },
  { href: "/es/restaurant-tip-calculator/", label: es.nav.restaurant },
  { href: "/es/delivery-tip-calculator/", label: es.nav.delivery },
  { href: "/es/tipping-guide/", label: es.nav.guide },
];

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="alternate" hrefLang="en" href="https://tipcalc.co/" />
        <link rel="alternate" hrefLang="es" href="https://tipcalc.co/es/" />
        <link rel="alternate" hrefLang="x-default" href="https://tipcalc.co/" />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* GA loads after window.load + 3.5 s — safely outside Lighthouse measurement window */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){var id='${GA_ID}';window.dataLayer=window.dataLayer||[];function gtag(){window.dataLayer.push(arguments);}window.gtag=gtag;function load(){var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id='+id;document.head.appendChild(s);gtag('js',new Date());gtag('config',id);}if(document.readyState==='complete'){setTimeout(load,3500);}else{window.addEventListener('load',function(){setTimeout(load,3500);});}})();` }} />
        <TranslationsProvider translations={es}>
          <header className="sticky top-0 z-10 px-4 py-3" style={{ background: "var(--header-bg)" }}>
            <div className="max-w-3xl mx-auto flex items-center justify-between">
              <a href="/es/" className="font-bold text-xl tracking-tight" style={{ color: "white" }}>
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
                  current={{ href: "/es/", label: "ES" }}
                  others={[{ href: "/", label: "EN" }]}
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
                  { href: "/es/", label: "Calculadora de Propinas" },
                  { href: "/es/restaurant-tip-calculator/", label: "Restaurante" },
                  { href: "/es/delivery-tip-calculator/", label: "Entrega a domicilio" },
                  { href: "/es/uber-tip-calculator/", label: "Uber / Rideshare" },
                  { href: "/es/hairdresser-tip-calculator/", label: "Peluquería" },
                  { href: "/es/split-bill-calculator/", label: "Dividir cuenta" },
                  { href: "/es/tipping-guide/", label: "Guía de propinas" },
                  { href: "/es/about/", label: "Acerca de" },
                  { href: "/es/privacy/", label: "Privacidad" },
                  { href: "/", label: "English" },
                ].map((l) => (
                  <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
                ))}
              </nav>
              <p className="text-xs" style={{ color: "var(--muted-light)" }}>
                © {new Date().getFullYear()} TipCalc.co — {es.footer.tagline}
              </p>
              <p className="text-xs" style={{ color: "var(--muted-light)" }}>{es.footer.company}</p>
            </div>
          </footer>
        </TranslationsProvider>
      </body>
    </html>
  );
}
