import type { Metadata } from "next";
import TipCalculator from "@/components/TipCalculator";

export const metadata: Metadata = {
  title: "Uber Tip Calculator – How Much to Tip Your Uber Driver",
  description:
    "Calculate the right tip for Uber and other rideshare services. Includes tipping norms, when to tip more, and a fast rideshare tip calculator.",
  alternates: {
    canonical: "https://tipcalc.co/uber-tip-calculator/",
    languages: {
      en: "https://tipcalc.co/uber-tip-calculator/",
      es: "https://tipcalc.co/es/uber-tip-calculator/",
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Should you tip Uber drivers?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, tipping Uber drivers is good etiquette. Drivers earn per mile and per minute, with platform fees deducted. Tips make up a meaningful portion of driver income. 15–20% is the standard." },
    },
    {
      "@type": "Question",
      name: "How much should I tip my Uber driver?",
      acceptedAnswer: { "@type": "Answer", text: "15–20% of the fare is standard. For a short trip under $10, a flat $2 minimum is considerate. Uber's in-app defaults are 15%, 18%, and 20%. You can also enter a custom amount." },
    },
    {
      "@type": "Question",
      name: "Is the surge price included in the tip calculation?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — if you tip by percentage, the surge is included in the base fare you tip on. Use this calculator to enter the final fare amount shown in the app." },
    },
    {
      "@type": "Question",
      name: "Can I tip after the Uber ride?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — Uber allows you to tip for up to 30 days after a trip via the app. Go to your trip history, select the ride, and tap 'Add a tip.'" },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "TipCalc.co", item: "https://tipcalc.co/" },
    { "@type": "ListItem", position: 2, name: "Uber Tip Calculator", item: "https://tipcalc.co/uber-tip-calculator/" },
  ],
};

export default function UberTipPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <nav className="text-xs mb-5" style={{ color: "var(--muted)" }}>
        <a href="/" style={{ color: "var(--accent)" }}>TipCalc.co</a>
        {" / "}Uber Tip Calculator
      </nav>

      <div className="mb-7">
        <h1 className="text-3xl font-bold tracking-tight" style={{ color: "var(--text)" }}>
          Uber &amp; Rideshare Tip Calculator
        </h1>
        <p className="mt-2 text-base" style={{ color: "var(--muted)" }}>
          Uber, Lyft, and any rideshare service — how much to tip and when.
        </p>
      </div>

      <TipCalculator defaultTipPercent={18} />

      <section className="mt-12 prose-section">
        <h2>How Much to Tip an Uber or Lyft Driver</h2>
        <p>
          Tipping rideshare drivers is optional but increasingly expected. Uber and Lyft
          both prompt you to tip in-app after your ride. Drivers receive{" "}
          <strong>100% of your tip</strong>. The standard range is{" "}
          <strong>15–20%</strong> of the fare.
        </p>

        <h3>Rideshare Tip Guide</h3>
        <ul>
          <li><strong>Short trip, normal service:</strong> $1–$2 minimum, or 15%</li>
          <li><strong>Standard trip, good service:</strong> 15–18%</li>
          <li><strong>Excellent service:</strong> 20%+</li>
          <li><strong>Driver helped with luggage:</strong> Add $1–$2 per bag</li>
          <li><strong>Driver provided phone charger, water, or mints:</strong> 20%</li>
          <li><strong>Long trip (30+ min):</strong> 15–20%</li>
          <li><strong>Late night / difficult conditions:</strong> 20%+</li>
        </ul>

        <h3>Uber Black / Limo Service</h3>
        <p>
          For premium services like Uber Black or Lyft Lux, 20% is the standard tip.
          These drivers maintain higher-end vehicles and a more professional experience.
        </p>

        <h3>When Is It Okay to Tip Less?</h3>
        <p>
          If the driver was rude, took an unnecessarily long route, or the car was in
          poor condition, tipping 10% or less is reasonable. You can also report issues
          through the app for a fare adjustment. However, for ordinary service, 15% is
          the minimum that keeps drivers fairly compensated.
        </p>

        <h3>When to Tip in Cash vs. In-App</h3>
        <p>
          Both methods work — drivers receive 100% of the tip either way. In-app tips
          are easier and tied to your account. Cash tips allow drivers to receive the
          money immediately without waiting for their payout cycle.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>
          FAQ — Rideshare Tipping
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
        <a href="/lyft-tip-calculator/" style={{ color: "var(--accent)" }}>
          Lyft Tip Calculator →
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
