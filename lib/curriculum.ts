import { day2 } from "./day2";

export type Day = {
  n: number; title: string; phase: string; open: boolean;
  intro?: string; task?: string; stack?: string[]; design?: string[];
  features?: string[]; criteria?: string[]; submit?: string[];
};

const day1: Day = {
  n: 1, open: true, phase: "Architecture & Aesthetics", title: "Executive Profile Card",
  intro: "Today you move from writing foundational code to engineering production-ready systems. We follow one principle: systems over hustle. How your code is structured, maintained and rule-bound matters as much as the visual result.",
  task: "Build a reusable Expert to Expert (E2E) Executive Profile Card for a platform connecting top-tier professionals. It must feel ultra-premium, minimal and luxurious.",
  stack: ["Next.js (App Router preferred) or standard React", "Tailwind CSS only. No custom CSS files unless needed for one specific animation", "JavaScript, or TypeScript if you feel confident"],
  design: ["Background and base: Matte Black #0A0A0A and #121212 for depth", "Primary accent: Emerald Green #047857 (emerald-700)", "Highlights and buttons: Metallic Gold #D4AF37", "Typography: clean, sans-serif, high contrast"],
  features: ["Placeholder profile image, professional stock photo, 4:5 vertical crop", "Name and job title", "Two-sentence professional bio", "Three core skills as minimal tags or badges", "A primary Connect or View Profile button"],
  criteria: ["Responsive: flawless on mobile and desktop using Grid or Flexbox", "Attention to detail: spacing, padding and alignment read as a luxury corporate asset", "Code quality: organised Tailwind classes and a modular component, not one block of HTML"],
  submit: ["Initialise a Git repository", "Commit with clear conventional messages, e.g. feat: implement executive profile card layout", "Push to a public GitHub repository", "Submit the repository link below before the end of the day"],
};

export const days: Day[] = [
  day1,
  day2,
  ...Array.from({ length: 19 }, (_, i) => ({ n: i + 3, title: "Locked", phase: "", open: false })),
];