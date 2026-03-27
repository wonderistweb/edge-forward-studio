import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Wifi, Shield, Monitor, Phone, Cloud, Server, Lock, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingMarketingMenu from "@/components/FloatingMarketingMenu";
import IndustryHero from "@/components/IndustryHero";
import heroImg from "@/assets/industry-hero-corporate.jpg";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.6, ease: [0.2, 1, 0.3, 1] as const },
};

const services = [
  { icon: Cloud, title: "Cloud & Hybrid Infrastructure", desc: "Azure, AWS, and hybrid cloud architectures with disaster recovery, high availability, cost optimization, and automated scaling that grows with your business." },
  { icon: Shield, title: "Cybersecurity & Compliance", desc: "Zero Trust security frameworks, SOC 2 readiness, penetration testing, managed detection and response, and security awareness training for enterprise environments." },
  { icon: Phone, title: "Unified Communications", desc: "Microsoft Teams, 3CX, and enterprise VoIP deployments with conference room AV, video walls, collaboration tools, and SIP trunking that eliminates legacy phone bills." },
  { icon: Wifi, title: "Enterprise Networking", desc: "SD-WAN, multi-site connectivity, high-density WiFi, network segmentation, and NAC policies for corporate campuses with hundreds of employees and guests." },
  { icon: Monitor, title: "Managed IT Services", desc: "24/7 monitoring, help desk, patch management, asset lifecycle management, and strategic vCIO services that align IT with business objectives." },
  { icon: Server, title: "Data Center & Colocation", desc: "Server consolidation, virtualization (VMware/Hyper-V), backup infrastructure with immutable snapshots, and colocation management with SLA guarantees." },
  { icon: Lock, title: "Identity & Access Management", desc: "Azure AD, Okta, and MFA deployments with conditional access policies, SSO integration, privileged access management, and automated onboarding/offboarding." },
  { icon: BarChart3, title: "Business Continuity", desc: "Disaster recovery planning, automated failover, geo-redundant backups, and tabletop exercises that ensure your business survives any disruption." },
];

const CorporatePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingMarketingMenu />

      <IndustryHero
        image={heroImg}
        title="Corporate IT Solutions"
        description="Enterprise-grade IT infrastructure without enterprise-grade complexity. We help corporate organizations scale their technology operations with confidence, security, and predictable costs."
        
      />

      {/* Security Banner */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.div {...fade} className="bg-primary/5 border border-primary/10 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-mono-display text-sm uppercase tracking-wider text-primary mb-2">Cybersecurity</h3>
              <h2 className="text-2xl font-medium uppercase">The average breach costs $4.45M</h2>
              <p className="text-sm text-muted-foreground mt-2 max-w-lg">
                60% of small businesses close within 6 months of a cyber attack. Our Zero Trust security assessments identify vulnerabilities before attackers do — and our managed SOC monitors your environment 24/7.
              </p>
            </div>
            <Button variant="outline" size="lg" asChild className="shrink-0">
              <Link to="/quote">Get a Security Audit <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade} className="mb-16">
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Solutions</span>
            <h2 className="text-3xl font-medium uppercase mt-3">Built for the enterprise</h2>
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

      {/* Challenges */}
      <section className="border-b border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade} className="mb-16">
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Corporate-Specific</span>
            <h2 className="text-3xl font-medium uppercase mt-3">Challenges we solve</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-px bg-border">
            {[
              {
                title: "Multi-Site Complexity",
                desc: "Managing IT across 5, 50, or 500 locations is exponentially harder than a single office. We deploy SD-WAN with centralized management, cloud-based security stacks, and standardized configurations so every site gets the same experience — managed from a single dashboard.",
              },
              {
                title: "Shadow IT & SaaS Sprawl",
                desc: "The average company uses 130+ SaaS apps — most unapproved by IT. We implement CASB solutions, SSO integration, and SaaS management platforms that give you visibility into every application, control access, and eliminate redundant subscriptions costing you thousands per month.",
              },
              {
                title: "Talent Shortage",
                desc: "There are 3.5 million unfilled cybersecurity jobs globally. Finding and retaining senior network engineers is nearly impossible for mid-market companies. Our managed services give you access to a full team of certified engineers at a fraction of the cost of hiring internally.",
              },
              {
                title: "Compliance & Audit Readiness",
                desc: "SOC 2, HIPAA, CMMC, SOX — every industry has compliance requirements that demand documented controls, continuous monitoring, and audit-ready evidence. We build compliance-first architectures and maintain the documentation your auditors need.",
              },
            ].map((challenge) => (
              <motion.div key={challenge.title} className="bg-card p-8" {...fade}>
                <h3 className="font-mono-display text-sm uppercase tracking-wider mb-3">{challenge.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{challenge.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { value: "500+", label: "Corporate Clients" },
              { value: "99.99%", label: "Uptime SLA" },
              { value: "<15min", label: "Response Time" },
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

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div {...fade}>
            <h2 className="text-3xl font-medium uppercase">Scale your IT with confidence</h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              From security audits to full managed services — we help corporate organizations build technology that drives growth, not headaches.
            </p>
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

export default CorporatePage;
