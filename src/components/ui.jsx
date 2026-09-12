import { Link } from "react-router-dom";
import { socialLinks } from "../data/social";

/** Primary call-to-action used across every page. Rectangular, not a pill. */
export const Button = ({
  to,
  href,
  children,
  variant = "primary",
  icon,
  external = false,
  onClick,
  className = "",
  type = "button",
}) => {
  const base =
    "inline-flex items-center gap-2.5 px-7 py-3.5 rounded-md font-medium transition-all duration-300 text-[15px]";
  const variants = {
    primary: "bg-ink text-paper hover:bg-brass",
    ghost: "border border-line text-ink hover:border-brass hover:text-brass",
    light: "bg-paper text-ink hover:bg-panel",
    dark: "bg-ink text-paper border border-white/10 hover:bg-brass",
  };
  const classes = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {icon && <i className={`${icon} text-lg`} aria-hidden="true"></i>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }
  if (href) {
    const extra = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
    return (
      <a href={href} className={classes} onClick={onClick} {...extra}>
        {content}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
};

/**
 * Consistent section header: title with supporting subtitle.
 * No tracked-out eyebrow label above every heading, no single-word
 * color accent gimmick; hierarchy comes from the display type itself.
 */
export const SectionHeading = ({ kicker, title, subtitle, align = "left", tone = "light", className = "mb-14" }) => (
  <div className={`max-w-2xl ${className} ${align === "center" ? "mx-auto text-center" : ""}`}>
    {kicker && (
      <p className={`font-mono text-sm mb-4 ${tone === "light" ? "text-brass" : "text-brass-soft"}`}>
        {kicker}
      </p>
    )}
    <h2
      className={`text-4xl lg:text-5xl font-display font-medium tracking-tight leading-[1.1] ${
        tone === "light" ? "text-ink" : "text-paper"
      }`}
    >
      {title}
    </h2>
    {subtitle && (
      <p className={`mt-5 text-lg leading-relaxed ${tone === "light" ? "text-stone" : "text-paper/70"}`}>
        {subtitle}
      </p>
    )}
  </div>
);

export const StatCard = ({ number, label }) => (
  <div className="border-l-2 border-line pl-5">
    <div className="text-3xl font-display font-medium text-ink mb-1">{number}</div>
    <div className="text-stone text-sm">{label}</div>
  </div>
);

export const IconTile = ({ icon, tone = "ink" }) => {
  const tones = {
    ink: "bg-ink text-paper",
    brass: "bg-brass text-paper",
    panel: "bg-panel text-ink",
  };
  return (
    <div className={`w-12 h-12 rounded-md flex items-center justify-center flex-shrink-0 ${tones[tone]}`}>
      <i className={`${icon} text-xl`} aria-hidden="true"></i>
    </div>
  );
};

export const TechChip = ({ children }) => (
  <span className="px-3 py-1.5 bg-panel text-ink rounded-md text-sm font-mono">{children}</span>
);

export const SocialRow = ({ size = "md" }) => {
  const dims = size === "sm" ? "w-10 h-10 text-base" : "w-11 h-11 text-lg";
  return (
    <div className="flex gap-3">
      {socialLinks.map((link) => (
        <a
          key={link.platform}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit my ${link.platform} profile`}
          className={`${dims} rounded-full border border-line text-ink flex items-center justify-center transition-all duration-300 hover:border-brass hover:text-brass`}
        >
          <i className={link.icon} aria-hidden="true"></i>
        </a>
      ))}
    </div>
  );
};

/** Shared closing CTA block used at the bottom of Home / Services / About. */
export const CTASection = ({ title, subtitle, ctaLabel, ctaTo = "/contact" }) => (
  <section className="py-24 lg:py-32 bg-ink">
    <div className="container-page text-center">
      <h2 className="text-4xl lg:text-6xl font-display font-medium mb-6 text-paper tracking-tight leading-[1.1] max-w-3xl mx-auto">
        {title}
      </h2>
      {subtitle && <p className="text-lg text-paper/65 max-w-xl mx-auto mb-10 leading-relaxed">{subtitle}</p>}
      <Button to={ctaTo} variant="dark" icon="ri-arrow-right-line">
        {ctaLabel}
      </Button>
    </div>
  </section>
);
