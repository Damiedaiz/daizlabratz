import type { Day } from "./curriculum";

export const day3: Day = {
  n: 3, open: true, phase: "Dynamic Routing & Simulated Data Fetching", title: "Dynamic Profile Routing",
  intro: "A system is not confined to a single view. Real-world platforms need deep navigation and contextual data rendering. Today you architect a multi-page flow where users drill down into specific executive profiles.",
  task: "Implement a dedicated detailed view for each executive in your mock database, connected via seamless routing.",
  stack: [
    "Routing: Next.js App Router is our standard infrastructure. Create a dynamic route such as /profile/[id] or /profile/[slug]",
    "Simulated API layer: move your hardcoded JSON array out of your components into a separate utility file or mock API route",
    "Write an asynchronous function, for example getExecutiveById(id), that simulates fetching from a database before the detailed view renders",
    "Parameter passing: clicking View Profile on your Day 2 dashboard must pass the unique ID or slug to the new route and render the correct data",
  ],
  design: [
    "Full-page detailed layout containing the card data: image, name, title and core skills",
    "New expanded data: an About section of 2-3 paragraphs and a mock Recent Projects or Publications list, to test your typography hierarchy",
    "A clean, visually distinct Back to Network navigation element",
    "The page must feel like a natural, premium extension of the dashboard in matte black, emerald green and metallic gold",
  ],
  features: [],
  criteria: [
    "Flawless navigation: moving between dashboard and profiles is instant with no full-page reload, using the Next.js Link component",
    "Edge-case handling: an ID that does not exist renders a custom 404 - Executive Not Found component that follows the brand guidelines",
    "Aesthetic integrity: the palette is held rigorously across the detailed view",
  ],
  submit: [
    "Commit the dynamic routing architecture with clear, descriptive commit messages",
    "Make sure your deployment is updated and handles the dynamic routes",
    "Submit your repository link below, and keep a direct link to one generated profile page ready to share",
  ],
};
