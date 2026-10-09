declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

// Envoie un événement au Pixel. Ne fait rien si le Pixel n'est pas chargé (bloqueur de pub, pas d'ID...).
// 3e argument optionnel : { eventID } pour dédupliquer avec l'API Conversions.
export function trackEvent(
  name: string,
  params?: Record<string, unknown>,
  options?: { eventID?: string }
) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  if (options) window.fbq("track", name, params ?? {}, options);
  else if (params) window.fbq("track", name, params);
  else window.fbq("track", name);
}