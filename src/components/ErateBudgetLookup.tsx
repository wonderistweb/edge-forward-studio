import { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Building, Users, DollarSign, ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import budgets, { type ErateBudget } from "@/data/erateBudgets";

const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

const fmtNum = (n: number) => n.toLocaleString("en-US");

const titleCase = (s: string) =>
  s
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());

const ErateBudgetLookup = () => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<ErateBudget | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    if (!query || query.length < 2) return [];
    const q = query.toLowerCase();
    return budgets
      .filter((b) => b.name.toLowerCase().includes(q) || b.city.toLowerCase().includes(q))
      .slice(0, 8);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (b: ErateBudget) => {
    setSelected(b);
    setQuery("");
    setIsOpen(false);
  };

  const usedPercentage = selected
    ? ((selected.fundedAmount + selected.pendingAmount) / selected.totalBudget) * 100
    : 0;

  return (
    <section className="border-b border-border py-24 section-tinted">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="text-xs font-mono-display text-primary uppercase tracking-wider">
            FY2026–2030 Category 2
          </span>
          <h2 className="text-3xl font-medium uppercase mt-3 max-w-2xl">
            Check your district's E-Rate funding
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl leading-relaxed">
            Search for your Wisconsin school district or library to see your allocated Category 2 budget for the upcoming funding cycle.
          </p>
        </motion.div>

        {/* Search */}
        <div className="relative max-w-xl">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setIsOpen(true);
                setSelected(null);
              }}
              onFocus={() => query.length >= 2 && setIsOpen(true)}
              placeholder="Start typing your district name..."
              className="w-full bg-card border border-border pl-12 pr-4 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <ChevronDown
              size={16}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
          </div>

          <AnimatePresence>
            {isOpen && filtered.length > 0 && (
              <motion.div
                ref={dropdownRef}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
                className="absolute z-50 w-full mt-px border border-border bg-card shadow-lg max-h-80 overflow-y-auto"
              >
                {filtered.map((b) => (
                  <button
                    key={b.ben}
                    onClick={() => handleSelect(b)}
                    className="w-full text-left px-4 py-3 hover:bg-accent/50 transition-colors border-b border-border last:border-b-0 flex items-center justify-between gap-4"
                  >
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {titleCase(b.name)}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {titleCase(b.city)}, WI · {b.applicantType}
                      </p>
                    </div>
                    <span className="text-xs font-mono-display text-primary shrink-0">
                      {fmt(b.totalBudget)}
                    </span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {isOpen && query.length >= 2 && filtered.length === 0 && (
            <div className="absolute z-50 w-full mt-px border border-border bg-card px-4 py-6 text-center">
              <p className="text-sm text-muted-foreground">
                No districts found matching "{query}"
              </p>
            </div>
          )}
        </div>

        {/* Selected District Result */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.4, ease: [0.2, 1, 0.3, 1] }}
              className="mt-8"
            >
              <div className="border border-border bg-card">
                {/* Header */}
                <div className="px-6 py-5 border-b border-border">
                  <h3 className="text-lg font-medium uppercase">
                    {titleCase(selected.name)}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {titleCase(selected.city)}, Wisconsin · BEN {selected.ben} · {selected.budgetCycle} · {selected.budgetVersion}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
                  <div className="bg-card p-6">
                    <DollarSign size={18} className="text-primary mb-3" />
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      Total C2 Budget
                    </p>
                    <p className="text-2xl font-medium text-foreground">
                      {fmt(selected.totalBudget)}
                    </p>
                  </div>
                  <div className="bg-card p-6">
                    <DollarSign size={18} className="text-primary mb-3" />
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      Available Funding
                    </p>
                    <p className="text-2xl font-medium text-primary">
                      {fmt(selected.availableAmount)}
                    </p>
                  </div>
                  <div className="bg-card p-6">
                    <Users size={18} className="text-primary mb-3" />
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      {selected.applicantType === "Library" ? "Square Footage" : "Full-Time Students"}
                    </p>
                    <p className="text-2xl font-medium text-foreground">
                      {selected.applicantType === "Library"
                        ? fmtNum(selected.librarySquareFootage)
                        : fmtNum(selected.fullTimeStudents)}
                    </p>
                  </div>
                  <div className="bg-card p-6">
                    <Building size={18} className="text-primary mb-3" />
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      Eligible Entities
                    </p>
                    <p className="text-2xl font-medium text-foreground">
                      {selected.entityCount}
                    </p>
                  </div>
                </div>

                {/* Budget Bar */}
                <div className="px-6 py-5 border-t border-border">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                    <span>Budget utilization</span>
                    <span>{usedPercentage.toFixed(1)}% committed</span>
                  </div>
                  <div className="w-full h-2 bg-border overflow-hidden">
                    <div className="h-full flex">
                      {selected.fundedAmount > 0 && (
                        <div
                          className="h-full bg-primary"
                          style={{ width: `${(selected.fundedAmount / selected.totalBudget) * 100}%` }}
                        />
                      )}
                      {selected.pendingAmount > 0 && (
                        <div
                          className="h-full bg-primary/40"
                          style={{ width: `${(selected.pendingAmount / selected.totalBudget) * 100}%` }}
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex gap-6 mt-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 bg-primary inline-block" /> Funded: {fmt(selected.fundedAmount)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 bg-primary/40 inline-block" /> Pending: {fmt(selected.pendingAmount)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 bg-border inline-block border border-muted-foreground/20" /> Available: {fmt(selected.availableAmount)}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div className="px-6 py-6 border-t border-border bg-primary/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Ready to maximize your {fmt(selected.availableAmount)} in available funding?
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Our E-Rate specialists will help you plan, apply, and implement — at no upfront cost.
                    </p>
                  </div>
                  <Button variant="hero" size="lg" asChild className="shrink-0">
                    <Link to="/quote">
                      Get a Free Consultation <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ErateBudgetLookup;
