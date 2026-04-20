import type { Translations } from "./types";

const es: Translations = {
  locale: "es",
  dir: "ltr",

  nav: {
    calculator: "Calculadora",
    restaurant: "Restaurante",
    delivery: "Entrega",
    guide: "Guía",
  },

  calc: {
    billLabel: "Monto de la cuenta",
    tipPercentLabel: "Porcentaje de propina",
    customLabel: "Personalizado",
    customTipSuffix: "propina personalizada",
    splitLabel: "Dividir entre",
    personSingular: "persona",
    personPlural: "personas",
    advancedToggle: "Avanzado: antes de impuestos, cargos, cargo de servicio, redondeo",
    preTaxCheck: "Propina antes de impuestos",
    preTaxDesc: "— excluir impuestos y cargos de la base de propina (recomendado por expertos en etiqueta)",
    salesTaxLabel: "Impuesto %",
    feesLabel: "Cargos",
    svcChargeLabel: "Cargo servicio",
    roundingLabel: "Redondeo (por persona)",
    roundNone: "Sin redondeo",
    roundHalf: "Al $0.50 más cercano",
    roundDollar: "Redondear a $1",
    labelTip: "Propina",
    labelTotal: "Total",
    labelPerPerson: "Por persona",
    labelRounded: "redondeado",
    tipBasePrefix: "Base de propina:",
    tipBaseSuffix: "(impuestos y cargos excluidos)",
    copyBtn: "Copiar resultado",
    copyDone: "✓ Copiado!",
    shareBtn: "Compartir enlace",
    shareDone: "✓ Enlace copiado!",
    emptyState: "Ingresa el monto de la cuenta para ver la propina",
  },

  footer: {
    tagline: "Calculadora de propinas gratuita para cada situación",
    company: "Un producto de Ascent Leadership Institute Inc · Las Vegas, NV, USA",
  },
};

export default es;
