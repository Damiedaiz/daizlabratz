
"use client";

import { useState } from "react";

const framework = [
  {
    letter: "M",
    name: "Money",
    color: "#D9B76E",
    title: "The liquidity layer.",
    description:
      "Money coordinates exchange, provides liquidity and measures economic transactions. It remains important, but it is one dimension of value.",
    examples: ["Capital", "Liquidity", "Exchange", "Investment"],
  },
  {
    letter: "K",
    name: "Knowledge",
    color: "#85C9B0",
    title: "The understanding layer.",
    description:
      "Knowledge represents accumulated expertise, contextual understanding, intellectual property and the ability to interpret complex information.",
    examples: ["Expertise", "Research", "Experience", "IP"],
  },
  {
    letter: "D",
    name: "Data",
    color: "#76B8E8",
    title: "The information layer.",
    description:
      "Data provides the raw material for intelligent systems. Its quality, provenance, accessibility and governance influence what can be created.",
    examples: ["Datasets", "Signals", "Records", "Context"],
  },
  {
    letter: "I",
    name: "Intelligence",
    color: "#B69AF5",
    title: "The reasoning layer.",
    description:
      "Intelligence transforms information into decisions, predictions, strategies and useful outcomes through human and artificial cognition.",
    examples: ["AI", "Reasoning", "Analysis", "Decision-making"],
  },
  {
    letter: "A",
    name: "Agency",
    color: "#8BE4A9",
    title: "The execution layer.",
    description:
      "Agency converts intent into action. Autonomous agents, workflows and robotics execute objectives within defined permissions and constraints.",
    examples: ["AI Agents", "Automation", "Robotics", "E2E Exchange"],
  },
];

const pillars = [
  {
    number: "01",
    title: "Systems Architecture",
    description:
      "Design interconnected digital systems that solve real operational problems.",
    icon: "⌘",
  },
  {
    number: "02",
    title: "Artificial Intelligence",
    description:
      "Understand, orchestrate and engineer intelligent systems beyond simple prompting.",
    icon: "◈",
  },
  {
    number: "03",
    title: "Digital Infrastructure",
    description:
      "Build production-ready applications, APIs, databases and autonomous workflows.",
    icon: "⌬",
  },
  {
    number: "04",
    title: "Computational Economics",
    description:
      "Explore how AI, data, agency and networks transform the architecture of value.",
    icon: "∑",
  },
];

const research = [
  {
    category: "ECONOMIC RESEARCH",
    title: "The Future Isn't Cashless. It's Intent-Driven.",
    description:
      "A mathematical exploration of AI, autonomous commerce, E2E Exchange and the possible evolution of economic value.",
    link:
      "https://damiedaiz.medium.com/the-future-isnt-cashless-it-s-intent-driven-71ff1be9b0f5",
    tag: "INTENT ECONOMY",
  },
];

