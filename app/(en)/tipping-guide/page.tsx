import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "US Tipping Guide 2026 – How Much to Tip for Every Service",
  description:
    "Complete US tipping etiquette guide: restaurants, delivery, rideshare, salons, hotels, movers, and more. Includes international tipping customs by country.",
  alternates: { canonical: "https://tipcalc.co/tipping-guide/" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the standard tip percentage in the US?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The standard tip in the US is 15–20% for restaurant service. 15% is considered the minimum for acceptable service, 18% for good service, and 20% for excellent service. Many service industries have adopted similar ranges.",
      },
    },
    {
      "@type": "Question",
      name: "Which countries don't tip?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tipping is not expected (and can be seen as insulting) in Japan, South Korea, and many other East Asian countries. In these cultures, good service is considered a professional standard, not something requiring extra payment.",
      },
    },
    {
      "@type": "Question",
      name: "Is it rude to not tip in the US?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — in the US, not tipping is considered rude because servers and many service workers earn a reduced base wage with the expectation that tips make up the difference. Not tipping directly harms the worker's livelihood.",
      },
    },
    {
      "@type": "Question",
      name: "How much do you tip hotel housekeeping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The standard tip for hotel housekeeping in the US is $2–$5 per night. Leave cash on the pillow or a designated area daily, as different staff may clean your room each day.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "TipCalc.co", item: "https://tipcalc.co/" },
    { "@type": "ListItem", position: 2, name: "US Tipping Guide", item: "https://tipcalc.co/tipping-guide/" },
  ],
};

const US_TIPS = [
  { service: "Restaurant server", tip: "15–20%", notes: "Check for auto-gratuity on large parties" },
  { service: "Bartender", tip: "15–20% or $1–$2 per drink", notes: "" },
  { service: "Food delivery", tip: "$3–$6 or 15–20%", notes: "Whichever is higher" },
  { service: "Grocery delivery (Instacart)", tip: "15–20%", notes: "Min $5 for small orders" },
  { service: "Uber / Lyft", tip: "15–20%", notes: "More for extra help, bad weather" },
  { service: "Taxi (NYC / standard)", tip: "15–20%", notes: "NYC: tip on meter fare only, not tolls or surcharges" },
  { service: "Hairdresser / colorist", tip: "15–20%", notes: "On service only, not retail" },
  { service: "Barber", tip: "15–20% or $2–$5", notes: "" },
  { service: "Nail technician", tip: "15–20%", notes: "Cash preferred" },
  { service: "Massage therapist", tip: "15–20%", notes: "" },
  { service: "Esthetician / facial", tip: "15–20%", notes: "" },
  { service: "Tattoo artist", tip: "15–20%", notes: "More for large/complex pieces" },
  { service: "Hotel housekeeping", tip: "$2–$5 per night", notes: "Leave daily; staff may change" },
  { service: "Hotel valet / parking", tip: "$2–$5", notes: "When retrieving car" },
  { service: "Hotel bellhop", tip: "$1–$2 per bag", notes: "" },
  { service: "Hotel concierge", tip: "$5–$20", notes: "For significant help (reservations, tickets)" },
  { service: "Movers", tip: "$5–$10 per mover or 10–20%", notes: "More for stairs, heavy items" },
  { service: "Furniture / appliance delivery", tip: "$5–$20 per person", notes: "" },
  { service: "Plumber / electrician / handyman", tip: "Not expected", notes: "A drink or snack is appreciated" },
  { service: "House cleaner (one-time)", tip: "15–20%", notes: "" },
  { service: "Regular house cleaner", tip: "Weekly: $10–$20, Holiday: extra session's pay", notes: "" },
  { service: "Pizza delivery", tip: "$3–$5 or 15–20%", notes: "" },
  { service: "Tour guide", tip: "$5–$10 per person", notes: "More for full-day tours" },
  { service: "Shuttle driver", tip: "$1–$3", notes: "" },
  { service: "Casino dealer", tip: "No set amount, optional", notes: "" },
  { service: "Coat check", tip: "$1–$2 per coat", notes: "" },
  { service: "Restroom attendant", tip: "$0.50–$1", notes: "" },
  { service: "Skycap / baggage handler", tip: "$1–$2 per bag", notes: "" },
  { service: "Counter service / fast food", tip: "Not expected", notes: "Optional if you feel so inclined" },
  { service: "Coffee shop (cafe)", tip: "$0.25–$1 or 10%", notes: "Optional; more for complex orders" },
];

const INTERNATIONAL = [
  { region: "United States / Canada", norm: "15–20% expected", notes: "Standard for most service industries" },
  { region: "United Kingdom", norm: "10–15%", notes: "Check if service charge already added" },
  { region: "Australia / New Zealand", norm: "Not expected", notes: "Workers paid a living wage; tips gratefully received" },
  { region: "France / Spain / Italy", norm: "Round up or 5–10%", notes: "Service charge often included; 'le pourboire' is small" },
  { region: "Germany / Austria", norm: "Round up or 5–10%", notes: "Rounding to a whole number is common" },
  { region: "Japan", norm: "Not expected — can be insulting", notes: "Service is considered a professional duty" },
  { region: "South Korea", norm: "Not expected", notes: "Some tourist restaurants may accept" },
  { region: "China", norm: "Not common in local establishments", notes: "Western hotels and tourist spots may expect tips" },
  { region: "Southeast Asia (Thailand, Vietnam, etc.)", norm: "10% or $1–$5", notes: "Increasingly common in tourist areas" },
  { region: "India", norm: "10% or small flat tip", notes: "Expected in restaurants; not required elsewhere" },
  { region: "Mexico / Latin America", norm: "10–15%", notes: "Varies by country; USD often accepted" },
  { region: "Middle East (UAE, Saudi)", norm: "10–15% in tourist areas", notes: "Not always expected; varies significantly" },
];

