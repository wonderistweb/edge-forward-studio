import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Wifi, Shield, Monitor, ShoppingCart, Camera, Server, CreditCard, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingMarketingMenu from "@/components/FloatingMarketingMenu";
import IndustryHero from "@/components/IndustryHero";
import heroImg from "@/assets/industry-hero-retail.jpg";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.6, ease: [0.2, 1, 0.3, 1] as const },
};

const services = [
  { icon: CreditCard, title: "PCI-DSS Compliance", desc: "Network segmentation, point-to-point encryption, and security controls that protect cardholder data across every POS terminal, e-commerce platform, and payment gateway." },
  { icon: Wifi, title: "In-Store WiFi & Analytics", desc: "Customer-facing WiFi with captive portals, foot traffic analytics, dwell time measurement, and heat mapping that turns your network into a marketing intelligence platform." },
  { icon: Camera, title: "Loss Prevention", desc: "AI-powered IP camera systems with people counting, exception-based reporting, self-checkout monitoring, and integration with POS transaction data." },
  { icon: ShoppingCart, title: "POS Infrastructure", desc: "Network infrastructure for cloud-based POS, mobile checkout, self-service kiosks, and inventory management systems — with failover so sales never stop." },
  { icon: Monitor, title: "Digital Signage", desc: "Centrally-managed digital signage networks for pricing, promotions, wayfinding, and dynamic content across single stores or thousands of locations." },
  { icon: Server, title: "Multi-Location SD-WAN", desc: "SD-WAN architectures connecting hundreds of retail locations with centralized management, 4G/5G failover, and prioritized traffic for POS and inventory systems." },
  { icon: Shield, title: "Endpoint Security", desc: "Managed endpoint protection for POS terminals, back-office workstations, and IoT devices — with 24/7 SOC monitoring and rapid incident response." },
  { icon: BarChart3, title: "Business Intelligence", desc: "Network-integrated analytics combining WiFi data, POS transactions, camera feeds, and inventory systems for actionable insights on customer behavior and operations." },
];

const RetailPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingMarketingMenu />

      <IndustryHero
        image={heroImg}
        title="Retail Technology"
        description="PCI-compliant infrastructure that powers in-store experiences, protects transactions, and connects every location — from single storefronts to national chains."
        
      />

      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.div {...fade} className="bg-primary/5 border border-primary/10 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-mono-display text-sm uppercase tracking-wider text-primary mb-2">PCI Compliance</h3>
              <h2 className="text-2xl font-medium uppercase">92% of breached retailers weren't PCI compliant</h2>
              <p className="text-sm text-muted-foreground mt-2 max-w-lg">
                PCI non-compliance fines range from $5,000 to $100,000 per month — and that's before the cost of a breach. Our network segmentation and security assessments get you audit-ready and keep you there.
              </p>
            </div>
            <Button variant="outline" size="lg" asChild className="shrink-0">
              <Link to="/quote">PCI Assessment <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade} className="mb-16">
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Solutions</span>
            <h2 className="text-3xl font-medium uppercase mt-3">Technology for modern retail</h2>
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
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Retail-Specific</span>
            <h2 className="text-3xl font-medium uppercase mt-3">Challenges we solve</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {[
              { title: "Multi-Location Rollouts", desc: "Opening 10 stores this year? Or 100? We build standardized site deployment packages — network configs, security policies, POS setup, camera placement — that can be replicated by local electricians with our remote engineering team, getting each store online in days, not weeks." },
              { title: "POS Network Isolation", desc: "PCI-DSS requires payment systems to be completely isolated from guest WiFi, back-office systems, and IoT devices. We design segmented architectures with proper VLANs, firewalls, and monitoring that satisfy QSAs — while keeping everything manageable for lean IT teams." },
              { title: "Peak Season Readiness", desc: "Black Friday, holiday rushes, and promotional events create massive spikes in network demand — more devices, more transactions, more customers. We load-test networks, pre-stage failover capacity, and provide on-call support during your busiest revenue days." },
              { title: "Shrinkage & Loss Prevention", desc: "Retail shrinkage costs the industry $100B+ annually. We deploy AI-powered camera analytics that correlate video feeds with POS transaction data, flagging exceptions like sweet-hearting, skip-scans, and return fraud in real time." },
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
              { value: "300+", label: "Locations Deployed" },
              { value: "PCI", label: "Certified Partner" },
              { value: "99.99%", label: "POS Uptime" },
              { value: "<4hr", label: "On-Site Response" },
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
            <h2 className="text-3xl font-medium uppercase">Power your retail operations</h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">From PCI compliance to multi-location SD-WAN — we build the infrastructure that keeps retail running.</p>
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

export default RetailPage;
