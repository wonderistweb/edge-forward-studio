import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Wifi, Shield, Monitor, Phone, Wrench, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/industry-custom.jpg";

const services = [
  { icon: Wrench, title: "Needs Analysis & Discovery", desc: "We start by understanding your unique operational challenges, compliance requirements, and growth objectives before recommending any technology." },
  { icon: Settings, title: "Custom Architecture Design", desc: "Bespoke network and infrastructure designs built from the ground up around your specific workflows and requirements." },
  { icon: Wifi, title: "Specialized Connectivity", desc: "Solutions for unique environments: warehouses, outdoor venues, multi-building campuses, manufacturing floors, and retrofit installations." },
  { icon: Shield, title: "Industry-Specific Compliance", desc: "HIPAA, CMMC, SOX, ITAR, and other regulatory frameworks addressed through tailored security architectures." },
  { icon: Phone, title: "Integrated Communications", desc: "Unified voice, video, and messaging platforms designed around your team's collaboration patterns." },
  { icon: Monitor, title: "Ongoing Managed Support", desc: "Custom SLAs, dedicated account teams, and flexible support models that match your operational needs." },
];

const CustomPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-16">
        <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <img src={heroImg} alt="Custom IT Solutions" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-sm font-mono-display text-primary uppercase tracking-wider">Industries</span>
              <h1 className="text-4xl md:text-6xl font-medium uppercase mt-2">Custom Solutions</h1>
              <p className="text-muted-foreground mt-4 max-w-2xl text-lg leading-relaxed">
                No two businesses are identical. We design and implement technology solutions tailored to your specific industry, environment, and operational requirements.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <span className="text-sm font-mono-display text-primary uppercase tracking-wider">Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-medium uppercase mt-3">Tailored to your business</h2>
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

      {/* Industries served */}
      <section className="border-t border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <span className="text-sm font-mono-display text-primary uppercase tracking-wider">Experience</span>
            <h2 className="text-3xl md:text-4xl font-medium uppercase mt-3">Industries we've served</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {["Healthcare", "Manufacturing", "Retail", "Government", "Non-Profit", "Legal", "Financial Services", "Real Estate"].map((industry) => (
              <div key={industry} className="bg-card p-6 text-center">
                <span className="font-mono-display text-sm uppercase tracking-wider text-muted-foreground">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-medium uppercase">Let's build your solution</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Tell us about your challenges and we'll design a technology solution that fits your business like a glove.</p>
          <Button variant="hero" size="lg" className="mt-8" asChild>
            <Link to="/quote">Start a Conversation<ArrowRight className="ml-2" size={16} /></Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomPage;
