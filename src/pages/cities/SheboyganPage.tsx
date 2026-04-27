import CityPage from "@/components/CityPage";
import type { CityPageData } from "@/components/CityPage";
import heroImage from "@/assets/cities/sheboygan.jpg";

const data: CityPageData = {
  heroImage,
  city: "Sheboygan",
  region: "Lakeshore & Eastern Wisconsin",
  metaDescription: "Modern Edge Technology provides managed IT, cybersecurity, and cloud services to manufacturers, healthcare providers, and businesses in Sheboygan, WI and the Lakeshore region.",
  heroHeadline: "Managed IT services in Sheboygan & the Lakeshore",
  heroSubtext: "Sheboygan's manufacturers, hospitality operators, and healthcare networks rely on Modern Edge Technology for resilient infrastructure, cybersecurity, and wireless engineered for plant-floor and lakefront-resort reality — delivered by senior engineers without long-term contracts.",
  introTitle: "Lakeshore Wisconsin's technology partner",
  introText: "Sheboygan anchors Wisconsin's eastern Lakeshore — a region defined by precision manufacturing, world-class hospitality at Kohler, and a strong regional healthcare presence. Modern Edge Technology extends our statewide managed services to Sheboygan County with the same Milwaukee-headquartered enterprise quality and responsiveness.",
  challenges: [
    { title: "Precision Manufacturing IT", desc: "Sheboygan-area manufacturers — from plumbing fixtures to industrial components — need hardened OT networks, ICS segmentation, ERP/MES integration, and shop-floor WiFi built for industrial conditions." },
    { title: "Hospitality & Resort Networks", desc: "Resort and hospitality operators along the Lakeshore need guest WiFi tuned for high density, segmented PCI environments, conference AV connectivity, and reliable property-management system uptime." },
    { title: "Healthcare Connectivity", desc: "Aurora, Froedtert, and regional clinics need HIPAA-compliant networks, medical device segmentation, telehealth-ready bandwidth, and secure EHR links across satellite locations." },
    { title: "K-12 & Library E-Rate", desc: "Sheboygan County districts and libraries qualify for Category 2 E-Rate funding. We help scope eligible equipment and connect you with E-Rate consultants who handle the filing." },
  ],
  stats: [
    { value: "99.99%", label: "Uptime SLA" },
    { value: "<15min", label: "Response Time" },
    { value: "24/7", label: "Monitoring" },
    { value: "55mi", label: "From Milwaukee" },
  ],
  nearbyAreas: ["Kohler", "Sheboygan Falls", "Plymouth", "Howards Grove", "Cedar Grove", "Oostburg", "Manitowoc", "Two Rivers", "Fond du Lac", "Port Washington"],
};

const SheboyganPage = () => <CityPage data={data} />;
export default SheboyganPage;
