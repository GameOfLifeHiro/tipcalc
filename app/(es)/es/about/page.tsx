import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acerca de TipCalc.co – Calculadora de Propinas Gratuita",
  description: "Conoce TipCalc.co, una calculadora de propinas gratuita y precisa desarrollada por Ascent Leadership Institute Inc en Las Vegas, NV.",
  alternates: {
    canonical: "https://tipcalc.co/es/about/",
    languages: { en: "https://tipcalc.co/about/", es: "https://tipcalc.co/es/about/" },
  },
};

export default function EsAboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
      <nav className="text-xs mb-5" style={{ color: "var(--muted)" }}>
        <a href="/es/" style={{ color: "var(--accent)" }}>TipCalc.co</a>{" / "}Acerca de
      </nav>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight" style={{ color: "var(--text)" }}>
          Acerca de TipCalc.co
        </h1>
      </div>

      <section className="prose-section">
        <h2>Nuestra misión</h2>
        <p>
          TipCalc.co nació de una idea simple: calcular propinas debería ser rápido, sin distracciones y confiable. Nuestra calculadora es gratuita, no requiere registro y funciona en cualquier dispositivo. Sin anuncios invasivos, sin pasos innecesarios.
        </p>

        <h2>¿Qué ofrece TipCalc.co?</h2>
        <ul>
          <li>Cálculo de propinas con porcentajes preestablecidos o personalizados</li>
          <li>Opción de propina antes de impuestos para mayor precisión</li>
          <li>División de cuenta entre varias personas con redondeo</li>
          <li>Calculadoras específicas para restaurantes, entrega, Uber, peluquería y más</li>
          <li>Disponible en inglés y español</li>
          <li>Copia y comparte resultados con un solo toque</li>
        </ul>

        <h2>Acerca de la empresa</h2>
        <p>
          TipCalc.co es un producto de <strong>Ascent Leadership Institute Inc</strong>, con sede en Las Vegas, NV, EE. UU. Creamos herramientas digitales útiles y accesibles para simplificar las decisiones cotidianas.
        </p>

        <h2>Privacidad</h2>
        <p>
          No recopilamos datos personales. Los cálculos se realizan completamente en tu dispositivo. Consulta nuestra{" "}
          <a href="/es/privacy/" style={{ color: "var(--accent)" }}>Política de Privacidad</a> para más detalles.
        </p>

        <h2>Contacto</h2>
        <p>
          ¿Preguntas o comentarios? Escríbenos a{" "}
          <a href="mailto:hello@tipcalc.co" style={{ color: "var(--accent)" }}>hello@tipcalc.co</a>.
        </p>
      </section>
    </div>
  );
}
