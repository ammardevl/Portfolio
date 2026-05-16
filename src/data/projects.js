// Single source of truth for all project data.
// imageKey maps to actual imports in imageMap.js

export const allProjects = [
  {
    id: 1,
    slug: "norsl-store",
    title: "NORSL Store",
    shortDescription:
      "Modern E-commerce website designed for visual impact with cart functionality, product filtering, and responsive design.",
    description:
      "NORSL Store is a modern e-commerce platform built to deliver a premium online shopping experience. The website features dynamic product filtering, a smooth cart system, and a visually striking UI built with React and Tailwind CSS. Every interaction is designed for speed and clarity — from product browsing to checkout flow.",
    imageKey: "norsl",
    link: "https://web2-ecommerce.netlify.app/",
    category: "Custom Coded",
    featured: false,
    technologies: ["React", "Tailwind CSS", "Dynamic Website", "JavaScript"],
    features: [
      "Shopping Cart",
      "Product Filters",
      "Responsive Design",
      "Modern UI",
    ],
    challenge:
      "Building a smooth cart experience without a backend required careful state management and localStorage integration.",
    outcome:
      "Delivered a fully functional storefront with a clean UX that converts browsers into buyers.",
  },
  {
    id: 2,
    slug: "vsl-packaging",
    title: "VSL Packaging Company",
    shortDescription:
      "Complete company website with modern layout, chatbot integration, product catalogs, and detailed specifications.",
    description:
      "VSL Packaging is a full corporate website for a B2B packaging company. Built on WordPress with Divi, it features a custom chatbot for instant customer support, detailed product catalogs with technical specifications, and an SEO-optimized structure.",
    imageKey: "vslpackaging",
    link: "https://www.vslpackaging.com/",
    category: "WordPress",
    featured: true,
    technologies: ["WordPress", "Divi", "CSS3", "Chatbot Integration"],
    features: ["Custom Design", "Chatbot", "Product Catalog", "SEO Optimized"],
    challenge:
      "Integrating a chatbot that felt native to the site design without third-party widgets looking out of place.",
    outcome:
      "The client saw a 40% increase in inquiry form submissions within the first month of launch.",
  },
  {
    id: 3,
    slug: "dgbytes-technology",
    title: "DGBytes Technology",
    shortDescription:
      "Technology solutions platform with client portal, case studies, and advanced API integrations.",
    description:
      "DGBytes is a full-featured technology services website built on WordPress. It includes a client-facing portal where customers can track projects and access resources, a case studies section, and integrations with external APIs.",
    imageKey: "digibyte",
    link: "https://dgbinsights.com/",
    category: "WordPress",
    featured: false,
    technologies: [
      "WordPress",
      "Custom Development",
      "API Integration",
      "Portal",
    ],
    features: [
      "Client Portal",
      "API Integration",
      "Case Studies",
      "News Section",
    ],
    challenge:
      "Designing a portal experience within WordPress that felt like a native web app without a separate frontend framework.",
    outcome:
      "Reduced client support requests by centralizing resources in the portal.",
  },
  {
    id: 4,
    slug: "coffee-xperts",
    title: "Coffee Xperts",
    shortDescription:
      "SEO-focused WordPress website with advanced caching, image optimization, and lightning-fast load times.",
    description:
      "Coffee Xperts is a performance-first WordPress project for a European coffee brand. The focus was on technical SEO and Core Web Vitals — achieving top scores on PageSpeed Insights through aggressive caching, image compression, and lazy loading.",
    imageKey: "coffeexperts",
    link: "https://coffeexperts.eu/",
    category: "WordPress",
    featured: false,
    technologies: ["Yoast SEO", "Smush Pro", "WP Rocket", "WordPress"],
    features: [
      "90+ PageSpeed score",
      "Advanced caching",
      "Image optimization",
      "Rich snippets",
    ],
    challenge:
      "The site had years of unoptimized images and unused plugins creating severe performance debt.",
    outcome:
      "Page load time dropped from 8s to under 2s. Organic traffic improved 25% in 3 months.",
  },
  {
    id: 5,
    slug: "digitech-digital-solutions",
    title: "DigiTech Digital Solutions",
    shortDescription:
      "Modern and bold multi-page corporate website with smooth animations and service showcasing.",
    description:
      "DigiTech Digital Solutions is a bold corporate website for a digital agency. Built in React with multiple pages, smooth animations, and a professional design system that effectively communicates the company's services and portfolio.",
    imageKey: "digitech",
    link: "https://web1-digitech.netlify.app/",
    category: "Vibe Coded",
    featured: false,
    technologies: ["React", "Tailwind CSS", "Multi Page Web", "Web Hooks"],
    features: [
      "Multi-page",
      "Smooth Animations",
      "Contact Forms",
      "Service Showcase",
    ],
    challenge:
      "Creating a multi-page feel within a single React app while keeping transitions smooth.",
    outcome:
      "Client used the site to land two enterprise contracts within 6 weeks of launch.",
  },
  {
    id: 6,
    slug: "eheatcool-hvac",
    title: "Eheatcool HVAC Services",
    shortDescription:
      "Professional HVAC website with online booking system and instant quote calculator.",
    description:
      "Eheatcool is a professional HVAC services website built on WordPress with Divi. It features an online booking system, an instant quote calculator, and dedicated service pages designed to convert local search traffic into booked appointments.",
    imageKey: "eheatcool",
    link: "https://eheatcool.com/",
    category: "WordPress",
    featured: false,
    technologies: ["WordPress", "Divi", "Booking Management", "Quote System"],
    features: [
      "Online Booking",
      "Quote Calculator",
      "Service Pages",
      "Customer Portal",
    ],
    challenge:
      "Integrating a booking and quote system that worked seamlessly on mobile.",
    outcome:
      "Online bookings increased by 60% compared to their previous phone-only system.",
  },
  {
    id: 7,
    slug: "wanderlust-travel-blog",
    title: "Travel Blog Website",
    shortDescription:
      "Wanderlust travel blog with dynamic post switching, travel stories, and destinations grid.",
    description:
      "Wanderlust is a travel blog website built with React, featuring dynamic post switching between travel stories, a destinations grid, and post sharing functionality. The design leans into editorial aesthetics with large hero images.",
    imageKey: "wanderlust",
    link: "https://web4-travel.netlify.app/",
    category: "Custom Coded",
    featured: false,
    technologies: ["React", "Styled Components", "CSS3"],
    features: [
      "Blog Posts",
      "Post share buttons",
      "Travel Tips",
      "Destinations Grid",
    ],
    challenge:
      "Designing a reading experience that felt like a magazine rather than a generic blog.",
    outcome:
      "Achieved high engagement metrics with users reading multiple posts per session.",
  },
  {
    id: 8,
    slug: "rental-cars-website",
    title: "Rental Cars Website",
    shortDescription:
      "Fully functional responsive website with dark/light mode, search, and post functionality.",
    description:
      "A fully functional car rental website built with React, featuring a dark/light mode toggle, car search functionality, and a clean browsing experience. Styled Components were used for theming to enable seamless mode switching.",
    imageKey: "rental",
    link: "https://web5-rental-services.netlify.app/",
    category: "Custom Coded",
    featured: false,
    technologies: ["React", "Styled Components", "CSS3"],
    features: [
      "Cars Showcase",
      "Search Functionality",
      "Dark & Light Mode",
      "Responsive Design",
    ],
    challenge:
      "Implementing a theme system that worked globally across all components without prop-drilling.",
    outcome:
      "Clean, maintainable theme architecture that can scale with new components effortlessly.",
  },
  {
    id: 9,
    slug: "medicare-healthcare",
    title: "Medicare Healthcare Website",
    shortDescription:
      "Animated Website with lots of Animations, Scroll Animations and Transitions with GSAP.",
    description:
      "Medicare is a premium healthcare website built with React and GSAP. It features extensive scroll-triggered animations, entrance effects, and smooth page transitions. Every section is choreographed to guide the user's eye and communicate credibility.",
    imageKey: "medicare",
    link: "https://web3-medicare.netlify.app/",
    category: "Vibe Coded",
    featured: true,
    technologies: ["React", "Tailwind CSS", "GSAP", "JavaScript"],
    features: [
      "Dark & Light Mode",
      "Smooth Transitions",
      "Scroll Animations",
      "Responsive Design",
    ],
    challenge:
      "Balancing rich animations with performance — GSAP animations needed careful management to avoid jank on lower-end devices.",
    outcome:
      "Achieved 95+ performance score despite heavy animation use through careful optimization.",
  },
  {
    id: 10,
    slug: "grothico-agency",
    title: "Grothico Agency Website",
    shortDescription:
      "Simple Dark Themed Responsive, Fast, SEO Optimized website for a Services Agency.",
    description:
      "Grothico is a dark-themed agency website for a services firm in Pakistan. Built with React, it features entrance animations, EmailJS-powered contact forms, and a sleek modern aesthetic that positions the agency as a premium service provider.",
    imageKey: "grothico",
    link: "https://web6-grothico.netlify.app/",
    category: "Vibe Coded",
    featured: true,
    technologies: ["React", "CSS3", "EmailJS", "JavaScript"],
    features: [
      "Dark & Light Mode",
      "Smooth Transitions",
      "Entrance Animations",
      "Responsive Design",
      "Post Pages",
    ],
    challenge:
      "Creating a dark theme that felt premium rather than heavy, with careful contrast ratios and strategic color accents.",
    outcome:
      "The agency reported an increase in premium client inquiries after switching from their old site.",
  },
  {
    id: 11,
    slug: "advantage-property-management",
    title: "Advantage Property Management",
    shortDescription:
      "Real estate website with property listings, inquiry system, and professional Elementor design.",
    description:
      "Advantage Property Management is a professional real estate website built on WordPress using Elementor and Elementor Pro. It features a property listings section, tenant and owner resources, an online inquiry form, and a clean trustworthy design optimized for local search.",
    imageKey: "property",
    link: "https://dev-advantage-property-management.pantheonsite.io/",
    category: "WordPress",
    featured: false,
    technologies: ["WordPress", "Elementor", "Elementor Pro", "CSS3"],
    features: [
      "Property listings",
      "Tenant & owner resources",
      "Online inquiry forms",
      "Local SEO",
      "Mobile-responsive",
    ],
    challenge:
      "Translating complex property management workflows into a clear site structure that serves two distinct audiences: owners and tenants.",
    outcome:
      "Simplified the inquiry process, reducing back-and-forth emails and streamlining onboarding for new clients.",
  },
  {
    id: 12,
    slug: "crypto-quiz-platform",
    title: "Crypto Quiz Platform",
    shortDescription:
      "Interactive crypto quiz where users can test their knowledge and download a personalized PDF certificate.",
    description:
      "A fully client-side quiz platform built with vanilla HTML, CSS, and ES6+ JavaScript. Users enter their name and email, take a multi-question crypto quiz, and on the results page can download a PDF certificate generated using pdf-lib. The certificate dynamically includes the user's name, email, score, and date — all in the browser with no server required.",
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
      "Name & score on certificate",
      "Fully client-side",
    ],
    challenge:
      "Generating a polished PDF entirely in the browser using pdf-lib, with dynamic text placement for each user's unique details.",
    outcome:
      "A zero-backend quiz solution that feels like a full-stack app, with shareable certificates users can keep.",
  },
  {
    id: 13,
    slug: "maply-map-app",
    title: "Maply — Interactive Map App",
    shortDescription:
      "Web app for pinning and tracking events on an interactive map using OOP JavaScript and Leaflet Maps.",
    description:
      "Maply is a location-based event tracking web app built with pure HTML5, CSS3, and modern JavaScript using Object-Oriented Programming patterns. Powered by Leaflet.js, users can click any location on the map to pin events, add details, and manage saved locations. Data persists via localStorage.",
    imageKey: "maply",
    link: "https://map-by-ammar.netlify.app/",
    category: "Custom Coded",
    featured: false,
    technologies: ["HTML5", "CSS3", "JavaScript OOP", "Leaflet.js"],
    features: [
      "Click-to-pin event creation",
      "Interactive Leaflet map",
      "Event detail forms",
      "LocalStorage persistence",
      "OOP architecture",
      "Responsive sidebar UI",
    ],
    challenge:
      "Structuring a complex stateful app using pure OOP JavaScript without any framework, keeping the code clean and extensible.",
    outcome:
      "A maintainable, framework-free app that demonstrates deep JavaScript fundamentals with a polished UX.",
  },
];

// Featured projects for homepage
export const featuredProjects = allProjects
  .filter((p) => p.featured)
  .slice(0, 3);

export const categories = ["All", "Custom Coded", "WordPress", "Vibe Coded"];
