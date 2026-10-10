import type { Day } from "./curriculum";

export const day5: Day = {
  n: 5, open: true, phase: "URL-Driven State, Search & Performance", title: "Deep Search & URL State Module",
  intro: "A highly functional dashboard is flawed if its specific views cannot be shared. Relying only on useState traps the user in a temporary session. If an executive wants to send a client a link showing only AI Integration experts, the system must support that. Today you make your dashboard's state shareable and searchable.",
  task: "Upgrade your Day 2 dashboard with a text-based search engine, and move your filtering logic into the URL query parameters.",
  stack: [
    "Text search: a premium, visually integrated search bar above the grid that queries executives by Name or Job Title",
    "URL syncing: your category filters and the new search input update the URL natively. Clicking System Architecture and typing Morgan should produce something like /?category=System+Architecture&query=Morgan. The grid renders from these URL parameters, not just local state",
    "State hydration: pasting that exact URL into a new tab loads the page with System Architecture pre-selected and the search bar pre-filled with Morgan, instantly showing the correct results",
    "Debouncing: do not filter on every keystroke. Write a custom debounce hook or utility with a 300ms delay before the input updates the URL and the grid",
  ],
  design: ["The search input must not look like a generic HTML field: custom focus states, placeholder colouring and padding that match the matte black and emerald green DaizSign design language"],
  features: [],
  criteria: [
    "Shareability: navigating directly to a complex URL parameter string renders the correct filtered view flawlessly on the first paint",
    "Performance: typing feels buttery smooth, with proper debouncing and no lag",
    "Aesthetic discipline: the search input is fully customized and consistent with the brand",
  ],
  submit: [
    "Commit the URL state refactor and the debounce logic",
    "Make sure your deployment updates without breaking the routing",
    "Submit your repository link below, and keep two links ready: your root URL, and a pre-filtered URL with both a search query and a category",
  ],
};
