import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://tipcalc.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: BASE, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/restaurant-tip-calculator/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/delivery-tip-calculator/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/uber-tip-calculator/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/hairdresser-tip-calculator/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/split-bill-calculator/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/tipping-guide/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/about/`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/privacy/`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
