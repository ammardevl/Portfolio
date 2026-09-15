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

      <section className="ammar-dev-page-hero ammar-dev-detail-hero">
        <div className="ammar-dev-container">
          <nav aria-label="Breadcrumb" className="ammar-dev-breadcrumb">
            <Link to="/" className="ammar-dev-breadcrumb__link">home</Link>
            <span>/</span>
            <Link to="/projects" className="ammar-dev-breadcrumb__link">projects</Link>
            <span>/</span>
            <span className="ammar-dev-breadcrumb__current">{project.slug}</span>
          </nav>

          <div className="ammar-dev-detail-grid">
            <Reveal>
              <span className={`ammar-dev-badge ${categoryAccent[project.category]}`}>{project.category}</span>
              <h1 className="ammar-dev-detail-title">{project.title}</h1>
              <p className="ammar-dev-detail-desc">{project.shortDescription}</p>

              <div className="ammar-dev-detail-tags">
                {project.technologies.map((tech) => (
                  <TechChip key={tech}>{tech}</TechChip>
                ))}
              </div>

              <div className="ammar-dev-detail-actions">
                {project.link ? (
                  <Button href={project.link} external icon="ri-external-link-line">
                    Visit Live Website
                  </Button>
                ) : (
                  <span className="ammar-dev-btn--placeholder">
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
              <div className="ammar-dev-detail-image-wrap">
                {imageSrc ? (
                  <img
                    src={imageSrc}
                    alt={`Screenshot of the ${project.title} website`}
                    className="ammar-dev-detail-image"
                  />
                ) : (
                  <div className="ammar-dev-detail-image-placeholder">
                    <i className="ri-image-line" aria-hidden="true"></i>
                    <span>Image coming soon</span>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="ammar-dev-section">
        <div className="ammar-dev-container">
          <div className="ammar-dev-content-grid">
            <div className="ammar-dev-content-main">
              <Reveal>
                <h2 className="ammar-dev-content-block__title">About this project</h2>
                <p className="ammar-dev-content-block__text">{project.description}</p>
                {project.role && <p className="ammar-dev-role-note">Role: {project.role}</p>}
              </Reveal>

              {project.challenge && (
                <Reveal>
                  <h2 className="ammar-dev-content-block__title">The challenge</h2>
                  <div className="ammar-dev-callout">
                    <p>{project.challenge}</p>
                  </div>
                </Reveal>
              )}

              {project.outcome && (
                <Reveal>
                  <h2 className="ammar-dev-content-block__title">The outcome</h2>
                  <div className="ammar-dev-callout ammar-dev-callout--dark">
                    <p>{project.outcome}</p>
                  </div>
                </Reveal>
              )}

              <Reveal>
                <h2 className="ammar-dev-content-block__title">Key features</h2>
                <div className="ammar-dev-feature-grid">
                  {project.features.map((feature) => (
                    <div key={feature} className="ammar-dev-feature-item">
                      <i className="ri-check-line" aria-hidden="true"></i>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="ammar-dev-sidebar">
              <Reveal className="ammar-dev-sidebar-card">
                <h3 className="ammar-dev-sidebar-card__title">Technologies used</h3>
                <div className="ammar-dev-sidebar-card__tags">
                  {project.technologies.map((tech) => (
                    <TechChip key={tech}>{tech}</TechChip>
                  ))}
                </div>
              </Reveal>

              <Reveal className="ammar-dev-sidebar-card ammar-dev-sidebar-card--dark">
                <h3 className="ammar-dev-sidebar-card__title">Like what you see?</h3>
                <p className="ammar-dev-sidebar-card__desc">
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
        <section className="ammar-dev-section ammar-dev-section--panel ammar-dev-section--bordered-top">
          <div className="ammar-dev-container">
            <div className="ammar-dev-similar-header">
              <div>
                <h2 className="ammar-dev-similar-header__title">More {project.category}</h2>
                <p className="ammar-dev-similar-header__desc">Similar work you might like.</p>
              </div>
              <Link to="/projects" className="ammar-dev-similar-link">
                View All
                <i className="ri-arrow-right-line" aria-hidden="true"></i>
              </Link>
            </div>

            <div className="ammar-dev-grid-cards">
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
