import type { Metadata } from "next";
import TipCalculator from "@/components/TipCalculator";

export const metadata: Metadata = {
  title: "Calculadora de Propinas para DoorDash – ¿Cuánto Dejar a tu Dasher?",
  description:
    "¿Cuánto dejar de propina en DoorDash? Ingresa el total de tu pedido y obtén el monto al instante. Aprende cómo funciona el pago del Dasher y cuándo dejar más.",
  alternates: {
    canonical: "https://tipcalc.co/es/doordash-tip-calculator/",
    languages: {
      en: "https://tipcalc.co/doordash-tip-calculator/",
      es: "https://tipcalc.co/es/doordash-tip-calculator/",
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto se deja de propina en DoorDash?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un mínimo de $3–$4 para pedidos pequeños, o del 15–20% del subtotal — lo que sea mayor. Deja más si hay mal clima, el recorrido es largo o el pedido es grande.",
      },
    },
    {
      "@type": "Question",
      name: "¿Los Dashers ven la propina antes de aceptar el pedido?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí — los Dashers ven el pago total (base + propina) antes de decidir si aceptan el pedido. Una propina baja puede hacer que el pedido tarde más en ser aceptado.",
      },
    },
    {
      "@type": "Question",
      name: "¿Se puede cambiar la propina después de la entrega en DoorDash?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí — DoorDash permite ajustar la propina después de la entrega. Abre la orden en la app, ve a 'Ayuda' y selecciona 'Ajustar propina'. Generalmente puedes aumentarla, pero no reducirla por debajo del monto original.",
      },
    },
    {
      "@type": "Question",
      name: "¿El cargo de entrega de DoorDash va al conductor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Los cargos de entrega, servicio y pedidos pequeños van a DoorDash, no al Dasher. Solo la propina le llega directamente al conductor. Los Dashers ganan una base de $2–$4 por entrega más el 100% de tu propina.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "TipCalc.co", item: "https://tipcalc.co/es/" },
    { "@type": "ListItem", position: 2, name: "Calculadora de Propinas para DoorDash", item: "https://tipcalc.co/es/doordash-tip-calculator/" },
  ],
};

export default function EsDoorDashPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <nav className="text-xs mb-5" style={{ color: "var(--muted)" }}>
        <a href="/es/" style={{ color: "var(--accent)" }}>TipCalc.co</a>
        {" / "}Calculadora para DoorDash
      </nav>
      <div className="mb-7">
        <h1 className="text-3xl font-bold tracking-tight" style={{ color: "var(--text)" }}>
          Calculadora de Propinas para DoorDash
        </h1>
        <p className="mt-2 text-base" style={{ color: "var(--muted)" }}>
          Cuánto dejar a tu Dasher — y por qué importa antes de hacer el pedido.
        </p>
      </div>
      <div className="mb-5 rounded-xl p-4 text-sm"
        style={{ background: "var(--accent-light)", border: "1px solid var(--accent-light-border)", color: "var(--text)" }}>
        <p className="font-semibold mb-1" style={{ color: "var(--accent)" }}>Los Dashers ven tu propina antes de aceptar</p>
        <p>Una propina más alta significa aceptación más rápida y generalmente un conductor más cercano.</p>
      </div>
      <TipCalculator defaultTipPercent={18} />
      <section className="mt-12 prose-section">
        <h2>¿Cuánto se deja de propina en DoorDash?</h2>
        <p>
          El estándar es un <strong>mínimo de $3–$4</strong> para pedidos pequeños, o del{" "}
          <strong>15–20%</strong> del subtotal — lo que sea mayor. Los Dashers reciben el{" "}
          <strong>100% de tu propina</strong>; el cargo de entrega va a DoorDash.
        </p>
        <h3>Propina sugerida según la situación</h3>
        <ul>
          <li><strong>Pedido pequeño (menos de $20):</strong> $3–$4 mínimo</li>
          <li><strong>Pedido estándar:</strong> 15–18%</li>
          <li><strong>Pedido grande ($50+):</strong> 15–20%</li>
          <li><strong>Larga distancia (más de 5 millas):</strong> Agrega $1–$2</li>
          <li><strong>Mal clima:</strong> Agrega $2–$5</li>
          <li><strong>Servicio excelente:</strong> 20–25%</li>
        </ul>
        <h3>¿Antes o después del pedido?</h3>
        <p>
          Deja la propina antes de realizar el pedido — los Dashers la ven antes de aceptar.
          Una buena propina atrae conductores más cercanos y más rápido. Puedes aumentarla después de la entrega desde la app.
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
        <a href="/es/uber-eats-tip-calculator/" style={{ color: "var(--accent)" }}>Calculadora Uber Eats →</a>
        <a href="/es/delivery-tip-calculator/" style={{ color: "var(--accent)" }}>Todas las entregas →</a>
        <a href="/es/tipping-guide/" style={{ color: "var(--accent)" }}>Guía completa →</a>
      </div>
    </div>
  );
}
