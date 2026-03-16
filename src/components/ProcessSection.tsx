import { motion } from "framer-motion";
import markConsultation from "@/assets/mark-consultation.png";
import infrastructureAudit from "@/assets/infrastructure-audit.jpg";

const ProcessSection = () => {
  return (
    <section className="py-32 border-t border-border section-primary-tint">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-sm font-mono-display text-primary uppercase tracking-wider">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-medium uppercase mt-3 max-w-2xl">
            From assessment to implementation
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-px bg-border">
          {/* Image 1 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-card overflow-hidden group"
          >
            <img
              src={markConsultation}
              alt="Mark consulting with a client about their technology needs"
              className="w-full h-80 object-cover group-hover:scale-[1.02] transition-transform duration-500 snap-curve"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono-display text-primary text-sm">01</span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <h3 className="text-lg font-mono-display font-medium uppercase tracking-tight">
                Needs Analysis
              </h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                We sit down with your team to understand your infrastructure, pain points, and growth objectives — building a comprehensive technology roadmap.
              </p>
            </div>
          </motion.div>

          {/* Image 2 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="relative bg-card overflow-hidden group"
          >
            <div className="duotone-wrapper">
              <img
                src={infrastructureAudit}
                alt="Mark discussing infrastructure with a client"
                className="w-full h-80 object-cover group-hover:scale-[1.02] transition-transform duration-500 snap-curve duotone group-hover:filter-none"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono-display text-primary text-sm">02</span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <h3 className="text-lg font-mono-display font-medium uppercase tracking-tight">
                Infrastructure Audit
              </h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Our engineers perform a hands-on evaluation of your existing systems, identifying vulnerabilities and optimization opportunities.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
