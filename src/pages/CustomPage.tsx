import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Wifi, Shield, Monitor, Phone, Wrench, Settings, Factory, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingMarketingMenu from "@/components/FloatingMarketingMenu";
import IndustryHero from "@/components/IndustryHero";
import heroImg from "@/assets/industry-hero-custom.jpg";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.6, ease: [0.2, 1, 0.3, 1] as const },
};

const services = [
  { icon: Wrench, title: "Needs Analysis & Discovery", desc: "We start by understanding your unique operational challenges, compliance requirements, growth objectives, and budget constraints before recommending any technology." },
  { icon: Settings, title: "Custom Architecture Design", desc: "Bespoke network and infrastructure designs built from the ground up around your specific workflows, physical environments, and integration requirements." },
  { icon: Wifi, title: "Specialized Connectivity", desc: "Solutions for unique environments: warehouses with steel racking, outdoor venues, multi-building campuses, manufacturing floors, cold storage, and retrofit installations." },
  { icon: Shield, title: "Industry-Specific Compliance", desc: "HIPAA for healthcare, CMMC for defense contractors, SOX for finance, ITAR for aerospace, PCI for retail — tailored security architectures for every regulatory framework." },
  { icon: Phone, title: "Integrated Communications", desc: "Unified voice, video, and messaging platforms designed around your team's collaboration patterns — from cloud VoIP to full Microsoft Teams deployments." },
  { icon: Monitor, title: "Ongoing Managed Support", desc: "Custom SLAs, dedicated account teams, quarterly business reviews, and flexible support models that match your operational rhythm and budget." },
  { icon: Factory, title: "OT/IT Convergence", desc: "Bridging operational technology (SCADA, PLCs, building automation) with IT networks — with proper segmentation, monitoring, and security between the two worlds." },
  { icon: Stethoscope, title: "Technology Health Checks", desc: "Comprehensive assessments of your current infrastructure — network performance, security posture, lifecycle status, and recommendations prioritized by risk and ROI." },
];

const CustomPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingMarketingMenu />

      <IndustryHero
        image={heroImg}
        title="Custom IT Solutions"
        description="No two businesses are identical. We design and implement technology solutions tailored to your specific industry, environment, and operational requirements — not off-the-shelf packages."
        primaryCta={{ label: "Start a Conversation", to: "/quote" }}
        secondaryCta={{ label: "View Case Study", to: "/case-study/school-wifi-redesign" }}
      />

      {/* Approach Banner */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.div {...fade} className="bg-primary/5 border border-primary/10 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-mono-display text-sm uppercase tracking-wider text-primary mb-2">Our Process</h3>
              <h2 className="text-2xl font-medium uppercase">We don't sell boxes. We solve problems.</h2>
              <p className="text-sm text-muted-foreground mt-2 max-w-lg">
                Every engagement starts with a deep-dive discovery — understanding your workflows, pain points, compliance obligations, and growth plans. Only then do we design a solution. If we're not the right fit, we'll tell you.
              </p>
            </div>
            <Button variant="outline" size="lg" asChild className="shrink-0">
              <Link to="/quote">Book a Discovery Call <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade} className="mb-16">
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Our Approach</span>
            <h2 className="text-3xl font-medium uppercase mt-3">Tailored to your business</h2>
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
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Real-World</span>
            <h2 className="text-3xl font-medium uppercase mt-3">Challenges we solve</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-px bg-border">
            {[
              {
                title: "Harsh & Unusual Environments",
                desc: "Warehouses with 40-foot steel racks, outdoor amphitheaters, refrigerated facilities, manufacturing floors with electromagnetic interference — standard IT deployments fail in these environments. We conduct RF site surveys and design solutions that actually work where you work.",
              },
              {
                title: "Vendor Lock-In & Legacy Debt",
                desc: "Many organizations are trapped with legacy vendors, proprietary systems, and contracts that don't serve them. We audit your current stack, identify lock-in risks, and build migration plans that move you to open, flexible architectures — at your pace.",
              },
              {
                title: "Regulatory Complexity",
                desc: "When you operate across multiple regulatory frameworks — HIPAA and SOX, or CMMC and ITAR — compliance becomes exponentially complex. We map overlapping controls, eliminate redundant spending, and build unified security architectures that satisfy multiple auditors.",
              },
              {
                title: "Scaling Without a Playbook",
                desc: "Rapid growth breaks IT infrastructure that wasn't designed to scale. New locations, acquisitions, remote workers — each adds complexity. We build scalable architectures with documented standards, so your 50th site deploys as smoothly as your 5th.",
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

      {/* Industries Served */}
      <section className="border-b border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade} className="mb-12">
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Experience</span>
            <h2 className="text-3xl font-medium uppercase mt-3">Industries we've served</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {[
              { name: "Healthcare", path: "/industries/healthcare" },
              { name: "Manufacturing", path: "/industries/manufacturing" },
              { name: "Retail", path: "/industries/retail" },
              { name: "Government", path: "/industries/government" },
              { name: "Non-Profit", path: "/industries/non-profit" },
              { name: "Legal", path: "/industries/legal" },
              { name: "Financial Services", path: "/industries/financial-services" },
              { name: "Real Estate", path: "/industries/real-estate" },
            ].map((industry) => (
              <motion.div key={industry.name} className="bg-card p-6 text-center" {...fade}>
                <Link to={industry.path} className="font-mono-display text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
                  {industry.name}
                </Link>
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
              { value: "15+", label: "Industries Served" },
              { value: "98%", label: "Client Retention" },
              { value: "72hr", label: "Avg. Proposal Time" },
              { value: "100%", label: "Custom Designs" },
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
            <h2 className="text-3xl font-medium uppercase">Let's build your solution</h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              Tell us about your challenges and we'll design a technology solution that fits your business like a glove — no cookie-cutter packages.
            </p>
            <Button variant="hero" size="lg" className="mt-8" asChild>
              <Link to="/quote">Start a Conversation <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomPage;
