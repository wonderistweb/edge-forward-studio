import CityPage from "@/components/CityPage";
import type { CityPageData } from "@/components/CityPage";
import heroImage from "@/assets/cities/eau-claire.jpg";

const data: CityPageData = {
  heroImage,
  city: "Eau Claire",
  region: "Chippewa Valley & Northwest Wisconsin",
  metaDescription: "Modern Edge Technology provides managed IT, cybersecurity, and cloud services for businesses, healthcare systems, and schools in Eau Claire, WI and the Chippewa Valley.",
  heroHeadline: "Managed IT services in Eau Claire & the Chippewa Valley",
  heroSubtext: "Healthcare networks, manufacturers, and growing professional-services firms across the Chippewa Valley count on Modern Edge Technology for cybersecurity, cloud, and wireless infrastructure delivered by senior engineers — never bottom-tier helpdesk.",
  introTitle: "Northwest Wisconsin's IT partner",
  introText: "Eau Claire is the economic and healthcare hub of northwest Wisconsin, with major hospital systems, manufacturers, and a fast-growing professional-services base anchored by UW-Eau Claire. Modern Edge Technology brings the same Milwaukee-grade managed services and E-Rate equipment guidance to the Chippewa Valley with a lean, no-fleet-overhead model.",
  challenges: [
    { title: "Healthcare Networks", desc: "Mayo Clinic Health System, Marshfield Clinic, and regional providers need HIPAA-compliant networks, medical device segmentation, telehealth bandwidth, and secure EHR connectivity across distributed clinics." },
    { title: "Manufacturing & Logistics", desc: "Chippewa Valley manufacturers and 3PL operators need OT segmentation, hardened ICS networks, warehouse-grade WiFi, and reliable WAN links across multiple facilities." },
    { title: "Professional Services & Growth Firms", desc: "Insurance, legal, and engineering firms expanding from Eau Claire need scalable identity, Microsoft 365 hardening, MFA enforcement, and cloud migration without disrupting daily operations." },
    { title: "K-12 & Library E-Rate", desc: "Eau Claire-area districts and libraries qualify for Category 2 E-Rate funding. We help scope eligible equipment and connect you with E-Rate consultants who handle the filing." },
  ],
  stats: [
    { value: "99.99%", label: "Uptime SLA" },
    { value: "<15min", label: "Response Time" },
    { value: "24/7", label: "Monitoring" },
    { value: "245mi", label: "From Milwaukee" },
  ],
  nearbyAreas: ["Altoona", "Chippewa Falls", "Menomonie", "Lake Hallie", "Bloomer", "Augusta", "Osseo", "Rice Lake", "River Falls", "Hudson"],
};

const EauClairePage = () => <CityPage data={data} />;
export default EauClairePage;
