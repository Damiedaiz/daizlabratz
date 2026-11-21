import Link from "next/link";
import type { ReactNode } from "react";

export type Lesson = {
  number: string;
  eyebrow: string;
  title: string;
  dek: string;
  href: string;
  tag: string;
};

export const lessons: Lesson[] = [
  { number: "01", eyebrow: "FOUNDATION", title: "What AI Actually Is", dek: "From symbolic AI to neural networks, transformers, and the language models behind today's chat systems.", href: "/learn/ai/what-is-ai", tag: "ORIGIN" },
  { number: "02", eyebrow: "UNDER THE HOOD", title: "Inside the Chat Box", dek: "What happens after you press Send: tokens, context, attention, inference, and generated output.", href: "/learn/ai/how-chat-works", tag: "MECHANISM" },
  { number: "03", eyebrow: "LIMITATIONS", title: "Hallucinations", dek: "Why a model can sound certain while being wrong, and why fluency is not the same thing as truth.", href: "/learn/ai/hallucinations", tag: "WARNING" },
  { number: "04", eyebrow: "CONTROL", title: "How to Prompt Models", dek: "Turn vague requests into useful instructions with context, constraints, examples, verification, and iteration.", href: "/learn/ai/prompting", tag: "METHOD" },
  { number: "05", eyebrow: "SYSTEMS", title: "From Prompts to Agents", dek: "The jump from one-shot text generation to systems that use tools, memory, loops, and external actions.", href: "/learn/ai/agents", tag: "NEXT" },
  { number: "06", eyebrow: "BUILD", title: "Agentic Frameworks", dek: "A practical map of the frameworks and patterns used to turn models into reliable tool-using systems.", href: "/learn/ai/agentic-frameworks", tag: "ARCHITECTURE" },
];

export function AiShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-matte">
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-12">
        <div className="mb-10 flex items-center justify-between border-b border-line pb-5">
          <Link href="/learn/ai" className="font-display text-sm font-bold tracking-[0.18em] text-ink">
            DAIZLAB<span className="text-emerald">RATZ</span> <span className="text-ink/40">/ AI ACADEMY</span>
          </Link>
          <Link href="/learn" className="text-xs font-semibold uppercase tracking-widest text-ink/50 hover:text-gold">
            Back to Learn
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
}

export function LessonCard({ lesson }: { lesson: Lesson }) {
  return (
    <Link href={lesson.href} className="group block rounded-2xl border border-line bg-panel p-6 transition hover:-translate-y-1 hover:border-emerald/60">
      <div className="flex items-start justify-between gap-4">
        <span className="font-display text-4xl font-bold text-emerald/70">{lesson.number}</span>
        <span className="rounded-full border border-gold/50 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-gold">{lesson.tag}</span>
      </div>
      <p className="mt-8 text-xs font-bold tracking-[0.2em] text-ink/40">{lesson.eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold group-hover:text-emerald">{lesson.title}</h2>
      <p className="mt-3 text-base text-ink/65">{lesson.dek}</p>
      <div className="mt-6 text-sm font-bold text-gold">ENTER LESSON ↗</div>
    </Link>
  );
}

export function MissionNote({ children }: { children: React.ReactNode }) {
  return (
    <aside className="rounded-2xl border border-emerald/30 bg-emerald/5 p-5 text-sm text-ink/75">
      <div className="mb-2 text-[10px] font-bold tracking-[0.25em] text-emerald">DAIZLAB FIELD NOTE</div>
      {children}
    </aside>
  );
}

export function LessonFrame({
  number,
  eyebrow,
  title,
  dek,
  children,
}: {
  number: string;
  eyebrow: string;
  title: string;
  dek: string;
  children: React.ReactNode;
}) {
  return (
    <AiShell>
      <header className="max-w-4xl">
        <div className="flex items-center gap-4">
          <span className="font-display text-sm font-bold tracking-[0.2em] text-emerald">{number}</span>
          <span className="h-px w-16 bg-gold/60" />
          <span className="text-xs font-bold tracking-[0.2em] text-ink/40">{eyebrow}</span>
        </div>
        <h1 className="mt-6 text-5xl font-extrabold sm:text-7xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-xl leading-relaxed text-ink/65">{dek}</p>
      </header>
      <article className="mt-12 max-w-4xl space-y-10 text-lg leading-8 text-ink/80">
        {children}
      </article>
      <div className="mt-14 flex flex-wrap gap-3 border-t border-line pt-7">
        <Link href="/learn/ai" className="rounded-full border border-line px-5 py-2 text-sm font-bold hover:border-emerald">← AI Academy</Link>
        <Link href="/learn/ai/agents" className="rounded-full border border-gold/40 px-5 py-2 text-sm font-bold text-gold hover:bg-gold hover:text-matte">Continue to Agents →</Link>
      </div>
    </AiShell>
  );
}
