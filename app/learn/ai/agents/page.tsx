import { LessonFrame, MissionNote } from "@/components/AiAcademy";

export const metadata = { title: "From Prompts to Agents | DaizLabRatZ" };

export default function Agents() {
  return (
    <LessonFrame number="05" eyebrow="SYSTEMS" title="From Prompts to Agents" dek="A prompt asks a model to generate. An agentic system gives the model a job, tools, state, feedback and a loop so it can move a task forward.">
      <section>
        <h2 className="text-3xl font-bold text-ink">The conceptual jump</h2>
        <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-panel">
          {[
            ["CHAT", "Human → prompt → model → answer"],
            ["TOOL USE", "Human → goal → model → tool → result → model → answer"],
            ["AGENT", "Goal → plan → act → observe → evaluate → repeat → finish"],
          ].map(([t,d]) => <div key={t} className="flex flex-col gap-2 border-b border-line p-5 last:border-0 sm:flex-row sm:items-center sm:gap-8"><div className="w-28 font-display font-bold text-emerald">{t}</div><div className="text-sm text-ink/60">{d}</div></div>)}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-ink">What makes a system agentic?</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {[
            ["MODEL", "The reasoning/generation engine."],
            ["TOOLS", "APIs, search, databases, browsers, code execution and business systems."],
            ["STATE", "Information that persists across steps or tasks."],
            ["LOOP", "A mechanism for deciding what to do next after observing a result."],
            ["GUARDRAILS", "Permissions, validation, limits and human approval where required."],
            ["EVALUATION", "Tests or checks that determine whether the task is actually complete."],
          ].map(([t,d]) => <div key={t} className="rounded-2xl border border-line bg-panel p-5"><h3 className="font-bold text-gold">{t}</h3><p className="mt-2 text-sm text-ink/60">{d}</p></div>)}
        </div>
      </section>

      <MissionNote>
        Agents do not magically remove hallucinations. Research on LLM-based agents shows that errors can occur at multiple stages of an agent workflow and can lead to incorrect actions, not merely incorrect sentences. That is why tool permissions, validation and evaluation matter.
      </MissionNote>

      <section>
        <h2 className="text-3xl font-bold text-ink">The DaizLab StarTrek view</h2>
        <p className="mt-4">Think of an agentic system as a crew, not a chatbot: the model is one component; tools are instruments; memory is the log; policies are the command rules; evaluation is mission control. The engineering challenge is making the whole system reliable enough to perform useful work.</p>
      </section>
    </LessonFrame>
  );
}
