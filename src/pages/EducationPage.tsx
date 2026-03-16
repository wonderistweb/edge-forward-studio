import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Wifi, Shield, Monitor, Phone, Camera, Server, Laptop, Radio } from "lucide-react";
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
  { icon: Wifi, title: "Campus-Wide WiFi", desc: "Enterprise-grade wireless covering every classroom, gymnasium, cafeteria, and outdoor space — engineered for 1:1 device programs with seamless roaming and band steering." },
  { icon: Shield, title: "CIPA-Compliant Filtering", desc: "Content filtering and firewall solutions that meet Children's Internet Protection Act requirements for E-Rate eligibility — with granular policies per grade level and staff." },
  { icon: Monitor, title: "Interactive Classrooms", desc: "Interactive displays, digital signage, document cameras, and AV systems that transform learning environments and support hybrid instruction." },
  { icon: Phone, title: "School VoIP & Paging", desc: "District-wide phone systems with emergency paging, classroom intercoms, automated parent notifications, and 911 location compliance." },
  { icon: Camera, title: "Campus Security", desc: "IP camera systems, door access control, visitor management kiosks, and panic button integration that keep students and staff safe." },
  { icon: Server, title: "Network Infrastructure", desc: "Structured cabling, 10G switching, server rooms, and UPS systems designed for the demands of modern digital learning environments." },
  { icon: Laptop, title: "Device Management", desc: "MDM solutions for Chromebooks, iPads, and Windows fleets — with automated enrollment, app deployment, content filtering, and asset tracking." },
  { icon: Radio, title: "Emergency Communications", desc: "Mass notification systems, two-way radio networks, and lockdown integration that connect administrators, SROs, and first responders instantly." },
];

const EducationPage = () => {
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
              K-12 Education Technology
            </h1>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
              Technology infrastructure designed for learning. From E-Rate funded networks to interactive classrooms, we help school districts build the digital foundation students deserve.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button variant="hero" size="lg" asChild>
                <Link to="/quote">Get a Free Assessment <ArrowRight className="ml-2" size={16} /></Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/e-rate">E-Rate Funding <ArrowRight className="ml-2" size={16} /></Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* E-Rate CTA */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.div {...fade} className="bg-primary/5 border border-primary/10 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-mono-display text-sm uppercase tracking-wider text-primary mb-2">E-Rate Eligible</h3>
              <h2 className="text-2xl font-medium uppercase">Schools qualify for 20-90% discounts</h2>
              <p className="text-sm text-muted-foreground mt-2 max-w-lg">
                K-12 schools are eligible for E-Rate Category 1 (internet & telecom) and Category 2 (internal connections) funding at $167/student. We handle the entire application process from 470 filing to BEAR reimbursement.
              </p>
            </div>
            <Button variant="outline" size="lg" asChild className="shrink-0">
              <Link to="/e-rate">Learn About E-Rate <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade} className="mb-16">
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Solutions</span>
            <h2 className="text-3xl font-medium uppercase mt-3">Built for the classroom</h2>
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
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Education-Specific</span>
            <h2 className="text-3xl font-medium uppercase mt-3">Challenges we solve</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-px bg-border">
            {[
              {
                title: "1:1 Device Density",
                desc: "When every student has a Chromebook and every teacher has a laptop, consumer-grade WiFi collapses. We design high-density wireless with proper channel planning, AP placement studies, and load balancing — so 35 devices per classroom work flawlessly.",
              },
              {
                title: "Testing Day Readiness",
                desc: "State online assessments like SBAC, PARCC, and MAP testing require guaranteed bandwidth and zero downtime. We build dedicated testing VLANs with QoS priority and conduct pre-assessment network validation every spring.",
              },
              {
                title: "Multi-Building Campuses",
                desc: "School districts with dozens of buildings need unified management, consistent user experiences, and centralized visibility. We deploy SD-WAN and cloud-managed networking that gives your IT team a single pane of glass across every site.",
              },
              {
                title: "Shrinking IT Budgets",
                desc: "Districts are asked to do more with less every year. We maximize E-Rate Category 2 funding ($167/student over 5 years), structure MIBS contracts to shift CapEx to OpEx, and recommend solutions that deliver the best value — not the highest margin.",
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
              { value: "150+", label: "Schools Served" },
              { value: "$12M+", label: "E-Rate Funding Secured" },
              { value: "99.99%", label: "Network Uptime" },
              { value: "50K+", label: "Students Connected" },
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
            <h2 className="text-3xl font-medium uppercase">Ready to modernize your district?</h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              From E-Rate applications to full network deployments — we help school districts build infrastructure that supports every student.
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

export default EducationPage;
