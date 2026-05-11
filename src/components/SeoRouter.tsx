import { useLocation } from "react-router-dom";
import { Seo } from "./Seo";
import { NOT_FOUND_SEO, STATIC_SEO } from "@/lib/seoConfig";

/**
 * Sets default SEO tags based on the current pathname for routes that
 * don't render their own <Seo /> component (e.g. city pages, blog posts,
 * case study pages handle their own dynamic metadata).
 */
const SELF_MANAGED_PREFIXES = ["/areas/", "/blog/"];

const isSelfManaged = (pathname: string) =>
  SELF_MANAGED_PREFIXES.some((p) => pathname.startsWith(p) && pathname !== p.replace(/\/$/, ""));

export const SeoRouter = () => {
  const { pathname } = useLocation();

  if (isSelfManaged(pathname)) return null;

  const config = STATIC_SEO[pathname] ?? NOT_FOUND_SEO;
  return <Seo {...config} />;
};

export default SeoRouter;