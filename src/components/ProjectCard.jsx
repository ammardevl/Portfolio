import { Link } from "react-router-dom";
import { getImage } from "../data/imageMap";

const ProjectCard = ({ project }) => {
  const image = getImage(project.imageKey);

  return (
    <Link to={`/projects/${project.slug}`} className="ammar-dev-project-card">
      <div className="ammar-dev-project-card__image-wrap">
        {image ? (
          <img
            src={image}
            alt={`Screenshot of the ${project.title} website homepage`}
            loading="lazy"
            className="ammar-dev-project-card__image"
          />
        ) : (
          <div className="ammar-dev-project-card__placeholder">
            <span>Image coming soon</span>
          </div>
        )}
      </div>
      <div className="ammar-dev-project-card__body">
        <div className="ammar-dev-project-card__meta">
          <span className="ammar-dev-project-card__category">{project.category}</span>
          <i className="ri-arrow-right-up-line ammar-dev-project-card__arrow" aria-hidden="true"></i>
        </div>
        <h3 className="ammar-dev-project-card__title">{project.title}</h3>
        <p className="ammar-dev-project-card__desc ammar-dev-line-clamp-2">{project.shortDescription}</p>
        <div className="ammar-dev-project-card__tags">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="ammar-dev-project-card__tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
