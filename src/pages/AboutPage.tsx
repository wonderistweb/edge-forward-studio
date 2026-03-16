import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Award, BookOpen, Shield, Wifi, Server, Users, Heart, Target, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingMarketingMenu from "@/components/FloatingMarketingMenu";
import markPhoto from "@/assets/mark-duerwachter.jpg";
import markConsultation from "@/assets/mark-consultation.png";
import markConsultation3 from "@/assets/mark-consultation-3.png";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.6, ease: [0.2, 1, 0.3, 1] as const },
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingMarketingMenu />

      {/* Hero */}
      <section className="pt-32 pb-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade}>
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm font-mono-display uppercase tracking-wider mb-8 transition-colors">
              <ArrowLeft size={14} /> Back to Home
            </Link>
            <span className="text-sm font-mono-display text-primary uppercase tracking-wider block">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium uppercase leading-tight mt-3 max-w-4xl">
              Built by engineers,<br />driven by relationships
            </h1>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
              Modern Edge Technology isn't a faceless service desk. We're a team of experienced engineers who believe enterprise-grade IT should be accessible to every organization — without the enterprise price tag.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission / Values */}
      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade}>
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Our Culture</span>
            <h2 className="text-3xl font-medium uppercase mt-4 mb-12">What we stand for</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-px bg-border">
            {[
              {
                icon: Heart,
                title: "People Over Tickets",
                desc: "We don't measure success by tickets closed. We measure it by problems that never happen in the first place. Proactive beats reactive — every time.",
              },
              {
                icon: Target,
                title: "No Long-Term Contracts",
                desc: "We earn your business every month. Our flexible agreements mean you stay because we deliver, not because you're locked in. That keeps us sharp.",
              },
              {
                icon: Lightbulb,
                title: "Transparent Pricing",
                desc: "Our low markup model means you get enterprise-grade solutions at fair prices. No hidden fees, no surprise invoices, no markup games.",
              },
            ].map((value) => (
              <motion.div key={value.title} className="bg-card p-8" {...fade}>
                <value.icon size={24} className="text-primary mb-4" />
                <h3 className="text-lg font-medium uppercase mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mark - Deep Profile */}
      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade}>
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Leadership</span>
            <h2 className="text-3xl font-medium uppercase mt-4 mb-12">Meet the person behind the infrastructure</h2>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-px bg-border">
            {/* Photo - 2 cols */}
            <motion.div className="lg:col-span-2 bg-card" {...fade}>
              <img
                src={markPhoto}
                alt="Mark Duerwachter, Vice President of Business Operations"
                className="w-full h-full object-cover object-top min-h-[400px]"
              />
            </motion.div>

            {/* Bio - 3 cols */}
            <motion.div className="lg:col-span-3 bg-card p-8 lg:p-12 flex flex-col justify-center" {...fade}>
              <h3 className="text-2xl font-mono-display font-medium uppercase tracking-tight">
                Mark Duerwachter
              </h3>
              <p className="text-sm text-primary font-mono-display uppercase tracking-wider mt-1 mb-8">
                Vice President of Business Operations
              </p>

              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  With over <strong className="text-foreground">two decades of experience</strong> in enterprise IT infrastructure, Mark doesn't just manage technology — he architects the systems that businesses depend on every day. His career spans the full spectrum: from pulling cable in server rooms to designing multi-site SD-WAN deployments for Fortune 500 clients.
                </p>
                <p>
                  Mark founded Modern Edge Technology on a simple principle: <strong className="text-foreground">organizations shouldn't have to choose between quality and affordability</strong>. He saw too many businesses getting overcharged for mediocre IT support, locked into contracts they couldn't escape, and left vulnerable by providers who didn't understand their industry.
                </p>
                <p>
                  Today, Mark personally oversees every major deployment and maintains direct relationships with clients. When you work with Modern Edge, you're not handed off to a rotating cast of technicians — you get Mark's cell phone number and a team that knows your environment inside out.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mark's Expertise Areas */}
      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade}>
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Expertise</span>
            <h2 className="text-3xl font-medium uppercase mt-4 mb-12">Areas of specialization</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Wifi,
                title: "Wireless Architecture",
                desc: "Enterprise WiFi 6E design, predictive heat mapping, high-density deployments for education, hospitality, and corporate campuses.",
                years: "15+ years",
              },
              {
                icon: Shield,
                title: "Cybersecurity & Zero Trust",
                desc: "SIEM/SOC deployment, endpoint detection and response, network segmentation, compliance frameworks (HIPAA, PCI-DSS, CMMC).",
                years: "12+ years",
              },
              {
                icon: Server,
                title: "Cloud & Hybrid Infrastructure",
                desc: "Azure, AWS, and hybrid cloud migrations. Virtualization, disaster recovery, and business continuity planning.",
                years: "18+ years",
              },
              {
                icon: BookOpen,
                title: "E-Rate & Federal Funding",
                desc: "Over $12M secured in E-Rate Category 1 & 2 funding for K-12 school districts. Full application lifecycle management.",
                years: "$12M+ secured",
              },
              {
                icon: Users,
                title: "VoIP & Unified Communications",
                desc: "3CX certified partner. Multi-site phone system deployments, SIP trunking, contact center solutions, and Teams integration.",
                years: "10+ years",
              },
              {
                icon: Award,
                title: "Vendor Management",
                desc: "Strategic partnerships with Dell, Fortinet, Lenovo, Rhombus, and Vertiv. Vendor-agnostic recommendations based on client needs, not commissions.",
                years: "20+ years",
              },
            ].map((area) => (
              <motion.div key={area.title} className="bg-card border border-border p-6 group hover:border-primary/30 transition-colors" {...fade}>
                <div className="flex items-start justify-between mb-4">
                  <area.icon size={22} className="text-primary" />
                  <span className="text-xs font-mono-display text-primary tabular-nums">{area.years}</span>
                </div>
                <h3 className="text-sm font-medium uppercase mb-2">{area.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-px bg-border">
            <motion.div className="bg-card overflow-hidden" {...fade}>
              <img
                src={markConsultation}
                alt="Mark consulting with a client about their IT infrastructure"
                className="w-full h-full object-cover min-h-[350px]"
              />
            </motion.div>
            <motion.div className="bg-card p-8 lg:p-12 flex flex-col justify-center" {...fade}>
              <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Behind the Scenes</span>
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-foreground mt-4">
                "Technology should be the easiest part of running your business. If it's not, you have the wrong partner."
              </blockquote>
              <div className="flex items-center gap-4 mt-6">
                <img src={markPhoto} alt="Mark Duerwachter" className="w-12 h-12 rounded-full object-cover border border-border" />
                <div className="text-left">
                  <div className="text-sm font-medium">Mark Duerwachter</div>
                  <div className="text-xs text-muted-foreground">VP of Business Operations</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mt-6">
                This is what working with Modern Edge actually looks like — Mark sitting down with clients, tablet in hand, walking through their infrastructure challenges one-on-one. No sales pitch, no PowerPoint. Just an honest conversation about what your technology needs and how to get there.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { value: "500+", label: "Organizations Served" },
              { value: "99.99%", label: "Uptime SLA" },
              { value: "<15min", label: "Avg Response Time" },
              { value: "0", label: "Long-Term Contracts" },
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div {...fade}>
            <h2 className="text-3xl font-medium uppercase">Ready to work with a team that cares?</h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              Schedule a call with Mark and see what enterprise IT support actually looks like.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button variant="hero" size="lg" asChild>
                <Link to="/quote">
                  Get a Free Assessment
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/case-study/school-wifi-redesign">View Case Study</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
