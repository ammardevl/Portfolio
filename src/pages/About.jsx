import myimage from "../assets/my-image.png";
import { aboutStats, timelineData, values } from "../data/about";
import { skillGroups, tierOrder } from "../data/skills";
import { Button, SectionHeading, CTASection } from "../components/ui";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";

const tierClass = {
  Core: "ammar-dev-skill-tag--core",
  Working: "ammar-dev-skill-tag--working",
  Familiar: "ammar-dev-skill-tag--familiar",
};

const dotClass = {
  Core: "ammar-dev-skill-legend__dot--core",
  Working: "ammar-dev-skill-legend__dot--working",
  Familiar: "ammar-dev-skill-legend__dot--familiar",
};

const SkillTag = ({ skill }) => (
  <span className={`ammar-dev-skill-tag ${tierClass[skill.tier]}`}>{skill.name}</span>
);

const TimelineItem = ({ item }) => (
  <div className="ammar-dev-timeline-item">
    <div className="ammar-dev-timeline-item__line" aria-hidden="true" />
    <div className="ammar-dev-timeline-item__icon-wrap">
      <div className="ammar-dev-timeline-item__icon">
        <i className={item.icon} aria-hidden="true"></i>
      </div>
    </div>
    <div className="ammar-dev-timeline-item__content">
      <span className="ammar-dev-timeline-item__year">{item.year}</span>
      <h3 className="ammar-dev-timeline-item__title">{item.title}</h3>
      <p className="ammar-dev-timeline-item__company">{item.company}</p>
      <p className="ammar-dev-timeline-item__desc">{item.description}</p>
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

    <section className="ammar-dev-page-hero">
      <div className="ammar-dev-container">
        <div className="ammar-dev-about-hero__grid">
          <Reveal className="ammar-dev-about-image-col">
            <div className="ammar-dev-about-image-wrap">
              <img
                className="ammar-dev-about-image"
                src={myimage}
                alt="Muhammad Ammar, frontend and website developer"
                width="600"
                height="700"
              />
              <div className="ammar-dev-about-image-frame" aria-hidden="true" />
            </div>
          </Reveal>

          <Reveal className="ammar-dev-about-content-col">
            <p className="ammar-dev-eyebrow">About me</p>
            <h1 className="ammar-dev-about-title">
              A developer who thinks about the whole page, not just the code
            </h1>
            <p className="ammar-dev-about-desc">
              I'm Muhammad Ammar, a frontend developer with over three years of experience
              building websites that hold up. My start was WordPress, and it grew from there
              into React, Next.js, and no-code platforms like Webflow and Squarespace.
            </p>
            <p className="ammar-dev-about-desc">
              The same three things matter on every project: a layout that works on any screen,
              real performance, and a site that actually converts visitors, not just one that
              looks good in a screenshot.
            </p>

            <div className="ammar-dev-about-stats">
              {aboutStats.map((stat) => (
                <div key={stat.label} className="ammar-dev-about-stat">
                  <div className="ammar-dev-about-stat-number">{stat.number}</div>
                  <div className="ammar-dev-about-stat-label">{stat.label}</div>
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

    <section className="ammar-dev-section ammar-dev-section--panel">
      <div className="ammar-dev-container">
        <Reveal>
          <SectionHeading
            kicker="Capabilities"
            title="My skills"
            subtitle="Grouped by what I actually work in daily, versus what I'm capable of but reach for less often."
          />
        </Reveal>

        <Reveal className="ammar-dev-skill-legend">
          {tierOrder.map((tier) => (
            <div key={tier} className="ammar-dev-skill-legend__item">
              <span className={`ammar-dev-skill-legend__dot ${dotClass[tier]}`} aria-hidden="true"></span>
              <span>{tier}</span>
            </div>
          ))}
        </Reveal>

        <Reveal stagger className="ammar-dev-grid-3col-sm">
          {skillGroups.map((group) => (
            <div key={group.category} className="ammar-dev-skill-group">
              <div className="ammar-dev-skill-group__header">
                <div className="ammar-dev-skill-group__icon">
                  <i className={group.icon} aria-hidden="true"></i>
                </div>
                <h3 className="ammar-dev-skill-group__title">{group.category}</h3>
              </div>
              <div className="ammar-dev-skill-tags">
                {group.skills.map((skill) => (
                  <SkillTag key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>

    <section className="ammar-dev-section">
      <div className="ammar-dev-container">
        <Reveal>
          <SectionHeading kicker="Career" title="My journey" />
        </Reveal>
        <div className="ammar-dev-timeline-wrap">
          {timelineData.map((item) => (
            <Reveal key={item.title}>
              <TimelineItem item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="ammar-dev-section ammar-dev-section--panel">
      <div className="ammar-dev-container">
        <Reveal>
          <SectionHeading kicker="How I work" title="Core values" />
        </Reveal>
        <Reveal stagger className="ammar-dev-grid-4col">
          {values.map((value) => (
            <div key={value.title} className="ammar-dev-value-card">
              <div className="ammar-dev-value-card__icon">
                <i className={value.icon} aria-hidden="true"></i>
              </div>
              <h3 className="ammar-dev-value-card__title">{value.title}</h3>
              <p className="ammar-dev-value-card__desc">{value.description}</p>
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
