import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, DollarSign, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ErateBudgetLookup from "@/components/ErateBudgetLookup";

const STORAGE_KEY = "erate-popup-dismissed";
const DISMISS_DURATION_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

function isErateSeason(): boolean {
  const month = new Date().getMonth(); // 0-indexed
  // E-Rate season: September (8) through March (2)
  return month >= 8 || month <= 2;
}

const ErateSeasonPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!isErateSeason()) return;

    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed) {
      const dismissedAt = parseInt(dismissed, 10);
      if (Date.now() - dismissedAt < DISMISS_DURATION_MS) return;
    }

    // Delay popup so it doesn't hit users immediately
    const timer = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setShow(false);
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
  };

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
            className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm"
            onClick={dismiss}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.2, 1, 0.3, 1] }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-[101] w-auto md:w-full md:max-w-4xl max-h-[90vh] overflow-y-auto bg-card border border-primary/30 shadow-[0_0_60px_hsl(270_50%_50%/0.15)]"
          >
            {/* Close button */}
            <button
              onClick={dismiss}
              className="absolute top-4 right-4 z-10 p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="px-6 md:px-10 pt-8 md:pt-10 pb-6 border-b border-border bg-primary/5">
              <span className="inline-flex items-center gap-2 text-xs font-mono-display text-primary uppercase tracking-wider bg-primary/10 px-3 py-1 mb-4 animate-erate-glow rounded-sm">
                <DollarSign size={14} /> E-Rate Filing Season Is Open
              </span>
              <h2 className="text-2xl md:text-3xl font-medium uppercase pr-8">
                Are you maximizing your E-Rate funding?
              </h2>
              <p className="text-sm text-muted-foreground mt-3 max-w-xl leading-relaxed">
                Wisconsin districts have millions in allocated Category 2 budgets for FY2026–2030. Search below to see how much funding your district has available — then let us help you capture every dollar.
              </p>
            </div>

            {/* Inline budget lookup */}
            <div className="px-6 md:px-10 py-8">
              <ErateBudgetLookup embedded />
            </div>

            {/* Footer actions */}
            <div className="px-6 md:px-10 py-5 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 bg-card">
              <button
                onClick={dismiss}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
              >
                Continue to site →
              </button>
              <Button variant="hero" size="lg" asChild>
                <Link to="/erate" onClick={dismiss}>
                  Learn More About E-Rate <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ErateSeasonPopup;
