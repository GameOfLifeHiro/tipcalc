export interface Translations {
  locale: string;
  dir: "ltr" | "rtl";

  nav: {
    calculator: string;
    restaurant: string;
    delivery: string;
    guide: string;
  };

  calc: {
    billLabel: string;
    tipPercentLabel: string;
    customLabel: string;
    customTipSuffix: string;
    splitLabel: string;
    personSingular: string;
    personPlural: string;
    advancedToggle: string;
    preTaxCheck: string;
    preTaxDesc: string;
    salesTaxLabel: string;
    feesLabel: string;
    svcChargeLabel: string;
    roundingLabel: string;
    roundNone: string;
    roundHalf: string;
    roundDollar: string;
    labelTip: string;
    labelTotal: string;
    labelPerPerson: string;
    labelRounded: string;
    tipBasePrefix: string;
    tipBaseSuffix: string;
    copyBtn: string;
    copyDone: string;
    shareBtn: string;
    shareDone: string;
    emptyState: string;
  };

  footer: {
    tagline: string;
    company: string;
  };
}
