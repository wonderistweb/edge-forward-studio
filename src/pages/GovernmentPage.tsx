import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Wifi, Shield, Monitor, Phone, Camera, Server, Lock, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingMarketingMenu from "@/components/FloatingMarketingMenu";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.6, ease: [0.2, 1, 0.3, 1] as const },
};

const services = [
  { icon: Shield, title: "CJIS & FedRAMP Compliance", desc: "Security architectures that meet CJIS, FedRAMP, NIST 800-53, and StateRAMP requirements — with documented controls, continuous monitoring, and audit-ready evidence." },
  { icon: Wifi, title: "Public Building Connectivity", desc: "WiFi and network infrastructure for courthouses, city halls, public works facilities, and community centers — with separate citizen and staff networks." },
  { icon: Camera, title: "Public Safety Systems", desc: "IP camera networks, body camera data management, license plate readers, and integration with dispatch and records management systems." },
  { icon: Phone, title: "Government Communications", desc: "911-capable phone systems, emergency mass notification, interoperable radio systems, and continuity of operations (COOP) communications." },
  { icon: Lock, title: "Cybersecurity Programs", desc: "Security awareness training, incident response planning, penetration testing, and managed SOC services designed for the unique threat landscape facing government entities." },
  { icon: Server, title: "Data Center Modernization", desc: "Server consolidation, cloud migration (GovCloud), hybrid architectures, and disaster recovery that meet government data residency and sovereignty requirements." },
  { icon: Monitor, title: "Citizen-Facing Technology", desc: "Public WiFi, kiosk deployments, digital signage, meeting room AV, and accessible technology that serves all community members." },
  { icon: FileCheck, title: "Grant & Procurement Support", desc: "Technology specifications for RFPs, grant application support, E-Rate filing for eligible facilities, and procurement compliance documentation." },
];

const GovernmentPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingMarketingMenu />

      <section className="pt-32 pb-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade}>
            <span className="text-sm font-mono-display text-primary uppercase tracking-wider">Industries</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium uppercase mt-3 max-w-4xl">Government IT</h1>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
              Secure, compliant technology infrastructure for state, county, and municipal government — built for transparency, citizen service, and the unique procurement requirements of the public sector.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button variant="hero" size="lg" asChild>
                <Link to="/quote">Get a Free Assessment <ArrowRight className="ml-2" size={16} /></Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/e-rate">E-Rate Funding <ArrowRight className="ml-2" size={16} /></Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.div {...fade} className="bg-primary/5 border border-primary/10 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-mono-display text-sm uppercase tracking-wider text-primary mb-2">Cybersecurity</h3>
              <h2 className="text-2xl font-medium uppercase">Government is the #1 target for ransomware</h2>
              <p className="text-sm text-muted-foreground mt-2 max-w-lg">
                State and local governments experienced a 95% increase in cyber attacks in 2023. Average ransom demands exceed $2M. Our security assessments and managed detection services protect your constituents' data before an attack happens.
              </p>
            </div>
            <Button variant="outline" size="lg" asChild className="shrink-0">
              <Link to="/quote">Security Assessment <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade} className="mb-16">
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Solutions</span>
            <h2 className="text-3xl font-medium uppercase mt-3">Technology for public service</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {services.map((svc) => (
              <motion.div key={svc.title} className="bg-card p-6" {...fade}>
                <svc.icon size={22} className="text-primary mb-4" />
                <h3 className="text-sm font-medium uppercase mb-2">{svc.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade} className="mb-16">
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Government-Specific</span>
            <h2 className="text-3xl font-medium uppercase mt-3">Challenges we solve</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {[
              { title: "Procurement Complexity", desc: "Government purchasing requires competitive bidding, prevailing wage compliance, minority business participation, and mountains of documentation. We navigate procurement processes daily — writing technical specifications for RFPs, providing required certifications, and meeting every documentation requirement." },
              { title: "Legacy System Modernization", desc: "Many government agencies run critical services on 15-20 year old infrastructure — Windows Server 2008, aging switches, and end-of-life firewalls. We build phased migration plans that modernize infrastructure without disrupting citizen services, working within annual budget cycles." },
              { title: "CJIS & Criminal Justice Security", desc: "Any agency accessing FBI CJIS data must meet strict security requirements — background checks, encryption standards, and audit logging. We build CJIS-compliant architectures for police departments, courts, and corrections facilities with documented controls for FBI audits." },
              { title: "Budget Cycle Constraints", desc: "Government IT budgets are approved annually with limited flexibility. Capital vs. operational funding categories restrict purchasing options. We structure solutions as managed services (OpEx) or capital projects (CapEx) to fit your budget model — and help identify grants and E-Rate funding to supplement." },
            ].map((c) => (
              <motion.div key={c.title} className="bg-card p-8" {...fade}>
                <h3 className="font-mono-display text-sm uppercase tracking-wider mb-3">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { value: "50+", label: "Agencies Served" },
              { value: "CJIS", label: "Certified Team" },
              { value: "99.99%", label: "Network Uptime" },
              { value: "24/7", label: "SOC Monitoring" },
            ].map((stat) => (
              <motion.div key={stat.label} className="py-10 px-6 text-center" {...fade}>
                <div className="text-3xl font-mono-display font-semibold text-primary">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div {...fade}>
            <h2 className="text-3xl font-medium uppercase">Secure your agency's infrastructure</h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">From CJIS compliance to full managed services — we help government agencies build secure, modern technology infrastructure.</p>
            <Button variant="hero" size="lg" className="mt-8" asChild>
              <Link to="/quote">Get a Free Assessment <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GovernmentPage;
