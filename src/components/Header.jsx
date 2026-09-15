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
      <header className={`ammar-dev-header ${scrolled ? "ammar-dev-header--scrolled" : ""}`}>
        <div className="ammar-dev-container">
          <div className="ammar-dev-header__bar">
            <Link to="/" className="ammar-dev-header__logo">
              Muhammad Ammar
            </Link>

            <nav className="ammar-dev-header__nav" aria-label="Primary">
              {navigationLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  end={link.href === "/"}
                  className={({ isActive }) =>
                    `ammar-dev-header__nav-link ${isActive ? "ammar-dev-header__nav-link--active" : ""}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <a href={`mailto:${contactInfo.email}`} className="ammar-dev-header__cta">
                Get in touch
              </a>
            </nav>

            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="ammar-dev-header__menu-btn"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <i className={mobileMenuOpen ? "ri-close-line" : "ri-menu-line"} aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </header>

      <div className={`ammar-dev-mobile-menu ${mobileMenuOpen ? "ammar-dev-mobile-menu--open" : ""}`}>
        <div className="ammar-dev-mobile-menu__inner">
          <nav className="ammar-dev-mobile-menu__nav" aria-label="Mobile">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === "/"}
                className={({ isActive }) =>
                  `ammar-dev-mobile-menu__nav-link ${isActive ? "ammar-dev-mobile-menu__nav-link--active" : ""}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="ammar-dev-mobile-menu__actions">
            <a href={`mailto:${contactInfo.email}`} className="ammar-dev-mobile-menu__cta">
              <i className="ri-mail-line" aria-hidden="true"></i>
              <span>Get in Touch</span>
            </a>
            <div className="ammar-dev-mobile-menu__socials">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                  className="ammar-dev-mobile-menu__social-link"
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
