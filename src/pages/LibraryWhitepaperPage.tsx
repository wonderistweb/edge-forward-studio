import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, BookOpen, Library, DollarSign, AlertTriangle, CheckCircle, FileText, Download } from "lucide-react";
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

const LibraryWhitepaperPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingMarketingMenu />

      <IndustryHero
        image={heroImg}
        title="Is Your Library Leaving Federal Money on the Table?"
        description="94% of Wisconsin public libraries have unclaimed E-Rate Category 2 funding — over $28 million sitting untouched. Download the free whitepaper to learn why, and what your library can do about it."
        primaryCta={{ label: "Download Whitepaper", to: "/met_library_whitepaper.docx" }}
        secondaryCta={{ label: "Schedule a Consultation", to: "/contact" }}
      />

      {/* Stats Bar */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {[
              { value: "301", label: "Libraries with no C2 funding" },
              { value: "$28M+", label: "Unclaimed budget statewide" },
              { value: "94%", label: "Libraries leaving money behind" },
              { value: "$25K", label: "Minimum budget per library" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card p-8">
                <div className="text-3xl font-mono-display font-semibold text-primary tabular-nums mb-2">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-24 section-tinted">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade} className="mb-16">
            <span className="text-sm font-mono-display text-primary uppercase tracking-wider">What You'll Learn</span>
            <h2 className="text-3xl md:text-4xl font-medium uppercase mt-3 max-w-2xl">
              Inside the whitepaper
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {[
              {
                icon: DollarSign,
                title: "The $28M Problem",
                desc: "A data-driven breakdown of how much C2 funding Wisconsin libraries are leaving unclaimed — and which libraries have successfully applied.",
              },
              {
                icon: Library,
                title: "How E-Rate C2 Works",
                desc: "A clear explanation of eligible equipment, discount rates, five-year budget cycles, and the application timeline for FY2026–2030.",
              },
              {
                icon: AlertTriangle,
                title: "Why Libraries Don't Apply",
                desc: "The real barriers — process complexity, Form 470/471 requirements, PIA reviews, and the administrative burden on small teams.",
              },
              {
                icon: CheckCircle,
                title: "What Funded Libraries Did Right",
                desc: "Patterns from the 20 libraries that succeeded: large systems with internal capacity, and small libraries that leveraged regional support.",
              },
              {
                icon: FileText,
                title: "Step-by-Step Action Plan",
                desc: "Four concrete steps your library can take right now — from confirming your C2 budget to finding the right application support.",
              },
              {
                icon: BookOpen,
                title: "The Consultant Advantage",
                desc: "Why every library that used a professional E-Rate consultant received funding — and how to access that support.",
              },
            ].map((item) => (
              <motion.div key={item.title} className="bg-card p-8" {...fade}>
                <item.icon size={24} strokeWidth={1.5} className="text-primary mb-4" />
                <h3 className="text-sm font-mono-display font-medium uppercase tracking-tight mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Finding */}
      <section className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div {...fade}>
              <span className="text-sm font-mono-display text-primary uppercase tracking-wider">Key Finding</span>
              <h2 className="text-3xl md:text-4xl font-medium uppercase mt-3">
                The data is unambiguous
              </h2>
            </motion.div>
            <motion.div {...fade} transition={{ ...fade.transition, delay: 0.1 }}>
              <blockquote className="border-l-2 border-primary pl-6">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  "Every library that used a professional E-Rate consultant received funding. Every library that tried to navigate the process alone was dramatically less likely to succeed."
                </p>
                <p className="text-sm text-muted-foreground">
                  — From the whitepaper analysis of 321 Wisconsin public libraries
                </p>
              </blockquote>
            </motion.div>
          </div>

          <motion.div {...fade} className="mt-16">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
              {[
                { value: "321", label: "Libraries analyzed" },
                { value: "20", label: "Received C2 funding" },
                { value: "3", label: "Used a consultant" },
                { value: "100%", label: "Consultant success rate" },
              ].map((stat) => (
                <div key={stat.label} className="bg-card p-8">
                  <div className="text-2xl font-mono-display font-semibold text-primary tabular-nums mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 section-tinted border-t border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div {...fade} className="max-w-2xl mx-auto">
            <span className="text-sm font-mono-display text-primary uppercase tracking-wider">Take Action</span>
            <h2 className="text-3xl md:text-4xl font-medium uppercase mt-3 mb-6">
              Your library's funding is waiting
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              The FY2026–2030 E-Rate cycle is open. Download the whitepaper to understand your library's C2 budget and learn exactly how to claim it — or contact us directly for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/met_library_whitepaper.docx" download>
                <Button size="lg" className="gap-2">
                  <Download size={18} />
                  Download Whitepaper
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="gap-2">
                  Schedule a Consultation
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LibraryWhitepaperPage;
