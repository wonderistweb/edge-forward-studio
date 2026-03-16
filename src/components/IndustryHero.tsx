import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

interface IndustryHeroProps {
  image: string;
  title: string;
  description: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
}

const IndustryHero = ({
  image,
  title,
  description,
  primaryCta = { label: "Get a Free Assessment", to: "/quote" },
  secondaryCta,
}: IndustryHeroProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-[60vh] flex items-end overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 -top-20 -bottom-20"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
      </div>

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
        >
          <span className="text-sm font-mono-display text-primary uppercase tracking-wider">Industries</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium uppercase mt-3 max-w-4xl">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button variant="hero" size="lg" asChild>
              <Link to={primaryCta.to}>
                {primaryCta.label}
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
            {secondaryCta && (
              <Button variant="outline" size="lg" asChild>
                <Link to={secondaryCta.to}>
                  {secondaryCta.label}
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryHero;
