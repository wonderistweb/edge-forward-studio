import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Camera, Lock, Smartphone, Eye, DoorOpen, Bell, MonitorCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingMarketingMenu from "@/components/FloatingMarketingMenu";
import IndustryHero from "@/components/IndustryHero";
import heroImg from "@/assets/solution-access.jpg";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.6, ease: [0.2, 1, 0.3, 1] as const },
};

const services = [
  { icon: Camera, title: "IP Camera Systems", desc: "Enterprise-grade IP surveillance with 4K resolution, advanced analytics, license plate recognition, and centralized management across multiple locations." },
  { icon: Shield, title: "Access Control", desc: "Card reader, PIN keypad, and mobile credential systems integrated with your directory services for seamless, auditable facility access management." },
  { icon: Eye, title: "Video Analytics", desc: "AI-powered video analysis for people counting, heat mapping, perimeter detection, and behavioral alerts — turning cameras into intelligent business tools." },
  { icon: Smartphone, title: "Mobile Credentials", desc: "Smartphone-based door access using Bluetooth and NFC — eliminate lost-card overhead, issue and revoke credentials instantly, and tie entry events to individual users." },
  { icon: DoorOpen, title: "Door & Gate Control", desc: "Automated door controllers, turnstiles, and gate operators integrated with access control for comprehensive perimeter and interior security." },
  { icon: Bell, title: "Alarm & Intrusion Detection", desc: "Motion sensors, glass break detectors, door contacts, and panic buttons with 24/7 monitoring and rapid response coordination." },
  { icon: Lock, title: "Visitor Management", desc: "Digital visitor check-in, badge printing, watchlist screening, and host notification systems for secure and professional visitor experiences." },
  { icon: MonitorCheck, title: "Remote Monitoring", desc: "Cloud-based dashboards for live and recorded video, access logs, and system health — accessible from any device, anywhere." },
];

const AccessControlPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingMarketingMenu />

      <IndustryHero
        image={heroImg}
        title="Access Control & Cameras"
        description="Advanced access control systems and comprehensive surveillance solutions with real-time monitoring, intelligent analytics, and detailed reporting."
      />

      <section className="border-b border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade} className="mb-16">
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Solutions</span>
            <h2 className="text-3xl font-medium uppercase mt-3">Secure every entry point</h2>
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
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Capabilities</span>
            <h2 className="text-3xl font-medium uppercase mt-3">Why Modern Edge</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {[
              { title: "Unified Platform", desc: "We integrate cameras, access control, intercoms, and alarms into a single management platform — eliminating silos and reducing the number of systems your team needs to learn and maintain." },
              { title: "Scalable Architecture", desc: "Whether you have one location or fifty, our systems scale horizontally. Add cameras, doors, and sites without ripping and replacing your existing infrastructure." },
              { title: "Compliance & Audit Trails", desc: "Every door access, visitor check-in, and camera event is logged with timestamps and user identity. Export-ready reports for regulatory audits, HR investigations, and insurance claims." },
              { title: "24/7 Monitoring & Support", desc: "Our NOC monitors your physical security systems around the clock. Receive alerts on unauthorized access attempts, camera tampering, and system health issues before they become problems." },
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
            <h2 className="text-3xl font-medium uppercase">Protect what matters most</h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">From a single office to a multi-site campus — we design, install, and manage security systems that keep your people and assets safe.</p>
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

export default AccessControlPage;
