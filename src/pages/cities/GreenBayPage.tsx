import CityPage from "@/components/CityPage";
import type { CityPageData } from "@/components/CityPage";

const data: CityPageData = {
  city: "Green Bay",
  region: "Brown County & Northeast Wisconsin",
  metaDescription: "Modern Edge Technology provides managed IT services, cybersecurity, and cloud solutions to businesses in Green Bay, WI and Brown County.",
  heroHeadline: "Managed IT & cybersecurity in Green Bay, Wisconsin",
  heroSubtext: "Green Bay businesses and organizations trust Modern Edge Technology for managed IT services that combine enterprise expertise with Wisconsin-rooted service. We deliver cybersecurity, cloud infrastructure, and network solutions to Brown County and northeast Wisconsin.",
  introTitle: "Northeast Wisconsin's IT resource",
  introText: "Green Bay's economy spans manufacturing, healthcare, logistics, and professional services — all industries where reliable IT is mission-critical. Modern Edge Technology extends our statewide managed services to Green Bay and Brown County, delivering the same enterprise-grade support and strategic consulting that Milwaukee-area clients have relied on for years.",
  challenges: [
    { title: "Paper & Packaging IT", desc: "Green Bay's paper and packaging industry needs secure OT/IT networks, production system monitoring, and infrastructure that runs 24/7 without unplanned downtime in continuous manufacturing environments." },
    { title: "Healthcare Systems", desc: "HSHS, Bellin, and regional clinics need HIPAA-compliant infrastructure, medical device networking, and telehealth connectivity across northeastern Wisconsin's spread-out healthcare landscape." },
    { title: "Port & Logistics Technology", desc: "Green Bay's port and logistics operations need warehouse WiFi, fleet tracking connectivity, WMS integration, and real-time visibility across distribution networks." },
    { title: "Seasonal & Tourism IT", desc: "Green Bay's significant tourism and hospitality sector needs reliable guest WiFi, POS system support, and scalable infrastructure that handles seasonal demand fluctuations." },
  ],
  stats: [
    { value: "99.99%", label: "Uptime SLA" },
    { value: "<15min", label: "Response Time" },
    { value: "24/7", label: "Monitoring" },
    { value: "120mi", label: "From Milwaukee" },
  ],
  nearbyAreas: ["De Pere", "Ashwaubenon", "Howard", "Suamico", "Bellevue", "Allouez", "Wrightstown", "Pulaski", "Denmark", "Manitowoc"],
};

const GreenBayPage = () => <CityPage data={data} />;
export default GreenBayPage;
