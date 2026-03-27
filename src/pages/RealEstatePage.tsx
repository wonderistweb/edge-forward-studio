import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Wifi, Shield, Monitor, Phone, Camera, Server, Building2, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingMarketingMenu from "@/components/FloatingMarketingMenu";
import IndustryHero from "@/components/IndustryHero";
import heroImg from "@/assets/industry-hero-realestate.jpg";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.6, ease: [0.2, 1, 0.3, 1] as const },
};

const services = [
  { icon: Building2, title: "Smart Building Systems", desc: "BMS integration, IoT sensors, energy management, HVAC networking, and building automation systems that reduce operating costs and attract premium tenants." },
  { icon: Wifi, title: "Tenant & Common Area WiFi", desc: "Managed WiFi for lobbies, conference centers, amenity spaces, and tenant suites — with per-tenant billing, bandwidth management, and seamless roaming." },
  { icon: Camera, title: "Property Security", desc: "IP camera systems, access control with key fob/mobile credentials, visitor management kiosks, license plate recognition, and integration with property management platforms." },
  { icon: Phone, title: "Property Communications", desc: "Phone systems for leasing offices, maintenance teams, and common areas — with tenant directory, emergency notification, and integration with property management software." },
  { icon: Shield, title: "Cybersecurity", desc: "Network segmentation between tenants, building systems, and management networks — preventing lateral movement and protecting sensitive financial and tenant data." },
  { icon: Server, title: "Structured Cabling & MDFs", desc: "Building-wide structured cabling, MDF/IDF room buildouts, fiber backbone, and riser management that support current tenants and future technology requirements." },
  { icon: Monitor, title: "Amenity Technology", desc: "Conference room AV, coworking space tech, fitness center displays, digital directories, package locker systems, and EV charger networks that differentiate your property." },
  { icon: Lock, title: "Access Control & Parking", desc: "Mobile credential access, elevator destination dispatch, parking management systems, and tenant app integration for a seamless building experience." },
];

const RealEstatePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingMarketingMenu />

      <IndustryHero
        image={heroImg}
        title="Real Estate Technology"
        description="Smart building infrastructure that attracts premium tenants, reduces operating costs, and positions your properties as technology-forward assets in a competitive market."
        
      />

      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.div {...fade} className="bg-primary/5 border border-primary/10 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-mono-display text-sm uppercase tracking-wider text-primary mb-2">Tenant Retention</h3>
              <h2 className="text-2xl font-medium uppercase">Technology is now the #2 factor in leasing decisions</h2>
              <p className="text-sm text-muted-foreground mt-2 max-w-lg">
                Behind location, building technology is the biggest differentiator for commercial tenants. Smart access, reliable WiFi, modern AV, and building apps aren't amenities anymore — they're expectations. Properties without them lose tenants to those that have them.
              </p>
            </div>
            <Button variant="outline" size="lg" asChild className="shrink-0">
              <Link to="/quote">Smart Building Assessment <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade} className="mb-16">
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Solutions</span>
            <h2 className="text-3xl font-medium uppercase mt-3">Technology for modern properties</h2>
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
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Real Estate-Specific</span>
            <h2 className="text-3xl font-medium uppercase mt-3">Challenges we solve</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {[
              { title: "Tenant Network Isolation", desc: "Multi-tenant buildings require absolute network isolation between tenants, building systems, and common areas. A vulnerability in one tenant's network can never reach another's. We build segmented architectures with tenant-specific VLANs, firewalls, and monitoring that satisfy even the most security-conscious enterprise tenants." },
              { title: "Legacy Building Modernization", desc: "Older buildings have limited conduit pathways, asbestos-wrapped risers, and electrical panels with no room for UPS. We specialize in retrofit installations — finding creative pathways for fiber, deploying wireless backhaul where cabling isn't possible, and working within the constraints of existing infrastructure." },
              { title: "OT/IT Convergence", desc: "Building automation systems (HVAC, elevators, fire alarm, lighting) increasingly share IP networks with tenant IT. These OT systems often run outdated firmware and can't be patched. We build isolated OT networks with proper monitoring that protect building systems without disrupting the BMS vendor's access." },
              { title: "Portfolio-Wide Standards", desc: "Real estate firms with 10, 50, or 200 properties need consistent technology standards, centralized management, and standardized tenant experiences across the portfolio. We build deployment templates and management platforms that ensure every property meets the same standard — whether it's a Class A tower or a suburban office park." },
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
              { value: "40M+", label: "Sq Ft Connected" },
              { value: "150+", label: "Properties Managed" },
              { value: "99.99%", label: "Network Uptime" },
              { value: "LEED", label: "Tech Integration" },
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
            <h2 className="text-3xl font-medium uppercase">Make your properties smarter</h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">From smart building systems to tenant WiFi — we help real estate firms build technology infrastructure that attracts and retains premium tenants.</p>
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

export default RealEstatePage;
