"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Currency = "USD" | "EUR" | "MAD";

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (priceStr: string) => string;
  convertPriceValue: (priceStr: string) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("MAD");

  // Détection automatique du pays au premier chargement
  useEffect(() => {
    const savedCurrency = localStorage.getItem("preferred_currency") as Currency;
    if (savedCurrency && ["USD", "EUR", "MAD"].includes(savedCurrency)) {
      setCurrency(savedCurrency);
      return;
    }

    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.country_code) {
          const country = data.country_code;
          const euroCountries = ["FR", "DE", "ES", "IT", "BE", "NL", "PT", "AT", "IE", "FI", "GR", "LU"];
          
          if (euroCountries.includes(country)) {
            setCurrency("EUR");
          } else if (country === "MA") {
            setCurrency("MAD");
          } else {
            setCurrency("USD");
          }
        }
      })
      .catch(() => {
        setCurrency("USD");
      });
  }, []);

  const handleSetCurrency = (newCurrency: Currency) => {
    setCurrency(newCurrency);
    localStorage.setItem("preferred_currency", newCurrency);
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
    <CurrencyContext.Provider value={{ currency, setCurrency: handleSetCurrency, formatPrice, convertPriceValue: formatPrice }}>
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