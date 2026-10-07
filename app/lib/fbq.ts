declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

// Envoie un événement au Pixel. Ne fait rien si le Pixel n'est pas chargé (bloqueur de pub, pas d'ID...).
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  if (params) window.fbq("track", name, params);
  else window.fbq("track", name);
}