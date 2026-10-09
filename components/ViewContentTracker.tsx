"use client";
import { useEffect } from "react";
import { trackEvent } from "@/app/lib/fbq";

export default function ViewContentTracker(props: {
  id: string; name: string; value: number; currency: string;
}) {
  const { id, name, value, currency } = props;
  useEffect(() => {
    trackEvent("ViewContent", {
      content_ids: [id],
      content_name: name,
      content_type: "product",
      value,
      currency,
    });
  }, [id, name, value, currency]);
  return null;
}