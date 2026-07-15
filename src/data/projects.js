// Single source of truth for all project data.
// imageKey maps to actual imports in imageMap.js

export const allProjects = [
  {
    id: 1,
    slug: "norsl-store",
    title: "NORSL Store",
    shortDescription:
      "Modern e-commerce site built for visual impact, with cart functionality, product filtering, and a fully responsive layout.",
    description:
      "NORSL Store is an e-commerce platform built to deliver a premium shopping experience without a backend. It runs on React and Tailwind CSS, with dynamic product filtering and a cart system persisted in the browser, so every interaction from browsing to checkout stays fast and clear.",
    imageKey: "norsl",
    link: "https://web2-ecommerce.netlify.app/",
    category: "Custom Coded",
    featured: false,
    technologies: ["React", "Tailwind CSS", "Dynamic Website", "JavaScript"],
    features: [
      "Shopping cart",
      "Product filters",
      "Responsive design",
      "Modern UI",
    ],
    challenge:
      "Building a smooth cart experience without a backend meant handling state and localStorage persistence by hand.",
    outcome:
      "A fully functional storefront with a clean UX that turns browsers into buyers.",
  },
  {
    id: 2,
    slug: "vsl-packaging",
    title: "VSL Packaging Company",
    shortDescription:
      "Corporate website with a modern layout, chatbot integration, product catalogs, and detailed specifications.",
    description:
      "VSL Packaging is a full corporate site for a B2B packaging company. Built on WordPress with Divi, it includes a custom chatbot for instant support, detailed product catalogs with technical specifications, and an SEO-optimized page structure.",
    imageKey: "vslpackaging",
    link: "https://www.vslpackaging.com/",
    category: "WordPress",
    featured: true,
    technologies: ["WordPress", "Divi", "CSS3", "Chatbot Integration"],
    features: ["Custom design", "Chatbot", "Product catalog", "SEO optimized"],
    challenge:
      "Integrating a chatbot that felt native to the site design, instead of a bolted-on third-party widget.",
    outcome:
      "Inquiry form submissions rose 40% in the first month after launch.",
  },
  {
    id: 3,
    slug: "dgbytes-technology",
    title: "DGBytes Technology",
    shortDescription:
      "Technology solutions platform with a client portal, case studies, and API integrations.",
    description:
      "DGBytes is a technology services site built on WordPress, including a client-facing portal where customers track projects and access resources, a case studies section, and integrations with external APIs.",
    imageKey: "digibyte",
    link: "https://dgbinsights.com/",
    category: "WordPress",
    featured: false,
    technologies: [
      "WordPress",
      "Custom Development",
      "API Integration",
      "Client Portal",
    ],
    features: [
      "Client portal",
      "API integration",
      "Case studies",
      "News section",
    ],
    challenge:
      "Designing a portal experience inside WordPress that felt like a native web app, without a separate frontend framework.",
    outcome:
      "Centralized client resources cut down support requests noticeably.",
  },
  {
    id: 4,
    slug: "coffee-xperts",
    title: "Coffee Xperts",
    shortDescription:
      "SEO-focused WordPress site with advanced caching, image optimization, and fast load times.",
    description:
      "Coffee Xperts is a performance-first WordPress build for a European coffee brand. The focus was technical SEO and Core Web Vitals, reaching top PageSpeed scores through caching, image compression, and lazy loading.",
    imageKey: "coffeexperts",
    link: "https://coffeexperts.eu/",
    category: "WordPress",
    featured: false,
    technologies: ["WordPress", "Yoast SEO", "WP Rocket", "Smush Pro"],
    features: [
      "90+ PageSpeed score",
      "Advanced caching",
      "Image optimization",
      "Rich snippets",
    ],
    challenge:
      "Years of unoptimized images and unused plugins had built up serious performance debt.",
    outcome:
      "Load time dropped from 8s to under 2s, and organic traffic grew 25% in three months.",
  },
  {
    id: 5,
    slug: "digitech-digital-solutions",
    title: "DigiTech Digital Solutions",
    shortDescription:
      "Bold multi-page corporate site with smooth animations and clear service showcasing, built with AI-assisted workflows.",
    description:
      "DigiTech Digital Solutions is a corporate site for a digital agency, built in React with AI pair-programming tools speeding up scaffolding and iteration. It carries multiple pages, smooth animations, and a design system that communicates the company's services clearly.",
    imageKey: "digitech",
    link: "https://web1-digitech.netlify.app/",
    category: "AI-Assisted Dev",
    featured: false,
    technologies: ["React", "Tailwind CSS", "GitHub Copilot", "Multi-page Web"],
    features: [
      "Multi-page layout",
      "Smooth animations",
      "Contact forms",
      "Service showcase",
    ],
    challenge:
      "Creating a multi-page feel inside a single React app while keeping transitions smooth.",
    outcome:
      "The client used the site to land two enterprise contracts within six weeks of launch.",
  },
  {
    id: 6,
    slug: "eheatcool-hvac",
    title: "Eheatcool HVAC Services",
    shortDescription:
      "HVAC services website with online booking and an instant quote calculator.",
    description:
      "Eheatcool is a professional HVAC services site built on WordPress with Divi. It includes online booking, an instant quote calculator, and dedicated service pages built to turn local search traffic into booked appointments.",
    imageKey: "eheatcool",
    link: "https://eheatcool.com/",
    category: "WordPress",
    featured: false,
    technologies: ["WordPress", "Divi", "Booking System", "Quote Calculator"],
    features: [
      "Online booking",
      "Quote calculator",
      "Service pages",
      "Customer portal",
    ],
    challenge: "Making the booking and quote flow work smoothly on mobile.",
    outcome:
      "Online bookings increased 60% compared to their old phone-only system.",
  },
  {
    id: 7,
    slug: "wanderlust-travel-blog",
    title: "Wanderlust Travel Blog",
    shortDescription:
      "Travel blog with dynamic post switching, travel stories, and a destinations grid.",
    description:
      "Wanderlust is a travel blog built with React, with dynamic switching between stories, a destinations grid, and post sharing. The design leans editorial, with large hero images that carry the mood of each place.",
    imageKey: "wanderlust",
    link: "https://web4-travel.netlify.app/",
    category: "Custom Coded",
    featured: false,
    technologies: ["React", "Styled Components", "CSS3"],
    features: [
      "Blog posts",
      "Post share buttons",
      "Travel tips",
      "Destinations grid",
    ],
    challenge:
      "Designing a reading experience that felt like a magazine, not a generic blog template.",
    outcome:
      "High engagement, with most readers browsing several posts per session.",
  },
  {
    id: 8,
    slug: "rental-cars-website",
    title: "Rental Cars Website",
    shortDescription:
      "Responsive car rental site with dark/light mode and live search.",
    description:
      "A car rental site built with React, featuring a dark/light mode toggle, live car search, and a clean browsing experience. Styled Components handle theming so the mode switch stays instant and consistent everywhere.",
    imageKey: "rental",
    link: "https://web5-rental-services.netlify.app/",
    category: "Custom Coded",
    featured: false,
    technologies: ["React", "Styled Components", "CSS3"],
    features: [
      "Car showcase",
      "Search functionality",
      "Dark & light mode",
      "Responsive design",
    ],
    challenge:
      "Building a theme system that worked globally without prop-drilling through every component.",
    outcome: "A maintainable theme architecture that scales cleanly with new components.",
  },
  {
    id: 9,
    slug: "medicare-healthcare",
    title: "Medicare Healthcare Website",
    shortDescription:
      "Animated healthcare site with scroll-triggered transitions, built with AI-assisted development.",
    description:
      "Medicare is a healthcare site built with React and GSAP, developed with AI tools handling boilerplate so more time went into the animation choreography. Scroll-triggered effects and entrance transitions guide the eye and build credibility section by section.",
    imageKey: "medicare",
    link: "https://web3-medicare.netlify.app/",
    category: "AI-Assisted Dev",
    featured: true,
    technologies: ["React", "GSAP", "Claude Code", "Tailwind CSS"],
    features: [
      "Dark & light mode",
      "Smooth transitions",
      "Scroll animations",
      "Responsive design",
    ],
    challenge:
      "Balancing rich animation with performance — GSAP needed careful tuning to avoid jank on lower-end devices.",
    outcome:
      "95+ performance score despite heavy animation use, through careful optimization.",
  },
  {
    id: 10,
    slug: "grothico-agency",
    title: "Grothico Agency Website",
    shortDescription:
      "Dark-themed, fast, SEO-optimized site for a services agency, shipped with AI-assisted tooling.",
    description:
      "Grothico is a dark-themed agency site for a services firm in Pakistan. Built with React and shaped with AI pair-programming for faster iteration, it features entrance animations, EmailJS-powered contact forms, and a premium, restrained aesthetic.",
    imageKey: "grothico",
    link: "https://web6-grothico.netlify.app/",
    category: "AI-Assisted Dev",
    featured: true,
    technologies: ["React", "EmailJS", "Gemini", "CSS3"],
    features: [
      "Dark & light mode",
      "Smooth transitions",
      "Entrance animations",
      "Responsive design",
      "Post pages",
    ],
    challenge:
      "Making a dark theme feel premium rather than heavy, with careful contrast and restrained color accents.",
    outcome:
      "The agency reported more premium client inquiries after switching from their old site.",
  },
  {
    id: 11,
    slug: "advantage-property-management",
    title: "Advantage Property Management",
    shortDescription:
      "Real estate site with property listings, an inquiry system, and a clean Elementor build.",
    description:
      "Advantage Property Management is a real estate site built on WordPress with Elementor Pro. It includes property listings, tenant and owner resources, an online inquiry form, and a clean, trustworthy design tuned for local search.",
    imageKey: "property",
    link: "https://dev-advantage-property-management.pantheonsite.io/",
    category: "WordPress",
    featured: false,
    technologies: ["WordPress", "Elementor Pro", "CSS3"],
    features: [
      "Property listings",
      "Tenant & owner resources",
      "Online inquiry forms",
      "Local SEO",
      "Mobile-responsive",
    ],
    challenge:
      "Translating property management workflows into a clear structure that serves two audiences: owners and tenants.",
    outcome:
      "Simplified inquiries and reduced back-and-forth emails during client onboarding.",
  },
  {
    id: 12,
    slug: "crypto-quiz-platform",
    title: "Crypto Quiz Platform",
    shortDescription:
      "Interactive crypto quiz where users test their knowledge and download a personalized PDF certificate.",
    description:
      "A fully client-side quiz platform built with vanilla HTML, CSS, and ES6+ JavaScript. Users enter their name and email, take a multi-question crypto quiz, then download a certificate generated in-browser with pdf-lib, complete with their name, score, and date.",
    imageKey: "quiz",
    link: "https://web6-quiz-platform.netlify.app/",
    category: "Custom Coded",
    featured: false,
    technologies: ["HTML5", "CSS3", "JavaScript ES6+", "pdf-lib"],
    features: [
      "Multi-question crypto quiz",
      "User registration form",
      "Score calculation & results page",
      "PDF certificate generation",
      "Fully client-side",
    ],
    challenge:
      "Generating a polished PDF entirely in the browser, with dynamic text placement for each user's details.",
    outcome:
      "A zero-backend quiz that feels like a full-stack app, with shareable certificates users keep.",
  },
  {
    id: 13,
    slug: "maply-map-app",
    title: "Maply — Interactive Map App",
    shortDescription:
      "Web app for pinning and tracking events on an interactive map, built with OOP JavaScript and Leaflet.",
    description:
      "Maply is a location-based event tracker built with plain HTML5, CSS3, and object-oriented JavaScript. Powered by Leaflet.js, users click any point on the map to pin an event, add details, and manage saved locations, with everything persisted to localStorage.",
    imageKey: "maply",
    link: "https://map-by-ammar.netlify.app/",
    category: "Custom Coded",
    featured: false,
    technologies: ["JavaScript OOP", "Leaflet.js", "HTML5", "CSS3"],
    features: [
      "Click-to-pin event creation",
      "Interactive Leaflet map",
      "Event detail forms",
      "LocalStorage persistence",
      "OOP architecture",
    ],
    challenge:
      "Structuring a stateful app in plain OOP JavaScript, with no framework, while keeping the code clean and extensible.",
    outcome:
      "A maintainable, framework-free app that shows deep JavaScript fundamentals with a polished UX.",
  },
];

// Featured projects for the homepage
export const featuredProjects = allProjects
  .filter((p) => p.featured)
  .slice(0, 3);

export const categories = [
  "All",
  "Custom Coded",
  "WordPress",
  "AI-Assisted Dev",
];

// Maps each project category to a palette accent used for chips/badges.
export const categoryAccent = {
  "Custom Coded": "bg-red text-white",
  WordPress: "bg-coral text-white",
  "AI-Assisted Dev": "bg-ink text-yellow",
};
