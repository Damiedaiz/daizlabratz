import type { Day } from "./curriculum";

export const day4: Day = {
  n: 4, open: true, phase: "Data Input, State Validation & UI Feedback", title: "Executive Onboarding Form",
  intro: "Rendering data is only half the equation of any digital infrastructure. A true system must securely and intelligently capture user intent. Today you build the interface that lets a new expert join the network.",
  task: "Architect a dedicated route, /onboarding or /add-profile, containing a highly validated, visually pristine form that captures new executive data.",
  stack: [
    "Form architecture: Full Name, Job Title, a short Bio (textarea), and Core Skills, where the user selects up to 3 from a predefined list using custom styled checkboxes or toggle pills",
    "Strict validation with native React state, or React Hook Form plus Zod. Name and Title cannot be empty. Bio must be between 50 and 200 characters. Between one and three Core Skills must be selected",
    "Error handling: if validation fails, prevent submission and show precise, visually integrated error messages. No default browser pop-ups. Use a subdued crimson or metallic gold warning border and text",
    "Simulated submission: on success, mimic a backend POST with a setTimeout promise. Show a loading state on the submit button during the delay, then a premium Success toast, then automatically redirect to the main dashboard",
  ],
  design: ["Default HTML input styling is unacceptable: inputs, focus rings, textareas and checkboxes must be heavily customized with Tailwind in the matte black and emerald green DaizSign language"],
  features: [],
  criteria: [
    "Custom form aesthetics across every input, focus ring, textarea and checkbox",
    "Bulletproof logic: I should not be able to break the form with empty spaces or by bypassing the character limits",
    "Seamless UX transition: the loading state and redirect flow feel intentional and smooth",
  ],
  submit: [
    "Commit this module with clear structural commits",
    "Make sure your deployment updates and routing to the new form works flawlessly",
    "Submit your repository link below, and keep the live URL of your onboarding route ready to share",
  ],
};
