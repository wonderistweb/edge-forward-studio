import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, HardDrive, Shield, Database, Clock, Cloud, RefreshCw, AlertTriangle, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingMarketingMenu from "@/components/FloatingMarketingMenu";
import IndustryHero from "@/components/IndustryHero";
import heroImg from "@/assets/solution-continuity.jpg";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.6, ease: [0.2, 1, 0.3, 1] as const },
};

const services = [
  { icon: Database, title: "Backup Solutions", desc: "Image-based, application-aware backups with local and cloud targets — automated, encrypted, and verified with daily recovery testing." },
  { icon: Cloud, title: "Cloud DR", desc: "Replicate critical systems to the cloud with automated failover. Spin up your entire environment in minutes when disaster strikes." },
  { icon: RefreshCw, title: "Failover & Replication", desc: "Real-time replication to secondary sites with sub-15-minute RPOs and automated failover for mission-critical applications." },
  { icon: Clock, title: "RTO/RPO Planning", desc: "Business impact analysis to define recovery time and recovery point objectives for every system — aligned with business priorities." },
  { icon: Shield, title: "Ransomware Recovery", desc: "Immutable backups, air-gapped copies, and tested recovery procedures specifically designed to counter ransomware encryption attacks." },
  { icon: AlertTriangle, title: "Incident Response", desc: "Documented incident response plans with communication templates, escalation procedures, and tabletop exercises to test readiness." },
  { icon: FileCheck, title: "DR Testing", desc: "Quarterly failover tests with documented results, gap analysis, and plan updates — so your DR plan works when you actually need it." },
  { icon: HardDrive, title: "Archival & Compliance", desc: "Long-term data retention with compliance-aligned policies for HIPAA, PCI, legal hold, and industry-specific requirements." },
];

const BusinessContinuityPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingMarketingMenu />

      <IndustryHero
        image={heroImg}
        title="Business Continuity & DR"
        description="Comprehensive disaster recovery solutions with customized strategies, rapid recovery systems, and tested failover procedures."
      />

      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.div {...fade} className="bg-destructive/5 border border-destructive/10 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-mono-display text-sm uppercase tracking-wider text-destructive mb-2">Reality Check</h3>
              <h2 className="text-2xl font-medium uppercase">60% of SMBs close within 6 months of a major data loss</h2>
              <p className="text-sm text-muted-foreground mt-2 max-w-lg">
                Downtime costs $5,600 per minute on average. Our backup and DR solutions ensure your business recovers in minutes — not days.
              </p>
            </div>
            <Button variant="outline" size="lg" asChild className="shrink-0">
              <Link to="/quote">DR Assessment <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade} className="mb-16">
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Solutions</span>
            <h2 className="text-3xl font-medium uppercase mt-3">Recovery without question</h2>
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

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div {...fade}>
            <h2 className="text-3xl font-medium uppercase">Don't leave recovery to chance</h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">From backup configuration to full DR orchestration — we build recovery plans that actually work when you need them.</p>
            <Button variant="hero" size="lg" className="mt-8" asChild>
              <Link to="/quote">Get a DR Assessment <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessContinuityPage;
