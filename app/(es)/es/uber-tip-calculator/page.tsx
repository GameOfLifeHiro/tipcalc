import type { Metadata } from "next";
import TipCalculator from "@/components/TipCalculator";

export const metadata: Metadata = {
  title: "Calculadora de Propinas para Uber y Lyft – ¿Cuánto Dejar en Rideshare?",
  description:
    "Calcula cuánto dejar de propina en Uber, Lyft y otros servicios de transporte compartido. Normas de etiqueta, montos sugeridos y cuándo dejar más.",
  alternates: {
    canonical: "https://tipcalc.co/es/uber-tip-calculator/",
    languages: { en: "https://tipcalc.co/uber-tip-calculator/", es: "https://tipcalc.co/es/uber-tip-calculator/" },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Se debe dejar propina en Uber?",
      acceptedAnswer: { "@type": "Answer", text: "Sí, aunque no es obligatorio. Los conductores reciben el 100% de la propina. El estándar es del 15–20% del costo del viaje." },
    },
    {
      "@type": "Question",
      name: "¿Cuánto se deja de propina en Uber?",
      acceptedAnswer: { "@type": "Answer", text: "El 15–20% del costo del viaje es el estándar. En viajes cortos menores a $10, un mínimo de $1–$2 es considerado. Las opciones predeterminadas en la app son 15%, 18% y 20%." },
    },
    {
      "@type": "Question",
      name: "¿Uber toma parte de la propina?",
      acceptedAnswer: { "@type": "Answer", text: "No. Uber transfiere el 100% de la propina al conductor, ya sea que la dejes en la app o en efectivo." },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo tengo para dejar propina en Uber?",
      acceptedAnswer: { "@type": "Answer", text: "Uber permite agregar propina hasta 30 días después del viaje. Ve a tu historial de viajes en la app, selecciona el viaje y toca 'Agregar propina'." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "TipCalc.co", item: "https://tipcalc.co/es/" },
    { "@type": "ListItem", position: 2, name: "Calculadora de Propinas para Uber", item: "https://tipcalc.co/es/uber-tip-calculator/" },
  ],
};

export default function EsUberPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <nav className="text-xs mb-5" style={{ color: "var(--muted)" }}>
        <a href="/es/" style={{ color: "var(--accent)" }}>TipCalc.co</a>{" / "}Calculadora de propinas para Uber
      </nav>
      <div className="mb-7">
        <h1 className="text-3xl font-bold tracking-tight" style={{ color: "var(--text)" }}>
          Calculadora de Propinas para Uber y Lyft
        </h1>
        <p className="mt-2 text-base" style={{ color: "var(--muted)" }}>
          Normas de etiqueta y propinas sugeridas para servicios de rideshare.
        </p>
      </div>

      <TipCalculator defaultTipPercent={18} />

      <section className="mt-12 prose-section">
        <h2>¿Se debe dejar propina en Uber y Lyft?</h2>
        <p>
          Sí, aunque no es obligatorio, dejar propina en Uber y Lyft está bien visto. Los conductores reciben el 100% de la propina. El estándar actual es del <strong>15–20%</strong> del costo del viaje, con un mínimo de $1–$2 en viajes cortos.
        </p>

        <h3>¿Cuándo dejar más del 20%?</h3>
        <ul>
          <li>Auto limpio y en excelentes condiciones</li>
          <li>Conductor muy amable y servicial</li>
          <li>Viaje tarde en la noche o en condiciones difíciles</li>
          <li>El conductor esperó más tiempo del habitual</li>
          <li>Viaje largo o con mucho equipaje</li>
        </ul>

        <h3>Uber vs. Lyft: ¿hay diferencia en la propina?</h3>
        <p>
          Ambas plataformas permiten dejar propina en la app y los conductores reciben el 100% de ella. La norma de etiqueta es la misma para ambas: <strong>15–20%</strong> para un buen servicio.
        </p>

        <h3>¿Cuándo no dejar propina?</h3>
        <p>
          No estás obligado a dejar propina si el servicio fue notablemente malo — por ejemplo, un conductor grosero, ruta incorrecta o auto en malas condiciones. En ese caso también puedes dejar una reseña negativa a través de la aplicación.
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
        <a href="/es/lyft-tip-calculator/" style={{ color: "var(--accent)" }}>Calculadora para Lyft →</a>
        <a href="/es/delivery-tip-calculator/" style={{ color: "var(--accent)" }}>Calculadora para entrega →</a>
        <a href="/es/tipping-guide/" style={{ color: "var(--accent)" }}>Guía completa de propinas →</a>
      </div>
    </div>
  );
}
