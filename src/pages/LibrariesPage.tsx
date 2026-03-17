import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Wifi, Shield, Monitor, BookOpen, Camera, Server, Users, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingMarketingMenu from "@/components/FloatingMarketingMenu";
import IndustryHero from "@/components/IndustryHero";
import LibraryBudgetLookup from "@/components/LibraryBudgetLookup";
import heroImg from "@/assets/industry-hero-libraries.jpg";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.6, ease: [0.2, 1, 0.3, 1] as const },
};

const services = [
  { icon: Wifi, title: "Public WiFi Networks", desc: "High-capacity wireless designed for hundreds of simultaneous patrons — with bandwidth management, content filtering, and separate staff/public networks." },
  { icon: Shield, title: "CIPA-Compliant Filtering", desc: "Content filtering that meets Children's Internet Protection Act requirements — mandatory for E-Rate eligibility. Flexible policies for adult vs. children's areas." },
  { icon: Monitor, title: "Public Computer Labs", desc: "Managed workstation deployments with session management, print integration, reservation systems, and automated security resets between users." },
  { icon: BookOpen, title: "Digital Resource Access", desc: "Network infrastructure optimized for e-book platforms, digital archives, online databases, and streaming media services." },
  { icon: Camera, title: "Security & Access Control", desc: "IP camera systems, door access control, and patron counting systems that protect staff, collections, and visitors." },
  { icon: Server, title: "Network Infrastructure", desc: "Structured cabling, managed switching, and server infrastructure built for the unique demands of public-access environments." },
  { icon: Users, title: "Meeting Room Technology", desc: "AV systems, video conferencing, interactive displays, and booking systems for community meeting rooms and maker spaces." },
  { icon: Printer, title: "Print Management", desc: "Networked printing with pay-per-print, mobile printing, and centralized management across branches." },
];

const LibrariesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingMarketingMenu />

      <IndustryHero
        image={heroImg}
        title="Library Technology Solutions"
        description="Modern libraries are digital hubs — not just book repositories. We build the technology infrastructure that supports public computing, digital literacy programs, maker spaces, and community engagement."
        primaryCta={{ label: "Check Your E-Rate Budget", to: "#budget-lookup" }}
        secondaryCta={{ label: "E-Rate Funding", to: "/e-rate" }}
      />

      {/* E-Rate CTA */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.div {...fade} className="bg-primary/5 border border-primary/10 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-mono-display text-sm uppercase tracking-wider text-primary mb-2">E-Rate Eligible</h3>
              <h2 className="text-2xl font-medium uppercase">Libraries qualify for 20-90% discounts</h2>
              <p className="text-sm text-muted-foreground mt-2 max-w-lg">
                Public libraries are eligible for E-Rate Category 1 (internet) and Category 2 (internal connections) funding at $2.39/sq ft. We handle the entire application process.
              </p>
            </div>
            <Button variant="outline" size="lg" asChild className="shrink-0">
              <Link to="/e-rate">Learn About E-Rate <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Library E-Rate Budget Lookup */}
      <LibraryBudgetLookup />

      {/* Services */}
      <section className="border-b border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade} className="mb-16">
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Solutions</span>
            <h2 className="text-3xl font-medium uppercase mt-3">Technology for modern libraries</h2>
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

      {/* Unique Challenges */}
      <section className="border-b border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade} className="mb-16">
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Library-Specific</span>
            <h2 className="text-3xl font-medium uppercase mt-3">Challenges we solve</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-px bg-border">
            {[
              {
                title: "Public-Access Security",
                desc: "Libraries face unique security challenges — public computers need session isolation, automatic resets, and USB lockdowns while remaining accessible and user-friendly. We deploy managed workstation solutions that protect your network without creating barriers for patrons.",
              },
              {
                title: "Bandwidth for Everyone",
                desc: "When 200 patrons are streaming, downloading, and video-conferencing simultaneously, consumer-grade networks collapse. We design bandwidth management with QoS policies that ensure fair access — no single user can monopolize the connection.",
              },
              {
                title: "Multi-Branch Consistency",
                desc: "Library systems with multiple branches need consistent technology experiences, centralized management, and unified reporting. We build SD-WAN architectures that connect branches with a single management plane.",
              },
              {
                title: "Budget Constraints",
                desc: "Libraries operate on tight budgets. We maximize E-Rate funding, structure MIBS contracts, and recommend solutions that deliver the best value per dollar — not the highest-margin equipment.",
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
              { value: "50+", label: "Libraries Served" },
              { value: "99.99%", label: "Network Uptime" },
              { value: "E-Rate", label: "Funding Experts" },
              { value: "24/7", label: "Monitoring" },
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
            <h2 className="text-3xl font-medium uppercase">Your library deserves better technology</h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              From E-Rate applications to full network deployments — we help libraries build infrastructure that serves their communities.
            </p>
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

export default LibrariesPage;