export default function Home() {
  const [activeFramework, setActiveFramework] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const active = framework[activeFramework];

  return (
    <main className="min-h-screen overflow-hidden bg-[#080C0B] text-[#F2F3EE] selection:bg-[#A3E8B6] selection:text-black">

      {/* GLOBAL STYLE */}
      <style jsx global>{`
        html { scroll-behavior: smooth; }
        body { background: #080C0B; }
        .grid-bg {
          background-image:
            linear-gradient(rgba(126, 207, 153, .045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(126, 207, 153, .045) 1px, transparent 1px);
          background-size: 44px 44px;
        }
        .glow {
          box-shadow: 0 0 80px rgba(87, 204, 133, .10);
        }
        .glass {
          background: rgba(255,255,255,.025);
          backdrop-filter: blur(18px);
          border: 1px solid rgba(255,255,255,.09);
        }
        .gradient-text {
          background: linear-gradient(100deg, #E9F4E9, #8BE5A8, #D5BC81);
          -webkit-background-clip: text;
          color: transparent;
        }
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .float-animation { animation: float 7s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: .01ms !important;
            transition-duration: .01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      {/* NAVIGATION */}
      <header className="fixed top-0 z-50 w-full border-b border-white/[0.07] bg-[#080C0B]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">

          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-400/10 text-xl font-black text-emerald-300">
              D
            </div>
            <div>
              <div className="text-sm font-black tracking-[.19em]">
                DAIZLAB<span className="text-emerald-400">RATZ</span>
              </div>
              <div className="text-[9px] tracking-[.28em] text-neutral-500">
                BUILDER COMMUNITY
              </div>
            </div>
          </a>

          <div className="hidden items-center gap-8 text-xs font-semibold text-neutral-400 md:flex">
            <a href="#framework" className="hover:text-emerald-300">M.K.D.I.A.</a>
            <a href="#systems" className="hover:text-emerald-300">Our Systems</a>
            <a href="#academy" className="hover:text-emerald-300">Academy</a>
            <a href="#research" className="hover:text-emerald-300">Research</a>
          </div>

          <a
            href="#academy"
            className="hidden rounded-full bg-[#A5E9B6] px-5 py-3 text-xs font-black text-[#07110A] transition hover:bg-white md:block"
          >
            START BUILDING ↗
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            className="rounded-lg border border-white/10 px-3 py-2 text-xl md:hidden"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </nav>

        {menuOpen && (
          <div className="grid gap-5 border-t border-white/10 bg-[#080C0B] px-6 py-7 text-sm md:hidden">
            {[
              ["M.K.D.I.A.", "#framework"],
              ["Our Systems", "#systems"],
              ["Academy", "#academy"],
              ["Research", "#research"],
            ].map(([label, link]) => (
              <a key={link} href={link} onClick={() => setMenuOpen(false)}>
                {label} ↗
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="grid-bg relative flex min-h-[780px] items-center pt-32"
      >
        <div className="pointer-events-none absolute -right-40 top-20 h-[550px] w-[550px] rounded-full bg-emerald-500/[0.09] blur-[140px]" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-blue-500/[0.05] blur-[130px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-5 pb-24 lg:grid-cols-[1.15fr_.85fr] lg:px-10">

          <div>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-2 text-[10px] font-bold tracking-[.2em] text-emerald-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              SYSTEMS OVER HUSTLE
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-[-.055em] sm:text-7xl lg:text-[88px]">
              BUILD BEYOND
              <span className="gradient-text block">THE HUMAN</span>
              LIMIT.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-neutral-400 sm:text-lg">
              We are exploring the architecture of an intelligent world.
              Think in systems. Engineer with AI. Build infrastructure
              that turns intent into execution.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#framework"
                className="rounded-full bg-[#A5E9B6] px-7 py-4 text-sm font-black text-black transition hover:scale-105"
              >
                EXPLORE THE FRAMEWORK ↗
              </a>
              <a
                href="#academy"
                className="rounded-full border border-white/15 px-7 py-4 text-sm font-bold transition hover:border-emerald-300 hover:text-emerald-300"
              >
                ENTER THE LAB
              </a>
            </div>

            <div className="mt-16 flex flex-wrap gap-8 border-t border-white/10 pt-8">
              {[
                ["01", "THINK"],
                ["02", "ENGINEER"],
                ["03", "AUTOMATE"],
              ].map(([n, t]) => (
                <div key={n}>
                  <div className="text-xs text-emerald-400">{n}</div>
                  <div className="mt-1 text-xs font-bold tracking-[.2em] text-neutral-400">
                    {t}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* COMPUTATIONAL HERO VISUAL */}
          <div className="relative mx-auto flex aspect-square w-full max-w-[490px] items-center justify-center">

            <div className="absolute inset-5 rounded-full border border-emerald-300/10" />
            <div className="absolute inset-12 rounded-full border border-emerald-300/10" />
            <div className="absolute inset-[76px] rounded-full border border-dashed border-emerald-300/20" />

            <div className="absolute h-[75%] w-[75%] rounded-full bg-emerald-400/[0.08] blur-[65px]" />

            <div className="float-animation relative z-10 flex h-48 w-48 flex-col items-center justify-center rounded-[36px] border border-emerald-300/30 bg-[#10221A] shadow-[0_0_100px_rgba(65,190,110,.17)] sm:h-56 sm:w-56">
              <span className="text-7xl font-black tracking-tighter gradient-text">D</span>
              <span className="mt-1 text-[9px] font-bold tracking-[.3em] text-emerald-200">
                INTENT ENGINE
              </span>
            </div>

            {[
              ["M", "MONEY", "top-[5%] left-[42%]"],
              ["K", "KNOWLEDGE", "top-[37%] right-[-1%]"],
              ["D", "DATA", "bottom-[5%] right-[19%]"],
              ["I", "INTELLIGENCE", "bottom-[17%] left-[1%]"],
              ["A", "AGENCY", "top-[31%] left-[-1%]"],
            ].map(([letter, label, position]) => (
              <div
                key={letter}
                className={`absolute z-20 ${position} glass flex items-center gap-2 rounded-xl px-3 py-3`}
              >
                <span className="text-lg font-black text-emerald-300">{letter}</span>
                <span className="text-[8px] font-bold tracking-widest text-neutral-300">
                  {label}
                </span>
              </div>
            ))}

            <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] tracking-[.35em] text-neutral-600">
              INTELLIGENCE IS INFRASTRUCTURE
            </div>
          </div>
        </div>
      </section>

      {/* IDENTITY */}
      <section className="border-y border-white/[0.07] bg-white/[0.015] px-5 py-12">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {[
            ["01 / PHILOSOPHY", "Systems over hustle."],
            ["02 / METHODOLOGY", "Intent before execution."],
            ["03 / OBJECTIVE", "Build infrastructure, not dependencies."],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="text-[9px] font-bold tracking-[.2em] text-emerald-400">{label}</p>
              <h2 className="mt-3 text-xl font-bold tracking-tight">{value}</h2>
            </div>
          ))}
        </div>
      </section>

      {/* M.K.D.I.A. FRAMEWORK */}
      <section id="framework" className="px-5 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-[.3em] text-emerald-400">
              THE DAIZLABRATZ KNOWLEDGE SYSTEM
            </p>
            <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl">
              Five dimensions.
              <span className="gradient-text block">One value architecture.</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-neutral-400">
              M.K.D.I.A. is our proposed conceptual framework for examining
              value creation in an increasingly intelligent and autonomous economy.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-[.8fr_1.2fr]">

            <div className="grid grid-cols-5 gap-2 lg:grid-cols-1">
              {framework.map((item, index) => (
                <button
                  key={item.letter}
                  onClick={() => setActiveFramework(index)}
                  aria-pressed={activeFramework === index}
                  className={`rounded-2xl border p-3 text-left transition sm:p-5 ${
                    activeFramework === index
                      ? "border-emerald-300/50 bg-emerald-300/[0.08]"
                      : "border-white/10 bg-white/[0.02] hover:border-white/30"
                  }`}
                >
                  <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-5">
                    <span
                      className="text-3xl font-black sm:text-5xl"
                      style={{ color: item.color }}
                    >
                      {item.letter}
                    </span>
                    <span className="text-[9px] font-bold tracking-widest text-neutral-400 sm:text-sm">
                      {item.name.toUpperCase()}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div
              className="glass glow flex min-h-[350px] flex-col justify-between rounded-3xl p-7 sm:p-12"
              aria-live="polite"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-[.2em] text-neutral-500">
                    DIMENSION / 0{activeFramework + 1}
                  </span>
                  <span className="text-5xl font-black" style={{ color: active.color }}>
                    {active.letter}
                  </span>
                </div>

                <h3 className="mt-8 text-3xl font-black sm:text-5xl">
                  {active.name}
                </h3>
                <p className="mt-3 text-lg text-emerald-300">
                  {active.title}
                </p>
                <p className="mt-6 max-w-xl leading-8 text-neutral-400">
                  {active.description}
                </p>
              </div>

              <div className="mt-10">
                <p className="mb-4 text-[9px] font-bold tracking-[.2em] text-neutral-500">
                  ASSOCIATED COMPONENTS
                </p>
                <div className="flex flex-wrap gap-2">
                  {active.examples.map((example) => (
                    <span
                      key={example}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-neutral-300"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-xs leading-6 text-neutral-500">
            M.K.D.I.A. is a conceptual framework, not a validated economic law.
            Its components interact; they are not assumed to have equal or
            independently additive monetary values.
          </p>
        </div>
      </section>

      {/* SYSTEMS */}
      <section id="systems" className="bg-[#0D1411] px-5 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold tracking-[.3em] text-emerald-400">
                WHAT WE EXPLORE
              </p>
              <h2 className="mt-5 text-4xl font-black sm:text-6xl">
                The architecture
                <span className="gradient-text block">of intelligent systems.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-neutral-400">
              We connect engineering, computational intelligence and
              economic thinking to explore what becomes possible.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <article
                key={pillar.number}
                className="group rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 transition hover:-translate-y-1 hover:border-emerald-300/30 hover:bg-emerald-300/[0.035]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs text-emerald-400">{pillar.number}</span>
                  <span className="text-3xl text-emerald-300">{pillar.icon}</span>
                </div>
                <h3 className="mt-12 text-2xl font-bold">{pillar.title}</h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-neutral-400">
                  {pillar.description}
                </p>
                <div className="mt-8 text-xs font-bold tracking-widest text-emerald-300">
                  EXPLORE DISCIPLINE ↗
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* E2E */}
      <section className="px-5 py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold tracking-[.3em] text-emerald-400">
              OUR EXCHANGE MODEL
            </p>
            <h2 className="mt-5 text-4xl font-black sm:text-6xl">
              From human
              <span className="gradient-text block">transactions to E2E.</span>
            </h2>
            <p className="mt-7 leading-8 text-neutral-400">
              Entity-to-Entity Exchange explores how people, organizations
              and autonomous agents can coordinate the exchange of resources,
              capabilities and services.
            </p>
            <p className="mt-5 leading-8 text-neutral-400">
              Money remains useful. But machine-readable intent, verifiable
              trust, data, compute and execution capabilities can expand
              the architecture of digital commerce.
            </p>
            <a
              href="#research"
              className="mt-9 inline-flex rounded-full border border-emerald-300/30 px-6 py-4 text-xs font-bold text-emerald-300 transition hover:bg-emerald-300 hover:text-black"
            >
              EXPLORE THE RESEARCH ↗
            </a>
          </div>

          <div className="glass glow rounded-3xl p-6 sm:p-10">
            <div className="text-center text-xs tracking-[.25em] text-neutral-500">
              THE E2E EXCHANGE MODEL
            </div>
            <div className="mt-10 flex items-center justify-center gap-4">
              <div className="flex h-24 w-24 flex-col items-center justify-center rounded-2xl border border-emerald-300/30 bg-emerald-300/[0.06]">
                <span className="text-3xl">◉</span>
                <span className="mt-2 text-[9px]">ENTITY A</span>
              </div>
              <div className="text-3xl text-emerald-300">↔</div>
              <div className="flex h-24 w-24 flex-col items-center justify-center rounded-2xl border border-blue-300/30 bg-blue-300/[0.06]">
                <span className="text-3xl">◈</span>
                <span className="mt-2 text-[9px]">ENTITY B</span>
              </div>
            </div>

            <div className="my-10 h-px bg-white/10" />

            <div className="grid grid-cols-2 gap-3">
              {["INTENT", "KNOWLEDGE", "COMPUTE", "DATA", "TRUST", "EXECUTION"].map((item) => (
                <div key={item} className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 text-center text-[10px] font-bold tracking-widest text-neutral-400">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACADEMY */}
      <section id="academy" className="bg-[#A5E9B6] px-5 py-24 text-[#08100A] lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_.8fr] lg:items-center">
          <div>
            <p className="text-xs font-black tracking-[.3em]">
              DAIZLABRATZ / LEARNING INFRASTRUCTURE
            </p>
            <h2 className="mt-6 text-5xl font-black tracking-[-.05em] sm:text-7xl">
              STOP JUST
              <span className="block">LEARNING.</span>
              <span className="text-[#477D58]">START BUILDING.</span>
            </h2>
            <p className="mt-7 max-w-xl leading-8 text-black/65">
              The 21-Day Frontend Sprint is a practical introduction
              to building real digital products. Learn through execution,
              structured challenges and progressive project development.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/DaizLabRatZ/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#08100A] px-7 py-4 text-xs font-black text-white transition hover:bg-[#243B2B]"
              >
                JOIN THE COMMUNITY ↗
              </a>
              <a
                href="#contact"
                className="rounded-full border border-black/20 px-7 py-4 text-xs font-black"
              >
                EXPLORE MENTORSHIP
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 bg-[#0B1710] p-7 text-white sm:p-10">
            <div className="text-xs tracking-[.25em] text-emerald-300">
              THE 21-DAY SPRINT
            </div>
            <div className="mt-8 space-y-7">
              {[
                ["WEEK 01", "Foundation", "HTML, CSS, responsive design and interface thinking."],
                ["WEEK 02", "Engineering", "JavaScript, React, components and application logic."],
                ["WEEK 03", "Deployment", "Next.js, GitHub, Vercel and production thinking."],
              ].map(([week, title, description]) => (
                <div key={week} className="border-b border-white/10 pb-6 last:border-0">
                  <div className="text-[10px] tracking-widest text-emerald-300">{week}</div>
                  <h3 className="mt-2 text-2xl font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section id="research" className="px-5 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold tracking-[.3em] text-emerald-400">
            IDEAS THAT CHALLENGE THE PRESENT
          </p>
          <h2 className="mt-5 text-4xl font-black sm:text-6xl">
            Research the
            <span className="gradient-text block">next architecture.</span>
          </h2>

          <div className="mt-12 grid gap-6">
            {research.map((item) => (
              <article
                key={item.title}
                className="glass rounded-3xl p-7 transition hover:border-emerald-300/30 sm:p-12"
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span className="text-[10px] tracking-[.2em] text-emerald-300">
                    {item.category}
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-2 text-[9px] tracking-widest text-neutral-400">
                    {item.tag}
                  </span>
                </div>
                <h3 className="mt-8 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
                  {item.title}
                </h3>
                <p className="mt-6 max-w-2xl leading-8 text-neutral-400">
                  {item.description}
                </p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-9 inline-flex rounded-full bg-white px-6 py-4 text-xs font-black text-black transition hover:bg-emerald-300"
                >
                  READ THE RESEARCH ↗
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-5 pb-28 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-3xl border border-emerald-300/20 bg-[#102019] px-7 py-20 text-center sm:px-16">
          <p className="text-xs font-bold tracking-[.3em] text-emerald-300">
            THE NEXT SYSTEM STARTS WITH AN IDEA
          </p>
          <h2 className="mx-auto mt-7 max-w-4xl text-4xl font-black sm:text-7xl">
            DON'T JUST WATCH
            <span className="gradient-text block">THE FUTURE HAPPEN.</span>
            BUILD IT.
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-neutral-400">
            Join the conversation. Explore the frameworks.
            Build something that matters.
          </p>
          <a
            href="https://www.instagram.com/DaizLabRatZ/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex rounded-full bg-[#A5E9B6] px-8 py-5 text-xs font-black text-black transition hover:scale-105"
          >
            CONNECT WITH DAIZLABRATZ ↗
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-5 py-10 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <div className="text-sm font-black tracking-[.2em]">
              DAIZLAB<span className="text-emerald-400">RATZ</span>
            </div>
            <p className="mt-2 text-xs text-neutral-600">
              Systems over hustle. Intelligence into infrastructure.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-xs text-neutral-400">
            <a href="#framework" className="hover:text-emerald-300">Framework</a>
            <a href="#academy" className="hover:text-emerald-300">Academy</a>
            <a href="#research" className="hover:text-emerald-300">Research</a>
            <a href="https://www.instagram.com/DaizLabRatZ/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300">Instagram ↗</a>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/[0.06] pt-6 text-[10px] text-neutral-600">
          © {new Date().getFullYear()} DaizLabRatZ. Independent builder community.
          All rights reserved.
        </div>
      </footer>

    </main>
  );
}
