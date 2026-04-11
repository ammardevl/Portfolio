import React, { useState } from "react";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/muhammad-ammar-1a701130b/",
    iconClass: "ri-linkedin-fill",
    platform: "LinkedIn",
    color: "hover:bg-blue-600",
  },
  {
    href: "https://github.com/ammardevl",
    iconClass: "ri-github-fill",
    platform: "GitHub",
    color: "hover:bg-gray-700",
  },
  {
    href: "https://www.instagram.com/y.ammar_06/",
    iconClass: "ri-instagram-line",
    platform: "Instagram",
    color: "hover:bg-pink-600",
  },
  {
    href: "https://www.facebook.com/profile.php?id=100007319979278",
    iconClass: "ri-facebook-fill",
    platform: "Facebook",
    color: "hover:bg-blue-700",
  },
];

// Contact methods data
const contactMethods = [
  {
    icon: "ri-mail-line",
    title: "Email",
    value: "console.log.ammar@gmail.com",
    link: "mailto:console.log.ammar@gmail.com",
    description: "Send me an email anytime",
  },
  {
    icon: "ri-whatsapp-line",
    title: "WhatsApp",
    value: "Available on Request",
    link: "#",
    description: "Let's chat on WhatsApp",
  },
  {
    icon: "ri-time-line",
    title: "Response Time",
    value: "Within 24 hours",
    link: null,
    description: "Quick and reliable response",
  },
  {
    icon: "ri-global-line",
    title: "Location",
    value: "Available Worldwide",
    link: null,
    description: "Remote work capability",
  },
];

// Social link component
const SocialLink = ({ link }) => (
  <a
    className={`w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 hover:text-white hover:scale-110 hover:shadow-lg ${link.color}`}
    href={link.href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Visit my ${link.platform} profile`}
  >
    <i className={`${link.iconClass} text-xl`}></i>
  </a>
);

// Input field component
const InputField = ({
  label,
  type = "text",
  placeholder,
  rows,
  value,
  onChange,
  required = false,
}) => {
  const inputId = `input-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div>
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {rows ? (
        <textarea
          id={inputId}
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-gray-900 transition-all duration-300 resize-none"
        />
      ) : (
        <input
          id={inputId}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-gray-900 transition-all duration-300"
        />
      )}
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = () => {
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className="py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 bg-orange-100  text-orange-600  px-4 py-2 rounded-full text-sm font-medium">
                <i className="ri-message-3-line"></i>
                Let's Connect
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-light mb-6 text-gray-900 tracking-tight">
              Get In <span className="text-orange-500">Touch</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have a project in mind or just want to say hello? I'd love to hear
              from you. Let's create something amazing together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-light mb-6 text-gray-900">
                Let's Talk About Your Project
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                I'm always excited to work on new projects and collaborate with
                amazing people. Whether you have a question or just want to say
                hi, feel free to reach out!
              </p>

              <div className="space-y-6 mb-8">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <i
                        className={`${method.icon} text-orange-500 text-xl`}
                      ></i>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 ">
                        {method.title}
                      </div>
                      {method.link ? (
                        <a
                          href={method.link}
                          className="text-gray-600 hover:text-orange-500 transition-colors duration-300 block"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <div className="text-gray-600">{method.value}</div>
                      )}
                      <p className="text-sm text-gray-500 mt-1">
                        {method.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Connect With Me
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <SocialLink key={index} link={link} />
                  ))}
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
                <i className="ri-information-line text-3xl mb-4"></i>
                <h3 className="text-xl font-medium mb-2">Quick Response</h3>
                <p className="text-white/90 leading-relaxed">
                  I typically respond to all inquiries within 24 hours. For
                  urgent matters, please mention it in your message.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-2xl border border-gray-200">
              <h3 className="text-2xl font-medium mb-6 text-gray-900">
                Send Me a Message
              </h3>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-100 border border-green-500 rounded-xl flex items-center gap-3">
                  <i className="ri-checkbox-circle-line text-green-500 text-2xl"></i>
                  <div>
                    <p className="text-green-700 font-medium">
                      Message sent successfully!
                    </p>
                    <p className="text-green-600 text-sm">
                      I'll get back to you soon.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-100 border border-red-500 rounded-xl flex items-center gap-3">
                  <i className="ri-error-warning-line text-red-500 text-2xl"></i>
                  <div>
                    <p className="text-red-700 font-medium">
                      Please fill all required fields!
                    </p>
                  </div>
                </div>
              )}

              <div className="space-y-6">
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
                  placeholder="Project Discussion"
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
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-3 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
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
                </button>
              </div>

              <p className="mt-6 text-sm text-gray-500 text-center">
                By submitting, you agree to be contacted via email.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-light mb-4 text-gray-900 tracking-tight">
              Frequently Asked{" "}
              <span className="text-orange-500">Questions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                question: "What is your typical turnaround time?",
                answer:
                  "Project timelines vary based on scope and complexity. Simple websites take 1-2 weeks, while complex applications may take 4-6 weeks.",
              },
              {
                question: "Do you work with clients internationally?",
                answer:
                  "Absolutely! I work with clients worldwide and am experienced in remote collaboration with flexible time zones.",
              },
              {
                question: "What is your pricing structure?",
                answer:
                  "Pricing depends on project scope, complexity, and requirements. I offer both fixed-price and hourly rates.",
              },
              {
                question: "Do you provide ongoing support?",
                answer:
                  "Yes! I offer maintenance packages and ongoing support to ensure your website stays updated, secure, and performing optimally.",
              },
              {
                question: "Can you work with existing websites?",
                answer:
                  "Definitely! I can update, redesign, or add features to existing websites, whether WordPress, React, or another platform.",
              },
              {
                question: "What do you need to get started?",
                answer:
                  "To begin, I need details about your project goals, target audience, design preferences, and specific features you want.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200  hover:border-orange-500  transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <i className="ri-question-line text-orange-500"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600  leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Contact;
