import { Link } from "react-router-dom";
import { socialLinks } from "../data/social";

/** Primary call-to-action used across every page. */
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
  const classes = `ammar-dev-btn ammar-dev-btn--${variant} ${className}`.trim();
  const content = (
    <>
      {children}
      {icon && <i className={icon} aria-hidden="true"></i>}
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
 */
export const SectionHeading = ({ kicker, title, subtitle, align = "left", tone = "light", tight = false }) => {
  const headingClass = [
    "ammar-dev-section-heading",
    tight ? "ammar-dev-section-heading--tight" : "",
    align === "center" ? "ammar-dev-section-heading--center" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={headingClass}>
      {kicker && (
        <p className={`ammar-dev-eyebrow ${tone === "dark" ? "ammar-dev-eyebrow--dark" : ""}`}>{kicker}</p>
      )}
      <h2
        className={`ammar-dev-section-heading__title ${
          tone === "dark" ? "ammar-dev-section-heading__title--dark" : ""
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`ammar-dev-section-heading__subtitle ${
            tone === "dark" ? "ammar-dev-section-heading__subtitle--dark" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export const IconTile = ({ icon, tone = "ink" }) => (
  <div className={`ammar-dev-icon-tile ammar-dev-icon-tile--${tone}`}>
    <i className={icon} aria-hidden="true"></i>
  </div>
);

export const TechChip = ({ children }) => <span className="ammar-dev-tech-chip">{children}</span>;

export const SocialRow = ({ size = "md" }) => (
  <div className={`ammar-dev-social-row ${size === "sm" ? "ammar-dev-social-row--sm" : ""}`}>
    {socialLinks.map((link) => (
      <a
        key={link.platform}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit my ${link.platform} profile`}
        className="ammar-dev-social-row__link"
      >
        <i className={link.icon} aria-hidden="true"></i>
      </a>
    ))}
  </div>
);

/** Shared closing CTA block used at the bottom of Home / Services / About. */
export const CTASection = ({ title, subtitle, ctaLabel, ctaTo = "/contact" }) => (
  <section className="ammar-dev-cta">
    <div className="ammar-dev-container ammar-dev-cta__inner">
      <h2 className="ammar-dev-cta__title">{title}</h2>
      {subtitle && <p className="ammar-dev-cta__subtitle">{subtitle}</p>}
      <Button to={ctaTo} variant="dark" icon="ri-arrow-right-line">
        {ctaLabel}
      </Button>
    </div>
  </section>
);
