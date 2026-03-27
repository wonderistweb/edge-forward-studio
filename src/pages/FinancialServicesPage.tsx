import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Wifi, Shield, Monitor, Phone, Lock, Server, Landmark, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingMarketingMenu from "@/components/FloatingMarketingMenu";
import IndustryHero from "@/components/IndustryHero";
import heroImg from "@/assets/industry-hero-financial.jpg";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.6, ease: [0.2, 1, 0.3, 1] as const },
};

const services = [
  { icon: Shield, title: "SOC 2 & SOX Compliance", desc: "Security architectures, continuous monitoring, and audit evidence that satisfy SOC 2 Type II, SOX IT controls, GLBA safeguards, and SEC/FINRA cybersecurity requirements." },
  { icon: Lock, title: "Zero Trust Security", desc: "Micro-segmentation, privileged access management, MFA, conditional access, and continuous verification that protects client financial data and trading systems." },
  { icon: Wifi, title: "Branch & Office Networking", desc: "SD-WAN connecting headquarters, branch offices, and remote advisors with encrypted tunnels, QoS for trading platforms, and failover connectivity for business continuity." },
  { icon: Phone, title: "Compliant Communications", desc: "Unified communications with call recording, archival, and supervision capabilities that meet SEC, FINRA, and state regulatory requirements for financial communications." },
  { icon: Monitor, title: "Trading Floor Infrastructure", desc: "Ultra-low latency networking, multi-monitor workstation deployments, redundant connectivity, and dedicated circuits for trading platforms and market data feeds." },
  { icon: Server, title: "Data Protection & DR", desc: "Immutable backups, geo-redundant storage, sub-1-hour RPO/RTO disaster recovery, and tested failover procedures that protect client data and meet regulatory retention requirements." },
  { icon: Landmark, title: "Branch Technology", desc: "Standardized branch deployments with digital signage, client-facing kiosks, secure guest WiFi, conference room AV, and PCI-compliant payment processing." },
  { icon: BarChart3, title: "Managed Detection & Response", desc: "24/7 SOC monitoring, threat hunting, incident response, and forensics capabilities purpose-built for the financial services threat landscape." },
];

const FinancialServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingMarketingMenu />

      <IndustryHero
        image={heroImg}
        title="Financial Services IT"
        description="Secure, compliant, resilient technology infrastructure for banks, RIAs, broker-dealers, and fintech companies — where security isn't optional, it's existential."
        
      />

      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.div {...fade} className="bg-primary/5 border border-primary/10 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-mono-display text-sm uppercase tracking-wider text-primary mb-2">Regulatory</h3>
              <h2 className="text-2xl font-medium uppercase">Financial services breaches cost $5.9M average</h2>
              <p className="text-sm text-muted-foreground mt-2 max-w-lg">
                SEC, FINRA, and state regulators are increasing cybersecurity examination frequency and penalties. Our compliance-first approach builds the security controls and documentation that survive regulatory scrutiny.
              </p>
            </div>
            <Button variant="outline" size="lg" asChild className="shrink-0">
              <Link to="/quote">Compliance Assessment <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade} className="mb-16">
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Solutions</span>
            <h2 className="text-3xl font-medium uppercase mt-3">Technology for financial services</h2>
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
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Financial-Specific</span>
            <h2 className="text-3xl font-medium uppercase mt-3">Challenges we solve</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {[
              { title: "Regulatory Examination Readiness", desc: "SEC cybersecurity examinations and FINRA audits require documented policies, evidence of controls, incident response plans, and business continuity testing. We maintain continuous compliance documentation and conduct annual tabletop exercises so you're ready when examiners arrive — not scrambling." },
              { title: "Client Data Protection", desc: "Financial advisors handle Social Security numbers, account numbers, tax returns, and estate documents daily. One compromised email account can expose thousands of clients. We implement email encryption, DLP rules, and conditional access policies that prevent data leakage without disrupting advisor workflows." },
              { title: "Business Continuity & Trading", desc: "Markets don't wait for your network to come back online. A 30-minute outage during market hours can cost clients real money. We build active-active redundancy with instant failover, dedicated backup circuits, and recovery procedures that get trading platforms online in minutes, not hours." },
              { title: "Vendor & Third-Party Risk", desc: "Financial firms rely on dozens of third-party platforms — custodians, CRMs, portfolio management tools, and compliance systems. Each vendor is a potential attack vector. We conduct vendor security assessments, implement proper API security, and monitor third-party access to your environment." },
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
              { value: "120+", label: "Financial Clients" },
              { value: "SOC 2", label: "Type II Certified" },
              { value: "99.999%", label: "Uptime Delivered" },
              { value: "$50B+", label: "AUM Protected" },
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
            <h2 className="text-3xl font-medium uppercase">Secure your clients' trust</h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">From SOC 2 compliance to 24/7 SOC monitoring — we build the infrastructure financial services firms trust with their clients' data.</p>
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

export default FinancialServicesPage;
