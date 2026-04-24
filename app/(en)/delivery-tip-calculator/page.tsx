import type { Metadata } from "next";
import TipCalculator from "@/components/TipCalculator";

export const metadata: Metadata = {
  title: "Delivery Tip Calculator – DoorDash, Uber Eats, Grubhub",
  description:
    "Calculate the right tip for food delivery. Covers DoorDash, Uber Eats, Grubhub, and other services. Includes guidance on how much to tip based on order size and distance.",
  alternates: { canonical: "https://tipcalc.co/delivery-tip-calculator/" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much should I tip on DoorDash?",
      acceptedAnswer: { "@type": "Answer", text: "DoorDash dashers earn a base pay per delivery plus 100% of your tip. A minimum of $3–$4 for small orders, or 15–20% for larger ones, is considered fair. DoorDash recommends a default of 15%." },
    },
    {
      "@type": "Question",
      name: "How much should I tip on Uber Eats?",
      acceptedAnswer: { "@type": "Answer", text: "Uber suggests 15–20% as a default. Uber Eats couriers receive 100% of your tip. You can adjust the tip up to 1 hour after delivery." },
    },
    {
      "@type": "Question",
      name: "Is it okay not to tip for delivery?",
      acceptedAnswer: { "@type": "Answer", text: "Not tipping is your right, but it directly reduces the courier's income. Drivers can see the tip before accepting an order — no tip or low tip may mean longer wait times. For adequate service, a minimum of $3–$4 is considerate." },
    },
    {
      "@type": "Question",
      name: "Does the delivery fee go to the driver?",
      acceptedAnswer: { "@type": "Answer", text: "No. Delivery fees, service fees, and small order fees go to the platform. Only the tip field goes directly to the driver." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "TipCalc.co", item: "https://tipcalc.co/" },
    { "@type": "ListItem", position: 2, name: "Delivery Tip Calculator", item: "https://tipcalc.co/delivery-tip-calculator/" },
  ],
};

export default function DeliveryTipPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <nav className="text-xs mb-5" style={{ color: "var(--muted)" }}>
        <a href="/" style={{ color: "var(--accent)" }}>TipCalc.co</a>
        {" / "}Delivery Tip Calculator
      </nav>

      <div className="mb-7">
        <h1 className="text-3xl font-bold tracking-tight" style={{ color: "var(--text)" }}>
          Delivery Tip Calculator
        </h1>
        <p className="mt-2 text-base" style={{ color: "var(--muted)" }}>
          DoorDash, Uber Eats, Grubhub, and more. What to tip and why it matters.
        </p>
      </div>

      {/* Quick guidance */}
      <div
        className="mb-5 rounded-xl p-4 text-sm space-y-1"
        style={{ background: "var(--accent-light)", border: "1px solid var(--accent-light-border)", color: "var(--text)" }}
      >
        <p className="font-semibold" style={{ color: "var(--accent)" }}>Quick rule of thumb</p>
        <p>Minimum <strong>$3–$4</strong> for small orders, or <strong>15–20%</strong> — whichever is higher. Increase for bad weather, long distance, heavy orders, or stairs.</p>
      </div>

      <TipCalculator defaultTipPercent={18} />

      <section className="mt-12 prose-section">
        <h2>How Much to Tip for Food Delivery</h2>
        <p>
          Delivery drivers are independent contractors on platforms like DoorDash, Uber
          Eats, and Grubhub. They typically earn a base pay of <strong>$2–$4 per order</strong>{" "}
          plus your tip. A low or no tip may mean the order sits unaccepted longer, or
          goes to a driver who is further away.
        </p>

        <h3>Suggested Tip by Situation</h3>
        <ul>
          <li><strong>Standard order, short distance:</strong> $3–$5 or 15%, whichever is more</li>
          <li><strong>Large order ($50+):</strong> 15–20% of the order total</li>
          <li><strong>Long distance (5+ miles):</strong> Add $1–$2 extra</li>
          <li><strong>Bad weather (rain, snow):</strong> Add $2–$5 as a courtesy</li>
          <li><strong>Walk-up delivery (no elevator):</strong> Add $1–$2 per floor</li>
          <li><strong>Exceptional communication or care:</strong> 20–25%</li>
        </ul>

        <h3>Does the App Fee Replace the Tip?</h3>
        <p>
          No. Service fees, delivery fees, and "expanded range fees" on DoorDash, Uber
          Eats, and Grubhub go to the platform — not the driver. The tip field in the
          app (or a cash tip at the door) is what reaches the courier directly.
        </p>

        <h3>Should I Tip Before or After Delivery?</h3>
        <p>
          Most apps prompt you to tip before delivery. You can adjust the tip afterwards
          on some platforms (e.g., Uber Eats allows changing within 1 hour). Tipping
          before delivery generally results in faster acceptance of your order.
        </p>

        <h3>Tipping on Grocery Delivery (Instacart, Amazon Fresh)</h3>
        <p>
          15–20% is the norm for grocery delivery. The shopper handles selecting,
          packing, and delivering your items — often a more complex job than restaurant
          delivery. For large orders, a flat tip of $10–$20 is appropriate.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>
          FAQ — Delivery Tipping
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
          Uber / Rideshare Tip Calculator →
        </a>
        <a href="/restaurant-tip-calculator/" style={{ color: "var(--accent)" }}>
          Restaurant Tip Calculator →
        </a>
      </div>
    </div>
  );
}
