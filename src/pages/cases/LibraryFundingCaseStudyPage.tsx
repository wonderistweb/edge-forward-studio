import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, DollarSign, Library, AlertTriangle, CheckCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingMarketingMenu from "@/components/FloatingMarketingMenu";
import IndustryHero from "@/components/IndustryHero";
import heroImg from "@/assets/industry-hero-libraries.jpg";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.6, ease: [0.2, 1, 0.3, 1] as const },
};

const LibraryFundingCaseStudyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingMarketingMenu />

      <IndustryHero
        image={heroImg}
        title="$28M in Federal Funding Left on the Table"
        description="An analysis of every Wisconsin public library's E-Rate Category 2 activity reveals that 94% of libraries are walking away from money already allocated to them — and exactly what the funded 6% did differently."
        primaryCta={{ label: "Check My Library's Budget", to: "/industries/libraries" }}
        secondaryCta={{ label: "Talk to MET", to: "/contact" }}
      />

      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {[
              { value: "321", label: "WI public libraries analyzed" },
              { value: "20", label: "Received C2 funding" },
              { value: "$28M+", label: "Estimated unclaimed budget" },
              { value: "100%", label: "Consultant success rate" },
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
        <div className="max-w-3xl mx-auto px-6 prose-content">
          <motion.div {...fade} className="mb-12">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm font-mono-display uppercase tracking-wider text-muted-foreground hover:text-primary mb-8">
              <ArrowLeft size={14} /> All Case Studies
            </Link>
            <span className="text-sm font-mono-display text-primary uppercase tracking-wider">The Problem</span>
            <h2 className="text-3xl md:text-4xl font-medium uppercase mt-3 mb-6">$28 million sitting unclaimed</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              The E-Rate program was designed to ensure libraries and schools could afford the technology infrastructure they need. Category 2 (C2) funding covers internal network equipment — switches, access points, cabling, firewalls — at discounts of 30%–90%.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Every eligible library receives a minimum C2 budget of <strong className="text-foreground">$25,000 per five-year cycle</strong>. Larger libraries receive significantly more, calculated by square footage. Milwaukee Public Library's C2 budget for the prior cycle approached <strong className="text-foreground">$2.9 million</strong> — and only a fraction was claimed.
            </p>
            <blockquote className="border-l-2 border-primary pl-6 my-8">
              <p className="text-lg text-foreground leading-relaxed">
                The funds don't roll over. Each five-year cycle has its own budget. If your library doesn't apply and receive funding in this cycle, that allocation is gone.
              </p>
            </blockquote>
          </motion.div>

          <motion.div {...fade} className="mb-12">
            <span className="text-sm font-mono-display text-primary uppercase tracking-wider">The Data</span>
            <h2 className="text-3xl font-medium uppercase mt-3 mb-6">What we found across 321 libraries</h2>
            <div className="border border-border">
              {[
                ["Libraries that received C2 funding (FY2021–2025)", "20 (6%)"],
                ["Libraries funded in the new FY2026–2030 cycle", "0 (0%)"],
                ["Average C2 budget — libraries that applied", "$284,744"],
                ["Average C2 budget — libraries that did not apply", "$94,652"],
                ["Average size of funded libraries", "63,239 sq ft"],
                ["Average size of unfunded libraries", "17,230 sq ft"],
                ["Libraries that used a professional consultant", "3 of 321"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-6 px-5 py-4 border-b border-border last:border-b-0 text-sm">
                  <span className="text-muted-foreground">{k}</span>
                  <span className="font-mono-display text-foreground tabular-nums">{v}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mt-6">
              One finding stands out above all others: <strong className="text-foreground">every library that used a professional E-Rate consultant received funding.</strong> Every library that tried to navigate the process alone was dramatically less likely to succeed. This is not a coincidence.
            </p>
          </motion.div>

          <motion.div {...fade} className="mb-12">
            <span className="text-sm font-mono-display text-primary uppercase tracking-wider">Why Most Libraries Don't Apply</span>
            <h2 className="text-3xl font-medium uppercase mt-3 mb-6">A process designed by the federal government</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">A complete E-Rate C2 application requires:</p>
            <ol className="space-y-5">
              {[
                ["File a Form 470", "Post a public solicitation for bids and wait a mandatory 28 days. The form must describe technology needs accurately enough to receive compliant bids."],
                ["Evaluate bids and select a vendor compliantly", "Vendor selection must follow USAC rules — price of eligible products must be the primary criterion, with documentation."],
                ["File a Form 471", "Within USAC's January–March window, file the funding request with accurate cost and service details. Errors can delay or deny the application."],
                ["Respond to PIA review questions", "USAC's Program Integrity Assurance team may ask follow-ups. Slow or incomplete responses can reduce funding."],
                ["Manage delivery, invoicing, and BEAR filing", "After receiving the Funding Commitment Decision Letter, coordinate delivery, pay the vendor, and file for reimbursement on schedule."],
              ].map(([title, desc], i) => (
                <li key={title} className="flex gap-5">
                  <div className="text-2xl font-mono-display font-semibold text-primary tabular-nums shrink-0">{String(i + 1).padStart(2, "0")}</div>
                  <div>
                    <h3 className="font-mono-display uppercase tracking-tight text-sm mb-2">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.div {...fade} className="mb-12">
            <span className="text-sm font-mono-display text-primary uppercase tracking-wider">What the Funded 6% Did</span>
            <h2 className="text-3xl font-medium uppercase mt-3 mb-6">Two patterns explain success</h2>
            <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
              <div className="bg-card p-6">
                <Library className="text-primary mb-3" size={20} />
                <h3 className="text-sm font-mono-display uppercase mb-2">Large urban systems with internal capacity</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Milwaukee, Madison, Kenosha, and La Crosse public libraries each have administrative staff who could absorb the application workload. Milwaukee, working with an external consultant, received $775,845 — the largest disbursement in the state.</p>
              </div>
              <div className="bg-card p-6">
                <CheckCircle className="text-primary mb-3" size={20} />
                <h3 className="text-sm font-mono-display uppercase mb-2">Small libraries with regional support</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">A cluster of small Dane County libraries — Oregon, Monona, Stoughton, Belleville, Poynette, New Glarus, Black Earth, Marshall — succeeded with shared administrative help from the South Central Library System. Other regions, largely, did not.</p>
              </div>
            </div>
          </motion.div>

          <motion.div {...fade}>
            <span className="text-sm font-mono-display text-primary uppercase tracking-wider">The Takeaway</span>
            <h2 className="text-3xl font-medium uppercase mt-3 mb-6">The barrier is process, not eligibility</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nearly every public library qualifies. The barrier is process complexity — and that barrier is entirely solvable with the right support. The FY2026–2030 cycle is open right now, and the first libraries to file will be the first to be funded.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 section-tinted border-t border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div {...fade} className="max-w-2xl mx-auto">
            <DollarSign className="text-primary mx-auto mb-4" size={32} strokeWidth={1.25} />
            <h2 className="text-3xl md:text-4xl font-medium uppercase mb-6">Find your library's C2 budget</h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Look up your library by name and see exactly how much E-Rate Category 2 funding is available to claim this cycle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="hero" asChild>
                <Link to="/industries/libraries">
                  <FileText size={16} /> Check My Library's Budget
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">
                  Schedule a Consultation <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-8 inline-flex items-center gap-2">
              <AlertTriangle size={12} /> The new FY2026–2030 cycle is open. Allocations don't roll over.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LibraryFundingCaseStudyPage;