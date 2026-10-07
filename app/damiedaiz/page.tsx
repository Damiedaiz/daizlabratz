import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Damiedaiz — Oluwadamilare Taofeek Oloyede",
  description:
    "Damiedaiz is the public name of Oluwadamilare Taofeek Oloyede, founder and architect of DaizLab and creator of the OPMMA operating framework.",
  alternates: {
    canonical: "https://daizlabratz.online/damiedaiz",
  },
};

const work = [
  "Intent Architecture",
  "Intent-Based Computing",
  "Intent Economy",
  "Digital Sovereignty",
  "AI-supported business systems",
  "Autonomous workflows",
  "Digital sales systems",
  "Digital business infrastructure",
];

export default function DamiedaizPage() {
  return (
    <main className="min-h-screen bg-[#08080a] text-white">
      {/* HERO */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/40">
            Founder &amp; Architect
          </p>

          <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-[-0.04em] sm:text-7xl lg:text-8xl">
            Damiedaiz
          </h1>

          <p className="mt-5 text-xl text-white/45 sm:text-2xl">
            Oluwadamilare Taofeek Oloyede
          </p>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/65 sm:text-xl">
            Damiedaiz is the public name of{" "}
            <strong className="text-white">
              Oluwadamilare Taofeek Oloyede
            </strong>
            , founder and architect of the Daiz ecosystem.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90"
            >
              Explore DaizLab
            </Link>

            <Link
              href="/opmma"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold hover:bg-white/5"
            >
              Explore OPMMA
            </Link>
          </div>
        </div>
      </section>

      {/* DAIZLAB */}
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.75fr_1.25fr] lg:px-16">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/35">
              The ecosystem
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              DaizLab
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-white/60">
            <p>
              Damiedaiz is the founder and architect of{" "}
              <strong className="text-white">DaizLab</strong>, an
              AI-supported digital ecosystem focused on engineering software,
              business infrastructure and increasingly autonomous digital
              outcomes from human intent.
            </p>

            <p>
              DaizLab is an ecosystem rather than a collection of unrelated
              products. It brings together software systems, experiments,
              infrastructure and operating frameworks under a common
              architectural direction.
            </p>

            <Link
              href="/about"
              className="inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-semibold hover:bg-white/5"
            >
              About DaizLab →
            </Link>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
          <p className="text-sm uppercase tracking-[0.2em] text-white/35">
            The work
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Building around intent, systems and infrastructure.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/55">
            Damiedaiz&apos;s work explores the following areas:
          </p>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {work.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-sm leading-6 text-white/70"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPMMA */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/35">
                Created by Damiedaiz
              </p>

              <h2 className="mt-4 text-5xl font-semibold tracking-tight sm:text-7xl">
                OPMMA
              </h2>

              <p className="mt-3 text-xl text-white/45">
                One Person Marketing &amp; Management Agency
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-8 sm:p-10">
              <p className="text-lg leading-8 text-white/70">
                OPMMA is a DaizLab operating framework for enabling one person
                to market, manage and operate a digital business through
                systems, AI, automation and infrastructure.
              </p>

              <div className="mt-8 border-l border-white/20 pl-6">
                <p className="text-sm uppercase tracking-[0.2em] text-white/35">
                  Core philosophy
                </p>

                <p className="mt-2 text-3xl font-semibold">
                  Systems Over Hustle.
                </p>
              </div>

              <Link
                href="/opmma"
                className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
              >
                Explore OPMMA →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IDENTITY */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
          <p className="text-sm uppercase tracking-[0.2em] text-white/35">
            Identity
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Full name", "Oluwadamilare Taofeek Oloyede"],
              ["Public / creator name", "Damiedaiz"],
              ["Founder / architect", "DaizLab"],
              ["Operating framework", "OPMMA"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-5"
              >
                <p className="text-sm text-white/35">{label}</p>
                <p className="mt-2 font-medium leading-6 text-white/85">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/"
              className="rounded-full border border-white/15 px-5 py-3 text-sm hover:bg-white/5"
            >
              DaizLab Home
            </Link>

            <Link
              href="/about"
              className="rounded-full border border-white/15 px-5 py-3 text-sm hover:bg-white/5"
            >
              About DaizLab
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
