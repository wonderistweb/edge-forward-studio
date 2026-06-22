// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.
import { writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://modernedgetech.net";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const today = new Date().toISOString().split("T")[0];

const staticRoutes: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.7" },
  { path: "/contact", changefreq: "monthly", priority: "0.7" },
  { path: "/quote", changefreq: "monthly", priority: "0.8" },
  { path: "/quote/erate", changefreq: "monthly", priority: "0.7" },
  { path: "/quote/library", changefreq: "monthly", priority: "0.7" },
  { path: "/blog", changefreq: "weekly", priority: "0.8" },
  { path: "/case-studies", changefreq: "monthly", priority: "0.7" },
  { path: "/case-studies/wisconsin-library-funding", changefreq: "monthly", priority: "0.7" },
  { path: "/case-studies/ubiquiti-erate-specifications", changefreq: "monthly", priority: "0.7" },
  { path: "/e-rate", changefreq: "monthly", priority: "0.9" },
  { path: "/marketing/ebook", changefreq: "monthly", priority: "0.6" },
  { path: "/marketing/library-whitepaper", changefreq: "monthly", priority: "0.6" },

  // Industries
  { path: "/industries/education", changefreq: "monthly", priority: "0.8" },
  { path: "/industries/libraries", changefreq: "monthly", priority: "0.8" },
  { path: "/industries/hospitality", changefreq: "monthly", priority: "0.8" },
  { path: "/industries/corporate", changefreq: "monthly", priority: "0.8" },
  { path: "/industries/custom", changefreq: "monthly", priority: "0.7" },
  { path: "/industries/healthcare", changefreq: "monthly", priority: "0.8" },
  { path: "/industries/manufacturing", changefreq: "monthly", priority: "0.8" },
  { path: "/industries/retail", changefreq: "monthly", priority: "0.8" },
  { path: "/industries/government", changefreq: "monthly", priority: "0.8" },
  { path: "/industries/non-profit", changefreq: "monthly", priority: "0.8" },
  { path: "/industries/legal", changefreq: "monthly", priority: "0.8" },
  { path: "/industries/financial-services", changefreq: "monthly", priority: "0.8" },
  { path: "/industries/real-estate", changefreq: "monthly", priority: "0.8" },

  // Services
  { path: "/services/access-control", changefreq: "monthly", priority: "0.8" },
  { path: "/services/hardware-software", changefreq: "monthly", priority: "0.8" },
  { path: "/services/voice-services", changefreq: "monthly", priority: "0.8" },
  { path: "/services/it-audits", changefreq: "monthly", priority: "0.8" },
  { path: "/services/cloud-migrations", changefreq: "monthly", priority: "0.8" },
  { path: "/services/wireless-networks", changefreq: "monthly", priority: "0.8" },
  { path: "/services/business-continuity", changefreq: "monthly", priority: "0.8" },
  { path: "/services/e-rate", changefreq: "monthly", priority: "0.9" },

  // Cities
  { path: "/areas/milwaukee", changefreq: "monthly", priority: "0.9" },
  { path: "/areas/madison", changefreq: "monthly", priority: "0.8" },
  { path: "/areas/waukesha", changefreq: "monthly", priority: "0.8" },
  { path: "/areas/kenosha", changefreq: "monthly", priority: "0.8" },
  { path: "/areas/appleton", changefreq: "monthly", priority: "0.8" },
  { path: "/areas/racine", changefreq: "monthly", priority: "0.8" },
  { path: "/areas/green-bay", changefreq: "monthly", priority: "0.8" },
  { path: "/areas/oshkosh", changefreq: "monthly", priority: "0.8" },
  { path: "/areas/wausau", changefreq: "monthly", priority: "0.8" },
  { path: "/areas/stevens-point", changefreq: "monthly", priority: "0.8" },
  { path: "/areas/eau-claire", changefreq: "monthly", priority: "0.8" },
  { path: "/areas/sheboygan", changefreq: "monthly", priority: "0.8" },
];

async function loadBlogEntries(): Promise<SitemapEntry[]> {
  // Parse blog post slugs/dates from the data file without importing image assets.
  const fs = await import("fs");
  const src = fs.readFileSync(resolve("src/data/blogPosts.ts"), "utf8");
  const slugRe = /slug:\s*"([^"]+)"[\s\S]*?date:\s*"([^"]+)"/g;
  const entries: SitemapEntry[] = [];
  let m: RegExpExecArray | null;
  while ((m = slugRe.exec(src))) {
    entries.push({
      path: `/blog/${m[1]}`,
      lastmod: m[2],
      changefreq: "monthly",
      priority: "0.7",
    });
  }
  return entries;
}

function generateSitemap(entries: SitemapEntry[]) {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      `    <lastmod>${e.lastmod ?? today}</lastmod>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
}

const blog = await loadBlogEntries();
const all = [...staticRoutes, ...blog];
writeFileSync(resolve("public/sitemap.xml"), generateSitemap(all));
console.log(`sitemap.xml written (${all.length} entries)`);