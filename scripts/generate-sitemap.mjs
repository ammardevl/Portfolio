// Generates public/sitemap.xml from the live routes + project slugs.
// Run automatically as part of `npm run build` (see package.json).
import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const { allProjects } = await import("../src/data/projects.js");
const { site } = await import("../src/data/seo.js");

const staticRoutes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/services", priority: "0.8", changefreq: "monthly" },
  { path: "/projects", priority: "0.9", changefreq: "weekly" },
  { path: "/about", priority: "0.7", changefreq: "monthly" },
  { path: "/contact", priority: "0.7", changefreq: "monthly" },
];

const projectRoutes = allProjects.map((p) => ({
  path: `/projects/${p.slug}`,
  priority: "0.6",
  changefreq: "monthly",
}));

const allRoutes = [...staticRoutes, ...projectRoutes];
const today = new Date().toISOString().split("T")[0];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (r) => `  <url>
    <loc>${site.url}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

writeFileSync(join(__dirname, "../public/sitemap.xml"), xml);
console.log(`sitemap.xml generated with ${allRoutes.length} routes.`);
