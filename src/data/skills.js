// Capability groups for the About page "Skills" section.
// Tier communicates depth honestly instead of an arbitrary percentage:
// "Core" = daily working tools, "Working" = used regularly and confidently,
// "Familiar" = capable, called on less often.

export const skillGroups = [
  {
    category: "Frontend Engineering",
    icon: "ri-code-s-slash-line",
    skills: [
      { name: "React", tier: "Core" },
      { name: "Next.js", tier: "Core" },
      { name: "JavaScript (ES6+)", tier: "Core" },
      { name: "Tailwind CSS", tier: "Core" },
      { name: "HTML5 & CSS3", tier: "Core" },
      { name: "Anime.js & GSAP", tier: "Working" },
    ],
  },
  {
    category: "CMS & No-Code Platforms",
    icon: "ri-layout-4-line",
    skills: [
      { name: "WordPress", tier: "Core" },
      { name: "Elementor & Divi", tier: "Core" },
      { name: "WooCommerce", tier: "Working" },
      { name: "Webflow", tier: "Working" },
      { name: "Squarespace", tier: "Working" },
      { name: "ACF & Custom Fields", tier: "Working" },
    ],
  },
  {
    category: "Tooling & Workflow",
    icon: "ri-tools-line",
    skills: [
      { name: "Git & GitHub", tier: "Core" },
      { name: "Performance Optimization", tier: "Core" },
      { name: "Technical SEO", tier: "Working" },
      { name: "API Integration", tier: "Working" },
      { name: "Claude Code & Copilot", tier: "Working" },
      { name: "Vite & Webpack", tier: "Familiar" },
    ],
  },
];

export const tierOrder = ["Core", "Working", "Familiar"];
