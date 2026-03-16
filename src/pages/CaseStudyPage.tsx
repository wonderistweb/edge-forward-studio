import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Wifi, Shield, Clock, Users, CheckCircle, BarChart3, Zap, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingMarketingMenu from "@/components/FloatingMarketingMenu";
import heatmapImage from "@/assets/case-study-heatmap.jpg";
import markPhoto from "@/assets/mark-duerwachter.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.2, 1, 0.3, 1] },
};

const CaseStudyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingMarketingMenu />

      {/* Hero */}
      <section className="pt-32 pb-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp}>
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm font-mono-display uppercase tracking-wider mb-8 transition-colors">
              <ArrowLeft size={14} /> Back to Home
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Case Study</span>
              <span className="text-xs text-muted-foreground">·</span>
              <span className="text-xs text-muted-foreground">K-12 Education</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium uppercase leading-tight max-w-4xl">
              235,000 sq ft School District WiFi Redesign
            </h1>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
              How Modern Edge Technology deployed enterprise-grade 6GHz wireless coverage across a multi-building K-12 campus — eliminating dead zones, reducing co-channel interference, and supporting 2,500+ simultaneous devices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { value: "235,464", unit: "sq ft", label: "Total Coverage Area" },
              { value: "84+", unit: "APs", label: "Access Points Deployed" },
              { value: "6GHz", unit: "WiFi 6E", label: "Tri-Band Coverage" },
              { value: "<1%", unit: "complaints", label: "Post-Deployment Issues" },
            ].map((stat) => (
              <motion.div key={stat.label} className="py-8 px-6 text-center" {...fadeUp}>
                <div className="text-3xl font-mono-display font-semibold text-primary">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.unit}</div>
                <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp}>
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">01 — The Challenge</span>
            <h2 className="text-3xl font-medium uppercase mt-4 mb-8">Aging Infrastructure, Growing Demands</h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                The district was operating on a <strong className="text-foreground">legacy 802.11ac wireless network</strong> originally deployed in 2017. With the rapid adoption of 1:1 Chromebook programs, digital curricula, and cloud-based testing platforms, the existing infrastructure was buckling under device density that had tripled since installation.
              </p>
              <p>
                Teachers reported <strong className="text-foreground">frequent disconnections during state testing windows</strong>, streaming video buffering in classrooms, and complete dead zones in the gymnasium, cafeteria, and outdoor learning areas. The district's IT team was spending 60% of their time on wireless troubleshooting alone.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-10">
              {[
                { icon: Users, title: "2,500+ devices", desc: "Simultaneous connections during peak testing hours" },
                { icon: Clock, title: "12+ hrs/week", desc: "IT staff time lost to WiFi troubleshooting" },
                { icon: Shield, title: "Zero segmentation", desc: "Student, staff, and IoT traffic on same VLAN" },
              ].map((item) => (
                <div key={item.title} className="bg-card border border-border p-5">
                  <item.icon size={20} className="text-primary mb-3" />
                  <div className="text-sm font-medium text-foreground">{item.title}</div>
                  <div className="text-xs text-muted-foreground mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Approach */}
      <section className="py-20 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp}>
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">02 — Our Approach</span>
            <h2 className="text-3xl font-medium uppercase mt-4 mb-8">Predictive Design, Not Guesswork</h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                We began with a <strong className="text-foreground">comprehensive RF site survey</strong> of the entire 235,464 sq ft campus — walking every hallway, classroom, and outdoor area with spectrum analyzers and predictive modeling tools to understand the existing RF environment before designing anything.
              </p>
              <p>
                Using Ekahau predictive heat mapping, we modeled coverage across all three bands (2.4GHz, 5GHz, and 6GHz) to determine optimal AP placement. Our engineering team identified that the existing 84 access points were <strong className="text-foreground">poorly positioned</strong> — many were ceiling-mounted in hallways rather than classrooms, creating co-channel interference and roaming issues.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Heat Map Image */}
        <div className="max-w-6xl mx-auto px-6 mt-12">
          <motion.div {...fadeUp} className="relative">
            <div className="border border-border rounded-sm overflow-hidden bg-card">
              <div className="bg-secondary px-4 py-2 flex items-center gap-2 border-b border-border">
                <Wifi size={14} className="text-primary" />
                <span className="text-xs font-mono-display text-muted-foreground uppercase tracking-wider">6GHz Predictive Heat Map — Overall Floor Plan</span>
              </div>
              <img src={heatmapImage} alt="WiFi 6GHz heat map showing coverage across the school campus floor plan" className="w-full" />
            </div>
            <p className="text-xs text-muted-foreground mt-3 italic">
              Predictive heat map showing 6GHz coverage across the full campus. Green zones indicate strong signal (-65dBm or better), yellow zones indicate adequate coverage (-75dBm).
            </p>
          </motion.div>
        </div>
      </section>

      {/* Engineering Decisions */}
      <section className="py-20 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp}>
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">03 — Engineering Analysis</span>
            <h2 className="text-3xl font-medium uppercase mt-4 mb-8">Data-Driven Decisions</h2>

            <div className="bg-card border border-border p-8 mb-10">
              <div className="flex items-start gap-4">
                <img src={markPhoto} alt="Mark Duerwachter" className="w-12 h-12 rounded-full object-cover border border-border shrink-0" />
                <div>
                  <div className="text-sm font-medium text-foreground">Mark Duerwachter</div>
                  <div className="text-xs text-muted-foreground mb-4">VP of Business Operations · Lead Wireless Engineer</div>
                  <blockquote className="text-muted-foreground leading-relaxed italic border-l-2 border-primary pl-4">
                    "Looking at the 6GHz heat map, I don't think we need additional APs. Adding the APs in the hallway will likely create more issues than it solves — co-channel interference and roaming problems. A call with the district to understand why they want APs in the hallway would be helpful before we move forward."
                  </blockquote>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">
              This is the kind of <strong className="text-foreground">consultative engineering</strong> that separates Modern Edge from vendors who simply install whatever the client asks for. More APs doesn't always mean better coverage — in fact, it can actively degrade performance through interference and sticky client issues.
            </p>

            <h3 className="text-lg font-mono-display font-medium uppercase tracking-tight mb-6">Key Engineering Decisions</h3>

            <div className="space-y-4">
              {[
                {
                  title: "Swap 12 existing APs to WiFi 6E (HD)",
                  desc: "Rather than adding new cable runs, we upgraded 12 high-density classroom APs in-place to WiFi 6E models — reducing deployment time and cabling costs while maximizing the 6GHz band."
                },
                {
                  title: "Rejected hallway AP additions",
                  desc: "The district requested 12 optional hallway APs. Our analysis showed these would cause co-channel interference and roaming degradation. We recommended against installation and the district agreed after reviewing the heat map data."
                },
                {
                  title: "5 new APs with cable runs",
                  desc: "Strategic placement in previously uncovered areas: the outdoor learning courtyard, gym storage rooms, and a newly constructed media center wing."
                },
                {
                  title: "1 new outdoor AP",
                  desc: "Weatherproof AP deployment covering the bus loading zone and athletic field press box area for event coverage and security camera backhaul."
                },
                {
                  title: "Network segmentation",
                  desc: "Implemented VLAN segmentation separating student devices, staff devices, IoT/security cameras, and guest access into isolated network segments with proper QoS policies."
                },
              ].map((decision, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle size={18} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-foreground">{decision.title}</div>
                    <div className="text-sm text-muted-foreground mt-1">{decision.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Deployment Summary */}
      <section className="py-20 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp}>
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">04 — Deployment</span>
            <h2 className="text-3xl font-medium uppercase mt-4 mb-8">What We Delivered</h2>

            <div className="border border-border rounded-sm overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-card">
                    <th className="text-left p-4 font-mono-display uppercase text-xs tracking-wider text-muted-foreground border-b border-border">Component</th>
                    <th className="text-left p-4 font-mono-display uppercase text-xs tracking-wider text-muted-foreground border-b border-border">Quantity</th>
                    <th className="text-left p-4 font-mono-display uppercase text-xs tracking-wider text-muted-foreground border-b border-border">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Existing APs (retained)", "84", "Validated placement, firmware updated"],
                    ["HD AP Swaps (WiFi 6E)", "12", "High-density classrooms, tri-band"],
                    ["New APs + Cable Runs", "5", "Media center, gym storage, courtyard"],
                    ["New HD AP + Cable Run", "1", "Main auditorium"],
                    ["Outdoor AP (new)", "1", "Bus zone, athletic field"],
                    ["Outdoor AP (swap)", "1", "Front entrance, weatherproof upgrade"],
                    ["VLANs Configured", "4", "Student, Staff, IoT, Guest"],
                    ["E-Rate Funding Secured", "Category 2", "60% discount on all eligible equipment"],
                  ].map(([component, qty, details], i) => (
                    <tr key={i} className="border-b border-border last:border-0">
                      <td className="p-4 text-foreground font-medium">{component}</td>
                      <td className="p-4 text-primary font-mono-display">{qty}</td>
                      <td className="p-4 text-muted-foreground">{details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp}>
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">05 — Results</span>
            <h2 className="text-3xl font-medium uppercase mt-4 mb-10">Measurable Impact</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Wifi, metric: "99.97%", label: "Wireless Uptime", desc: "Across all campus buildings during state testing window" },
                { icon: BarChart3, metric: "0", label: "Testing Disruptions", desc: "Zero WiFi-related test interruptions in first semester" },
                { icon: Zap, metric: "85%", label: "Reduction in Tickets", desc: "Wireless-related IT support tickets dropped dramatically" },
                { icon: Building2, metric: "$180K", label: "E-Rate Savings", desc: "Category 2 funding covered majority of equipment costs" },
              ].map((result) => (
                <div key={result.label} className="bg-card border border-border p-6">
                  <result.icon size={22} className="text-primary mb-3" />
                  <div className="text-3xl font-mono-display font-semibold text-foreground">{result.metric}</div>
                  <div className="text-sm font-medium text-foreground mt-1">{result.label}</div>
                  <div className="text-xs text-muted-foreground mt-2">{result.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Ready to Start?</span>
            <h2 className="text-3xl font-medium uppercase mt-4">Your campus deserves this level of engineering</h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              Whether it's a school, hotel, or corporate campus — we design networks that perform under real-world conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button variant="hero" size="lg" asChild>
                <Link to="/quote">Get a Free Assessment</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/e-rate">Learn About E-Rate</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudyPage;
