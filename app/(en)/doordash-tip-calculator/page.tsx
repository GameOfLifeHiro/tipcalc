import type { Metadata } from "next";
import TipCalculator from "@/components/TipCalculator";

export const metadata: Metadata = {
  title: "DoorDash Tip Calculator – How Much to Tip Your Dasher",
  description:
    "How much to tip on DoorDash? Enter your order total and get the right tip instantly. Learn how Dasher pay works, why tipping before ordering matters, and when to tip more.",
  alternates: {
    canonical: "https://tipcalc.co/doordash-tip-calculator/",
    languages: {
      en: "https://tipcalc.co/doordash-tip-calculator/",
      es: "https://tipcalc.co/es/doordash-tip-calculator/",
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much should I tip on DoorDash?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A minimum of $3–$4 for small orders, or 15–20% of the order subtotal — whichever is higher. For large orders ($50+), 15–20% is appropriate. Tip more for long distances, bad weather, heavy or bulky items, or stairs.",
      },
    },
    {
      "@type": "Question",
      name: "Do DoorDash drivers see the tip before accepting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Dashers see the total payout (base pay + tip) before deciding to accept an order. A low or no tip means the order is less attractive and may sit unaccepted for longer, resulting in slower delivery.",
      },
    },
    {
      "@type": "Question",
      name: "Can I change my DoorDash tip after delivery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — DoorDash allows you to adjust your tip after delivery. Open the order in the app, go to 'Help,' and select 'Adjust tip.' You can increase the tip; reducing it below the original amount is generally not allowed.",
      },
    },
    {
      "@type": "Question",
      name: "Does the DoorDash delivery fee go to the driver?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The delivery fee, service fee, and small order fee all go to DoorDash, not the Dasher. Only the tip field goes directly to the driver. Dashers earn a base pay of roughly $2–$4 per order plus 100% of your tip.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum tip for DoorDash?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DoorDash's default tip suggestion is 15–20% of the subtotal, but you can set it to $0. For fairness, $3–$4 minimum is considered a respectful baseline. No tip often means the order gets accepted last or by a driver who is further away.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "TipCalc.co", item: "https://tipcalc.co/" },
    { "@type": "ListItem", position: 2, name: "DoorDash Tip Calculator", item: "https://tipcalc.co/doordash-tip-calculator/" },
  ],
};

export default function DoorDashTipPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <nav className="text-xs mb-5" style={{ color: "var(--muted)" }}>
        <a href="/" style={{ color: "var(--accent)" }}>TipCalc.co</a>
        {" / "}DoorDash Tip Calculator
      </nav>

      <div className="mb-7">
        <h1 className="text-3xl font-bold tracking-tight" style={{ color: "var(--text)" }}>
          DoorDash Tip Calculator
        </h1>
        <p className="mt-2 text-base" style={{ color: "var(--muted)" }}>
          How much to tip your Dasher — and why it matters before you place the order.
        </p>
      </div>

      <div
        className="mb-5 rounded-xl p-4 text-sm"
        style={{ background: "var(--accent-light)", border: "1px solid var(--accent-light-border)", color: "var(--text)" }}
      >
        <p className="font-semibold mb-1" style={{ color: "var(--accent)" }}>Dashers see your tip before accepting</p>
        <p>A higher tip means faster acceptance and often a closer driver. A $0 tip order may wait much longer to be picked up.</p>
      </div>

      <TipCalculator defaultTipPercent={18} />

      <section className="mt-12 prose-section">
        <h2>How Much to Tip on DoorDash</h2>
        <p>
          The standard DoorDash tip is <strong>$3–$4 minimum</strong> for small orders, or{" "}
          <strong>15–20%</strong> of the order subtotal — whichever is more. DoorDash
          Dashers earn a base pay of roughly $2–$4 per delivery plus <strong>100% of your tip</strong>.
          Tips are the primary variable in a Dasher&apos;s income.
        </p>

        <h3>Suggested DoorDash Tip by Situation</h3>
        <ul>
          <li><strong>Small order (under $20):</strong> $3–$4 flat minimum</li>
          <li><strong>Standard order, normal conditions:</strong> 15–18%</li>
          <li><strong>Large order ($50+):</strong> 15–20%</li>
          <li><strong>Long distance (5+ miles):</strong> Add $1–$2</li>
          <li><strong>Bad weather (rain, snow, heat):</strong> Add $2–$5</li>
          <li><strong>Walk-up delivery (no elevator):</strong> Add $1–$2 per floor</li>
          <li><strong>Excellent service or contactless handled well:</strong> 20–25%</li>
        </ul>

        <h3>How DoorDash Pay Works</h3>
        <p>
          Dashers are independent contractors. Their earnings per delivery come from:
        </p>
        <ul>
          <li><strong>Base pay:</strong> $2–$4 set by DoorDash based on distance, time, and desirability</li>
          <li><strong>Peak pay:</strong> Bonuses during busy hours in some markets</li>
          <li><strong>Your tip:</strong> 100% goes to the Dasher, no platform cut</li>
        </ul>
        <p>
          The delivery fee, service fee, and small order fee all go to DoorDash — not the driver.
        </p>

        <h3>Should You Tip Before or After Delivery on DoorDash?</h3>
        <p>
          Tip before placing the order. Unlike restaurants, Dashers see the tip before
          accepting — a good tip attracts nearby drivers faster. You can always increase
          the tip after delivery through the app if the service was exceptional.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>
          FAQ — DoorDash Tipping
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
        <a href="/uber-eats-tip-calculator/" style={{ color: "var(--accent)" }}>Uber Eats Tip Calculator →</a>
        <a href="/delivery-tip-calculator/" style={{ color: "var(--accent)" }}>All Delivery Tips →</a>
        <a href="/tipping-guide/" style={{ color: "var(--accent)" }}>Full Tipping Guide →</a>
      </div>
    </div>
  );
}
