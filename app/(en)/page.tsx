import type { Metadata } from "next";
import TipCalculator from "@/components/TipCalculator";
import { buildQuickTable, formatUSD, QUICK_TABLE_PERCENTS } from "@/lib/tipCalc";

export const metadata: Metadata = {
  title: "Tip Calculator – Split Bill, Pre-Tax & All Scenarios",
  description:
    "Calculate tips instantly with pre-tax toggle, bill splitting, and smart rounding. For restaurants, delivery, rideshare, salons, hotels & more. Free, fast, no sign-up.",
  alternates: { canonical: "https://tipcalc.co" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much should I tip at a restaurant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "15–20% is standard in the US. 15% for adequate service, 18% for good service, 20% for excellent service. For large parties, check whether automatic gratuity (18–20%) is already included on the bill.",
      },
    },
    {
      "@type": "Question",
      name: "Should I tip on the pre-tax or after-tax amount?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many etiquette sources recommend tipping on the pre-tax amount since sales tax is not part of the service. However, tipping on the full after-tax total is also common and simpler. Use the pre-tax toggle on this calculator to see both amounts.",
      },
    },
    {
      "@type": "Question",
      name: "How much should I tip for food delivery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard delivery tip is $3–$6 or 15–20% of the order total, whichever is higher. Consider tipping more for long distances, bad weather, large orders, or exceptional service.",
      },
    },
    {
      "@type": "Question",
      name: "How do I calculate a 20% tip?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To calculate 20% tip: move the decimal point one place left (10%), then double it. For example, on a $50 bill: $5.00 × 2 = $10.00 tip. Or simply use this calculator.",
      },
    },
    {
      "@type": "Question",
      name: "How much do I tip if a service charge is included?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A service charge is a mandatory fee — it is not always a tip. You are not obligated to tip further, though you may do so for exceptional service. Use the service charge field in the advanced options to exclude it from your tip base.",
      },
    },
  ],
};

const quickTable = buildQuickTable();

