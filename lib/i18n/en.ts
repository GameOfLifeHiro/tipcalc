import type { Translations } from "./types";

const en: Translations = {
  locale: "en",
  dir: "ltr",

  nav: {
    calculator: "Calculator",
    restaurant: "Restaurant",
    delivery: "Delivery",
    guide: "Guide",
  },

  calc: {
    billLabel: "Bill Amount",
    tipPercentLabel: "Tip Percentage",
    customLabel: "Custom",
    customTipSuffix: "custom tip",
    splitLabel: "Split Between",
    personSingular: "person",
    personPlural: "people",
    taxAmountLabel: "Tax",
    taxAmountHint: "From your receipt — leave blank to tip on the full total",
    advancedToggle: "Advanced: fees, service charge, rounding",
    feesLabel: "Fees",
    svcChargeLabel: "Svc Charge",
    roundingLabel: "Rounding (per person)",
    roundNone: "None",
    roundHalf: "Nearest $0.50",
    roundDollar: "Round up $1",
    labelTip: "Tip",
    labelTotal: "Total",
    labelPerPerson: "Per Person",
    labelRounded: "rounded",
    tipBasePrefix: "Tip base:",
    tipBaseSuffix: "(pre-tax subtotal; fees & service charge excluded)",
    copyBtn: "Copy Result",
    copyDone: "✓ Copied!",
    shareBtn: "Share Link",
    shareDone: "✓ Link Copied!",
    emptyState: "Enter a bill amount above to see the tip",
  },

  footer: {
    tagline: "Free tip calculator for every scenario",
    company: "A product of Ascent Leadership Institute Inc · Las Vegas, NV, USA",
  },
};

export default en;
