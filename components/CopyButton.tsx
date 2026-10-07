"use client";
import { useState } from "react";

export default function CopyButton({ text }: { text: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      onClick={async () => { await navigator.clipboard.writeText(text); setDone(true); setTimeout(() => setDone(false), 2000); }}
      className="rounded border border-gold px-4 py-2 text-gold hover:bg-gold hover:text-matte transition-colors">
      {done ? "Copied" : "Copy letter"}
    </button>
  );
}
