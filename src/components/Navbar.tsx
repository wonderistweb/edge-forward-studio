import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const industryItems = [
  { label: "Education (K-12)", href: "/industries/education" },
  { label: "Hospitality", href: "/industries/hospitality" },
  { label: "Corporate", href: "/industries/corporate" },
  { label: "Custom", href: "/industries/custom" },
  { label: "E-Rate Program", href: "/e-rate" },
];

const navItems = [
  { label: "Solutions", href: "#services" },
  { label: "Industries", href: "#", isDropdown: true },
  { label: "Partnerships", href: "#partnerships" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "/blog", isRoute: true },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHashClick = (href: string) => {
    setMobileOpen(false);
    if (location.pathname !== "/") {
      navigate("/" + href);
    } else {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Modern Edge Technology" className="h-10 w-auto brightness-0 invert" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
            item.isDropdown ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setIndustriesOpen(true)}
                onMouseLeave={() => setIndustriesOpen(false)}
              >
                <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground text-sm font-mono-display uppercase tracking-wider transition-colors duration-250 snap-curve">
                  {item.label}
                  <ChevronDown size={14} className={`transition-transform duration-200 ${industriesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {industriesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-card border border-border shadow-xl"
                    >
                      {industryItems.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.href}
                          onClick={() => setIndustriesOpen(false)}
                          className="block px-5 py-3 text-sm font-mono-display uppercase tracking-wider text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-150 border-b border-border last:border-b-0"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : item.isRoute ? (
              <Link
                key={item.label}
                to={item.href}
                className="text-muted-foreground hover:text-foreground text-sm font-mono-display uppercase tracking-wider transition-colors duration-250 snap-curve"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.label}
                onClick={() => handleHashClick(item.href)}
                className="text-muted-foreground hover:text-foreground text-sm font-mono-display uppercase tracking-wider transition-colors duration-250 snap-curve"
              >
                {item.label}
              </button>
            )
          )}
          <Button variant="hero" size="sm" asChild>
            <Link to="/quote">Get a Quote</Link>
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
          {navItems.map((item) =>
            item.isDropdown ? (
              <div key={item.label}>
                <button
                  onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                  className="flex items-center justify-between w-full py-3 text-muted-foreground hover:text-foreground text-sm font-mono-display uppercase tracking-wider border-b border-border"
                >
                  {item.label}
                  <ChevronDown size={14} className={`transition-transform duration-200 ${mobileIndustriesOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileIndustriesOpen && (
                  <div className="pl-4 border-b border-border">
                    {industryItems.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-3 text-muted-foreground hover:text-foreground text-sm font-mono-display uppercase tracking-wider border-b border-border last:border-b-0"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : item.isRoute ? (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-muted-foreground hover:text-foreground text-sm font-mono-display uppercase tracking-wider border-b border-border"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.label}
                onClick={() => handleHashClick(item.href)}
                className="block w-full text-left py-3 text-muted-foreground hover:text-foreground text-sm font-mono-display uppercase tracking-wider border-b border-border"
              >
                {item.label}
              </button>
            )
          )}
          <Button variant="hero" size="sm" className="mt-4 w-full" asChild>
            <Link to="/quote">Get a Quote</Link>
          </Button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
