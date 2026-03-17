import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Megaphone, X, Image, Mail, BookOpen, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  { icon: Image, label: "Ad Examples", href: "/marketing/ads", desc: "Campaign creatives" },
  { icon: Mail, label: "Email Sequences", href: "/marketing/emails", desc: "Nurture campaigns" },
  { icon: BookOpen, label: "E-Book", href: "/marketing/ebook", desc: "Expert guide" },
  { icon: FileText, label: "Library Whitepaper", href: "/marketing/library-whitepaper", desc: "E-Rate funding report" },
];

const FloatingMarketingMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2, ease: [0.2, 1, 0.3, 1] }}
            className="mb-3 w-64 bg-card border border-border shadow-2xl overflow-hidden"
          >
            <div className="px-5 py-4 border-b border-border">
              <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Marketing Showcase</span>
              <p className="text-xs text-muted-foreground mt-1">Explore our marketing materials</p>
            </div>
            {menuItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 + 0.1 }}
              >
                <Link
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-4 px-5 py-4 hover:bg-secondary transition-colors duration-150 border-b border-border last:border-b-0 group"
                >
                  <div className="w-9 h-9 bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon size={16} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">{item.label}</div>
                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg shadow-primary/25 flex items-center justify-center hover:shadow-xl hover:shadow-primary/30 transition-shadow duration-250"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <Megaphone size={22} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default FloatingMarketingMenu;
