import type { Metadata } from "next";
import TipCalculator from "@/components/TipCalculator";

export const metadata: Metadata = {
  title: "Uber Eats Tip Calculator – How Much to Tip Your Delivery Driver",
  description:
    "How much to tip on Uber Eats? Enter your order total for an instant tip amount. Covers how Uber Eats courier pay works, when to tip more, and how to adjust after delivery.",
  alternates: {
    canonical: "https://tipcalc.co/uber-eats-tip-calculator/",
    languages: {
      en: "https://tipcalc.co/uber-eats-tip-calculator/",
      es: "https://tipcalc.co/es/uber-eats-tip-calculator/",
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much should I tip on Uber Eats?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "15–20% of the order subtotal is standard, with a $3–$4 minimum for small orders. Uber Eats suggests 15%, 20%, or 25% as defaults. Tip more for long distances, bad weather, or difficult delivery conditions.",
      },
    },
    {
      "@type": "Question",
      name: "Does Uber Eats take a cut of my tip?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — Uber Eats couriers receive 100% of your tip. The delivery fee and service fee go to Uber, not the driver. The tip is the main way to directly support your courier.",
      },
    },
    {
      "@type": "Question",
      name: "Can I change my tip after Uber Eats delivery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Uber Eats allows you to adjust your tip within 1 hour of delivery. Open the app, go to your order history, select the order, and tap 'Adjust tip.' You can increase it; reducing it significantly below the original is generally not available.",
      },
    },
    {
      "@type": "Question",
      name: "Does the Uber Eats delivery fee go to the driver?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The Uber Eats delivery fee goes to Uber, not the courier. Couriers earn a per-delivery base pay plus 100% of your tip. This is why tipping is important — the platform fee does not benefit the driver.",
      },
    },
    {
      "@type": "Question",
      name: "Should I tip before or after ordering on Uber Eats?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Uber Eats prompts you to tip when placing the order. Unlike DoorDash, Uber Eats couriers do not see the full tip amount before accepting — they see a general earnings estimate. Still, tipping upfront is recommended and you can adjust within 1 hour after delivery.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "TipCalc.co", item: "https://tipcalc.co/" },
    { "@type": "ListItem", position: 2, name: "Uber Eats Tip Calculator", item: "https://tipcalc.co/uber-eats-tip-calculator/" },
  ],
};

export default function UberEatsTipPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <nav className="text-xs mb-5" style={{ color: "var(--muted)" }}>
        <a href="/" style={{ color: "var(--accent)" }}>TipCalc.co</a>
        {" / "}Uber Eats Tip Calculator
      </nav>

      <div className="mb-7">
        <h1 className="text-3xl font-bold tracking-tight" style={{ color: "var(--text)" }}>
          Uber Eats Tip Calculator
        </h1>
        <p className="mt-2 text-base" style={{ color: "var(--muted)" }}>
          Calculate the right tip for your Uber Eats order — and learn how courier pay works.
        </p>
      </div>

      <div
        className="mb-5 rounded-xl p-4 text-sm space-y-1"
        style={{ background: "var(--accent-light)", border: "1px solid var(--accent-light-border)", color: "var(--text)" }}
      >
        <p className="font-semibold" style={{ color: "var(--accent)" }}>Quick rule of thumb</p>
        <p>Minimum <strong>$3–$4</strong> for small orders, or <strong>15–20%</strong> — whichever is higher. You have <strong>1 hour</strong> after delivery to adjust.</p>
      </div>

      <TipCalculator defaultTipPercent={18} />

      <section className="mt-12 prose-section">
        <h2>How Much to Tip on Uber Eats</h2>
        <p>
          Uber Eats couriers earn a per-delivery base pay plus <strong>100% of your tip</strong> —
          Uber does not take a cut. The standard tip is <strong>15–20%</strong> of the order
          subtotal, with a $3–$4 minimum for small orders.
        </p>

        <h3>Suggested Tip by Situation</h3>
        <ul>
          <li><strong>Small order (under $20):</strong> $3–$4 flat minimum</li>
          <li><strong>Standard order:</strong> 15–18%</li>
          <li><strong>Large order ($50+):</strong> 15–20%</li>
          <li><strong>Long distance or remote address:</strong> Add $1–$2</li>
          <li><strong>Bad weather:</strong> Add $2–$5</li>
          <li><strong>Excellent service or careful handling:</strong> 20–25%</li>
        </ul>

        <h3>How Uber Eats Courier Pay Works</h3>
        <p>
          Uber Eats couriers are independent contractors who earn:
        </p>
        <ul>
          <li><strong>Base pay:</strong> A per-trip amount set by Uber based on pickup distance, dropoff distance, and time</li>
          <li><strong>Boost / surge pay:</strong> Bonuses during high-demand periods in some markets</li>
          <li><strong>Your tip:</strong> 100% goes to the courier — no deduction by Uber</li>
        </ul>
        <p>
          The delivery fee, service fee, and any other fees shown in checkout go to Uber, not the courier.
        </p>

        <h3>Uber Eats vs. DoorDash: Key Tip Difference</h3>
        <p>
          On DoorDash, drivers see the full tip before accepting an order. On Uber Eats,
          couriers see only a general earnings estimate — not your specific tip amount.
          This means tip size has less direct impact on acceptance speed on Uber Eats,
          but still directly supports the courier&apos;s income.
        </p>

        <h3>Adjusting Your Tip After Delivery</h3>
        <p>
          Uber Eats gives you <strong>1 hour</strong> after delivery to change your tip.
          Go to your order history, select the order, and tap <em>Adjust tip</em>.
          This is shorter than DoorDash (which allows adjustments post-delivery) so act quickly
          if you want to reward exceptional service.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>
          FAQ — Uber Eats Tipping
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
        <a href="/doordash-tip-calculator/" style={{ color: "var(--accent)" }}>DoorDash Tip Calculator →</a>
        <a href="/delivery-tip-calculator/" style={{ color: "var(--accent)" }}>All Delivery Tips →</a>
        <a href="/tipping-guide/" style={{ color: "var(--accent)" }}>Full Tipping Guide →</a>
      </div>
    </div>
  );
}
