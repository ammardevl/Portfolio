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

      <section className="pt-40 pb-20 lg:pt-52 lg:pb-28">
        <div className="container-page">
          <div className="max-w-4xl">
            <p data-hero className="font-mono text-sm text-brass mb-6">
              Available for new projects
            </p>
            <h1
              data-hero
              className="text-5xl sm:text-6xl lg:text-7xl font-display font-medium text-ink tracking-tight leading-[1.05] mb-8"
            >
              Frontend development, built with a designer's eye for detail.
            </h1>
            <p data-hero className="text-lg lg:text-xl text-stone leading-relaxed mb-10 max-w-2xl">
              I'm Muhammad Ammar, a frontend and website developer building responsive,
              SEO-optimized sites in React, Next.js, WordPress, Webflow, and Squarespace.
              AI-assisted workflows help me move faster, without cutting corners on the code
              that ships.
            </p>
            <div data-hero className="flex flex-col sm:flex-row gap-4 mb-20">
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

          <div data-hero className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16 max-w-2xl">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="border-l-2 border-line pl-4">
                <div className="text-2xl font-display font-medium text-ink">{stat.number}</div>
                <div className="text-stone text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          <div data-hero className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2.5 border border-line rounded-md px-4 py-2.5 text-sm text-ink transition-colors duration-300 hover:border-brass"
              >
                <i className={`${tech.icon} text-brass`} aria-hidden="true"></i>
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 border-t border-line">
        <div className="container-page">
          <Reveal stagger className="flex items-end justify-between mb-14 flex-wrap gap-6">
            <SectionHeading
              kicker="Selected work"
              title="Featured projects"
              subtitle="A few recent builds and what they were built to do."
              className="mb-0"
            />
          </Reveal>
          <Reveal stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </Reveal>
          <div className="text-center">
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
