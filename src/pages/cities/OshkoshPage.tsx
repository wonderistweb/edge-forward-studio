import CityPage from "@/components/CityPage";
import type { CityPageData } from "@/components/CityPage";
import heroImage from "@/assets/cities/oshkosh.jpg";

const data: CityPageData = {
  heroImage,
  city: "Oshkosh",
  region: "Winnebago County & Fox Valley",
  metaDescription: "Modern Edge Technology delivers managed IT services, cybersecurity, and network solutions to businesses in Oshkosh, WI and Winnebago County.",
  heroHeadline: "IT support & managed services in Oshkosh, Wisconsin",
  heroSubtext: "Oshkosh businesses and institutions rely on Modern Edge Technology for proactive IT management, cybersecurity, and cloud infrastructure. We bring enterprise-grade IT support to Winnebago County with responsive service and strategic technology consulting.",
  introTitle: "Winnebago County IT partner",
  introText: "Home to major manufacturers, UW Oshkosh, and a growing professional services sector, Oshkosh needs IT infrastructure that supports both legacy operations and modern innovation. Modern Edge Technology serves Winnebago County with the same managed services platform that powers businesses across Wisconsin — reliable, secure, and cost-effective.",
  challenges: [
    { title: "Manufacturing & Defense", desc: "Oshkosh Corporation and the region's defense-adjacent manufacturers need CMMC-aligned security, controlled unclassified information (CUI) handling, and secure collaboration with DoD supply chains." },
    { title: "Higher Education IT", desc: "UW Oshkosh and Fox Valley Technical College need high-density campus WiFi, student data protection, research computing infrastructure, and E-Rate-eligible technology upgrades." },
    { title: "Aviation & EAA", desc: "Oshkosh's aviation industry and the annual EAA AirVenture create unique IT challenges — temporary high-density networks, event infrastructure, and year-round aviation business technology needs." },
    { title: "Regional Healthcare", desc: "Ascension and regional clinics in Winnebago County need HIPAA-compliant networks, secure patient portals, telehealth infrastructure, and reliable connectivity across care sites." },
  ],
  stats: [
    { value: "99.99%", label: "Uptime SLA" },
    { value: "<15min", label: "Response Time" },
    { value: "24/7", label: "Monitoring" },
    { value: "85mi", label: "From Milwaukee" },
  ],
  nearbyAreas: ["Neenah", "Appleton", "Menasha", "Fond du Lac", "Ripon", "Omro", "Winneconne", "Berlin", "Waupun", "North Fond du Lac"],
};

const OshkoshPage = () => <CityPage data={data} />;
export default OshkoshPage;
