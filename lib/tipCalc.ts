export interface TipInputs {
  billTotal: number;
  tipPercent: number;
  preTax: boolean;
  salesTaxPercent: number;
  fees: number;
  serviceCharge: number;
  splitPeople: number;
  rounding: "none" | "half" | "dollar";
}

export interface TipResult {
  tipBase: number;
  tipAmount: number;
  total: number;
  perPerson: number;
  tipPerPerson: number;
}

/**
 * Core tip calculation.
 *
 * Pre-tax mode: backs out sales tax and any fees/service charge from the
 * bill total to find the true service base, then applies tip% to that base.
 * After-tax mode: applies tip% to (bill − service charge).
 * Service charge is always excluded from the tip base (it's a mandatory fee).
 */
export function calculateTip(inputs: TipInputs): TipResult {
  const {
    billTotal,
    tipPercent,
    preTax,
    salesTaxPercent,
    fees,
    serviceCharge,
    splitPeople,
    rounding,
  } = inputs;

  if (billTotal <= 0) {
    return { tipBase: 0, tipAmount: 0, total: 0, perPerson: 0, tipPerPerson: 0 };
  }

  let tipBase: number;

  if (preTax && salesTaxPercent > 0) {
    // Bill total already includes tax, so back it out:
    // tipBase = billTotal / (1 + taxRate) − fees − serviceCharge
    const taxRate = salesTaxPercent / 100;
    tipBase = billTotal / (1 + taxRate) - fees - serviceCharge;
  } else {
    // After-tax: exclude only the service charge
    tipBase = billTotal - serviceCharge - (preTax ? fees : 0);
  }

  tipBase = Math.max(0, tipBase);

  const tipAmount = tipBase * (tipPercent / 100);
  const total = billTotal + tipAmount;
  const people = Math.max(1, splitPeople);
  const tipPerPerson = tipAmount / people;
  let perPerson = total / people;

  if (rounding === "half") {
    perPerson = Math.round(perPerson * 2) / 2;
  } else if (rounding === "dollar") {
    perPerson = Math.ceil(perPerson);
  }

  return { tipBase, tipAmount, total, perPerson, tipPerPerson };
}

/** Format a number as USD currency string */
export function formatUSD(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

/** Generate quick-reference tip table data */
export const QUICK_TABLE_BILLS = [20, 25, 30, 40, 50, 60, 75, 100, 125, 150, 200];
export const QUICK_TABLE_PERCENTS = [15, 18, 20, 22];

export interface QuickTableRow {
  bill: number;
  tips: Record<number, number>;
  totals: Record<number, number>;
}

export function buildQuickTable(): QuickTableRow[] {
  return QUICK_TABLE_BILLS.map((bill) => {
    const tips: Record<number, number> = {};
    const totals: Record<number, number> = {};
    QUICK_TABLE_PERCENTS.forEach((pct) => {
      const tip = bill * (pct / 100);
      tips[pct] = tip;
      totals[pct] = bill + tip;
    });
    return { bill, tips, totals };
  });
}
