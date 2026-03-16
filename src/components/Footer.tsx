const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="font-mono-display text-lg font-semibold tracking-tighter text-foreground uppercase">
              Modern Edge<span className="text-primary">_</span>
            </span>
            <p className="text-sm text-muted-foreground mt-2">
              Managed IT · Cybersecurity · Cloud Infrastructure
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors duration-250">Solutions</a>
            <a href="#partnerships" className="hover:text-foreground transition-colors duration-250">Partnerships</a>
            <a href="#about" className="hover:text-foreground transition-colors duration-250">About</a>
            <a href="#contact" className="hover:text-foreground transition-colors duration-250">Contact</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Modern Edge Technology. All rights reserved.
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
