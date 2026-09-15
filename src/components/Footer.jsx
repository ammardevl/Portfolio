import { Link } from "react-router-dom";
import { navigationLinks } from "../data/nav";
import { socialLinks, contactInfo } from "../data/social";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="ammar-dev-footer">
      <div className="ammar-dev-container ammar-dev-footer__inner">
        <div className="ammar-dev-footer__grid">
          <div className="ammar-dev-footer__brand">
            <Link to="/" className="ammar-dev-footer__logo">
              Muhammad Ammar
            </Link>
            <p className="ammar-dev-footer__desc">
              Frontend and website developer building fast, accessible sites in React, Next.js,
              WordPress, Webflow, and Squarespace.
            </p>
            <div className="ammar-dev-footer__socials">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${social.platform} profile`}
                  className="ammar-dev-footer__social-link"
                >
                  <i className={social.icon} aria-hidden="true"></i>
                </a>
              ))}
            </div>
          </div>

          <div className="ammar-dev-footer__col--nav">
            <h3 className="ammar-dev-footer__col-title">Navigate</h3>
            <ul className="ammar-dev-footer__nav-list">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="ammar-dev-footer__nav-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="ammar-dev-footer__col--contact">
            <h3 className="ammar-dev-footer__col-title">Get in touch</h3>
            <a href={`mailto:${contactInfo.email}`} className="ammar-dev-footer__email">
              {contactInfo.email}
            </a>
            <p className="ammar-dev-footer__meta">{contactInfo.location}</p>
            <p className="ammar-dev-footer__meta">{contactInfo.responseTime}</p>
          </div>
        </div>

        <div className="ammar-dev-footer__bottom">
          <p>&copy; {year} Muhammad Ammar. All rights reserved.</p>
          <p>Designed and built by Muhammad Ammar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
