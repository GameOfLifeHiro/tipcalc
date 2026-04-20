import type { Metadata } from "next";
import TipCalculator from "@/components/TipCalculator";

export const metadata: Metadata = {
  title: "Restaurant Tip Calculator – Auto Gratuity, Pre-Tax & Party Splits",
  description:
    "Calculate restaurant tips accurately. Handles auto-gratuity warnings, pre-tax tipping, bill splitting for large parties, and rounding for easy cash payment.",
  alternates: { canonical: "https://tipcalc.co/restaurant-tip-calculator/" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much do you tip at a restaurant in the US?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The standard restaurant tip in the US is 15–20%. 15% for adequate service, 18% for good service, and 20% or more for excellent service. For poor service, 10% is a common signal.",
      },
    },
    {
      "@type": "Question",
      name: "What is automatic gratuity at a restaurant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Automatic gratuity (auto-gratuity) is a service charge added by the restaurant, usually 18–20%, for parties of 6 or more. It is mandatory. You are not required to add an additional tip, though you may for exceptional service.",
      },
    },
    {
      "@type": "Question",
      name: "Should you tip on the pre-tax amount at a restaurant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many etiquette experts recommend tipping on the pre-tax amount since sales tax is not part of the service. In practice, most diners tip on the after-tax total for convenience. Both are acceptable.",
      },
    },
  ],
};

export default function RestaurantTipPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
        <nav className="text-xs mb-5" style={{ color: "var(--muted)" }}>
          <a href="/" style={{ color: "var(--accent)" }}>TipCalc.co</a>
          {" / "}Restaurant Tip Calculator
        </nav>

        <div className="mb-7">
          <h1 className="text-3xl font-bold tracking-tight" style={{ color: "var(--text)" }}>
            Restaurant Tip Calculator
          </h1>
          <p className="mt-2 text-base" style={{ color: "var(--muted)" }}>
            Handles auto-gratuity, pre-tax tipping, and party splits.
          </p>
        </div>

        {/* Auto-gratuity notice */}
        <div
          className="mb-5 flex gap-3 rounded-xl p-4 text-sm"
          style={{ background: "#fefce8", border: "1px solid #fef08a", color: "#854d0e" }}
        >
          <span className="mt-0.5 flex-shrink-0">⚠</span>
          <p>
            <strong>Large party?</strong> Check your receipt for an automatic gratuity
            line (usually 18–20% for parties of 6+). If it&apos;s there, you&apos;ve
            already tipped — add more only for exceptional service.
          </p>
        </div>

        <TipCalculator defaultTipPercent={20} />

        <section className="mt-12 prose-section">
          <h2>Restaurant Tipping in the US</h2>
          <p>
            Restaurant servers in the US typically earn a lower base wage (as low as
            $2.13/hour federally, though many states require higher), with tips making up
            the majority of their income. The standard range is <strong>15–20%</strong>,
            calculated on the pre-tax or after-tax bill depending on your preference.
          </p>

          <h3>Tip Percentage Guide</h3>
          <ul>
            <li><strong>10%</strong> — Noticeably poor service</li>
            <li><strong>15%</strong> — Adequate service, standard minimum</li>
            <li><strong>18%</strong> — Good service, solid standard</li>
            <li><strong>20%</strong> — Excellent service, common today</li>
            <li><strong>22–25%+</strong> — Outstanding service or complex meal</li>
          </ul>

          <h3>When Automatic Gratuity Is Already Included</h3>
          <p>
            Many restaurants add a mandatory service charge (18–20%) for parties of 6 or
            more, or at certain venues. This line may appear as &quot;auto-gratuity,&quot;
            &quot;service charge,&quot; or &quot;gratuity included.&quot; If it&apos;s on your
            receipt, you do not owe an additional tip — though you may add one.
          </p>
          <p>
            Use the <strong>Advanced options → Service Charge</strong> field to exclude
            this amount from the tip base so you don&apos;t double-tip.
          </p>

          <h3>Splitting the Check at a Restaurant</h3>
          <p>
            Use the <strong>Split Between</strong> counter to divide the bill evenly.
            Enable <strong>Round up to $1</strong> in Advanced options for easy cash
            splits — everyone pays a round dollar amount and the server gets a fair tip.
          </p>

          <h3>Pre-Tax vs. After-Tax at Restaurants</h3>
          <p>
            Sales tax at US restaurants averages 6–10% depending on the state. Tipping
            on pre-tax saves a few dollars on larger bills. Toggle{" "}
            <strong>Pre-tax tipping</strong> in Advanced options and enter your state&apos;s
            sales tax rate to see the difference.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>
            Frequently Asked Questions
          </h2>
          <div className="card divide-y" style={{ borderColor: "var(--card-border)" }}>
            {[
              {
                q: "How much should I tip at a restaurant?",
                a: "15–20% is the US standard. 15% for adequate service, 18% for good, 20% for excellent. Always check if gratuity is already included for large parties.",
              },
              {
                q: "What is automatic gratuity?",
                a: "Automatic gratuity (auto-gratuity) is a mandatory service charge, usually 18–20%, added for large parties. It is not optional. You are not required to add an additional tip.",
              },
              {
                q: "Should I tip on the pre-tax amount at a restaurant?",
                a: "Many etiquette experts say pre-tax is correct since tax isn't part of the service. However, most people tip on the after-tax total for simplicity. Both are fine. Use the Advanced options to calculate both.",
              },
              {
                q: "How do I tip when splitting the check?",
                a: "Use the Split Between counter in this calculator. Tip first on the full bill, then divide total + tip equally. Avoid tipping only on your share of the food to ensure the server receives a fair gratuity.",
              },
            ].map(({ q, a }) => (
              <details key={q} className="faq-item px-5">
                <summary className="faq-question py-1 list-none">{q}</summary>
                <p className="faq-answer">{a}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="mt-12 flex flex-wrap gap-3 text-sm">
          <a href="/delivery-tip-calculator/" style={{ color: "var(--accent)" }}>
            Delivery Tip Calculator →
          </a>
          <a href="/tipping-guide/" style={{ color: "var(--accent)" }}>
            Full Tipping Guide →
          </a>
        </div>
      </div>
    </>
  );
}
