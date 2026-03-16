import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import ThemeToggle from "@/components/ThemeToggle";
import { useTheme } from "@/hooks/use-theme";

const industryItems = [
  { label: "Education (K-12)", href: "/industries/education" },
  { label: "Libraries", href: "/industries/libraries" },
  { label: "Hospitality", href: "/industries/hospitality" },
  { label: "Corporate", href: "/industries/corporate" },
  { label: "Healthcare", href: "/industries/healthcare" },
  { label: "Manufacturing", href: "/industries/manufacturing" },
  { label: "Retail", href: "/industries/retail" },
  { label: "Government", href: "/industries/government" },
  { label: "Non-Profit", href: "/industries/non-profit" },
  { label: "Legal", href: "/industries/legal" },
  { label: "Financial Services", href: "/industries/financial-services" },
  { label: "Real Estate", href: "/industries/real-estate" },
  { label: "Custom Solutions", href: "/industries/custom" },
  { label: "E-Rate Program", href: "/e-rate" },
];

const solutionItems = [
  { label: "Access Control & Cameras", href: "/services/access-control" },
  { label: "Hardware & Software", href: "/services/hardware-software" },
  { label: "Voice Services", href: "/services/voice-services" },
  { label: "IT Audits", href: "/services/it-audits" },
  { label: "Cloud Computing & Migrations", href: "/services/cloud-migrations" },
  { label: "Wiring & Wireless Networks", href: "/services/wireless-networks" },
  { label: "Business Continuity & DR", href: "/services/business-continuity" },
  { label: "E-Rate Vendor Services", href: "/services/e-rate" },
];

const navItems = [
  { label: "Solutions", href: "#", isDropdown: true, dropdownKey: "solutions" as const },
  { label: "Industries", href: "#", isDropdown: true, dropdownKey: "industries" as const },
  { label: "Partnerships", href: "#partnerships" },
  { label: "About", href: "/about", isRoute: true },
  { label: "Blog", href: "/blog", isRoute: true },
  { label: "Contact", href: "/contact", isRoute: true },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle hash scrolling after navigation
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

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
          <img src={logo} alt="Modern Edge Technology" className="h-10 w-auto nav-logo" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const dropdownItems = item.dropdownKey === "solutions" ? solutionItems : item.dropdownKey === "industries" ? industryItems : [];
            return item.isDropdown ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.dropdownKey!)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground text-sm font-mono-display uppercase tracking-wider transition-colors duration-250 snap-curve">
                  {item.label}
                  <ChevronDown size={14} className={`transition-transform duration-200 ${openDropdown === item.dropdownKey ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {openDropdown === item.dropdownKey && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] bg-card border border-border shadow-xl grid grid-cols-2"
                    >
                      {dropdownItems.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.href}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-5 py-3 text-sm font-mono-display uppercase tracking-wider text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-150 border-b border-border"
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
              <a
                key={item.label}
                href={`/${item.href}`}
                onClick={() => setMobileOpen(false)}
                className="text-muted-foreground hover:text-foreground text-sm font-mono-display uppercase tracking-wider transition-colors duration-250 snap-curve"
              >
                {item.label}
              </a>
            );
          })}
          <ThemeToggle />
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
          {navItems.map((item) => {
            const dropdownItems = item.dropdownKey === "solutions" ? solutionItems : item.dropdownKey === "industries" ? industryItems : [];
            return item.isDropdown ? (
              <div key={item.label}>
                <button
                  onClick={() => setMobileDropdown(mobileDropdown === item.dropdownKey ? null : item.dropdownKey!)}
                  className="flex items-center justify-between w-full py-3 text-muted-foreground hover:text-foreground text-sm font-mono-display uppercase tracking-wider border-b border-border"
                >
                  {item.label}
                  <ChevronDown size={14} className={`transition-transform duration-200 ${mobileDropdown === item.dropdownKey ? "rotate-180" : ""}`} />
                </button>
                {mobileDropdown === item.dropdownKey && (
                  <div className="pl-4 border-b border-border">
                    {dropdownItems.map((sub) => (
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
              <a
                key={item.label}
                href={`/${item.href}`}
                onClick={() => setMobileOpen(false)}
                className="block w-full text-left py-3 text-muted-foreground hover:text-foreground text-sm font-mono-display uppercase tracking-wider border-b border-border"
              >
                {item.label}
              </a>
            );
          })}
          <div className="flex items-center gap-3 mt-4">
            <ThemeToggle />
            <Button variant="hero" size="sm" className="flex-1" asChild>
              <Link to="/quote">Get a Quote</Link>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
