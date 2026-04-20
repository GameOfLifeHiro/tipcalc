import type { Metadata } from "next";
import TipCalculator from "@/components/TipCalculator";

export const metadata: Metadata = {
  title: "Calculadora de Propinas para Restaurantes – Propina Automática y División de Cuenta",
  description:
    "Calcula propinas en restaurantes con precisión. Gestiona gratuidades automáticas, propina antes de impuestos y división de cuentas para grupos grandes.",
  alternates: {
    canonical: "https://tipcalc.co/es/restaurant-tip-calculator/",
    languages: { en: "https://tipcalc.co/restaurant-tip-calculator/", es: "https://tipcalc.co/es/restaurant-tip-calculator/" },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto se deja de propina en un restaurante en EE. UU.?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La propina estándar en restaurantes de EE. UU. es del 15–20%. El 15% para servicio adecuado, 18% para buen servicio y 20% o más para servicio excelente. En casos de mal servicio, el 10% es una señal común.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es la propina automática en un restaurante?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La propina automática (auto-gratuity) es un cargo de servicio obligatorio que añade el restaurante, generalmente del 18–20%, para grupos de 6 personas o más. No es opcional. No estás obligado a añadir propina adicional.",
      },
    },
    {
      "@type": "Question",
      name: "¿Se debe dejar propina antes o después de impuestos en un restaurante?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Muchos expertos en etiqueta recomiendan propina antes de impuestos ya que el impuesto sobre ventas no es parte del servicio. En la práctica, la mayoría deja propina sobre el total por comodidad. Ambas opciones son válidas.",
      },
    },
  ],
};

export default function EsRestaurantPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
        <nav className="text-xs mb-5" style={{ color: "var(--muted)" }}>
          <a href="/es/" style={{ color: "var(--accent)" }}>TipCalc.co</a>{" / "}Calculadora de propinas para restaurantes
        </nav>
        <div className="mb-7">
          <h1 className="text-3xl font-bold tracking-tight" style={{ color: "var(--text)" }}>
            Calculadora de Propinas para Restaurantes
          </h1>
          <p className="mt-2 text-base" style={{ color: "var(--muted)" }}>
            Gestiona propinas automáticas, antes de impuestos y división de cuenta para grupos.
          </p>
        </div>

        <div className="mb-5 flex gap-3 rounded-xl p-4 text-sm"
          style={{ background: "#fefce8", border: "1px solid #fef08a", color: "#854d0e" }}
        >
          <span className="mt-0.5 flex-shrink-0">⚠</span>
          <p>
            <strong>¿Grupo grande?</strong> Revisa tu recibo — si ya hay un cargo de servicio o propina automática (normalmente 18–20% para grupos de 6+), ya pagaste la propina. Solo añade más si el servicio fue excepcional.
          </p>
        </div>

        <TipCalculator defaultTipPercent={20} />

        <section className="mt-12 prose-section">
          <h2>Propinas en restaurantes en EE. UU.</h2>
          <p>
            Los meseros en EE. UU. generalmente reciben un salario base muy bajo (desde $2.13/hora a nivel federal), y las propinas constituyen la mayor parte de sus ingresos. El rango estándar es <strong>15–20%</strong> calculado sobre el monto antes o después de impuestos según tu preferencia.
          </p>

          <h3>Guía de porcentajes de propina</h3>
          <ul>
            <li><strong>10%</strong> — Servicio claramente deficiente</li>
            <li><strong>15%</strong> — Servicio adecuado, mínimo estándar</li>
            <li><strong>18%</strong> — Buen servicio</li>
            <li><strong>20%</strong> — Servicio excelente, estándar actual</li>
            <li><strong>22–25%+</strong> — Servicio sobresaliente o comida compleja</li>
          </ul>

          <h3>Cuando ya está incluida la propina automática</h3>
          <p>
            Muchos restaurantes añaden un cargo de servicio obligatorio (18–20%) para grupos de 6 o más personas. Puede aparecer como "propina automática", "cargo de servicio" o "gratuidad incluida". Si ya aparece en tu recibo, no debes propina adicional — aunque puedes añadir más.
          </p>
          <p>
            Usa el campo <strong>Opciones avanzadas → Cargo de servicio</strong> para excluir ese monto de la base de propina y evitar doble propina.
          </p>

          <h3>Dividir la cuenta en un restaurante</h3>
          <p>
            Usa el contador <strong>Dividir entre</strong> para dividir la cuenta equitativamente. Activa <strong>Redondear a $1</strong> en las opciones avanzadas para facilitar el pago en efectivo — cada persona paga una cantidad entera y el mesero recibe una propina justa.
          </p>

          <h3>Propina antes vs. después de impuestos en restaurantes</h3>
          <p>
            El impuesto sobre ventas en restaurantes de EE. UU. oscila entre el 6 y el 10% según el estado. Dejar propina antes de impuestos reduce ligeramente el monto en cuentas grandes. Activa <strong>Propina antes de impuestos</strong> en las opciones avanzadas e ingresa la tasa de tu estado para ver la diferencia.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>Preguntas frecuentes</h2>
          <div className="card divide-y" style={{ borderColor: "var(--card-border)" }}>
            {[
              { q: "¿Cuánto debo dejar de propina en un restaurante?", a: "Del 15 al 20% es el estándar en EE. UU. El 15% para servicio adecuado, 18% para buen servicio, 20% para excelente. Verifica siempre si ya hay gratuidad incluida para grupos grandes." },
              { q: "¿Qué es la propina automática?", a: "La propina automática es un cargo de servicio obligatorio, generalmente del 18–20%, para grupos grandes. No es opcional. No estás obligado a añadir propina adicional." },
              { q: "¿La propina debe calcularse antes o después de impuestos en un restaurante?", a: "Muchos expertos en etiqueta recomiendan antes de impuestos ya que el impuesto no es parte del servicio. Sin embargo, la mayoría calcula sobre el total por simplicidad. Ambas opciones son válidas. Usa las opciones avanzadas para calcular ambas." },
              { q: "¿Cómo se deja propina cuando se divide la cuenta?", a: "Usa el contador 'Dividir entre' de esta calculadora. Deja propina sobre la cuenta completa primero y luego divide el total con propina de forma igualitaria. Evita dejar propina solo sobre tu parte para que el mesero reciba una propina justa." },
            ].map(({ q, a }) => (
              <details key={q} className="faq-item px-5">
                <summary className="faq-question py-1 list-none">{q}</summary>
                <p className="faq-answer">{a}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="mt-12 flex flex-wrap gap-3 text-sm">
          <a href="/es/delivery-tip-calculator/" style={{ color: "var(--accent)" }}>Calculadora de propinas para entrega →</a>
          <a href="/es/tipping-guide/" style={{ color: "var(--accent)" }}>Guía completa de propinas →</a>
        </div>
      </div>
    </>
  );
}
