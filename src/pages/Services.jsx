import React, { useState } from "react";
import { Eyebrow, SectionHeading, IconTile, CTASection } from "../components/ui";

const servicesData = {
  wordpress: {
    title: "WordPress Development",
    icon: "ri-wordpress-fill",
    description: "Theme customization, page builders, and plugin work that stays maintainable.",
    groups: [
      {
        label: "Page Builders",
        tools: [
          { name: "Elementor", icon: "ri-layout-line", note: "Custom widgets, advanced layouts" },
          { name: "Divi", icon: "ri-palette-line", note: "Theme builder, visual customization" },
          { name: "Gutenberg", icon: "ri-file-edit-line", note: "Block editor customization" },
          { name: "WPBakery", icon: "ri-stack-line", note: "Legacy support, migrations" },
        ],
      },
      {
        label: "Themes & Commerce",
        tools: [
          { name: "Astra", icon: "ri-layout-4-line", note: "Lightweight, fast themes" },
          { name: "WooCommerce", icon: "ri-shopping-cart-2-line", note: "Online store development" },
          { name: "Custom Themes", icon: "ri-code-box-line", note: "Bespoke theme builds" },
        ],
      },
      {
        label: "Essential Plugins",
        tools: [
          { name: "ACF", icon: "ri-list-settings-line", note: "Custom fields management" },
          { name: "Yoast SEO", icon: "ri-seo-line", note: "SEO optimization" },
          { name: "WP Rocket", icon: "ri-speed-up-line", note: "Caching, speed" },
          { name: "Mailchimp", icon: "ri-mail-send-line", note: "Email marketing" },
        ],
      },
    ],
  },
  frontend: {
    title: "Frontend Development",
    icon: "ri-code-s-slash-fill",
    description: "Modern, component-based frontends built with current best practices.",
    groups: [
      {
        label: "Core",
        tools: [
          { name: "HTML5", icon: "ri-html5-line", note: "Semantic, accessible markup" },
          { name: "CSS3", icon: "ri-css3-line", note: "Modern styling, animation" },
          { name: "JavaScript ES6+", icon: "ri-javascript-fill", note: "Modern language features" },
        ],
      },
      {
        label: "Frameworks",
        tools: [
          { name: "React", icon: "ri-reactjs-line", note: "Component-based architecture" },
          { name: "Tailwind CSS", icon: "ri-brush-line", note: "Utility-first styling" },
          { name: "Bootstrap", icon: "ri-layout-grid-line", note: "Responsive frameworks" },
        ],
      },
      {
        label: "Tooling",
        tools: [
          { name: "Git & GitHub", icon: "ri-github-fill", note: "Version control" },
          { name: "Webpack / Vite", icon: "ri-box-3-line", note: "Module bundling" },
          { name: "NPM / Yarn", icon: "ri-npmjs-line", note: "Package management" },
        ],
      },
    ],
  },
  ai: {
    title: "AI-Assisted Development",
    icon: "ri-sparkling-2-fill",
    description:
      "AI models handle boilerplate and repetition — I still own every architecture decision and line that ships.",
    groups: [
      {
        label: "Coding Assistants",
        tools: [
          { name: "Claude Code", icon: "ri-terminal-box-line", note: "Agentic coding, refactors, debugging" },
          { name: "GitHub Copilot", icon: "ri-github-fill", note: "In-editor completions" },
          { name: "Claude (Opus)", icon: "ri-chat-3-line", note: "Architecture & code review" },
        ],
      },
      {
        label: "Prototyping & Research",
        tools: [
          { name: "Gemini", icon: "ri-google-fill", note: "Research & multi-file reasoning" },
          { name: "Grok", icon: "ri-flashlight-line", note: "Fast iteration & drafting" },
          { name: "ChatGPT", icon: "ri-message-3-line", note: "Prototyping & content drafts" },
        ],
      },
      {
        label: "Where it fits in my workflow",
        tools: [
          { name: "Scaffolding", icon: "ri-stack-line", note: "Faster first drafts of components" },
          { name: "Code Review", icon: "ri-search-eye-line", note: "A second pair of eyes on logic" },
          { name: "Debugging", icon: "ri-bug-line", note: "Faster root-cause tracing" },
        ],
      },
    ],
  },
};

