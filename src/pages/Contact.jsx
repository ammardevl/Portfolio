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

  return (
    <div>
      <label htmlFor={inputId} className="ammar-dev-field__label">
        {label}
        {required && <span className="ammar-dev-field__required">*</span>}
      </label>
      {rows ? (
        <textarea
          id={inputId}
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className="ammar-dev-field__textarea"
        />
      ) : (
        <input
          id={inputId}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className="ammar-dev-field__input"
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

      <section className="ammar-dev-page-hero">
        <div className="ammar-dev-container">
          <Reveal>
            <SectionHeading
              kicker="Let's talk"
              title="Get in touch"
              subtitle="Have a project in mind, or just want to say hello? I'd love to hear from you."
            />
          </Reveal>

          <div className="ammar-dev-contact-grid">
            <Reveal>
              <h2 className="ammar-dev-contact-info__title">Let's talk about your project</h2>
              <p className="ammar-dev-contact-info__desc">
                I'm always up for new projects and collaborations. Whether you have a clear brief
                or just a rough idea, feel free to reach out.
              </p>

              <div className="ammar-dev-contact-methods">
                {contactMethods.map((method) => (
                  <div key={method.title} className="ammar-dev-contact-method">
                    <div className="ammar-dev-contact-method__icon">
                      <i className={method.icon} aria-hidden="true"></i>
                    </div>
                    <div className="ammar-dev-contact-method__body">
                      <div className="ammar-dev-contact-method__title">{method.title}</div>
                      {method.link ? (
                        <a href={method.link} className="ammar-dev-contact-method__value">
                          {method.value}
                        </a>
                      ) : (
                        <div className="ammar-dev-contact-method__value">{method.value}</div>
                      )}
                      <p className="ammar-dev-contact-method__desc">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="ammar-dev-contact-connect__title">Connect with me</h3>
                <SocialRow />
              </div>

              <div className="ammar-dev-contact-note">
                <i className="ri-information-line ammar-dev-contact-note__icon" aria-hidden="true"></i>
                <h3 className="ammar-dev-contact-note__title">Quick response</h3>
                <p className="ammar-dev-contact-note__desc">
                  I typically respond within 24 hours. Mention it in your message if something's
                  urgent.
                </p>
              </div>
            </Reveal>

            <Reveal className="ammar-dev-contact-form-card">
              <h3 className="ammar-dev-contact-form-card__title">Send me a message</h3>

              {submitStatus === "success" && (
                <div className="ammar-dev-form-alert ammar-dev-form-alert--success">
                  <i className="ri-checkbox-circle-line" aria-hidden="true"></i>
                  <div>
                    <p>Opening your email client</p>
                    <p>Send the message and I'll reply within a day.</p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="ammar-dev-form-alert ammar-dev-form-alert--error">
                  <i className="ri-error-warning-line" aria-hidden="true"></i>
                  <p>Please fill in all required fields.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="ammar-dev-form" noValidate>
                <div className="ammar-dev-form-row">
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
                <Button type="submit" className="ammar-dev-btn--full" icon="ri-send-plane-line">
                  Send Message
                </Button>
              </form>

              <p className="ammar-dev-form-note">
                Submitting opens your email client with the message ready to send.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="ammar-dev-section ammar-dev-section--panel">
        <div className="ammar-dev-container">
          <Reveal>
            <SectionHeading
              kicker="FAQ"
              title="Frequently asked questions"
              subtitle="Straight answers to what clients actually ask."
            />
          </Reveal>

          <Reveal stagger className="ammar-dev-faq-grid">
            {faqs.map((faq) => (
              <div key={faq.question} className="ammar-dev-faq-card">
                <h3 className="ammar-dev-faq-card__question">{faq.question}</h3>
                <p className="ammar-dev-faq-card__answer">{faq.answer}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;
