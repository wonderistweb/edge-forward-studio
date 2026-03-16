import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Target, Users, Building2, GraduationCap, MousePointerClick } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingMarketingMenu from "@/components/FloatingMarketingMenu";

interface AdCard {
  platform: string;
  audience: string;
  headline: string;
  body: string;
  cta: string;
  icon: React.ElementType;
  metrics: { impressions: string; ctr: string; cpc: string };
}

const ads: AdCard[] = [
  {
    platform: "Google Search",
    audience: "IT Decision Makers",
    icon: Target,
    headline: "Managed IT Services — 99.99% Uptime Guaranteed",
    body: "Stop paying for break-fix IT. Our proactive managed services cut your IT costs by 50-75% while delivering enterprise-grade reliability. Free infrastructure audit.",
    cta: "Get Your Free Assessment →",
    metrics: { impressions: "45K/mo", ctr: "4.8%", cpc: "$12.50" },
  },
  {
    platform: "Google Search",
    audience: "School Administrators",
    icon: GraduationCap,
    headline: "E-Rate Funding — Up to 90% Off School Technology",
    body: "Don't leave federal money on the table. We've secured $12M+ in E-Rate funding for schools. Free eligibility check — most districts qualify for 60-90% discounts.",
    cta: "Check Your Eligibility →",
    metrics: { impressions: "18K/mo", ctr: "5.2%", cpc: "$8.75" },
  },
  {
    platform: "LinkedIn",
    audience: "C-Suite & IT Directors",
    icon: Building2,
    headline: "Your IT Provider Is Costing You More Than You Think",
    body: "The average SMB loses $268K-$647K annually on reactive IT. Our managed services model delivers enterprise-grade infrastructure at 50-75% less than break-fix. The math isn't complicated — but the results are transformational.\n\nHere's what changes when you switch to proactive IT:\n✅ 99.99% uptime (vs. 12-16 hours of downtime/year)\n✅ <15 minute response times\n✅ 24/7 SOC monitoring\n✅ Predictable monthly costs\n✅ Zero surprise repair bills\n\nWe've helped 500+ organizations make the switch. Ready to see the numbers for your business?",
    cta: "Download the Cost Comparison →",
    metrics: { impressions: "85K/mo", ctr: "1.8%", cpc: "$6.20" },
  },
  {
    platform: "LinkedIn",
    audience: "Hotel & Property Managers",
    icon: Users,
    headline: "Guest WiFi Complaints Are Killing Your Reviews",
    body: "68% of hotel guests say WiFi quality directly impacts their review score. Yet most properties are running consumer-grade networks designed for a fraction of the device density they're experiencing.\n\nWe design hospitality-grade wireless networks that handle:\n🏨 500+ simultaneous devices per floor\n🏨 Branded captive portals with analytics\n🏨 PCI-compliant network segmentation\n🏨 Seamless roaming across the property\n\nOne property saw their WiFi complaint rate drop from 23% to under 1% within 30 days of our deployment.",
    cta: "Get a Free WiFi Assessment →",
    metrics: { impressions: "32K/mo", ctr: "2.1%", cpc: "$4.80" },
  },
  {
    platform: "Facebook/Instagram",
    audience: "Small Business Owners",
    icon: MousePointerClick,
    headline: "Cybersecurity Isn't Optional Anymore",
    body: "67% of ransomware attacks target businesses with fewer than 100 employees. Average cost? $1.85M. Average recovery time? 22 days. 60% never reopen.\n\nFor less than the cost of a part-time employee, you can have 24/7 enterprise-grade cybersecurity monitoring, endpoint protection, and incident response.\n\nDon't become a statistic.",
    cta: "Get Protected — Free Security Audit →",
    metrics: { impressions: "120K/mo", ctr: "3.2%", cpc: "$2.15" },
  },
  {
    platform: "Google Display",
    audience: "Retargeting — Site Visitors",
    icon: Target,
    headline: "Still Thinking About Your IT?",
    body: "You visited Modern Edge Technology for a reason. Whether it's managed IT, cybersecurity, or cloud migration — we're ready when you are. Your free infrastructure assessment is waiting.",
    cta: "Schedule Your Free Assessment →",
    metrics: { impressions: "200K/mo", ctr: "0.8%", cpc: "$1.50" },
  },
];

const AdsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingMarketingMenu />

      <section className="pt-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm font-mono-display uppercase tracking-wider mb-8 transition-colors">
            <ArrowLeft size={14} /> Back to Home
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-sm font-mono-display text-primary uppercase tracking-wider">Marketing Showcase</span>
            <h1 className="text-4xl md:text-5xl font-medium uppercase mt-3">Ad Campaign Examples</h1>
            <p className="text-muted-foreground mt-4 max-w-2xl text-lg leading-relaxed">
              Sample ad creatives across Google, LinkedIn, Facebook, and display networks — targeting key verticals with data-driven messaging.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {ads.map((ad, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border overflow-hidden group hover:border-primary/30 transition-colors duration-250"
              >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-secondary/30">
                  <div className="flex items-center gap-3">
                    <ad.icon size={16} className="text-primary" />
                    <div>
                      <div className="text-xs font-mono-display uppercase tracking-wider text-foreground">{ad.platform}</div>
                      <div className="text-xs text-muted-foreground">{ad.audience}</div>
                    </div>
                  </div>
                  <ExternalLink size={14} className="text-muted-foreground" />
                </div>

                {/* Body */}
                <div className="px-6 py-5">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{ad.headline}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{ad.body}</p>
                  <div className="mt-4">
                    <span className="inline-block bg-primary text-primary-foreground text-sm font-medium px-4 py-2">
                      {ad.cta}
                    </span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-px bg-border border-t border-border">
                  <div className="bg-card px-4 py-3 text-center">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Impressions</div>
                    <div className="text-sm font-mono-display font-semibold text-primary mt-1">{ad.metrics.impressions}</div>
                  </div>
                  <div className="bg-card px-4 py-3 text-center">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">CTR</div>
                    <div className="text-sm font-mono-display font-semibold text-primary mt-1">{ad.metrics.ctr}</div>
                  </div>
                  <div className="bg-card px-4 py-3 text-center">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">CPC</div>
                    <div className="text-sm font-mono-display font-semibold text-primary mt-1">{ad.metrics.cpc}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-medium uppercase">Want these campaigns running for your business?</h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm">These are sample creatives. We customize every campaign to your specific market, services, and growth goals.</p>
          <Button variant="hero" size="lg" className="mt-6" asChild>
            <Link to="/quote">Get Started</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdsPage;
