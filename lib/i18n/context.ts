"use client";

import { createContext, useContext } from "react";
import type { Translations } from "./types";

// Default value uses a minimal stub — the real value is always provided by TranslationsProvider
const defaultTranslations: Translations = {
  locale: "en",
  dir: "ltr",
  nav: { calculator: "Calculator", restaurant: "Restaurant", delivery: "Delivery", guide: "Guide" },
  calc: {
    billLabel: "Bill Amount", tipPercentLabel: "Tip Percentage",
    customLabel: "Custom", customTipSuffix: "custom tip",
    splitLabel: "Split Between", personSingular: "person", personPlural: "people",
    advancedToggle: "Advanced: pre-tax, fees, service charge, rounding",
    preTaxCheck: "Pre-tax tipping", preTaxDesc: "— tip on your pre-tax subtotal only. Enter the tax $ from your receipt.",
    subtotalLabel: "Pre-tax Subtotal", taxAmountLabel: "Tax ($)", feesLabel: "Fees", svcChargeLabel: "Svc Charge",
    roundingLabel: "Rounding (per person)",
    roundNone: "None", roundHalf: "Nearest $0.50", roundDollar: "Round up $1",
    labelTip: "Tip", labelTotal: "Total", labelPerPerson: "Per Person", labelRounded: "rounded",
    tipBasePrefix: "Tip base:", tipBaseSuffix: "(pre-tax subtotal; fees & service charge excluded)",
    copyBtn: "Copy Result", copyDone: "✓ Copied!",
    shareBtn: "Share Link", shareDone: "✓ Link Copied!",
    emptyState: "Enter a bill amount above to see the tip",
  },
  footer: {
    tagline: "Free tip calculator for every scenario",
    company: "A product of Ascent Leadership Institute Inc · Las Vegas, NV, USA",
  },
};

export const TranslationsContext = createContext<Translations>(defaultTranslations);

export function useT(): Translations {
  return useContext(TranslationsContext);
}
