import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, FileCheck, DollarSign, Wifi, Calendar, ClipboardList, Building, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingMarketingMenu from "@/components/FloatingMarketingMenu";
import IndustryHero from "@/components/IndustryHero";
import ErateBudgetLookup from "@/components/ErateBudgetLookup";
import heroImg from "@/assets/industry-hero-erate.jpg";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.6, ease: [0.2, 1, 0.3, 1] as const },
};

const services = [
  { icon: FileCheck, title: "Form 470 & RFP", desc: "We prepare and file your Form 470, develop compliant RFPs, manage the competitive bidding process, and evaluate vendor responses." },
  { icon: DollarSign, title: "Funding Applications", desc: "Complete Form 471 preparation, filing, and PIA response management — maximizing your discount rate and funding approval likelihood." },
  { icon: ClipboardList, title: "Compliance Management", desc: "Document retention, CIPA compliance, competitive bidding documentation, and audit preparation to protect your funding." },
  { icon: Wifi, title: "Category 1 Services", desc: "Internet access, WAN, and telecommunications services — we identify eligible services and ensure proper cost allocation." },
  { icon: Building, title: "Category 2 Services", desc: "Internal connections, managed Wi-Fi, switches, routers, cabling, and UPS — maximizing your 5-year C2 budget allocation." },
  { icon: Calendar, title: "Timeline Management", desc: "E-Rate has strict filing windows and deadlines. We manage every date — from Form 470 posting to service delivery and invoicing." },
  { icon: Users, title: "Vendor Coordination", desc: "We coordinate between your district, service providers, and USAC to ensure smooth implementation and timely reimbursement." },
  { icon: GraduationCap, title: "Training & Support", desc: "Staff training on E-Rate compliance requirements, EPC portal navigation, and ongoing program guidance throughout the funding year." },
];

const ERateServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingMarketingMenu />

      <IndustryHero
        image={heroImg}
        title="E-Rate Vendor Services"
        description="Navigate the E-Rate program for schools and libraries — managing the entire process from application through implementation and reimbursement."
      />

      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.div {...fade} className="bg-primary/5 border border-primary/10 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-mono-display text-sm uppercase tracking-wider text-primary mb-2">E-Rate Program</h3>
              <h2 className="text-2xl font-medium uppercase">Up to 90% discount on eligible technology</h2>
              <p className="text-sm text-muted-foreground mt-2 max-w-lg">
                The E-Rate program provides $4+ billion annually to help schools and libraries get affordable internet and networking technology. We help you capture every dollar you're entitled to.
              </p>
            </div>
            <Button variant="outline" size="lg" asChild className="shrink-0">
              <Link to="/quote">E-Rate Consultation <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <ErateBudgetLookup />

      <section className="border-b border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade} className="mb-16">
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Services</span>
            <h2 className="text-3xl font-medium uppercase mt-3">Full-cycle E-Rate support</h2>
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

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div {...fade}>
            <h2 className="text-3xl font-medium uppercase">Maximize your E-Rate funding</h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">From initial eligibility assessment to final reimbursement — we handle the complexity so you can focus on your students and patrons.</p>
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

export default ERateServicesPage;
