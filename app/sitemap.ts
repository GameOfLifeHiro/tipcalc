import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://tipcalc.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    // English (default)
    { url: BASE, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/restaurant-tip-calculator/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/delivery-tip-calculator/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/uber-tip-calculator/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/lyft-tip-calculator/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/hairdresser-tip-calculator/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/split-bill-calculator/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/tipping-guide/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/about/`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/privacy/`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    // Spanish URLs — also listed in /es/sitemap.xml (submit that separately in GSC)
    { url: `${BASE}/es/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/es/restaurant-tip-calculator/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/es/delivery-tip-calculator/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/es/uber-tip-calculator/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/es/lyft-tip-calculator/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/es/hairdresser-tip-calculator/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/es/split-bill-calculator/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/es/tipping-guide/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/es/about/`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/es/privacy/`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
