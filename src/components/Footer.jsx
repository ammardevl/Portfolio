import { Link } from "react-router-dom";
import { navigationLinks } from "../data/nav";
import { socialLinks, contactInfo } from "../data/social";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      <div className="container-page py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Link to="/" className="text-2xl font-display font-medium text-paper tracking-tight">
              Muhammad Ammar
            </Link>
            <p className="text-paper/60 mt-5 max-w-sm leading-relaxed">
              Frontend and website developer building fast, accessible sites in React, Next.js,
              WordPress, Webflow, and Squarespace.
            </p>
            <div className="flex gap-3 mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${social.platform} profile`}
                  className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center transition-all duration-300 hover:border-brass hover:text-brass"
                >
                  <i className={social.icon} aria-hidden="true"></i>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-mono text-sm text-paper/40 mb-5">Navigate</h3>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-paper/70 hover:text-paper transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="font-mono text-sm text-paper/40 mb-5">Get in touch</h3>
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-paper/70 hover:text-paper transition-colors duration-300 break-all"
            >
              {contactInfo.email}
            </a>
            <p className="text-paper/50 mt-3 text-sm">{contactInfo.location}</p>
            <p className="text-paper/50 mt-1 text-sm">{contactInfo.responseTime}</p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-paper/40 text-sm">
            &copy; {year} Muhammad Ammar. All rights reserved.
          </p>
          <p className="text-paper/40 text-sm">Designed and built by Muhammad Ammar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
