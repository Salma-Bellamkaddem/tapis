"use client";

import React, { createContext, useContext, useEffect, useState, useSyncExternalStore } from "react";

type Currency = "USD" | "EUR" | "MAD";

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (priceStr: string) => string;
  convertPriceValue: (priceStr: string) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const EURO_COUNTRIES = ["FR", "DE", "ES", "IT", "BE", "NL", "PT", "AT", "IE", "FI", "GR", "LU"];
const STORAGE_KEY = "preferred_currency";
const VALID: Currency[] = ["USD", "EUR", "MAD"];

// ---------------------------------------------------------------------------
// Préférence de devise stockée dans localStorage, lue via useSyncExternalStore
// (même principe que CartContext) : aucun setState synchrone dans un useEffect.
// ---------------------------------------------------------------------------
const listeners = new Set<() => void>();
let memoryCurrency: Currency | null = null; // repli si localStorage est indisponible

function getStoredCurrency(): Currency | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY) as Currency | null;
    if (v && VALID.includes(v)) return v;
  } catch {
    return memoryCurrency;
  }
  return memoryCurrency;
}

function storeCurrency(value: Currency) {
  memoryCurrency = value;
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // ignoré : on garde la valeur en mémoire
  }
  listeners.forEach((l) => l());
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY || e.key === null) callback();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", onStorage);
  };
}

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  // Choix explicite de l'utilisateur (null tant qu'il n'a rien choisi)
  const stored = useSyncExternalStore(subscribe, getStoredCurrency, () => null);
  // Devise détectée via le pays (renseignée dans le callback du fetch)
  const [detected, setDetected] = useState<Currency | null>(null);

  const currency: Currency = stored ?? detected ?? "MAD";

  // Détection automatique du pays, seulement si l'utilisateur n'a pas déjà choisi
  useEffect(() => {
    if (getStoredCurrency()) return;

    let cancelled = false;
    fetch("/api/geo")
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;
        const country: string = data?.country_code || "";
        if (EURO_COUNTRIES.includes(country)) setDetected("EUR");
        else if (country === "MA") setDetected("MAD");
        else setDetected("USD");
      })
      .catch(() => {
        if (!cancelled) setDetected("USD");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const handleSetCurrency = (newCurrency: Currency) => {
    storeCurrency(newCurrency);
  };

  const formatPrice = (priceStr: string) => {
    if (!priceStr) return priceStr;
    const numericValue = parseFloat(priceStr.replace(/[^0-9.]/g, ""));
    if (isNaN(numericValue)) return priceStr;

    // Si le prix d'origine contenait un "$", on le convertit en MAD de base (rétrocompatibilité)
    let priceInMAD = numericValue;
    if (priceStr.includes("$")) {
      priceInMAD = numericValue * 10;
    }

    if (currency === "EUR") {
      const converted = Math.round(priceInMAD / 10.8);
      return `€${converted}`;
    } else if (currency === "MAD") {
      return `${Math.round(priceInMAD)} MAD`;
    } else {
      const converted = Math.round(priceInMAD / 10);
      return `$${converted}`;
    }
  };

  return (
    <CurrencyContext.Provider
      value={{ currency, setCurrency: handleSetCurrency, formatPrice, convertPriceValue: formatPrice }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}