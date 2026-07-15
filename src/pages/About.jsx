import myimage from "../assets/my-image.jpeg";
import { Eyebrow, Button, SectionHeading, StatCard, CTASection } from "../components/ui";

const aboutStats = [
  { number: "3+", label: "Years Experience", icon: "ri-time-line" },
  { number: "35+", label: "Projects Completed", icon: "ri-folder-check-line" },
  { number: "100%", label: "Client Satisfaction", icon: "ri-star-line" },
  { number: "15+", label: "Happy Clients", icon: "ri-user-smile-line" },
];

const skillsData = [
  {
    category: "Frontend Development",
    icon: "ri-code-s-slash-line",
    skills: [
      { name: "HTML5 & CSS3", level: 100 },
      { name: "JavaScript ES6+", level: 91 },
      { name: "React.js", level: 75 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Responsive Design", level: 99 },
    ],
  },
  {
    category: "WordPress Development",
    icon: "ri-wordpress-line",
    skills: [
      { name: "Website Maintenance", level: 100 },
      { name: "Plugin Customization", level: 85 },
      { name: "Elementor & Divi", level: 99 },
      { name: "WooCommerce", level: 83 },
      { name: "WordPress Optimization", level: 97 },
    ],
  },
  {
    category: "Tools & AI Workflow",
    icon: "ri-tools-line",
    skills: [
      { name: "Git & GitHub", level: 95 },
      { name: "Claude Code", level: 90 },
      { name: "Performance Optimization", level: 97 },
      { name: "API Integration", level: 85 },
      { name: "SEO Optimization", level: 92 },
    ],
  },
];

const timelineData = [
  {
    year: "2024 — Present",
    title: "Freelance Website Developer",
    company: "Self-Employed",
    description:
      "Building custom websites and web apps for clients worldwide. Focused on React and WordPress development, with modern design, SEO, and performance as non-negotiables.",
    icon: "ri-briefcase-line",
  },
  {
    year: "2024, 3 months",
    title: "Intern WordPress Developer",
    company: "Meta Perficient",
    description:
      "Worked on real client projects doing WordPress theme customization and development — the foundation for everything that came after, including learning HTML5, CSS3, and JavaScript properly.",
    icon: "ri-wordpress-line",
  },
  {
    year: "2023 — 2024",
    title: "Started the Web Development Journey",
    company: "Self-Taught",
    description:
      "Started with WordPress, the most widely used CMS, and found the part of development I actually enjoy: turning a vague idea into something people can use.",
    icon: "ri-graduation-cap-line",
  },
];

const values = [
  { icon: "ri-lightbulb-line", title: "Innovation", description: "Staying curious about new tools and technologies, including AI, and using them where they genuinely help." },
  { icon: "ri-check-double-line", title: "Quality", description: "Code and design that hold up after launch, not just at the demo." },
  { icon: "ri-time-line", title: "Reliability", description: "Clear timelines and clear updates — no guessing where a project stands." },
  { icon: "ri-team-line", title: "Collaboration", description: "Understanding what you're actually trying to achieve before writing a line of code." },
];

const SkillBar = ({ skill }) => (
  <div className="mb-6 last:mb-0">
    <div className="flex justify-between mb-2">
      <span className="text-ink/80 font-medium text-sm">{skill.name}</span>
      <span className="text-red font-mono text-sm">{skill.level}%</span>
    </div>
    <div className="h-2 bg-cream rounded-full overflow-hidden">
      <div className="h-full bg-red rounded-full transition-all duration-1000 ease-out" style={{ width: `${skill.level}%` }} />
    </div>
  </div>
);

const TimelineItem = ({ item }) => (
  <div className="relative flex gap-6 pb-12 last:pb-0">
    <div className="absolute left-[27px] top-14 bottom-0 w-0.5 bg-border-soft" />
    <div className="relative z-10 flex-shrink-0">
      <div className="w-14 h-14 rounded-full bg-ink flex items-center justify-center">
        <i className={`${item.icon} text-yellow text-xl`}></i>
      </div>
    </div>
    <div className="flex-1 pt-2">
      <span className="inline-block px-3 py-1 bg-cream text-ink rounded-full text-sm font-mono mb-3">{item.year}</span>
      <h3 className="text-xl font-display font-medium text-ink mb-1">{item.title}</h3>
      <p className="text-red font-medium mb-3">{item.company}</p>
      <p className="text-muted leading-relaxed">{item.description}</p>
    </div>
  </div>
);

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative order-2 lg:order-1">
              <img
                className="w-full h-96 lg:h-[600px] object-cover object-bottom rounded-2xl shadow-xl relative z-10"
                src={myimage}
                alt="Muhammad Ammar, Frontend Developer"
              />
              <div className="absolute -top-4 -right-4 w-full h-full bg-red rounded-2xl opacity-10" />
            </div>

            <div className="order-1 lg:order-2">
              <div className="mb-6">
                <Eyebrow>whoami</Eyebrow>
              </div>
              <h1 className="text-4xl lg:text-6xl font-display font-medium mb-6 text-ink tracking-tight">
                About <span className="text-red">Me</span>
              </h1>
              <p className="text-lg text-muted mb-6 leading-relaxed">
                I'm Muhammad Ammar, a frontend developer with over three years
                of experience building websites that hold up. My journey
                started with WordPress and grew into modern React
                development.
              </p>
              <p className="text-lg text-muted mb-8 leading-relaxed">
                I care about the same three things on every project:
                responsive layouts, real performance, and a website that
                actually converts visitors — not just looks good in a
                screenshot.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {aboutStats.map((stat) => (
                  <StatCard key={stat.label} {...stat} />
                ))}
              </div>

              <Button href="#contact" icon="ri-arrow-right-line">
                Let's Work Together
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-cream/40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <SectionHeading eyebrow="skills --level" title="My" highlight="Skills" subtitle="Technical range and where I spend most of my time." />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {skillsData.map((category) => (
              <div key={category.category} className="bg-white rounded-2xl p-8 shadow-sm border border-border-soft">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-ink flex items-center justify-center">
                    <i className={`${category.icon} text-yellow text-xl`}></i>
                  </div>
                  <h3 className="text-lg font-display font-medium text-ink">{category.category}</h3>
                </div>
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <SectionHeading eyebrow="timeline --career" title="My" highlight="Journey" />
          <div className="max-w-3xl mx-auto">
            {timelineData.map((item) => (
              <TimelineItem key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-cream/40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <SectionHeading eyebrow="values --core" title="Core" highlight="Values" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 border border-border-soft hover:border-red">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-red flex items-center justify-center">
                  <i className={`${value.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-display font-medium mb-3 text-ink">{value.title}</h3>
                <p className="text-muted leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Create Something"
        highlight="Amazing"
        subtitle="Ready to bring your project to life? Get in touch and let's start building."
        ctaLabel="Contact Me"
      />
    </div>
  );
};

export default About;
