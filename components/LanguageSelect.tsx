"use client";

interface LangOption {
  href: string;
  label: string;
}

interface Props {
  current: LangOption;
  others: LangOption[];
}

export default function LanguageSelect({ current, others }: Props) {
  return (
    <select
      value={current.href}
      onChange={(e) => { window.location.href = e.target.value; }}
      aria-label="Select language"
      className="text-xs rounded-lg px-2 py-1.5 cursor-pointer focus:outline-none transition-colors font-medium"
      style={{
        background: "rgba(255,255,255,0.15)",
        border: "1px solid rgba(255,255,255,0.3)",
        color: "white",
      }}
    >
      <option value={current.href} style={{ background: "#0d9488", color: "white" }}>
        {current.label}
      </option>
      {others.map((o) => (
        <option key={o.href} value={o.href} style={{ background: "#0d9488", color: "white" }}>
          {o.label}
        </option>
      ))}
    </select>
  );
}
