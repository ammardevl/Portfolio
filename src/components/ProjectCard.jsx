import { Link } from "react-router-dom";
import { getImage } from "../data/imageMap";

const ProjectCard = ({ project }) => {
  const image = getImage(project.imageKey);

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block bg-paper border border-line rounded-lg overflow-hidden transition-all duration-400 hover:border-brass hover:shadow-soft"
    >
      <div className="aspect-[16/10] bg-panel overflow-hidden relative">
        {image ? (
          <img
            src={image}
            alt={`Screenshot of the ${project.title} website homepage`}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-mono text-xs text-stone">
              Image coming soon
            </span>
          </div>
        )}
      </div>
      <div className="p-6 lg:p-7">
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-xs text-brass uppercase tracking-wide">
            {project.category}
          </span>
          <i
            className="ri-arrow-right-up-line text-stone transition-all duration-300 group-hover:text-brass group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          ></i>
        </div>
        <h3 className="text-xl font-display font-medium text-ink mb-2">
          {project.title}
        </h3>
        <p className="text-stone text-sm leading-relaxed line-clamp-2 mb-5">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono text-stone bg-panel px-2.5 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
