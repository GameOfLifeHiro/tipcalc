import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guía Completa de Propinas en EE. UU. – Cuánto Dejar en Cada Situación",
  description:
    "Guía completa de etiqueta para propinas en Estados Unidos. Restaurantes, entrega, rideshare, hoteles, salones, servicios del hogar y normas internacionales.",
  alternates: {
    canonical: "https://tipcalc.co/es/tipping-guide/",
    languages: { en: "https://tipcalc.co/tipping-guide/", es: "https://tipcalc.co/es/tipping-guide/" },
  },
};

const TIPPING_TABLE = [
  { service: "Restaurante / Cantinero", range: "15–20%", notes: "18–20% es el estándar actual" },
  { service: "Bar (trago sencillo)", range: "$1–$2 por trago", notes: "O 15–20% en cuentas grandes de bar" },
  { service: "Cafetería / mostrador", range: "Sin obligación", notes: "El frasco de propinas es opcional" },
  { service: "Entrega a domicilio", range: "$3–$6 o 15–20%", notes: "Lo que sea mayor en pedidos pequeños" },
  { service: "Uber / Lyft", range: "15–20%", notes: "Mínimo $1–$2 en viajes cortos" },
  { service: "Taxi / limosina", range: "15–20%", notes: "$2 mínimo" },
  { service: "Peluquería / barbería", range: "15–20%", notes: "20%+ para trabajos complejos" },
  { service: "Salón de uñas", range: "15–20%", notes: "Mínimo $2–$3 en servicios baratos" },
  { service: "Masajista", range: "15–20%", notes: "En spas puede estar incluido en la tarifa" },
  { service: "Esteticista (facial, etc.)", range: "15–20%", notes: "" },
  { service: "Servicio de habitación (hotel)", range: "$2–$5 por noche", notes: "Dejar diariamente, no al final" },
  { service: "Valet (hotel / restaurante)", range: "$2–$5", notes: "Al recoger el auto" },
  { service: "Botones / maletero", range: "$1–$2 por maleta", notes: "Mínimo $2–$5" },
  { service: "Conserje del hotel", range: "$5–$10", notes: "Por servicios especiales" },
  { service: "Tatuador", range: "15–20%", notes: "20%+ para trabajos grandes o complejos" },
  { service: "Servicio de mudanza", range: "$5–$10 por persona o 10–20%", notes: "Más en mudanzas difíciles o largas" },
  { service: "Repartidor de pizza", range: "$3–$5 o 10–15%", notes: "Más si hay larga distancia o mal tiempo" },
  { service: "Guía turístico", range: "$5–$10 por persona", notes: "Por tours de medio o día completo" },
  { service: "Técnico de casino", range: "Sin obligación", notes: "Propina por servicio en mesa es habitual" },
];

export default function EsTippingGuidePage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
      <nav className="text-xs mb-5" style={{ color: "var(--muted)" }}>
        <a href="/es/" style={{ color: "var(--accent)" }}>TipCalc.co</a>{" / "}Guía de propinas
      </nav>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight" style={{ color: "var(--text)" }}>
          Guía Completa de Propinas en EE. UU.
        </h1>
        <p className="mt-2 text-base" style={{ color: "var(--muted)" }}>
          Cuánto dejar de propina en cada situación — con normas internacionales al final.
        </p>
      </div>

      <section className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="ref-table">
            <thead>
              <tr>
                <th>Servicio</th>
                <th style={{ textAlign: "left" }}>Propina típica</th>
                <th style={{ textAlign: "left" }}>Notas</th>
              </tr>
            </thead>
            <tbody>
              {TIPPING_TABLE.map((row) => (
                <tr key={row.service}>
                  <td>{row.service}</td>
                  <td style={{ textAlign: "left" }}>{row.range}</td>
                  <td style={{ textAlign: "left", color: "var(--muted)", fontSize: "0.8rem" }}>{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12 prose-section">
        <h2>¿Por qué se deja propina en EE. UU.?</h2>
        <p>
          En Estados Unidos, las propinas forman parte estructural del sistema de compensación para muchos trabajadores del sector servicios. Los meseros, por ejemplo, pueden ganar legalmente un salario base de apenas $2.13 por hora a nivel federal, lo que hace que las propinas sean esenciales para llegar al salario mínimo. Esto contrasta con la mayoría de los países europeos, donde el servicio está incluido en los precios o los salarios base son más altos.
        </p>

        <h2>¿Cuándo NO es necesario dejar propina?</h2>
        <ul>
          <li>Comida rápida y restaurantes de mostrador donde recoges tú mismo el pedido</li>
          <li>Cafeterías de autoservicio</li>
          <li>Máquinas expendedoras, pedidos por aplicación sin repartidor</li>
          <li>Cuando ya hay un cargo de servicio incluido en la cuenta</li>
        </ul>

        <h2>Normas internacionales de propina</h2>
        <p>Las normas varían mucho según el país:</p>
        <ul>
          <li><strong>México:</strong> 10–15% es estándar; más en restaurantes de lujo.</li>
          <li><strong>España:</strong> No es obligatoria; redondear la cuenta o dejar monedas es suficiente.</li>
          <li><strong>Argentina:</strong> 10% es común en restaurantes de la ciudad.</li>
          <li><strong>Japón:</strong> La propina generalmente no se acostumbra y puede considerarse grosero ofrecerla.</li>
          <li><strong>Francia:</strong> El servicio suele estar incluido; la propina adicional es opcional y apreciada.</li>
          <li><strong>Reino Unido:</strong> 10–15% en restaurantes; verificar si el "service charge" ya está incluido.</li>
          <li><strong>Australia:</strong> No es obligatoria, pero el 10% es bien recibido en restaurantes de buena calidad.</li>
        </ul>

        <h2>Consejos para turistas en EE. UU.</h2>
        <ul>
          <li>Siempre revisa si el recibo ya incluye gratuidad o cargo de servicio.</li>
          <li>El 18–20% es el mínimo esperado en restaurantes de servicio completo.</li>
          <li>En los terminales de pago (POS), a menudo se presentan opciones predeterminadas del 18%, 20% o 22%. Puedes elegir un porcentaje personalizado o usar esta calculadora para decidir.</li>
          <li>Pagar con tarjeta no afecta negativamente la propina; los meseros prefieren recibir lo que corresponde.</li>
        </ul>
      </section>

      <div className="mt-12 flex flex-wrap gap-3 text-sm">
        <a href="/es/" style={{ color: "var(--accent)" }}>Calculadora de propinas →</a>
        <a href="/es/restaurant-tip-calculator/" style={{ color: "var(--accent)" }}>Calculadora para restaurantes →</a>
      </div>
    </div>
  );
}
