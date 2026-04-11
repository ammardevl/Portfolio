import { useState } from "react";
import coffeexperts from "../assets/coffee-experts-website.webp";
import digibyte from "../assets/digibyte-website.webp";
import digitech from "../assets/ammar-digitech.webp";
import norsl from "../assets/ammar-estore.webp";
import eheatcool from "../assets/eheatcool.webp";
import vslpackaging from "../assets/vsl-packaging website.webp";
import rental from "../assets/rental.png";
import medicare from "../assets/medicare.png";
import wanderlust from "../assets/wanderlust.png";
import grothico from "../assets/web-grothico.webp";

const allProjects = [
  {
    id: 1,
    title: "NORSL Store",
    description:
      "Modern E-commerce website designed for visual impact, currently enhanced for attracting more and more customers. Built with React and features a dynamic shopping experience with cart functionality, product filtering, and responsive design.",
    image: norsl,
    link: "https://web2-ecommerce.netlify.app/",
    category: "React",
    technologies: ["React", "Tailwind CSS", "Dynamic Website", "JavaScript"],
    features: [
      "Shopping Cart",
      "Product Filters",
      "Responsive Design",
      "Modern UI",
    ],
  },
  {
    id: 2,
    title: "VSL Packaging Company",
    description:
      "Complete company website built with a modern layout, responsive design, and clean functionality. Integrated with custom chatbot for customer support and features detailed product catalogs with specifications.",
    image: vslpackaging,
    link: "https://www.vslpackaging.com/",
    category: "WordPress",
    technologies: ["WordPress", "Divi", "CSS3", "Chatbot Integration"],
    features: ["Custom Design", "Chatbot", "Product Catalog", "SEO Optimized"],
  },
  {
    id: 3,
    title: "DGBytes Technology",
    description:
      "Technology solutions platform showcasing services, case studies, and client portal with advanced API integrations. Features a custom dashboard for clients to track their projects and access resources.",
    image: digibyte,
    link: "https://dgbinsights.com/",
    category: "WordPress",
    technologies: [
      "WordPress",
      "Custom Development",
      "API Integration",
      "Portal",
    ],
    features: [
      "Client Portal",
      "API Integration",
      "Case Studies",
      "News Section",
    ],
  },
  {
    id: 4,
    title: "Coffee Xperts",
    description:
      "SEO-focused website optimized for fast performance, better rankings, and seamless browsing. Implemented advanced caching strategies and image optimization for lightning-fast load times.",
    image: coffeexperts,
    link: "https://coffeexperts.eu/",
    category: "WordPress",
    technologies: ["Yoast SEO", "Smush Pro", "WP Rocket", "WordPress"],
    features: [
      "SEO Optimized",
      "Fast Loading",
      "Image Optimization",
      "Performance",
    ],
  },
  {
    id: 5,
    title: "DigiTech Digital Solutions",
    description:
      "Modern and Bold Website for a Digital Solutions Company Website Project in React. Features multiple pages, smooth animations, and a professional corporate design that showcases services and portfolio effectively.",
    image: digitech,
    link: "https://web1-digitech.netlify.app/",
    category: "React",
    technologies: ["React", "Tailwind CSS", "Multi Page Web", "Web Hooks"],
    features: [
      "Multi-page",
      "Smooth Animations",
      "Contact Forms",
      "Service Showcase",
    ],
  },
  {
    id: 6,
    title: "Eheatcool HVAC Services",
    description:
      "Professional HVAC website optimized for speed, responsive design, and improved user experience. Features online booking system and instant quote calculator for customer convenience.",
    image: eheatcool,
    link: "https://eheatcool.com/",
    category: "WordPress",
    technologies: ["WordPress", "Divi", "Booking Management", "Quote System"],
    features: [
      "Online Booking",
      "Quote Calculator",
      "Service Pages",
      "Customer Portal",
    ],
  },
  {
    id: 7,
    title: "Travel Blog Website",
    description:
      "Wanderlust a Travel Blog Website with Blog Posts on Travel Stories and Dynamic Switching Functionlity between Posts, it's fast and responsive website.",
    image: wanderlust,
    link: "https://web4-travel.netlify.app/",
    category: "React",
    technologies: ["React", "Styled Components", "CSS3"],
    features: [
      "Blog Posts",
      "Post share buttons",
      "Travel Tips",
      "Destinations Grid",
    ],
  },
  {
    id: 8,
    title: "Rental Cars Website",
    description:
      "Fully Functional & Responsive Website built with Modern React.js containg Dark/Light Mode, Search and Posts Functionality. You can search b/w posts",
    image: rental,
    link: "https://web5-rental-services.netlify.app/",
    category: "React",
    technologies: ["React", "Styled Components", "CSS3"],
    features: [
      "Cars Showcase",
      "Search Functionality",
      "Dark & Light Mode",
      "Responsive Design",
    ],
  },
  {
    id: 9,
    title: "Medicare Healthcare Website",
    description:
      "Animated Website with lots of Animations, Scroll Animations and Transitions, all achieved with Green Sock Animation Platform (GSAP) & React.JS",
    image: medicare,
    link: "https://web3-medicare.netlify.app/",
    category: "React",
    technologies: ["React", "Tailwind CSS", "GSAP", "JavaScript"],
    features: [
      "Dark & Light Mode",
      "Smooth Transitions",
      "Scroll Animations",
      "Responsive Design",
    ],
  },
  {
    id: 10,
    title: "Grothico Agency Website",
    description:
      "Simple Dark Themed Responsive, Fast, SEO Optimized website for a Services Agency in Pakistan. Website created with React",
    image: grothico,
    link: "https://web6-grothico.netlify.app/",
    category: "React",
    technologies: ["React", "CSS3", "EmailJS", "JavaScript"],
    features: [
      "Dark & Light Mode",
      "Smooth Transitions",
      "Entrance Animations",
      "Responsive Design",
      "Post Pages",
    ],
  },
];

