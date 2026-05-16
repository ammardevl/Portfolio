// Maps imageKey values from projects.js to actual asset imports.
// Add new project images here when available.
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
};

/** Returns resolved image src, or null for placeholder projects. */
export const getImage = (imageKey) =>
  imageKey ? (imageMap[imageKey] ?? null) : null;
