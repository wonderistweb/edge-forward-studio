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
import { ArrowRight, DollarSign, CheckCircle, Library, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import libraryCaseImg from "@/assets/industry-hero-libraries.jpg";
import erateCaseImg from "@/assets/case-ubiquiti-products.webp";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingMarketingMenu />
      
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      {/* <TestimonialSection /> */}
      <PartnershipsSection />
      <AboutSection />

      {/* Case Studies */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-sm font-mono-display text-primary uppercase tracking-wider">Case Studies</span>
              <h2 className="text-3xl font-medium uppercase mt-2 max-w-xl">Field reports from the work</h2>
            </div>
            <Button variant="outline" asChild>
              <Link to="/case-studies">
                View All Case Studies <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border">
            {[
              {
                to: "/case-studies/wisconsin-library-funding",
                eyebrow: "Public Libraries · E-Rate",
                title: "$28M in Federal Funding Left on the Table by Wisconsin Libraries",
                desc: "Only 6% of Wisconsin's 321 public libraries claimed any E-Rate Category 2 funding last cycle. Here's what the funded ones did differently.",
                image: libraryCaseImg,
                icon: Library,
              },
              {
                to: "/case-studies/ubiquiti-erate-specifications",
                eyebrow: "K-12 Schools · E-Rate",
                title: "Why Specifying Ubiquiti on Form 470 Quietly Costs Districts More",
                desc: "No price protection, thin margins, no enterprise support — and how a performance-based spec opens the bid pool to better partners.",
                image: erateCaseImg,
                icon: Wifi,
              },
            ].map((c) => (
              <Link key={c.to} to={c.to} className="bg-card group block overflow-hidden">
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover grayscale contrast-110 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-primary/25 mix-blend-color pointer-events-none transition-opacity duration-700 group-hover:opacity-0" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-xs font-mono-display uppercase tracking-wider text-primary mb-3">
                    <c.icon size={14} /> {c.eyebrow}
                  </div>
                  <h3 className="text-xl font-medium uppercase leading-tight group-hover:text-primary transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{c.desc}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-mono-display uppercase tracking-wider text-primary mt-6 group-hover:gap-3 transition-all">
                    Read case study <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* E-Rate CTA */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
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
