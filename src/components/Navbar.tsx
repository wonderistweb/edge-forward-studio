import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Solutions", href: "#services" },
  { label: "Partnerships", href: "#partnerships" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "/blog", isRoute: true },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-250 snap-curve ${
        scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-mono-display text-lg font-semibold tracking-tighter text-foreground uppercase">
          Modern Edge<span className="text-primary">_</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
            item.isRoute ? (
              <Link
                key={item.label}
                to={item.href}
                className="text-muted-foreground hover:text-foreground text-sm font-mono-display uppercase tracking-wider transition-colors duration-250 snap-curve"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-foreground text-sm font-mono-display uppercase tracking-wider transition-colors duration-250 snap-curve"
              >
                {item.label}
              </a>
            )
          )}
          <Button variant="hero" size="sm" asChild>
            <a href="#contact">Request Audit</a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-background border-b border-border px-6 pb-6"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-muted-foreground hover:text-foreground text-sm font-mono-display uppercase tracking-wider border-b border-border"
            >
              {item.label}
            </a>
          ))}
          <Button variant="hero" size="sm" className="mt-4 w-full" asChild>
            <a href="#contact">Request Audit</a>
          </Button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
