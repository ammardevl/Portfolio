import React, { useState } from "react";

// Services categories data
const servicesData = {
  wordpress: {
    title: "WordPress Development",
    icon: "ri-wordpress-fill",
    description:
      "Comprehensive WordPress solutions from theme customization to complex plugin development.",
    items: [
      {
        category: "Page Builders",
        tools: [
          {
            name: "Elementor",
            icon: "ri-layout-line",
            description: "Custom widgets and advanced layouts",
          },
          {
            name: "Divi",
            icon: "ri-palette-line",
            description: "Theme builder and visual customization",
          },
          {
            name: "Oxygen",
            icon: "ri-code-s-slash-line",
            description: "Performance-focused development",
          },
          {
            name: "Gutenberg",
            icon: "ri-file-edit-line",
            description: "Block editor customization",
          },
          {
            name: "WPBakery",
            icon: "ri-stack-line",
            description: "Legacy support and migration",
          },
        ],
      },
      {
        category: "Themes",
        tools: [
          {
            name: "Avada",
            icon: "ri-palette-fill",
            description: "Multi-purpose theme customization",
          },
          {
            name: "Astra",
            icon: "ri-layout-4-line",
            description: "Lightweight and fast themes",
          },
          {
            name: "Woodmart",
            icon: "ri-shopping-bag-3-line",
            description: "E-commerce focused solutions",
          },
          {
            name: "WooCommerce",
            icon: "ri-shopping-cart-2-line",
            description: "Online store development",
          },
          {
            name: "Custom Themes",
            icon: "ri-code-box-line",
            description: "Bespoke theme development",
          },
        ],
      },
      {
        category: "Essential Plugins",
        tools: [
          {
            name: "Mailchimp",
            icon: "ri-mail-send-line",
            description: "Email marketing integration",
          },
          {
            name: "Akismet",
            icon: "ri-shield-check-line",
            description: "Spam protection setup",
          },
          {
            name: "LiteSpeed Cache",
            icon: "ri-rocket-line",
            description: "Performance optimization",
          },
          {
            name: "ACF",
            icon: "ri-list-settings-line",
            description: "Custom fields management",
          },
          {
            name: "Yoast SEO",
            icon: "ri-seo-line",
            description: "SEO optimization",
          },
          {
            name: "WP Rocket",
            icon: "ri-speed-up-line",
            description: "Caching and speed boost",
          },
        ],
      },
    ],
  },
  frontend: {
    title: "Frontend Development",
    icon: "ri-code-s-slash-fill",
    description:
      "Modern frontend solutions using cutting-edge technologies and best practices.",
    items: [
      {
        category: "Core Technologies",
        tools: [
          {
            name: "HTML5",
            icon: "ri-html5-line",
            description: "Semantic and accessible markup",
          },
          {
            name: "CSS3",
            icon: "ri-css3-line",
            description: "Modern styling and animations",
          },
          {
            name: "JavaScript ES6+",
            icon: "ri-javascript-fill",
            description: "Modern JavaScript features",
          },
        ],
      },
      {
        category: "Frameworks & Libraries",
        tools: [
          {
            name: "React",
            icon: "ri-reactjs-line",
            description: "Component-based architecture",
          },
          {
            name: "Tailwind CSS",
            icon: "ri-brush-line",
            description: "Utility-first styling",
          },
          {
            name: "Bootstrap",
            icon: "ri-layout-grid-line",
            description: "Responsive frameworks",
          },
        ],
      },
      {
        category: "Development Tools",
        tools: [
          {
            name: "Git & GitHub",
            icon: "ri-github-fill",
            description: "Version control",
          },
          {
            name: "Webpack",
            icon: "ri-box-3-line",
            description: "Module bundling",
          },
          {
            name: "NPM/Yarn",
            icon: "ri-npmjs-line",
            description: "Package management",
          },
        ],
      },
    ],
  },
  additional: {
    title: "Additional Services",
    icon: "ri-tools-fill",
    description:
      "Comprehensive web solutions to enhance your digital presence.",
    items: [
      {
        category: "Optimization & Performance",
        tools: [
          {
            name: "SEO Optimization",
            icon: "ri-search-eye-line",
            description: "Search engine ranking",
          },
          {
            name: "Speed Optimization",
            icon: "ri-dashboard-line",
            description: "Fast loading times",
          },
          {
            name: "Mobile Optimization",
            icon: "ri-smartphone-line",
            description: "Mobile-first approach",
          },
          {
            name: "Image Optimization",
            icon: "ri-image-line",
            description: "Compressed media files",
          },
        ],
      },
      {
        category: "Maintenance & Support",
        tools: [
          {
            name: "Bug Fixes",
            icon: "ri-bug-line",
            description: "Quick issue resolution",
          },
          {
            name: "Updates",
            icon: "ri-refresh-line",
            description: "Regular maintenance",
          },
          {
            name: "Security",
            icon: "ri-lock-line",
            description: "Protection and backups",
          },
          {
            name: "Consulting",
            icon: "ri-question-answer-line",
            description: "Expert guidance",
          },
        ],
      },
    ],
  },
};

