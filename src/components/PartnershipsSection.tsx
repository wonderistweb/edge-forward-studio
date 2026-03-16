import { motion } from "framer-motion";

const partners = [
  "3CX", "Lenovo", "Rhombus", "Dell", "VoIP Supply",
  "Fortinet", "Vertiv", "Samsung", "Intel", "Synology", "HP", "Axis",
];

const PartnershipsSection = () => {
  return (
    <section id="partnerships" className="py-32 border-t border-border">
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-border">
          {partners.map((partner, i) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              className="bg-card hover:bg-card-hover flex items-center justify-center p-8 transition-colors duration-250 snap-curve group"
            >
              <span className="font-mono-display text-sm uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors duration-250">
                {partner}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;
