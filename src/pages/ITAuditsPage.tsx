import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Search, FileCheck, ShieldAlert, Network, Lock, ClipboardList, BarChart3, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingMarketingMenu from "@/components/FloatingMarketingMenu";
import IndustryHero from "@/components/IndustryHero";
import heroImg from "@/assets/infrastructure-audit.jpg";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.6, ease: [0.2, 1, 0.3, 1] as const },
};

const services = [
  { icon: Network, title: "Network Assessment", desc: "Complete topology mapping, bandwidth analysis, switch/router audits, and wireless surveys to identify bottlenecks and single points of failure." },
  { icon: ShieldAlert, title: "Security Audit", desc: "Vulnerability scanning, penetration testing, firewall rule review, and access control audits to uncover exploitable weaknesses." },
  { icon: FileCheck, title: "Compliance Assessment", desc: "Gap analysis against HIPAA, PCI-DSS, CMMC, SOC 2, and NIST frameworks with actionable remediation roadmaps." },
  { icon: Lock, title: "Cyber Risk Assessment", desc: "Business impact analysis, threat modeling, and risk scoring to quantify your exposure and prioritize security investments." },
  { icon: ClipboardList, title: "IT Policy Review", desc: "Evaluation of acceptable use, incident response, data classification, and business continuity policies against industry best practices." },
  { icon: BarChart3, title: "Performance Audit", desc: "Server utilization, application performance, storage capacity, and cloud spend analysis to optimize performance and reduce waste." },
  { icon: AlertTriangle, title: "Disaster Recovery Audit", desc: "Backup verification, RTO/RPO validation, failover testing, and DR plan review to ensure recoverability when it matters most." },
  { icon: Search, title: "Vendor & Contract Review", desc: "Audit of MSP agreements, SaaS contracts, licensing compliance, and vendor security postures to eliminate hidden risks and costs." },
];

const ITAuditsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingMarketingMenu />

      <IndustryHero
        image={heroImg}
        title="IT Audits"
        description="Comprehensive audits identifying security vulnerabilities, compliance gaps, and optimization opportunities across your entire IT environment."
      />

      <section className="border-b border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade} className="mb-16">
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Assessments</span>
            <h2 className="text-3xl font-medium uppercase mt-3">Know where you stand</h2>
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
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Process</span>
            <h2 className="text-3xl font-medium uppercase mt-3">How our audits work</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {[
              { title: "Discovery & Scanning", desc: "Non-invasive scanning tools map every device, service, user, and data flow across your network. No guesswork — just a complete, accurate picture of your environment." },
              { title: "Analysis & Risk Scoring", desc: "Every finding is categorized by severity, likelihood, and business impact. Not a 200-page report — a prioritized action plan your team can execute." },
              { title: "Executive Reporting", desc: "Board-ready summaries with risk heat maps, compliance scorecards, and ROI projections for recommended remediations. Technical detail for your IT team, business context for leadership." },
              { title: "Remediation Support", desc: "Beyond identifying problems, we provide clear remediation guidance and can support implementation — from firewall reconfigurations to policy development." },
            ].map((c) => (
              <motion.div key={c.title} className="bg-card p-8" {...fade}>
                <h3 className="font-mono-display text-sm uppercase tracking-wider mb-3">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div {...fade}>
            <h2 className="text-3xl font-medium uppercase">See the risks before they find you</h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">A comprehensive IT audit is the first step toward a secure, compliant, and optimized technology environment.</p>
            <Button variant="hero" size="lg" className="mt-8" asChild>
              <Link to="/quote">Schedule an Audit <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ITAuditsPage;
