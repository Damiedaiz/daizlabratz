"use client";
import { useState } from "react";
import type { Check } from "@/lib/checkRepo";

export default function SubmitForm({ day }: { day: number }) {
  const [repo, setRepo] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [res, setRes] = useState<{ passed: boolean; checks: Check[] } | null>(null);

  async function submit() {
    setBusy(true); setRes(null); setError("");
    try {
      const r = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ day, repo }),
      });
      const data = await r.json();
      if (!r.ok || !data.checks) throw new Error(data.error || "Something went wrong.");
      setRes(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong. Try again.");
    }
    setBusy(false);
  }

  return (
    <div className="rounded-lg border border-gold bg-panel p-6">
      <label htmlFor="repo" className="font-display text-xl font-bold">Your public GitHub repository</label>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row">
        <input id="repo" value={repo} onChange={(e) => setRepo(e.target.value)} placeholder="https://github.com/username/repo"
          className="flex-1 rounded border border-line bg-matte px-4 py-3" />
        <button onClick={submit} disabled={busy || !repo}
          className="rounded bg-gold px-6 py-3 font-display font-bold text-matte disabled:opacity-50">{busy ? "Checking..." : "Check my submission"}</button>
      </div>

      {error && <p className="mt-4 text-red-400">{error}</p>}

      {res && (
        <div className="mt-6">
          <p className="font-display text-xl font-bold">
            {res.passed ? "All automated checks passed." : "Not yet. Fix the items marked Fail and check again."}
          </p>
          <ul className="mt-3 space-y-2">
            {res.checks.map((c) => (
              <li key={c.id} className="border-b border-line pb-2">
                <span className={c.manual ? "text-gold" : c.pass ? "text-emerald" : "text-red-400"}>
                  {c.manual ? "Not auto-checked" : c.pass ? "Pass" : "Fail"}
                </span>
                {" "}{c.label}
                <span className="block text-sm text-ink/60">{c.manual ? "Visual quality needs a human reviewer." : c.detail}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-line pt-4 text-sm text-ink/70">
            Want your work reviewed personally, with saved records and direct contact?{" "}
            <a href="/#one-on-one" className="text-gold underline">See the one-on-one sprint</a>.
          </p>
        </div>
      )}
    </div>
  );
}