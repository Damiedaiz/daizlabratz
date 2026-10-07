import type { Day } from "./curriculum";

export const day2: Day = {
  n: 2, open: true, phase: "Dynamic Architecture & State Management", title: "E2E Network Dashboard",
  intro: "Today the complexity goes up. You transform your isolated component into a functional, data-driven interface. You have proven you can build the aesthetic. Now prove you can engineer the logic.",
  task: "Build a dashboard that renders a dynamic grid of Executive Profile cards, introducing data mapping and user interaction.",
  stack: [
    "Component abstraction: refactor your Day 1 card into a reusable component that takes Name, Title, Bio, Skills and Image URL as props, with no hardcoded text",
    "Data mapping: a mock JSON array of at least six distinct executives, mapped to render the cards",
    "Responsive grid: Tailwind CSS Grid, one column on mobile up to a multi-column grid on desktop",
    "Stateful filtering: a category filter built with React useState",
  ],
  design: ["Filter buttons above the grid, for example All, System Architecture, AI Integration", "Clicking a button instantly filters the executives by their core skills", "The dashboard background stays Matte Black #0A0A0A", "Keep the Day 1 ultra-premium look across the whole layout"],
  features: [],
  criteria: ["Zero console errors: clean dynamic rendering with a proper unique key on every mapped element", "Seamless interaction: filtering feels instant and intuitive", "Aesthetic consistency: the Day 1 standard holds across the entire dashboard"],
  submit: ["Commit the updates to your existing repository, on a new branch or directly on main", "Make sure your live deployment updates with the new build", "Submit your repository link below, and write 1-2 sentences on how you approached the filtering logic for yourself"],
};
