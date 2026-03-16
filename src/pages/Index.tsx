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
import { ArrowRight } from "lucide-react";
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
