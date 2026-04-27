import { motion } from "framer-motion";
import { TrendingDown, Users, FileX, Truck } from "lucide-react";
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
              We run a lean operation — deliberately. No fancy vehicle fleet. No commission-driven sales reps. No bloated overhead. Just a focused team of senior engineers who know infrastructure inside and out. Every dollar we save in overhead is a dollar we pass directly to you.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our low-markup model means you get enterprise-grade IT services at a fraction of what traditional MSPs charge. No long-term contracts, no hidden fees, no inflated pricing to cover expenses that don't benefit you. Just world-class technology support, priced fairly.
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

        {/* Why We Cost Less */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6, ease: [0.2, 1, 0.3, 1] }}
          className="mt-24"
        >
          <span className="text-sm font-mono-display text-primary uppercase tracking-wider">Our Model</span>
          <h3 className="text-2xl md:text-3xl font-medium uppercase mt-3 mb-12">
            Lean and mean — savings passed to you
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {[
              { icon: TrendingDown, title: "Low Markup", desc: "Minimal margins on hardware, software, and services. We compete on value, not inflated pricing." },
              { icon: Users, title: "Lean Expert Team", desc: "Senior engineers only — no layers of management or junior techs learning on your dime." },
              { icon: Truck, title: "No Fleet Overhead", desc: "No branded vehicle fleet or warehouse costs eating into your budget. We invest in talent, not appearances." },
              { icon: FileX, title: "No Long-Term Contracts", desc: "Month-to-month flexibility. We keep your business by earning it, not by locking you in." },
            ].map((item) => (
              <div key={item.title} className="bg-card p-8">
                <item.icon size={24} strokeWidth={1.5} className="text-primary mb-4" />
                <h4 className="text-sm font-mono-display font-medium uppercase tracking-tight mb-3">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

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
                Mark's strategic approach to technology consulting has helped hundreds of organizations transform their IT from a cost center into a competitive advantage. He is a published thought leader on topics including Zero Trust architecture, business continuity planning, and the evolving MSP landscape.
              </p>
            </div>
            <div className="bg-card p-0 overflow-hidden">
              <img
                src={markPhoto}
                alt="Mark Duerwachter, Vice President of Business Operations"
                className="w-full aspect-[9/8] object-cover"
                style={{ objectPosition: "center 5%" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
