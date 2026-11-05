"use client";

import { useState } from "react";

const principles = [
  ["01", "INTENT", "Start with what a human actually means—not what a system merely receives."],
  ["02", "CLARITY", "Information becomes useful when explanation and evaluation make the intended outcome clear."],
  ["03", "ASSIMILATION", "Every person enters from a different environment. Good systems reduce unnecessary cognitive distance."],
  ["04", "VALUE", "Measure contribution against outcome. Remove avoidable imbalance, waste and opacity."],
  ["05", "EXECUTION", "Turn sufficiently clear intention into repeatable, deterministic action."],
];

const equations = [
  { eq: "O = EX", label: "Outcome", text: "Information becomes useful through explanation and evaluation." },
  { eq: "EA = AR", label: "Assimilation", text: "Effort of assimilation must meet the resources available to the participant." },
  { eq: "AI + AInt = +1", label: "Execution", text: "Clear human intention plus an artificial intent engine creates an executable outcome." },
];

const applications = [
  ["AI & Search", "Build knowledge that can be understood, retrieved and evaluated by both people and machines."],
  ["Digital Products", "Translate principles into interfaces, workflows and product experiences that reduce friction."],
  ["Business Systems", "Make intent, decisions, actions and outcomes observable instead of dependent on manual hustle."],
  ["Research", "Develop a living body of concepts around intent, value, assimilation and machine-readable communication."],
];

