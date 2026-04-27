import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://tipcalc.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${BASE}/es/`, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/es/restaurant-tip-calculator/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/es/delivery-tip-calculator/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/es/uber-tip-calculator/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/es/lyft-tip-calculator/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/es/doordash-tip-calculator/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/es/uber-eats-tip-calculator/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/es/hairdresser-tip-calculator/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/es/split-bill-calculator/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/es/tipping-guide/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/es/about/`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/es/privacy/`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
