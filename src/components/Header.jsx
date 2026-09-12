import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navigationLinks } from "../data/nav";
import { socialLinks, contactInfo } from "../data/social";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-paper/95 backdrop-blur-md border-b border-line ${
          scrolled ? "shadow-[0_1px_0_rgba(19,19,22,0.04)]" : ""
        }`}
      >
        <div className="container-page">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="text-xl lg:text-2xl font-display font-medium text-ink tracking-tight">
              Muhammad Ammar
            </Link>

            <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
              {navigationLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  end={link.href === "/"}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-md transition-colors duration-300 font-medium text-[15px] ${
                      isActive ? "text-brass" : "text-ink/70 hover:text-ink"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <a
                href={`mailto:${contactInfo.email}`}
                className="ml-3 inline-flex items-center gap-2 border border-line text-ink px-5 py-2.5 rounded-md font-medium text-[15px] transition-all duration-300 hover:border-brass hover:text-brass"
              >
                Get in touch
              </a>
            </nav>

            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-ink"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <i className={`${mobileMenuOpen ? "ri-close-line" : "ri-menu-line"} text-2xl`} aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`lg:hidden fixed inset-0 z-40 bg-paper transition-opacity duration-400 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col h-full pt-24 pb-10 px-6">
          <nav className="flex-1 flex flex-col justify-center gap-1" aria-label="Mobile">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === "/"}
                className={({ isActive }) =>
                  `text-3xl font-display font-medium py-3 transition-colors duration-300 ${
                    isActive ? "text-brass" : "text-ink"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="space-y-6">
            <a
              href={`mailto:${contactInfo.email}`}
              className="w-full flex items-center justify-center gap-3 bg-ink text-paper py-4 rounded-md font-medium"
            >
              <i className="ri-mail-line text-lg" aria-hidden="true"></i>
              <span>Get in Touch</span>
            </a>
            <div className="flex items-center justify-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                  className="w-11 h-11 rounded-full border border-line flex items-center justify-center text-ink"
                >
                  <i className={social.icon} aria-hidden="true"></i>
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
