"use client";

import { useEffect, useState } from "react";
import { getPromoState } from "./promo";


// false on the server and on first render (no hydration mismatch),
// then true only between Nov 1 and Nov 30.
export function usePromoLive() {
  const [live, setLive] = useState(false);
  useEffect(() => {
    setLive(getPromoState().live);
  }, []);
  return live;
}