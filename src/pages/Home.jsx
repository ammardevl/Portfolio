import { featuredProjects, categoryAccent } from "../data/projects";
import { getImage } from "../data/imageMap";
import { Eyebrow, Button, SectionHeading, CTASection } from "../components/ui";

const techStack = [
  { name: "HTML5", icon: "ri-html5-line" },
  { name: "CSS3", icon: "ri-css3-line" },
  { name: "JavaScript", icon: "ri-javascript-fill" },
  { name: "React", icon: "ri-reactjs-line" },
  { name: "WordPress", icon: "ri-wordpress-fill" },
];

const ProjectCard = ({ project }) => {
  const imageSrc = getImage(project.imageKey);

  return (
    <a
      href={`#${project.slug}`}
      className="group bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 border border-border-soft block"
    >
      <div className="relative overflow-hidden h-60">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-cream flex flex-col items-center justify-center gap-2 text-ink/40">
            <i className="ri-image-line text-4xl"></i>
            <span className="text-sm">Image coming soon</span>
          </div>
        )}
        <span
          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-mono font-medium ${categoryAccent[project.category]}`}
        >
          {project.category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-display font-medium mb-3 text-ink">{project.title}</h3>
        <p className="text-muted mb-5 leading-relaxed text-sm">{project.shortDescription}</p>
        <span className="text-red font-medium text-sm inline-flex items-center gap-2">
          View case study
          <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300"></i>
        </span>
      </div>
    </a>
  );
};

const Home = () => {
  return (
    <div>
      <section className="flex items-center bg-surface py-16 lg:pt-24 lg:pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #191919 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 w-full relative">
          <div className="flex flex-col">
            <div className="mb-6">
              <Eyebrow>status --available</Eyebrow>
            </div>

            <h1 className="text-5xl lg:text-8xl md:w-[85%] font-display font-medium mb-6 text-ink tracking-tight leading-[1.05]">
              Frontend <span className="text-red">Dev</span> Who Thinks Like a{" "}
              <span className="text-red">Designer.</span>
            </h1>

            <p className="text-lg max-md:w-full w-[70dvw] lg:text-xl text-muted mb-8 leading-relaxed">
              I'm Muhammad Ammar — a frontend developer building responsive,
              SEO-optimized, fast websites, using modern web technologies and
              AI-assisted workflows to move quicker without cutting corners.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-14">
              <Button href="https://www.upwork.com/freelancers/~013ddb5d853b1fc89d" external icon="ri-arrow-right-line">
                Hire Me
              </Button>
              <Button href="#projects" variant="ghost" icon="ri-arrow-down-line">
                View My Work
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="group bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 border border-border-soft"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-ink flex items-center justify-center group-hover:bg-red transition-colors duration-300">
                    <i className={`${tech.icon} text-cream text-2xl`}></i>
                  </div>
                  <h3 className="text-sm font-medium text-ink">{tech.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 lg:py-32 bg-cream/40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="projects --featured"
            title="Featured"
            highlight="Projects"
            subtitle="A few recent builds and the results they shipped."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="text-center">
            <Button href="#projects" icon="ri-arrow-right-line">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Start Your"
        highlight="Project?"
        subtitle="Let's collaborate and build something your users will actually enjoy using. Get in touch today."
        ctaLabel="Get In Touch"
      />
    </div>
  );
};

export default Home;
