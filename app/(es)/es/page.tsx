import type { Metadata } from "next";
import TipCalculator from "@/components/TipCalculator";
import { buildQuickTable, formatUSD, QUICK_TABLE_PERCENTS } from "@/lib/tipCalc";

export const metadata: Metadata = {
  title: "Calculadora de Propinas – Divide la Cuenta, Antes de Impuestos",
  description:
    "Calcula propinas al instante con opción antes de impuestos, división de cuenta y redondeo inteligente. Para restaurantes, entrega, Uber, peluquería y más. Gratis y sin registro.",
  alternates: {
    canonical: "https://tipcalc.co/es/",
    languages: { en: "https://tipcalc.co/", es: "https://tipcalc.co/es/" },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto se deja de propina en un restaurante?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En Estados Unidos, la propina estándar es del 15–20%. El 15% para un servicio adecuado, el 18% para buen servicio y el 20% para un servicio excelente. En grupos grandes, verifica si ya hay cargos de servicio incluidos.",
      },
    },
    {
      "@type": "Question",
      name: "¿La propina se calcula antes o después de impuestos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Muchos expertos en etiqueta recomiendan calcular la propina sobre el monto antes de impuestos ya que el impuesto no forma parte del servicio. Sin embargo, también es válido calcularla sobre el total con impuestos por ser más sencillo. Ambas opciones son aceptadas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto se deja de propina para entrega a domicilio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La propina estándar para entrega es de $3–$6 o del 15–20% del total del pedido, lo que sea mayor. Considera dejar más si hay mala climatología, recorrido largo o pedido grande.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo calculo el 20% de propina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para calcular el 20%: mueve el punto decimal un lugar a la izquierda (10%) y duplícalo. Por ejemplo, en una cuenta de $50: $5.00 × 2 = $10.00 de propina. O simplemente usa esta calculadora.",
      },
    },
  ],
};

const quickTable = buildQuickTable();

const SCENARIO_LINKS = [
  { href: "/es/restaurant-tip-calculator/", title: "Restaurante", desc: "Cargos automáticos, propina antes de impuestos, división para grupos.", tip: "15–20%" },
  { href: "/es/delivery-tip-calculator/", title: "Entrega a domicilio", desc: "DoorDash, Uber Eats, Grubhub — cuánto dejar y cuándo.", tip: "$3–$6" },
  { href: "/es/uber-tip-calculator/", title: "Uber / Lyft", desc: "Normas de propina en rideshare y montos sugeridos.", tip: "15–20%" },
  { href: "/es/hairdresser-tip-calculator/", title: "Peluquería / Salón", desc: "Estilista, colorista, barbero — cuánto propina dejar.", tip: "15–20%" },
  { href: "/es/split-bill-calculator/", title: "Dividir cuenta", desc: "Divide cualquier cuenta equitativamente con opciones de redondeo.", tip: "÷ N" },
  { href: "/es/tipping-guide/", title: "Guía de propinas", desc: "Guía completa de etiqueta para propinas en EE. UU.", tip: "Todo" },
];

