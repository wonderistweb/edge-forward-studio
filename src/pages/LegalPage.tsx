import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Wifi, Shield, Monitor, Phone, Lock, Server, FileText, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingMarketingMenu from "@/components/FloatingMarketingMenu";
import IndustryHero from "@/components/IndustryHero";
import heroImg from "@/assets/industry-hero-legal.jpg";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.6, ease: [0.2, 1, 0.3, 1] as const },
};

const services = [
  { icon: Lock, title: "Client Confidentiality", desc: "Encryption, DLP policies, ethical wall controls, and access management that protect attorney-client privilege and satisfy bar association ethical obligations." },
  { icon: Shield, title: "Cybersecurity & Insurance", desc: "Security architectures that meet cyber insurance underwriting requirements — MFA, EDR, email filtering, and incident response plans that keep premiums down and coverage intact." },
  { icon: FileText, title: "Document Management", desc: "Network infrastructure optimized for iManage, NetDocuments, and SharePoint DMS platforms — with high-speed scanning, OCR, and secure external collaboration." },
  { icon: Phone, title: "Legal Communications", desc: "Unified communications with call recording, voicemail transcription, presence indicators, and mobile integration for attorneys who work everywhere." },
  { icon: Monitor, title: "Courtroom & Conference AV", desc: "Trial presentation systems, video conferencing for remote depositions, conference room displays, and evidence presentation tools for litigation teams." },
  { icon: Server, title: "Legal Cloud & Backup", desc: "Cloud migration for practice management, time & billing, and document management — with immutable backups and retention policies that meet legal hold obligations." },
  { icon: Wifi, title: "Secure Guest & BYOD Access", desc: "WiFi networks with proper segmentation for visiting clients, co-counsel, and expert witnesses — without exposing firm systems to unmanaged devices." },
  { icon: Scale, title: "eDiscovery Infrastructure", desc: "Network and storage infrastructure that supports large-scale eDiscovery processing, review platforms, and secure data transfers for litigation holds." },
];

const LegalPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingMarketingMenu />

      <IndustryHero
        image={heroImg}
        title="Legal IT"
        description="Technology infrastructure that protects attorney-client privilege, supports litigation workflows, and meets the security demands of modern legal practice."
        
      />

      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.div {...fade} className="bg-primary/5 border border-primary/10 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-mono-display text-sm uppercase tracking-wider text-primary mb-2">Ethical Obligation</h3>
              <h2 className="text-2xl font-medium uppercase">29% of law firms have experienced a breach</h2>
              <p className="text-sm text-muted-foreground mt-2 max-w-lg">
                ABA Model Rule 1.6 requires attorneys to make "reasonable efforts" to prevent unauthorized access to client data. Law firms are high-value targets for hackers. Our security assessments and managed services satisfy your ethical and insurance obligations.
              </p>
            </div>
            <Button variant="outline" size="lg" asChild className="shrink-0">
              <Link to="/quote">Security Assessment <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade} className="mb-16">
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Solutions</span>
            <h2 className="text-3xl font-medium uppercase mt-3">Technology for legal practice</h2>
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
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Legal-Specific</span>
            <h2 className="text-3xl font-medium uppercase mt-3">Challenges we solve</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {[
              { title: "Attorney-Client Privilege Protection", desc: "A breach of client data isn't just a security incident — it's a potential malpractice claim and bar complaint. We implement DLP policies, email encryption, ethical walls between practice groups, and access controls that ensure privileged communications stay privileged." },
              { title: "Cyber Insurance Requirements", desc: "Cyber insurance underwriters now require MFA, EDR, email filtering, patch management, and documented incident response plans. Firms that can't demonstrate these controls face coverage denials or astronomical premiums. We build the security stack insurers demand." },
              { title: "Remote & Hybrid Attorney Workflows", desc: "Partners working from home, associates in court, and paralegals across multiple offices need seamless access to DMS, time & billing, and practice management systems. We build secure remote access with ZTNA that works as smoothly as sitting in the office." },
              { title: "eDiscovery & Litigation Hold", desc: "Large litigation matters generate terabytes of data requiring processing, review, and secure transfer. Legal holds demand preservation of specific data indefinitely. We build storage and network infrastructure that handles massive data volumes with proper chain of custody documentation." },
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
              { value: "80+", label: "Law Firms Served" },
              { value: "Am200", label: "Firm Experience" },
              { value: "99.99%", label: "System Uptime" },
              { value: "SOC 2", label: "Compliant Services" },
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
            <h2 className="text-3xl font-medium uppercase">Protect your practice and your clients</h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">From security assessments to full managed IT — we help law firms build infrastructure that satisfies ethical obligations and insurance requirements.</p>
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

export default LegalPage;
