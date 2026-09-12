// Maps imageKey values from projects.js to actual asset imports.
// Add new project images here when available. Keys with no import fall
// back to the placeholder shown by ProjectCard/ProjectDetail.
import coffeexperts from "../assets/coffee-experts-website.webp";
import digibyte from "../assets/digibyte-website.webp";
import digitech from "../assets/ammar-digitech.webp";
import norsl from "../assets/ammar-estore.webp";
import eheatcool from "../assets/eheatcool.webp";
import vslpackaging from "../assets/vsl-packaging website.webp";
import rental from "../assets/rental.png";
import medicare from "../assets/medicare.png";
import wanderlust from "../assets/wanderlust.png";
import grothico from "../assets/web-grothico.webp";
import maply from "../assets/maply.png";
import quiz from "../assets/quiz-platform.png";
import property from "../assets/advantage-property.png";
import correctiveCooling from "../assets/corrective-cooling.webp";
import triadPrinting from "../assets/triad-printing.webp";
import educationAboard from "../assets/education-aboard.webp";
import venuesAtTheFactory from "../assets/venues-at-the-factory.webp";

// New projects: add the matching import above once the screenshot is in
// src/assets, then map the key below. See README / final notes for the
// exact filenames expected.
const imageMap = {
  coffeexperts,
  digibyte,
  digitech,
  norsl,
  eheatcool,
  vslpackaging,
  rental,
  medicare,
  wanderlust,
  grothico,
  maply,
  quiz,
  property,
  correctiveCooling,
  triadPrinting,
  educationAboard,
  venuesAtTheFactory,
};

/** Returns resolved image src, or null for placeholder projects. */
export const getImage = (imageKey) =>
  imageKey ? (imageMap[imageKey] ?? null) : null;
