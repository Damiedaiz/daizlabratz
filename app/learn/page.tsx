import Link from "next/link";
import { days } from "@/lib/curriculum";
import AdSlot from "@/components/AdSlot";

export const metadata = { title: "The 21-Day Sprint | DaizLabRatZ" };

const stack = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Git and GitHub", "REST APIs", "Auth", "Testing", "Vercel deploys", "AI-assisted development"];

export default function Learn() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-14">
      <h1 className="max-w-3xl text-5xl font-extrabold sm:text-7xl">21 days. One brief a day. Checked to the letter.</h1>
      <p className="mt-6 max-w-2xl text-xl text-ink/80">Each day gives you a strict brief. You build it, push it to GitHub and submit the link. The system checks your repository against the brief automatically. It's free, and every new day is added here as it's published.</p>
      <ul className="mt-8 flex flex-wrap gap-2">{stack.map((s) => <li key={s} className="rounded-full border border-emerald px-3 py-1 text-sm text-emerald">{s}</li>)}</ul>

      <AdSlot slot="REPLACE_SLOT_ID" />

      <h2 className="mt-10 text-3xl font-bold">Your journey</h2>
      <ol className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
        {days.map((d) => d.open ? (
          <li key={d.n}><Link href={`/learn/day-${d.n}`} className="block rounded-lg border border-gold bg-panel p-4 hover:bg-gold hover:text-matte">
            <b className="font-display text-2xl">Day {d.n}</b><span className="block text-sm">{d.title}</span></Link></li>
        ) : (
          <li key={d.n} className="rounded-lg border border-line p-4 text-ink/40"><b className="font-display text-2xl">Day {d.n}</b><span className="block text-sm">Coming soon</span></li>
        ))}
      </ol>
    </div>
  );
}