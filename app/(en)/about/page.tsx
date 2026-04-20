import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About TipCalc.co – Fast, Accurate Tip Calculator",
  description: "TipCalc.co is a free, privacy-focused tip calculator with pre-tax toggle, bill splitting, and scenario-specific guidance.",
  alternates: { canonical: "https://tipcalc.co/about/" },
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12 prose-section">
      <h1 className="text-3xl font-bold tracking-tight mb-6" style={{ color: "var(--text)" }}>
        About TipCalc.co
      </h1>

      <p>
        TipCalc.co is a free tip calculator designed to be the fastest, most accurate
        tool for calculating tips in any situation. Whether you&apos;re at a restaurant,
        splitting a delivery order, or paying your stylist, this calculator gives you an
        instant answer with no ads above the fold, no sign-up, and no tracking.
      </p>

      <h2>What Makes TipCalc.co Different</h2>
      <ul>
        <li>
          <strong>Pre-tax tipping</strong> — most calculators ignore this. Enter your
          sales tax rate and this calculator backs it out of the tip base, matching what
          etiquette experts recommend.
        </li>
        <li>
          <strong>Service charge handling</strong> — enter any mandatory service charge
          so it&apos;s excluded from the tip base and you don&apos;t double-tip.
        </li>
        <li>
          <strong>Smart rounding</strong> — round per-person amounts to the nearest
          $0.50 or $1 for easy cash splits.
        </li>
        <li>
          <strong>Share links</strong> — click &quot;Share Link&quot; to copy a URL with
          your bill, tip%, and split encoded. Send it to the table.
        </li>
        <li>
          <strong>Scenario sub-pages</strong> — purpose-built calculators for
          restaurants, delivery, rideshare, salons, and more, each with relevant
          guidance.
        </li>
      </ul>

      <h2>Privacy</h2>
      <p>
        All calculations happen entirely in your browser. No bill amounts, tip
        percentages, or personal data are ever sent to a server. See our{" "}
        <a href="/privacy/" style={{ color: "var(--accent)" }}>Privacy Policy</a> for
        full details.
      </p>

      <h2>About the Company</h2>
      <p>
        TipCalc.co is a product of{" "}
        <strong>Ascent Leadership Institute Inc</strong>, based in Las Vegas, NV, USA.
        Ascent Leadership Institute develops practical digital tools designed to make
        everyday decisions faster and clearer.
      </p>

      <h2>Contact</h2>
      <p>
        Questions or feedback? Feel free to reach out via the feedback form (coming
        soon), or contact Ascent Leadership Institute Inc directly.
      </p>
      <p style={{ color: "var(--muted)" }}>
        Ascent Leadership Institute Inc<br />
        Las Vegas, NV, USA
      </p>

      <div className="mt-8">
        <a href="/" className="btn-primary inline-block" style={{ textDecoration: "none" }}>
          Back to Calculator
        </a>
      </div>
    </div>
  );
}
