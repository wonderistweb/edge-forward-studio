import { motion } from "framer-motion";

import logo3cx from "@/assets/partners/3cx.png";
import logoLenovo from "@/assets/partners/lenovo.png";
import logoRhombus from "@/assets/partners/rhombus.png";
import logoDell from "@/assets/partners/dell.png";
import logoVoip from "@/assets/partners/voip-supply.png";
import logoFortinet from "@/assets/partners/fortinet.png";
import logoVertiv from "@/assets/partners/vertiv.png";

const partners = [
  { name: "3CX", logo: logo3cx },
  { name: "Lenovo", logo: logoLenovo },
  { name: "Rhombus", logo: logoRhombus },
  { name: "Dell", logo: logoDell },
  { name: "VoIP Supply", logo: logoVoip },
  { name: "Fortinet", logo: logoFortinet },
  { name: "Vertiv", logo: logoVertiv },
];

const PartnershipsSection = () => {
  return (
    <section id="partnerships" className="py-32 border-t border-border section-tinted">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-sm font-mono-display text-primary uppercase tracking-wider">Partnerships</span>
          <h2 className="text-3xl md:text-4xl font-medium uppercase mt-3 max-w-2xl">
            Industry-leading technology partners
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl leading-relaxed">
            We collaborate with cutting-edge technology providers to deliver customized products, professional support, and seamless implementation.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-px bg-border">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              className="bg-card hover:bg-card-hover flex items-center justify-center p-6 transition-colors duration-250 snap-curve group"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-16 max-w-full object-contain opacity-70 group-hover:opacity-100 transition-all duration-250 partner-logo-invert"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;
