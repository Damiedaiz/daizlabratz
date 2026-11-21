import { AiShell, LessonCard, MissionNote, lessons } from "@/components/AiAcademy";

export const metadata = {
  title: "AI Academy | DaizLabRatZ",
  description: "A free, login-free field guide to AI, LLMs, prompting, hallucinations and agents.",
};

export default function AiAcademy() {
  return (
    <AiShell>
      <section className="relative overflow-hidden rounded-3xl border border-line bg-panel px-6 py-12 sm:px-12 sm:py-16">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-emerald/10 blur-3xl" />
        <div className="relative max-w-4xl">
          <div className="flex items-center gap-3 text-xs font-bold tracking-[0.25em] text-emerald">
            <span>DAIZLAB STAR TREK</span><span className="text-gold">///</span><span>HUMOP</span>
          </div>
          <h1 className="mt-6 text-5xl font-extrabold sm:text-8xl">AI, without the mystique.</h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-ink/65">
            Learn what AI is, where it came from, what really happens inside the chat box, why models get things wrong, how to work with them, and why the next frontier is agents.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-emerald/40 px-4 py-2 text-xs font-bold tracking-widest text-emerald">NO LOGIN</span>
            <span className="rounded-full border border-gold/40 px-4 py-2 text-xs font-bold tracking-widest text-gold">FREE FIELD GUIDE</span>
            <span className="rounded-full border border-line px-4 py-2 text-xs font-bold tracking-widest text-ink/50">HUMAN + MACHINE</span>
          </div>
        </div>
      </section>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {lessons.map((lesson) => <LessonCard key={lesson.href} lesson={lesson} />)}
      </div>

      <MissionNote>
        <strong className="text-ink">The rule:</strong> never confuse an impressive interface with an intelligent oracle. A model can be extraordinarily useful while still being probabilistic, fallible and dependent on the system around it. Modern LLMs are trained to predict tokens; their useful behaviour comes from training, context, tools and the surrounding system. citeturn987227search0turn987227search1
      </MissionNote>
    </AiShell>
  );
}
