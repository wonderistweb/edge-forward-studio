import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Wifi, Shield, Monitor, Phone, Heart, Server, Users, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingMarketingMenu from "@/components/FloatingMarketingMenu";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.6, ease: [0.2, 1, 0.3, 1] as const },
};

const services = [
  { icon: DollarSign, title: "Non-Profit Licensing", desc: "Microsoft 365 Non-Profit, Google Workspace for Nonprofits, discounted security tools, and TechSoup procurement — we maximize every dollar of donated and discounted technology." },
  { icon: Wifi, title: "Office & Program WiFi", desc: "Reliable wireless for staff, volunteers, and program participants — with content filtering, bandwidth management, and guest access for events and community programs." },
  { icon: Shield, title: "Donor Data Security", desc: "Security architectures that protect donor PII, financial records, and beneficiary data — with encryption, access controls, and compliance documentation for auditors and grantors." },
  { icon: Phone, title: "Communications & Collaboration", desc: "Microsoft Teams, VoIP phone systems, and video conferencing that connect distributed staff, remote workers, board members, and field offices affordably." },
  { icon: Users, title: "Volunteer & Program Tech", desc: "Technology setups for program delivery — computer labs, training rooms, client intake kiosks, and volunteer management systems that support your mission." },
  { icon: Monitor, title: "Managed IT Services", desc: "Help desk, patching, monitoring, and strategic IT planning at non-profit-friendly pricing — so you can focus on your mission instead of troubleshooting technology." },
  { icon: Server, title: "Cloud Migration", desc: "Moving from aging on-premise servers to Microsoft 365 or Google Workspace — with email migration, file transfer, and training that minimizes disruption to operations." },
  { icon: Heart, title: "Grant Technology Support", desc: "Technology specifications for grant applications, IT budget justifications, and implementation support for technology-funded programs — helping you win and fulfill grants." },
];

const NonProfitPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingMarketingMenu />

      <section className="pt-32 pb-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade}>
            <span className="text-sm font-mono-display text-primary uppercase tracking-wider">Industries</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium uppercase mt-3 max-w-4xl">Non-Profit IT</h1>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
              Mission-focused technology at non-profit-friendly pricing. We help organizations maximize donated licenses, stretch limited budgets, and build infrastructure that amplifies impact.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button variant="hero" size="lg" asChild>
                <Link to="/quote">Get a Free Assessment <ArrowRight className="ml-2" size={16} /></Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/case-study/school-wifi-redesign">View Case Study <ArrowRight className="ml-2" size={16} /></Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.div {...fade} className="bg-primary/5 border border-primary/10 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-mono-display text-sm uppercase tracking-wider text-primary mb-2">Cost Savings</h3>
              <h2 className="text-2xl font-medium uppercase">Non-profits leave $50K+ in free tech on the table</h2>
              <p className="text-sm text-muted-foreground mt-2 max-w-lg">
                Between Microsoft 365 Non-Profit (free for up to 300 users), Google Workspace grants, TechSoup discounts, and donated security tools — most non-profits are paying for technology they could get for free. We help you claim everything you're eligible for.
              </p>
            </div>
            <Button variant="outline" size="lg" asChild className="shrink-0">
              <Link to="/quote">Free Tech Audit <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade} className="mb-16">
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Solutions</span>
            <h2 className="text-3xl font-medium uppercase mt-3">Technology for your mission</h2>
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

      <section className="border-b border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade} className="mb-16">
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Non-Profit-Specific</span>
            <h2 className="text-3xl font-medium uppercase mt-3">Challenges we solve</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {[
              { title: "Zero IT Staff", desc: "Most non-profits under 50 employees have no dedicated IT person. The Executive Director or Office Manager becomes the default 'IT department' — resetting passwords, troubleshooting printers, and making technology decisions they aren't trained for. Our managed services give you a full IT team at a fraction of the cost of one hire." },
              { title: "Donor & Grant Compliance", desc: "Grantors and major donors increasingly require documented cybersecurity practices, data handling policies, and technology governance. We build compliance frameworks that satisfy funders, protect beneficiary data, and give your board confidence in your technology posture." },
              { title: "Volunteer & Staff Turnover", desc: "High turnover in non-profits creates constant onboarding/offboarding challenges — accounts to create, devices to provision, access to revoke. We automate user lifecycle management so new staff are productive on day one and departing staff lose access immediately." },
              { title: "Multi-Site & Remote Programs", desc: "Non-profits with satellite offices, field programs, and remote staff need consistent connectivity, secure access to shared systems, and collaboration tools that work everywhere. We build cloud-first architectures with VPN or ZTNA that connect every location and worker securely." },
            ].map((c) => (
              <motion.div key={c.title} className="bg-card p-8" {...fade}>
                <h3 className="font-mono-display text-sm uppercase tracking-wider mb-3">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { value: "60+", label: "Non-Profits Served" },
              { value: "$2M+", label: "Tech Savings Found" },
              { value: "50%", label: "Avg. Cost Reduction" },
              { value: "24/7", label: "Help Desk Support" },
            ].map((stat) => (
              <motion.div key={stat.label} className="py-10 px-6 text-center" {...fade}>
                <div className="text-3xl font-mono-display font-semibold text-primary">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div {...fade}>
            <h2 className="text-3xl font-medium uppercase">Technology that amplifies your mission</h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">From donated licenses to full managed IT — we help non-profits build infrastructure that serves their communities.</p>
            <Button variant="hero" size="lg" className="mt-8" asChild>
              <Link to="/quote">Get a Free Assessment <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NonProfitPage;
