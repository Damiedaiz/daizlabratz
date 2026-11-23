"use client";

const stories = [
  {
    date: "NOV 17",
    tag: "MODELS",
    title: "OpenAI pushed GPT-6.2 Astra and Sol",
    body:
      "OpenAI released GPT-6.2 Astra and Sol, with a stronger focus on professional work, coding and computer-use tasks. The important shift is not simply another benchmark jump: models are increasingly being positioned as work engines that can operate across longer, more structured workflows.",
    source: "AI weekly roundup",
    href: "https://aimap.page/en/news/weekly/2026-w47/",
  },
  {
    date: "NOV 17",
    tag: "DEVELOPMENT",
    title: "Microsoft moved deeper into model competition",
    body:
      "Microsoft announced MAI Code 2 and other AI models at Ignite, targeting coding and cybersecurity workloads. The direction is clear: specialised models are becoming a serious part of the AI stack, especially where cost, speed and domain performance matter.",
    source: "Reuters",
    href: "https://www.reuters.com/legal/litigation/microsoft-unveils-ai-models-coding-cybersecurity-it-takes-anthropic-openai-2026-11-17/",
  },
  {
    date: "NOV 18–19",
    tag: "AGENTS",
    title: "AI moved further from chat into computer use",
    body:
      "Google expanded computer-use capabilities around Gemini, while OpenAI published research showing agent use among its own researchers had increased sharply. This is the bigger story: AI is increasingly being evaluated by what it can actually do inside a workflow, not only by what it can write in a chat box.",
    source: "JARRUS weekly review",
    href: "https://thejarrus.com/en/week/2026-11-16/",
  },
  {
    date: "NOV 19",
    tag: "INFRASTRUCTURE",
    title: "Google highlighted memory for AI agents",
    body:
      "Google Cloud's latest agent work focused on long-term memory and keeping context manageable. That matters because useful agents cannot simply resend an entire conversation forever. Production AI needs memory, retrieval, context control and cost discipline.",
    source: "Google Cloud",
    href: "https://cloud.google.com/blog/topics/inside-google-cloud/whats-new-google-cloud",
  },
  {
    date: "NOV 20",
    tag: "RELIABILITY",
    title: "The AI conversation became less about hype and more about control",
    body:
      "This week's reporting highlighted a growing tension around autonomous systems: businesses want agents that can act, but they also need boundaries, monitoring and accountability. The next stage of AI therefore looks increasingly like systems engineering rather than prompt engineering.",
    source: "O'Reilly Radar",
    href: "https://www.oreilly.com/radar/this-week-in-ai-ais-next-reality-check/",
  },
  {
    date: "NOV 21",
    tag: "RESEARCH",
    title: "AI research reached into new scientific territory",
    body:
      "A widely discussed claim involving Claude and a formal Lean proof of the Riemann Hypothesis showed how AI-assisted mathematics is moving into territory where machine-verifiable reasoning can matter. The claim and its interpretation deserve careful scrutiny, but the direction itself is significant: AI is increasingly being paired with formal tools rather than left to generate unchecked answers.",
    source: "Weekly AI archive",
    href: "https://news-insight-ai.web.app/en/archive/2026-11",
  },
];

export default function AIUpdate1() {
  return (
    <main className="min-h-screen bg-[#080C0B] text-[#F2F3EE] selection:bg-[#A3E8B6] selection:text-black">
      <style jsx global>{`
        html { scroll-behavior: smooth; }
        body { background: #080C0B; }
        .grid-bg {
          background-image:
            linear-gradient(rgba(126, 207, 153, .045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(126, 207, 153, .045) 1px, transparent 1px);
          background-size: 44px 44px;
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
      `}</style>

      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#080C0B]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-400/10 text-sm font-black text-emerald-300">DZ</span>
            <span className="font-semibold tracking-tight">DaizLabRatZ<span className="text-emerald-300">.Online</span></span>
          </a>
          <a href="/learn" className="text-sm text-white/60 transition hover:text-white">Learn</a>
        </nav>
      </header>

      <section className="grid-bg relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 pb-20 pt-20 lg:px-8 lg:pb-28 lg:pt-28">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-bold tracking-[0.28em] text-emerald-300">AI UPDATE / 01 · NOV 16–22, 2026</p>
            <h1 className="text-4xl font-black leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              AI is moving from
              <span className="gradient-text"> answers to action.</span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/65 sm:text-xl">
              Last week was another signal that the AI race is changing shape. Better models still matter, but the bigger movement is toward agents, computer use, memory, specialised models and systems that can execute real work.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-xs text-white/45">
              <span className="rounded-full border border-white/10 px-4 py-2">7-day field note</span>
              <span className="rounded-full border border-white/10 px-4 py-2">Models + Agents + Infrastructure</span>
              <span className="rounded-full border border-white/10 px-4 py-2">DaizLabRatZ Learn</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <aside className="h-fit lg:sticky lg:top-24">
            <p className="text-xs font-bold tracking-[0.22em] text-emerald-300">THE SIGNAL</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight">The important update is not one model.</h2>
            <p className="mt-5 leading-7 text-white/55">
              The industry is building a new operating layer around intelligence: models that can reason, remember context, use computers, call tools and hand work back to people.
            </p>
          </aside>

          <div className="space-y-5">
            {stories.map((story) => (
              <article key={story.title} className="glass rounded-3xl p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold tracking-[0.2em]">
                  <span className="text-emerald-300">{story.date}</span>
                  <span className="text-white/25">/</span>
                  <span className="text-white/40">{story.tag}</span>
                </div>
                <h3 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">{story.title}</h3>
                <p className="mt-4 max-w-3xl leading-7 text-white/60">{story.body}</p>
                <a
                  href={story.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-bold tracking-[0.12em] text-emerald-300 hover:text-emerald-200"
                >
                  SOURCE: {story.source.toUpperCase()} ↗
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.07] bg-white/[0.015]">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
          <p className="text-xs font-bold tracking-[0.22em] text-emerald-300">DAIZLABRATZ TAKE</p>
          <div className="mt-5 max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              The competitive advantage is shifting from prompting to orchestration.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/60">
              If 2025 was about learning how to talk to AI, 2026 is increasingly about designing the environment in which AI can work. That means data access, permissions, memory, APIs, evaluation, security, human checkpoints and reliable execution.
            </p>
            <p className="mt-5 text-lg leading-8 text-white/60">
              For builders, SMEs and digital operators, the question is becoming simpler: <span className="text-white">what work can your system reliably delegate to intelligence?</span>
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="rounded-3xl border border-emerald-300/15 bg-emerald-300/[0.04] p-7 sm:p-10">
          <p className="text-xs font-bold tracking-[0.22em] text-emerald-300">NEXT UPDATE</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight">Don't just watch the AI race. Learn the architecture.</h2>
          <p className="mt-4 max-w-2xl leading-7 text-white/55">
            DaizLabRatZ Learn tracks the practical layer beneath the headlines: what changed, why it matters, and what builders can actually do with it.
          </p>
          <a href="/learn" className="mt-7 inline-flex rounded-full bg-[#F2F3EE] px-6 py-3 text-sm font-bold text-[#080C0B] transition hover:bg-emerald-300">
            Explore Learn →
          </a>
        </div>
      </section>

      <footer className="border-t border-white/[0.07] px-5 py-8 text-center text-xs text-white/35">
        © 2026 DaizLabRatZ.Online · AI Update 01 · Published November 23, 2026
      </footer>
    </main>
  );
}
