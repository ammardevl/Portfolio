# Muhammad Ammar, Portfolio

Personal portfolio website showcasing my work as a frontend developer, custom-coded React builds, WordPress projects, and AI-assisted development.

**Live Site:** [ammar-devfolio.netlify.app](https://ammar-devfolio.netlify.app/)
**Repository:** [github.com/ammardevl/Portfolio](https://github.com/ammardevl/Portfolio)

---

## Overview

A single-page React application with hash-based routing, covering:

- **Home**: intro, tech stack, featured projects
- **Services**: WordPress, Frontend, and AI-Assisted Development, with tools I actively use
- **Projects**: filterable grid across Custom Coded, WordPress, and AI-Assisted Dev
- **Project Detail**: case study view per project (challenge, outcome, tech, features)
- **About**: skills, career timeline, core values
- **Contact**: contact form, methods, and FAQs

## Tech Stack

- **React**: component-based UI
- **Tailwind CSS v4**: utility-first styling with custom design tokens
- **Remix Icon**: icon set
- **Vite**: build tooling
- **Fonts**: Sora (display), Manrope (body), Fira Code (mono accents)

## Project Structure

```
src/
├── App.jsx              # Hash-based routing + layout shell
├── main.jsx             # App entry point
├── index.css            # Design tokens (palette, fonts) + base styles
├── assets/               # Images used across the site
├── data/
│   ├── nav.js            # Shared navigation links
│   ├── social.js         # Shared social links + contact info
│   ├── projects.js       # Single source of truth for project data
│   └── imageMap.js       # Maps project imageKeys to asset imports
├── components/
│   ├── ui.jsx             # Shared UI primitives (Button, SectionHeading, etc.)
│   ├── Header.jsx
│   └── Footer.jsx
└── pages/
    ├── Home.jsx
    ├── Services.jsx
    ├── Projects.jsx
    ├── ProjectDetail.jsx
    ├── About.jsx
    └── Contact.jsx
```

## Getting Started

```bash
# Clone the repo
git clone https://github.com/ammardevl/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Run the dev server
npm run dev

# Build for production
npm run build
```

## Deployment

Deployed on **Netlify**, auto-building from the `main` branch.

Live: [https://ammar-devfolio.netlify.app/](https://ammar-devfolio.netlify.app/)

## Contact

- **Email:** console.log.ammar@gmail.com
- **LinkedIn:** [linkedin.com/in/muhammad-ammar-1a701130b](https://www.linkedin.com/in/muhammad-ammar-1a701130b/)
- **GitHub:** [github.com/ammardevl](https://github.com/ammardevl)

---

Built by [Muhammad Ammar](https://ammar-devfolio.netlify.app/)
