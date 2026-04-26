export interface TipInputs {
  billTotal: number;     // pre-tax subtotal when preTax=true; after-tax total when false
  tipPercent: number;
  preTax: boolean;
  taxAmount: number;     // tax dollar amount copied from receipt (used when preTax=true)
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
 * Pre-tax mode: billTotal is the pre-tax subtotal from the receipt. The user
 * also supplies the exact tax dollar amount from the receipt. Tip is applied
 * to (subtotal − fees − serviceCharge); the grand total is subtotal + tax + tip.
 *
 * After-tax mode: billTotal is the full after-tax total. Tip is applied to
 * (billTotal − serviceCharge); grand total is billTotal + tip.
 *
 * Service charge is always excluded from the tip base (it's a mandatory fee).
 */
export function calculateTip(inputs: TipInputs): TipResult {
  const {
    billTotal,
    tipPercent,
    preTax,
    taxAmount,
    fees,
    serviceCharge,
    splitPeople,
    rounding,
  } = inputs;

  if (billTotal <= 0) {
    return { tipBase: 0, tipAmount: 0, total: 0, perPerson: 0, tipPerPerson: 0 };
  }

  let tipBase: number;

  if (preTax) {
    // billTotal = pre-tax subtotal; tip on food cost only
    tipBase = billTotal - fees - serviceCharge;
  } else {
    // billTotal = after-tax total; tip on the full bill minus mandatory charges
    tipBase = billTotal - serviceCharge;
  }

  tipBase = Math.max(0, tipBase);

  const tipAmount = tipBase * (tipPercent / 100);
  // Pre-tax: grand total = subtotal + tax (from receipt) + tip
  // After-tax: grand total = bill (already includes tax) + tip
  const total = preTax
    ? billTotal + taxAmount + tipAmount
    : billTotal + tipAmount;
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
