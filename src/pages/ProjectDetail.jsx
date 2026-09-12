import { useMemo } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { allProjects, categoryAccent } from "../data/projects";
import { getImage } from "../data/imageMap";
import { Button, TechChip } from "../components/ui";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import { site } from "../data/seo";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = useMemo(() => allProjects.find((p) => p.slug === slug), [slug]);

  const similarProjects = useMemo(
    () =>
      project
        ? allProjects.filter((p) => p.category === project.category && p.id !== project.id).slice(0, 3)
        : [],
    [project]
  );

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const imageSrc = getImage(project.imageKey);

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.shortDescription,
    url: `${site.url}/projects/${project.slug}`,
    creator: { "@type": "Person", name: "Muhammad Ammar" },
    keywords: project.technologies.join(", "),
  };

  return (
    <div>
      <Seo
        title={project.title}
        description={project.shortDescription}
        path={`/projects/${project.slug}`}
        image={imageSrc || undefined}
        structuredData={projectSchema}
      />

      <section className="pt-40 pb-16 lg:pt-48 lg:pb-20 bg-panel border-b border-line">
        <div className="container-page">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-stone mb-10 font-mono">
            <Link to="/" className="hover:text-brass transition-colors duration-300">home</Link>
            <span>/</span>
            <Link to="/projects" className="hover:text-brass transition-colors duration-300">projects</Link>
            <span>/</span>
            <span className="text-brass">{project.slug}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <span
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-mono mb-5 ${categoryAccent[project.category]}`}
              >
                {project.category}
              </span>
              <h1 className="text-4xl lg:text-5xl font-display font-medium mb-6 text-ink tracking-tight leading-[1.1]">
                {project.title}
              </h1>
              <p className="text-lg text-stone mb-8 leading-relaxed">{project.shortDescription}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <TechChip key={tech}>{tech}</TechChip>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                {project.link ? (
                  <Button href={project.link} external icon="ri-external-link-line">
                    Visit Live Website
                  </Button>
                ) : (
                  <span className="inline-flex items-center gap-3 border border-line text-stone px-7 py-3.5 rounded-md font-medium">
                    <i className="ri-time-line" aria-hidden="true"></i>
                    Live Link Coming Soon
                  </span>
                )}
                {project.githubLink && (
                  <Button href={project.githubLink} external variant="ghost" icon="ri-github-fill">
                    View Code
                  </Button>
                )}
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-lg overflow-hidden border border-line h-[340px] lg:h-[420px]">
                {imageSrc ? (
                  <img
                    src={imageSrc}
                    alt={`Screenshot of the ${project.title} website`}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full bg-panel flex flex-col items-center justify-center gap-3 text-stone">
                    <i className="ri-image-line text-5xl" aria-hidden="true"></i>
                    <span className="font-mono text-sm">Image coming soon</span>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-14">
              <Reveal>
                <h2 className="text-2xl font-display font-medium mb-5 text-ink">About this project</h2>
                <p className="text-stone leading-relaxed text-lg">{project.description}</p>
                {project.role && (
                  <p className="text-sm font-mono text-brass mt-4">Role: {project.role}</p>
                )}
              </Reveal>

              {project.challenge && (
                <Reveal>
                  <h2 className="text-2xl font-display font-medium mb-5 text-ink">The challenge</h2>
                  <div className="bg-panel border border-line rounded-lg p-6">
                    <p className="text-ink/80 leading-relaxed">{project.challenge}</p>
                  </div>
                </Reveal>
              )}

              {project.outcome && (
                <Reveal>
                  <h2 className="text-2xl font-display font-medium mb-5 text-ink">The outcome</h2>
                  <div className="bg-ink rounded-lg p-6">
                    <p className="text-paper/85 leading-relaxed">{project.outcome}</p>
                  </div>
                </Reveal>
              )}

              <Reveal>
                <h2 className="text-2xl font-display font-medium mb-5 text-ink">Key features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 border border-line rounded-md p-4">
                      <i className="ri-check-line text-brass flex-shrink-0" aria-hidden="true"></i>
                      <span className="text-ink/80 text-[15px]">{feature}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="space-y-6">
              <Reveal className="border border-line rounded-lg p-6">
                <h3 className="text-lg font-display font-medium text-ink mb-4">Technologies used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <TechChip key={tech}>{tech}</TechChip>
                  ))}
                </div>
              </Reveal>

              <Reveal className="bg-ink rounded-lg p-6">
                <h3 className="text-lg font-display font-medium text-paper mb-2">Like what you see?</h3>
                <p className="text-paper/65 text-sm leading-relaxed mb-5">
                  Let's talk through what a project like this could look like for you.
                </p>
                <Button to="/contact" variant="light" icon="ri-arrow-right-line">
                  Get in Touch
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {similarProjects.length > 0 && (
        <section className="py-20 lg:py-28 bg-panel border-t border-line">
          <div className="container-page">
            <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-display font-medium text-ink tracking-tight">
                  More {project.category}
                </h2>
                <p className="text-stone mt-2">Similar work you might like.</p>
              </div>
              <Link
                to="/projects"
                className="hidden md:inline-flex items-center gap-2 border border-line text-ink px-6 py-3 rounded-md font-medium transition-all duration-300 hover:border-brass hover:text-brass"
              >
                View All
                <i className="ri-arrow-right-line" aria-hidden="true"></i>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {similarProjects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProjectDetail;