const ToolCard = ({ tool }) => (
  <div className="group bg-surface rounded-xl p-5 border border-border-soft hover:border-red transition-all duration-300 hover:-translate-y-0.5">
    <div className="flex items-start gap-4">
      <IconTile icon={tool.icon} />
      <div>
        <h4 className="text-base font-medium text-ink mb-1">{tool.name}</h4>
        <p className="text-muted text-sm">{tool.note}</p>
      </div>
    </div>
  </div>
);

const whyItems = [
  { icon: "ri-time-line", title: "Fast Delivery", description: "A quick turnaround without cutting into quality — your project, delivered on time." },
  { icon: "ri-customer-service-2-line", title: "Clear Communication", description: "Regular updates and a straight answer to every question, in plain language." },
  { icon: "ri-code-s-slash-line", title: "Clean Code", description: "Structured, commented, and maintainable — built for whoever touches it after me." },
  { icon: "ri-smartphone-line", title: "Responsive by Default", description: "Every build is tested across breakpoints, not just resized down from desktop." },
  { icon: "ri-rocket-line", title: "Performance-Minded", description: "Optimized assets and lean code, so pages load fast on real connections." },
  { icon: "ri-shield-check-line", title: "Security First", description: "Sensible defaults and regular updates to keep your site out of trouble." },
];

const Services = () => {
  const tabs = Object.entries(servicesData);
  const [active, setActive] = useState(tabs[0][0]);
  const activeService = servicesData[active];

  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="services --list"
            title="Services &"
            highlight="Expertise"
            subtitle="From WordPress builds to modern React frontends — and, increasingly, AI tools folded into the process to move faster."
          />

          <div className="max-w-6xl mx-auto lg:flex lg:gap-8">
            {/* Tab rail — replaces the old accordion */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 lg:w-72 lg:flex-shrink-0 mb-8 lg:mb-0">
              {tabs.map(([key, service]) => (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={`flex-shrink-0 flex items-center gap-3 text-left px-5 py-4 rounded-xl font-mono text-sm transition-all duration-300 w-full lg:w-auto ${
                    active === key
                      ? "bg-ink text-cream"
                      : "bg-surface text-ink/70 border border-border-soft hover:border-red hover:text-red"
                  }`}
                >
                  <i className={`${service.icon} text-lg`}></i>
                  <span className="whitespace-nowrap lg:whitespace-normal">{service.title}</span>
                </button>
              ))}
            </div>

            <div className="min-w-0 flex-1">
              <div className="mb-8">
                <h3 className="text-2xl font-display font-medium text-ink mb-2">{activeService.title}</h3>
                <p className="text-muted">{activeService.description}</p>
              </div>

              <div className="space-y-10">
                {activeService.groups.map((group) => (
                  <div key={group.label}>
                    <h4 className="text-sm font-mono text-red mb-4 tracking-wide">// {group.label}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {group.tools.map((tool) => (
                        <ToolCard key={tool.name} tool={tool} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-cream/40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <SectionHeading eyebrow="why --me" title="Why Work" highlight="With Me" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyItems.map((item) => (
              <div
                key={item.title}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border-soft hover:border-red"
              >
                <IconTile icon={item.icon} tone="ink" />
                <h3 className="text-xl font-display font-medium mb-3 mt-6 text-ink">{item.title}</h3>
                <p className="text-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Get"
        highlight="Started?"
        subtitle="Tell me what you're building and I'll tell you exactly how I'd approach it."
        ctaLabel="Get In Touch"
      />
    </div>
  );
};

export default Services;
