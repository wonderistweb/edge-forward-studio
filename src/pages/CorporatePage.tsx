import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Wifi, Shield, Monitor, Phone, Cloud, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/industry-corporate.jpg";

const services = [
  { icon: Cloud, title: "Cloud & Hybrid Infrastructure", desc: "Azure, AWS, and hybrid cloud architectures with disaster recovery, high availability, and cost optimization." },
  { icon: Shield, title: "Cybersecurity & Compliance", desc: "Zero Trust security, SOC 2 readiness, penetration testing, and managed detection and response for enterprise environments." },
  { icon: Phone, title: "Unified Communications", desc: "Microsoft Teams, 3CX, and enterprise VoIP deployments with conference room AV and collaboration tools." },
  { icon: Wifi, title: "Enterprise Networking", desc: "SD-WAN, multi-site connectivity, high-density WiFi, and network segmentation for corporate campuses." },
  { icon: Monitor, title: "Managed IT Services", desc: "24/7 monitoring, help desk, patch management, and strategic vCIO services that align IT with business objectives." },
  { icon: Server, title: "Data Center & Colocation", desc: "Server consolidation, virtualization, backup infrastructure, and colocation management." },
];

const CorporatePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-16">
        <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <img src={heroImg} alt="Corporate IT Solutions" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-sm font-mono-display text-primary uppercase tracking-wider">Industries</span>
              <h1 className="text-4xl md:text-6xl font-medium uppercase mt-2">Corporate</h1>
              <p className="text-muted-foreground mt-4 max-w-2xl text-lg leading-relaxed">
                Enterprise-grade IT infrastructure without enterprise-grade complexity. We help corporate organizations scale their technology operations with confidence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <span className="text-sm font-mono-display text-primary uppercase tracking-wider">Solutions</span>
            <h2 className="text-3xl md:text-4xl font-medium uppercase mt-3">Built for the enterprise</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {services.map((service, i) => (
              <motion.div key={service.title} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-card p-8 group hover:bg-secondary transition-colors duration-250">
                <service.icon className="text-primary mb-4" size={24} />
                <h3 className="font-mono-display text-sm uppercase tracking-wider mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {[
              { value: "500+", label: "Corporate Clients" },
              { value: "99.99%", label: "Uptime SLA" },
              { value: "<15min", label: "Response Time" },
              { value: "24/7", label: "SOC Monitoring" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card p-8 text-center">
                <div className="text-3xl font-mono-display font-semibold text-primary tabular-nums">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-medium uppercase">Scale your IT with confidence</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Let us conduct a comprehensive infrastructure audit and build a technology roadmap aligned with your business goals.</p>
          <Button variant="hero" size="lg" className="mt-8" asChild>
            <Link to="/quote">Get a Free Assessment<ArrowRight className="ml-2" size={16} /></Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CorporatePage;
