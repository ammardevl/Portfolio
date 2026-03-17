import { useState, useEffect } from "react";
import medicare from "../assets/medicare.png";
import vslpackaging from "../assets/vsl-packaging website.webp";
import grothico from "../assets/web-grothico.webp";

const featuredProjects = [
  {
    title: "Medicare Healthcare Website",
    description:
      "Animated Website with lots of Animations, Scroll Animations and Transitions with(GSAP).",
    image: medicare,
    link: "https://web3-medicare.netlify.app/",
    technologies: ["React", "Tailwind CSS", "GSAP", "JavaScript"],
  },
  {
    title: "Grothico Agency Website",
    description:
      "Simple Dark Themed Responsive, Fast, SEO Optimized website for a Services Agency.",
    image: grothico,
    link: "https://web6-grothico.netlify.app/",
    technologies: ["React", "CSS3", "EmailJS", "JavaScript"],
  },
  {
    title: "VSL Packaging Company",
    description:
      "Complete company website built with a modern layout, responsive design, and clean functionality.",
    image: vslpackaging,
    link: "https://www.vslpackaging.com/",
    technologies: ["WordPress", "Divi", "CSS3", "Chatbot Integration"],
  },
];

const techStack = [
  { name: "HTML5", icon: "ri-html5-line" },
  { name: "CSS3", icon: "ri-css3-line" },
  { name: "JavaScript", icon: "ri-javascript-fill" },
  { name: "React", icon: "ri-reactjs-line" },
  { name: "WordPress", icon: "ri-wordpress-fill" },
];

