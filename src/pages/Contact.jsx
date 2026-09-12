import { useState } from "react";
import { contactMethods, faqs } from "../data/contact";
import { contactInfo } from "../data/social";
import { Button, SectionHeading, SocialRow } from "../components/ui";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const InputField = ({ label, type = "text", placeholder, rows, value, onChange, required = false }) => {
  const inputId = `input-${label.toLowerCase().replace(/\s+/g, "-")}`;
  const baseClass =
    "w-full p-4 border border-line rounded-md focus:outline-none focus:ring-2 focus:ring-brass/30 focus:border-brass bg-paper text-ink transition-all duration-300";

  return (
    <div>
      <label htmlFor={inputId} className="block text-sm font-medium text-ink mb-2">
        {label}
        {required && <span className="text-brass ml-1">*</span>}
      </label>
      {rows ? (
        <textarea
          id={inputId}
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`${baseClass} resize-none`}
        />
      ) : (
        <input
          id={inputId}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={baseClass}
        />
      )}
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ fullName: "", email: "", subject: "", message: "" });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (field) => (e) => setFormData({ ...formData, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
      return;
    }

    const body = `From: ${formData.fullName} (${formData.email})%0D%0A%0D%0A${formData.message}`;
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${body}`;

    setSubmitStatus("success");
    setTimeout(() => setSubmitStatus(null), 6000);
  };

  return (
    <div>
      <Seo
        title="Contact"
        description="Get in touch with Muhammad Ammar to discuss a website project, custom development, or ongoing site care."
        path="/contact"
        structuredData={faqSchema}
      />

      <section className="pt-40 pb-20 lg:pt-48 lg:pb-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              kicker="Let's talk"
              title="Get in touch"
              subtitle="Have a project in mind, or just want to say hello? I'd love to hear from you."
            />
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <Reveal>
              <h2 className="text-2xl lg:text-3xl font-display font-medium mb-6 text-ink">
                Let's talk about your project
              </h2>
              <p className="text-lg text-stone mb-10 leading-relaxed">
                I'm always up for new projects and collaborations. Whether you have a clear brief
                or just a rough idea, feel free to reach out.
              </p>

              <div className="space-y-6 mb-10">
                {contactMethods.map((method) => (
                  <div key={method.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-panel rounded-full flex items-center justify-center flex-shrink-0">
                      <i className={`${method.icon} text-brass text-xl`} aria-hidden="true"></i>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-ink">{method.title}</div>
                      {method.link ? (
                        <a
                          href={method.link}
                          className="text-stone hover:text-brass transition-colors duration-300 block"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <div className="text-stone">{method.value}</div>
                      )}
                      <p className="text-sm text-stone/70 mt-1">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-lg font-display font-medium text-ink mb-4">Connect with me</h3>
                <SocialRow />
              </div>

              <div className="mt-10 bg-ink rounded-lg p-8">
                <i className="ri-information-line text-2xl mb-4 block text-brass-soft" aria-hidden="true"></i>
                <h3 className="text-xl font-display font-medium mb-2 text-paper">Quick response</h3>
                <p className="text-paper/65 leading-relaxed">
                  I typically respond within 24 hours. Mention it in your message if something's
                  urgent.
                </p>
              </div>
            </Reveal>

            <Reveal className="bg-panel p-8 lg:p-10 rounded-lg border border-line h-fit">
              <h3 className="text-2xl font-display font-medium mb-6 text-ink">Send me a message</h3>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-ink/5 border border-ink/10 rounded-md flex items-center gap-3">
                  <i className="ri-checkbox-circle-line text-brass text-2xl" aria-hidden="true"></i>
                  <div>
                    <p className="text-ink font-medium">Opening your email client</p>
                    <p className="text-stone text-sm">Send the message and I'll reply within a day.</p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-center gap-3">
                  <i className="ri-error-warning-line text-red-600 text-2xl" aria-hidden="true"></i>
                  <p className="text-red-700 font-medium">Please fill in all required fields.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    label="Full Name"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleChange("fullName")}
                    required
                  />
                  <InputField
                    label="Email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange("email")}
                    required
                  />
                </div>
                <InputField
                  label="Subject"
                  placeholder="Project discussion"
                  value={formData.subject}
                  onChange={handleChange("subject")}
                  required
                />
                <InputField
                  label="Message"
                  placeholder="Tell me about your project..."
                  rows="6"
                  value={formData.message}
                  onChange={handleChange("message")}
                  required
                />
                <Button type="submit" className="w-full justify-center" icon="ri-send-plane-line">
                  Send Message
                </Button>
              </form>

              <p className="mt-6 text-sm text-stone/70 text-center">
                Submitting opens your email client with the message ready to send.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-panel">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              kicker="FAQ"
              title="Frequently asked questions"
              subtitle="Straight answers to what clients actually ask."
            />
          </Reveal>

          <Reveal stagger className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-paper rounded-lg p-6 border border-line transition-colors duration-300 hover:border-brass"
              >
                <h3 className="text-lg font-display font-medium text-ink mb-2">{faq.question}</h3>
                <p className="text-stone leading-relaxed text-[15px]">{faq.answer}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;
