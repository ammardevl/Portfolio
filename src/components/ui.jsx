import React from "react";
import { socialLinks } from "../data/social";

/**
 * Terminal-style eyebrow label — the site's recurring signature motif.
 * Renders as `$ command` in monospace with a blinking cursor.
 */
export const Eyebrow = ({ children, tone = "light" }) => (
  <span
    className={`inline-flex items-center gap-2 font-mono text-xs tracking-wide px-3.5 py-1.5 rounded-md ${
      tone === "light"
        ? "bg-ink text-cream"
        : "bg-cream text-ink border border-border-soft"
    }`}
  >
    <span className="text-yellow">$</span>
    {children}
    <span className="w-[7px] h-[13px] bg-yellow inline-block animate-pulse" />
  </span>
);

/** Primary call-to-action button used across every page. */
export const Button = ({
  href,
  children,
  variant = "primary",
  icon,
  external = false,
  onClick,
  className = "",
}) => {
  const base =
    "inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-medium transition-all duration-300";
  const variants = {
    primary:
      "bg-red text-white hover:bg-ink hover:-translate-y-0.5 hover:shadow-xl hover:shadow-red/20",
    ghost:
      "border border-border-soft text-ink hover:border-red hover:text-red",
    light:
      "bg-cream text-ink hover:bg-yellow",
    dark: "bg-ink text-cream hover:bg-red hover:text-white",
  };

  const Tag = href ? "a" : "button";
  const extraProps = href
    ? external
      ? { href, target: "_blank", rel: "noopener noreferrer" }
      : { href }
    : { onClick, type: "button" };

  return (
    <Tag className={`${base} ${variants[variant]} ${className}`} {...extraProps}>
      {children}
      {icon && <i className={`${icon} text-lg`}></i>}
    </Tag>
  );
};

/** Consistent section header: eyebrow + title with a highlighted word + subtitle. */
export const SectionHeading = ({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "center",
  tone = "light",
}) => (
  <div className={`mb-16 ${align === "center" ? "text-center" : ""}`}>
    {eyebrow && (
      <div className={`mb-6 ${align === "center" ? "flex justify-center" : ""}`}>
        <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      </div>
    )}
    <h2
      className={`text-4xl lg:text-6xl font-display font-medium mb-4 tracking-tight ${
        tone === "light" ? "text-ink" : "text-cream"
      }`}
    >
      {title} {highlight && <span className="text-red">{highlight}</span>}
    </h2>
    {subtitle && (
      <p
        className={`text-lg max-w-2xl leading-relaxed ${
          align === "center" ? "mx-auto" : ""
        } ${tone === "light" ? "text-muted" : "text-cream/80"}`}
      >
        {subtitle}
      </p>
    )}
  </div>
);

export const StatCard = ({ icon, number, label }) => (
  <div className="bg-surface rounded-xl p-6 shadow-sm border border-border-soft text-center">
    <i className={`${icon} text-3xl text-red mb-3`}></i>
    <div className="text-3xl font-display font-medium text-ink mb-1">
      {number}
    </div>
    <div className="text-muted text-sm">{label}</div>
  </div>
);

export const IconTile = ({ icon, tone = "red" }) => {
  const tones = {
    red: "bg-red",
    coral: "bg-coral",
    ink: "bg-ink",
  };
  return (
    <div
      className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${tones[tone]}`}
    >
      <i className={`${icon} text-white text-xl`}></i>
    </div>
  );
};

export const TechChip = ({ children }) => (
  <span className="px-3 py-1.5 bg-cream text-ink rounded-md text-sm font-mono">
    {children}
  </span>
);

export const SocialRow = ({ size = "md" }) => {
  const dims = size === "sm" ? "w-11 h-11 text-base" : "w-12 h-12 text-lg";
  return (
    <div className="flex gap-3">
      {socialLinks.map((link) => (
        <a
          key={link.platform}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit my ${link.platform} profile`}
          className={`${dims} rounded-full bg-cream text-ink flex items-center justify-center transition-all duration-300 hover:bg-red hover:text-white hover:-translate-y-0.5`}
        >
          <i className={link.icon}></i>
        </a>
      ))}
    </div>
  );
};

/** Shared closing CTA block used at the bottom of Home / Services / About. */
export const CTASection = ({ title, highlight, subtitle, ctaLabel, ctaHref = "#contact" }) => (
  <section className="py-24 lg:py-32 bg-ink relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-[0.06]"
      style={{
        backgroundImage:
          "radial-gradient(circle, #F9E784 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    />
    <div className="max-w-[1400px] mx-auto px-6 lg:px-8 text-center relative">
      <h2 className="text-4xl lg:text-6xl font-display font-medium mb-6 text-cream tracking-tight">
        {title} <span className="text-yellow">{highlight}</span>
      </h2>
      <p className="text-lg text-cream/70 max-w-2xl mx-auto mb-8 leading-relaxed">
        {subtitle}
      </p>
      <Button href={ctaHref} icon="ri-arrow-right-line">
        {ctaLabel}
      </Button>
    </div>
  </section>
);