export default function EsHomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="px-4 py-10 sm:py-14 text-center" style={{ background: "var(--header-bg)" }}>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Calculadora de Propinas
        </h1>
        <p className="mt-2 text-base" style={{ color: "rgba(255,255,255,0.75)" }}>
          Ingresa tu cuenta, elige el porcentaje, divide el gasto — listo en segundos.
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-4 -mt-6 pb-8 sm:pb-12">
        <TipCalculator />

        <section className="mt-12">
          <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>
            Calculadoras por situación
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {SCENARIO_LINKS.map((s) => (
              <a key={s.href} href={s.href}
                className="card p-4 hover:border-[var(--accent)] transition-colors group"
                style={{ display: "block" }}
              >
                <div className="flex justify-between items-start mb-1">
                  <span className="font-semibold text-sm" style={{ color: "var(--text)" }}>{s.title}</span>
                  <span className="text-xs font-semibold px-1.5 py-0.5 rounded"
                    style={{ background: "var(--accent-light)", color: "var(--accent)" }}
                  >{s.tip}</span>
                </div>
                <p className="text-xs leading-snug" style={{ color: "var(--muted)" }}>{s.desc}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold mb-1" style={{ color: "var(--text)" }}>
            Referencia rápida — Montos de propina
          </h2>
          <p className="text-sm mb-4" style={{ color: "var(--muted)" }}>
            Montos de propina para cuentas comunes según porcentajes estándar.
          </p>
          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="ref-table">
                <thead>
                  <tr>
                    <th>Cuenta</th>
                    {QUICK_TABLE_PERCENTS.map((p) => (<th key={p}>{p}% propina</th>))}
                  </tr>
                </thead>
                <tbody>
                  {quickTable.map((row) => (
                    <tr key={row.bill}>
                      <td>{formatUSD(row.bill)}</td>
                      {QUICK_TABLE_PERCENTS.map((p) => (<td key={p}>{formatUSD(row.tips[p])}</td>))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs mt-2" style={{ color: "var(--muted-light)" }}>
            Montos son propinas antes de impuestos. Usa la calculadora para tu cuenta exacta.
          </p>
        </section>

        <section className="mt-12 prose-section">
          <h2>Cómo calcular una propina</h2>
          <p>La forma más fácil es usar esta calculadora. Si quieres hacerlo mentalmente:</p>
          <ul>
            <li><strong>Propina del 20%:</strong> Mueve el punto decimal un lugar a la izquierda (10%) y duplícalo. Cuenta de $48 → $4.80 × 2 = <strong>$9.60 de propina</strong>.</li>
            <li><strong>Propina del 15%:</strong> Calcula el 10% y añade la mitad de esa cifra. $48 → $4.80 + $2.40 = <strong>$7.20 de propina</strong>.</li>
            <li><strong>Propina del 18%:</strong> Calcula el 10%, duplícalo y resta una novena parte. O simplemente usa la calculadora.</li>
          </ul>

          <h2>Propina antes o después de impuestos</h2>
          <p>
            Muchos expertos en etiqueta recomiendan dejar propina sobre el monto antes de impuestos, ya que el impuesto sobre ventas no es parte del servicio. Sin embargo, calcularla sobre el total es igualmente válido y más sencillo. Ambas opciones son aceptadas. Usa la opción <strong>Avanzado</strong> para activar el modo antes de impuestos.
          </p>

          <h2>Cargo de servicio vs. propina</h2>
          <p>
            Un <strong>cargo de servicio</strong> es un cargo obligatorio que el restaurante añade a la cuenta, generalmente para grupos de 6 o más personas. A veces aparece como "propina automática" o "gratuidad incluida." Si aparece en tu recibo, no estás obligado a dejar propina adicional. Ingresa ese monto en las opciones avanzadas para excluirlo de la base de propina.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>
            Preguntas frecuentes
          </h2>
          <div className="card divide-y" style={{ borderColor: "var(--card-border)" }}>
            {[
              { q: "¿Cuánto debo dejar de propina en un restaurante?", a: "Del 15 al 20% es el estándar en EE. UU. El 15% para servicio adecuado, 18% para buen servicio y 20% para servicio excelente. Verifica siempre si la gratuidad ya está incluida para grupos grandes." },
              { q: "¿La propina se calcula antes o después de impuestos?", a: "Muchos expertos sugieren que se calcule antes de impuestos ya que el impuesto no es parte del servicio. Sin embargo, calcularla sobre el total es igualmente válido. Esta calculadora admite ambas opciones — activa 'Propina antes de impuestos' en las opciones avanzadas." },
              { q: "¿Cuánto se da de propina para entrega a domicilio?", a: "Un mínimo de $3–$6, o del 15 al 20% del total del pedido. Deja más si hay mal tiempo, el recorrido es largo o el pedido es grande." },
              { q: "¿Cómo se divide la propina entre varias personas?", a: "Usa el contador 'Dividir entre' de esta calculadora. Ingresa el número de personas y verás cuánto le corresponde a cada una del total con propina incluida. Activa el redondeo para facilitar el pago en efectivo." },
              { q: "¿Debo dejar propina si hay cargo de servicio incluido?", a: "No es obligatorio — el cargo de servicio ya cuenta como propina. Añadir una propina adicional es opcional y queda a tu discreción." },
            ].map(({ q, a }) => (
              <details key={q} className="faq-item px-5">
                <summary className="faq-question py-1 list-none">{q}</summary>
                <p className="faq-answer">{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-12 prose-section">
          <h2>Normas de propina en EE. UU. por tipo de servicio</h2>
          <div className="card overflow-hidden mt-3">
            <div className="overflow-x-auto">
              <table className="ref-table">
                <thead>
                  <tr>
                    <th>Servicio</th>
                    <th style={{ textAlign: "left" }}>Propina típica</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Restaurante / Cantinero", "15–20%"],
                    ["Entrega a domicilio", "$3–$6 o 15–20%"],
                    ["Uber / Lyft", "15–20%"],
                    ["Peluquería / Barbería", "15–20%"],
                    ["Salón de uñas", "15–20%"],
                    ["Masajista", "15–20%"],
                    ["Servicio de habitación (hotel)", "$2–$5 por noche"],
                    ["Valet / botones (hotel)", "$2–$5"],
                    ["Tatuador", "15–20%"],
                    ["Servicio de mudanza", "$5–$10 por persona o 10–20%"],
                    ["Taxi / limusina", "15–20%"],
                    ["Guía turístico", "$5–$10 por persona"],
                    ["Comida rápida / mostrador", "No esperado"],
                  ].map(([service, tip]) => (
                    <tr key={service}><td>{service}</td><td style={{ textAlign: "left" }}>{tip}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-3">
            Para una guía completa, visita nuestra{" "}
            <a href="/es/tipping-guide/" style={{ color: "var(--accent)" }}>Guía de propinas</a>.
          </p>
        </section>
      </div>
    </>
  );
}
