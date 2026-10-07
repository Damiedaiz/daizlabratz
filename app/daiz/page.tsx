import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DaizLab — Engineering Human Intent into Digital Systems",
  description:
    "Learn the systems thinking behind DaizLab, OPMMA, Intent Architecture, AI-supported business systems and Systems Over Hustle from Damiedaiz.",
  alternates: { canonical: "https://daizlabratz.online/" },
};

const ecosystem = [
  ["OPMMA", "One Person Marketing & Management Agency", "A DaizLab operating framework for enabling one person to market, manage and operate a digital business through systems, AI, automation and infrastructure."],
  ["DaizSystems", "Digital business infrastructure", "Systems and infrastructure for engineering digital business outcomes."],
  ["DaizFi", "Identity, contribution & financial architecture", "A Daiz ecosystem layer exploring identity, contribution and financial-system architecture."],
  ["DaizAI", "AI systems", "AI-oriented systems within the Daiz ecosystem."],
  ["PidGinYor", "Language & developer experimentation", "An experimental language/developer system within the Daiz ecosystem."],
  ["A.I.R.", "AI Interpretation Readiness", "A framework concerned with making digital entities and systems easier for AI systems to interpret."],
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#08080a] text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <div className="max-w-5xl">
            <div className="mb-8 inline-flex rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm text-white/60">
              DAIZLAB · SYSTEMS OVER HUSTLE
            </div>

            <h1 className="text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              Engineering human intent into digital systems.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/65 sm:text-xl">
              DaizLab is an AI-supported digital ecosystem founded and
              architected by{" "}
              <strong className="text-white">
                Oluwadamilare Taofeek Oloyede
              </strong>
              , publicly known as <strong className="text-white">Damiedaiz</strong>.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/50">
              The work explores how human intent can become software,
              artificial intelligence, automation, infrastructure and
              increasingly autonomous workflows.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="#method" className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-black hover:bg-white/90">
                Learn the Architecture
              </Link>
              <Link href="#ecosystem" className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-semibold hover:bg-white/5">
                Explore DaizLab
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1fr_1.2fr] lg:px-16">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/40">The premise</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              Stop thinking in isolated tools. Start thinking in systems.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-white/60">
            <p>DaizLab treats AI, software and automation as connected infrastructure rather than isolated tools.</p>
            <p>The objective is not to create more activity. It is to engineer systems that can interpret intent, coordinate digital infrastructure and produce repeatable outcomes.</p>
            <p className="text-white">
              The principle is simple:<br />
              <span className="text-2xl font-semibold">Systems Over Hustle.</span>
            </p>
          </div>
        </div>
      </section>

      <section id="method" className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
          <p className="text-sm uppercase tracking-[0.2em] text-white/40">The architecture</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
            From intent to autonomous outcomes.
          </h2>

          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-5">
            {["Human Intent", "Intent Architecture", "Software + AI + Automation", "Digital Infrastructure", "Autonomous Outcomes"].map((step, index) => (
              <div key={step} className="bg-[#0c0c0f] p-7 md:min-h-48">
                <div className="text-xs text-white/30">0{index + 1}</div>
                <div className="mt-12 text-lg font-medium">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ecosystem" className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
          <p className="text-sm uppercase tracking-[0.2em] text-white/40">The ecosystem</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
            One ecosystem. Multiple systems.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/55">
            DaizLab brings systems, experiments, infrastructure and operating frameworks into one architectural direction.
          </p>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {ecosystem.map(([name, label, description]) => (
              <article key={name} className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 hover:bg-white/[0.045]">
                <div className="text-2xl font-semibold">{name}</div>
                <div className="mt-2 text-sm text-white/40">{label}</div>
                <p className="mt-6 text-sm leading-7 text-white/55">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/40">The operating model</p>
              <h2 className="mt-4 text-5xl font-semibold tracking-tight sm:text-7xl">OPMMA</h2>
              <p className="mt-3 text-xl text-white/50">One Person Marketing &amp; Management Agency</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-8 sm:p-10">
              <p className="text-lg leading-8 text-white/70">
                OPMMA is a DaizLab operating framework created by Damiedaiz for enabling one person to market, manage and operate a digital business through systems, AI, automation and infrastructure.
              </p>
              <div className="mt-8 border-l border-white/20 pl-6">
                <p className="text-sm uppercase tracking-[0.2em] text-white/35">Core philosophy</p>
                <p className="mt-2 text-3xl font-semibold">Systems Over Hustle.</p>
              </div>
              <Link href="/opmma" className="mt-8 inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-semibold hover:bg-white/5">
                Explore OPMMA →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center sm:px-10">
          <p className="text-sm uppercase tracking-[0.2em] text-white/40">Learn the thinking</p>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
            Build from intent. Engineer the system.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/55">
            Learn the systems, frameworks and architecture behind the DaizLab ecosystem.
          </p>
          <Link href="/apply" className="mt-10 inline-flex rounded-full bg-white px-7 py-4 text-sm font-semibold text-black hover:bg-white/90">
            Apply to Learn
          </Link>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
          <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/35">Founder &amp; Architect</p>
              <h2 className="mt-4 text-3xl font-semibold">Oluwadamilare Taofeek Oloyede</h2>
              <p className="mt-2 text-white/45">Publicly known as Damiedaiz.</p>
            </div>
            <div className="text-base leading-8 text-white/55">
              <p>
                Damiedaiz is the founder and architect of DaizLab, an AI-supported digital ecosystem focused on engineering software, business infrastructure and increasingly autonomous digital outcomes from human intent.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/damiedaiz" className="rounded-full border border-white/15 px-5 py-3 text-sm hover:bg-white/5">About Damiedaiz</Link>
                <Link href="/about" className="rounded-full border border-white/15 px-5 py-3 text-sm hover:bg-white/5">About DaizLab</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
