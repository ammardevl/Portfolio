import { contactInfo } from "./social";

export const contactMethods = [
  {
    icon: "ri-mail-line",
    title: "Email",
    value: contactInfo.email,
    link: `mailto:${contactInfo.email}`,
    description: "Best way to reach me. I check it daily.",
  },
  {
    icon: "ri-time-line",
    title: "Response Time",
    value: "Within 24 hours",
    link: null,
    description: "Usually much sooner on weekdays.",
  },
  {
    icon: "ri-global-line",
    title: "Location",
    value: "Available worldwide",
    link: null,
    description: "Comfortable working across US, UK, and AU hours.",
  },
];

export const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "A single-page or small business site usually takes 1 to 2 weeks. Multi-page React or Next.js apps and WooCommerce builds run 3 to 6 weeks depending on scope. You'll get a real timeline after we scope the project, not a generic estimate.",
  },
  {
    question: "Do you charge fixed price or hourly?",
    answer:
      "Both, depending on the project. Well-defined scopes get a fixed quote upfront. Ongoing work, maintenance, or open-ended builds are billed hourly. Either way, you'll know the number before we start.",
  },
  {
    question: "Can you work with my existing WordPress, Webflow, or Squarespace site instead of rebuilding it?",
    answer:
      "Yes, most of my work is exactly this. I can extend, redesign sections of, or fix an existing site without starting from zero, as long as the current build is in reasonable shape.",
  },
  {
    question: "Do you actually use AI tools, or is that just marketing?",
    answer:
      "I use Claude Code, Copilot, and similar tools for scaffolding, debugging, and speeding up repetitive work. Every architecture decision, every design choice, and every line before it ships is reviewed by me. AI shortens the timeline, it doesn't replace the judgment.",
  },
  {
    question: "I'm in a different time zone. Will that be a problem?",
    answer:
      "No. I already work with clients across the US, UK, and Australia, and I keep async communication (email, written updates, recorded walkthroughs) tight so time zones don't slow a project down.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "A short brief: what the site needs to do, any design references or existing brand assets, and a rough deadline. That turns into a proposal with scope, timeline, and cost within a couple of days.",
  },
];
