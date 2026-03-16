import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Server, Phone, Search, Cloud, Wifi, HardDrive, GraduationCap, MapPin } from "lucide-react";
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

export interface CityPageData {
  heroImage: string;
  city: string;
  region: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubtext: string;
  introTitle: string;
  introText: string;
  challenges: { title: string; desc: string }[];
  stats: { value: string; label: string }[];
  nearbyAreas: string[];
}

const services = [
  { icon: Shield, title: "Access Control & Cameras", desc: "Enterprise surveillance and access control systems with real-time monitoring and compliance-ready reporting.", href: "/services/access-control" },
  { icon: Server, title: "Hardware & Software", desc: "Business-class hardware procurement, deployment, and lifecycle management from authorized partners.", href: "/services/hardware-software" },
  { icon: Phone, title: "Voice Services", desc: "Cloud VoIP, on-premise PBX, SIP trunking, and unified communications tailored to your operations.", href: "/services/voice-services" },
  { icon: Search, title: "IT Audits", desc: "Comprehensive security, compliance, and performance audits with prioritized remediation roadmaps.", href: "/services/it-audits" },
  { icon: Cloud, title: "Cloud & Migrations", desc: "AWS, Azure, and Google Cloud strategy, migration, and ongoing optimization with zero-downtime cutovers.", href: "/services/cloud-migrations" },
  { icon: Wifi, title: "Wiring & Wireless", desc: "Structured cabling, WiFi 6E deployments, site surveys, and network design built to TIA/EIA standards.", href: "/services/wireless-networks" },
  { icon: HardDrive, title: "Business Continuity", desc: "Backup, disaster recovery, and failover systems with tested recovery procedures and immutable snapshots.", href: "/services/business-continuity" },
  { icon: GraduationCap, title: "E-Rate Services", desc: "Full-cycle E-Rate program management for schools and libraries — from Form 470 to reimbursement.", href: "/services/e-rate" },
];

const CityPage = ({ data }: { data: CityPageData }) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingMarketingMenu />

      {/* Hero */}
      <section className="relative pt-32 pb-24 border-b border-border overflow-hidden">
        {/* Parallax city image */}
        <div className="absolute inset-0 -top-20 -bottom-20">
          <img
            src={data.heroImage}
            alt={`${data.city} Wisconsin cityscape`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80" />
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
        </div>
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div {...fade}>
            <div className="flex items-center gap-2 mb-6">
              <MapPin size={16} className="text-primary" />
              <span className="text-sm font-mono-display text-primary uppercase tracking-wider">{data.region}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium uppercase leading-[1.05] mb-6 max-w-4xl">
              {data.heroHeadline}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mb-10">
              {data.heroSubtext}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/quote">Get a Free Assessment <ArrowRight className="ml-2" size={16} /></Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="border-b border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div {...fade}>
              <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Local Expertise</span>
              <h2 className="text-3xl font-medium uppercase mt-3">{data.introTitle}</h2>
            </motion.div>
            <motion.div {...fade}>
              <p className="text-muted-foreground leading-relaxed text-lg">{data.introText}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="border-b border-border py-24 section-tinted">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade} className="mb-16">
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Solutions</span>
            <h2 className="text-3xl font-medium uppercase mt-3">IT services in {data.city}</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {services.map((svc) => (
              <Link to={svc.href} key={svc.title}>
                <motion.div className="bg-card p-6 h-full group hover:bg-card-hover transition-colors duration-250" {...fade}>
                  <svc.icon size={22} className="text-primary mb-4" />
                  <h3 className="text-sm font-medium uppercase mb-2 group-hover:text-primary transition-colors">{svc.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{svc.desc}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local Challenges */}
      <section className="border-b border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade} className="mb-16">
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">{data.city} Businesses</span>
            <h2 className="text-3xl font-medium uppercase mt-3">Challenges we solve</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {data.challenges.map((c) => (
              <motion.div key={c.title} className="bg-card p-8" {...fade}>
                <h3 className="font-mono-display text-sm uppercase tracking-wider mb-3">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {data.stats.map((stat) => (
              <motion.div key={stat.label} className="py-10 px-6 text-center" {...fade}>
                <div className="text-3xl font-mono-display font-semibold text-primary">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="border-b border-border py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade}>
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider mb-4 block">Also Serving</span>
            <div className="flex flex-wrap gap-3">
              {data.nearbyAreas.map((area) => (
                <span key={area} className="text-sm text-muted-foreground bg-card border border-border px-4 py-2">
                  {area}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div {...fade}>
            <h2 className="text-3xl font-medium uppercase">Ready to modernize your {data.city} business?</h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">From IT audits to full managed services — Modern Edge Technology is your local technology partner in {data.region}.</p>
            <Button variant="hero" size="lg" className="mt-8" asChild>
              <Link to="/quote">Get Started <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CityPage;
