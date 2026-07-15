import React from "react";
import { navigationLinks } from "../data/nav";
import { contactInfo } from "../data/social";
import { SocialRow } from "./ui";

const contactRows = [
  { icon: "ri-mail-line", label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: "ri-time-line", label: "Response Time", value: contactInfo.responseTime },
  { icon: "ri-global-line", label: "Location", value: contactInfo.location },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border-soft">
      <div className="py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-2">
              <span className="text-3xl font-display font-semibold text-ink mb-5 inline-block">
                Muhammad Ammar
              </span>
              <p className="text-muted mb-6 leading-relaxed max-w-md">
                Frontend developer building fast, custom-coded and WordPress
                websites — increasingly with AI tools in the workflow, never
                as a shortcut for judgment.
              </p>
              <SocialRow />
            </div>

            <div>
              <h3 className="text-lg font-display font-medium text-ink mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-muted hover:text-red transition-colors duration-300">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-display font-medium text-ink mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactRows.map((row) => (
                  <div key={row.label} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-cream rounded-full flex items-center justify-center mt-1">
                      <i className={`${row.icon} text-red text-sm`}></i>
                    </div>
                    <div>
                      <div className="font-medium text-ink text-sm">{row.label}</div>
                      {row.href ? (
                        <a href={row.href} className="text-muted hover:text-red text-sm transition-colors duration-300">
                          {row.value}
                        </a>
                      ) : (
                        <div className="text-muted text-sm">{row.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border-soft py-6">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted text-sm">
              &copy; {currentYear} Muhammad Ammar. All rights reserved.
            </p>
            <p className="text-sm text-muted font-mono">
              built by{" "}
              <a href={contactInfo.portfolioUrl} className="text-red hover:text-ink transition-colors duration-300">
                Ammar
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
