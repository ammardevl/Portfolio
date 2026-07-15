import React, { useState, useEffect } from "react";
import { navigationLinks } from "../data/nav";
import { socialLinks, contactInfo } from "../data/social";

const Logo = ({ onClick }) => (
  <a href="#home" onClick={onClick} className="flex items-center gap-0.5 group">
    <span className="text-2xl lg:text-3xl font-display font-semibold text-ink tracking-tight">
      Muhammad Ammar
    </span>
    <span className="w-[9px] h-[9px] rounded-full bg-red translate-y-2 group-hover:bg-yellow transition-colors duration-300" />
  </a>
);

const Header = ({ mobileMenuOpen, toggleMobileMenu, closeMobileMenu, currentPage }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href) => currentPage === href.replace("#", "");

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-surface/95 backdrop-blur-md border-b border-border-soft ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Logo onClick={closeMobileMenu} />

            <nav className="hidden lg:flex items-center gap-1">
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                    isActive(link.href)
                      ? "text-red bg-red/5"
                      : "text-ink/70 hover:text-red hover:bg-cream/60"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <button
              onClick={toggleMobileMenu}
              className="lg:hidden w-10 h-10 rounded-full bg-cream flex items-center justify-center transition-all duration-300 hover:bg-red hover:text-white"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <i className={`${mobileMenuOpen ? "ri-close-line" : "ri-menu-line"} text-lg`}></i>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-surface transition-opacity duration-500 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-border-soft">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-ink rounded-xl flex items-center justify-center">
              <span className="text-yellow font-mono font-semibold text-lg">$</span>
            </div>
            <span className="text-xl font-display font-medium text-ink">Menu</span>
          </div>
          <button
            onClick={closeMobileMenu}
            className="w-10 h-10 rounded-full bg-cream flex items-center justify-center hover:bg-red hover:text-white transition-all duration-300"
          >
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>

        <div className="flex flex-col h-[calc(100vh-88px)]">
          <nav className="flex-1 flex flex-col items-center justify-center px-6 space-y-2">
            {navigationLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className={`text-3xl font-display font-light py-4 px-6 rounded-xl transition-all duration-300 w-full text-center ${
                  isActive(link.href) ? "text-red bg-red/5" : "text-ink/80 hover:text-red"
                }`}
                style={{
                  transitionDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms",
                  transform: mobileMenuOpen ? "translateY(0)" : "translateY(-16px)",
                  opacity: mobileMenuOpen ? 1 : 0,
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="p-6 border-t border-border-soft space-y-4">
            <a
              href={`mailto:${contactInfo.email}`}
              className="w-full flex items-center justify-center gap-3 bg-red text-white py-4 rounded-xl font-medium transition-all duration-300 hover:bg-ink"
            >
              <i className="ri-mail-line text-lg"></i>
              <span>Get In Touch</span>
            </a>
            <div className="flex items-center justify-center gap-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                  className="w-12 h-12 rounded-full bg-cream flex items-center justify-center hover:bg-red hover:text-white transition-all duration-300"
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
