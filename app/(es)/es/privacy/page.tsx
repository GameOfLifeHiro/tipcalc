import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad – TipCalc.co",
  description: "Política de privacidad de TipCalc.co. No recopilamos datos personales. Los cálculos se realizan en tu dispositivo.",
  alternates: {
    canonical: "https://tipcalc.co/es/privacy/",
    languages: { en: "https://tipcalc.co/privacy/", es: "https://tipcalc.co/es/privacy/" },
  },
};

export default function EsPrivacyPage() {
  const updated = "19 de abril de 2026";
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
      <nav className="text-xs mb-5" style={{ color: "var(--muted)" }}>
        <a href="/es/" style={{ color: "var(--accent)" }}>TipCalc.co</a>{" / "}Política de privacidad
      </nav>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight" style={{ color: "var(--text)" }}>
          Política de Privacidad
        </h1>
        <p className="text-sm mt-2" style={{ color: "var(--muted)" }}>Última actualización: {updated}</p>
      </div>

      <section className="prose-section">
        <h2>No recopilamos datos personales</h2>
        <p>
          TipCalc.co no recopila, almacena ni comparte ningún dato personal de sus usuarios. Todos los cálculos se realizan directamente en tu dispositivo (en el navegador). No existen cuentas de usuario, formularios de registro ni sistemas de inicio de sesión.
        </p>

        <h2>Google Analytics</h2>
        <p>
          Usamos Google Analytics para comprender cómo se usa el sitio a nivel agregado (páginas más visitadas, ubicación geográfica general, tipo de dispositivo). Google Analytics puede usar cookies. No vinculamos estos datos con información personal identificable. Para más información sobre las prácticas de privacidad de Google, visita{" "}
          <a href="https://policies.google.com/privacy" style={{ color: "var(--accent)" }} target="_blank" rel="noopener noreferrer">
            policies.google.com/privacy
          </a>.
        </p>

        <h2>Cookies</h2>
        <p>
          TipCalc.co no establece cookies propias. Google Analytics puede establecer cookies de terceros con fines analíticos.
        </p>

        <h2>Almacenamiento local</h2>
        <p>
          La calculadora puede usar el almacenamiento local del navegador (localStorage) para guardar temporalmente tus entradas durante la sesión. Estos datos permanecen en tu dispositivo y no son enviados a ningún servidor.
        </p>

        <h2>Servicios de terceros</h2>
        <p>
          Podemos incluir enlaces a sitios externos. No somos responsables de las prácticas de privacidad de esos sitios.
        </p>

        <h2>Cambios en esta política</h2>
        <p>
          Podemos actualizar esta política ocasionalmente. Los cambios significativos serán indicados mediante la actualización de la fecha en la parte superior de esta página.
        </p>

        <h2>Contacto</h2>
        <p>
          Para preguntas sobre privacidad, contacta a{" "}
          <a href="mailto:hello@tipcalc.co" style={{ color: "var(--accent)" }}>hello@tipcalc.co</a>.
        </p>
      </section>
    </div>
  );
}
