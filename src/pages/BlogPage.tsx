import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Mail } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const BlogPage = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast({
      title: "You're subscribed",
      description: "We'll send The Edge Report straight to your inbox.",
    });
    setEmail("");
  };

  // Show CTA card when post count doesn't fill the lg:grid-cols-3 row evenly
  const showNewsletterCta = blogPosts.length % 3 !== 0;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 1, 0.3, 1] }}
          >
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-250 mb-8">
              <ArrowLeft size={14} />
              Back to Home
            </Link>
            <span className="block text-sm font-mono-display text-primary uppercase tracking-wider">Insights</span>
            <h1 className="text-4xl md:text-5xl font-medium uppercase mt-3">
              The Edge Report
            </h1>
            <p className="text-muted-foreground mt-4 max-w-xl leading-relaxed">
              Technical insights, industry analysis, and strategic guidance for technology leaders.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="block bg-card hover:bg-card-hover h-full border-t-2 border-t-transparent hover:border-t-primary transition-all duration-250 snap-curve group"
                >
                  {/* Cover image */}
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono-display text-primary uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground tabular-nums">
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-base font-mono-display font-medium uppercase tracking-tight mb-3 group-hover:text-primary transition-colors duration-250">
                      {post.title}
                    </h2>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground tabular-nums">
                        {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                      <ArrowRight size={14} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-250" />
                    </div>
                    <div className="text-xs text-muted-foreground mt-3">
                      By {post.author.name}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
            {showNewsletterCta && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: blogPosts.length * 0.05, duration: 0.4 }}
                className="bg-card border-t-2 border-t-primary p-8 flex flex-col justify-between min-h-[400px]"
              >
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <Mail size={16} className="text-primary" />
                    <span className="text-xs font-mono-display text-primary uppercase tracking-wider">
                      The Edge Report
                    </span>
                  </div>
                  <h3 className="text-base font-mono-display font-medium uppercase tracking-tight mb-3">
                    Get insights in your inbox
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Subscribe for technical analysis and strategic guidance on managed IT, E-Rate, and infrastructure — direct from our senior engineers.
                  </p>
                </div>
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <Input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="font-mono-display text-sm"
                  />
                  <Button type="submit" variant="hero" className="w-full">
                    Subscribe
                    <ArrowRight size={14} />
                  </Button>
                </form>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
