import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Wifi, Cable, Network, Radio, Shield, Signal, Map, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingMarketingMenu from "@/components/FloatingMarketingMenu";
import IndustryHero from "@/components/IndustryHero";
import heroImg from "@/assets/solution-wireless.jpg";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.6, ease: [0.2, 1, 0.3, 1] as const },
};

const services = [
  { icon: Cable, title: "Structured Cabling", desc: "Cat6/6A copper and fiber optic cabling — MDF/IDF buildouts, cable management, labeling, and testing to TIA/EIA standards." },
  { icon: Wifi, title: "Enterprise Wireless", desc: "WiFi 6/6E access point design, deployment, and management for high-density environments — offices, warehouses, campuses, and stadiums." },
  { icon: Map, title: "Site Surveys", desc: "Predictive and active RF site surveys with heatmap analysis to ensure optimal AP placement, coverage, and capacity before installation." },
  { icon: Network, title: "Network Design", desc: "VLAN architecture, IP addressing, routing protocols, and network segmentation designed for performance, security, and scalability." },
  { icon: Shield, title: "Network Security", desc: "Next-gen firewalls, NAC, 802.1X, and micro-segmentation to protect every wired and wireless connection on your network." },
  { icon: Signal, title: "DAS & Cellular", desc: "Distributed antenna systems and cellular signal boosters for in-building cellular coverage where traditional signals can't reach." },
  { icon: Radio, title: "Point-to-Point Wireless", desc: "Building-to-building wireless bridges for campuses, parking structures, and remote sites where running fiber isn't practical." },
  { icon: Wrench, title: "Network Management", desc: "24/7 monitoring, firmware management, configuration backups, and proactive optimization of your wired and wireless infrastructure." },
];

const WirelessNetworksPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingMarketingMenu />

      <IndustryHero
        image={heroImg}
        title="Wiring & Wireless Networks"
        description="Robust network infrastructure from structured cabling to enterprise-grade wireless solutions designed for performance and reliability."
      />

      <section className="border-b border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade} className="mb-16">
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Solutions</span>
            <h2 className="text-3xl font-medium uppercase mt-3">Connected, everywhere</h2>
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
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Why Us</span>
            <h2 className="text-3xl font-medium uppercase mt-3">Built to last</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {[
              { title: "Design-First Approach", desc: "Every project starts with a detailed network design. RF propagation modeling, switch port density calculations, and cable pathway planning ensure the right solution before any work begins." },
              { title: "Certified Teams", desc: "BICSI and manufacturer-certified professionals ensure every project is tested, labeled, documented, and backed by a 25-year structured cabling warranty." },
              { title: "Future-Proof Standards", desc: "Cat6A and WiFi 6E as baseline — ensuring your infrastructure supports 10GbE, IoT devices, and growing bandwidth demands for years to come." },
              { title: "Ongoing Optimization", desc: "Networks degrade over time as devices, walls, and interference change. Quarterly wireless assessments and proactive tuning maintain peak performance." },
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
            <h2 className="text-3xl font-medium uppercase">Build a network that never lets you down</h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">From structured cabling to campus-wide WiFi — we design, build, and manage networks that perform.</p>
            <Button variant="hero" size="lg" className="mt-8" asChild>
              <Link to="/quote">Get a Free Site Survey <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WirelessNetworksPage;
