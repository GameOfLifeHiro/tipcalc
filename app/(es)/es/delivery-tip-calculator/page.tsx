import type { Metadata } from "next";
import TipCalculator from "@/components/TipCalculator";

export const metadata: Metadata = {
  title: "Calculadora de Propinas para Entrega a Domicilio – DoorDash, Uber Eats, Grubhub",
  description:
    "Calcula cuánto dejar de propina en entregas a domicilio. Guía para DoorDash, Uber Eats, Grubhub y más. Mínimo sugerido, mal tiempo, cargos de entrega y más.",
  alternates: {
    canonical: "https://tipcalc.co/es/delivery-tip-calculator/",
    languages: { en: "https://tipcalc.co/delivery-tip-calculator/", es: "https://tipcalc.co/es/delivery-tip-calculator/" },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto debo dejar de propina para entrega a domicilio?",
      acceptedAnswer: { "@type": "Answer", text: "Un mínimo de $3–$6 o del 15–20% del total del pedido, lo que sea mayor. Deja más si hay mal tiempo, recorrido largo o pedido grande." },
    },
    {
      "@type": "Question",
      name: "¿El cargo de entrega va al repartidor?",
      acceptedAnswer: { "@type": "Answer", text: "No directamente. Los cargos de servicio de las aplicaciones son para la empresa. La propina sí va al repartidor." },
    },
    {
      "@type": "Question",
      name: "¿Es obligatorio dejar propina en entregas a domicilio?",
      acceptedAnswer: { "@type": "Answer", text: "No es obligatorio, pero sí muy recomendable. Los repartidores dependen de las propinas como parte importante de sus ingresos." },
    },
    {
      "@type": "Question",
      name: "¿Puedo cambiar la propina después de la entrega?",
      acceptedAnswer: { "@type": "Answer", text: "En la mayoría de aplicaciones como DoorDash, Uber Eats y Grubhub puedes ajustar la propina después de recibir tu pedido." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "TipCalc.co", item: "https://tipcalc.co/es/" },
    { "@type": "ListItem", position: 2, name: "Calculadora de Propinas para Entrega", item: "https://tipcalc.co/es/delivery-tip-calculator/" },
  ],
};

export default function EsDeliveryPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <nav className="text-xs mb-5" style={{ color: "var(--muted)" }}>
        <a href="/es/" style={{ color: "var(--accent)" }}>TipCalc.co</a>{" / "}Calculadora de propinas para entrega
      </nav>
      <div className="mb-7">
        <h1 className="text-3xl font-bold tracking-tight" style={{ color: "var(--text)" }}>
          Calculadora de Propinas para Entrega a Domicilio
        </h1>
        <p className="mt-2 text-base" style={{ color: "var(--muted)" }}>
          Propinas justas para DoorDash, Uber Eats, Grubhub y cualquier servicio de entrega.
        </p>
      </div>

      <div className="mb-5 flex gap-3 rounded-xl p-4 text-sm"
        style={{ background: "#f0fdf4", border: "1px solid #86efac", color: "#166534" }}
      >
        <span className="mt-0.5 flex-shrink-0">💡</span>
        <p>
          <strong>Cargos de entrega ≠ Propina.</strong> Los cargos de servicio de las aplicaciones casi nunca van directo al repartidor. La propina que dejas sí va directamente a ellos.
        </p>
      </div>

      <TipCalculator defaultTipPercent={18} />

      <section className="mt-12 prose-section">
        <h2>¿Cuánto se da de propina para entrega a domicilio?</h2>
        <p>
          La propina estándar para entregas a domicilio es de <strong>$3–$6 o del 15–20%</strong> del total del pedido, lo que sea mayor. En pedidos pequeños, es mejor usar el mínimo en dólares. Para pedidos grandes, el porcentaje tiene más sentido.
        </p>

        <h3>Factores que justifican una mayor propina</h3>
        <ul>
          <li><strong>Mal tiempo</strong> (lluvia, nieve, calor extremo)</li>
          <li><strong>Distancia larga</strong> o zona de difícil acceso</li>
          <li><strong>Pedido grande</strong> o con muchos artículos</li>
          <li><strong>Entrega a pisos altos</strong> sin ascensor</li>
          <li><strong>Servicio rápido</strong> y exacto</li>
        </ul>

        <h3>Propinas por plataforma</h3>
        <ul>
          <li><strong>DoorDash:</strong> La propina predeterminada suele ser $3–$4. Puedes ajustarla antes o después de la entrega.</li>
          <li><strong>Uber Eats:</strong> Sugiere porcentajes automáticamente. El 15–20% es una buena referencia.</li>
          <li><strong>Grubhub:</strong> Propina sugerida basada en el pedido; se puede personalizar.</li>
          <li><strong>Instacart:</strong> El 5% es el mínimo sugerido; el 10–15% es más apropiado para pedidos grandes.</li>
        </ul>

        <h3>¿Los cargos de servicio van al repartidor?</h3>
        <p>
          No necesariamente. Los cargos de servicio o de entrega que cobran las aplicaciones van a la empresa, no directamente al repartidor. La propina que dejas es la compensación más directa para quien entrega tu pedido.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>Preguntas frecuentes</h2>
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
        <a href="/es/restaurant-tip-calculator/" style={{ color: "var(--accent)" }}>Calculadora para restaurantes →</a>
        <a href="/es/uber-tip-calculator/" style={{ color: "var(--accent)" }}>Calculadora para Uber →</a>
      </div>
    </div>
  );
}
