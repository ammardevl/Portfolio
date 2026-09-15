import { featuredProjects } from "../data/projects";
import { techStack } from "../data/techStack";
import { aboutStats } from "../data/about";
import { Button, SectionHeading, CTASection } from "../components/ui";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import { useHeroEntrance } from "../lib/animate";
import { site } from "../data/seo";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Ammar",
  url: site.url,
  jobTitle: "Frontend & Website Developer",
  description: site.description,
  sameAs: [
    "https://www.linkedin.com/in/muhammad-ammar-1a701130b/",
    "https://github.com/ammardevl",
  ],
};

const Home = () => {
  useHeroEntrance("[data-hero]");

  return (
    <div>
      <Seo
        title="Frontend & Website Developer"
        description={site.description}
        path="/"
        structuredData={personSchema}
      />

      <section className="ammar-dev-hero">
        <div className="ammar-dev-container">
          <div className="ammar-dev-hero__intro">
            <p data-hero className="ammar-dev-eyebrow">
              Available for new projects
            </p>
            <h1 data-hero className="ammar-dev-hero__title">
              Frontend development, built with a designer's eye for detail.
            </h1>
            <p data-hero className="ammar-dev-hero__desc">
              I'm Muhammad Ammar, a frontend and website developer building responsive,
              SEO-optimized sites in React, Next.js, WordPress, Webflow, and Squarespace.
              AI-assisted workflows help me move faster, without cutting corners on the code
              that ships.
            </p>
            <div data-hero className="ammar-dev-hero__actions">
              <Button
                href="https://www.upwork.com/freelancers/~013ddb5d853b1fc89d"
                external
                icon="ri-arrow-right-line"
              >
                Hire Me
              </Button>
              <Button to="/projects" variant="ghost" icon="ri-arrow-down-line">
                View My Work
              </Button>
            </div>
          </div>

          <div data-hero className="ammar-dev-hero__stats">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="ammar-dev-hero__stat">
                <div className="ammar-dev-hero__stat-number">{stat.number}</div>
                <div className="ammar-dev-hero__stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <div data-hero className="ammar-dev-hero__tech">
            {techStack.map((tech) => (
              <div key={tech.name} className="ammar-dev-hero__tech-item">
                <i className={tech.icon} aria-hidden="true"></i>
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ammar-dev-section ammar-dev-section--bordered-top">
        <div className="ammar-dev-container">
          <Reveal stagger className="ammar-dev-featured-header">
            <SectionHeading
              kicker="Selected work"
              title="Featured projects"
              subtitle="A few recent builds and what they were built to do."
              tight
            />
          </Reveal>
          <Reveal stagger className="ammar-dev-grid-cards ammar-dev-grid-cards--spaced">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </Reveal>
          <div className="ammar-dev-section-footer-cta">
            <Button to="/projects" icon="ri-arrow-right-line">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to start your project?"
        subtitle="Let's collaborate and build something your users will actually enjoy using."
        ctaLabel="Get in Touch"
      />
    </div>
  );
};

export default Home;
