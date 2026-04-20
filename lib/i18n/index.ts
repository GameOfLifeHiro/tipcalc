// Server-side helpers — NOT marked "use client", only used in layouts/pages
import type { Translations } from "./types";
import en from "./en";
import es from "./es";

export const LOCALES: Record<string, Translations> = { en, es };

export function getTranslations(locale: string): Translations {
  return LOCALES[locale] ?? en;
}

// Re-export the client-safe hook and context for convenience
export { TranslationsContext, useT } from "./context";
export type { Translations };
