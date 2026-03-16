import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Wifi, Shield, Monitor, Phone, Server, Lock, HeartPulse, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingMarketingMenu from "@/components/FloatingMarketingMenu";
import IndustryHero from "@/components/IndustryHero";
import heroImg from "@/assets/industry-hero-healthcare.jpg";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.6, ease: [0.2, 1, 0.3, 1] as const },
};

const services = [
  { icon: Shield, title: "HIPAA Compliance", desc: "End-to-end security architectures that satisfy HIPAA technical safeguards — encryption at rest and in transit, access controls, audit logging, and breach notification readiness." },
  { icon: Wifi, title: "Clinical-Grade WiFi", desc: "High-reliability wireless networks designed for medical devices, EHR workstations-on-wheels, nurse call systems, and real-time location services (RTLS) across clinical environments." },
  { icon: HeartPulse, title: "Medical Device Networking", desc: "Segmented networks for IoMT devices — patient monitors, infusion pumps, imaging systems — with proper isolation, monitoring, and FDA-compliant security controls." },
  { icon: Phone, title: "Healthcare Communications", desc: "Unified communications with clinical workflows — secure messaging, nurse call integration, overhead paging, and on-call scheduling systems." },
  { icon: Monitor, title: "Telehealth Infrastructure", desc: "Video conferencing platforms, patient kiosks, remote monitoring connectivity, and bandwidth optimization for high-quality virtual care delivery." },
  { icon: Server, title: "EHR & PACS Infrastructure", desc: "Network and server infrastructure optimized for Epic, Cerner, MEDITECH, and PACS imaging systems — with the performance and redundancy clinical applications demand." },
  { icon: Lock, title: "Zero Trust Security", desc: "Micro-segmentation, NAC, EDR, and continuous monitoring that protect PHI from ransomware, insider threats, and the expanding attack surface of connected medical devices." },
  { icon: FileCheck, title: "Disaster Recovery", desc: "HIPAA-compliant backup and recovery with immutable snapshots, geo-redundant storage, and tested failover procedures that meet RPO/RTO requirements for clinical systems." },
];

const HealthcarePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingMarketingMenu />

      <IndustryHero
        image={heroImg}
        title="Healthcare IT"
        description="HIPAA-compliant technology infrastructure that supports clinical workflows, protects patient data, and keeps care delivery running without interruption."
        secondaryCta={{ label: "View Case Study", to: "/case-study/school-wifi-redesign" }}
      />

      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.div {...fade} className="bg-primary/5 border border-primary/10 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-mono-display text-sm uppercase tracking-wider text-primary mb-2">Compliance</h3>
              <h2 className="text-2xl font-medium uppercase">Healthcare breaches cost $10.93M on average</h2>
              <p className="text-sm text-muted-foreground mt-2 max-w-lg">
                Healthcare is the #1 target for ransomware and the most expensive industry for data breaches — 13 years running. Our HIPAA security assessments and managed SOC services protect your organization before an attack happens.
              </p>
            </div>
            <Button variant="outline" size="lg" asChild className="shrink-0">
              <Link to="/quote">HIPAA Risk Assessment <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade} className="mb-16">
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Solutions</span>
            <h2 className="text-3xl font-medium uppercase mt-3">Technology for patient care</h2>
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
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Healthcare-Specific</span>
            <h2 className="text-3xl font-medium uppercase mt-3">Challenges we solve</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {[
              { title: "Medical Device Sprawl", desc: "The average hospital has 10-15 connected devices per bed — infusion pumps, monitors, ventilators — most running outdated firmware that can't be patched. We build segmented networks that isolate vulnerable devices, monitor for anomalous behavior, and prevent lateral movement without disrupting clinical workflows." },
              { title: "24/7 Uptime Requirements", desc: "Clinical systems cannot go down. A network outage in an ICU or OR is a patient safety event. We build redundant architectures with automatic failover, generator-backed UPS, dual ISP links, and 24/7 monitoring with 15-minute SLAs for critical system alerts." },
              { title: "Multi-Site & Acquisition Complexity", desc: "Health systems acquiring clinics, urgent cares, and specialty practices inherit a patchwork of incompatible IT systems. We standardize infrastructure across acquisitions — unified Active Directory, consistent security policies, and integrated EHR connectivity — without disrupting patient care during transition." },
              { title: "HIPAA Audit Readiness", desc: "OCR audits and breach investigations demand documented evidence of risk assessments, security controls, workforce training, and BAA management. We maintain continuous compliance documentation, conduct annual risk assessments, and prepare the evidence packages auditors require." },
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
              { value: "100+", label: "Healthcare Clients" },
              { value: "HIPAA", label: "Certified Team" },
              { value: "99.999%", label: "Uptime Delivered" },
              { value: "<15min", label: "Critical Response" },
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
            <h2 className="text-3xl font-medium uppercase">Protect your patients and your practice</h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">From HIPAA risk assessments to full managed IT — we help healthcare organizations build secure, compliant infrastructure.</p>
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

export default HealthcarePage;
