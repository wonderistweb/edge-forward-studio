import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, PhoneCall, Headphones, Radio, Cloud, Settings, Globe, Voicemail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingMarketingMenu from "@/components/FloatingMarketingMenu";
import IndustryHero from "@/components/IndustryHero";
import heroImg from "@/assets/solution-voice.jpg";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.6, ease: [0.2, 1, 0.3, 1] as const },
};

const services = [
  { icon: Cloud, title: "Cloud VoIP", desc: "Hosted PBX solutions with auto-attendants, call queues, ring groups, and mobile apps — no on-premise hardware to maintain." },
  { icon: Phone, title: "On-Premise PBX", desc: "Traditional and IP-PBX systems for organizations requiring full control over their voice infrastructure and call routing." },
  { icon: PhoneCall, title: "SIP Trunking", desc: "Replace expensive PRIs and analog lines with SIP trunks — reducing costs 40-60% while improving call quality and redundancy." },
  { icon: Headphones, title: "Contact Center", desc: "Omnichannel contact center platforms with ACD, IVR, call recording, quality monitoring, and workforce management." },
  { icon: Radio, title: "Paging & Intercom", desc: "Overhead paging, door stations, and intercom systems integrated with your phone system for unified communications." },
  { icon: Settings, title: "Unified Communications", desc: "Voice, video, messaging, and presence in a single platform — Microsoft Teams, 3CX, and Zoom Phone certified deployments." },
  { icon: Globe, title: "Multi-Site Voice", desc: "Centralized or distributed voice architectures connecting multiple locations with shared dial plans, call routing, and failover." },
  { icon: Voicemail, title: "Voicemail & Recording", desc: "Visual voicemail, voicemail-to-email, call recording with retention policies, and compliance recording for regulated industries." },
];

const VoiceServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingMarketingMenu />

      <IndustryHero
        image={heroImg}
        title="Voice Services"
        description="Modern cloud-based VoIP platforms and unified communications solutions that integrate seamlessly with your business operations."
      />

      <section className="border-b border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade} className="mb-16">
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Solutions</span>
            <h2 className="text-3xl font-medium uppercase mt-3">Every call, crystal clear</h2>
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
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Expertise</span>
            <h2 className="text-3xl font-medium uppercase mt-3">Voice done right</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {[
              { title: "Network Readiness", desc: "VoIP quality depends on your network. We assess bandwidth, QoS configuration, jitter, and latency before deployment — ensuring crystal-clear call quality from day one." },
              { title: "Number Porting", desc: "We manage the entire porting process — LOAs, CSRs, and carrier coordination — so your business numbers transfer seamlessly without downtime or lost calls." },
              { title: "Integration", desc: "Connect your phone system to CRMs, helpdesks, and EHR systems. Click-to-dial, screen pops, and automatic call logging eliminate manual data entry." },
              { title: "Training & Adoption", desc: "New phone systems fail when users don't adopt them. We provide hands-on training, quick reference guides, and ongoing support to ensure your team uses every feature." },
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
            <h2 className="text-3xl font-medium uppercase">Modernize your communications</h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">Whether you need a simple cloud phone system or a complex multi-site UC deployment — we design, implement, and support it all.</p>
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

export default VoiceServicesPage;