export default function TippingGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
        <nav className="text-xs mb-5" style={{ color: "var(--muted)" }}>
          <a href="/" style={{ color: "var(--accent)" }}>TipCalc.co</a>
          {" / "}Tipping Guide
        </nav>

        <div className="mb-7">
          <h1 className="text-3xl font-bold tracking-tight" style={{ color: "var(--text)" }}>
            US Tipping Guide 2026
          </h1>
          <p className="mt-2 text-base" style={{ color: "var(--muted)" }}>
            How much to tip for every service, plus international tipping customs.
          </p>
        </div>

        {/* US Tipping table */}
        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: "var(--text)" }}>
            US Tipping by Service
          </h2>
          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="ref-table">
                <thead>
                  <tr>
                    <th>Service</th>
                    <th style={{ textAlign: "left" }}>Typical Tip</th>
                    <th style={{ textAlign: "left" }}>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {US_TIPS.map(({ service, tip, notes }) => (
                    <tr key={service}>
                      <td>{service}</td>
                      <td style={{ textAlign: "left", fontWeight: 600 }}>{tip}</td>
                      <td style={{ textAlign: "left", color: "var(--muted)", fontSize: "0.8125rem" }}>{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* International */}
        <section className="mt-12">
          <h2 className="text-xl font-bold mb-3" style={{ color: "var(--text)" }}>
            International Tipping Customs
          </h2>
          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="ref-table">
                <thead>
                  <tr>
                    <th>Region</th>
                    <th style={{ textAlign: "left" }}>Norm</th>
                    <th style={{ textAlign: "left" }}>Context</th>
                  </tr>
                </thead>
                <tbody>
                  {INTERNATIONAL.map(({ region, norm, notes }) => (
                    <tr key={region}>
                      <td>{region}</td>
                      <td style={{ textAlign: "left", fontWeight: 600 }}>{norm}</td>
                      <td style={{ textAlign: "left", color: "var(--muted)", fontSize: "0.8125rem" }}>{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>
            Tipping FAQ
          </h2>
          <div className="card divide-y" style={{ borderColor: "var(--card-border)" }}>
            {[
              {
                q: "What is the standard tip percentage in the US?",
                a: "15–20% for restaurants and most personal services. 15% is the minimum for acceptable service, 18–20% for good to excellent.",
              },
              {
                q: "Why do Americans tip so much compared to other countries?",
                a: "US federal law allows tipped employees to earn as little as $2.13/hour in base wages (though many states set higher floors). Employers rely on tips to bring workers to minimum wage. This system traces back to post-Civil War labor practices and remains politically contentious today.",
              },
              {
                q: "Which countries don't tip?",
                a: "Japan and South Korea have strong no-tipping cultures — it can be seen as rude or even as an implied bribe. Australia, New Zealand, and many Northern European countries don't expect tips because workers receive living wages.",
              },
              {
                q: "Is 20% the new standard for restaurant tipping?",
                a: "Many industry observers say 20% has become the de facto standard for good service in the US, replacing the older 15% baseline. This shift reflects higher costs of living in many cities.",
              },
              {
                q: "How much do you tip for poor service?",
                a: "10% is a common signal for poor service. Skipping the tip entirely is seen as very rude and generally not recommended — it harms the worker more than the restaurant. If service was truly unacceptable, speak to a manager.",
              },
              {
                q: "Do you tip when you pick up an order?",
                a: "Tipping for pickup is increasingly common and appreciated, but not expected the way table service is. Many apps prompt a 10–15% tip for counter service. It is optional.",
              },
              {
                q: "How much do you tip hotel housekeeping?",
                a: "$2–$5 per night in a standard hotel, $5–$10 in a luxury hotel. Leave cash each day (not at checkout) since different staff may clean your room.",
              },
              {
                q: "Should you tip at a counter or coffee shop?",
                a: "Counter service tips are optional. Many people tip $0.25–$1 for simple drinks or 10% for more complex orders. With tap-to-pay prompts appearing everywhere, tip fatigue is real — tip what you feel is appropriate.",
              },
            ].map(({ q, a }) => (
              <details key={q} className="faq-item px-5">
                <summary className="faq-question py-1 list-none">{q}</summary>
                <p className="faq-answer">{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-12 prose-section">
          <h2>The History of Tipping in America</h2>
          <p>
            Tipping in the United States became widespread after the Civil War, partly
            driven by employers seeking to hire freed slaves at reduced wages with tips
            making up the difference. The practice was controversial early on — several
            states actually passed anti-tipping laws in the early 1900s, which were later
            repealed. Today the US tipping culture is deeply embedded in the service
            industry, with workers earning base wages as low as $2.13/hour (federal
            tipped minimum wage as of 2026) before tips.
          </p>
          <p>
            The rise of digital payments and point-of-sale tip prompts has expanded
            tipping to industries where it was not previously expected, contributing to
            &quot;tip creep&quot; — a growing social debate about when tipping is appropriate.
          </p>
        </section>

        <div className="mt-10 flex flex-wrap gap-3 text-sm">
          <a href="/" style={{ color: "var(--accent)" }}>
            Tip Calculator →
          </a>
          <a href="/restaurant-tip-calculator/" style={{ color: "var(--accent)" }}>
            Restaurant Tip Calculator →
          </a>
          <a href="/delivery-tip-calculator/" style={{ color: "var(--accent)" }}>
            Delivery Tip Calculator →
          </a>
        </div>
      </div>
    </>
  );
}
