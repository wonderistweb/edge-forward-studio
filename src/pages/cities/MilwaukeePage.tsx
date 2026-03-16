import CityPage from "@/components/CityPage";
import type { CityPageData } from "@/components/CityPage";
import heroImage from "@/assets/cities/milwaukee.jpg";

const data: CityPageData = {
  heroImage,
  city: "Milwaukee",
  region: "Milwaukee Metro Area",
  metaDescription: "Modern Edge Technology provides managed IT services, cybersecurity, cloud solutions, and network infrastructure to businesses in Milwaukee, WI.",
  heroHeadline: "Managed IT services in Milwaukee, Wisconsin",
  heroSubtext: "Milwaukee businesses trust Modern Edge Technology for enterprise-grade IT support, cybersecurity, cloud infrastructure, and network solutions. Based in the Milwaukee metro area, we deliver responsive, local IT expertise to organizations of every size.",
  introTitle: "Milwaukee's technology partner",
  introText: "As Milwaukee's economy grows across manufacturing, healthcare, finance, and professional services, businesses need IT infrastructure that keeps pace. Modern Edge Technology serves the greater Milwaukee area with on-site support, proactive monitoring, and strategic IT consulting — combining enterprise capability with the responsiveness of a local partner.",
  challenges: [
    { title: "Manufacturing & IoT Security", desc: "Milwaukee's manufacturing sector faces unique cybersecurity challenges with connected OT environments, legacy SCADA systems, and expanding IoT device networks that need segmentation, monitoring, and hardened access controls." },
    { title: "Healthcare Compliance", desc: "With major health systems headquartered in Milwaukee, HIPAA compliance, medical device networking, and clinical-grade WiFi are critical infrastructure requirements we specialize in." },
    { title: "Multi-Location Operations", desc: "Milwaukee businesses expanding across the metro area need unified IT management, SD-WAN connectivity, and centralized security policies spanning multiple offices, warehouses, and retail locations." },
    { title: "Talent & Budget Constraints", desc: "Hiring senior IT staff in Milwaukee's competitive market is expensive. Our managed services model gives you a full IT department — helpdesk, engineering, security, and strategy — at a fraction of the cost." },
  ],
  stats: [
    { value: "99.99%", label: "Uptime SLA" },
    { value: "<15min", label: "Response Time" },
    { value: "24/7", label: "Monitoring" },
    { value: "Local", label: "Milwaukee Based" },
  ],
  nearbyAreas: ["Waukesha", "Brookfield", "Wauwatosa", "West Allis", "New Berlin", "Menomonee Falls", "Mequon", "Grafton", "Oak Creek", "Franklin", "Greenfield", "Cudahy"],
};

const MilwaukeePage = () => <CityPage data={data} />;
export default MilwaukeePage;
