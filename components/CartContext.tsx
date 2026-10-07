"use client";

import { createContext, useContext, useSyncExternalStore, ReactNode } from "react";
import { trackEvent } from "@/app/lib/fbq";
import { parsePrice } from "@/app/lib/pricing";

export interface CartItem {
  rugId: string;
  name: string;
  sku: string;
  size: string;
  price: string;
  image: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (rugId: string, size: string) => void;
  clearCart: () => void;
  totalItems: number;
  /** false pendant le rendu serveur et l'hydratation, true ensuite (le panier du navigateur est lu) */
  ready: boolean;
}

// ---------------------------------------------------------------------------
// Petit "store" branché sur localStorage.
// useSyncExternalStore affiche un panier vide pendant l'hydratation (comme le serveur),
// puis passe automatiquement au vrai panier : plus d'erreur "Hydration failed".
// ---------------------------------------------------------------------------
const STORAGE_KEY = "rugsberber_cart";
const EMPTY: CartItem[] = []; // même référence à chaque fois (obligatoire pour useSyncExternalStore)

let cachedRaw: string | null | undefined;
let cachedCart: CartItem[] = EMPTY;
let storageBroken = false; // navigation privée / stockage plein : on garde le panier en mémoire
const listeners = new Set<() => void>();

function readCart(): CartItem[] {
  if (storageBroken) return cachedCart;

  let raw: string | null = null;
  try {
    raw = localStorage.getItem(STORAGE_KEY);
  } catch {
    storageBroken = true;
    return cachedCart;
  }

  if (raw === cachedRaw) return cachedCart; // inchangé : même référence

  cachedRaw = raw;
  try {
    const parsed = raw ? JSON.parse(raw) : EMPTY;
    cachedCart = Array.isArray(parsed) ? parsed : EMPTY;
  } catch (e) {
    console.error("Failed to parse cart", e);
    cachedCart = EMPTY;
  }
  return cachedCart;
}

function writeCart(next: CartItem[]) {
  cachedCart = next;
  try {
    const serialized = JSON.stringify(next);
    localStorage.setItem(STORAGE_KEY, serialized);
    cachedRaw = serialized;
  } catch (e) {
    console.error("Failed to save cart", e);
    storageBroken = true;
  }
  listeners.forEach((listener) => listener());
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  // Met aussi à jour le panier si l'utilisateur le modifie dans un autre onglet
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY || e.key === null) callback();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", onStorage);
  };
}

const subscribeNever = () => () => {};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const cart = useSyncExternalStore(subscribe, readCart, () => EMPTY);
  const ready = useSyncExternalStore(subscribeNever, () => true, () => false);

  const addToCart = (newItem: CartItem) => {
    const current = readCart();
    // Évite les doublons exacts (même ID + même taille)
    if (current.some((item) => item.rugId === newItem.rugId && item.size === newItem.size)) return;

    writeCart([...current, newItem]);

    // Événement Meta Pixel
    const { value, currency } = parsePrice(newItem.price);
    trackEvent("AddToCart", {
      content_ids: [newItem.sku],
      content_name: newItem.name,
      content_type: "product",
      value,
      currency,
    });
  };

  const removeFromCart = (rugId: string, size: string) => {
    writeCart(readCart().filter((item) => !(item.rugId === rugId && item.size === size)));
  };

  const clearCart = () => {
    writeCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, totalItems: cart.length, ready }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}