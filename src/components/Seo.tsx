import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PRODUCTION_ORIGIN = "https://modernedgetech.net";
const DEFAULT_OG_IMAGE = `${PRODUCTION_ORIGIN}/og-image.png`;

export interface SeoProps {
  title: string;
  description: string;
  /** Optional canonical path override (defaults to current location). */
  canonicalPath?: string;
  /** Absolute URL for OG / Twitter image. */
  image?: string;
  /** Optional JSON-LD object(s) appended as a single application/ld+json tag. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  /** Defaults to "website"; use "article" for blog posts. */
  ogType?: string;
  /** Robots directive. Defaults to "index,follow". */
  robots?: string;
}

const upsertMeta = (
  selector: string,
  attr: "name" | "property",
  key: string,
  content: string,
) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const upsertCanonical = (href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    document.head.appendChild(el);
  }
  el.href = href;
  el.setAttribute("data-managed-by", "seo");
};

const upsertJsonLd = (payload: Record<string, unknown> | Record<string, unknown>[] | undefined) => {
  document.head.querySelectorAll('script[type="application/ld+json"][data-managed-by="seo"]').forEach((n) => n.remove());
  if (!payload) return;
  const list = Array.isArray(payload) ? payload : [payload];
  list.forEach((item) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-managed-by", "seo");
    script.textContent = JSON.stringify(item);
    document.head.appendChild(script);
  });
};

export const Seo = ({
  title,
  description,
  canonicalPath,
  image = DEFAULT_OG_IMAGE,
  jsonLd,
  ogType = "website",
  robots = "index,follow",
}: SeoProps) => {
  const { pathname, search } = useLocation();
  const path = canonicalPath ?? `${pathname}${search}`;
  const url = `${PRODUCTION_ORIGIN}${path}`;

  useEffect(() => {
    document.title = title;

    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertMeta('meta[name="robots"]', "name", "robots", robots);

    upsertMeta('meta[property="og:title"]', "property", "og:title", title);
    upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    upsertMeta('meta[property="og:url"]', "property", "og:url", url);
    upsertMeta('meta[property="og:type"]', "property", "og:type", ogType);
    upsertMeta('meta[property="og:image"]', "property", "og:image", image);

    upsertMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    upsertMeta('meta[name="twitter:image"]', "name", "twitter:image", image);

    upsertCanonical(url);
    upsertJsonLd(jsonLd);
  }, [title, description, url, image, ogType, robots, jsonLd]);

  return null;
};

export const SEO_PRODUCTION_ORIGIN = PRODUCTION_ORIGIN;
export const SEO_DEFAULT_OG_IMAGE = DEFAULT_OG_IMAGE;

export default Seo;