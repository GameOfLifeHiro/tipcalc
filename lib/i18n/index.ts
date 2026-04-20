"use client";

import { createContext, useContext } from "react";
import type { Translations } from "./types";
import en from "./en";
import es from "./es";

export const LOCALES: Record<string, Translations> = { en, es };

export function getTranslations(locale: string): Translations {
  return LOCALES[locale] ?? en;
}

export const TranslationsContext = createContext<Translations>(en);

export function useT(): Translations {
  return useContext(TranslationsContext);
}

export type { Translations };
