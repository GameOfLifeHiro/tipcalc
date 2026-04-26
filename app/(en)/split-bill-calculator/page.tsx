import type { Metadata } from "next";
import TipCalculator from "@/components/TipCalculator";

export const metadata: Metadata = {
  title: "Split Restaurant Bill Calculator – Divide the Dinner Check with Tip",
  description:
    "Split a restaurant, dinner, or food bill evenly with tip included. Supports up to 20 people, rounding to the nearest $0.50 or $1, and a shareable link for your table.",
  alternates: {
    canonical: "https://tipcalc.co/split-bill-calculator/",
    languages: {
      en: "https://tipcalc.co/split-bill-calculator/",
      es: "https://tipcalc.co/es/split-bill-calculator/",
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I split a restaurant bill with tip?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Enter the full restaurant bill total, choose a tip percentage, and set the number of people. The calculator divides the total — including tip — equally per person. Enable 'Round up to $1' in Advanced options for clean cash splits.",
      },
    },
    {
      "@type": "Question",
      name: "How do you split a dinner bill evenly between friends?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use this dinner split calculator: enter the total food and drink amount, pick a tip %, and set the number of diners. The per-person amount shown includes both food and tip. Share the result link with your group so everyone sees the same number.",
      },
    },
    {
      "@type": "Question",
      name: "Should the tip be split equally when splitting a restaurant check?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, in most cases. The tip is calculated on the full bill and then divided equally — this is the simplest and fairest approach when everyone ordered similar amounts. If orders varied significantly, calculate each person's share separately and tip on their individual total.",
      },
    },
    {
      "@type": "Question",
      name: "What is a fair way to split a food or dinner bill when people ordered different amounts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Calculate the tip percentage on the full bill to find a tip-per-dollar rate, then each person pays their own food cost × (1 + tip rate). Example: $100 bill, 20% tip, 4 people — someone who ordered $40 pays $40 × 1.20 = $48.",
      },
    },
    {
      "@type": "Question",
      name: "How do I split a dinner bill calculator with rounding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In the Advanced options, choose 'Round up to $1' so each person pays a whole dollar amount. This avoids awkward change, rounds up slightly in the server's favor, and makes it easier for everyone to pay their share quickly.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "TipCalc.co", item: "https://tipcalc.co/" },
    { "@type": "ListItem", position: 2, name: "Split Restaurant Bill Calculator", item: "https://tipcalc.co/split-bill-calculator/" },
  ],
};

export default function SplitBillPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <nav className="text-xs mb-5" style={{ color: "var(--muted)" }}>
        <a href="/" style={{ color: "var(--accent)" }}>TipCalc.co</a>
        {" / "}Split Restaurant Bill Calculator
      </nav>

      <div className="mb-7">
        <h1 className="text-3xl font-bold tracking-tight" style={{ color: "var(--text)" }}>
          Split Restaurant Bill Calculator
        </h1>
        <p className="mt-2 text-base" style={{ color: "var(--muted)" }}>
          Divide a dinner, food, or any restaurant check equally — tip included. Up to 20 people.
        </p>
      </div>

      {/* Tips for group use */}
      <div
        className="mb-5 rounded-xl p-4 text-sm"
        style={{ background: "var(--accent-light)", border: "1px solid var(--accent-light-border)", color: "var(--text)" }}
      >
        <p className="font-semibold mb-1" style={{ color: "var(--accent)" }}>
          Splitting with a group?
        </p>
        <p>
          Use <strong>Round up to $1</strong> in Advanced options for easy cash splits —
          every person pays the same clean dollar amount, and the server earns a fair tip.
          Hit <strong>Share Link</strong> to send the calculation to the table.
        </p>
      </div>

      <TipCalculator defaultTipPercent={20} defaultSplit={2} showShareButton={true} />

      <section className="mt-12 prose-section">
        <h2>How to Split a Restaurant Bill with Tip</h2>
        <p>
          Splitting the dinner check evenly is the simplest approach for most groups. Here&apos;s
          the method:
        </p>
        <ul>
          <li>Enter the full restaurant bill total (everyone&apos;s food and drinks combined)</li>
          <li>Choose a tip percentage for the table</li>
          <li>Set the number of people splitting</li>
          <li>The calculator shows the total + tip, divided equally per person</li>
        </ul>
        <p>
          Enable <strong>Round up to $1</strong> in Advanced options so each person pays
          a whole dollar amount — this avoids awkward change and often results in a
          slightly better tip for the server.
        </p>

        <h2>Splitting a Dinner or Food Bill When People Ordered Different Amounts</h2>
        <p>
          This calculator splits the full bill evenly. If your group wants to pay for
          their individual items, calculate each person&apos;s share separately:
        </p>
        <ul>
          <li>
            Calculate the tip percentage on the full bill to get a tip-per-dollar rate
          </li>
          <li>
            Each person pays their own food cost × (1 + tip rate)
          </li>
        </ul>
        <p>
          Example: $100 total restaurant bill, 20% tip, 4 people — but one person ordered $40 worth.
          Their share = $40 × 1.20 = $48. The others split the remaining $72 three ways
          ($24 each).
        </p>

        <h2>Share the Dinner Check Calculation</h2>
        <p>
          Click <strong>Share Link</strong> after calculating. This copies a URL to your
          clipboard that encodes the bill amount, tip%, and split count. Send it to the
          group chat so everyone sees the same numbers — no math disputes at the table.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>
          Frequently Asked Questions
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
        <a href="/" style={{ color: "var(--accent)" }}>
          Main Tip Calculator →
        </a>
      </div>
    </div>
  );
}
