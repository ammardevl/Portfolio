import { servicesList, whyItems } from "../data/services";
import { Button, SectionHeading, CTASection, IconTile } from "../components/ui";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";

const Services = () => (
  <div>
    <Seo
      title="Services"
      description="Custom development, WordPress, Webflow, Squarespace, performance, SEO, and ongoing site care from Muhammad Ammar."
      path="/services"
    />

    <section className="ammar-dev-page-hero">
      <div className="ammar-dev-container">
        <Reveal className="ammar-dev-max-w-3xl">
          <p className="ammar-dev-eyebrow">What I offer</p>
          <h1 className="ammar-dev-heading-xl">Services built around how you'll actually use the site.</h1>
          <p className="ammar-dev-lede">
            Every engagement starts with the same question: what does this site need to do for
            the business, not just how should it look. The list below covers where I can help,
            from a full custom build to keeping an existing site running well.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="ammar-dev-section ammar-dev-section--no-top">
      <div className="ammar-dev-container">
        <div className="ammar-dev-grid-2col">
          {servicesList.map((service) => (
            <Reveal key={service.slug} className="ammar-dev-service-card">
              <IconTile icon={service.icon} />
              <h2 className="ammar-dev-service-card__title">{service.title}</h2>
              <p className="ammar-dev-service-card__desc">{service.description}</p>
              <ul className="ammar-dev-service-card__list">
                {service.included.map((item) => (
                  <li key={item} className="ammar-dev-service-card__list-item">
                    <i className="ri-check-line" aria-hidden="true"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="ammar-dev-section ammar-dev-section--dark">
      <div className="ammar-dev-container">
        <Reveal>
          <SectionHeading kicker="Why work together" title="What every project gets, regardless of scope" tone="dark" />
        </Reveal>
        <Reveal stagger className="ammar-dev-grid-3col-sm">
          {whyItems.map((item) => (
            <div key={item.title}>
              <i className={`${item.icon} ammar-dev-why-item__icon`} aria-hidden="true"></i>
              <h3 className="ammar-dev-why-item__title">{item.title}</h3>
              <p className="ammar-dev-why-item__desc">{item.description}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>

    <CTASection
      title="Have a project in mind?"
      subtitle="Tell me what you're building and I'll tell you honestly whether, and how, I can help."
      ctaLabel="Start a Conversation"
    />
  </div>
);

export default Services;