const SCENARIO_LINKS = [
  {
    href: "/restaurant-tip-calculator/",
    title: "Restaurant",
    desc: "Auto gratuity warning, pre-tax toggle, large-party splits.",
    tip: "15–20%",
  },
  {
    href: "/delivery-tip-calculator/",
    title: "Delivery",
    desc: "DoorDash, Uber Eats, Grubhub — what to tip and when.",
    tip: "$3–$6",
  },
  {
    href: "/uber-tip-calculator/",
    title: "Uber",
    desc: "Uber tipping norms and suggested amounts.",
    tip: "15–20%",
  },
  {
    href: "/lyft-tip-calculator/",
    title: "Lyft",
    desc: "How much to tip your Lyft driver and when.",
    tip: "15–20%",
  },
  {
    href: "/doordash-tip-calculator/",
    title: "DoorDash",
    desc: "How much to tip your Dasher — base pay explained.",
    tip: "$3–$6",
  },
  {
    href: "/uber-eats-tip-calculator/",
    title: "Uber Eats",
    desc: "Uber Eats tipping norms and how courier pay works.",
    tip: "15–20%",
  },
  {
    href: "/hairdresser-tip-calculator/",
    title: "Hairdresser / Salon",
    desc: "Stylist, colorist, barber — how much to tip.",
    tip: "15–20%",
  },
  {
    href: "/split-bill-calculator/",
    title: "Split Bill",
    desc: "Divide any bill evenly with rounding options.",
    tip: "÷ N",
  },
  {
    href: "/tipping-guide/",
    title: "Tipping Guide",
    desc: "Full US tipping etiquette guide + international norms.",
    tip: "All",
  },
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero band */}
      <div
        className="px-4 py-10 sm:py-14 text-center"
        style={{ background: "var(--header-bg)" }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Tip Calculator
        </h1>
        <p className="mt-2 text-base" style={{ color: "rgba(255,255,255,0.92)" }}>
          Enter your bill, pick a percentage, split the check — done in seconds.
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-4 -mt-6 pb-8 sm:pb-12">
        {/* Calculator card lifts out of the hero */}
        <TipCalculator />

        {/* Scenario links */}
        <section className="mt-12">
          <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>
            Calculators by Scenario
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {SCENARIO_LINKS.map((s) => (
              <a
                key={s.href}
                href={s.href}
                className="card p-4 hover:border-[var(--accent)] transition-colors group"
                style={{ display: "block" }}
              >
                <div className="flex justify-between items-start mb-1">
                  <span className="font-semibold text-sm" style={{ color: "var(--text)" }}>
                    {s.title}
                  </span>
                  <span
                    className="text-xs font-semibold px-1.5 py-0.5 rounded"
                    style={{ background: "var(--accent-light)", color: "var(--accent)" }}
                  >
                    {s.tip}
                  </span>
                </div>
                <p className="text-xs leading-snug" style={{ color: "var(--muted)" }}>
                  {s.desc}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Quick Reference Table */}
        <section className="mt-12">
          <h2 className="text-xl font-bold mb-1" style={{ color: "var(--text)" }}>
            Quick Reference — Tip Amounts
          </h2>
          <p className="text-sm mb-4" style={{ color: "var(--muted)" }}>
            Tip amounts for common bill sizes at standard percentages.
          </p>
          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="ref-table">
                <thead>
                  <tr>
                    <th>Bill</th>
                    {QUICK_TABLE_PERCENTS.map((p) => (
                      <th key={p}>{p}% tip</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {quickTable.map((row) => (
                    <tr key={row.bill}>
                      <td>{formatUSD(row.bill)}</td>
                      {QUICK_TABLE_PERCENTS.map((p) => (
                        <td key={p}>{formatUSD(row.tips[p])}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs mt-2" style={{ color: "var(--muted-light)" }}>
            Figures are pre-tax tip amounts. Use the calculator above for your exact bill.
          </p>
        </section>

        {/* How to calculate */}
        <section className="mt-12 prose-section">
          <h2>How to Calculate a Tip</h2>
          <p>
            The easiest way is to use this calculator — enter your bill, choose a
            percentage, and get an instant result. If you want to do it mentally:
          </p>
          <ul>
            <li>
              <strong>20% tip:</strong> Move the decimal left one place (10%), then
              double it. $48 bill → $4.80 × 2 = <strong>$9.60 tip</strong>.
            </li>
            <li>
              <strong>15% tip:</strong> Find 10% (move decimal), then add half of that.
              $48 → $4.80 + $2.40 = <strong>$7.20 tip</strong>.
            </li>
            <li>
              <strong>18% tip:</strong> Find 10%, double it (20%), subtract one-ninth.
              Or just use the calculator.
            </li>
          </ul>

          <h2>Pre-Tax vs After-Tax Tipping</h2>
          <p>
            In the US, many diners prefer to tip on the <strong>pre-tax amount</strong> because sales tax is not part of the service rendered. Others tip on the after-tax total for simplicity. Both are acceptable. Use the{" "}
            <strong>Advanced options</strong> toggle above to enable pre-tax mode —
            enter your sales tax rate and the calculator backs it out automatically.
          </p>

          <h2>Service Charge vs. Tip</h2>
          <p>
            A <strong>service charge</strong> (sometimes called an "auto-gratuity") is a
            mandatory fee added by the restaurant — common for parties of 6 or more, or
            at certain venues. It may or may not go entirely to service staff, depending
            on the establishment. You are not required to tip on top of a service charge,
            but may do so for excellent service. Enter the service charge amount in
            Advanced options to exclude it from the tip base.
          </p>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>
            Frequently Asked Questions
          </h2>
          <div className="card divide-y" style={{ borderColor: "var(--card-border)" }}>
            {[
              {
                q: "How much should I tip at a restaurant?",
                a: "15–20% is the US standard. 15% for adequate service, 18% for good service, 20% for excellent. Always check if gratuity is already included for large parties.",
              },
              {
                q: "Should I tip on the pre-tax or after-tax amount?",
                a: "Many etiquette sources suggest pre-tax because tax isn't part of the service. But tipping on the full total is common and simpler. This calculator supports both — toggle Pre-tax tipping in Advanced options.",
              },
              {
                q: "How much should I tip for food delivery?",
                a: "$3–$6 minimum, or 15–20% of the order total. Tip more for long distances, bad weather, stairs, or large orders.",
              },
              {
                q: "Is 15% a good tip?",
                a: "15% is acceptable for adequate service. Most servers in the US depend on tips to reach minimum wage, so 18–20% is more common today for solid service.",
              },
              {
                q: "How do I split the tip between people?",
                a: "Use the Split Between counter above. Set the number of people, and the calculator shows the per-person share of both the tip and the total. Enable rounding to nearest $0.50 or $1 for easy cash splits.",
              },
              {
                q: "Do I need to tip if a service charge is included?",
                a: "No — a service charge is a mandatory fee and counts as your gratuity. Adding an extra tip is optional and at your discretion.",
              },
            ].map(({ q, a }) => (
              <details key={q} className="faq-item px-5">
                <summary className="faq-question py-1 list-none">{q}</summary>
                <p className="faq-answer">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Tipping norms by service */}
        <section className="mt-12 prose-section">
          <h2>US Tipping Norms by Service</h2>
          <div className="card overflow-hidden mt-3">
            <div className="overflow-x-auto">
              <table className="ref-table">
                <thead>
                  <tr>
                    <th>Service</th>
                    <th style={{ textAlign: "left" }}>Typical Tip</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Restaurant / Bartender", "15–20%"],
                    ["Food Delivery", "$3–$6 or 15–20%"],
                    ["Uber / Lyft", "15–20%"],
                    ["Hairdresser / Barber", "15–20%"],
                    ["Nail salon", "15–20%"],
                    ["Massage therapist", "15–20%"],
                    ["Hotel housekeeping", "$2–$5 per night"],
                    ["Hotel valet / bellhop", "$2–$5"],
                    ["Tattoo artist", "15–20%"],
                    ["Movers", "$5–$10 per mover or 10–20%"],
                    ["Taxi / limo", "15–20%"],
                    ["Tour guide", "$5–$10 per person"],
                    ["Fast food / counter service", "Not expected"],
                  ].map(([service, tip]) => (
                    <tr key={service}>
                      <td>{service}</td>
                      <td style={{ textAlign: "left" }}>{tip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-3">
            For a complete guide including international tipping customs, see our{" "}
            <a href="/tipping-guide/" style={{ color: "var(--accent)" }}>
              Tipping Guide
            </a>
            .
          </p>
        </section>
      </div>
    </>
  );
}
