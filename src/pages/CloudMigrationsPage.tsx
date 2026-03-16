import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Cloud, Server, Database, Shield, Globe, Zap, BarChart3, RefreshCw } from "lucide-react";
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
  { icon: Cloud, title: "Cloud Strategy", desc: "Assessment-driven cloud roadmaps that align infrastructure decisions with business objectives, compliance requirements, and budget constraints." },
  { icon: Server, title: "Migration Services", desc: "Lift-and-shift, re-platforming, and re-architecting workloads to AWS, Azure, or Google Cloud with minimal downtime and zero data loss." },
  { icon: Database, title: "Hybrid Cloud", desc: "Architectures that keep sensitive workloads on-premise while leveraging cloud scalability for compute, storage, and disaster recovery." },
  { icon: Shield, title: "Cloud Security", desc: "Identity management, encryption, CSPM, and compliance monitoring to secure your cloud environment against misconfigurations and threats." },
  { icon: Globe, title: "Microsoft 365", desc: "Full Microsoft 365 migrations — Exchange Online, SharePoint, Teams, OneDrive — with user training and change management." },
  { icon: Zap, title: "Cloud Optimization", desc: "Right-sizing instances, reserved capacity planning, storage tiering, and cost anomaly detection to eliminate cloud waste." },
  { icon: BarChart3, title: "Monitoring & Management", desc: "24/7 cloud infrastructure monitoring, automated alerting, performance dashboards, and monthly optimization reviews." },
  { icon: RefreshCw, title: "Backup & DR", desc: "Cloud-native backup with immutable snapshots, cross-region replication, and automated failover for business continuity." },
];

const CloudMigrationsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingMarketingMenu />

      <IndustryHero
        image={heroImg}
        title="Cloud Computing & Migrations"
        description="Expert migration services across AWS, Azure, and Google Cloud with comprehensive strategy, security, and ongoing management."
      />

      <section className="border-b border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade} className="mb-16">
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Solutions</span>
            <h2 className="text-3xl font-medium uppercase mt-3">Cloud with confidence</h2>
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
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Approach</span>
            <h2 className="text-3xl font-medium uppercase mt-3">Migration methodology</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {[
              { title: "Assess & Plan", desc: "We inventory every workload, dependency, and integration. Then we build a phased migration plan with rollback procedures, success criteria, and a realistic timeline your team can commit to." },
              { title: "Migrate & Validate", desc: "Parallel-run testing, data integrity validation, and performance benchmarking before cutover. We don't flip the switch until everything is verified and your team is confident." },
              { title: "Optimize & Secure", desc: "Post-migration, we right-size resources, implement cost controls, configure security baselines, and enable monitoring — so your cloud spend and risk profile stay under control." },
              { title: "Manage & Scale", desc: "Ongoing management with monthly reviews, capacity planning, patch management, and architecture consulting as your cloud environment evolves." },
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
            <h2 className="text-3xl font-medium uppercase">Move to the cloud with certainty</h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">Whether you're migrating your first workload or optimizing a multi-cloud environment — we make cloud simple, secure, and cost-effective.</p>
            <Button variant="hero" size="lg" className="mt-8" asChild>
              <Link to="/quote">Start Your Migration <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CloudMigrationsPage;
