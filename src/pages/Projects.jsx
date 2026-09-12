import { useState, useMemo } from "react";
import { allProjects, categories } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(
    () =>
      activeCategory === "All" ? allProjects : allProjects.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <div>
      <Seo
        title="Projects"
        description="A collection of custom-coded, WordPress, and Squarespace websites built by Muhammad Ammar for clients across the US, UK, and Australia."
        path="/projects"
      />

      <section className="pt-40 pb-16 lg:pt-48 lg:pb-20">
        <div className="container-page">
          <Reveal className="max-w-3xl">
            <p className="font-mono text-sm text-brass mb-6">Selected work</p>
            <h1 className="text-5xl lg:text-6xl font-display font-medium text-ink tracking-tight leading-[1.08] mb-6">
              Projects
            </h1>
            <p className="text-lg text-stone leading-relaxed">
              Custom-coded builds, WordPress sites, and Squarespace work. Filter by category, or
              open a project for the full case study.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="container-page">
          <div className="flex flex-wrap gap-2 mb-14" role="tablist" aria-label="Filter projects by category">
            {categories.map((category) => (
              <button
                key={category}
                role="tab"
                aria-selected={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-md font-medium text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-ink text-paper"
                    : "border border-line text-ink/70 hover:border-brass hover:text-brass"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <p className="text-stone text-center py-16">No projects in this category yet.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
