import type { Metadata } from "next";
import TipCalculator from "@/components/TipCalculator";

export const metadata: Metadata = {
  title: "Calculadora de Propinas para Lyft – ¿Cuánto Dejar a tu Conductor?",
  description:
    "Calcula cuánto dejar de propina en Lyft. Normas de etiqueta, montos sugeridos según el servicio, cuánto tiempo tienes para dar propina y comparativa con Uber.",
  alternates: {
    canonical: "https://tipcalc.co/es/lyft-tip-calculator/",
    languages: {
      en: "https://tipcalc.co/lyft-tip-calculator/",
      es: "https://tipcalc.co/es/lyft-tip-calculator/",
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto se le deja de propina a un conductor de Lyft?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La propina estándar para un conductor de Lyft es del 15–20% del costo del viaje. En viajes cortos menores a $10, se recomienda un mínimo de $2. Puedes dar más si el servicio fue excelente, el auto muy limpio, el viaje fue nocturno o el conductor ayudó con el equipaje.",
      },
    },
    {
      "@type": "Question",
      name: "¿Lyft se queda con parte de la propina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Los conductores de Lyft reciben el 100% de la propina, ya sea que la des en la aplicación o en efectivo. Esta es la misma política que Uber.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo tengo para dar propina en Lyft?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lyft te permite agregar o modificar una propina hasta 72 horas después de tu viaje. Abre la app, ve a tu historial de viajes, selecciona el viaje y toca 'Dar propina al conductor'.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es obligatorio dar propina en Lyft?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, la propina en Lyft es opcional. Sin embargo, los conductores dependen de las propinas como parte importante de sus ingresos, y el 15–20% es la norma de etiqueta para un servicio satisfactorio.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "TipCalc.co", item: "https://tipcalc.co/es/" },
    { "@type": "ListItem", position: 2, name: "Calculadora de Propinas para Lyft", item: "https://tipcalc.co/es/lyft-tip-calculator/" },
  ],
};

export default function EsLyftPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav className="text-xs mb-5" style={{ color: "var(--muted)" }}>
        <a href="/es/" style={{ color: "var(--accent)" }}>TipCalc.co</a>
        {" / "}Calculadora de propinas para Lyft
      </nav>

      <div className="mb-7">
        <h1 className="text-3xl font-bold tracking-tight" style={{ color: "var(--text)" }}>
          Calculadora de Propinas para Lyft
        </h1>
        <p className="mt-2 text-base" style={{ color: "var(--muted)" }}>
          Cuánto dejar a tu conductor de Lyft — normas, montos y tiempos.
        </p>
      </div>

      <TipCalculator defaultTipPercent={18} />

      <section className="mt-12 prose-section">
        <h2>¿Cuánto se le da de propina a un conductor de Lyft?</h2>
        <p>
          Lyft permite dar propina en la aplicación después de cada viaje y los conductores
          reciben el <strong>100% de lo que dejas.</strong> La propina estándar es del{" "}
          <strong>15–20% del costo del viaje</strong>, con un mínimo de $2 en viajes cortos.
        </p>

        <h3>Guía de propinas en Lyft según la situación</h3>
        <ul>
          <li><strong>Viaje corto, servicio normal:</strong> $2 fijos o 15%</li>
          <li><strong>Viaje estándar, buen servicio:</strong> 15–18%</li>
          <li><strong>Servicio excelente / auto muy limpio:</strong> 20%</li>
          <li><strong>El conductor ayudó con el equipaje:</strong> Agrega $1–$2 por maleta</li>
          <li><strong>Viaje nocturno o mal clima:</strong> 20% o más</li>
          <li><strong>Viaje largo (más de 30 min):</strong> 15–20%</li>
          <li><strong>Lyft XL:</strong> 18–20%</li>
          <li><strong>Lyft Lux / Lux Black:</strong> 20%</li>
        </ul>

        <h3>¿Cuánto tiempo tienes para dar propina en Lyft?</h3>
        <p>
          Lyft te da <strong>72 horas</strong> después del viaje para agregar o cambiar la propina.
          Ve a tu historial de viajes en la app, selecciona el viaje y toca{" "}
          <em>Dar propina al conductor</em>. Uber, en comparación, permite propinas hasta 30 días después.
        </p>

        <h3>¿Propina en efectivo o en la app?</h3>
        <p>
          En ambos casos el conductor recibe el 100%. La propina en la app queda vinculada
          a tu cuenta. El efectivo es inmediato — el conductor lo recibe sin esperar al siguiente
          ciclo de pago.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>
          Preguntas frecuentes — Propinas en Lyft
        </h2>
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
        <a href="/es/uber-tip-calculator/" style={{ color: "var(--accent)" }}>
          Calculadora para Uber →
        </a>
        <a href="/es/delivery-tip-calculator/" style={{ color: "var(--accent)" }}>
          Calculadora para entrega →
        </a>
        <a href="/es/tipping-guide/" style={{ color: "var(--accent)" }}>
          Guía completa de propinas →
        </a>
      </div>
    </div>
  );
}
