import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Library, Wifi } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingMarketingMenu from "@/components/FloatingMarketingMenu";
import libraryHero from "@/assets/industry-hero-libraries.jpg";
import erateHero from "@/assets/industry-hero-education.jpg";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.6, ease: [0.2, 1, 0.3, 1] as const },
};

const studies = [
  {
    slug: "wisconsin-library-funding",
    eyebrow: "Public Libraries · E-Rate",
    title: "$28M in Federal Funding Left on the Table by Wisconsin Libraries",
    summary:
      "Only 6% of Wisconsin's 321 public libraries claimed any E-Rate Category 2 funding last cycle. We analyzed every Billed Entity to uncover what the funded libraries did differently — and how the rest can catch up.",
    image: libraryHero,
    icon: Library,
    metrics: [
      { value: "321", label: "Libraries analyzed" },
      { value: "6%", label: "Received funding" },
      { value: "100%", label: "Consultant success rate" },
    ],
  },
  {
    slug: "ubiquiti-erate-specifications",
    eyebrow: "K-12 Schools · E-Rate",
    title: "Why Specifying Ubiquiti on Form 470 Quietly Costs Districts More",
    summary:
      "We examined why experienced E-Rate partners hesitate to bid Ubiquiti — no price protection, thin margins, no enterprise support — and what a performance-based specification delivers instead.",
    image: erateHero,
    icon: Wifi,
    metrics: [
      { value: "7+ mos", label: "470-to-purchase gap" },
      { value: "$0", label: "Partner price protection" },
      { value: "0", label: "Enterprise support tier" },
    ],
  },
];

const CaseStudiesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingMarketingMenu />

      <section className="pt-32 pb-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade} className="max-w-3xl">
            <span className="text-sm font-mono-display text-primary uppercase tracking-wider">Case Studies</span>
            <h1 className="text-4xl md:text-5xl font-medium uppercase mt-4 leading-tight">
              Field reports from the work
            </h1>
            <p className="text-muted-foreground mt-6 leading-relaxed text-lg">
              Data-backed analyses of the funding programs, vendor decisions, and infrastructure choices shaping Wisconsin schools, libraries, and public institutions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-px bg-border">
          {studies.map((s) => (
            <motion.article key={s.slug} className="bg-card grid lg:grid-cols-5 gap-0 overflow-hidden" {...fade}>
              <Link to={`/case-studies/${s.slug}`} className="lg:col-span-2 block group relative overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
              <div className="lg:col-span-3 p-10 flex flex-col justify-between gap-8">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono-display uppercase tracking-wider text-primary mb-4">
                    <s.icon size={14} />
                    {s.eyebrow}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-medium uppercase leading-tight">
                    <Link to={`/case-studies/${s.slug}`} className="hover:text-primary transition-colors">
                      {s.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground mt-4 leading-relaxed">{s.summary}</p>
                </div>

                <div>
                  <div className="grid grid-cols-3 gap-px bg-border mb-8">
                    {s.metrics.map((m) => (
                      <div key={m.label} className="bg-card py-4 px-2 text-center">
                        <div className="text-xl font-mono-display font-semibold text-primary tabular-nums">{m.value}</div>
                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <Link
                    to={`/case-studies/${s.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-mono-display uppercase tracking-wider text-primary hover:gap-3 transition-all"
                  >
                    Read the case study <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;