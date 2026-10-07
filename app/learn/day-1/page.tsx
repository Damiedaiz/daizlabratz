import { days } from "@/lib/curriculum";
import SubmitForm from "@/components/SubmitForm";
import AdSlot from "@/components/AdSlot";

export const metadata = { title: "Day 1: Executive Profile Card | DaizLabRatZ" };

function Block({ title, items }: { title: string; items?: string[] }) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold text-emerald">{title}</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5">{items?.map((i) => <li key={i}>{i}</li>)}</ul>
    </section>
  );
}

export default function Day1() {
  const d = days[0];
  return (
    <article className="mx-auto max-w-3xl px-6 py-14">
      <p className="text-gold">Day {d.n} · {d.phase}</p>
      <h1 className="mt-2 text-5xl font-extrabold">{d.title}</h1>
      <p className="mt-6">{d.intro}</p>
      <p className="mt-4 font-bold">{d.task}</p>
      <Block title="Technical stack" items={d.stack} />
      <Block title="Design rules" items={d.design} />
      <Block title="Component features" items={d.features} />
      <AdSlot slot="REPLACE_SLOT_ID" />
      <Block title="Acceptance criteria" items={d.criteria} />
      <Block title="Submission" items={d.submit} />
      <div className="mt-12"><SubmitForm day={d.n} /></div>
    </article>
  );
}