export default function Home() {
  const [open, setOpen] = useState<number | null>(0);
  const [menu, setMenu] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#070807] text-[#F4F2EA]">
      <style jsx global>{`
        html { scroll-behavior:smooth; background:#070807; }
        body { margin:0; background:#070807; }
        ::selection { background:#d8b56b; color:#070807; }
        .serif { font-family: var(--font-body), Georgia, serif; }
        .display { font-family: var(--font-display), Arial, sans-serif; }
        .hairline { border-color:rgba(255,255,255,.10); }
        .gold { color:#D8B56B; }
        .gold-bg { background:#D8B56B; color:#080806; }
        .green { color:#8FB49A; }
        .panel { background:linear-gradient(145deg,rgba(255,255,255,.055),rgba(255,255,255,.018)); border:1px solid rgba(255,255,255,.10); }
        .grid { background-image:linear-gradient(rgba(216,181,107,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(216,181,107,.045) 1px,transparent 1px); background-size:48px 48px; }
        .noise { background-image:radial-gradient(rgba(255,255,255,.08) .6px,transparent .6px); background-size:7px 7px; opacity:.12; }
        .orb { box-shadow:0 0 160px rgba(216,181,107,.13), 0 0 70px rgba(93,145,112,.10); }
        .fade { animation:fade 900ms ease both; }
        @keyframes fade { from {opacity:0; transform:translateY(12px)} to {opacity:1; transform:none} }
        @media (prefers-reduced-motion:reduce) { * { animation:none !important; scroll-behavior:auto !important; } }
      `}</style>

      <header className="fixed inset-x-0 top-0 z-50 border-b hairline bg-[#070807]/85 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 lg:px-10">
          <a href="/" aria-label="Back to DaizLabRatZ homepage" className="flex items-center gap-3">
            <span className="display flex h-9 w-9 items-center justify-center border border-[#D8B56B]/50 text-sm font-black gold">D</span>
            <span className="display text-sm font-black tracking-[.24em]">DAIZVE</span>
          </a>
          <div className="hidden items-center gap-8 text-[10px] font-bold tracking-[.22em] text-white/55 md:flex">
            <a href="#doctrine" className="transition hover:text-[#D8B56B]">DOCTRINE</a>
            <a href="#equations" className="transition hover:text-[#D8B56B]">EQUATIONS</a>
            <a href="#applications" className="transition hover:text-[#D8B56B]">APPLICATIONS</a>
            <a href="#research" className="transition hover:text-[#D8B56B]">RESEARCH</a>
          </div>
          <a href="#enter" className="hidden rounded-full border border-[#D8B56B]/45 px-5 py-2.5 text-[10px] font-black tracking-[.18em] gold transition hover:bg-[#D8B56B] hover:text-black md:block">ENTER DAIZVE ↗</a>
          <button aria-label="Menu" onClick={() => setMenu(!menu)} className="border border-white/10 px-3 py-2 text-white md:hidden">{menu ? "×" : "☰"}</button>
        </nav>
        {menu && <div className="grid gap-5 border-t hairline bg-[#070807] px-6 py-6 text-xs font-bold tracking-[.2em] md:hidden">
          {[["Doctrine","#doctrine"],["Equations","#equations"],["Applications","#applications"],["Research","#research"]].map(([x,y]) => <a key={y} href={y} onClick={() => setMenu(false)}>{x} ↗</a>)}
        </div>}
      </header>

      <section id="top" className="grid relative min-h-0 lg:min-h-[920px] items-center overflow-hidden pt-28">
        <div className="noise pointer-events-none absolute inset-0" />
        <div className="grid pointer-events-none absolute inset-0 opacity-70" />
        <div className="pointer-events-none absolute left-[50%] top-[16%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#D8B56B]/[.035] blur-[120px]" />
        <div className="mx-auto grid w-full max-w-[1440px] gap-14 px-4 pb-16 sm:px-5 sm:pb-24 lg:grid-cols-[1.15fr_.85fr] lg:px-10">
          <div className="fade relative z-10 max-w-4xl">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#D8B56B]/25 bg-[#D8B56B]/[.06] px-4 py-2 text-[9px] font-black tracking-[.28em] gold">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D8B56B] shadow-[0_0_12px_#D8B56B]" />
              A FRAMEWORK FOR HUMAN INTENT
            </div>
            <h1 className="display text-[clamp(2.15rem,10vw,9rem)] font-black leading-[.9] tracking-[-.075em] break-words">
              INTENT<br />
              <span className="gold">BECOMES</span><br />
              INFRASTRUCTURE.
            </h1>
            <p className="serif mt-9 max-w-2xl text-xl leading-9 text-white/55 sm:text-2xl">
              DaizVe is a philosophy and product architecture for turning clearly communicated human intention into measurable value and executable systems.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#doctrine" className="gold-bg rounded-full px-7 py-4 text-[10px] font-black tracking-[.2em] transition hover:scale-[1.03]">READ THE DOCTRINE ↘</a>
              <a href="#enter" className="rounded-full border border-white/15 px-7 py-4 text-[10px] font-black tracking-[.2em] transition hover:border-[#D8B56B]/50 hover:text-[#D8B56B]">APPLY THE FRAMEWORK ↗</a>
            </div>
            <div className="mt-16 grid max-w-2xl grid-cols-3 border-t hairline pt-5">
              {[["01","INTENT"],["02","VALUE"],["03","EXECUTION"]].map(([n,x]) => <div key={n}><div className="text-[9px] gold">{n}</div><div className="mt-2 text-[9px] font-bold tracking-[.2em] text-white/35">{x}</div></div>)}
            </div>
          </div>

          <div className="relative flex min-h-[360px] sm:min-h-[500px] w-full max-w-full overflow-visible items-center justify-center">
            <div className="orb relative flex h-[min(78vw,330px)] w-[min(78vw,330px)] max-h-[330px] max-w-[330px] items-center justify-center rounded-full border border-[#D8B56B]/25 bg-[#0d100d]/80">
              <div className="absolute inset-8 rounded-full border border-[#8FB49A]/20" />
              <div className="absolute inset-16 rounded-full border border-dashed border-[#D8B56B]/25" />
              <div className="text-center">
                <div className="display text-[110px] font-black leading-none gold">D</div>
                <div className="mt-2 text-[9px] font-black tracking-[.35em] text-[#8FB49A]">DAIZVE</div>
                <div className="mt-4 text-[8px] tracking-[.28em] text-white/30">INTENT → VALUE → EXECUTION</div>
              </div>
            </div>
            {[
              ["AI","CLARITY", "left-0 top-[8%] sm:top-[16%]"],
              ["AInt","EXECUTION", "right-0 top-[18%] sm:top-[25%]"],
              ["Ve","VALUE", "right-[2%] bottom-[8%] sm:right-[6%] sm:bottom-[16%]"],
              ["EA","ASSIMILATION", "left-[2%] bottom-[5%] sm:left-[4%] sm:bottom-[11%]"],
            ].map(([a,b,pos]) => <div key={a} className={`panel absolute ${pos} rounded-xl px-4 py-3 backdrop-blur-xl`}><div className="display text-lg font-black gold">{a}</div><div className="mt-1 text-[7px] font-bold tracking-[.25em] text-white/35">{b}</div></div>)}
          </div>
        </div>
      </section>

      <section className="border-y hairline bg-white/[.018] px-5 py-9 lg:px-10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 text-[10px] font-bold tracking-[.2em] text-white/35 md:flex-row md:items-center md:justify-between">
          <span>DAIZVE / HUMAN INTENT ARCHITECTURE</span>
          <span className="gold">DAMIEDAIZ DISCOVERED IT. DAIZBABA PRODUCTIZED IT. DAIZ EXPRESSES IT.</span>
        </div>
      </section>

      <section id="doctrine" className="px-5 py-28 lg:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-3xl">
            <div className="text-[10px] font-black tracking-[.3em] gold">THE DOCTRINE</div>
            <h2 className="display mt-6 text-5xl font-black tracking-[-.055em] sm:text-7xl">The problem is not<br /><span className="serif font-normal italic text-white/55">information.</span></h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/45">
              Humanity begins with different contexts. The same information can produce different outcomes because people carry different environments, exposure and available resources. DaizVe treats that gap as an architectural problem.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden border hairline bg-white/10 md:grid-cols-5">
            {principles.map(([n,t,d]) => <article key={n} className="bg-[#070807] p-7 transition hover:bg-[#0c0f0c] sm:p-9">
              <div className="text-[9px] gold">{n}</div>
              <h3 className="display mt-12 text-xl font-black tracking-[.05em]">{t}</h3>
              <p className="mt-4 text-sm leading-7 text-white/40">{d}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section id="equations" className="bg-[#0c0f0c] px-5 py-28 lg:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <div className="text-[10px] font-black tracking-[.3em] gold">THE CALCULUS OF ASSIMILATION</div>
              <h2 className="display mt-6 text-5xl font-black tracking-[-.05em] sm:text-7xl">Make the invisible<br /><span className="gold">computable.</span></h2>
              <p className="mt-7 max-w-md text-base leading-8 text-white/45">DaizVe uses equations as conceptual instruments: a language for discussing where communication, assimilation and execution gain or lose value.</p>
            </div>
            <div className="grid gap-3">
              {equations.map((x,i) => <div key={x.eq} className="panel grid gap-6 rounded-2xl p-7 sm:grid-cols-[.6fr_1.4fr] sm:items-center sm:p-9">
                <div className="display text-4xl font-black tracking-[-.04em] gold sm:text-6xl">{x.eq}</div>
                <div><div className="text-[9px] font-black tracking-[.25em] text-[#8FB49A]">{x.label}</div><p className="mt-3 max-w-xl text-sm leading-7 text-white/45">{x.text}</p></div>
              </div>)}
              <div className="mt-2 border-l border-[#D8B56B]/40 pl-5 text-[10px] leading-6 text-white/30">These are conceptual relationships within the DaizVe framework, not established scientific laws or empirical equations.</div>
            </div>
          </div>
        </div>
      </section>

      <section id="applications" className="px-5 py-28 lg:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div><div className="text-[10px] font-black tracking-[.3em] gold">FROM DOCTRINE TO PRODUCT</div><h2 className="display mt-5 text-5xl font-black tracking-[-.055em] sm:text-7xl">Where DaizVe<br /><span className="serif font-normal italic text-white/50">becomes useful.</span></h2></div>
            <p className="max-w-sm text-sm leading-7 text-white/40">The framework is designed to move beyond essays. Its purpose is to produce clearer products, systems, research and economic interfaces.</p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {applications.map(([t,d],i) => <article key={t} className="group panel rounded-3xl p-8 sm:p-11">
              <div className="flex justify-between"><span className="text-[9px] gold">0{i+1}</span><span className="text-white/20 transition group-hover:text-[#D8B56B]">↗</span></div>
              <h3 className="display mt-16 text-3xl font-black">{t}</h3>
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/40">{d}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section id="research" className="bg-[#D8B56B] px-5 py-24 text-[#080806] lg:px-10">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div>
            <div className="text-[10px] font-black tracking-[.3em]">THE RESEARCH LAYER</div>
            <h2 className="display mt-6 text-6xl font-black leading-[.9] tracking-[-.06em] sm:text-8xl">A living<br />knowledge<br />system.</h2>
          </div>
          <div>
            <p className="max-w-xl text-lg leading-8 text-black/65">DaizVe is intended to become a continuously expanding body of explanations, definitions, examples and applications around human intent and machine execution.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Definitions","Research notes","Case studies","Implementation patterns"].map(x => <div key={x} className="rounded-xl border border-black/15 bg-black/[.04] px-4 py-4 text-xs font-black tracking-[.1em]">{x}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-28 lg:px-10">
        <div className="mx-auto max-w-[1000px]">
          <div className="text-center">
            <div className="text-[10px] font-black tracking-[.3em] gold">FREQUENT QUESTIONS</div>
            <h2 className="display mt-5 text-5xl font-black tracking-[-.05em] sm:text-7xl">Understand the idea.</h2>
          </div>
          <div className="mt-12 divide-y hairline border-y hairline">
            {[
              ["What is DaizVe?", "A conceptual framework and product architecture for examining human intent, communication, assimilation, value and deterministic execution."],
              ["Is DaizVe an AI model?", "No. DaizVe is an architecture for thinking about how human intention can become clearer, more machine-readable and more executable."],
              ["What is AInt?", "Artificial Intent Engine: the execution concept inside DaizVe for translating sufficiently defined intention into system actions."],
              ["Who is DaizVe for?", "Builders, researchers, founders, product teams and anyone designing systems where understanding and execution need to connect."],
            ].map(([q,a],i) => <button key={q} onClick={() => setOpen(open===i ? null : i)} className="w-full py-6 text-left">
              <div className="flex items-center justify-between gap-6"><span className="display text-lg font-bold">{q}</span><span className="gold text-xl">{open===i ? "−" : "+"}</span></div>
              {open===i && <p className="mt-4 max-w-3xl text-sm leading-7 text-white/40">{a}</p>}
            </button>)}
          </div>
        </div>
      </section>

      <section id="enter" className="px-5 pb-28 lg:px-10">
        <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[2rem] border border-[#D8B56B]/25 bg-[#0e120f] p-8 sm:p-14 lg:p-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_.65fr] lg:items-end">
            <div>
              <div className="text-[10px] font-black tracking-[.3em] gold">BUILD WITH THE FRAMEWORK</div>
              <h2 className="display mt-6 text-5xl font-black tracking-[-.055em] sm:text-8xl">Don't just<br /><span className="gold">describe intent.</span><br />engineer it.</h2>
            </div>
            <div>
              <p className="text-base leading-8 text-white/45">Explore the research, collaborate on an application or bring the framework into a product that needs better communication between humans and machines.</p>
              <a href="mailto:daizsign@gmail.com?subject=DaizVe%20Framework" className="gold-bg mt-8 inline-flex rounded-full px-7 py-4 text-[10px] font-black tracking-[.2em]">START A DAIZVE CONVERSATION ↗</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t hairline px-5 py-10 lg:px-10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div><div className="display text-sm font-black tracking-[.25em]">DAIZVE</div><div className="mt-2 text-[9px] tracking-[.18em] text-white/25">INTENT → VALUE → EXECUTION</div></div>
          <div className="flex flex-wrap gap-6 text-[9px] font-bold tracking-[.18em] text-white/35"><a href="#doctrine">Doctrine</a><a href="#equations">Equations</a><a href="#applications">Applications</a><a href="#research">Research</a></div>
          <div className="text-[9px] tracking-[.16em] text-white/20">© {new Date().getFullYear()} DAIZVE / DAIZLABRATZ</div>
        </div>
      </footer>
    </main>
  );
}
