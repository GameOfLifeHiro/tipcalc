import type { Metadata } from "next";
import TipCalculator from "@/components/TipCalculator";

export const metadata: Metadata = {
  title: "Calculadora de Propinas para Peluquería y Salón de Belleza",
  description:
    "Calcula cuánto dejar de propina a tu estilista, colorista, barbero o esteticista. Normas de etiqueta para peluquerías y salones de belleza en EE. UU.",
  alternates: {
    canonical: "https://tipcalc.co/es/hairdresser-tip-calculator/",
    languages: { en: "https://tipcalc.co/hairdresser-tip-calculator/", es: "https://tipcalc.co/es/hairdresser-tip-calculator/" },
  },
};

export default function EsHairdresserPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
      <nav className="text-xs mb-5" style={{ color: "var(--muted)" }}>
        <a href="/es/" style={{ color: "var(--accent)" }}>TipCalc.co</a>{" / "}Calculadora de propinas para peluquería
      </nav>
      <div className="mb-7">
        <h1 className="text-3xl font-bold tracking-tight" style={{ color: "var(--text)" }}>
          Calculadora de Propinas para Peluquería
        </h1>
        <p className="mt-2 text-base" style={{ color: "var(--muted)" }}>
          Propinas para estilistas, coloristas, barberos y esteticistas.
        </p>
      </div>

      <TipCalculator defaultTipPercent={20} />

      <section className="mt-12 prose-section">
        <h2>¿Cuánto se da de propina en la peluquería?</h2>
        <p>
          El estándar en EE. UU. para peluquerías y salones de belleza es del <strong>15–20%</strong> del costo del servicio. Si quedas muy satisfecho con el resultado, el 20–25% es un reconocimiento generoso.
        </p>

        <h3>Guía por tipo de profesional</h3>
        <ul>
          <li><strong>Estilista / colorista:</strong> 15–20%</li>
          <li><strong>Barbero:</strong> 15–20%, mínimo $2–$5 en cortes económicos</li>
          <li><strong>Técnico de uñas:</strong> 15–20%</li>
          <li><strong>Masajista:</strong> 15–20%</li>
          <li><strong>Esteticista (facial, depilación):</strong> 15–20%</li>
          <li><strong>Lavado de cabello (asistente):</strong> $2–$5 adicionales</li>
        </ul>

        <h3>¿Debo dejar propina si el dueño hace el servicio?</h3>
        <p>
          Históricamente, no se dejaba propina al dueño del salón. Sin embargo, esa norma ha cambiado. Hoy en día es perfectamente aceptable — y apreciado — dejar propina al dueño del salón también.
        </p>

        <h3>Servicios más complejos</h3>
        <p>
          Para coloraciones completas, extensiones o cortes muy elaborados, considera una propina del 20% o más. Estos servicios requieren más tiempo, habilidad y dedicación.
        </p>
      </section>

      <div className="mt-12 flex flex-wrap gap-3 text-sm">
        <a href="/es/restaurant-tip-calculator/" style={{ color: "var(--accent)" }}>Calculadora para restaurantes →</a>
        <a href="/es/tipping-guide/" style={{ color: "var(--accent)" }}>Guía completa de propinas →</a>
      </div>
    </div>
  );
}
