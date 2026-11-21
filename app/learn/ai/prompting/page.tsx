import { LessonFrame } from "@/components/AiAcademy";

export const metadata = { title: "How to Prompt Models | DaizLabRatZ" };

export default function Prompting() {
  return (
    <LessonFrame number="04" eyebrow="CONTROL" title="How to Prompt Models" dek="Prompting is not magic wording. It is specification: giving a model enough context, constraints and success criteria to produce a useful result.">
      <section>
        <h2 className="text-3xl font-bold text-ink">The HUMOP prompt</h2>
        <p className="mt-4">DaizLab's HUMOP idea is simple: train the <strong>human</strong> and the <strong>machine</strong> together. The human gets clearer about the task; the model gets clearer about what good looks like.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-5">
          {[
            ["H", "HUMAN GOAL", "What are you actually trying to achieve?"],
            ["U", "UNDERSTANDING", "What context does the model need?"],
            ["M", "METHOD", "What should it do, and how should it work?"],
            ["O", "OUTPUT", "What exact format should come back?"],
            ["P", "PROOF", "How will you verify the result?"],
          ].map(([a,t,d]) => <div key={a} className="rounded-xl border border-line bg-panel p-4"><div className="font-display text-3xl font-bold text-emerald">{a}</div><div className="mt-3 text-xs font-bold">{t}</div><p className="mt-2 text-xs text-ink/50">{d}</p></div>)}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-ink">Weak prompt → engineering brief</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-line p-5"><div className="text-xs font-bold text-ink/40">WEAK</div><p className="mt-3 text-ink/60">“Build me a website for my business.”</p></div>
          <div className="rounded-2xl border border-emerald/40 bg-emerald/5 p-5"><div className="text-xs font-bold text-emerald">STRONGER</div><p className="mt-3">“Build a mobile-first landing page for a Nigerian B2B service. Goal: qualified WhatsApp enquiries. Audience: SME owners. Include three proof points, one offer, one CTA, and a short FAQ. Use the supplied brand system. Return the page structure first, then the implementation.”</p></div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-ink">Prompting is only the first layer</h2>
        <p className="mt-4">A better prompt can improve results, but the bigger leap comes from giving the model the right context and tools. Retrieval can ground an answer in external information; structured outputs can constrain format; tests can check code; and agents can execute multi-step workflows.</p>
      </section>
    </LessonFrame>
  );
}
