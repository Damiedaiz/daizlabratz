import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OPMMA — One Person Marketing & Management Agency | DaizLab",
  description:
    "OPMMA is a DaizLab operating framework created by Damiedaiz for building and operating digital businesses through systems, AI, automation and infrastructure.",
  alternates: {
    canonical: "https://daizlabratz.online/opmma",
  },
};

const model = [
  "Human intent",
  "Digital infrastructure",
  "Artificial intelligence",
  "Automation",
  "Software systems",
  "Marketing systems",
  "Management systems",
  "Autonomous workflows",
  "Measurement & feedback",
];

export default function OPMMAPage() {
  return (
    <main className="min-h-screen bg-[#08080a] text-white">
      {/* HERO */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/40">
            DaizLab Operating Framework
          </p>

          <h1 className="mt-5 text-6xl font-semibold tracking-[-0.05em] sm:text-7xl lg:text-9xl">
            OPMMA
          </h1>

          <p className="mt-5 max-w-3xl text-xl text-white/50 sm:text-2xl">
            One Person Marketing &amp; Management Agency
          </p>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/65 sm:text-xl">
            Created by{" "}
            <strong className="text-white">
              Damiedaiz (Oluwadamilare Taofeek Oloyede)
            </strong>
            , OPMMA is a DaizLab operating framework for building and operating
            digital businesses through systems rather than constant manual
            effort.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90"
            >
              DaizLab
            </Link>
            <Link
              href="/damiedaiz"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold hover:bg-white/5"
            >
              Damiedaiz
            </Link>
          </div>
        </div>
      </section>

      {/* NOT A TRADITIONAL AGENCY */}
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-16">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/35">
              The distinction
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Not simply a traditional marketing agency.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-white/60">
            <p>
              OPMMA represents an operating model in which one person can
              orchestrate an ecosystem of software, AI, automation,
              infrastructure, digital assets and autonomous workflows.
            </p>

            <p>
              The person remains the architect. The system performs an
              increasing portion of the execution.
            </p>

            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7">
              <p className="text-sm uppercase tracking-[0.2em] text-white/35">
                The principle
              </p>
              <p className="mt-3 text-3xl font-semibold text-white">
                Systems Over Hustle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEMS OVER HUSTLE */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
          <p className="text-sm uppercase tracking-[0.2em] text-white/35">
            Systems Over Hustle
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Engineer the system instead of continuously increasing the hustle.
          </h2>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/55">
            Traditional business growth often depends on increasing human
            effort. OPMMA takes a different approach: turn recurring
            marketing, management and operational activities into connected
            systems that can be automated, interpreted and increasingly
            operated by machines.
          </p>
        </div>
      </section>

      {/* MODEL */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
          <p className="text-sm uppercase tracking-[0.2em] text-white/35">
            The OPMMA Model
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
            The components of the operating model.
          </h2>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {model.map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-6"
              >
                <span className="text-xs text-white/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-5 text-base font-medium text-white/80">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:px-10 lg:py-24">
          <p className="text-sm uppercase tracking-[0.2em] text-white/35">
            The architecture
          </p>

          <div className="mt-10 space-y-3 text-lg sm:text-2xl">
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
              Human Intent
            </div>
            <div className="text-white/25">↓</div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
              Systems + AI + Automation
            </div>
            <div className="text-white/25">↓</div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
              Digital Infrastructure
            </div>
            <div className="text-white/25">↓</div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 font-semibold">
              Increasingly Autonomous Execution
            </div>
          </div>
        </div>
      </section>

      {/* RELATIONSHIP WITH DAIZLAB */}
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.75fr_1.25fr] lg:px-16">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/35">
              Relationship with DaizLab
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              One ecosystem. One operating model.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-white/60">
            <p>
              OPMMA is part of the broader{" "}
              <strong className="text-white">DaizLab ecosystem</strong>.
            </p>

            <p>
              <strong className="text-white">DaizLab</strong> provides the
              ecosystem and architectural environment.
            </p>

            <p>
              <strong className="text-white">OPMMA</strong> provides an
              operating model for using that environment to build and operate
              digital businesses.
            </p>

            <Link
              href="/about"
              className="inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-semibold hover:bg-white/5"
            >
              Understand DaizLab →
            </Link>
          </div>
        </div>
      </section>

      {/* ONE SENTENCE */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-24 text-center sm:px-10 lg:py-32">
          <p className="text-sm uppercase tracking-[0.2em] text-white/35">
            OPMMA in one sentence
          </p>

          <blockquote className="mt-8 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            OPMMA is Damiedaiz&apos;s framework for enabling one person to
            operate a scalable digital business through systems, AI,
            automation and infrastructure rather than relying primarily on
            manual hustle.
          </blockquote>

          <div className="mt-10 flex justify-center gap-3">
            <Link
              href="/apply"
              className="rounded-full bg-white px-7 py-4 text-sm font-semibold text-black hover:bg-white/90"
            >
              Learn the Framework
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
