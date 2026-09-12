import myimage from "../assets/my-image.png";
import { aboutStats, timelineData, values } from "../data/about";
import { skillGroups, tierOrder } from "../data/skills";
import { Button, SectionHeading } from "../components/ui";
import { CTASection } from "../components/ui";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";

const tierStyles = {
  Core: "bg-ink text-paper",
  Working: "bg-brass text-paper",
  Familiar: "border border-line text-stone",
};

const SkillTag = ({ skill }) => (
  <span
    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm ${tierStyles[skill.tier]}`}
  >
    {skill.name}
  </span>
);

const TimelineItem = ({ item }) => (
  <div className="relative flex gap-6 pb-12 last:pb-0">
    <div
      className="absolute left-[27px] top-14 bottom-0 w-px bg-line"
      aria-hidden="true"
    />
    <div className="relative z-10 flex-shrink-0">
      <div className="w-14 h-14 rounded-full bg-ink flex items-center justify-center">
        <i
          className={`${item.icon} text-brass-soft text-xl`}
          aria-hidden="true"
        ></i>
      </div>
    </div>
    <div className="flex-1 pt-2">
      <span className="inline-block px-3 py-1 bg-panel text-ink rounded-md text-sm font-mono mb-3">
        {item.year}
      </span>
      <h3 className="text-xl font-display font-medium text-ink mb-1">
        {item.title}
      </h3>
      <p className="text-brass font-medium mb-3">{item.company}</p>
      <p className="text-stone leading-relaxed">{item.description}</p>
    </div>
  </div>
);

const About = () => (
  <div>
    <Seo
      title="About"
      description="Muhammad Ammar is a frontend and website developer with three-plus years building React, Next.js, and WordPress sites for clients worldwide."
      path="/about"
    />

    <section className="pt-40 pb-20 lg:pt-48 lg:pb-28">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal className="order-2 lg:order-1">
            <div className="relative">
              <img
                className="w-full h-96 lg:h-[560px] object-cover object-top rounded-lg relative z-10"
                src={myimage}
                alt="Muhammad Ammar, frontend and website developer"
                width="600"
                height="700"
              />
              <div
                className="absolute -bottom-4 -right-4 w-full h-full border border-line rounded-lg -z-0"
                aria-hidden="true"
              />
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2">
            <p className="font-mono text-sm text-brass mb-6">About me</p>
            <h1 className="text-4xl lg:text-6xl font-display font-medium mb-6 text-ink tracking-tight leading-[1.1]">
              A developer who thinks about the whole page, not just the code
            </h1>
            <p className="text-lg text-stone mb-6 leading-relaxed">
              I'm Muhammad Ammar, a frontend developer with over three years of
              experience building websites that hold up. My start was WordPress,
              and it grew from there into React, Next.js, and no-code platforms
              like Webflow and Squarespace.
            </p>
            <p className="text-lg text-stone mb-8 leading-relaxed">
              The same three things matter on every project: a layout that works
              on any screen, real performance, and a site that actually converts
              visitors, not just one that looks good in a screenshot.
            </p>

            <div className="grid grid-cols-2 gap-5 mb-8">
              {aboutStats.map((stat) => (
                <div key={stat.label} className="border-l-2 border-line pl-4">
                  <div className="text-2xl font-display font-medium text-ink">
                    {stat.number}
                  </div>
                  <div className="text-stone text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button to="/contact" icon="ri-arrow-right-line">
              Let's Work Together
            </Button>
          </Reveal>
        </div>
      </div>
    </section>

    <section className="py-24 lg:py-32 bg-panel">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            kicker="Capabilities"
            title="My skills"
            subtitle="Grouped by what I actually work in daily, versus what I'm capable of but reach for less often."
          />
        </Reveal>

        <Reveal className="flex flex-wrap gap-5 mb-12 text-sm">
          {tierOrder.map((tier) => (
            <div key={tier} className="flex items-center gap-2">
              <span
                className={`w-3 h-3 rounded-sm ${tierStyles[tier].split(" ")[0]}`}
                aria-hidden="true"
              ></span>
              <span className="text-stone">{tier}</span>
            </div>
          ))}
        </Reveal>

        <Reveal stagger className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-paper rounded-lg p-8 border border-line"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-md bg-ink flex items-center justify-center">
                  <i
                    className={`${group.icon} text-brass-soft text-lg`}
                    aria-hidden="true"
                  ></i>
                </div>
                <h3 className="text-lg font-display font-medium text-ink">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <SkillTag key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>

    <section className="py-24 lg:py-32">
      <div className="container-page">
        <Reveal>
          <SectionHeading kicker="Career" title="My journey" />
        </Reveal>
        <div className="max-w-3xl mx-auto">
          {timelineData.map((item) => (
            <Reveal key={item.title}>
              <TimelineItem item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 lg:py-32 bg-panel">
      <div className="container-page">
        <Reveal>
          <SectionHeading kicker="How I work" title="Core values" />
        </Reveal>
        <Reveal
          stagger
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-paper rounded-lg p-8 text-center border border-line transition-colors duration-300 hover:border-brass"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-md bg-ink flex items-center justify-center">
                <i
                  className={`${value.icon} text-brass-soft text-xl`}
                  aria-hidden="true"
                ></i>
              </div>
              <h3 className="text-lg font-display font-medium mb-3 text-ink">
                {value.title}
              </h3>
              <p className="text-stone leading-relaxed text-[15px]">
                {value.description}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>

    <CTASection
      title="Let's create something worth shipping"
      subtitle="Ready to bring your project to life? Get in touch and let's start building."
      ctaLabel="Contact Me"
    />
  </div>
);

export default About;
