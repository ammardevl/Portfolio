import { useEffect } from "react";
import { site, defaultOgImage } from "../data/seo";

const setMeta = (attr, key, content) => {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setLink = (rel, href) => {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

const setJsonLd = (id, data) => {
  let el = document.getElementById(id);
  if (!data) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
};

/**
 * Seo - sets per-page document title, meta description, canonical URL,
 * Open Graph / Twitter tags, and optional JSON-LD structured data.
 * A small, dependency-free stand-in for react-helmet, since this project
 * has no server-side rendering step to make a heavier library worthwhile.
 */
const Seo = ({ title, description, path = "/", image, structuredData, noindex = false }) => {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${site.name}` : site.title;
    const desc = description || site.description;
    const url = `${site.url}${path === "/" ? "" : path}`;
    const ogImage = image || defaultOgImage;

    document.title = fullTitle;

    setMeta("name", "description", desc);
    setMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", ogImage);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", site.name);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", desc);
    setMeta("name", "twitter:image", ogImage);

    setLink("canonical", url);

    setJsonLd("structured-data", structuredData || null);

    return () => setJsonLd("structured-data", null);
  }, [title, description, path, image, structuredData, noindex]);

  return null;
};

export default Seo;
