"use client";

import { useState, useEffect } from "react";
import { calculateTip, formatUSD } from "@/lib/tipCalc";
import { useT } from "@/lib/i18n/context";

const TIP_PRESETS = [15, 18, 20, 22] as const;
const SPLIT_MAX = 20;

export interface TipCalculatorProps {
  defaultTipPercent?: number;
  defaultSplit?: number;
  showShareButton?: boolean;
}

export default function TipCalculator({
  defaultTipPercent = 18,
  defaultSplit = 1,
  showShareButton = true,
}: TipCalculatorProps) {
  const t = useT();
  const c = t.calc;

  const [bill, setBill] = useState("");
  const [tipPercent, setTipPercent] = useState<number>(defaultTipPercent);
  const [isCustom, setIsCustom] = useState(
    !TIP_PRESETS.includes(defaultTipPercent as (typeof TIP_PRESETS)[number])
  );
  const [customTip, setCustomTip] = useState(String(defaultTipPercent));
  const [split, setSplit] = useState(defaultSplit);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [preTax, setPreTax] = useState(false);
  const [salesTax, setSalesTax] = useState("8.875");
  const [fees, setFees] = useState("");
  const [serviceCharge, setServiceCharge] = useState("");
  const [rounding, setRounding] = useState<"none" | "half" | "dollar">("none");
  const [copied, setCopied] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);

  const billNum = parseFloat(bill) || 0;
  const activeTip = isCustom ? parseFloat(customTip) || 0 : tipPercent;

  const result = calculateTip({
    billTotal: billNum,
    tipPercent: activeTip,
    preTax,
    salesTaxPercent: parseFloat(salesTax) || 0,
    fees: parseFloat(fees) || 0,
    serviceCharge: parseFloat(serviceCharge) || 0,
    splitPeople: split,
    rounding,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const p = new URLSearchParams(window.location.search);
    if (p.get("bill")) setBill(p.get("bill")!);
    if (p.get("tip")) {
      const tv = parseFloat(p.get("tip")!);
      if (!isNaN(tv)) {
        if (TIP_PRESETS.includes(tv as (typeof TIP_PRESETS)[number])) {
          setTipPercent(tv); setIsCustom(false);
        } else {
          setCustomTip(String(tv)); setIsCustom(true);
        }
      }
    }
    if (p.get("split")) setSplit(Math.min(SPLIT_MAX, parseInt(p.get("split")!) || 1));
    if (p.get("pretax") === "1") {
      setPreTax(true); setShowAdvanced(true);
      if (p.get("tax")) setSalesTax(p.get("tax")!);
      if (p.get("fees")) setFees(p.get("fees")!);
      if (p.get("sc")) setServiceCharge(p.get("sc")!);
    }
  }, []);

  const handleCopy = async () => {
    const parts = [
      `${c.labelTip}: ${formatUSD(result.tipAmount)}`,
      `${c.labelTotal}: ${formatUSD(result.total)}`,
    ];
    if (split > 1) parts.push(`${c.labelPerPerson}: ${formatUSD(result.perPerson)}`);
    await navigator.clipboard.writeText(parts.join(" · "));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    const params = new URLSearchParams({ bill, tip: String(activeTip), split: String(split) });
    if (preTax) {
      params.set("pretax", "1"); params.set("tax", salesTax);
      if (fees) params.set("fees", fees);
      if (serviceCharge) params.set("sc", serviceCharge);
    }
    const url = `${window.location.origin}${window.location.pathname}?${params}`;
    await navigator.clipboard.writeText(url);
    setShareCopied(true);
    setTimeout(() => setShareCopied(false), 2500);
  };

  const hasResult = billNum > 0;

  return (
    <div className="card p-5 sm:p-7 space-y-6" aria-label="Tip calculator">
      {/* ── Bill Amount ── */}
      <div>
        <label className="label" htmlFor="bill-input">{c.billLabel}</label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-semibold pointer-events-none" style={{ color: "var(--muted)" }}>$</span>
          <input
            id="bill-input"
            type="number" min="0" max="99999" step="0.01"
            value={bill} onChange={(e) => setBill(e.target.value)}
            placeholder="0.00"
            className="input pl-9 text-2xl font-bold"
            style={{ paddingLeft: "2.25rem" }}
            inputMode="decimal" autoComplete="off"
            aria-label={c.billLabel}
          />
        </div>
      </div>

      {/* ── Tip % ── */}
      <div>
        <label className="label">{c.tipPercentLabel}</label>
        <div className="flex flex-wrap gap-2">
          {TIP_PRESETS.map((p) => (
            <button key={p}
              onClick={() => { setTipPercent(p); setIsCustom(false); }}
              className={`tip-btn ${!isCustom && tipPercent === p ? "tip-btn-active" : ""}`}
              aria-pressed={!isCustom && tipPercent === p}
            >{p}%</button>
          ))}
          <button onClick={() => setIsCustom(true)}
            className={`tip-btn ${isCustom ? "tip-btn-active" : ""}`}
            aria-pressed={isCustom}
          >{c.customLabel}</button>
        </div>
        {isCustom && (
          <div className="flex items-center gap-2 mt-2">
            <div className="relative w-28">
              <input type="number" min="0" max="100" step="0.5"
                value={customTip} onChange={(e) => setCustomTip(e.target.value)}
                className="input pr-7 text-base font-semibold"
                placeholder="18" inputMode="decimal"
                aria-label={c.customLabel}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 font-semibold pointer-events-none" style={{ color: "var(--muted)" }}>%</span>
            </div>
            <span className="text-sm" style={{ color: "var(--muted)" }}>{c.customTipSuffix}</span>
          </div>
        )}
      </div>

      {/* ── Split ── */}
      <div>
        <label className="label">{c.splitLabel}</label>
        <div className="flex items-center gap-3">
          <button className="split-btn" onClick={() => setSplit((s) => Math.max(1, s - 1))} disabled={split <= 1}>−</button>
          <span className="text-xl font-bold w-8 text-center tabular-nums" aria-live="polite">{split}</span>
          <button className="split-btn" onClick={() => setSplit((s) => Math.min(SPLIT_MAX, s + 1))} disabled={split >= SPLIT_MAX}>+</button>
          <span className="text-sm" style={{ color: "var(--muted)" }}>
            {split === 1 ? c.personSingular : c.personPlural}
          </span>
        </div>
      </div>

      {/* ── Advanced options ── */}
      <div>
        <button onClick={() => setShowAdvanced((v) => !v)}
          className="text-sm font-medium flex items-center gap-1.5 transition-colors"
          style={{ color: "var(--accent)" }} aria-expanded={showAdvanced}
        >
          <span className="inline-block transition-transform text-xs"
            style={{ transform: showAdvanced ? "rotate(90deg)" : "rotate(0deg)" }}>▶</span>
          {c.advancedToggle}
        </button>

        {showAdvanced && (
          <div className="mt-4 space-y-4 pl-4" style={{ borderLeft: "2px solid var(--card-border)" }}>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" checked={preTax} onChange={(e) => setPreTax(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded cursor-pointer" style={{ accentColor: "var(--accent)" }}
              />
              <span className="text-sm leading-snug" style={{ color: "var(--text)" }}>
                <span className="font-semibold">{c.preTaxCheck}</span>{" "}{c.preTaxDesc}
              </span>
            </label>

            {preTax && (
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="label" style={{ fontSize: "0.7rem" }}>{c.salesTaxLabel}</label>
                  <div className="relative">
                    <input type="number" min="0" max="30" step="0.1" value={salesTax}
                      onChange={(e) => setSalesTax(e.target.value)}
                      className="input text-sm pr-7" inputMode="decimal"
                    />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs pointer-events-none" style={{ color: "var(--muted)" }}>%</span>
                  </div>
                </div>
                <div>
                  <label className="label" style={{ fontSize: "0.7rem" }}>{c.feesLabel}</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs pointer-events-none" style={{ color: "var(--muted)" }}>$</span>
                    <input type="number" min="0" step="0.01" value={fees}
                      onChange={(e) => setFees(e.target.value)}
                      className="input text-sm pl-5" placeholder="0" inputMode="decimal"
                    />
                  </div>
                </div>
                <div>
                  <label className="label" style={{ fontSize: "0.7rem" }}>{c.svcChargeLabel}</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs pointer-events-none" style={{ color: "var(--muted)" }}>$</span>
                    <input type="number" min="0" step="0.01" value={serviceCharge}
                      onChange={(e) => setServiceCharge(e.target.value)}
                      className="input text-sm pl-5" placeholder="0" inputMode="decimal"
                    />
                  </div>
                </div>
              </div>
            )}

            <div>
              <label className="label" style={{ fontSize: "0.7rem" }}>{c.roundingLabel}</label>
              <div className="flex flex-wrap gap-2 mt-1">
                {([
                  { value: "none" as const, label: c.roundNone },
                  { value: "half" as const, label: c.roundHalf },
                  { value: "dollar" as const, label: c.roundDollar },
                ]).map(({ value, label }) => (
                  <button key={value} onClick={() => setRounding(value)}
                    className="text-sm px-3 py-1.5 rounded-lg border transition-colors"
                    style={{
                      borderColor: rounding === value ? "var(--accent)" : "var(--card-border)",
                      background: rounding === value ? "var(--accent)" : "transparent",
                      color: rounding === value ? "white" : "var(--muted)",
                    }}
                    aria-pressed={rounding === value}
                  >{label}</button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Results ── */}
      {hasResult && (
        <div className="pt-5" style={{ borderTop: "1px solid var(--card-border)" }}
          aria-live="polite" aria-atomic="true"
        >
          {preTax && (
            <p className="text-xs mb-3" style={{ color: "var(--muted)" }}>
              {c.tipBasePrefix}{" "}
              <strong style={{ color: "var(--text)" }}>{formatUSD(result.tipBase)}</strong>{" "}
              {c.tipBaseSuffix}
            </p>
          )}
          <div className={`grid gap-3 ${split > 1 ? "grid-cols-3" : "grid-cols-2"}`}>
            <div className="result-card result-card-tip">
              <span className="result-label">{c.labelTip}</span>
              <span className="result-value">{formatUSD(result.tipAmount)}</span>
              <span className="text-xs" style={{ color: "var(--accent)" }}>{activeTip}%</span>
            </div>
            <div className="result-card">
              <span className="result-label">{c.labelTotal}</span>
              <span className="result-value">{formatUSD(result.total)}</span>
            </div>
            {split > 1 && (
              <div className="result-card result-card-highlight">
                <span className="result-label">{c.labelPerPerson}</span>
                <span className="result-value">{formatUSD(result.perPerson)}</span>
                {rounding !== "none" && (
                  <span className="text-xs" style={{ color: "var(--accent)" }}>{c.labelRounded}</span>
                )}
              </div>
            )}
          </div>
          <div className="flex gap-2 mt-4">
            <button onClick={handleCopy} className="btn-secondary flex-1">{copied ? c.copyDone : c.copyBtn}</button>
            {showShareButton && (
              <button onClick={handleShare} className="btn-secondary flex-1">{shareCopied ? c.shareDone : c.shareBtn}</button>
            )}
          </div>
        </div>
      )}

      {!hasResult && (
        <div className="pt-5 text-center py-6"
          style={{ borderTop: "1px solid var(--card-border)", color: "var(--muted)" }}
        >
          <p className="text-sm">{c.emptyState}</p>
        </div>
      )}
    </div>
  );
}
