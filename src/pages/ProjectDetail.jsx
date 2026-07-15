import { useMemo } from "react";
import { allProjects, categoryAccent } from "../data/projects";
import { getImage } from "../data/imageMap";
import { Button, TechChip } from "../components/ui";

const SimilarProjectCard = ({ project }) => {
  const imageSrc = getImage(project.imageKey);
  return (
    <a
      href={`#${project.slug}`}
      className="group bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border-soft hover:border-red block"
    >
      <div className="relative overflow-hidden h-44">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-cream flex flex-col items-center justify-center gap-2 text-ink/40">
            <i className="ri-image-line text-3xl"></i>
            <span className="text-sm">Image coming soon</span>
          </div>
        )}
        <span
          className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-mono font-medium ${categoryAccent[project.category]}`}
        >
          {project.category}
        </span>
      </div>
      <div className="p-5">
        <h4 className="text-lg font-display font-medium mb-2 text-ink group-hover:text-red transition-colors duration-300">
          {project.title}
        </h4>
        <p className="text-muted text-sm leading-relaxed line-clamp-2">{project.shortDescription}</p>
      </div>
    </a>
  );
};

const ProjectDetail = ({ slug }) => {
  const project = useMemo(() => allProjects.find((p) => p.slug === slug), [slug]);

  const similarProjects = useMemo(
    () =>
      project
        ? allProjects.filter((p) => p.category === project.category && p.id !== project.id).slice(0, 3)
        : [],
    [project]
  );

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <i className="ri-error-warning-line text-6xl text-red mb-4 block"></i>
          <h2 className="text-2xl font-display font-medium text-ink mb-6">Project not found</h2>
          <Button href="#projects" icon="ri-arrow-left-line">
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  const imageSrc = getImage(project.imageKey);

  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 lg:py-24 bg-surface border-b border-border-soft">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted mb-8 font-mono">
            <a href="#home" className="hover:text-red transition-colors duration-300">home</a>
            <span>/</span>
            <a href="#projects" className="hover:text-red transition-colors duration-300">projects</a>
            <span>/</span>
            <span className="text-red">{project.slug}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-mono font-medium mb-4 ${categoryAccent[project.category]}`}
              >
                <i className="ri-folder-line"></i>
                {project.category}
              </span>
              <h1 className="text-4xl lg:text-6xl font-display font-medium mb-6 text-ink tracking-tight leading-tight">
                {project.title}
              </h1>
              <p className="text-lg text-muted mb-8 leading-relaxed">{project.shortDescription}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <TechChip key={tech}>{tech}</TechChip>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                {project.link && project.link !== "#" ? (
                  <Button href={project.link} external icon="ri-external-link-line">
                    Visit Live Website
                  </Button>
                ) : (
                  <span className="inline-flex items-center gap-3 border border-border-soft text-ink/40 px-7 py-3.5 rounded-full font-medium cursor-not-allowed">
                    <i className="ri-time-line"></i>
                    Live Link Coming Soon
                  </span>
                )}
                <Button href="#projects" variant="ghost" icon="ri-arrow-left-line">
                  All Projects
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl h-[400px]">
                {imageSrc ? (
                  <img src={imageSrc} alt={project.title} className="w-full h-full object-cover object-top" />
                ) : (
                  <div className="w-full h-full bg-cream flex flex-col items-center justify-center gap-3 text-ink/40">
                    <i className="ri-image-line text-6xl"></i>
                    <span>Image coming soon</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-display font-medium mb-6 text-ink flex items-center gap-3">
                  <span className="w-1 h-8 bg-red rounded-full inline-block"></span>
                  About This Project
                </h2>
                <p className="text-muted leading-relaxed text-lg">{project.description}</p>
              </div>

              {project.challenge && (
                <div>
                  <h2 className="text-3xl font-display font-medium mb-6 text-ink flex items-center gap-3">
                    <span className="w-1 h-8 bg-red rounded-full inline-block"></span>
                    The Challenge
                  </h2>
                  <div className="bg-cream/50 border border-border-soft rounded-2xl p-6">
                    <p className="text-ink/80 leading-relaxed">{project.challenge}</p>
                  </div>
                </div>
              )}

              {project.outcome && (
                <div>
                  <h2 className="text-3xl font-display font-medium mb-6 text-ink flex items-center gap-3">
                    <span className="w-1 h-8 bg-red rounded-full inline-block"></span>
                    The Outcome
                  </h2>
                  <div className="bg-ink rounded-2xl p-6">
                    <p className="text-cream leading-relaxed">{project.outcome}</p>
                  </div>
                </div>
              )}

              <div>
                <h2 className="text-3xl font-display font-medium mb-6 text-ink flex items-center gap-3">
                  <span className="w-1 h-8 bg-red rounded-full inline-block"></span>
                  Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 bg-surface rounded-xl p-4 border border-border-soft">
                      <div className="w-8 h-8 rounded-full bg-cream flex items-center justify-center flex-shrink-0">
                        <i className="ri-check-line text-red"></i>
                      </div>
                      <span className="text-ink/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-surface rounded-2xl p-6 border border-border-soft">
                <h3 className="text-lg font-display font-medium text-ink mb-4 flex items-center gap-2">
                  <i className="ri-code-s-slash-line text-red"></i>
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <TechChip key={tech}>{tech}</TechChip>
                  ))}
                </div>
              </div>

              <div className="bg-ink rounded-2xl p-6 text-white">
                <i className="ri-rocket-line text-3xl mb-3 block text-yellow"></i>
                <h3 className="text-xl font-display font-medium mb-2">Like what you see?</h3>
                <p className="text-cream/70 text-sm leading-relaxed mb-5">
                  Let's build something like this together — get in touch to talk through your project.
                </p>
                <Button href="#contact" variant="light" icon="ri-arrow-right-line">
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {similarProjects.length > 0 && (
        <section className="py-20 lg:py-28 bg-cream/30 border-t border-border-soft">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl lg:text-5xl font-display font-medium text-ink tracking-tight">
                  More <span className="text-red">{project.category}</span>
                </h2>
                <p className="text-muted mt-2">Similar work you might like</p>
              </div>
              <a
                href="#projects"
                className="hidden md:inline-flex items-center gap-3 border border-border-soft text-ink px-6 py-3 rounded-full font-medium transition-all duration-300 hover:border-red hover:text-red"
              >
                View All
                <i className="ri-arrow-right-line"></i>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {similarProjects.map((p) => (
                <SimilarProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProjectDetail;
