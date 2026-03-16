import { motion } from "framer-motion";
import { Play, Heart, MessageCircle, Share2 } from "lucide-react";

import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    image: testimonial1,
    name: "Mark Davidson",
    role: "Owner, Davidson Manufacturing",
    quote: "Modern Edge cut our downtime by 94%. The ROI was visible within the first quarter.",
    views: "12.4K",
    likes: "1.8K",
  },
  {
    image: testimonial2,
    name: "Sarah Chen",
    role: "COO, Meridian Financial",
    quote: "Their cybersecurity audit found vulnerabilities three other firms missed entirely.",
    views: "8.7K",
    likes: "943",
  },
  {
    image: testimonial3,
    name: "James Rodriguez",
    role: "IT Director, Apex Logistics",
    quote: "Cloud migration was seamless. Zero data loss, zero downtime. Exactly what they promised.",
    views: "15.2K",
    likes: "2.1K",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="text-sm font-mono-display text-primary uppercase tracking-wider">Verified Impact</span>
          <h2 className="text-3xl md:text-4xl font-medium uppercase mt-3">
            What our clients are saying
          </h2>
        </motion.div>

        {/* Centered 3-card grid */}
        <div className="grid md:grid-cols-3 gap-6 justify-items-center">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.2, 1, 0.3, 1] }}
      className="w-full max-w-[280px] group"
    >
      <div className="relative aspect-[9/16] rounded-sm overflow-hidden border border-border bg-card">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-250">
          <div className="w-14 h-14 rounded-full bg-background/30 backdrop-blur-sm border border-foreground/20 flex items-center justify-center">
            <Play size={20} className="text-foreground ml-1" fill="currentColor" />
          </div>
        </div>

        {/* Engagement icons */}
        <div className="absolute right-3 bottom-32 flex flex-col items-center gap-5">
          <div className="flex flex-col items-center gap-1">
            <Heart size={22} className="text-foreground" />
            <span className="text-xs text-foreground tabular-nums">{testimonial.likes}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <MessageCircle size={22} className="text-foreground" />
            <span className="text-xs text-foreground tabular-nums">24</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Share2 size={22} className="text-foreground" />
            <span className="text-xs text-foreground tabular-nums">Share</span>
          </div>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-sm text-foreground leading-snug mb-3">
            "{testimonial.quote}"
          </p>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-foreground/20">
              <img src={testimonial.image} alt="" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-xs font-medium text-foreground">{testimonial.name}</div>
              <div className="text-xs text-foreground/60">{testimonial.role}</div>
            </div>
          </div>
          <div className="mt-2 text-xs text-foreground/50 tabular-nums">
            {testimonial.views} views
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialSection;
