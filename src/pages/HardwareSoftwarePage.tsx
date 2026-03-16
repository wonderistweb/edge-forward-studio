import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Server, Monitor, Cpu, HardDrive, Laptop, Package, Wrench, ShieldCheck } from "lucide-react";
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
  { icon: Server, title: "Servers & Storage", desc: "Enterprise servers, NAS, SAN, and hyper-converged infrastructure from Dell, Lenovo, and HP — sized and configured for your workloads." },
  { icon: Monitor, title: "Workstations & Displays", desc: "Business-class desktops, thin clients, all-in-ones, and professional monitors with standardized images and lifecycle management." },
  { icon: Laptop, title: "Laptops & Mobile Devices", desc: "Managed laptop fleets with MDM enrollment, encryption, and remote wipe capabilities for a secure mobile workforce." },
  { icon: Cpu, title: "Networking Equipment", desc: "Switches, routers, firewalls, and wireless access points from Fortinet, Cisco, and Aruba — designed for performance and security." },
  { icon: HardDrive, title: "Backup & Recovery", desc: "On-premise and cloud backup appliances with automated schedules, encryption, and verified recovery testing." },
  { icon: Package, title: "Software Licensing", desc: "Microsoft 365, Google Workspace, endpoint protection, RMM, and line-of-business applications — procured, licensed, and managed." },
  { icon: Wrench, title: "Lifecycle Management", desc: "Asset tracking, warranty management, refresh planning, and certified disposal — from procurement through decommission." },
  { icon: ShieldCheck, title: "Endpoint Security", desc: "EDR, antivirus, patch management, and device compliance policies deployed and monitored across every endpoint." },
];

const HardwareSoftwarePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingMarketingMenu />

      <IndustryHero
        image={heroImg}
        title="Hardware & Software"
        description="Industry-leading hardware solutions and enterprise software delivering optimal performance, reliability, and value across your entire technology stack."
      />

      <section className="border-b border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade} className="mb-16">
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Solutions</span>
            <h2 className="text-3xl font-medium uppercase mt-3">The right tools for the job</h2>
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
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Advantage</span>
            <h2 className="text-3xl font-medium uppercase mt-3">Why partner with us</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {[
              { title: "Vendor-Agnostic Procurement", desc: "We're authorized partners with Dell, HP, Lenovo, Fortinet, and more. We recommend what's right for your environment — not what pays the highest margin." },
              { title: "Pre-Staged & Configured", desc: "Every device arrives imaged, configured, and enrolled in your management platform. Zero-touch deployment means your team is productive from day one." },
              { title: "Volume Pricing", desc: "As a value-added reseller, we pass through volume discounts, education pricing, and promotional deals that aren't available through retail channels." },
              { title: "End-to-End Support", desc: "From spec'ing the right hardware to managing warranties and handling RMAs — we own the entire lifecycle so your IT team can focus on strategic work." },
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
            <h2 className="text-3xl font-medium uppercase">Equip your team for success</h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">From a single laptop to a complete data center refresh — we handle procurement, configuration, deployment, and ongoing management.</p>
            <Button variant="hero" size="lg" className="mt-8" asChild>
              <Link to="/quote">Get a Quote <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HardwareSoftwarePage;
