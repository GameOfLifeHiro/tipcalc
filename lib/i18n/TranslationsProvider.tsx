"use client";

import { TranslationsContext } from "./context";
import type { Translations } from "./types";

export default function TranslationsProvider({
  translations,
  children,
}: {
  translations: Translations;
  children: React.ReactNode;
}) {
  return (
    <TranslationsContext.Provider value={translations}>
      {children}
    </TranslationsContext.Provider>
  );
}
