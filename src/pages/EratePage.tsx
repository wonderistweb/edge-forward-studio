import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, DollarSign, Calendar, FileText, HelpCircle, BookOpen, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IndustryHero from "@/components/IndustryHero";
import ErateBudgetLookup from "@/components/ErateBudgetLookup";
import heroImg from "@/assets/industry-hero-erate.jpg";

const timeline = [
  { month: "Jul–Sep", title: "Planning Phase", desc: "Conduct technology needs assessment, develop technology plan, identify eligible services and equipment, research vendor options." },
  { month: "Oct–Nov", title: "Form 470 Filing", desc: "Post FCC Form 470 to the USAC portal describing needed services. This initiates the competitive bidding process with a mandatory 28-day waiting period." },
  { month: "Nov–Feb", title: "Competitive Bidding", desc: "Evaluate vendor proposals with price as primary factor. Document evaluation process thoroughly — USAC audits bid evaluations." },
  { month: "Jan–Mar", title: "Form 471 Filing", desc: "File FCC Form 471 funding request with detailed information about selected services, vendors, contract terms, and discount calculations." },
  { month: "Mar–Sep", title: "PIA Review", desc: "USAC's Program Integrity Assurance team reviews your application. Respond to information requests promptly and completely." },
  { month: "Jul–Dec", title: "Funding Decision", desc: "Receive Funding Commitment Decision Letter. Review commitment for accuracy. File Form 486 to confirm services are being received." },
];

const discountTiers = [
  { poverty: "75%+", urban: "90%", rural: "90%" },
  { poverty: "50-74%", urban: "70%", rural: "80%" },
  { poverty: "35-49%", urban: "50%", rural: "60%" },
  { poverty: "20-34%", urban: "40%", rural: "50%" },
  { poverty: "<20%", urban: "20%", rural: "25%" },
];

const EratePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <IndustryHero
        image={heroImg}
        title="E-Rate: Up to 90% Funding for School & Library Technology"
        description="The E-Rate program (Schools and Libraries Universal Service Support Mechanism) has distributed over $50 billion since 1997. We help institutions maximize their funding and navigate the complex application process."
        primaryCta={{ label: "See What You're Leaving on the Table", to: "#budget-lookup" }}
        secondaryCta={{ label: "Learn How It Works", to: "#how-it-works" }}
      />

      {/* What E-Rate Covers */}
      <section className="border-b border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <span className="text-sm font-mono-display text-primary uppercase tracking-wider">Program Overview</span>
            <h2 className="text-3xl md:text-4xl font-medium uppercase mt-3">What E-Rate Covers</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-px bg-border">
            {/* Category 1 */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="bg-card p-8 md:p-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-mono-display uppercase tracking-wider px-3 py-1 mb-6">
                <BookOpen size={14} /> Category 1
              </div>
              <h3 className="text-xl font-medium uppercase mb-4">Internet Access & Transport</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Covers services that connect your institution to the internet. No per-applicant cap — the program has never run out of Category 1 funding.
              </p>
              <ul className="space-y-3">
                {["Fiber, cable, DSL, and fixed wireless internet service", "Dark fiber and lit fiber transport", "Leased circuits connecting buildings", "Cellular data plans for educational use"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle className="text-primary shrink-0 mt-0.5" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Category 2 */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-card p-8 md:p-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-mono-display uppercase tracking-wider px-3 py-1 mb-6">
                <BookOpen size={14} /> Category 2
              </div>
              <h3 className="text-xl font-medium uppercase mb-4">Internal Connections</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Covers equipment and services inside your buildings. Budget of $167 per student (or $2.39/sq ft for libraries) refreshes every five years.
              </p>
              <ul className="space-y-3">
                {["Wireless access points and controllers", "Network switches (core, distribution, access)", "Structured cabling (Cat6/Cat6A, fiber)", "Routers and rack-mounted UPS systems", "Caching servers and basic maintenance contracts"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle className="text-primary shrink-0 mt-0.5" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <ErateBudgetLookup />

      {/* Discount Rates */}
      <section className="border-b border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <DollarSign className="text-primary mb-4" size={32} />
            <h2 className="text-3xl md:text-4xl font-medium uppercase mt-3">Discount Rates</h2>
            <p className="text-muted-foreground mt-4 max-w-xl">
              Discounts range from 20% to 90% based on poverty level (NSLP eligibility) and urban/rural status.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-2xl">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 text-xs font-mono-display uppercase tracking-wider text-muted-foreground">NSLP Eligibility</th>
                  <th className="text-center py-4 px-4 text-xs font-mono-display uppercase tracking-wider text-muted-foreground">Urban Discount</th>
                  <th className="text-center py-4 px-4 text-xs font-mono-display uppercase tracking-wider text-muted-foreground">Rural Discount</th>
                </tr>
              </thead>
              <tbody>
                {discountTiers.map((tier, i) => (
                  <tr key={i} className="border-b border-border">
                    <td className="py-4 px-4 font-mono-display text-sm">{tier.poverty}</td>
                    <td className="py-4 px-4 text-center font-mono-display text-sm text-primary font-semibold">{tier.urban}</td>
                    <td className="py-4 px-4 text-center font-mono-display text-sm text-primary font-semibold">{tier.rural}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Example */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 bg-primary/5 border border-primary/10 p-8">
            <h3 className="font-mono-display text-sm uppercase tracking-wider text-primary mb-3">Example Calculation</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A school district with <strong className="text-foreground">5,000 students</strong> at an <strong className="text-foreground">80% discount rate</strong> has a five-year Category 2 budget of <strong className="text-primary">$835,000</strong>. Purchasing $500,000 in network equipment, the district pays only <strong className="text-primary">$100,000 out of pocket</strong> — with the remaining $400,000 funded by E-Rate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section id="how-it-works" className="border-b border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <Calendar className="text-primary mb-4" size={32} />
            <h2 className="text-3xl md:text-4xl font-medium uppercase mt-3">Application Timeline</h2>
            <p className="text-muted-foreground mt-4 max-w-xl">
              The E-Rate application follows a rigid annual timeline. Missing a deadline — even by one day — can result in denial of your entire application.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {timeline.map((step, i) => (
              <motion.div key={step.month} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-card p-8">
                <div className="text-primary font-mono-display text-sm font-semibold mb-2">{step.month}</div>
                <h3 className="font-mono-display text-sm uppercase tracking-wider mb-3">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="border-b border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <HelpCircle className="text-primary mb-4" size={32} />
            <h2 className="text-3xl md:text-4xl font-medium uppercase mt-3">Common Mistakes to Avoid</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-px bg-border">
            {[
              { title: "Insufficient Bid Documentation", desc: "USAC requires a fair and open competitive bidding process. The Form 470 must accurately describe needs, the 28-day waiting period must be observed, and all bids must be documented." },
              { title: "Mismatched Service Dates", desc: "Dates on Form 471 must match your vendor contract and Form 470 exactly. A one-day discrepancy can result in complete application denial." },
              { title: "Requesting Ineligible Items", desc: "Desktop computers, tablets, software licenses, end-user devices, and training services are NOT eligible. Miscategorizing items constitutes a program violation." },
              { title: "Missing Form 486 Deadline", desc: "After receiving your funding commitment, Form 486 must be filed within 120 days. Missing this deadline forfeits your entire year's funding." },
              { title: "Inadequate Record Retention", desc: "All E-Rate records must be maintained for at least 10 years. Organizations that can't produce documentation during audits are required to return funding." },
              { title: "Self-Filing Without Expertise", desc: "Institutions that work with a qualified E-Rate vendor receive 30-50% more funding on average than those that self-file." },
            ].map((mistake, i) => (
              <motion.div key={mistake.title} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-card p-8">
                <h3 className="font-mono-display text-sm uppercase tracking-wider mb-3 text-destructive">{mistake.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{mistake.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MIBS Section */}
      <section className="border-b border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <Server className="text-primary mb-4" size={32} />
            <h2 className="text-3xl md:text-4xl font-medium uppercase mt-3">Managed Internal Broadband Services (MIBS)</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              MIBS allow schools to procure networking equipment as a managed service — bundling hardware, installation, and ongoing management into a single E-Rate eligible package under Category 2.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* What is MIBS */}
            <div>
              <h3 className="font-mono-display text-sm uppercase tracking-wider text-primary mb-6">Why MIBS Matters</h3>
              <div className="space-y-4">
                {[
                  { title: "CapEx → OpEx", desc: "Convert large capital purchases into manageable operational expenses spread across the service period — easier to budget and approve at the board level." },
                  { title: "Inclusive Management", desc: "MIBS contracts include ongoing monitoring, maintenance, firmware updates, and basic support — your APs aren't just installed and forgotten." },
                  { title: "Budget Maximization", desc: "Each school gets $167/student (min $25,000 floor). MIBS bundles eligible equipment and services to maximize this allocation in a single package." },
                  { title: "Simplified Procurement", desc: "One Form 470 posting covers equipment, installation, and management — instead of bidding each component separately." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <CheckCircle size={16} className="text-primary shrink-0 mt-1" />
                    <div>
                      <div className="text-sm font-medium text-foreground">{item.title}</div>
                      <div className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligible vs Not */}
            <div>
              <div className="grid gap-px bg-border">
                <div className="bg-card p-6">
                  <h3 className="font-mono-display text-sm uppercase tracking-wider text-primary mb-4">Eligible Under MIBS</h3>
                  <ul className="space-y-2">
                    {[
                      "WiFi 6/6E/7 access points + licensing",
                      "Managed network switches",
                      "Structured cabling (Cat6/6A, fiber)",
                      "UPS/battery backup for network closets",
                      "Racks, enclosures, cable management",
                      "Firewall & CIPA-compliant content filtering",
                      "Professional installation & configuration",
                      "Ongoing monitoring & firmware management",
                      "Caching servers",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle size={12} className="text-primary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-card p-6">
                  <h3 className="font-mono-display text-sm uppercase tracking-wider text-destructive mb-4">Not Eligible</h3>
                  <ul className="space-y-2">
                    {[
                      "End-user devices (Chromebooks, tablets, laptops)",
                      "Administrative servers",
                      "Security cameras & physical security",
                      "Phone systems (separate Category 1)",
                      "Training & professional development",
                      "Software not tied to eligible equipment",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="text-destructive shrink-0 mt-0.5">✕</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Common MIBS Mistakes */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="font-mono-display text-sm uppercase tracking-wider text-primary mb-6">Common MIBS Mistakes</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              {[
                { title: "No Site Survey", desc: "Installing APs by classroom count instead of RF analysis leads to coverage gaps or co-channel interference. We've seen districts waste $50K+ on APs that degraded performance." },
                { title: "Ignoring 6GHz", desc: "WiFi 6E on 6GHz provides cleaner spectrum for high-density classrooms. Districts still deploying WiFi 5 are buying equipment obsolete before the funding cycle ends." },
                { title: "Bad Cost Allocation", desc: "If a MIBS contract includes any ineligible components without proper cost allocation, the entire contract can be denied by USAC." },
                { title: "Missing Filing Windows", desc: "E-Rate runs on a strict annual cycle. Missing the Form 470 window by one day means waiting an entire year." },
                { title: "Not Tracking Budget Reset", desc: "Category 2 budgets reset every 5 years. Districts that don't track utilization leave significant money unclaimed." },
                { title: "Self-Filing", desc: "Districts working with qualified E-Rate consultants receive 30-50% more funding on average than those that self-file." },
              ].map((mistake) => (
                <div key={mistake.title} className="bg-card p-6">
                  <h4 className="font-mono-display text-xs uppercase tracking-wider text-destructive mb-2">{mistake.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{mistake.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Help */}
      <section className="border-b border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <FileText className="text-primary mb-4" size={32} />
            <h2 className="text-3xl md:text-4xl font-medium uppercase mt-3">How Modern Edge Helps</h2>
            <p className="text-muted-foreground mt-4 max-w-xl">
              We guide you through the E-Rate lifecycle — from needs assessment to eligible equipment recommendations — and connect you with seasoned E-Rate consultants for the filing and compliance work.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {[
              { step: "01", title: "Needs Assessment", desc: "Identify all eligible services and maximize your funding potential" },
              { step: "02", title: "Application Guidance", desc: "Expert guidance on all USAC forms to ensure accuracy and compliance" },
              { step: "03", title: "Bid Management", desc: "Manage competitive bidding process for full compliance" },
              { step: "04", title: "Implementation", desc: "Deploy funded equipment and maintain compliance documentation" },
            ].map((item) => (
              <div key={item.step} className="bg-card p-8">
                <div className="text-3xl font-mono-display font-semibold text-primary/30 mb-4">{item.step}</div>
                <h3 className="font-mono-display text-sm uppercase tracking-wider mb-3">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {[
              { value: "$12M+", label: "Funding Secured" },
              { value: "150+", label: "Schools Served" },
              { value: "98%", label: "Approval Rate" },
              { value: "15+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card p-8 text-center">
                <div className="text-3xl font-mono-display font-semibold text-primary tabular-nums">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-medium uppercase">Don't Leave Federal Funding on the Table</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Billions of dollars in E-Rate funding go unclaimed every year. Let us help your institution maximize its eligibility and secure the technology funding your students deserve.
          </p>
          <Button variant="hero" size="lg" className="mt-8" asChild>
            <Link to="/quote">Start Your E-Rate Application<ArrowRight className="ml-2" size={16} /></Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EratePage;
