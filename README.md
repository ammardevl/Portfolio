# Muhammad Ammar, Portfolio

Personal portfolio website: frontend and website development work across React, Next.js,
WordPress, Webflow, and Squarespace.

**Live Site:** [ammar-devfolio.netlify.app](https://ammar-devfolio.netlify.app/)
**Repository:** [github.com/ammardevl/Portfolio](https://github.com/ammardevl/Portfolio)

---

## Overview

A React app with real client-side routing (React Router), covering:

- **Home** (`/`): intro, tech stack, key stats, featured projects
- **Services** (`/services`): actual service offerings, what's included in each, and why-work-with-me
- **Projects** (`/projects`): filterable grid (All, Custom Coded, WordPress, Squarespace)
- **Project Detail** (`/projects/:slug`): case study per project (challenge, outcome, tech, features)
- **About** (`/about`): bio, skills grouped by proficiency tier, career timeline, core values
- **Contact** (`/contact`): contact form (opens a pre-filled email), contact methods, FAQs
- **404** (`*`): catch-all not-found page

## Tech Stack

- **React 19** + **React Router 7**: UI and client-side routing
- **Tailwind CSS v4**: utility-first styling via `@theme` design tokens in `src/index.css`
- **Anime.js**: scroll reveals, hover states, page transitions (see `src/lib/animate.js`)
- **Remix Icon**: icon set
- **Vite**: build tooling
- **Fonts**: Fraunces (display), Inter (body), IBM Plex Mono (labels/tags)

## SEO & Accessibility

- Per-page `<title>`, meta description, canonical URL, Open Graph, and Twitter tags via
  `src/components/Seo.jsx` (a small dependency-free stand-in for react-helmet, since this
  project has no SSR step).
- JSON-LD structured data: `Person` on Home, `CreativeWork` per project, `FAQPage` on Contact.
- `public/robots.txt` and an auto-generated `public/sitemap.xml` (via `npm run sitemap`,
  which also runs automatically before every `npm run build`). Update
  `scripts/generate-sitemap.mjs` if you add new static routes.
- Skip-to-content link, visible focus states, semantic headings, descriptive alt text,
  `aria-label`s on icon-only buttons, and reduced-motion support throughout.

## Project Structure

```
src/
├── App.jsx                # Routes + layout shell (Header, Footer, BackToTop)
├── main.jsx                # App entry point, wraps App in BrowserRouter
├── index.css                # Design tokens (palette, fonts) + base styles
├── assets/                   # Images used across the site
├── lib/
│   └── animate.js             # Anime.js hooks: useReveal, useHeroEntrance, useCountUp, hoverLift
├── data/
│   ├── seo.js                  # Site-wide SEO constants (name, url, description)
│   ├── nav.js                  # Shared navigation links
│   ├── social.js                # Shared social links + contact info
│   ├── projects.js              # Single source of truth for project data
│   ├── imageMap.js               # Maps project imageKeys to asset imports
│   ├── services.js                # Services page data (offerings + why-work-with-me)
│   ├── skills.js                   # About page skills, grouped by tier
│   ├── techStack.js                 # Homepage tech stack strip
│   ├── about.js                      # About page stats, timeline, values
│   └── contact.js                     # Contact page methods + FAQs
├── components/
│   ├── ui.jsx                # Shared UI primitives (Button, SectionHeading, TechChip, etc.)
│   ├── Seo.jsx                # Per-page meta/canonical/structured data manager
│   ├── Reveal.jsx              # Anime.js scroll-reveal wrapper component
│   ├── ProjectCard.jsx          # Reused on Home and Projects
│   ├── BackToTop.jsx             # Anime.js-powered back-to-top button
│   ├── ScrollToTop.jsx            # Scrolls to top on route change
│   ├── Header.jsx
│   └── Footer.jsx
└── pages/
    ├── Home.jsx
    ├── Services.jsx
    ├── Projects.jsx
    ├── ProjectDetail.jsx
    ├── About.jsx
    ├── Contact.jsx
    └── NotFound.jsx
```

## Getting Started

```bash
# Install dependencies
npm install

# Run the dev server
npm run dev

# Build for production (also regenerates sitemap.xml)
npm run build
```

## Deployment

Deployed on **Netlify**. `public/_redirects` handles SPA fallback routing
(`/* /index.html 200`) so deep links like `/projects/triad-printing` resolve correctly.

Live: [https://ammar-devfolio.netlify.app/](https://ammar-devfolio.netlify.app/)

## Adding a New Project

1. Add an entry to `allProjects` in `src/data/projects.js` (pick a unique `slug` and `imageKey`).
2. Drop the screenshot into `src/assets/` and import + map it in `src/data/imageMap.js`.
3. Run `npm run sitemap` (or just `npm run build`) so the new `/projects/:slug` route is included.

See **IMAGES-NEEDED.md** for the exact filenames still missing for the four newest projects.

## Contact

- **Email:** console.log.ammar@gmail.com
- **LinkedIn:** [linkedin.com/in/muhammad-ammar-1a701130b](https://www.linkedin.com/in/muhammad-ammar-1a701130b/)
- **GitHub:** [github.com/ammardevl](https://github.com/ammardevl)

---

Built by [Muhammad Ammar](https://ammar-devfolio.netlify.app/)
