import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Wifi, Shield, Monitor, Radio, Camera, Server, Factory, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingMarketingMenu from "@/components/FloatingMarketingMenu";
import IndustryHero from "@/components/IndustryHero";
import heroImg from "@/assets/industry-hero-manufacturing.jpg";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.6, ease: [0.2, 1, 0.3, 1] as const },
};

const services = [
  { icon: Wifi, title: "Industrial Wireless", desc: "Ruggedized WiFi and private LTE/5G networks designed for factory floors — high-interference environments with metal structures, heavy machinery, and extreme temperatures." },
  { icon: Factory, title: "OT/IT Convergence", desc: "Bridging SCADA, PLCs, and industrial control systems with enterprise IT networks — with proper segmentation, Purdue Model compliance, and industrial firewall deployment." },
  { icon: Camera, title: "Facility Security", desc: "IP camera systems with analytics, license plate recognition, perimeter detection, and access control for warehouses, loading docks, and production areas." },
  { icon: Shield, title: "CMMC & ITAR Compliance", desc: "Security architectures for defense contractors and regulated manufacturers — CUI protection, NIST 800-171 controls, and CMMC Level 2 assessment preparation." },
  { icon: Monitor, title: "Digital Signage & Andon", desc: "Real-time production dashboards, quality alert systems, and digital signage networks that keep floor teams informed and responsive." },
  { icon: Server, title: "Edge Computing", desc: "On-premise compute and storage for latency-sensitive manufacturing applications — MES, quality inspection AI, and IoT data aggregation at the edge." },
  { icon: Radio, title: "Two-Way Radio & RTLS", desc: "Digital radio networks, real-time location systems for asset tracking, and panic button systems for worker safety across large facilities." },
  { icon: Gauge, title: "IoT & Sensor Networks", desc: "Environmental monitoring, predictive maintenance sensors, energy management, and connected equipment platforms that drive Industry 4.0 initiatives." },
];

const ManufacturingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingMarketingMenu />

      <IndustryHero
        image={heroImg}
        title="Manufacturing IT"
        description="Industrial-grade technology infrastructure for factory floors, warehouses, and production environments — where downtime means lost revenue and safety risks."
        
      />

      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.div {...fade} className="bg-primary/5 border border-primary/10 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-mono-display text-sm uppercase tracking-wider text-primary mb-2">Industry 4.0</h3>
              <h2 className="text-2xl font-medium uppercase">Manufacturing downtime costs $260K/hour</h2>
              <p className="text-sm text-muted-foreground mt-2 max-w-lg">
                Unplanned downtime in manufacturing is devastatingly expensive. Our industrial network designs deliver 99.999% uptime with redundant architectures, predictive monitoring, and rapid incident response.
              </p>
            </div>
            <Button variant="outline" size="lg" asChild className="shrink-0">
              <Link to="/quote">OT Security Assessment <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade} className="mb-16">
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Solutions</span>
            <h2 className="text-3xl font-medium uppercase mt-3">Built for the factory floor</h2>
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
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Manufacturing-Specific</span>
            <h2 className="text-3xl font-medium uppercase mt-3">Challenges we solve</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {[
              { title: "RF-Hostile Environments", desc: "Steel structures, heavy machinery, welding interference, and constantly moving forklifts create the worst possible wireless environment. We conduct professional RF surveys with spectrum analysis and deploy industrial-rated APs with directional antennas designed for these exact conditions." },
              { title: "OT/IT Security Gap", desc: "Most manufacturing cyber attacks exploit the gap between operational technology and IT networks. We implement Purdue Model segmentation, industrial DMZs, and OT-specific firewalls that protect PLCs and SCADA systems without disrupting production processes." },
              { title: "Legacy Equipment Integration", desc: "Factories run equipment with 20-30 year lifespans — machines with serial ports, proprietary protocols, and no security features. We build secure gateway architectures that connect legacy equipment to modern networks without exposing vulnerable systems to the internet." },
              { title: "Multi-Facility Standardization", desc: "Manufacturers with multiple plants need consistent infrastructure, centralized monitoring, and standardized security policies. We build templates and deployment playbooks that ensure every facility meets the same standards — whether it's plant #2 or plant #20." },
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
              { value: "75+", label: "Facilities Equipped" },
              { value: "99.999%", label: "Uptime Delivered" },
              { value: "CMMC", label: "Certified Partner" },
              { value: "24/7", label: "OT Monitoring" },
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
            <h2 className="text-3xl font-medium uppercase">Modernize your manufacturing IT</h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">From OT security assessments to full industrial network deployments — we build infrastructure that keeps production running.</p>
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

export default ManufacturingPage;
