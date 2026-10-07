import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About DaizLab — Damiedaiz's AI-Supported Digital Ecosystem",
  description:
    "Learn about DaizLab, the AI-supported digital ecosystem founded by Oluwadamilare Taofeek Oloyede, publicly known as Damiedaiz, and its OPMMA operating framework.",
  alternates: {
    canonical: "https://daizlabratz.online/about",
  },
};

const focusAreas = [
  "Intent Architecture",
  "Intent-Based Computing",
  "Intent Economy",
  "Digital Sovereignty",
  "AI-supported business systems",
  "Autonomous workflows",
  "Digital sales systems",
  "Digital business infrastructure",
];

const systems = [
  {
    name: "DaizSystems",
    description: "Systems and infrastructure for engineering digital business outcomes.",
  },
  {
    name: "DaizFi",
    description: "A Daiz ecosystem layer exploring identity, contribution and financial-system architecture.",
  },
  {
    name: "DaizAI",
    description: "AI-oriented systems within the Daiz ecosystem.",
  },
  {
    name: "PidGinYor",
    description: "An experimental language and developer system within the Daiz ecosystem.",
  },
  {
    name: "A.I.R.",
    description: "AI Interpretation Readiness: making digital entities and systems easier for AI systems to interpret.",
  },
  {
    name: "OPMMA",
    description: "The One Person Marketing & Management Agency operating framework.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#08080a] text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/40">
            About DaizLab
          </p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            One ecosystem. Systems engineered around intent.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/60 sm:text-xl">
            DaizLab is an AI-supported digital ecosystem founded and architected
            by <strong className="text-white">Oluwadamilare Taofeek Oloyede</strong>,
            publicly known as <strong className="text-white">Damiedaiz</strong>.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[0.7fr_1.3fr] lg:px-16 lg:py-20">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/35">01 / The person</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Damiedaiz
            </h2>
            <p className="mt-2 text-white/45">
              Oluwadamilare Taofeek Oloyede
            </p>
          </div>
          <div className="space-y-5 text-base leading-8 text-white/60">
            <p>
              Damiedaiz is the public name of Oluwadamilare Taofeek Oloyede,
              founder and architect of DaizLab.
            </p>
            <p>
              His work focuses on digital systems, business infrastructure,
              artificial intelligence, automation, intent-driven computing
              and autonomous digital outcomes.
            </p>
            <Link href="/damiedaiz" className="inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5">
              Explore Damiedaiz →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[0.7fr_1.3fr] lg:px-16 lg:py-20">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/35">02 / The ecosystem</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">DaizLab</h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-white/60">
            <p>
              DaizLab is designed as an interconnected environment of systems,
              frameworks, experiments and infrastructure rather than a
              collection of unrelated products.
            </p>
            <p>
              The broader objective is to connect human intent with software,
              AI, automation and digital infrastructure so that recurring work
              can be structured into systems and increasingly autonomous
              workflows.
            </p>
            <p className="text-2xl font-semibold text-white">Systems Over Hustle.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
          <p className="text-sm uppercase tracking-[0.2em] text-white/35">03 / The operating model</p>
          <div className="mt-5 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">OPMMA</h2>
              <p className="mt-3 text-lg text-white/45">
                One Person Marketing &amp; Management Agency
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-9">
              <p className="text-base leading-8 text-white/65">
                OPMMA is a DaizLab operating framework created by Damiedaiz for
                enabling one person to market, manage and operate a digital
                business through systems, AI, automation and infrastructure.
              </p>
              <p className="mt-5 text-base leading-8 text-white/65">
                The person remains the architect while systems perform an
                increasing portion of recurring execution. The goal is to
                replace dependence on constant manual effort with connected,
                intentional operating systems.
              </p>
              <Link href="/opmma" className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90">
                Explore OPMMA →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
          <p className="text-sm uppercase tracking-[0.2em] text-white/35">04 / The architecture</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold sm:text-5xl">
            Ideas that shape the ecosystem.
          </h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area) => (
              <div key={area} className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-sm leading-6 text-white/70">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
          <p className="text-sm uppercase tracking-[0.2em] text-white/35">05 / Ecosystem systems</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">
            Connected by a common direction.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {systems.map((system) => (
              <article key={system.name} className="rounded-3xl border border-white/10 bg-white/[0.025] p-6">
                <h3 className="text-xl font-semibold">{system.name}</h3>
                <p className="mt-4 text-sm leading-7 text-white/55">{system.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
          <p className="text-sm uppercase tracking-[0.2em] text-white/35">Identity</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Full name", "Oluwadamilare Taofeek Oloyede"],
              ["Public name", "Damiedaiz"],
              ["Founder / architect", "DaizLab"],
              ["Operating framework", "OPMMA"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/10 p-5">
                <p className="text-sm text-white/35">{label}</p>
                <p className="mt-2 font-medium text-white/85">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/" className="rounded-full border border-white/15 px-5 py-3 text-sm hover:bg-white/5">
              DaizLab Home
            </Link>
            <Link href="/opmma" className="rounded-full border border-white/15 px-5 py-3 text-sm hover:bg-white/5">
              OPMMA
            </Link>
            <Link href="/damiedaiz" className="rounded-full border border-white/15 px-5 py-3 text-sm hover:bg-white/5">
              Damiedaiz
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
