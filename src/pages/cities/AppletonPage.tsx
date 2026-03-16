import CityPage from "@/components/CityPage";
import type { CityPageData } from "@/components/CityPage";

const data: CityPageData = {
  city: "Appleton",
  region: "Fox Valley & Northeast Wisconsin",
  metaDescription: "Modern Edge Technology provides managed IT services, cybersecurity, and cloud infrastructure to businesses in Appleton, WI and the Fox Valley region.",
  heroHeadline: "Managed IT services in Appleton & the Fox Valley",
  heroSubtext: "Fox Valley businesses trust Modern Edge Technology for reliable IT infrastructure, cybersecurity, and cloud solutions. We bring Milwaukee-headquartered enterprise expertise to Appleton and the greater Fox Cities with responsive support and strategic IT consulting.",
  introTitle: "Fox Valley's technology partner",
  introText: "The Fox Valley — anchored by Appleton, Oshkosh, and Neenah — is one of Wisconsin's most vibrant economic regions. From paper manufacturing to insurance to healthcare, Fox Valley businesses need IT infrastructure that's reliable, secure, and built for growth. Modern Edge Technology extends our statewide managed services to the region with the same enterprise quality and responsiveness.",
  challenges: [
    { title: "Paper & Manufacturing IT", desc: "The Fox Valley's legacy paper and manufacturing industries need modernized OT networks, SCADA security, ERP system management, and controlled-environment WiFi deployments." },
    { title: "Insurance & Financial IT", desc: "Appleton's major insurance carriers need SOC 2-aligned infrastructure, secure claims processing, compliant data handling, and high-availability systems with zero tolerance for downtime." },
    { title: "Healthcare Networks", desc: "ThedaCare and regional clinics need HIPAA-compliant networks, medical device segmentation, telehealth infrastructure, and secure EHR connectivity across multiple care sites." },
    { title: "Multi-Site Management", desc: "Fox Valley businesses with locations spanning Appleton, Oshkosh, Neenah, and Menasha need unified IT management, consistent security policies, and reliable inter-site connectivity." },
  ],
  stats: [
    { value: "99.99%", label: "Uptime SLA" },
    { value: "<15min", label: "Response Time" },
    { value: "24/7", label: "Monitoring" },
    { value: "100mi", label: "From Milwaukee" },
  ],
  nearbyAreas: ["Oshkosh", "Neenah", "Menasha", "Kaukauna", "Little Chute", "Kimberly", "Grand Chute", "Greenville", "Darboy", "Combined Locks"],
};

const AppletonPage = () => <CityPage data={data} />;
export default AppletonPage;
