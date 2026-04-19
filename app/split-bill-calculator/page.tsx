import type { Metadata } from "next";
import TipCalculator from "@/components/TipCalculator";

export const metadata: Metadata = {
  title: "Split Bill Calculator – Divide the Check with Tip Included",
  description:
    "Split any bill evenly including tip. Supports up to 20 people, rounding to the nearest $0.50 or $1, and generates a shareable link for your group.",
  alternates: { canonical: "https://tipcalc.co/split-bill-calculator/" },
};

export default function SplitBillPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
      <nav className="text-xs mb-5" style={{ color: "var(--muted)" }}>
        <a href="/" style={{ color: "var(--accent)" }}>TipCalc.co</a>
        {" / "}Split Bill Calculator
      </nav>

      <div className="mb-7">
        <h1 className="text-3xl font-bold tracking-tight" style={{ color: "var(--text)" }}>
          Split Bill Calculator
        </h1>
        <p className="mt-2 text-base" style={{ color: "var(--muted)" }}>
          Divide the bill including tip, up to 20 people. Share the result link with
          your group.
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
        <h2>How to Split a Bill with Tip</h2>
        <p>
          Splitting the bill evenly is the simplest approach for most groups. Here&apos;s
          the method:
        </p>
        <ul>
          <li>Enter the full bill total (everyone&apos;s food and drinks combined)</li>
          <li>Choose a tip percentage for the table</li>
          <li>Set the number of people splitting</li>
          <li>The calculator shows the total + tip, divided equally per person</li>
        </ul>
        <p>
          Enable <strong>Round up to $1</strong> in Advanced options so each person pays
          a whole dollar amount — this avoids awkward change and often results in a
          slightly better tip for the server.
        </p>

        <h2>What If People Ordered Different Amounts?</h2>
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
          Example: $100 total bill, 20% tip, 4 people — but one person ordered $40 worth.
          Their share = $40 × 1.20 = $48. The others split the remaining $72 three ways
          ($24 each).
        </p>

        <h2>Sharing the Bill Calculation</h2>
        <p>
          Click <strong>Share Link</strong> after calculating. This copies a URL to your
          clipboard that encodes the bill amount, tip%, and split count. Send it to the
          group chat so everyone sees the same numbers.
        </p>
      </section>

      <div className="mt-12 flex flex-wrap gap-3 text-sm">
        <a href="/restaurant-tip-calculator/" style={{ color: "var(--accent)" }}>
          Restaurant Tip Calculator →
        </a>
        <a href="/" style={{ color: "var(--accent)" }}>
          Main Tip Calculator →
        </a>
      </div>
    </div>
  );
}
