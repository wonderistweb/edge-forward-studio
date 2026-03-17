import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState as useStateRef, useMemo, useRef } from "react";
import { X, DollarSign, ArrowRight, Search, Users, Building, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import budgets, { type ErateBudget } from "@/data/erateBudgets";

const STORAGE_KEY = "erate-popup-dismissed";
const DISMISS_DURATION_MS = 7 * 24 * 60 * 60 * 1000;

const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const fmtNum = (n: number) => n.toLocaleString("en-US");
const titleCase = (s: string) =>
  s.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());

function isErateSeason(): boolean {
  const month = new Date().getMonth();
  return month >= 8 || month <= 2;
}

const ErateSeasonPopup = () => {
  const [show, setShow] = useState(false);
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
      .slice(0, 6);
  }, [query]);

  useEffect(() => {
    if (!isErateSeason()) return;
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed) {
      const dismissedAt = parseInt(dismissed, 10);
      if (Date.now() - dismissedAt < DISMISS_DURATION_MS) return;
    }
    const timer = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(e.target as Node) &&
        inputRef.current && !inputRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dismiss = () => {
    setShow(false);
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
  };

  const handleSelect = (b: ErateBudget) => {
    setSelected(b);
    setQuery("");
    setIsOpen(false);
  };

  const usedPercentage = selected
    ? ((selected.fundedAmount + selected.pendingAmount) / selected.totalBudget) * 100
    : 0;

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-background/85 backdrop-blur-md"
            onClick={dismiss}
          />

          {/* Modal — true centered takeover */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.5, ease: [0.2, 1, 0.3, 1] }}
            className="fixed z-[101] inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl max-h-[90vh] overflow-y-auto bg-card border border-primary/40 shadow-[0_0_80px_hsl(270_50%_50%/0.25),0_0_160px_hsl(270_50%_50%/0.1)]"
          >
            {/* Close */}
            <button
              onClick={dismiss}
              className="absolute top-4 right-4 z-10 p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Accent bar */}
            <div className="h-1 bg-gradient-to-r from-primary/80 via-primary to-primary/80" />

            <AnimatePresence mode="wait">
              {!selected ? (
                <motion.div
                  key="search"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Search state */}
                  <div className="px-8 md:px-12 pt-10 pb-8 text-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.4 }}
                      className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center animate-erate-glow"
                    >
                      <DollarSign size={28} className="text-primary" />
                    </motion.div>

                    <span className="text-xs font-mono-display text-primary uppercase tracking-widest">
                      E-Rate Filing Season Is Open
                    </span>
                    <h2 className="text-2xl md:text-3xl font-medium uppercase mt-3">
                      Is your district maximizing<br />its E-Rate funding?
                    </h2>
                    <p className="text-sm text-muted-foreground mt-4 max-w-md mx-auto leading-relaxed">
                      Wisconsin districts have millions in allocated Category 2 budgets. Find out how much your district has available.
                    </p>
                  </div>

                  {/* Search input */}
                  <div className="px-8 md:px-12 pb-8 relative">
                    <div className="relative">
                      <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
                      <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(e) => { setQuery(e.target.value); setIsOpen(true); }}
                        onFocus={() => query.length >= 2 && setIsOpen(true)}
                        placeholder="Type your school district name..."
                        className="w-full bg-background border-2 border-primary/40 focus:border-primary pl-12 pr-4 py-5 text-base text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors animate-erate-glow rounded-sm"
                        autoFocus
                      />
                    </div>

                    <AnimatePresence>
                      {isOpen && filtered.length > 0 && (
                        <motion.div
                          ref={dropdownRef}
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          className="absolute left-8 right-8 md:left-12 md:right-12 z-50 mt-px border border-border bg-card shadow-lg max-h-64 overflow-y-auto"
                        >
                          {filtered.map((b) => (
                            <button
                              key={b.ben}
                              onClick={() => handleSelect(b)}
                              className="w-full text-left px-5 py-4 hover:bg-primary/5 transition-colors border-b border-border last:border-b-0 flex items-center justify-between gap-4"
                            >
                              <div>
                                <p className="text-sm font-medium text-foreground">{titleCase(b.name)}</p>
                                <p className="text-xs text-muted-foreground">{titleCase(b.city)}, WI</p>
                              </div>
                              <span className="text-sm font-mono-display text-primary font-semibold shrink-0">
                                {fmt(b.totalBudget)}
                              </span>
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {isOpen && query.length >= 2 && filtered.length === 0 && (
                      <div className="absolute left-8 right-8 md:left-12 md:right-12 z-50 mt-px border border-border bg-card px-4 py-6 text-center">
                        <p className="text-sm text-muted-foreground">No districts found matching "{query}"</p>
                      </div>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="px-8 md:px-12 py-5 border-t border-border text-center">
                    <button
                      onClick={dismiss}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      No thanks, continue to site →
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  {/* Result state — full data visualization */}
                  <div className="px-8 md:px-12 pt-8 pb-6">
                    <button
                      onClick={() => setSelected(null)}
                      className="text-xs text-muted-foreground hover:text-primary transition-colors mb-4 flex items-center gap-1"
                    >
                      ← Search another district
                    </button>
                    <h3 className="text-xl md:text-2xl font-medium uppercase">
                      {titleCase(selected.name)}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {titleCase(selected.city)}, Wisconsin · BEN {selected.ben} · {selected.budgetCycle}
                    </p>
                  </div>

                  {/* Big number hero */}
                  <div className="px-8 md:px-12 pb-6">
                    <div className="bg-primary/10 border border-primary/30 p-6 md:p-8 text-center">
                      <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Available Funding</p>
                      <p className="text-4xl md:text-5xl font-medium text-primary font-mono-display tabular-nums">
                        {fmt(selected.availableAmount)}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        of {fmt(selected.totalBudget)} total C2 budget
                      </p>
                    </div>
                  </div>

                  {/* Stats row */}
                  <div className="mx-8 md:mx-12 grid grid-cols-3 gap-px bg-border mb-6">
                    <div className="bg-card p-4 text-center">
                      <Users size={16} className="text-primary mx-auto mb-2" />
                      <p className="text-lg font-medium tabular-nums">{fmtNum(selected.fullTimeStudents)}</p>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Students</p>
                    </div>
                    <div className="bg-card p-4 text-center">
                      <Building size={16} className="text-primary mx-auto mb-2" />
                      <p className="text-lg font-medium tabular-nums">{selected.entityCount}</p>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Buildings</p>
                    </div>
                    <div className="bg-card p-4 text-center">
                      <DollarSign size={16} className="text-primary mx-auto mb-2" />
                      <p className="text-lg font-medium tabular-nums">{usedPercentage.toFixed(0)}%</p>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Committed</p>
                    </div>
                  </div>

                  {/* Budget bar */}
                  <div className="px-8 md:px-12 pb-6">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                      <span>Budget utilization</span>
                      <span>{(100 - usedPercentage).toFixed(1)}% available</span>
                    </div>
                    <div className="w-full h-3 bg-border overflow-hidden rounded-sm">
                      <div className="h-full flex">
                        {selected.fundedAmount > 0 && (
                          <div className="h-full bg-primary" style={{ width: `${(selected.fundedAmount / selected.totalBudget) * 100}%` }} />
                        )}
                        {selected.pendingAmount > 0 && (
                          <div className="h-full bg-primary/40" style={{ width: `${(selected.pendingAmount / selected.totalBudget) * 100}%` }} />
                        )}
                      </div>
                    </div>
                    <div className="flex gap-4 mt-2 text-[10px] text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 bg-primary inline-block" /> Funded {fmt(selected.fundedAmount)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 bg-primary/40 inline-block" /> Pending {fmt(selected.pendingAmount)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 bg-border border border-muted-foreground/20 inline-block" /> Available {fmt(selected.availableAmount)}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="px-8 md:px-12 py-6 border-t border-border bg-primary/5">
                    <p className="text-sm font-medium text-foreground text-center mb-1">
                      Want help capturing your {fmt(selected.availableAmount)}?
                    </p>
                    <p className="text-xs text-muted-foreground text-center mb-5">
                      Our E-Rate specialists handle the entire process — at no upfront cost.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button variant="hero" size="lg" asChild className="flex-1">
                        <Link to="/quote" onClick={dismiss}>
                          Get a Free Consultation <ArrowRight className="ml-2" size={16} />
                        </Link>
                      </Button>
                      <Button variant="outline" size="lg" asChild className="flex-1">
                        <Link to="/erate" onClick={dismiss}>
                          Learn About E-Rate
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ErateSeasonPopup;
