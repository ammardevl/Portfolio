import { useState, useEffect } from "react";
import { featuredProjects } from "../data/projects";
import { getImage } from "../data/imageMap";

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
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200"
      style={{ textDecoration: "none", color: "inherit", display: "block" }}
    >
      <div className="relative overflow-hidden h-64">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center gap-2 text-gray-400">
            <i className="ri-image-line text-4xl"></i>
            <span className="text-sm">Image coming soon</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-orange-500 hover:text-white">
          <i className="ri-external-link-line text-lg"></i>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium mb-3 text-gray-900">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

const TechStackItem = ({ tech }) => (
  <div className="group bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
    <div className="w-15 h-15 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
      <i className={`${tech.icon} text-white text-3xl`}></i>
    </div>
    <h3 className="text-lg font-medium text-gray-900">{tech.name}</h3>
  </div>
);

const Home = () => {
  return (
    <div>
      <section className="h-full flex items-center bg-gradient-to-br from-gray-50 to-white py-15 lg:pt-25 lg:pb-20 ">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 w-full">
          <div className="flex flex-col">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                Available for Remote Work
              </span>
            </div>

            <h1 className="text-5xl lg:text-8xl md:w-[80%] font-light mb-6 text-gray-900 tracking-tight leading-tight">
              Frontend <span className="text-orange-500">Dev</span> Who Thinks
              Like a <span className="text-orange-500">Designer.</span>
            </h1>

            <p className="text-lg max-md:w-[100%] w-[70dvw] lg:text-xl text-gray-600 mb-8 leading-relaxed">
              I'm Muhammad Ammar, Experienced Frontend developer capable of
              creating Responsive, SEO Optimized and Fast Digital experiences
              through modern Web technologies and innovative design solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-12">
              <a
                href="https://www.upwork.com/freelancers/~013ddb5d853b1fc89d"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Hire Me
                <i className="ri-arrow-right-line"></i>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-3 border border-gray-300 text-gray-700 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:border-orange-500 hover:text-orange-500"
              >
                View My Work
                <i className="ri-arrow-down-line"></i>
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {techStack.map((tech, index) => (
                <TechStackItem key={index} tech={tech} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-light mb-4 text-gray-900 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Showcasing recent work and client successes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
          <div className="text-center">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              View All Projects
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-light mb-6 text-white tracking-tight">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Let's collaborate and create something amazing together. Get in
            touch today!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-white text-orange-600 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Get In Touch
            <i className="ri-mail-line"></i>
          </a>
        </div>
      </section>

      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
