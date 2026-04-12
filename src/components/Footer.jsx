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
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-2">
              <span className="text-4xl font-chewy font-medium text-gray-900 mb-5 inline-block">
                Muhammad Ammar
              </span>
              <p className="text-gray-600 mb-6 leading-relaxed max-w-md">
                Frontend Developer capable of creating and handling websites
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
