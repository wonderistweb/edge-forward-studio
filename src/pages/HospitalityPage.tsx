import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Wifi, Shield, Monitor, Phone, Camera, Tv } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/industry-hospitality.jpg";

const services = [
  { icon: Wifi, title: "Guest WiFi & Captive Portals", desc: "High-density wireless networks with branded login portals, bandwidth management, and analytics on guest usage patterns." },
  { icon: Phone, title: "Hotel Phone Systems", desc: "Modern VoIP solutions with room-to-room calling, front desk integration, wake-up calls, and PMS connectivity." },
  { icon: Tv, title: "In-Room Entertainment", desc: "IPTV systems, digital signage, and casting solutions that elevate the guest experience." },
  { icon: Camera, title: "Property Security", desc: "Comprehensive IP camera coverage of lobbies, hallways, parking areas, and back-of-house with cloud-managed access." },
  { icon: Shield, title: "PCI Compliance", desc: "Network segmentation and security controls that protect payment card data and meet PCI-DSS requirements." },
  { icon: Monitor, title: "Property Management Integration", desc: "IT infrastructure that integrates with Opera, Cloudbeds, and other PMS platforms for seamless operations." },
];

const HospitalityPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-16">
        <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <img src={heroImg} alt="Hospitality Technology" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-sm font-mono-display text-primary uppercase tracking-wider">Industries</span>
              <h1 className="text-4xl md:text-6xl font-medium uppercase mt-2">Hospitality</h1>
              <p className="text-muted-foreground mt-4 max-w-2xl text-lg leading-relaxed">
                Technology that elevates the guest experience. From high-density WiFi to integrated property management, we build the infrastructure hospitality demands.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <span className="text-sm font-mono-display text-primary uppercase tracking-wider">Solutions</span>
            <h2 className="text-3xl md:text-4xl font-medium uppercase mt-3">Guest-first technology</h2>
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
              { value: "200+", label: "Properties Equipped" },
              { value: "50K+", label: "Rooms Connected" },
              { value: "10Gbps", label: "Backbone Capacity" },
              { value: "<2hr", label: "Response Time" },
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
          <h2 className="text-3xl font-medium uppercase">Upgrade your property's technology</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Let us design a technology infrastructure that matches the quality of your guest experience.</p>
          <Button variant="hero" size="lg" className="mt-8" asChild>
            <Link to="/quote">Get a Free Assessment<ArrowRight className="ml-2" size={16} /></Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HospitalityPage;
