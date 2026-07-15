import React, { useState } from "react";
import { contactInfo } from "../data/social";
import { Eyebrow, Button, SectionHeading, SocialRow } from "../components/ui";

const contactMethods = [
  { icon: "ri-mail-line", title: "Email", value: contactInfo.email, link: `mailto:${contactInfo.email}`, description: "Best way to reach me — I check it daily" },
  { icon: "ri-whatsapp-line", title: "WhatsApp", value: "Available on request", link: null, description: "I'll share this once we're talking specifics" },
  { icon: "ri-time-line", title: "Response Time", value: "Within 24 hours", link: null, description: "Usually much sooner on weekdays" },
  { icon: "ri-global-line", title: "Location", value: "Available worldwide", link: null, description: "Comfortable working across US, UK, and AU hours" },
];

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "A single-page or small business site usually takes 1–2 weeks. Multi-page React apps or WooCommerce builds run 3–6 weeks depending on scope. I'll give you a real timeline after we scope the project, not a generic estimate.",
  },
  {
    question: "Do you charge fixed price or hourly?",
    answer:
      "Both, depending on the project. Well-defined scopes get a fixed quote upfront. Ongoing work, maintenance, or open-ended builds are billed hourly. Either way, you'll know the number before we start.",
  },
  {
    question: "Can you work with my existing WordPress or React site instead of rebuilding it?",
    answer:
      "Yes — most of my work is exactly this. I can extend, redesign sections of, or fix an existing site without starting from zero, as long as the current codebase is in reasonable shape.",
  },
  {
    question: "Do you actually use AI tools, or is that just marketing?",
    answer:
      "I use Claude Code, Copilot, and similar tools for scaffolding, debugging, and speeding up repetitive work. Every architecture decision, every design choice, and every line before it ships is reviewed by me — AI shortens the timeline, it doesn't replace the judgment.",
  },
  {
    question: "I'm in a different time zone — will that be a problem?",
    answer:
      "No. I already work with clients across the US, UK, and Australia, and I keep async communication (email, written updates, recorded loom-style walkthroughs) tight so time zones don't slow a project down.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "A short brief: what the site needs to do, any design references or existing brand assets, and a rough deadline. I'll turn that into a proposal with scope, timeline, and cost within a couple of days.",
  },
];

const InputField = ({ label, type = "text", placeholder, rows, value, onChange, required = false }) => {
  const inputId = `input-${label.toLowerCase().replace(/\s+/g, "-")}`;
  const baseClass =
    "w-full p-4 border border-border-soft rounded-xl focus:outline-none focus:ring-2 focus:ring-red/40 focus:border-red bg-white text-ink transition-all duration-300";

  return (
    <div>
      <label htmlFor={inputId} className="block text-sm font-medium text-ink mb-2">
        {label}
        {required && <span className="text-red ml-1">*</span>}
      </label>
      {rows ? (
        <textarea id={inputId} rows={rows} placeholder={placeholder} value={value} onChange={onChange} className={`${baseClass} resize-none`} />
      ) : (
        <input id={inputId} type={type} placeholder={placeholder} value={value} onChange={onChange} className={baseClass} />
      )}
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ fullName: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (field) => (e) => setFormData({ ...formData, [field]: e.target.value });

  const handleSubmit = () => {
    if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus(null);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ fullName: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="contact --new"
            title="Get In"
            highlight="Touch"
            subtitle="Have a project in mind or just want to say hello? I'd love to hear from you."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl lg:text-3xl font-display font-medium mb-6 text-ink">Let's Talk About Your Project</h2>
              <p className="text-lg text-muted mb-8 leading-relaxed">
                I'm always up for new projects and collaborations. Whether you
                have a clear brief or just a rough idea, feel free to reach out.
              </p>

              <div className="space-y-6 mb-8">
                {contactMethods.map((method) => (
                  <div key={method.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center flex-shrink-0">
                      <i className={`${method.icon} text-red text-xl`}></i>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-ink">{method.title}</div>
                      {method.link ? (
                        <a href={method.link} className="text-muted hover:text-red transition-colors duration-300 block">
                          {method.value}
                        </a>
                      ) : (
                        <div className="text-muted">{method.value}</div>
                      )}
                      <p className="text-sm text-ink/40 mt-1">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-lg font-display font-medium text-ink mb-4">Connect With Me</h3>
                <SocialRow />
              </div>

              <div className="mt-8 bg-ink rounded-2xl p-8 text-white">
                <i className="ri-information-line text-3xl mb-4 block text-yellow"></i>
                <h3 className="text-xl font-display font-medium mb-2">Quick Response</h3>
                <p className="text-cream/70 leading-relaxed">
                  I typically respond within 24 hours. Mention it in your
                  message if something's urgent.
                </p>
              </div>
            </div>

            <div className="bg-surface p-8 lg:p-10 rounded-2xl shadow-sm border border-border-soft">
              <h3 className="text-2xl font-display font-medium mb-6 text-ink">Send Me a Message</h3>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-ink/5 border border-ink/10 rounded-xl flex items-center gap-3">
                  <i className="ri-checkbox-circle-line text-red text-2xl"></i>
                  <div>
                    <p className="text-ink font-medium">Message sent successfully!</p>
                    <p className="text-muted text-sm">I'll get back to you soon.</p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red/5 border border-red/20 rounded-xl flex items-center gap-3">
                  <i className="ri-error-warning-line text-red text-2xl"></i>
                  <p className="text-red font-medium">Please fill all required fields!</p>
                </div>
              )}

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField label="Full Name" placeholder="John Doe" value={formData.fullName} onChange={handleChange("fullName")} required />
                  <InputField label="Email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleChange("email")} required />
                </div>
                <InputField label="Subject" placeholder="Project Discussion" value={formData.subject} onChange={handleChange("subject")} required />
                <InputField label="Message" placeholder="Tell me about your project..." rows="6" value={formData.message} onChange={handleChange("message")} required />
                <Button onClick={handleSubmit} className={`w-full justify-center ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}>
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line text-xl animate-spin"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="ri-send-plane-line"></i>
                      Send Message
                    </>
                  )}
                </Button>
              </div>

              <p className="mt-6 text-sm text-ink/40 text-center">By submitting, you agree to be contacted via email.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-cream/40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <SectionHeading eyebrow="faq --list" title="Frequently Asked" highlight="Questions" subtitle="Straight answers to what clients actually ask." />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-2xl p-6 shadow-sm border border-border-soft hover:border-red transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center flex-shrink-0">
                    <i className="ri-question-line text-red"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-medium text-ink mb-2">{faq.question}</h3>
                    <p className="text-muted leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
