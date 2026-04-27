import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, ShieldAlert, Wifi, Clock, TrendingDown, Headset, PackageX } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingMarketingMenu from "@/components/FloatingMarketingMenu";
import IndustryHero from "@/components/IndustryHero";
import heroImg from "@/assets/case-ubiquiti-products.webp";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.6, ease: [0.2, 1, 0.3, 1] as const },
};

const reasons = [
  {
    icon: Clock,
    title: "1. No price protection across a 7-month window",
    body: "E-Rate timelines routinely span seven months between Form 470 filing and equipment purchase. A partner who quotes Ubiquiti in December commits to pricing that may shift meaningfully by July, with no vendor program to absorb the difference.",
  },
  {
    icon: PackageX,
    title: "2. Inventory volatility with no escalation path",
    body: "MET has watched Ubiquiti-specified projects stall because a single SKU was unavailable in the necessary quantity. There is no account-level inventory program, no prioritized fulfillment, no channel manager to call.",
  },
  {
    icon: TrendingDown,
    title: "3. Margins too thin to absorb risk",
    body: "Ubiquiti pricing is built to be compelling to end users — which means the margin available to a partner deploying it is extremely thin, and any unexpected delay or labor overrun erodes the project's economics quickly.",
  },
  {
    icon: Headset,
    title: "4. No enterprise support program",
    body: "When a partner hits a complex production issue on Aruba, Cisco, Ruckus, or Fortinet gear, there is a TAC ticket and an escalation path. With Ubiquiti, the support model is community forums and Reddit — not appropriate as the primary backstop for a school network.",
  },
  {
    icon: ShieldAlert,
    title: "5. Long-term lifecycle exposure",
    body: "Software updates, security patching, and feature continuity on consumer-oriented hardware do not match the cadence enterprise networks require. The savings at purchase are frequently spent — and exceeded — over the project lifecycle.",
  },
];

const UbiquitiCaseStudyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingMarketingMenu />

      <IndustryHero
        image={heroImg}
        title="Why Specifying Ubiquiti on Form 470 Quietly Costs Districts More"
        description="Ubiquiti's sticker price is compelling — but the absence of price protection, channel inventory, and enterprise support produces structurally unattractive economics for the experienced partners districts most want bidding their work."
        primaryCta={{ label: "Talk to MET About Your 470", to: "/contact" }}
        secondaryCta={{ label: "Explore E-Rate Services", to: "/services/e-rate" }}
      />

      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-px bg-border">
            {[
              { value: "$0", label: "Partner price protection" },
              { value: "None", label: "Enterprise-grade support tier" },
              { value: "7+ mos", label: "Typical 470-to-purchase gap" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card p-8">
                <div className="text-3xl font-mono-display font-semibold text-primary tabular-nums mb-2">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm font-mono-display uppercase tracking-wider text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft size={14} /> All Case Studies
          </Link>

          <motion.div {...fade} className="mb-12">
            <span className="text-sm font-mono-display text-primary uppercase tracking-wider">The Setup</span>
            <h2 className="text-3xl md:text-4xl font-medium uppercase mt-3 mb-6">A consumer brand in an enterprise environment</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Ubiquiti has built a successful business democratizing networking hardware for SOHO and prosumer users. The trouble starts when that same equipment is specified for a K-12 network serving thousands of users — requiring enterprise-grade reliability, scalability, security policy enforcement, and ongoing professional management.
            </p>
            <blockquote className="border-l-2 border-primary pl-6 my-8">
              <p className="text-lg text-foreground leading-relaxed">
                Aruba, Cisco, Ruckus, Fortinet, and other enterprise vendors built channel programs around supporting partners who deploy and manage their equipment. Ubiquiti has not — because its go-to-market model does not require one.
              </p>
            </blockquote>
            <p className="text-muted-foreground leading-relaxed">
              When experienced E-Rate partners pass on Ubiquiti specifications — or price them in ways that make them less competitive — it is rarely arbitrary. There are five well-understood reasons.
            </p>
          </motion.div>

          <motion.div {...fade} className="space-y-px bg-border border border-border mb-12">
            {reasons.map((r) => (
              <div key={r.title} className="bg-card p-6 flex gap-5">
                <r.icon className="text-primary shrink-0 mt-1" size={22} strokeWidth={1.5} />
                <div>
                  <h3 className="text-sm font-mono-display uppercase tracking-tight mb-2">{r.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.body}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div {...fade} className="mb-12">
            <span className="text-sm font-mono-display text-primary uppercase tracking-wider">The Counterintuitive Result</span>
            <h2 className="text-3xl font-medium uppercase mt-3 mb-6">Naming Ubiquiti narrows the bid pool</h2>
            <p className="text-muted-foreground leading-relaxed">
              Specifying Ubiquiti by name does not create the certainty it appears to. It restricts the competitive pool to vendors willing to bid that brand — which tends to exclude the most experienced and capable E-Rate partners. The result is a narrower bid process that may surface fewer proposals, less experienced bidders, or bids that compensate for the structural risks with pricing that eliminates the cost advantage the specification was meant to capture.
            </p>
          </motion.div>

          <motion.div {...fade} className="mb-12">
            <span className="text-sm font-mono-display text-primary uppercase tracking-wider">Side by Side</span>
            <h2 className="text-3xl font-medium uppercase mt-3 mb-6">Consumer-spec vs. enterprise-spec</h2>
            <div className="border border-border">
              {[
                ["Bid competitiveness", "Fewer qualified partners bid", "Broader, more capable partner pool"],
                ["Total cost of ownership", "Low initial; higher lifecycle cost", "Moderate initial; lower lifecycle cost"],
                ["Price stability over E-Rate timeline", "Exposed to 7+ months of drift", "Protected by partner program"],
                ["Production support model", "Community forums", "Vendor TAC + partner escalation"],
                ["Inventory & fulfillment", "No account-level visibility", "Authorized channel + prioritized supply"],
              ].map(([k, a, b], i) => (
                <div key={k} className={`grid grid-cols-3 gap-4 px-5 py-4 text-sm ${i !== 0 ? "border-t border-border" : ""}`}>
                  <span className="text-muted-foreground">{k}</span>
                  <span className="text-foreground">{a}</span>
                  <span className="text-foreground">{b}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fade}>
            <span className="text-sm font-mono-display text-primary uppercase tracking-wider">What Districts Should Do</span>
            <h2 className="text-3xl font-medium uppercase mt-3 mb-6">Write a performance spec, not a brand spec</h2>
            <p className="text-muted-foreground leading-relaxed">
              The practical takeaway is not that Ubiquiti should be blacklisted. It is that the specification process deserves more deliberate attention than it usually receives. A performance-based 470 — describing throughput, coverage, security, scalability, and support requirements — opens the door to genuine competition and almost always produces better outcomes for the district.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 section-tinted border-t border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div {...fade} className="max-w-2xl mx-auto">
            <Wifi className="text-primary mx-auto mb-4" size={32} strokeWidth={1.25} />
            <h2 className="text-3xl md:text-4xl font-medium uppercase mb-6">Rethinking your next Form 470?</h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              MET helps Wisconsin districts write performance-based specifications, model total cost of ownership, and deliver enterprise-grade networks with vendor-backed support — not community forums.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="hero" asChild>
                <Link to="/contact">
                  Talk to MET <ArrowRight size={16} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services/e-rate">Explore E-Rate Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UbiquitiCaseStudyPage;