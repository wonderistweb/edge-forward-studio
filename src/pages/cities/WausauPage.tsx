import CityPage from "@/components/CityPage";
import type { CityPageData } from "@/components/CityPage";
import heroImage from "@/assets/cities/wausau.jpg";

const data: CityPageData = {
  heroImage,
  city: "Wausau",
  region: "Central & North-Central Wisconsin",
  metaDescription: "Modern Edge Technology delivers managed IT services, cybersecurity, and cloud infrastructure to businesses in Wausau, WI and the Marathon County region.",
  heroHeadline: "Managed IT services in Wausau & Central Wisconsin",
  heroSubtext: "From insurance carriers and manufacturers along the Wisconsin River to healthcare systems serving the Northwoods, Wausau businesses depend on Modern Edge Technology for resilient networks, cybersecurity, and cloud infrastructure — backed by senior engineers, not call-center tickets.",
  introTitle: "North-central Wisconsin's IT partner",
  introText: "Wausau anchors central Wisconsin's economy — home to major insurance, paper, and forest-products operations, plus a regional healthcare hub serving the Northwoods. Modern Edge Technology brings the same enterprise-grade managed services we deliver in Milwaukee to Wausau and Marathon County, with no fleet overhead and no long-term contracts.",
  challenges: [
    { title: "Insurance & Financial IT", desc: "Wausau's insurance sector needs SOC 2-aligned infrastructure, secure claims processing, compliant data handling, and high-availability systems with zero tolerance for downtime." },
    { title: "Forest Products & Manufacturing", desc: "Paper mills and wood-products plants need hardened OT networks, SCADA segmentation, ERP integration, and industrial WiFi engineered for dust, vibration, and shift-around-the-clock uptime." },
    { title: "Rural Healthcare Connectivity", desc: "Aspirus and regional clinics serving the Northwoods need HIPAA-compliant networks, telehealth-grade bandwidth, medical device segmentation, and reliable inter-site links across vast geographies." },
    { title: "K-12 & E-Rate Eligibility", desc: "Wausau-area school districts and libraries qualify for E-Rate Category 2 funding. We help scope eligible equipment and connect you with E-Rate consultants who handle the filing." },
  ],
  stats: [
    { value: "99.99%", label: "Uptime SLA" },
    { value: "<15min", label: "Response Time" },
    { value: "24/7", label: "Monitoring" },
    { value: "190mi", label: "From Milwaukee" },
  ],
  nearbyAreas: ["Schofield", "Rothschild", "Weston", "Mosinee", "Marathon City", "Merrill", "Antigo", "Stevens Point", "Rhinelander", "Marshfield"],
};

const WausauPage = () => <CityPage data={data} />;
export default WausauPage;
