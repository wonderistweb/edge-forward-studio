import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PRODUCTION_ORIGIN = "https://modernedgetech.net";

export const CanonicalUrl = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    const url = `${PRODUCTION_ORIGIN}${pathname}${search}`;

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    const setMeta = (selector: string, attr: "property" | "name", key: string, value: string) => {
      let tag = document.querySelector<HTMLMetaElement>(selector);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
      }
      tag.content = value;
    };

    setMeta('meta[property="og:url"]', "property", "og:url", url);
  }, [pathname, search]);

  return null;
};

export default CanonicalUrl;