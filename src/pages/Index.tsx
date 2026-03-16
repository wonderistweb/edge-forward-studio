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