const VSCodeTerminal = () => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);

  const codeLines = [
    { text: "import", type: "keyword" },
    { text: " React", type: "variable" },
    { text: " from", type: "keyword" },
    { text: ' "react"', type: "string" },
    { text: ";", type: "punctuation" },
    { text: "\n" },

    { text: "const", type: "keyword" },
    { text: " developer", type: "variable" },
    { text: " = {", type: "punctuation" },
    { text: "\n" },

    { text: "  name", type: "property" },
    { text: ":", type: "punctuation" },
    { text: ' "Muhammad Ammar"', type: "string" },
    { text: ",", type: "punctuation" },
    { text: "\n" },

    { text: "  role", type: "property" },
    { text: ":", type: "punctuation" },
    { text: ' "Frontend Developer"', type: "string" },
    { text: ",", type: "punctuation" },
    { text: "\n" },

    { text: "  skills", type: "property" },
    { text: ":", type: "punctuation" },
    { text: " [", type: "punctuation" },
    { text: '"HTML5"', type: "string" },
    { text: ",", type: "punctuation" },
    { text: '"CSS3"', type: "string" },
    { text: ",", type: "punctuation" },
    { text: '"JavaScript"', type: "string" },
    { text: ",", type: "punctuation" },
    { text: '"React"', type: "string" },
    { text: ",", type: "punctuation" },
    { text: ' "WordPress"', type: "string" },
    { text: ",", type: "punctuation" },
    { text: ' "Tailwind"', type: "string" },
    { text: "],", type: "punctuation" },
    { text: "\n" },

    { text: "  experience", type: "property" },
    { text: ":", type: "punctuation" },
    { text: " ", type: "punctuation" },
    { text: "4", type: "number" },
    { text: ",", type: "punctuation" },
    { text: "\n" },

    { text: "  available", type: "property" },
    { text: ":", type: "punctuation" },
    { text: " ", type: "punctuation" },
    { text: "true", type: "boolean" },
    { text: "\n" },

    { text: "};", type: "punctuation" },
    { text: "\n" },
    { text: "\n" },

    { text: "function", type: "keyword" },
    { text: " ", type: "punctuation" },
    { text: "buildWebsite", type: "function" },
    { text: "(", type: "punctuation" },
    { text: "project", type: "parameter" },
    { text: ")", type: "punctuation" },
    { text: " {", type: "punctuation" },
    { text: "\n" },

    { text: "  ", type: "punctuation" },
    { text: "return", type: "keyword" },
    { text: " ", type: "punctuation" },
    { text: "`Creating ${", type: "string" },
    { text: "project", type: "variable" },
    { text: "}`", type: "string" },
    { text: ";", type: "punctuation" },
    { text: "\n" },

    { text: "}", type: "punctuation" },
    { text: "\n" },
    { text: "\n" },

    { text: "console", type: "object" },
    { text: ".", type: "punctuation" },
    { text: "log", type: "method" },
    { text: "(", type: "punctuation" },
    { text: '"Let\'s create amazing websites!"', type: "string" },
    { text: ");", type: "punctuation" },
  ];

  useEffect(() => {
    const typingSpeed = 50;
    const deletingSpeed = 30;
    const pauseDuration = 2000;
    const timer = setTimeout(
      () => {
        if (!isDeleting && currentLineIndex < codeLines.length) {
          setDisplayedLines([...displayedLines, codeLines[currentLineIndex]]);
          setCurrentLineIndex(currentLineIndex + 1);
        } else if (!isDeleting && currentLineIndex === codeLines.length) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        } else if (isDeleting && displayedLines.length > 0) {
          setDisplayedLines(displayedLines.slice(0, -1));
        } else if (isDeleting && displayedLines.length === 0) {
          setIsDeleting(false);
          setCurrentLineIndex(0);
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timer);
  }, [currentLineIndex, isDeleting, displayedLines]);

  const getColor = (type) => {
    switch (type) {
      case "keyword":
        return "#C586C0";
      case "variable":
        return "#9CDCFE";
      case "string":
        return "#CE9178";
      case "punctuation":
        return "#D4D4D4";
      case "property":
        return "#9CDCFE";
      case "number":
        return "#B5CEA8";
      case "boolean":
        return "#569CD6";
      case "function":
        return "#DCDCAA";
      case "parameter":
        return "#9CDCFE";
      case "object":
        return "#4EC9B0";
      case "method":
        return "#DCDCAA";
      default:
        return "#D4D4D4";
    }
  };

  return (
    <div className="bg-[#1E1E1E] rounded-2xl shadow-2xl border border-gray-800 overflow-hidden max-w-2xl w-full">
      <div className="bg-[#323233] px-4 py-3 flex items-center justify-between border-b border-gray-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
        </div>
        <div className="flex items-center gap-2 text-[#CCCCCC] text-sm">
          <i className="ri-javascript-fill text-[#F7DF1E]"></i>
          <span className="font-mono">developer.js</span>
        </div>
        <div className="w-16"></div>
      </div>

      <div
        className="p-6 font-mono text-sm leading-relaxed overflow-hidden"
        style={{ minHeight: "400px", maxHeight: "500px" }}
      >
        <div className="flex">
          <div className="text-[#858585] pr-4 select-none">
            {displayedLines
              .map((_, i) => {
                const lineBreaks = displayedLines
                  .slice(0, i + 1)
                  .filter((l) => l.text === "\n").length;
                return displayedLines[i].text === "\n" ? null : (
                  <div key={i}>{i - lineBreaks + 1}</div>
                );
              })
              .filter(Boolean)}
          </div>

          <div className="flex-1">
            {displayedLines.map((token, index) =>
              token.text === "\n" ? (
                <br key={index} />
              ) : (
                <span key={index} style={{ color: getColor(token.type) }}>
                  {token.text}
                </span>
              ),
            )}
            <span className="inline-block w-2 h-5 bg-white animate-blink ml-0.5"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => (
  <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200">
    <div className="relative overflow-hidden h-64">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-orange-500 hover:text-white"
      >
        <i className="ri-external-link-line text-lg"></i>
      </a>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-medium mb-3 text-gray-900">
        {project.title}
      </h3>
      <p className="text-gray-600 mb-6 leading-relaxed">
        {project.description}
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
  </div>
);

// Tech Stack Item
const TechStackItem = ({ tech }) => (
  <div className="group bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
      <i className={`${tech.icon} text-white text-3xl`}></i>
    </div>
    <h3 className="text-lg font-medium text-gray-900">{tech.name}</h3>
  </div>
);

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
                  <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                  Available for freelance work
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-light mb-6 text-gray-900 tracking-tight leading-tight">
                Designing a <span className="text-orange-500">Better</span>
                <br />
                World <span className="text-orange-500">Today</span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
                I'm Muhammad Ammar, Experienced Frontend developer capable of
                creating exceptional digital experiences through modern web
                technologies and innovative design solutions.
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
            </div>

            {/* Right Side - VS Code Terminal */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <VSCodeTerminal />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-light mb-4 text-gray-900 tracking-tight">
              Tech Stack
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Technologies I use to bring ideas to life
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {techStack.map((tech, index) => (
              <TechStackItem key={index} tech={tech} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
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

      {/* CTA Section */}
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
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
