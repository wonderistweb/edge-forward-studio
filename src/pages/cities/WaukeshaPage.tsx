import CityPage from "@/components/CityPage";
import type { CityPageData } from "@/components/CityPage";

const data: CityPageData = {
  city: "Waukesha",
  region: "Waukesha County",
  metaDescription: "Modern Edge Technology provides managed IT services, cybersecurity, and cloud solutions to businesses in Waukesha, WI and Waukesha County.",
  heroHeadline: "Managed IT services in Waukesha, Wisconsin",
  heroSubtext: "Waukesha County businesses trust Modern Edge Technology for reliable IT support, cybersecurity, cloud solutions, and network infrastructure — delivered by a local Milwaukee-area team that understands the market.",
  introTitle: "Waukesha County's IT partner",
  introText: "Waukesha County is one of Wisconsin's most dynamic business corridors — home to manufacturers, professional services firms, healthcare providers, and growing tech companies. Modern Edge Technology provides the enterprise-grade IT infrastructure these organizations need, with the local presence and responsiveness of a partner right down the road.",
  challenges: [
    { title: "Manufacturing IT", desc: "Waukesha County's strong manufacturing base needs OT/IT convergence, secure industrial networks, ERP system support, and endpoint management across plant floors and office environments." },
    { title: "Professional Services", desc: "Law firms, accounting practices, and consultancies in Waukesha need secure document management, compliant email archiving, and reliable VoIP systems with mobile integration." },
    { title: "Growing Business Networks", desc: "As Waukesha businesses expand across the county and into Milwaukee, they need scalable network architectures, site-to-site VPN, and centralized management across locations." },
    { title: "Cybersecurity Threats", desc: "Small and mid-size businesses in Waukesha are increasingly targeted by ransomware and phishing. We deploy layered security — EDR, email filtering, security awareness training, and 24/7 SOC monitoring." },
  ],
  stats: [
    { value: "99.99%", label: "Uptime SLA" },
    { value: "<15min", label: "Response Time" },
    { value: "24/7", label: "Monitoring" },
    { value: "Local", label: "Milwaukee Based" },
  ],
  nearbyAreas: ["Brookfield", "New Berlin", "Pewaukee", "Delafield", "Oconomowoc", "Mukwonago", "Menomonee Falls", "Sussex", "Hartland", "Wales"],
};

const WaukeshaPage = () => <CityPage data={data} />;
export default WaukeshaPage;
