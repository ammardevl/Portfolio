import React, { useState, useEffect } from "react";

const navigationLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const Header = ({
  mobileMenuOpen,
  toggleMobileMenu,
  closeMobileMenu,
  currentPage,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href) => {
    const page = href.replace("#", "");
    return currentPage === page || (currentPage === "home" && page === "home");
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white/90 backdrop-blur-md"
        } border-b border-gray-200`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-3 group"
              onClick={closeMobileMenu}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-medium text-gray-900">
                Muhammad Ammar
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigationLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                    isActive(link.href)
                      ? "text-orange-500 bg-orange-50"
                      : "text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 hover:bg-orange-500 hover:text-white"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <i
                className={`${
                  mobileMenuOpen ? "ri-close-line" : "ri-menu-line"
                } text-lg`}
              ></i>
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-white transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-medium text-gray-900">Menu</span>
          </div>
          <button
            onClick={closeMobileMenu}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 hover:bg-orange-500 hover:text-white"
          >
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="flex flex-col h-[calc(100vh-88px)]">
          {/* Navigation Links */}
          <nav className="flex-1 flex flex-col items-center justify-center px-6 space-y-2">
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={closeMobileMenu}
                className={`text-3xl font-light py-4 px-6 rounded-xl transition-all duration-300 w-full text-center ${
                  isActive(link.href)
                    ? "text-orange-500 bg-orange-50 scale-105"
                    : "text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                }`}
                style={{
                  transitionDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms",
                  transform: mobileMenuOpen
                    ? "translateY(0)"
                    : "translateY(-20px)",
                  opacity: mobileMenuOpen ? 1 : 0,
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-gray-200 space-y-4">
            {/* Contact Button */}
            <a
              href="mailto:console.log.ammar@gmail.com"
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg"
            >
              <i className="ri-mail-line text-lg"></i>
              <span>Get In Touch</span>
            </a>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 pt-2">
              {[
                {
                  href: "https://www.linkedin.com/in/muhammad-ammar-1a701130b/",
                  icon: "ri-linkedin-fill",
                },
                {
                  href: "https://github.com/ammardevl",
                  icon: "ri-github-fill",
                },
                {
                  href: "https://www.instagram.com/y.ammar_06/",
                  icon: "ri-instagram-line",
                },
                {
                  href: "https://www.facebook.com/profile.php?id=100007319979278",
                  icon: "ri-facebook-fill",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  <i className={`${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
