import type { Metadata } from "next";
import TipCalculator from "@/components/TipCalculator";

export const metadata: Metadata = {
  title: "Lyft Tip Calculator – How Much to Tip Your Lyft Driver",
  description:
    "Calculate the right tip for your Lyft driver. Includes Lyft tipping norms, when to tip more, how long you have to tip after a ride, and a fast rideshare tip calculator.",
  alternates: {
    canonical: "https://tipcalc.co/lyft-tip-calculator/",
    languages: {
      en: "https://tipcalc.co/lyft-tip-calculator/",
      es: "https://tipcalc.co/es/lyft-tip-calculator/",
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much should I tip my Lyft driver?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "15–20% of the fare is the standard tip for a Lyft driver. For a short trip under $10, a flat $2 minimum is considerate. Tip more for excellent service, late-night rides, help with luggage, or difficult weather conditions.",
      },
    },
    {
      "@type": "Question",
      name: "Does Lyft take a cut of driver tips?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Lyft drivers keep 100% of the tip you leave — whether you tip in the app or in cash. This is the same policy as Uber.",
      },
    },
    {
      "@type": "Question",
      name: "How long do I have to tip a Lyft driver?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lyft allows you to add or change a tip for up to 72 hours after your ride. Open the Lyft app, go to your ride history, select the trip, and tap 'Tip your driver.'",
      },
    },
    {
      "@type": "Question",
      name: "Is tipping required on Lyft?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, tipping is optional on Lyft. However, drivers rely on tips as a meaningful part of their income, and 15–20% is considered good etiquette for satisfactory service.",
      },
    },
    {
      "@type": "Question",
      name: "Should I tip more for Lyft XL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Lyft XL drivers operate larger vehicles with higher maintenance costs. 18–20% is appropriate for XL rides. For Lyft Lux or Lux Black, 20% is the standard.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "TipCalc.co", item: "https://tipcalc.co/" },
    { "@type": "ListItem", position: 2, name: "Lyft Tip Calculator", item: "https://tipcalc.co/lyft-tip-calculator/" },
  ],
};

export default function LyftTipPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav className="text-xs mb-5" style={{ color: "var(--muted)" }}>
        <a href="/" style={{ color: "var(--accent)" }}>TipCalc.co</a>
        {" / "}Lyft Tip Calculator
      </nav>

      <div className="mb-7">
        <h1 className="text-3xl font-bold tracking-tight" style={{ color: "var(--text)" }}>
          Lyft Tip Calculator
        </h1>
        <p className="mt-2 text-base" style={{ color: "var(--muted)" }}>
          How much to tip your Lyft driver — norms, amounts, and timing.
        </p>
      </div>

      <TipCalculator defaultTipPercent={18} />

      <section className="mt-12 prose-section">
        <h2>How Much to Tip a Lyft Driver</h2>
        <p>
          Lyft allows in-app tipping after every ride and drivers receive{" "}
          <strong>100% of what you leave.</strong> The standard tip is{" "}
          <strong>15–20% of the fare</strong>, with a flat $2 minimum on short trips.
        </p>

        <h3>Lyft Tipping Guide by Situation</h3>
        <ul>
          <li><strong>Short trip, normal service:</strong> $2 flat or 15%</li>
          <li><strong>Standard ride, good service:</strong> 15–18%</li>
          <li><strong>Excellent service / very clean car:</strong> 20%</li>
          <li><strong>Driver helped with luggage:</strong> Add $1–$2 per bag</li>
          <li><strong>Late night or bad weather:</strong> 20%+</li>
          <li><strong>Long trip (30+ min):</strong> 15–20%</li>
          <li><strong>Lyft XL:</strong> 18–20%</li>
          <li><strong>Lyft Lux / Lux Black:</strong> 20%</li>
        </ul>

        <h3>How Long Do You Have to Tip on Lyft?</h3>
        <p>
          Lyft gives you <strong>72 hours</strong> after a ride to add or change your tip.
          Go to your ride history in the Lyft app, select the trip, and tap{" "}
          <em>Tip your driver</em>. Compare this to Uber, which allows tips for up to 30 days.
        </p>

        <h3>Cash vs. In-App Tip on Lyft</h3>
        <p>
          Both methods result in the driver keeping 100% of the tip. In-app tips are linked
          to your account and help the driver's overall ratings visibility. Cash is immediate
          — the driver gets it without waiting for the next payout cycle.
        </p>

        <h3>When Is It Okay to Tip Less?</h3>
        <p>
          If the driver was unprofessional, took a significantly wrong route, or the vehicle
          was in poor condition, 10% or no tip is reasonable. You can also report serious
          issues through the Lyft app for a fare review.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>
          FAQ — Lyft Tipping
        </h2>
        <div className="card divide-y" style={{ borderColor: "var(--card-border)" }}>
          {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
            <details key={name} className="faq-item px-5">
              <summary className="faq-question py-1 list-none">{name}</summary>
              <p className="faq-answer">{acceptedAnswer.text}</p>
            </details>
          ))}
        </div>
      </section>

      <div className="mt-12 flex flex-wrap gap-3 text-sm">
        <a href="/uber-tip-calculator/" style={{ color: "var(--accent)" }}>
          Uber Tip Calculator →
        </a>
        <a href="/delivery-tip-calculator/" style={{ color: "var(--accent)" }}>
          Delivery Tip Calculator →
        </a>
        <a href="/tipping-guide/" style={{ color: "var(--accent)" }}>
          Full Tipping Guide →
        </a>
      </div>
    </div>
  );
}
