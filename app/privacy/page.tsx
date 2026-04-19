import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – TipCalc.co",
  description: "TipCalc.co privacy policy. All calculations run in your browser. No personal data is collected.",
  alternates: { canonical: "https://tipcalc.co/privacy/" },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12 prose-section">
      <h1 className="text-3xl font-bold tracking-tight mb-6" style={{ color: "var(--text)" }}>
        Privacy Policy
      </h1>
      <p style={{ color: "var(--muted)" }}>Last updated: April 2026</p>

      <h2>Overview</h2>
      <p>
        TipCalc.co is a client-side web application. All tip calculations are performed
        entirely in your browser using JavaScript. No bill amounts, tip percentages,
        split counts, or any other calculation data are transmitted to or stored on any
        server.
      </p>

      <h2>What We Collect</h2>
      <p>
        We do not collect personally identifiable information. We may use standard
        analytics (such as Google Analytics) to understand aggregate traffic patterns
        — e.g., how many visitors access the site, which pages are popular, and which
        countries visitors come from. This data is anonymized and aggregated.
      </p>

      <h2>Cookies</h2>
      <p>
        This site does not set any first-party cookies. Analytics providers may set
        their own cookies as described in their respective privacy policies.
      </p>

      <h2>Share Links</h2>
      <p>
        When you use the &quot;Share Link&quot; feature, bill and tip data is encoded in
        the URL parameters of the link you copy. This data is not sent to our servers —
        it exists only in the URL itself. Be aware that sharing this link with others
        will expose the bill amount and tip percentage encoded in the URL.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        We use Google Fonts to load the Inter typeface. Google&apos;s font service may
        log your IP address when loading fonts. See{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--accent)" }}
        >
          Google&apos;s Privacy Policy
        </a>{" "}
        for details.
      </p>

      <h2>Changes</h2>
      <p>
        We may update this policy from time to time. The &quot;Last updated&quot; date
        above reflects the most recent revision.
      </p>

      <h2>Contact</h2>
      <p>For privacy-related questions, please use the feedback form on the About page.</p>

      <div className="mt-8">
        <a href="/" className="btn-primary inline-block" style={{ textDecoration: "none" }}>
          Back to Calculator
        </a>
      </div>
    </div>
  );
}
