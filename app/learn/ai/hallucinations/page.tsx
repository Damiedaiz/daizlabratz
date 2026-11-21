import { LessonFrame, MissionNote } from "@/components/AiAcademy";

export const metadata = { title: "Hallucinations | DaizLabRatZ" };

export default function Hallucinations() {
  return (
    <LessonFrame number="03" eyebrow="LIMITATIONS" title="Hallucinations" dek="A model can produce a beautiful answer that is false. The danger is not that the sentence looks broken. The danger is that it can look completely normal.">
      <section className="rounded-3xl border border-gold/40 bg-gold/5 p-7 sm:p-9">
        <div className="text-xs font-bold tracking-[0.25em] text-gold">SLIDE // LIMITATIONS</div>
        <p className="mt-5 text-3xl font-bold leading-tight text-ink">“LLMs do NOT think, they don’t know anything. They only predict text and they sound very confident as they do that.”</p>
        <p className="mt-5 text-sm text-ink/50">Useful warning. Too absolute as a scientific definition.</p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-ink">The better version</h2>
        <p className="mt-4">LLMs are trained as predictive models, and fluent generation is not a guarantee of factual accuracy. They can generate plausible but unsupported or incorrect content — what the field commonly calls hallucination. Research also distinguishes hallucinations caused by prompting or context from failures arising from the model and its training or inference behaviour.</p>
        <p className="mt-4">So don't use “it sounds confident” as your truth detector. Confidence in prose is a style of generation, not a reliable measurement of truth.</p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-ink">Why it happens</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["Missing evidence", "The model may be asked for a fact that is absent, ambiguous or poorly represented in its available context."],
            ["Pattern completion", "A plausible continuation can win over a factually correct but less likely continuation."],
            ["Bad context", "Wrong, incomplete or contradictory instructions can steer generation toward the wrong answer."],
            ["Error cascades", "An early incorrect token or assumption can influence everything that follows."],
          ].map(([t,d]) => <div key={t} className="rounded-2xl border border-line bg-panel p-5"><h3 className="font-bold text-gold">{t}</h3><p className="mt-2 text-sm text-ink/60">{d}</p></div>)}
        </div>
      </section>

      <MissionNote>
        <strong className="text-ink">Human rule:</strong> use verification when the cost of being wrong matters. Ask for sources, retrieve evidence, compare claims, run code, inspect outputs, or have a second process check the result. Prompt quality can reduce some errors, but prompting alone cannot remove model-internal failure modes.
      </MissionNote>
    </LessonFrame>
  );
}
