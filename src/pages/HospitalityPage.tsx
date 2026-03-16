import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Wifi, Shield, Monitor, Phone, Camera, Tv, Server, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingMarketingMenu from "@/components/FloatingMarketingMenu";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.6, ease: [0.2, 1, 0.3, 1] as const },
};

const services = [
  { icon: Wifi, title: "Guest WiFi & Captive Portals", desc: "High-density wireless networks with branded login portals, bandwidth management, tiered access (free/premium), and analytics on guest usage patterns and dwell time." },
  { icon: Phone, title: "Hotel Phone Systems", desc: "Modern VoIP solutions with room-to-room calling, front desk integration, wake-up calls, PMS connectivity, and SIP trunking that eliminates legacy POTS lines." },
  { icon: Tv, title: "In-Room Entertainment", desc: "IPTV systems, Chromecast/AirPlay casting solutions, digital compendiums, and streaming platform integration that elevate the guest experience." },
  { icon: Camera, title: "Property Security", desc: "Comprehensive IP camera coverage of lobbies, hallways, parking areas, pools, and back-of-house with cloud-managed access and 90-day retention." },
  { icon: Shield, title: "PCI Compliance", desc: "Network segmentation and security controls that protect payment card data across POS terminals, front desk systems, and guest networks to meet PCI-DSS requirements." },
  { icon: Monitor, title: "PMS Integration", desc: "IT infrastructure that integrates with Opera, Cloudbeds, Mews, and other property management platforms for seamless check-in, billing, and housekeeping operations." },
  { icon: Server, title: "Back-of-House Infrastructure", desc: "Server rooms, structured cabling, UPS systems, and redundant internet connections that keep your property running 24/7/365 without interruption." },
  { icon: Lock, title: "Smart Lock & IoT Systems", desc: "Networked door locks, smart thermostats, occupancy sensors, and energy management systems that reduce costs and enhance guest comfort." },
];

const HospitalityPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingMarketingMenu />

      {/* Hero */}
      <section className="pt-32 pb-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade}>
            <span className="text-sm font-mono-display text-primary uppercase tracking-wider">Industries</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium uppercase mt-3 max-w-4xl">
              Hospitality Technology
            </h1>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
              Technology that elevates the guest experience. From high-density WiFi to integrated property management systems, we build the infrastructure that modern hospitality demands.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button variant="hero" size="lg" asChild>
                <Link to="/quote">Get a Free Assessment <ArrowRight className="ml-2" size={16} /></Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/case-study/school-wifi-redesign">View Case Study <ArrowRight className="ml-2" size={16} /></Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Guest Experience Banner */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.div {...fade} className="bg-primary/5 border border-primary/10 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-mono-display text-sm uppercase tracking-wider text-primary mb-2">Guest Experience</h3>
              <h2 className="text-2xl font-medium uppercase">WiFi is the #1 amenity guests demand</h2>
              <p className="text-sm text-muted-foreground mt-2 max-w-lg">
                94% of travelers say WiFi quality influences their booking decisions. Poor connectivity means bad reviews, lower occupancy, and lost revenue. We build networks that earn 5-star ratings.
              </p>
            </div>
            <Button variant="outline" size="lg" asChild className="shrink-0">
              <Link to="/quote">Upgrade Your WiFi <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade} className="mb-16">
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Solutions</span>
            <h2 className="text-3xl font-medium uppercase mt-3">Guest-first technology</h2>
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
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Hospitality-Specific</span>
            <h2 className="text-3xl font-medium uppercase mt-3">Challenges we solve</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-px bg-border">
            {[
              {
                title: "High-Density Wireless",
                desc: "Hotels, convention centers, and resorts have thousands of devices competing for bandwidth — guests' phones, laptops, tablets, plus smart TVs, IoT locks, and POS systems. We design RF environments with proper AP density, channel planning, and band steering so every device connects reliably.",
              },
              {
                title: "PCI-DSS Network Segmentation",
                desc: "Guest WiFi, POS terminals, back-office systems, and IoT devices must be isolated on separate network segments to meet PCI compliance. We build zero-trust architectures with proper VLANs, firewalls, and monitoring — so a compromised guest device can never reach your payment systems.",
              },
              {
                title: "Legacy System Integration",
                desc: "Most properties run a mix of old and new technology — legacy PBX phone systems, analog cameras, and modern cloud-based PMS platforms. We build bridge architectures that connect everything without rip-and-replace, phasing upgrades to minimize disruption to operations.",
              },
              {
                title: "24/7 Uptime Requirements",
                desc: "Hotels never close. A network outage at 2 AM means guests can't access rooms, front desk can't check in arrivals, and security cameras go dark. We build redundant architectures with automatic failover, 4G/5G backup links, and 24/7 monitoring with guaranteed response times.",
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
              { value: "200+", label: "Properties Equipped" },
              { value: "50K+", label: "Rooms Connected" },
              { value: "10Gbps", label: "Backbone Capacity" },
              { value: "<2hr", label: "Response Time" },
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
            <h2 className="text-3xl font-medium uppercase">Upgrade your property's technology</h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              From captive portals to PMS integration — we help hospitality properties build infrastructure that matches the quality of their guest experience.
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

export default HospitalityPage;
