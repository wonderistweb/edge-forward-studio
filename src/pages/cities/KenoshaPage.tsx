import CityPage from "@/components/CityPage";
import type { CityPageData } from "@/components/CityPage";

const data: CityPageData = {
  city: "Kenosha",
  region: "Kenosha County & Southeast Wisconsin",
  metaDescription: "Modern Edge Technology delivers managed IT services, cybersecurity, and network infrastructure to businesses in Kenosha, WI and southeast Wisconsin.",
  heroHeadline: "IT support & managed services in Kenosha, Wisconsin",
  heroSubtext: "Kenosha businesses at the Wisconsin-Illinois border need responsive, reliable IT. Modern Edge Technology delivers managed IT services, cybersecurity, and cloud solutions to Kenosha County from our Milwaukee base — close enough for same-day on-site support.",
  introTitle: "Southeast Wisconsin coverage",
  introText: "Kenosha's strategic position between Milwaukee and Chicago makes it a hub for logistics, manufacturing, and professional services. These businesses need IT infrastructure that's secure, fast, and always available. Modern Edge Technology serves Kenosha County with the same enterprise-grade support we deliver across southern Wisconsin — with local response times and 24/7 monitoring.",
  challenges: [
    { title: "Cross-Border Operations", desc: "Kenosha businesses working across the WI-IL border need multi-site networking, unified communications, and compliance frameworks that satisfy requirements in both states." },
    { title: "Logistics & Distribution", desc: "Kenosha's growing logistics sector needs warehouse WiFi, barcode/RFID infrastructure, WMS connectivity, and real-time visibility across supply chain operations." },
    { title: "Education Technology", desc: "Kenosha Unified and area schools need E-Rate-funded WiFi upgrades, 1:1 device management, content filtering, and secure student data infrastructure." },
    { title: "Small Business Security", desc: "Kenosha's small businesses face the same cyber threats as large enterprises but lack dedicated IT staff. Our managed security services provide enterprise protection at SMB pricing." },
  ],
  stats: [
    { value: "99.99%", label: "Uptime SLA" },
    { value: "<15min", label: "Response Time" },
    { value: "24/7", label: "Monitoring" },
    { value: "35mi", label: "From Milwaukee" },
  ],
  nearbyAreas: ["Racine", "Pleasant Prairie", "Somers", "Paddock Lake", "Twin Lakes", "Burlington", "Salem", "Bristol", "Paris", "Sturtevant"],
};

const KenoshaPage = () => <CityPage data={data} />;
export default KenoshaPage;
