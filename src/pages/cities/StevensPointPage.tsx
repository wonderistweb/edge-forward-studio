import CityPage from "@/components/CityPage";
import type { CityPageData } from "@/components/CityPage";
import heroImage from "@/assets/cities/stevens-point.jpg";

const data: CityPageData = {
  heroImage,
  city: "Stevens Point",
  region: "Central Wisconsin & Portage County",
  metaDescription: "Modern Edge Technology provides managed IT, cybersecurity, and cloud services for businesses, schools, and libraries in Stevens Point, WI and Portage County.",
  heroHeadline: "Managed IT services in Stevens Point & Portage County",
  heroSubtext: "From insurance and food-processing operations to UW-Stevens Point and the public libraries that anchor Portage County, organizations rely on Modern Edge Technology for senior-engineer support without the long-term contracts or fleet overhead.",
  introTitle: "Central Wisconsin's technology partner",
  introText: "Stevens Point sits at the crossroads of central Wisconsin — a regional hub for insurance, food and beverage manufacturing, higher education, and public services. Modern Edge Technology extends our statewide managed IT, cybersecurity, and E-Rate equipment guidance to Stevens Point and the surrounding Portage County communities.",
  challenges: [
    { title: "Insurance & Financial IT", desc: "Sentry Insurance and other carriers headquartered here need SOC 2-aligned infrastructure, hardened identity systems, and high-availability networks with disciplined change control." },
    { title: "Food & Beverage Manufacturing", desc: "Plants in and around Stevens Point need OT segmentation, cold-chain monitoring connectivity, ERP/MES integration, and warehouse WiFi designed for production-floor reality." },
    { title: "Higher Education & Public Sector", desc: "UW-Stevens Point, regional schools, and municipal offices need secure identity, segmented research/admin networks, and reliable wireless across dispersed campuses." },
    { title: "Library & School E-Rate", desc: "Portage County libraries and surrounding districts qualify for Category 2 funding. We help scope eligible equipment and connect you with E-Rate consultants who handle the filing." },
  ],
  stats: [
    { value: "99.99%", label: "Uptime SLA" },
    { value: "<15min", label: "Response Time" },
    { value: "24/7", label: "Monitoring" },
    { value: "165mi", label: "From Milwaukee" },
  ],
  nearbyAreas: ["Plover", "Whiting", "Park Ridge", "Amherst", "Wisconsin Rapids", "Marshfield", "Wausau", "Waupaca", "Adams", "Nekoosa"],
};

const StevensPointPage = () => <CityPage data={data} />;
export default StevensPointPage;
