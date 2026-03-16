import CityPage from "@/components/CityPage";
import type { CityPageData } from "@/components/CityPage";
import heroImage from "@/assets/cities/madison.jpg";

const data: CityPageData = {
  heroImage,
  city: "Madison",
  region: "Dane County & Southern Wisconsin",
  metaDescription: "Modern Edge Technology delivers managed IT services, cybersecurity, and cloud solutions to businesses in Madison, WI and the Dane County area.",
  heroHeadline: "IT services & managed support in Madison, Wisconsin",
  heroSubtext: "From the Capitol Square to the research park, Madison businesses and institutions rely on Modern Edge Technology for proactive IT management, cybersecurity, and infrastructure that scales with Wisconsin's fastest-growing metro.",
  introTitle: "Technology for Madison's growth",
  introText: "Madison's thriving tech, biotech, education, and government sectors demand IT infrastructure that's secure, compliant, and built for innovation. Modern Edge Technology brings enterprise expertise to the Madison market with strategic consulting, 24/7 managed services, and responsive support tailored to Dane County's unique business landscape.",
  challenges: [
    { title: "State & Federal Compliance", desc: "Madison businesses serving government agencies need CMMC, FedRAMP, and StateRAMP-aligned infrastructure. We build compliant environments with documented security controls and audit-ready reporting." },
    { title: "Research & University IT", desc: "Madison's research institutions require high-bandwidth networks, secure data enclaves, and specialized infrastructure for grant-funded projects with strict data handling requirements." },
    { title: "Rapid Startup Scaling", desc: "Madison's startup ecosystem needs IT that scales fast — cloud-first architectures, zero-trust security from day one, and flexible managed services that grow with your headcount." },
    { title: "Remote & Hybrid Workforce", desc: "With Madison's competitive talent market embracing remote work, businesses need secure remote access, cloud collaboration platforms, and endpoint management across distributed teams." },
  ],
  stats: [
    { value: "99.99%", label: "Uptime SLA" },
    { value: "<15min", label: "Response Time" },
    { value: "24/7", label: "Monitoring" },
    { value: "75mi", label: "From Milwaukee" },
  ],
  nearbyAreas: ["Middleton", "Sun Prairie", "Fitchburg", "Verona", "Waunakee", "DeForest", "Stoughton", "Oregon", "Monona", "McFarland"],
};

const MadisonPage = () => <CityPage data={data} />;
export default MadisonPage;
