// Single source of truth for the Services page.
// Each entry is an actual offering: what it is, who it's for, and what's included.

export const servicesList = [
  {
    slug: "custom-development",
    icon: "ri-code-s-slash-line",
    title: "Custom Web Development",
    summary:
      "Hand-built sites and web apps in React and Next.js, for products that outgrow a page builder.",
    description:
      "For founders and teams who need something a template can't do: custom interactions, real component architecture, and a codebase another developer can pick up later without guesswork.",
    included: [
      "React and Next.js builds from a design file or a rough brief",
      "Component-driven architecture built for reuse, not one-off pages",
      "API integrations and dynamic, data-driven content",
      "Animation and micro-interactions with anime.js or GSAP",
    ],
  },
  {
    slug: "wordpress-development",
    icon: "ri-wordpress-fill",
    title: "WordPress Development",
    summary:
      "Theme builds, page-builder work, and WooCommerce stores that stay easy to maintain after launch.",
    description:
      "Most small business sites run on WordPress for a reason: content is easy to manage without a developer on call. I build it so that stays true, with clean structure and no plugin bloat.",
    included: [
      "Elementor and Divi builds, or a lightweight custom theme",
      "WooCommerce setup for product catalogs and checkout",
      "Plugin audits, cleanup, and performance tuning",
      "Ongoing maintenance and update support",
    ],
  },
  {
    slug: "webflow-squarespace",
    icon: "ri-layout-4-line",
    title: "Webflow & Squarespace",
    summary:
      "Design-forward builds and edits on no-code platforms, for launches that need to move fast without losing polish.",
    description:
      "Webflow and Squarespace cover a lot of ground well: marketing sites, landing pages, and venue or event sites that need a fast turnaround and a client who can edit content themselves after handoff.",
    included: [
      "Full site builds on Webflow or Squarespace",
      "Section-level redesigns and content edits on existing sites",
      "CMS collections structured for easy self-editing",
      "Responsive layouts tuned for every breakpoint",
    ],
  },
  {
    slug: "performance-seo",
    icon: "ri-speed-up-line",
    title: "Performance & Technical SEO",
    summary:
      "Faster load times, cleaner Core Web Vitals, and the technical groundwork search engines actually reward.",
    description:
      "A site that looks right but loads slowly, or that search engines can't read properly, loses visitors before they see the design. This is the unglamorous work that fixes both.",
    included: [
      "Image optimization, caching, and lazy loading",
      "Semantic markup, structured data, and clean heading hierarchy",
      "Sitemap, robots.txt, and canonical URL setup",
      "Core Web Vitals audits with a prioritized fix list",
    ],
  },
  {
    slug: "site-maintenance",
    icon: "ri-shield-check-line",
    title: "Website Care & Maintenance",
    summary:
      "Ongoing updates, monitoring, and small fixes, so the site keeps working long after launch day.",
    description:
      "Websites need upkeep the same way anything else does. This covers the routine work that keeps a site secure, fast, and current without you having to think about it.",
    included: [
      "Core, theme, and plugin updates on a set schedule",
      "Uptime and broken-link monitoring",
      "Content updates and small feature requests",
      "Monthly performance and security check-ins",
    ],
  },
  {
    slug: "ai-assisted-workflow",
    icon: "ri-terminal-box-line",
    title: "AI-Assisted Development",
    summary:
      "Tools like Claude Code and Copilot speed up the repetitive parts. Every decision and every line that ships is still reviewed by me.",
    description:
      "AI tools are part of how I work now, mainly for scaffolding, debugging, and a second pair of eyes on logic. They shorten timelines. They don't replace architecture decisions or judgment calls, which stay entirely mine.",
    included: [
      "Faster first drafts of components and boilerplate",
      "AI-assisted debugging and root-cause tracing",
      "Code review with an AI second opinion, human final say",
      "Transparent about where and how AI is used on a project",
    ],
  },
];

export const whyItems = [
  {
    icon: "ri-time-line",
    title: "Fast, Realistic Timelines",
    description:
      "A delivery date I actually hit, given upfront and not padded to look impressive later.",
  },
  {
    icon: "ri-customer-service-2-line",
    title: "Clear Communication",
    description:
      "Regular updates and a straight answer to every question, in plain language, not developer jargon.",
  },
  {
    icon: "ri-code-s-slash-line",
    title: "Clean, Maintainable Code",
    description:
      "Structured and documented so whoever touches the project after me, including future me, can follow it.",
  },
  {
    icon: "ri-smartphone-line",
    title: "Responsive by Default",
    description:
      "Every build is tested across real breakpoints, not just resized down from a desktop mockup.",
  },
  {
    icon: "ri-rocket-line",
    title: "Performance-Minded",
    description:
      "Lean code and optimized assets, so pages load fast on real connections, not just on a fast office network.",
  },
  {
    icon: "ri-shield-check-line",
    title: "Security-Conscious",
    description:
      "Sensible defaults, regular updates, and no shortcuts that leave a client site exposed.",
  },
];
