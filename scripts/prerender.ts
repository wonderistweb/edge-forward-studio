import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { dirname, resolve } from "path";
import { pathToFileURL } from "url";
import { build } from "vite";
import { STATIC_SEO } from "../src/lib/seoConfig";

const ORIGIN = "https://modernedgetech.net";
const DIST = resolve("dist");
const ENTRY = resolve(DIST, "server/entry-server.js");

type HeadConfig = {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: string;
  robots?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const getSitemapPaths = () => {
  const xml = readFileSync(resolve("public/sitemap.xml"), "utf8");
  return [...xml.matchAll(/<loc>https:\/\/modernedgetech\.net([^<]*)<\/loc>/g)].map((m) => m[1] || "/");
};

const getBlogHead = (path: string): HeadConfig | undefined => {
  const slug = path.replace("/blog/", "");
  const src = readFileSync(resolve("src/data/blogPosts.ts"), "utf8");
  const block = src.match(new RegExp(`slug:\\s*"${slug}"[\\s\\S]*?(?=\\n\\s*},\\n\\s*\\{|\\n\\s*},\\n\\];)`))?.[0];
  if (!block) return undefined;
  const title = block.match(/title:\s*"([^"]+)"/)?.[1];
  const excerpt = block.match(/excerpt:\s*"([^"]+)"/)?.[1];
  const date = block.match(/date:\s*"([^"]+)"/)?.[1];
  const category = block.match(/category:\s*"([^"]+)"/)?.[1];
  if (!title || !excerpt) return undefined;
  return {
    title: `${title} | The Edge Report`,
    description: excerpt,
    canonicalPath: path,
    ogType: "article",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description: excerpt,
      datePublished: date,
      articleSection: category,
      author: { "@type": "Person", name: "Mark Duerwachter" },
      publisher: { "@type": "Organization", name: "Modern Edge Technology", url: ORIGIN },
      mainEntityOfPage: `${ORIGIN}${path}`,
    },
  };
};

const getCityHead = (path: string): HeadConfig | undefined => {
  const slug = path.replace("/areas/", "");
  const cityFile = resolve(
    "src/pages/cities",
    `${slug.split("-").map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join("")}Page.tsx`,
  );
  if (!existsSync(cityFile)) return undefined;
  const src = readFileSync(cityFile, "utf8");
  const city = src.match(/city:\s*"([^"]+)"/)?.[1];
  const description = src.match(/metaDescription:\s*"([^"]+)"/)?.[1];
  if (!city || !description) return undefined;
  return {
    title: `IT Services in ${city}, WI | Modern Edge Technology`,
    description,
    canonicalPath: path,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: `Modern Edge Technology — ${city}`,
      description,
      url: `${ORIGIN}${path}`,
      telephone: "+1-414-269-1900",
      address: { "@type": "PostalAddress", addressLocality: city, addressRegion: "WI", addressCountry: "US" },
      areaServed: [{ "@type": "City", name: city, containedInPlace: { "@type": "State", name: "Wisconsin" } }],
    },
  };
};

const getHead = (path: string): HeadConfig => {
  if (path.startsWith("/blog/")) return getBlogHead(path) ?? STATIC_SEO["/blog"];
  if (path.startsWith("/areas/")) return getCityHead(path) ?? STATIC_SEO["/"];
  return STATIC_SEO[path] ?? STATIC_SEO["/"];
};

const setTag = (html: string, pattern: RegExp, replacement: string) =>
  pattern.test(html) ? html.replace(pattern, replacement) : html.replace("</head>", `    ${replacement}\n  </head>`);

const injectHead = (html: string, path: string, head: HeadConfig) => {
  const url = `${ORIGIN}${head.canonicalPath ?? path}`;
  const description = escapeHtml(head.description);
  const title = escapeHtml(head.title);
  let next = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
  next = next.replace(/<meta\s+name=["']keywords["'][^>]*>\s*/gi, "");
  next = setTag(next, /<meta name="description" content="[^"]*"\s*\/?\s*>/, `<meta name="description" content="${description}">`);
  next = setTag(next, /<link rel="canonical" href="[^"]*"\s*\/?\s*>/, `<link rel="canonical" href="${url}" />`);
  next = setTag(next, /<meta property="og:title" content="[^"]*"\s*\/?\s*>/, `<meta property="og:title" content="${title}">`);
  next = setTag(next, /<meta property="og:description" content="[^"]*"\s*\/?\s*>/, `<meta property="og:description" content="${description}">`);
  next = setTag(next, /<meta property="og:url" content="[^"]*"\s*\/?\s*>/, `<meta property="og:url" content="${url}" />`);
  next = setTag(next, /<meta property="og:type" content="[^"]*"\s*\/?\s*>/, `<meta property="og:type" content="${head.ogType ?? "website"}" />`);
  next = setTag(next, /<meta name="twitter:title" content="[^"]*"\s*\/?\s*>/, `<meta name="twitter:title" content="${title}">`);
  next = setTag(next, /<meta name="twitter:description" content="[^"]*"\s*\/?\s*>/, `<meta name="twitter:description" content="${description}">`);
  next = setTag(next, /<meta name="robots" content="[^"]*"\s*\/?\s*>/, `<meta name="robots" content="${head.robots ?? "index,follow"}">`);
  if (head.jsonLd) {
    const json = JSON.stringify(head.jsonLd).replace(/</g, "\\u003c");
    next = next.replace("</head>", `    <script type="application/ld+json" data-prerendered="true">${json}</script>\n  </head>`);
  }
  return next;
};

await build({ build: { ssr: "src/entry-server.tsx", outDir: "dist/server", emptyOutDir: false } });
const { render } = await import(pathToFileURL(ENTRY).href) as { render: (url: string) => string };
const template = readFileSync(resolve(DIST, "index.html"), "utf8");

for (const path of getSitemapPaths()) {
  const appHtml = render(path);
  const html = injectHead(template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`), path, getHead(path));
  const file = path === "/" ? resolve(DIST, "index.html") : resolve(DIST, path.slice(1), "index.html");
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
}

console.log(`prerendered ${getSitemapPaths().length} routes`);