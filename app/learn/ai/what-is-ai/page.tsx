import { LessonFrame } from "@/components/AiAcademy";

export const metadata = { title: "What AI Actually Is | DaizLabRatZ" };

export default function WhatIsAi() {
  return (
    <LessonFrame number="01" eyebrow="FOUNDATION" title="What AI Actually Is" dek="AI did not begin with chatbots. The modern story is a long chain of ideas about machines representing knowledge, learning patterns, and making useful predictions.">
      <section>
        <h2 className="text-3xl font-bold text-ink">Start with the simplest definition</h2>
        <p className="mt-4">Artificial intelligence is a broad field concerned with building machines that perform tasks associated with human intelligence: perception, language, prediction, planning, decision-making and more. There is no single magic ingredient called “AI.” Different generations used very different techniques.</p>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {[
          ["01", "RULES", "Early systems often encoded explicit rules: if this, then that."],
          ["02", "LEARNING", "Machine learning shifted the emphasis toward systems that learn patterns from data."],
          ["03", "GENERATING", "Generative models can produce new text, images, audio, code and other outputs from learned distributions."],
        ].map(([n,t,d]) => <div key={n} className="rounded-2xl border border-line bg-panel p-5"><div className="font-display text-3xl font-bold text-emerald">{n}</div><h3 className="mt-5 text-xl font-bold">{t}</h3><p className="mt-2 text-sm text-ink/60">{d}</p></div>)}
      </section>

      <section>
        <h2 className="text-3xl font-bold text-ink">Where LLMs fit</h2>
        <p className="mt-4">A large language model is a neural network trained on very large text datasets to predict the next token in a sequence. That deceptively simple objective creates powerful representations of language and patterns. During inference, the model receives context and repeatedly predicts what token should come next.</p>
        <p className="mt-4">That does <em>not</em> mean the useful capabilities are fake. It means we should be precise about the mechanism. The model is not a human sitting inside the server. It is a learned computational system whose outputs can be remarkably useful and can also be wrong.</p>
      </section>

      <section className="rounded-2xl border border-gold/30 bg-gold/5 p-6">
        <p className="font-display text-2xl font-bold text-gold">“Predicting the next token” is the mechanism. It is not the whole story of what a modern AI system can do.</p>
      </section>
    </LessonFrame>
  );
}
