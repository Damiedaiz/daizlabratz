"use client";
import { useState } from "react";
import type { Check } from "@/lib/checkRepo";

export default function SubmitForm({ day }: { day: number }) {
  const [repo, setRepo] = useState("");
  const [busy, setBusy] = useState(false);
  const [res, setRes] = useState<{ passed: boolean; checks: Check[] } | null>(null);

  async function submit() {
    setBusy(true); setRes(null);
    const r = await fetch("/api/submit", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ day, repo }) });
    setRes(await r.json()); setBusy(false);
  }
  return (
    <div className="rounded-lg border border-gold bg-panel p-6">
      <label htmlFor="repo" className="font-display text-xl font-bold">Your public GitHub repository</label>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row">
        <input id="repo" value={repo} onChange={(e) => setRepo(e.target.value)} placeholder="https://github.com/username/repo"
          className="flex-1 rounded border border-line bg-matte px-4 py-3" />
        <button onClick={submit} disabled={busy || !repo}
          className="rounded bg-gold px-6 py-3 font-display font-bold text-matte disabled:opacity-50">{busy ? "Checking..." : "Submit for review"}</button>
      </div>
      {res?.checks && (
        <div className="mt-6">
          <p className="font-display text-xl font-bold">{res.passed ? "All automated checks passed. Your mentor will review the visuals." : "Not yet. Fix the items marked below and resubmit."}</p>
          <ul className="mt-3 space-y-2">
            {res.checks.map((c) => (
              <li key={c.id} className="border-b border-line pb-2">
                <span className={c.manual ? "text-gold" : c.pass ? "text-emerald" : "text-red-400"}>{c.manual ? "Mentor review" : c.pass ? "Pass" : "Fail"}</span>
                {" "}{c.label}<span className="block text-sm text-ink/60">{c.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
