import { AiShell, LessonCard, MissionNote, lessons } from "@/components/AiAcademy";

export const metadata = {
  title: "AI Academy Gateway | DaizLabRatZ",
  description: "The seven-page DaizLabRatZ AI Academy gateway: AI foundations, chat systems, hallucinations, prompting, agents and agentic frameworks.",
};

export default function AiAcademyGateway() {
  return (
    <AiShell>
      <section className="relative overflow-hidden rounded-3xl border border-line bg-panel px-6 py-12 sm:px-12 sm:py-16">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-emerald/10 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-gold/5 blur-3xl" />

        <div className="relative max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold tracking-[0.25em] text-emerald">
            <span>DAIZLAB STAR TREK</span>
            <span className="text-gold">///</span>
            <span>HUMOP</span>
            <span className="text-ink/30">///</span>
            <span>07-PAGE GATEWAY</span>
          </div>

          <h1 className="mt-6 text-5xl font-extrabold sm:text-8xl">
            AI, without the mystique.
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-ink/65">
            One gateway. Seven pages. Start with what AI actually is, go underneath
            the chat box, understand failure, learn to prompt, then cross the line
            from prompts into agents and agentic systems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-emerald/40 px-4 py-2 text-xs font-bold tracking-widest text-emerald">
              07 PAGES
            </span>
            <span className="rounded-full border border-gold/40 px-4 py-2 text-xs font-bold tracking-widest text-gold">
              NO LOGIN
            </span>
            <span className="rounded-full border border-line px-4 py-2 text-xs font-bold tracking-widest text-ink/50">
              HUMAN + MACHINE
            </span>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-emerald">THE ROUTE</p>
            <h2 className="mt-2 text-3xl font-bold">Choose your entry point.</h2>
          </div>
          <p className="max-w-md text-sm text-ink/50">
            The gateway is page one of the experience. The six lessons below complete
            the route.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {lessons.map((lesson, index) => (
            <LessonCard key={lesson.href} lesson={lesson} index={index} />
          ))}
        </div>
      </section>

      <MissionNote>
        <strong className="text-ink">Mission rule:</strong> never confuse an
        impressive interface with an intelligent oracle. A model can be
        extraordinarily useful while still being probabilistic, fallible and
        dependent on the system around it. Learn the mechanism, understand the
        failure modes, then build with control.
      </MissionNote>
    </AiShell>
  );
}
