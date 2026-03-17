import React from "react";

const navigationLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/muhammad-ammar-1a701130b/",
    iconClass: "ri-linkedin-fill",
    platform: "LinkedIn",
  },
  {
    href: "https://github.com/ammardevl",
    iconClass: "ri-github-fill",
    platform: "GitHub",
  },
  {
    href: "https://www.instagram.com/y.ammar_06/",
    iconClass: "ri-instagram-line",
    platform: "Instagram",
  },
  {
    href: "https://www.facebook.com/profile.php?id=100007319979278",
    iconClass: "ri-facebook-fill",
    platform: "Facebook",
  },
];

const SocialLink = ({ href, iconClass, platform }) => (
  <a
    className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 hover:bg-orange-500 hover:text-white hover:scale-110 hover:shadow-lg"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Visit my ${platform} profile`}
  >
    <i className={`${iconClass} text-lg`}></i>
  </a>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                Let's Work Together
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-light mb-6 text-gray-900 tracking-tight">
              Have a Project in Mind?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Ready to bring your vision to life? Let's discuss how we can
              create something amazing together.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Start a Conversation
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <span className="text-2xl font-medium text-gray-900">
                  Muhammad Ammar
                </span>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed max-w-md">
                Frontend Developer cabable of creating and handling websites
                built with various tools like CMS or Code.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <SocialLink
                    key={index}
                    href={link.href}
                    iconClass={link.iconClass}
                    platform={link.platform}
                  />
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {navigationLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-orange-500 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-mail-line text-orange-500 text-sm"></i>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">
                      Email
                    </div>
                    <a
                      href="mailto:console.log.ammar@gmail.com"
                      className="text-gray-600 hover:text-orange-500 text-sm transition-colors duration-300"
                    >
                      console.log.ammar@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-time-line text-orange-500 text-sm"></i>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">
                      Response Time
                    </div>
                    <div className="text-gray-600 text-sm">
                      Usually within 24 hours
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-global-line text-orange-500 text-sm"></i>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">
                      Location
                    </div>
                    <div className="text-gray-600 text-sm">
                      Available Worldwide
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 py-6">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-sm">
              &copy; {currentYear} Muhammad Ammar. All rights reserved.
            </p>
            <div className="flex items-center flex-wrap justify-center gap-6 text-sm text-gray-600">
              <a
                href="#"
                className="hover:text-orange-500 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-orange-500 transition-colors duration-300"
              >
                Terms of Service
              </a>
              <span className="flex items-center gap-2">
                Crafted with
                <i className="ri-heart-fill text-orange-500 animate-pulse"></i>
                by
                <a
                  href="https://ammar-devfolio.netlify.app/"
                  className="text-orange-500 hover:text-orange-600 transition-colors duration-300 font-medium"
                >
                  Ammar
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
