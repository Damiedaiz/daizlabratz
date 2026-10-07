"use client";
import { useEffect } from "react";

// Create an ad unit in AdSense, then pass its slot ID here.
export default function AdSlot({ slot }: { slot: string }) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  useEffect(() => {
    try { ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({}); } catch {}
  }, []);
  if (!client) return null;
  return (
    <ins className="adsbygoogle block my-10" style={{ display: "block" }}
      data-ad-client={client} data-ad-slot={slot}
      data-ad-format="auto" data-full-width-responsive="true" />
  );
}
