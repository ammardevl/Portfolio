// Single source of truth for all project data.
// imageKey maps to actual imports in imageMap.js. New projects use a key
// with no matching import yet, so getImage() falls back to a placeholder
// until real screenshots are added.

export const allProjects = [
  {
    id: 1,
    slug: "corrective-cooling",
    title: "Corrective Cooling",
    shortDescription:
      "HVAC company website built with Next.js and anime.js, tuned for ultra-smooth scroll and hover motion.",
    description:
      "Corrective Cooling is a marketing site for an HVAC services company, built with Next.js and driven end to end by anime.js. Every scroll reveal, hover state, and section transition runs through a single animation system, so the motion stays consistent instead of feeling like a stack of separate effects bolted onto the page. This is the project the rest of the portfolio's animation work is measured against.",
    imageKey: "correctiveCooling",
    link: "https://corrective-cooling.netlify.app/",
    githubLink: "https://github.com/ammardevl/Corrective-Cooling-site-using-Next",
    category: "Custom Coded",
    featured: true,
    technologies: ["Next.js", "React", "Anime.js", "Tailwind CSS"],
    features: [
      "Anime.js-driven scroll and hover animations",
      "Service and process pages built for local search",
      "Fully responsive, industrial-clean design",
      "Fast page loads via Next.js static generation",
    ],
    challenge:
      "Anime.js gives fine-grained control over timing and easing, but that same control makes it easy to end up with animations that feel disconnected from each other. Every sequence had to be timed against a shared set of easing curves and durations, not tuned in isolation.",
    outcome:
      "A site where the motion reads as one continuous system rather than individual widgets animating on their own, which is exactly why it now serves as the animation reference for other builds in this portfolio.",
  },
  {
    id: 2,
    slug: "triad-printing",
    title: "Triad Printing NC",
    shortDescription:
      "Next.js site for a Greensboro print and apparel shop, covering signage, screen printing, embroidery, and quote requests.",
    description:
      "Triad Printing NC is a design-and-print shop in Greensboro, North Carolina, offering banners, signage, business cards, screen printing, and embroidery. The site is built with Next.js and organizes six service categories into clear, dedicated sections, backed by a quote request flow so a visitor can describe a job and get a real quote instead of guessing from a generic price sheet.",
    imageKey: "triadPrinting",
    link: "https://triad-printing.netlify.app/",
    category: "Custom Coded",
    featured: true,
    technologies: ["Next.js", "React", "Tailwind CSS"],
    features: [
      "Six-category service structure (signage, print, apparel)",
      "Quote request flow with job-specific detail capture",
      "Reviews and process sections built for local trust signals",
      "SEO-structured pages for a local service business",
    ],
    challenge:
      "A print shop's services genuinely overlap (a single job can involve design, screen printing, and signage at once), so the site needed a structure that could cross-reference services without turning into a maze of duplicate pages.",
    outcome:
      "A clear, six-category service structure that mirrors how the shop actually quotes jobs, with a request flow built to capture the details a print job needs instead of a generic contact form.",
  },
  {
    id: 3,
    slug: "education-aboard",
    title: "Education Aboard (Scholar Passport)",
    shortDescription:
      "Next.js content platform helping students research studying abroad, with guides organized by destination and topic.",
    description:
      "Education Aboard, published under the Scholar Passport name, is a content platform built for students researching international education: destinations, university applications, scholarships, and visa processes. Built with Next.js, it organizes long-form guides into a structured, readable layout so students can move from a broad question to a specific answer without digging through a generic blog feed.",
    imageKey: "educationAboard",
    link: "https://education-aboard.netlify.app/",
    githubLink: "https://github.com/ammardevl/Study-Aboard-Blog-Website",
    category: "Custom Coded",
    featured: true,
    technologies: ["Next.js", "React", "Tailwind CSS"],
    features: [
      "Structured content organized by destination and topic",
      "Readable article layout built for long-form guides",
      "Responsive design across mobile and desktop",
      "Fast page loads via Next.js static generation",
    ],
    challenge:
      "Study-abroad content is inherently reference material. It needed a layout people scan and return to, not a chronological blog feed that buries older, still-relevant guides under newer posts.",
    outcome:
      "A content structure organized around what a student is actually trying to decide, rather than around publish dates, so guides stay findable regardless of when they went up.",
  },
  {
    id: 4,
    slug: "the-venues-at-the-factory",
    title: "The Venues at The Factory",
    shortDescription:
      "Squarespace edits and content updates for an industrial-chic wedding and event venue in Manchester, New Hampshire.",
    description:
      "The Venues at The Factory is a working wedding and event venue site built on Squarespace, set inside a converted 100,000-square-foot shoe factory in Manchester, New Hampshire. My work here is Squarespace-side: section rebuilds, content and layout updates, and page-level refinements on the live site, keeping it aligned with the venue's floor plans, pricing, and amenities as they change.",
    imageKey: "venuesAtTheFactory",
    link: "https://www.thevenuesatthefactory.com/",
    category: "Squarespace",
    featured: false,
    role: "Squarespace design and content edits on an existing site",
    technologies: ["Squarespace", "Custom Sections", "CSS"],
    features: [
      "Section-level layout and content updates",
      "Structured event and amenity pages",
      "Fully responsive across the Squarespace template",
      "Ongoing edits as pricing and floor plans change",
    ],
    challenge:
      "Squarespace's page builder is opinionated about layout, so section-level changes had to work within its grid and blocks rather than fighting them with heavy custom code.",
    outcome:
      "A venue site that stays current with real pricing, floor plans, and amenities, edited directly inside Squarespace's system rather than through a separate custom build.",
  },
  {
    id: 5,
    slug: "vsl-packaging",
    title: "VSL Packaging Company",
    shortDescription:
      "Corporate WordPress site for a B2B packaging company, with a custom chatbot and detailed product catalogs.",
    description:
      "VSL Packaging is a corporate site for a B2B packaging company, built on WordPress with Divi. It includes a custom chatbot for instant support, detailed product catalogs with technical specifications, and a page structure organized around how buyers actually search for packaging solutions.",
    imageKey: "vslpackaging",
    link: "https://www.vslpackaging.com/",
    category: "WordPress",
    featured: true,
    technologies: ["WordPress", "Divi", "CSS3", "Chatbot Integration"],
    features: ["Custom design", "Chatbot", "Product catalog", "SEO optimized"],
    challenge:
      "Integrating a chatbot that felt native to the site instead of a bolted-on third-party widget took custom styling work well beyond the default embed.",
    outcome: "Inquiry form submissions rose 40% in the first month after launch.",
  },
  {
    id: 6,
    slug: "dgbytes-technology",
    title: "DGBytes Technology",
    shortDescription:
      "Technology solutions platform with a client portal, case studies, and API integrations, built on WordPress.",
    description:
      "DGBytes is a technology services site built on WordPress, including a client-facing portal where customers track projects and access resources, a case studies section, and integrations with external APIs.",
    imageKey: "digibyte",
    link: "https://dgbinsights.com/",
    category: "WordPress",
    featured: false,
    technologies: ["WordPress", "Custom Development", "API Integration", "Client Portal"],
    features: ["Client portal", "API integration", "Case studies", "News section"],
    challenge:
      "Designing a portal experience inside WordPress that felt like a native web app, without introducing a separate frontend framework.",
    outcome: "Centralized client resources cut down support requests noticeably.",
  },
  {
    id: 7,
    slug: "coffee-xperts",
    title: "Coffee Xperts",
    shortDescription:
      "Performance-first WordPress build for a European coffee brand, tuned for Core Web Vitals and technical SEO.",
    description:
      "Coffee Xperts is a performance-first WordPress build for a European coffee brand. The focus was technical SEO and Core Web Vitals, reaching strong PageSpeed scores through caching, image compression, and lazy loading.",
    imageKey: "coffeexperts",
    link: "https://coffeexperts.eu/",
    category: "WordPress",
    featured: false,
    technologies: ["WordPress", "Yoast SEO", "WP Rocket", "Smush Pro"],
    features: ["90+ PageSpeed score", "Advanced caching", "Image optimization", "Rich snippets"],
    challenge: "Years of unoptimized images and unused plugins had built up real performance debt.",
    outcome: "Load time dropped from 8s to under 2s, and organic traffic grew 25% in three months.",
  },
  {
    id: 8,
    slug: "digitech-digital-solutions",
    title: "DigiTech Digital Solutions",
    shortDescription:
      "Multi-page React site for a digital agency, with smooth page transitions and a clear service showcase.",
    description:
      "DigiTech Digital Solutions is a corporate site for a digital agency, built in React with AI pair-programming tools speeding up scaffolding and iteration. It carries multiple pages, smooth transitions, and a design system that communicates the company's services clearly.",
    imageKey: "digitech",
    link: "https://web1-digitech.netlify.app/",
    category: "Custom Coded",
    featured: false,
    technologies: ["React", "Tailwind CSS", "GitHub Copilot", "Multi-page Web"],
    features: ["Multi-page layout", "Smooth animations", "Contact forms", "Service showcase"],
    challenge: "Creating a genuine multi-page feel inside a single React app while keeping transitions smooth.",
    outcome: "The client used the site to land two enterprise contracts within six weeks of launch.",
  },
  {
    id: 9,
    slug: "eheatcool-hvac",
    title: "Eheatcool HVAC Services",
    shortDescription:
      "HVAC services website with online booking and an instant quote calculator, built on WordPress with Divi.",
    description:
      "Eheatcool is a professional HVAC services site built on WordPress with Divi. It includes online booking, an instant quote calculator, and dedicated service pages built to turn local search traffic into booked appointments.",
    imageKey: "eheatcool",
    link: "https://eheatcool.com/",
    category: "WordPress",
    featured: false,
    technologies: ["WordPress", "Divi", "Booking System", "Quote Calculator"],
    features: ["Online booking", "Quote calculator", "Service pages", "Customer portal"],
    challenge: "Making the booking and quote flow work smoothly on mobile, where most local search traffic lands.",
    outcome: "Online bookings increased 60% compared to their old phone-only system.",
  },
  {
    id: 10,
    slug: "wanderlust-travel-blog",
    title: "Wanderlust Travel Blog",
    shortDescription:
      "Editorial-style React travel blog with dynamic post switching, travel stories, and a destinations grid.",
    description:
      "Wanderlust is a travel blog built with React, with dynamic switching between stories, a destinations grid, and post sharing. The design leans editorial, with large hero images that carry the mood of each place.",
    imageKey: "wanderlust",
    link: "https://web4-travel.netlify.app/",
    category: "Custom Coded",
    featured: false,
    technologies: ["React", "Styled Components", "CSS3"],
    features: ["Blog posts", "Post share buttons", "Travel tips", "Destinations grid"],
    challenge: "Designing a reading experience that felt like a magazine, not a generic blog template.",
    outcome: "High engagement, with most readers browsing several posts per session.",
  },
  {
    id: 11,
    slug: "rental-cars-website",
    title: "Rental Cars Website",
    shortDescription:
      "Responsive car rental site with dark and light mode and live search, built with React and Styled Components.",
    description:
      "A car rental site built with React, featuring a dark and light mode toggle, live car search, and a clean browsing experience. Styled Components handle theming so the mode switch stays instant and consistent everywhere.",
    imageKey: "rental",
    link: "https://web5-rental-services.netlify.app/",
    category: "Custom Coded",
    featured: false,
    technologies: ["React", "Styled Components", "CSS3"],
    features: ["Car showcase", "Search functionality", "Dark & light mode", "Responsive design"],
    challenge: "Building a theme system that worked globally without prop-drilling through every component.",
    outcome: "A maintainable theme architecture that scales cleanly with new components.",
  },
  {
    id: 12,
    slug: "medicare-healthcare",
    title: "Medicare Healthcare Website",
    shortDescription:
      "Healthcare site with scroll-triggered GSAP animations, built with React and AI-assisted workflows.",
    description:
      "Medicare is a healthcare site built with React and GSAP, developed with AI tools handling boilerplate so more time went into the animation choreography. Scroll-triggered effects and entrance transitions guide the eye and build credibility section by section.",
    imageKey: "medicare",
    link: "https://web3-medicare.netlify.app/",
    category: "Custom Coded",
    featured: true,
    technologies: ["React", "GSAP", "Claude Code", "Tailwind CSS"],
    features: ["Dark & light mode", "Smooth transitions", "Scroll animations", "Responsive design"],
    challenge:
      "Balancing rich animation with performance. GSAP needed careful tuning to avoid jank on lower-end devices.",
    outcome: "95+ performance score despite heavy animation use, through careful optimization.",
  },
  {
    id: 13,
    slug: "grothico-agency",
    title: "Grothico Agency Website",
    shortDescription:
      "Dark-themed, SEO-optimized site for a Pakistan-based services agency, shipped with AI-assisted tooling.",
    description:
      "Grothico is a dark-themed agency site for a services firm in Pakistan. Built with React and shaped with AI pair-programming for faster iteration, it features entrance animations, EmailJS-powered contact forms, and a restrained, premium aesthetic.",
    imageKey: "grothico",
    link: "https://web6-grothico.netlify.app/",
    category: "Custom Coded",
    featured: false,
    technologies: ["React", "EmailJS", "Gemini", "CSS3"],
    features: ["Dark & light mode", "Smooth transitions", "Entrance animations", "Responsive design", "Post pages"],
    challenge: "Making a dark theme feel premium rather than heavy, with careful contrast and restrained accents.",
    outcome: "The agency reported more premium client inquiries after switching from their old site.",
  },
  {
    id: 14,
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
      "Translating property management workflows into a clear structure that serves two different audiences: owners and tenants.",
    outcome: "Simplified inquiries and reduced back-and-forth emails during client onboarding.",
  },
  {
    id: 15,
    slug: "norsl-store",
    title: "NORSL Store",
    shortDescription:
      "Modern e-commerce site with cart functionality, product filtering, and a fully responsive layout, no backend.",
    description:
      "NORSL Store is an e-commerce platform built to deliver a premium shopping experience without a backend. It runs on React and Tailwind CSS, with dynamic product filtering and a cart system persisted in the browser, so every interaction from browsing to checkout stays fast and clear.",
    imageKey: "norsl",
    link: "https://web2-ecommerce.netlify.app/",
    category: "Custom Coded",
    featured: false,
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    features: ["Shopping cart", "Product filters", "Responsive design", "Modern UI"],
    challenge:
      "Building a smooth cart experience without a backend meant handling state and localStorage persistence by hand.",
    outcome: "A fully functional storefront with a clean UX that turns browsers into buyers.",
  },
  {
    id: 16,
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
    outcome: "A zero-backend quiz that feels like a full-stack app, with shareable certificates users keep.",
  },
  {
    id: 17,
    slug: "maply-map-app",
    title: "Maply, Interactive Map App",
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
      "Structuring a stateful app in plain object-oriented JavaScript, with no framework, while keeping the code clean and extensible.",
    outcome: "A maintainable, framework-free app that shows solid JavaScript fundamentals with a polished UX.",
  },
];

// Featured projects for the homepage.
export const featuredProjects = allProjects.filter((p) => p.featured).slice(0, 3);

export const categories = ["All", "Custom Coded", "WordPress", "Squarespace"];

// Maps each project category to a palette accent used for chips/badges.
export const categoryAccent = {
  "Custom Coded": "bg-ink text-paper",
  WordPress: "bg-brass text-paper",
  Squarespace: "bg-stone text-paper",
};
