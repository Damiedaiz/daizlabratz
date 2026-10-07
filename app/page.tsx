import Link from "next/link";
import AdSlot from "@/components/AdSlot";

const learn = [
  "React.js and Next.js", "TypeScript", "Tailwind CSS", "Git and GitHub workflows",
  "REST APIs", "Authentication and authorization", "Testing fundamentals",
  "Deploying with Vercel", "Accessibility and performance", "Prompt engineering and AI-assisted development",
];

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-20">
        <h1 className="rise max-w-3xl text-5xl font-extrabold sm:text-7xl">
          Learn modern frontend in 21 days. <span className="text-gold">Free for everyone.</span>
        </h1>
        <p className="rise mt-8 max-w-xl text-xl text-ink/80">
          You already know HTML, CSS and JavaScript. In three weeks you move to React, Next.js, TypeScript and Tailwind, and ship real projects.
        </p>
        <div className="rise mt-10 flex flex-wrap gap-4">
          <Link href="/learn" className="rounded bg-emerald px-6 py-3 font-display font-bold text-matte hover:brightness-110">Start the free training</Link>
          <a href="#one-on-one" className="rounded border border-line px-6 py-3 font-display font-bold hover:border-gold">See the one-on-one track</a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-bold">What you will learn</h2>
        <ul className="mt-6 grid gap-x-10 gap-y-2 sm:grid-cols-2">
          {learn.map((t) => <li key={t} className="border-b border-line py-2">{t}</li>)}
        </ul>
        <p className="mt-6 text-ink/60">
          See the day-by-day journey on the <Link href="/learn" className="text-emerald underline">training page</Link>.
        </p>
      </section>

      <div className="mx-auto max-w-5xl px-6"><AdSlot slot="REPLACE_SLOT_ID" /></div>

      <section className="mx-auto mt-10 grid max-w-5xl gap-6 px-6 md:grid-cols-2">
        <div className="rounded-lg border border-line bg-panel p-8">
          <h2 className="text-3xl font-bold text-emerald">Free training</h2>
          <p className="mt-2 text-ink/70">Open to everyone.</p>
          <ul className="mt-5 space-y-2">
            <li>Full 21-day curriculum</li>
            <li>Self-paced projects and assignments</li>
            <li>Automatic check of your GitHub submission</li>
            <li>Supported by the site's ads, so it costs you nothing</li>
          </ul>
          <p className="mt-5">No application needed. <Link href="/learn" className="text-emerald underline">Start with Day 1</Link>.</p>
        </div>
        <div id="one-on-one" className="rounded-lg border border-gold bg-panel p-8">
          <h2 className="text-3xl font-bold text-gold">One-on-one sprint</h2>
          <p className="mt-2 text-3xl font-display font-bold">₦200,000</p>
          <ul className="mt-5 space-y-2">
            <li>Personal review of your portfolio, projects and assignments</li>
            <li>Direct contact with me throughout the 21 days</li>
            <li>Feedback tailored to your level and goals</li>
          </ul>
          <dl className="mt-6 rounded border border-line p-4 text-base">
            <div className="flex justify-between"><dt className="text-ink/60">Bank</dt><dd>Moniepoint</dd></div>
            <div className="flex justify-between"><dt className="text-ink/60">Account</dt><dd>8106367710</dd></div>
            <div className="flex justify-between"><dt className="text-ink/60">Name</dt><dd>DaizSign Multimedia Ltd.</dd></div>
          </dl>
          <a className="mt-5 inline-block text-gold underline" href="mailto:daizsign@gmail.com?subject=21-Day%20Sprint%20Payment%20Receipt">Email your receipt to daizsign@gmail.com</a>
        </div>
      </section>
    </>
  );
}