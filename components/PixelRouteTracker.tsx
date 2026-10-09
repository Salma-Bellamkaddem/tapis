"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function PixelRouteTracker() {
  const pathname = usePathname();
  const first = useRef(true);
  useEffect(() => {
    if (first.current) { first.current = false; return; } // 1er PageView déjà envoyé par le snippet
    (window as any).fbq?.("track", "PageView");
  }, [pathname]);
  return null;
}