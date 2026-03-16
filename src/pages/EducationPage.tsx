import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Wifi, Shield, Monitor, Phone, Camera, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/industry-education.jpg";

const services = [
  { icon: Wifi, title: "Campus-Wide WiFi", desc: "Enterprise-grade wireless covering every classroom, gymnasium, and outdoor space with capacity for 1:1 device programs." },
  { icon: Shield, title: "CIPA-Compliant Filtering", desc: "Content filtering and firewall solutions that meet Children's Internet Protection Act requirements for E-Rate eligibility." },
  { icon: Monitor, title: "Interactive Classrooms", desc: "Interactive displays, digital signage, and AV systems that transform learning environments." },
  { icon: Phone, title: "School VoIP Systems", desc: "District-wide phone systems with emergency paging, intercom integration, and automated notifications." },
  { icon: Camera, title: "Campus Security", desc: "IP camera systems, access control, and visitor management that keep students and staff safe." },
  { icon: Server, title: "Network Infrastructure", desc: "Structured cabling, switching, and server infrastructure designed for the demands of modern digital learning." },
];

const EducationPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-16">
        <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <img src={heroImg} alt="K-12 Education Technology" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-mono-display text-primary uppercase tracking-wider">Industries</span>
              <h1 className="text-4xl md:text-6xl font-medium uppercase mt-2">Education (K-12)</h1>
              <p className="text-muted-foreground mt-4 max-w-2xl text-lg leading-relaxed">
                Technology infrastructure designed for learning. From E-Rate funded networks to interactive classrooms, we help school districts build the digital foundation students deserve.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* E-Rate CTA */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary/10 border border-primary/20 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div>
              <span className="text-sm font-mono-display text-primary uppercase tracking-wider">Federal Funding</span>
              <h2 className="text-2xl md:text-3xl font-medium uppercase mt-2">E-Rate Program</h2>
              <p className="text-muted-foreground mt-2 max-w-xl">
                Get up to 90% federal funding on eligible telecommunications and networking equipment. We handle the entire application process.
              </p>
            </div>
            <Button variant="hero" size="lg" asChild>
              <Link to="/e-rate">
                Learn About E-Rate
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-sm font-mono-display text-primary uppercase tracking-wider">Solutions</span>
            <h2 className="text-3xl md:text-4xl font-medium uppercase mt-3">Built for the classroom</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card p-8 group hover:bg-secondary transition-colors duration-250"
              >
                <service.icon className="text-primary mb-4" size={24} />
                <h3 className="font-mono-display text-sm uppercase tracking-wider mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {[
              { value: "150+", label: "Schools Served" },
              { value: "$12M+", label: "E-Rate Funding Secured" },
              { value: "99.99%", label: "Network Uptime" },
              { value: "50K+", label: "Students Connected" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card p-8 text-center">
                <div className="text-3xl font-mono-display font-semibold text-primary tabular-nums">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-medium uppercase">Ready to modernize your district?</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Let us conduct a free infrastructure assessment and identify E-Rate funding opportunities for your schools.
          </p>
          <Button variant="hero" size="lg" className="mt-8" asChild>
            <Link to="/quote">
              Get a Free Assessment
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EducationPage;
