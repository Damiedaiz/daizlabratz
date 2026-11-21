import { LessonFrame } from "@/components/AiAcademy";

export const metadata = { title: "Agentic Frameworks | DaizLabRatZ" };

export default function AgenticFrameworks() {
  return (
    <LessonFrame number="06" eyebrow="BUILD" title="Agentic Frameworks" dek="Frameworks package the hard parts of agentic systems: model calls, tool definitions, state, orchestration, tracing, approvals and evaluation.">
      <section>
        <h2 className="text-3xl font-bold text-ink">Do not start with the framework</h2>
        <p className="mt-4">Start with the workflow. Ask: what must happen, what can fail, what tools are required, what information must persist, and where must a human approve an action? Then choose the smallest architecture that can reliably execute it.</p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-ink">The framework map</h2>
        <div className="mt-6 space-y-4">
          {[
            ["MODEL SDKs", "Direct model APIs, structured generation, tool calling and streaming."],
            ["GRAPH / WORKFLOW ORCHESTRATION", "Explicit states, branching, retries, checkpoints and multi-step flows."],
            ["AGENT RUNTIMES", "Loops that let models decide which tools or actions to use next."],
            ["RETRIEVAL / MEMORY", "Connect the system to documents, databases or durable task state."],
            ["OBSERVABILITY", "Trace prompts, tool calls, latency, errors and outcomes."],
            ["EVALUATION", "Measure whether the system produces the right answer or completes the right action."],
          ].map(([t,d]) => <div key={t} className="rounded-2xl border border-line bg-panel p-6"><h3 className="font-bold text-emerald">{t}</h3><p className="mt-2 text-ink/60">{d}</p></div>)}
        </div>
      </section>

      <section className="rounded-3xl border border-gold/30 bg-gold/5 p-7">
        <div className="text-xs font-bold tracking-[0.25em] text-gold">DAIZLAB PRINCIPLE</div>
        <p className="mt-4 text-2xl font-bold">The model is not the product. The system around the model is the product.</p>
        <p className="mt-4 text-sm text-ink/60">A production agent needs more than a clever prompt: it needs defined tools, controlled permissions, reliable state, failure handling and measurable outcomes.</p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-ink">Build the smallest useful agent</h2>
        <ol className="mt-5 space-y-3 text-base">
          <li><strong>1. Define the outcome.</strong> One sentence, measurable if possible.</li>
          <li><strong>2. Define the tools.</strong> Only grant the actions the workflow needs.</li>
          <li><strong>3. Define the state.</strong> What must survive between steps?</li>
          <li><strong>4. Define the loop.</strong> What tells the agent to continue, stop, retry or escalate?</li>
          <li><strong>5. Define the proof.</strong> How does the system know it succeeded?</li>
        </ol>
      </section>
    </LessonFrame>
  );
}
