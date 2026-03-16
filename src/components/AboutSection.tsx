import { motion } from "framer-motion";
import markPhoto from "@/assets/mark-hero.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.2, 1, 0.3, 1] }}
          >
            <span className="text-sm font-mono-display text-primary uppercase tracking-wider">About</span>
            <h2 className="text-3xl md:text-4xl font-medium uppercase mt-3">
              Enterprise expertise,<br />accessible scale
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.2, 1, 0.3, 1] }}
          >
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
              Our mission is to deliver top-tier managed IT services that combine enterprise-level expertise with unbeatable value. We are committed to helping businesses grow by providing reliable, responsive, and cost-effective IT solutions — without compromising on quality or service.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By continuously optimizing our operations, we make world-class technology support accessible to organizations of all sizes. Our low markup model and flexible agreements without long-term contracts help you maximize your IT budget and maintain financial flexibility.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-px bg-border mt-12">
              {[
                { value: "99.99%", label: "Uptime SLA" },
                { value: "<15min", label: "Response Time" },
                { value: "24/7", label: "Monitoring" },
              ].map((metric) => (
                <div key={metric.label} className="bg-card p-6">
                  <div className="text-2xl font-mono-display font-semibold text-primary tabular-nums">
                    {metric.value}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.2, 1, 0.3, 1] }}
          className="mt-24"
        >
          <span className="text-sm font-mono-display text-primary uppercase tracking-wider">Leadership</span>
          <h3 className="text-2xl md:text-3xl font-medium uppercase mt-3 mb-12">
            The people behind the infrastructure
          </h3>

          <div className="grid md:grid-cols-2 gap-px bg-border">
            <div className="bg-card p-0">
              <img
                src={markPhoto}
                alt="Mark Duerwachter, Vice President of Business Operations"
                className="w-full aspect-[3/4] object-cover object-top"
              />
            </div>
            <div className="bg-card p-8 md:p-12 flex flex-col justify-center">
              <h4 className="text-xl font-mono-display font-medium uppercase tracking-tight">
                Mark Duerwachter
              </h4>
              <p className="text-sm text-primary font-mono-display uppercase tracking-wider mt-1 mb-6">
                Vice President of Business Operations
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                With over two decades of experience in enterprise IT infrastructure, Mark leads Modern Edge Technology's business operations and client strategy. His background spans managed services, cybersecurity, cloud architecture, and telecommunications across industries including manufacturing, finance, healthcare, and education.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Mark's hands-on approach to technology consulting has helped hundreds of organizations transform their IT from a cost center into a strategic competitive advantage. He is a published thought leader on topics including Zero Trust architecture, business continuity planning, and the evolving MSP landscape.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
