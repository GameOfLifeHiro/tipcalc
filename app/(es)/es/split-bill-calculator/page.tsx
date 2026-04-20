import type { Metadata } from "next";
import TipCalculator from "@/components/TipCalculator";

export const metadata: Metadata = {
  title: "Calculadora para Dividir la Cuenta con Propina – TipCalc.co",
  description:
    "Divide cualquier cuenta con propina entre varias personas. Opciones de redondeo para facilitar el pago en efectivo. Gratis y sin registro.",
  alternates: {
    canonical: "https://tipcalc.co/es/split-bill-calculator/",
    languages: { en: "https://tipcalc.co/split-bill-calculator/", es: "https://tipcalc.co/es/split-bill-calculator/" },
  },
};

export default function EsSplitBillPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
      <nav className="text-xs mb-5" style={{ color: "var(--muted)" }}>
        <a href="/es/" style={{ color: "var(--accent)" }}>TipCalc.co</a>{" / "}Dividir cuenta con propina
      </nav>
      <div className="mb-7">
        <h1 className="text-3xl font-bold tracking-tight" style={{ color: "var(--text)" }}>
          Calculadora para Dividir la Cuenta
        </h1>
        <p className="mt-2 text-base" style={{ color: "var(--muted)" }}>
          Propina incluida, cuenta dividida en partes iguales, con opciones de redondeo.
        </p>
      </div>

      <TipCalculator defaultTipPercent={18} defaultSplit={2} />

      <section className="mt-12 prose-section">
        <h2>Cómo dividir una cuenta con propina</h2>
        <ol>
          <li>Ingresa el total de la cuenta en el campo <strong>Monto de la cuenta</strong>.</li>
          <li>Elige el porcentaje de propina (18–20% es el estándar).</li>
          <li>Usa el contador <strong>Dividir entre</strong> para seleccionar el número de personas.</li>
          <li>La calculadora muestra automáticamente cuánto debe pagar cada persona.</li>
        </ol>

        <h3>Redondeo para pago en efectivo</h3>
        <p>
          Activa las opciones avanzadas para redondear al $0.50 o $1.00 más cercano. Así es más fácil para quienes pagan en efectivo y la propina queda un poco más generosa.
        </p>

        <h3>Cuando algunos no quieren dejar propina</h3>
        <p>
          Si alguien del grupo no quiere dejar propina, calcula la propina del resto y súmala al total antes de dividir. Evita que un servicio completo salga sin reconocimiento para el mesero.
        </p>

        <h3>Consejo: propina sobre el total, no por persona</h3>
        <p>
          Calcula la propina sobre el total de la cuenta antes de dividir. Esto garantiza que el mesero reciba una propina justa basada en el servicio completo prestado al grupo.
        </p>
      </section>

      <div className="mt-12 flex flex-wrap gap-3 text-sm">
        <a href="/es/restaurant-tip-calculator/" style={{ color: "var(--accent)" }}>Calculadora para restaurantes →</a>
        <a href="/es/" style={{ color: "var(--accent)" }}>Calculadora general →</a>
      </div>
    </div>
  );
}
