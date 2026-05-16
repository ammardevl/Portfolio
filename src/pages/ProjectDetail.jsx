import { useMemo } from "react";
import { allProjects } from "../data/projects";
import { getImage } from "../data/imageMap";

const SimilarProjectCard = ({ project }) => {
  const imageSrc = getImage(project.imageKey);
  return (
    <a
      href={`#${project.slug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 hover:border-orange-500"
      style={{ textDecoration: "none", color: "inherit", display: "block" }}
    >
      <div className="relative overflow-hidden h-48">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center gap-2 text-gray-400">
            <i className="ri-image-line text-3xl"></i>
            <span className="text-sm">Image coming soon</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 bg-orange-500 text-white rounded-full text-xs font-medium">
            {project.category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h4 className="text-lg font-medium mb-2 text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
          {project.title}
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed" style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {project.shortDescription}
        </p>
      </div>
    </a>
  );
};

const ProjectDetail = ({ slug }) => {
  const project = useMemo(
    () => allProjects.find((p) => p.slug === slug),
    [slug]
  );

  const similarProjects = useMemo(
    () =>
      project
        ? allProjects
            .filter((p) => p.category === project.category && p.id !== project.id)
            .slice(0, 3)
        : [],
    [project]
  );

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <i className="ri-error-warning-line text-6xl text-orange-500 mb-4" style={{ display: "block" }}></i>
          <h2 className="text-2xl font-medium text-gray-900 mb-4">Project not found</h2>
          <a
            href="#projects"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <i className="ri-arrow-left-line"></i>
            Back to Projects
          </a>
        </div>
      </div>
    );
  }

  const imageSrc = getImage(project.imageKey);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">

      {/* Hero */}
      <section className="py-16 lg:py-24 bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <a href="#home" className="hover:text-orange-500 transition-colors duration-300">Home</a>
            <i className="ri-arrow-right-s-line"></i>
            <a href="#projects" className="hover:text-orange-500 transition-colors duration-300">Projects</a>
            <i className="ri-arrow-right-s-line"></i>
            <span className="text-orange-500">{project.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
                  <i className="ri-folder-line"></i>
                  {project.category}
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-light mb-6 text-gray-900 tracking-tight leading-tight">
                {project.title}
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {project.shortDescription}
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Live link */}
              <div className="flex flex-wrap gap-4">
                {project.link && project.link !== "#" ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    <i className="ri-external-link-line"></i>
                    Visit Live Website
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-3 border border-gray-300 text-gray-400 px-8 py-4 rounded-full font-medium cursor-not-allowed">
                    <i className="ri-time-line"></i>
                    Live Link Coming Soon
                  </span>
                )}
                <a
                  href="#projects"
                  className="inline-flex items-center gap-3 border border-gray-300 text-gray-700 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:border-orange-500 hover:text-orange-500"
                >
                  <i className="ri-arrow-left-line"></i>
                  All Projects
                </a>
              </div>
            </div>

            {/* Cover image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ height: "400px" }}>
                {imageSrc ? (
                  <img
                    src={imageSrc}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center gap-3 text-gray-400">
                    <i className="ri-image-line text-6xl"></i>
                    <span>Image coming soon</span>
                  </div>
                )}
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl opacity-10 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">

              {/* About */}
              <div>
                <h2 className="text-3xl font-light mb-6 text-gray-900 flex items-center gap-3">
                  <span className="w-1 h-8 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full inline-block"></span>
                  About This Project
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">{project.description}</p>
              </div>

              {/* Challenge */}
              {project.challenge && (
                <div>
                  <h2 className="text-3xl font-light mb-6 text-gray-900 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full inline-block"></span>
                    The Challenge
                  </h2>
                  <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                    <p className="text-orange-900 leading-relaxed">{project.challenge}</p>
                  </div>
                </div>
              )}

              {/* Outcome */}
              {project.outcome && (
                <div>
                  <h2 className="text-3xl font-light mb-6 text-gray-900 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full inline-block"></span>
                    The Outcome
                  </h2>
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                    <p className="text-green-900 leading-relaxed">{project.outcome}</p>
                  </div>
                </div>
              )}

              {/* Key Features */}
              <div>
                <h2 className="text-3xl font-light mb-6 text-gray-900 flex items-center gap-3">
                  <span className="w-1 h-8 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full inline-block"></span>
                  Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                        <i className="ri-check-line text-orange-500"></i>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">

              {/* Tech Used */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
                  <i className="ri-code-s-slash-line text-orange-500"></i>
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
                  <i className="ri-folder-line text-orange-500"></i>
                  Category
                </h3>
                <span className="px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-medium">
                  {project.category}
                </span>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
                <i className="ri-rocket-line text-3xl mb-3" style={{ display: "block" }}></i>
                <h3 className="text-xl font-medium mb-2">Like what you see?</h3>
                <p className="text-white/90 text-sm leading-relaxed mb-4">
                  Let's build something amazing together. Get in touch to discuss your project.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm"
                >
                  Get In Touch
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Projects */}
      {similarProjects.length > 0 && (
        <section className="py-20 lg:py-28 bg-white border-t border-gray-200">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl lg:text-5xl font-light text-gray-900 tracking-tight">
                  More <span className="text-orange-500">{project.category}</span> Projects
                </h2>
                <p className="text-gray-600 mt-2">Similar work you might like</p>
              </div>
              <a
                href="#projects"
                className="hidden md:inline-flex items-center gap-3 border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:border-orange-500 hover:text-orange-500"
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
