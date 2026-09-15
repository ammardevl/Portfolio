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

      <section className="ammar-dev-page-hero ammar-dev-page-hero--tight">
        <div className="ammar-dev-container">
          <Reveal className="ammar-dev-max-w-3xl">
            <p className="ammar-dev-eyebrow">Selected work</p>
            <h1 className="ammar-dev-heading-xl">Projects</h1>
            <p className="ammar-dev-lede">
              Custom-coded builds, WordPress sites, and Squarespace work. Filter by category, or
              open a project for the full case study.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="ammar-dev-section ammar-dev-section--no-top">
        <div className="ammar-dev-container">
          <div className="ammar-dev-filter-bar" role="tablist" aria-label="Filter projects by category">
            {categories.map((category) => (
              <button
                key={category}
                role="tab"
                aria-selected={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                className={`ammar-dev-filter-btn ${activeCategory === category ? "ammar-dev-filter-btn--active" : ""}`}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredProjects.length > 0 ? (
            <div className="ammar-dev-grid-cards">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <p className="ammar-dev-empty-state">No projects in this category yet.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
