import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/mark-consultation-3.png";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax background image */}
      <div
        className="absolute inset-0 -top-20 -bottom-20"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for dark mode, lighter for light mode */}
        <div className="absolute inset-0 bg-background/80 light:bg-background/70" />
        {/* Purple duotone tint */}
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Accent line */}
      <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0 animate-pulse-line" />

      <div className="relative max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium uppercase leading-[1.05] mb-6">
            Infrastructure
            <br />
            that <span className="text-primary">anticipates</span>
          </h1>

          <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mb-10">
            Managed IT, Cybersecurity, and Cloud Operations for businesses across Milwaukee and Southern Wisconsin — built for companies that cannot afford a millisecond of downtime.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/quote">
                Get a Quote
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#services">Explore Architecture</a>
            </Button>
          </div>
        </motion.div>

        {/* Right side: Network visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="hidden lg:block"
        >
          <NetworkVisualization />
        </motion.div>
      </div>
    </section>
  );
};

const NetworkVisualization = () => {
  const nodes = [
    { x: 60, y: 80 }, { x: 200, y: 40 }, { x: 340, y: 100 },
    { x: 120, y: 200 }, { x: 280, y: 180 }, { x: 400, y: 220 },
    { x: 80, y: 320 }, { x: 240, y: 300 }, { x: 380, y: 340 },
    { x: 160, y: 400 }, { x: 320, y: 420 },
  ];

  const connections = [
    [0, 1], [1, 2], [0, 3], [1, 4], [2, 5],
    [3, 4], [4, 5], [3, 6], [4, 7], [5, 8],
    [6, 7], [7, 8], [6, 9], [8, 10], [7, 10],
  ];

  return (
    <svg viewBox="0 0 460 460" className="w-full h-auto">
      {connections.map(([a, b], i) => (
        <motion.line
          key={`conn-${i}`}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="hsl(var(--primary))"
          strokeWidth="1"
          strokeOpacity="0.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
        />
      ))}
      {nodes.map((node, i) => (
        <motion.g key={`node-${i}`}>
          <motion.rect
            x={node.x - 6}
            y={node.y - 6}
            width={12}
            height={12}
            fill="transparent"
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.08, type: "spring", stiffness: 300 }}
          />
          <motion.rect
            x={node.x - 2}
            y={node.y - 2}
            width={4}
            height={4}
            fill="hsl(var(--primary))"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ delay: 1 + i * 0.2, duration: 3, repeat: Infinity }}
          />
        </motion.g>
      ))}
    </svg>
  );
};

export default HeroSection;