const categories = ["All", "React", "WordPress"];

const ProjectCard = ({ project, onClick }) => (
  <div
    onClick={() => onClick(project)}
    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-orange-500 cursor-pointer"
  >
    <div className="relative overflow-hidden h-72">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute top-4 right-4">
        <span className="px-3 py-1 bg-orange-500 text-white rounded-full text-xs font-medium">
          {project.category}
        </span>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-medium mb-3 text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
        {project.title}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
        {project.description}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-orange-500 font-medium text-sm flex items-center gap-2">
          View Details
          <i className="ri-arrow-right-line"></i>
        </span>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300"
        >
          <i className="ri-external-link-line"></i>
        </a>
      </div>
    </div>
  </div>
);

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-80 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300"
          >
            <i className="ri-close-line text-xl"></i>
          </button>
          <div className="absolute bottom-4 left-4">
            <span className="px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-medium">
              {project.category}
            </span>
          </div>
        </div>

        <div className="p-8">
          <h2 className="text-3xl font-medium mb-4 text-gray-900">
            {project.title}
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {project.description}
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3 text-gray-900 flex items-center gap-2">
              <i className="ri-code-s-slash-line text-orange-500"></i>
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3 text-gray-900 flex items-center gap-2">
              <i className="ri-checkbox-circle-line text-orange-500"></i>
              Key Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-gray-600"
                >
                  <i className="ri-check-line text-orange-500"></i>
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Visit Live Site
              <i className="ri-external-link-line"></i>
            </a>
            <button
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-full font-medium hover:border-orange-500 hover:text-orange-500 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className="py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
                <i className="ri-folder-line"></i>
                Portfolio Showcase
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-light mb-6 text-gray-900 tracking-tight">
              My <span className="text-orange-500">Projects</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore my portfolio of web development projects, from modern
              React applications to custom WordPress solutions.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={setSelectedProject}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
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