const ServiceCard = ({ tool }) => (
  <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-orange-500 hover:-translate-y-1">
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
        <i className={`${tool.icon} text-white text-xl`}></i>
      </div>
      <div>
        <h4 className="text-lg font-medium text-gray-900 mb-2">{tool.name}</h4>
        <p className="text-gray-600 text-sm">{tool.description}</p>
      </div>
    </div>
  </div>
);

// Service Section Component
const ServiceSection = ({ service, isActive, onClick }) => (
  <div className="mb-8">
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between p-6 rounded-2xl transition-all duration-300 ${
        isActive
          ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg"
          : "bg-white text-gray-900 hover:shadow-lg border border-gray-200"
      }`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center ${
            isActive
              ? "bg-white/20"
              : "bg-gradient-to-r from-orange-500 to-orange-600"
          }`}
        >
          <i
            className={`${service.icon} text-2xl ${
              isActive ? "text-white" : "text-white"
            }`}
          ></i>
        </div>
        <div className="text-left">
          <h3 className="text-2xl font-medium mb-1">{service.title}</h3>
          <p
            className={`text-sm ${
              isActive ? "text-white/90" : "text-gray-600"
            }`}
          >
            {service.description}
          </p>
        </div>
      </div>
      <i className={`ri-arrow-${isActive ? "up" : "down"}-s-line text-2xl`}></i>
    </button>

    {isActive && (
      <div className="mt-6 space-y-8 animate-fadeIn">
        {service.items.map((category, idx) => (
          <div key={idx}>
            <h4 className="text-xl font-medium text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              {category.category}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.tools.map((tool, toolIdx) => (
                <ServiceCard key={toolIdx} tool={tool} />
              ))}
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);

const Services = () => {
  const [activeService, setActiveService] = useState("wordpress");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
                <i className="ri-service-line"></i>
                What I Offer
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-light mb-6 text-gray-900 tracking-tight">
              Services & <span className="text-orange-500">Expertise</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive web development solutions tailored to your needs.
              From WordPress customization to modern frontend applications, I
              deliver quality results.
            </p>
          </div>

          {/* Services Accordion */}
          <div className="max-w-6xl mx-auto">
            {Object.entries(servicesData).map(([key, service]) => (
              <ServiceSection
                key={key}
                service={service}
                isActive={activeService === key}
                onClick={() =>
                  setActiveService(activeService === key ? "" : key)
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-light mb-4 text-gray-900 tracking-tight">
              Why Work With Me
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Delivering excellence through expertise and dedication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "ri-time-line",
                title: "Fast Delivery",
                description:
                  "Quick turnaround without compromising on quality. Your project delivered on time, every time.",
              },
              {
                icon: "ri-customer-service-2-line",
                title: "24/7 Support",
                description:
                  "Continuous support and maintenance to keep your website running smoothly at all times.",
              },
              {
                icon: "ri-code-s-slash-line",
                title: "Clean Code",
                description:
                  "Well-structured, maintainable code following industry best practices and standards.",
              },
              {
                icon: "ri-smartphone-line",
                title: "Responsive Design",
                description:
                  "Pixel-perfect responsive designs that look amazing on all devices and screen sizes.",
              },
              {
                icon: "ri-rocket-line",
                title: "Performance",
                description:
                  "Optimized for speed and performance with the latest optimization techniques.",
              },
              {
                icon: "ri-shield-check-line",
                title: "Security First",
                description:
                  "Built with security in mind, protecting your website from vulnerabilities and threats.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-orange-500"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${item.icon} text-white text-3xl`}></i>
                </div>
                <h3 className="text-xl font-medium mb-3 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-light mb-6 text-white tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Let's discuss your project and create something amazing together.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-white text-orange-600 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Get In Touch
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Services;
