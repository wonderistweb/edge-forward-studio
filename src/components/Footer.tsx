import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const serviceAreas = [
  { label: "Milwaukee", href: "/areas/milwaukee" },
  { label: "Madison", href: "/areas/madison" },
  { label: "Waukesha", href: "/areas/waukesha" },
  { label: "Kenosha", href: "/areas/kenosha" },
  { label: "Racine", href: "/areas/racine" },
  { label: "Sheboygan", href: "/areas/sheboygan" },
  { label: "Appleton", href: "/areas/appleton" },
  { label: "Oshkosh", href: "/areas/oshkosh" },
  { label: "Green Bay", href: "/areas/green-bay" },
  { label: "Stevens Point", href: "/areas/stevens-point" },
  { label: "Wausau", href: "/areas/wausau" },
  { label: "Eau Claire", href: "/areas/eau-claire" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Modern Edge Technology" className="h-10 w-auto nav-logo" />
            </div>
            <p className="text-xs text-muted-foreground max-w-xs leading-relaxed">
              Enterprise-grade IT solutions serving Milwaukee, Southern Wisconsin, and businesses statewide.
            </p>
            <address className="text-xs text-muted-foreground not-italic mt-3 leading-relaxed">
              Milwaukee, WI · Serving all of Wisconsin
            </address>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-mono-display uppercase tracking-wider text-foreground mb-4">Navigation</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="/#services" className="hover:text-foreground transition-colors duration-250">Solutions</a>
              <a href="/#partnerships" className="hover:text-foreground transition-colors duration-250">Partnerships</a>
              <Link to="/about" className="hover:text-foreground transition-colors duration-250">About</Link>
              <Link to="/blog" className="hover:text-foreground transition-colors duration-250">Blog</Link>
              <Link to="/quote" className="hover:text-foreground transition-colors duration-250">Get a Quote</Link>
              <Link to="/contact" className="hover:text-foreground transition-colors duration-250">Contact</Link>
            </div>
          </div>

          {/* Areas We Serve */}
          <div>
            <h4 className="text-xs font-mono-display uppercase tracking-wider text-foreground mb-4">Areas We Serve</h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              {serviceAreas.map((area) => (
                <Link
                  key={area.label}
                  to={area.href}
                  className="hover:text-foreground transition-colors duration-250"
                >
                  {area.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Modern Edge Technology. All rights reserved. · Milwaukee, Wisconsin
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono-display text-muted-foreground tabular-nums">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
