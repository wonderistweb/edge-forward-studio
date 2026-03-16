import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Server, Phone, Search, Cloud, Wifi, HardDrive, GraduationCap, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Access Control & Cameras",
    description: "Advanced access control systems and comprehensive surveillance solutions with real-time monitoring and detailed reporting.",
    href: "/services/access-control",
  },
  {
    icon: Server,
    title: "Hardware & Software",
    description: "Industry-leading hardware solutions and enterprise software delivering optimal performance, reliability, and value.",
    href: "/services/hardware-software",
  },
  {
    icon: Phone,
    title: "Voice Services",
    description: "Modern voice solutions from traditional PBX to cloud-based VoIP platforms that integrate with your business operations.",
    href: "/services/voice-services",
  },
  {
    icon: Search,
    title: "IT Audits",
    description: "Comprehensive audits identifying security vulnerabilities, compliance gaps, and optimization opportunities.",
    href: "/services/it-audits",
  },
  {
    icon: Cloud,
    title: "Cloud Computing & Migrations",
    description: "Expert migration services across AWS, Azure, and Google Cloud with comprehensive strategy and ongoing management.",
    href: "/services/cloud-migrations",
  },
  {
    icon: Wifi,
    title: "Wiring & Wireless Networks",
    description: "Robust network infrastructure from structured cabling to enterprise-grade wireless solutions.",
    href: "/services/wireless-networks",
  },
  {
    icon: HardDrive,
    title: "Business Continuity & DR",
    description: "Comprehensive disaster recovery solutions with customized strategies and rapid recovery systems.",
    href: "/services/business-continuity",
  },
  {
    icon: GraduationCap,
    title: "E-Rate Vendor Services",
    description: "Navigate the E-rate program for schools and libraries, managing the entire process from application to implementation.",
    href: "/services/e-rate",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 relative section-tinted">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-sm font-mono-display text-primary uppercase tracking-wider">Capabilities</span>
          <h2 className="text-3xl md:text-4xl font-medium uppercase mt-3 max-w-2xl">
            Technology solutions engineered for certainty
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const Icon = service.icon;

  return (
    <Link to={service.href}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05, duration: 0.5 }}
        className="group bg-card p-8 border-t-2 border-t-transparent hover:border-t-primary transition-all duration-250 snap-curve relative hover:bg-card-hover h-full"
      >
        <div className="flex items-start justify-between mb-6">
          <Icon size={24} strokeWidth={1.5} className="text-muted-foreground group-hover:text-primary transition-colors duration-250" />
          <ArrowUpRight size={16} strokeWidth={1.5} className="text-muted-foreground/0 group-hover:text-primary group-hover:rotate-45 transition-all duration-250" />
        </div>
        <h3 className="text-base font-mono-display font-medium uppercase tracking-tight mb-3">
          {service.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {service.description}
        </p>
      </motion.div>
    </Link>
  );
};

export default ServicesSection;
