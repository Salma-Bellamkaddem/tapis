"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Déclenche `inView` la première fois que l'élément entre dans le viewport.
 * Si IntersectionObserver n'existe pas, `inView` passe tout de suite à true
 * pour ne jamais laisser un compteur figé.
 */
export function useInView<T extends HTMLElement>(threshold = 0.3) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/**
 * Compte de 0 jusqu'à `target`.
 * - La valeur initiale est `target` : même sans JS ou sans animation,
 *   le chiffre affiché est le bon (jamais 0).
 * - L'animation ne démarre que quand `active` est vrai.
 * - `prefers-reduced-motion` est respecté.
 */
export function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(target);

  useEffect(() => {
    if (!active) return;

    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      setTimeout(() => setValue(target), 0);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, active, duration]);

  return value;
}