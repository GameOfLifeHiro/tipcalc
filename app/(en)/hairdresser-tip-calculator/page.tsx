import type { Metadata } from "next";
import TipCalculator from "@/components/TipCalculator";

export const metadata: Metadata = {
  title: "Hairdresser Tip Calculator – How Much to Tip Your Stylist or Barber",
  description:
    "Calculate tips for hairdressers, colorists, barbers, nail technicians, and other salon services. Includes tipping norms and when to tip the salon owner.",
  alternates: { canonical: "https://tipcalc.co/hairdresser-tip-calculator/" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much should I tip my hairdresser?",
      acceptedAnswer: { "@type": "Answer", text: "15–20% is standard in the US. For exceptional work (complex color, special occasions), 20–25% is appropriate. On a $100 service, that's $20." },
    },
    {
      "@type": "Question",
      name: "Should I tip on a $300 hair color appointment?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — 15–20% is still the norm regardless of the total. For a $300 service, a $45–$60 tip is appropriate. If that feels like a lot, 15% ($45) is very acceptable." },
    },
    {
      "@type": "Question",
      name: "How much to tip a barber for a $25 haircut?",
      acceptedAnswer: { "@type": "Answer", text: "A $4–$5 tip on a $25 cut is common (roughly 15–20%). Many people round up to the nearest $5 — so paying $30 total is typical." },
    },
    {
      "@type": "Question",
      name: "Do I tip at a nail salon?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — 15–20% is expected at nail salons. Cash tips are preferred by many nail technicians as they receive them directly." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "TipCalc.co", item: "https://tipcalc.co/" },
    { "@type": "ListItem", position: 2, name: "Hairdresser Tip Calculator", item: "https://tipcalc.co/hairdresser-tip-calculator/" },
  ],
};

export default function HairdresserTipPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <nav className="text-xs mb-5" style={{ color: "var(--muted)" }}>
        <a href="/" style={{ color: "var(--accent)" }}>TipCalc.co</a>
        {" / "}Hairdresser / Salon Tip Calculator
      </nav>

      <div className="mb-7">
        <h1 className="text-3xl font-bold tracking-tight" style={{ color: "var(--text)" }}>
          Hairdresser Tip Calculator
        </h1>
        <p className="mt-2 text-base" style={{ color: "var(--muted)" }}>
          Stylist, colorist, barber, nail tech — calculate the right tip for every
          salon service.
        </p>
      </div>

      <TipCalculator defaultTipPercent={20} />

      <section className="mt-12 prose-section">
        <h2>How Much to Tip a Hairdresser</h2>
        <p>
          The standard tip for hairdressers, stylists, and colorists is{" "}
          <strong>15–20%</strong> of the service cost (before any retail product
          purchases). For a simple haircut, 20% is common. For complex color services
          or special occasion styling, 20%+ reflects the extra skill and time involved.
        </p>

        <h3>Tip by Service Type</h3>
        <ul>
          <li><strong>Haircut (simple):</strong> $5–$10 or 20%</li>
          <li><strong>Haircut + blowout:</strong> 20% of total service</li>
          <li><strong>Color / highlights:</strong> 20% of service total</li>
          <li><strong>Balayage / complex color:</strong> 20–25% (hours of skill)</li>
          <li><strong>Barber (men&apos;s cut):</strong> $2–$5 or 15–20%</li>
          <li><strong>Nail technician (manicure/pedicure):</strong> 15–20%</li>
          <li><strong>Massage therapist:</strong> 15–20%</li>
          <li><strong>Esthetician / facial:</strong> 15–20%</li>
          <li><strong>Waxing:</strong> 15–20%</li>
        </ul>

        <h3>Do You Tip the Salon Owner?</h3>
        <p>
          Traditionally, the etiquette was not to tip the salon owner because they set
          their own prices and take home the full amount. However, this norm has evolved,
          and many stylists who own their salon still appreciate tips. If the owner
          personally services you and you feel it was worth it, tipping is always
          appreciated — but never obligatory.
        </p>

        <h3>What If Multiple People Worked on You?</h3>
        <p>
          It is appropriate to tip each person separately. For example, if a stylist
          cut your hair and an assistant washed and dried it, tip both. Use the Split
          Between feature to calculate per-service amounts, or handle them individually
          in the calculator.
        </p>

        <h3>Should You Tip on Retail Products?</h3>
        <p>
          No — tips at salons should be on the <strong>service price only</strong>, not
          on any retail products (shampoo, conditioner, etc.) you purchase. Ask for a
          breakdown if the service and products are on the same receipt.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>
          FAQ — Salon &amp; Hairdresser Tipping
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
        <a href="/restaurant-tip-calculator/" style={{ color: "var(--accent)" }}>
          Restaurant Tip Calculator →
        </a>
        <a href="/tipping-guide/" style={{ color: "var(--accent)" }}>
          Full Tipping Guide →
        </a>
      </div>
    </div>
  );
}
