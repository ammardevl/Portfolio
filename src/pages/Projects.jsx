import { useState } from "react";
import { allProjects, categories, categoryAccent } from "../data/projects";
import { getImage } from "../data/imageMap";
import { SectionHeading } from "../components/ui";

const ProjectCard = ({ project }) => {
  const imageSrc = getImage(project.imageKey);

  return (
    <a
      href={`#${project.slug}`}
      className="group bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border-soft hover:border-red block"
    >
      <div className="relative overflow-hidden h-64">
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
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-3 group-hover:translate-y-0">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="px-3 py-1 bg-white/90 text-ink rounded-full text-xs font-mono">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <span
          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-mono font-medium ${categoryAccent[project.category]}`}
        >
          {project.category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-display font-medium mb-3 text-ink group-hover:text-red transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-muted mb-4 leading-relaxed text-sm line-clamp-2">{project.shortDescription}</p>
        <span className="text-red font-medium text-sm inline-flex items-center gap-2">
          View case study
          <i className="ri-arrow-right-line"></i>
        </span>
      </div>
    </a>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="projects --all"
            title="My"
            highlight="Projects"
            subtitle="From custom-coded React apps to WordPress builds and AI-assisted work — a look at how each one was actually built."
          />

          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full font-mono text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-ink text-cream"
                    : "bg-surface text-ink/70 border border-border-soft hover:border-red hover:text-red"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Projects;
