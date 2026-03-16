import CityPage from "@/components/CityPage";
import type { CityPageData } from "@/components/CityPage";

const data: CityPageData = {
  city: "Racine",
  region: "Racine County & Southeast Wisconsin",
  metaDescription: "Modern Edge Technology delivers managed IT services, cybersecurity, and cloud solutions to businesses in Racine, WI and Racine County.",
  heroHeadline: "IT services & cybersecurity in Racine, Wisconsin",
  heroSubtext: "Racine businesses depend on Modern Edge Technology for managed IT support, network infrastructure, and cybersecurity. Located just 30 miles from our Milwaukee headquarters, Racine County gets fast on-site response and 24/7 remote monitoring.",
  introTitle: "Racine County IT support",
  introText: "Racine's diverse economy — from legacy manufacturing to healthcare to education — requires IT infrastructure that's both modern and reliable. Modern Edge Technology serves Racine County with enterprise-grade managed services, helping local businesses compete with the technology advantages typically reserved for larger organizations.",
  challenges: [
    { title: "Legacy System Modernization", desc: "Many Racine manufacturers run aging IT systems alongside modern cloud apps. We bridge the gap with hybrid architectures that keep legacy systems running while migrating workloads to modern platforms." },
    { title: "School District Technology", desc: "Racine Unified and area districts need E-Rate-funded infrastructure upgrades, 1:1 Chromebook management, secure student networks, and CIPA-compliant content filtering." },
    { title: "Healthcare & Senior Care IT", desc: "Racine's healthcare and senior living facilities need HIPAA-compliant networks, resident WiFi, clinical device management, and 24/7 system availability." },
    { title: "Cost-Effective IT", desc: "Racine businesses need enterprise-quality IT without enterprise pricing. Our managed services model delivers full-stack IT support — security, helpdesk, strategy — at predictable monthly costs." },
  ],
  stats: [
    { value: "99.99%", label: "Uptime SLA" },
    { value: "<15min", label: "Response Time" },
    { value: "24/7", label: "Monitoring" },
    { value: "30mi", label: "From Milwaukee" },
  ],
  nearbyAreas: ["Mount Pleasant", "Caledonia", "Sturtevant", "Wind Point", "Elmwood Park", "Union Grove", "Burlington", "Waterford", "Rochester", "Norway"],
};

const RacinePage = () => <CityPage data={data} />;
export default RacinePage;
