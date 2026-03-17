import myimage from "../assets/my-image.jpeg";

const aboutStats = [
  { number: "3+", label: "Years Experience", icon: "ri-time-line" },
  { number: "35+", label: "Projects Completed", icon: "ri-folder-check-line" },
  { number: "100%", label: "Client Satisfaction", icon: "ri-star-line" },
  { number: "15+", label: "Happy Clients", icon: "ri-user-smile-line" },
];

const skillsData = [
  {
    category: "Frontend Development",
    icon: "ri-code-s-slash-line",
    skills: [
      { name: "HTML5 & CSS3", level: 95 },
      { name: "JavaScript ES6+", level: 90 },
      { name: "React.js", level: 70 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Responsive Design", level: 99 },
    ],
  },
  {
    category: "WordPress Development",
    icon: "ri-wordpress-line",
    skills: [
      { name: "Website Maintenance", level: 90 },
      { name: "Plugin Customization", level: 85 },
      { name: "Elementor & Divi", level: 95 },
      { name: "WooCommerce", level: 80 },
      { name: "WordPress Optimization", level: 92 },
    ],
  },
  {
    category: "Tools & Technologies",
    icon: "ri-tools-line",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "SEO Optimization", level: 90 },
      { name: "Performance Optimization", level: 92 },
      { name: "API Integration", level: 85 },
      { name: "Database Management", level: 75 },
    ],
  },
];

const timelineData = [
  {
    year: "2024 - Present",
    title: "Freelance Website Developer",
    company: "Self-Employed",
    description:
      "Building Custom websites and web applications for clients worldwide. Specializing in React and WordPress development with a focus on Modern Design, SEO and performance.",
    icon: "ri-briefcase-line",
  },
  {
    year: "In 2024 about 3 months",
    title: "Intern WordPress Developer",
    company: "Meta Perficient",
    description:
      "Started Handling Real Projects with WordPress theme customization & development. Built strong foundation in Web development, and started Learning HTML5, CSS3 and JavaScript",
    icon: "ri-wordpress-line",
  },
  {
    year: "2023 - 2024",
    title: "Started Web Development Journey",
    company: "Self-Learning",
    description:
      "Began learning Web development through famous Content Management System (CMS) WordPress. Discovered passion for creating beautiful and functional websites.",
    icon: "ri-graduation-cap-line",
  },
];

const SkillBar = ({ skill }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span className="text-gray-700 dark:text-gray-300 font-medium">
        {skill.name}
      </span>
      <span className="text-orange-500 font-medium">{skill.level}%</span>
    </div>
    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${skill.level}%` }}
      ></div>
    </div>
  </div>
);

const TimelineItem = ({ item, index }) => (
  <div className="relative flex gap-6 pb-12 last:pb-0">
    <div className="absolute left-[27px] top-12 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700"></div>

    <div className="relative z-10 flex-shrink-0">
      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
        <i className={`${item.icon} text-white text-xl`}></i>
      </div>
    </div>

    <div className="flex-1 pt-2">
      <span className="inline-block px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium mb-3">
        {item.year}
      </span>
      <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-1">
        {item.title}
      </h3>
      <p className="text-orange-500 font-medium mb-3">{item.company}</p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        {item.description}
      </p>
    </div>
  </div>
);

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <section className="py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10">
                <img
                  className="w-full h-96 lg:h-[600px] object-cover object-bottom rounded-2xl shadow-2xl"
                  src={myimage}
                  alt="Muhammad Ammar, Frontend Developer"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl opacity-20"></div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-4 py-2 rounded-full text-sm font-medium">
                  <i className="ri-user-line"></i>
                  Get to Know Me
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-light mb-6 text-gray-900 dark:text-white tracking-tight">
                About <span className="text-orange-500">Me</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                I'm Muhammad Ammar, a Frontend Developer with over 3 years of
                experience crafting exceptional websites. My journey began with
                WordPress and has evolved into mastering modern web
                technologies.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                I specialize in creating Responsive, SEO Optimized and Fast
                Loading websites that not only look good but also deliver
                outstanding performance and User Experience.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {aboutStats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                  >
                    <i
                      className={`${stat.icon} text-3xl text-orange-500 mb-3`}
                    ></i>
                    <div className="text-3xl font-light text-orange-500 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Let's Work Together
                <i className="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white dark:bg-gray-900">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-light mb-4 text-gray-900 dark:text-white tracking-tight">
              My <span className="text-orange-500">Skills</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Technical expertise and proficiency levels
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {skillsData.map((category, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
                    <i className={`${category.icon} text-white text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    {category.category}
                  </h3>
                </div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} skill={skill} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-light mb-4 text-gray-900 dark:text-white tracking-tight">
              My <span className="text-orange-500">Journey</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Professional experience and career milestones
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white dark:bg-gray-900">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-light mb-4 text-gray-900 dark:text-white tracking-tight">
              Core <span className="text-orange-500">Values</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Principles that guide my work and approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "ri-lightbulb-line",
                title: "Innovation",
                description:
                  "Always exploring new technologies and creative solutions to deliver cutting-edge results.",
              },
              {
                icon: "ri-check-double-line",
                title: "Quality",
                description:
                  "Committed to delivering high-quality work that exceeds expectations every time.",
              },
              {
                icon: "ri-time-line",
                title: "Reliability",
                description:
                  "Meeting deadlines and maintaining clear communication throughout every project.",
              },
              {
                icon: "ri-team-line",
                title: "Collaboration",
                description:
                  "Working closely with clients to understand their vision and bring it to life.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
                  <i className={`${value.icon} text-white text-3xl`}></i>
                </div>
                <h3 className="text-xl font-medium mb-3 text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-light mb-6 text-white tracking-tight">
            Let's Create Something Amazing
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Ready to bring your project to life? Get in touch and let's start
            building!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-white text-orange-600 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Contact Me
            <i className="ri-mail-line"></i>
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
