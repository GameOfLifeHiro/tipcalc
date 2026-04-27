import type { Metadata } from "next";
import TipCalculator from "@/components/TipCalculator";

export const metadata: Metadata = {
  title: "Calculadora de Propinas para Uber Eats – ¿Cuánto Dejar al Repartidor?",
  description:
    "¿Cuánto dejar de propina en Uber Eats? Ingresa el total de tu pedido y obtén el monto al instante. Aprende cómo funciona el pago del repartidor y cómo ajustar la propina.",
  alternates: {
    canonical: "https://tipcalc.co/es/uber-eats-tip-calculator/",
    languages: {
      en: "https://tipcalc.co/uber-eats-tip-calculator/",
      es: "https://tipcalc.co/es/uber-eats-tip-calculator/",
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto se deja de propina en Uber Eats?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El 15–20% del subtotal es el estándar, con un mínimo de $3–$4 para pedidos pequeños. Uber Eats sugiere el 15%, 20% o 25% como opciones predeterminadas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Uber Eats se queda con parte de la propina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. El repartidor de Uber Eats recibe el 100% de tu propina. El cargo de entrega y el cargo de servicio van a Uber, no al conductor.",
      },
    },
    {
      "@type": "Question",
      name: "¿Se puede cambiar la propina después de la entrega en Uber Eats?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, Uber Eats permite ajustar la propina hasta 1 hora después de la entrega. Ve al historial de pedidos, selecciona la orden y toca 'Ajustar propina'.",
      },
    },
    {
      "@type": "Question",
      name: "¿El cargo de entrega de Uber Eats va al repartidor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. El cargo de entrega y el cargo de servicio van a Uber, no al repartidor. Solo la propina llega directamente al conductor.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "TipCalc.co", item: "https://tipcalc.co/es/" },
    { "@type": "ListItem", position: 2, name: "Calculadora de Propinas para Uber Eats", item: "https://tipcalc.co/es/uber-eats-tip-calculator/" },
  ],
};

export default function EsUberEatsPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <nav className="text-xs mb-5" style={{ color: "var(--muted)" }}>
        <a href="/es/" style={{ color: "var(--accent)" }}>TipCalc.co</a>
        {" / "}Calculadora para Uber Eats
      </nav>
      <div className="mb-7">
        <h1 className="text-3xl font-bold tracking-tight" style={{ color: "var(--text)" }}>
          Calculadora de Propinas para Uber Eats
        </h1>
        <p className="mt-2 text-base" style={{ color: "var(--muted)" }}>
          Calcula la propina correcta para tu pedido de Uber Eats.
        </p>
      </div>
      <div className="mb-5 rounded-xl p-4 text-sm space-y-1"
        style={{ background: "var(--accent-light)", border: "1px solid var(--accent-light-border)", color: "var(--text)" }}>
        <p className="font-semibold" style={{ color: "var(--accent)" }}>Regla rápida</p>
        <p>Mínimo <strong>$3–$4</strong> para pedidos pequeños, o <strong>15–20%</strong> — lo que sea mayor. Tienes <strong>1 hora</strong> después de la entrega para ajustar.</p>
      </div>
      <TipCalculator defaultTipPercent={18} />
      <section className="mt-12 prose-section">
        <h2>¿Cuánto dejar de propina en Uber Eats?</h2>
        <p>
          Los repartidores de Uber Eats reciben el <strong>100% de tu propina</strong> — Uber no descuenta nada.
          El estándar es del <strong>15–20%</strong> del subtotal, con un mínimo de $3–$4 para pedidos pequeños.
        </p>
        <h3>Propina sugerida según la situación</h3>
        <ul>
          <li><strong>Pedido pequeño (menos de $20):</strong> $3–$4 mínimo</li>
          <li><strong>Pedido estándar:</strong> 15–18%</li>
          <li><strong>Pedido grande ($50+):</strong> 15–20%</li>
          <li><strong>Larga distancia o mal clima:</strong> Agrega $2–$5</li>
          <li><strong>Servicio excelente:</strong> 20–25%</li>
        </ul>
        <h3>¿El cargo de entrega va al repartidor?</h3>
        <p>
          No. El cargo de entrega y el cargo de servicio van a Uber. Solo la propina llega directamente al repartidor.
          Por eso es importante dejar propina — los cargos de la plataforma no benefician al conductor.
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
        <a href="/es/doordash-tip-calculator/" style={{ color: "var(--accent)" }}>Calculadora DoorDash →</a>
        <a href="/es/delivery-tip-calculator/" style={{ color: "var(--accent)" }}>Todas las entregas →</a>
        <a href="/es/tipping-guide/" style={{ color: "var(--accent)" }}>Guía completa →</a>
      </div>
    </div>
  );
}
