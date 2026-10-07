import CopyButton from "@/components/CopyButton";

export const metadata = { title: "Apply for the free training | DaizLabRatZ" };

const letter = `Dear Daizsign Team,

My name is [Your Name], and I am writing to express my interest in an internship opportunity at Daizsign.

I am currently building my foundation in frontend development and would love the opportunity to learn within a real creative and professional environment. I already have practical knowledge of HTML, CSS, and JavaScript, and I am now looking to deepen that foundation by learning how modern frontend applications are designed, developed, deployed, and maintained.

My Current Skills
* HTML5: [what you can do]
* CSS3: [what you can do]
* JavaScript: [what you can do]

What I Want to Learn
React.js, Next.js, TypeScript, Tailwind CSS, Git and GitHub, REST APIs, authentication, testing, deployment on Vercel, UI/UX, accessibility, performance, and prompt engineering.

What I Hope to Gain
[How you want to grow: solving real problems, reading other people's code, debugging, working with Git, code reviews, using AI as a tool while understanding the code.]

Long-Term Direction
[Where you want to be in a few years.]

Sincerely,
[Your Name]
[Phone / GitHub / portfolio link, if any]`;

export default function Apply() {
  const href = `mailto:daizsign@gmail.com?subject=${encodeURIComponent("Internship Application: Free 21-Day Training")}&body=${encodeURIComponent(letter)}`;
  return (
    <article className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-extrabold sm:text-5xl">Apply for the free training</h1>
      <p className="mt-6">Send an application letter to <b>daizsign@gmail.com</b>. Write it in your own words, following the structure below: who you are, your current skills, what you want to learn, what you hope to gain, and your long-term direction.</p>
      <pre className="mt-8 whitespace-pre-wrap rounded-lg border border-line bg-panel p-6 font-body text-base leading-relaxed">{letter}</pre>
      <div className="mt-6 flex flex-wrap gap-4">
        <CopyButton text={letter} />
        <a href={href} className="rounded bg-emerald px-4 py-2 font-bold text-matte hover:brightness-110">Open in my email app</a>
      </div>
    </article>
  );
}
