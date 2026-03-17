import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialSection from "@/components/TestimonialSection";
import PartnershipsSection from "@/components/PartnershipsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingMarketingMenu from "@/components/FloatingMarketingMenu";

import { Link } from "react-router-dom";
import { ArrowRight, DollarSign, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heatmapImage from "@/assets/case-study-heatmap.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingMarketingMenu />
      
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialSection />
      <PartnershipsSection />
      <AboutSection />

      {/* Case Study CTA */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-mono-display text-primary uppercase tracking-wider">Featured Case Study</span>
              <h2 className="text-3xl font-medium uppercase mt-3">235K sq ft School WiFi Redesign</h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                How we deployed enterprise-grade 6GHz wireless coverage across a K-12 campus — eliminating dead zones, reducing IT tickets by 85%, and securing $180K in E-Rate funding.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {["WiFi 6E", "84+ APs", "E-Rate Funded", "Zero Downtime"].map((tag) => (
                  <span key={tag} className="text-xs font-mono-display text-primary border border-primary/30 px-3 py-1 uppercase tracking-wider">{tag}</span>
                ))}
              </div>
              <Button variant="outline" size="lg" className="mt-8" asChild>
                <Link to="/case-study/school-wifi-redesign">
                  Read Full Case Study
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
            </div>
            <div className="bg-card border border-border p-1">
              <div className="bg-secondary px-3 py-1.5 flex items-center gap-2 border-b border-border text-xs font-mono-display text-muted-foreground uppercase tracking-wider">
                6GHz Heat Map Preview
              </div>
              <img src={heatmapImage} alt="WiFi heat map" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* E-Rate CTA */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-mono-display uppercase tracking-wider px-3 py-1 mb-6">
                <DollarSign size={14} /> Federal Funding Program
              </div>
              <h2 className="text-3xl font-medium uppercase">E-Rate: Up to 90% Off School & Library Technology</h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Billions in federal funding go unclaimed every year. We help K-12 schools and public libraries secure 20-90% discounts on WiFi, networking, cabling, and internet services through the E-Rate program.
              </p>
              <ul className="space-y-3 mt-6">
                {[
                  "$12M+ in E-Rate funding secured",
                  "98% application approval rate",
                  "Full lifecycle management — Forms 470, 471, 486",
                  "MIBS contract structuring for maximum coverage",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle className="text-primary shrink-0 mt-0.5" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/e-rate">
                    Check Your Eligibility
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-px bg-border">
              {[
                { value: "$167", unit: "/student", label: "Category 2 Budget (Schools)" },
                { value: "$2.39", unit: "/sq ft", label: "Category 2 Budget (Libraries)" },
                { value: "90%", unit: "max", label: "Discount Rate" },
                { value: "150+", unit: "served", label: "Schools & Libraries" },
              ].map((stat) => (
                <div key={stat.label} className="bg-card p-6 text-center">
                  <div className="text-2xl font-mono-display font-semibold text-primary">{stat.value}<span className="text-sm text-muted-foreground font-normal">{stat.unit}</span></div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog CTA */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-sm font-mono-display text-primary uppercase tracking-wider">Insights</span>
            <h2 className="text-2xl font-medium uppercase mt-2">The Edge Report</h2>
            <p className="text-muted-foreground mt-2 text-sm">Technical insights and strategic guidance for technology leaders.</p>
          </div>
          <Button variant="outline" size="lg" asChild>
            <Link to="/blog">
              View Documentation
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </Button>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
