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

    <section className="pt-40 pb-20 lg:pt-48 lg:pb-24">
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <p className="font-mono text-sm text-brass mb-6">What I offer</p>
          <h1 className="text-5xl lg:text-6xl font-display font-medium text-ink tracking-tight leading-[1.08] mb-6">
            Services built around how you'll actually use the site.
          </h1>
          <p className="text-lg text-stone leading-relaxed">
            Every engagement starts with the same question: what does this site need to do for
            the business, not just how should it look. The list below covers where I can help,
            from a full custom build to keeping an existing site running well.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="pb-24 lg:pb-32">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {servicesList.map((service) => (
            <Reveal
              key={service.slug}
              className="border border-line rounded-lg p-8 lg:p-10 transition-colors duration-300 hover:border-brass"
            >
              <IconTile icon={service.icon} />
              <h2 className="text-2xl font-display font-medium text-ink mt-6 mb-3">{service.title}</h2>
              <p className="text-stone leading-relaxed mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink/80 text-[15px]">
                    <i className="ri-check-line text-brass mt-1 flex-shrink-0" aria-hidden="true"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 lg:py-32 bg-ink">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            kicker="Why work together"
            title="What every project gets, regardless of scope"
            tone="dark"
          />
        </Reveal>
        <Reveal stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyItems.map((item) => (
            <div key={item.title}>
              <i className={`${item.icon} text-2xl text-brass mb-4 block`} aria-hidden="true"></i>
              <h3 className="text-lg font-display font-medium text-paper mb-2">{item.title}</h3>
              <p className="text-paper/60 leading-relaxed text-[15px]">{item.description}</p>
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
