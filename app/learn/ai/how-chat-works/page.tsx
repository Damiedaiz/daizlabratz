import { LessonFrame, MissionNote } from "@/components/AiAcademy";

export const metadata = { title: "Inside the Chat Box | DaizLabRatZ" };

export default function HowChatWorks() {
  return (
    <LessonFrame number="02" eyebrow="UNDER THE HOOD" title="Inside the Chat Box" dek="You type a sentence. It feels like a conversation. Underneath, a pipeline is turning context into tokens, tokens into probability distributions, and those probabilities into a response.">
      <section>
        <h2 className="text-3xl font-bold text-ink">The trip from Send to Answer</h2>
        <div className="mt-6 space-y-3">
          {[
            ["01", "INPUT", "Your message is combined with relevant conversation context and system instructions."],
            ["02", "TOKENIZE", "The text is represented as tokens — pieces of words and symbols the model can process."],
            ["03", "CONTEXT", "The model processes the sequence using transformer mechanisms such as self-attention."],
            ["04", "PREDICT", "The network produces probabilities for possible next tokens."],
            ["05", "GENERATE", "A token is selected, appended to the sequence, and the process repeats."],
            ["06", "DISPLAY", "The generated tokens are decoded back into text and streamed to the interface."],
          ].map(([n,t,d]) => <div key={n} className="flex gap-5 rounded-xl border border-line bg-panel p-5"><div className="font-display text-2xl font-bold text-emerald">{n}</div><div><h3 className="font-bold">{t}</h3><p className="mt-1 text-sm text-ink/60">{d}</p></div></div>)}
        </div>
      </section>

      <MissionNote>
        The important mental model is not “the AI searches its brain for the answer.” For a plain LLM generation, the model processes the supplied context and predicts a sequence of tokens. Tools, retrieval, browsing, memory and other orchestration can add capabilities around that core model.
      </MissionNote>

      <section>
        <h2 className="text-3xl font-bold text-ink">Why the chat interface is deceptive</h2>
        <p className="mt-4">The chat box hides a large amount of machinery. It makes a complex probabilistic system feel like a person you can simply ask. That interface is useful — but it can encourage users to attribute certainty, memory or understanding that the underlying system does not guarantee.</p>
        <p className="mt-4">Good AI literacy means learning to separate <strong>interface behaviour</strong>, <strong>model behaviour</strong>, and <strong>system behaviour</strong>.</p>
      </section>
    </LessonFrame>
  );
}
