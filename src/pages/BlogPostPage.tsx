import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import markPhoto from "@/assets/mark-duerwachter.jpg";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-mono-display uppercase">Post Not Found</h1>
          <Link to="/blog" className="text-primary mt-4 inline-block">Back to Blog</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <article className="pt-32 pb-32">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 1, 0.3, 1] }}
          >
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-250 mb-8">
              <ArrowLeft size={14} />
              Back to The Edge Report
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-mono-display text-primary uppercase tracking-wider">
                {post.category}
              </span>
              <span className="text-xs text-muted-foreground">·</span>
              <span className="text-xs text-muted-foreground tabular-nums">
                {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </span>
              <span className="text-xs text-muted-foreground">·</span>
              <span className="text-xs text-muted-foreground tabular-nums">{post.readTime} read</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-medium uppercase leading-tight mb-8">
              {post.title}
            </h1>

            {/* Author */}
            <div className="flex items-center gap-4 mb-8">
              <img src={markPhoto} alt={post.author.name} className="w-12 h-12 rounded-full object-cover border border-border" />
              <div>
                <div className="text-sm font-medium text-foreground">{post.author.name}</div>
                <div className="text-xs text-muted-foreground">{post.author.role}</div>
              </div>
            </div>

            {/* Cover image */}
            <div className="aspect-[16/9] overflow-hidden rounded-sm mb-12">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Render markdown-like content */}
            <div className="prose-custom space-y-6">
              {post.content.split("\n\n").map((block, i) => {
                if (block.startsWith("## ")) {
                  return (
                    <h2 key={i} className="text-xl font-mono-display font-medium uppercase tracking-tight mt-12 mb-4">
                      {block.replace("## ", "")}
                    </h2>
                  );
                }
                if (block.startsWith("### ")) {
                  return (
                    <h3 key={i} className="text-lg font-mono-display font-medium uppercase tracking-tight mt-8 mb-3">
                      {block.replace("### ", "")}
                    </h3>
                  );
                }
                if (block.startsWith("- ") || block.startsWith("- [")) {
                  return (
                    <ul key={i} className="space-y-2">
                      {block.split("\n").map((line, j) => (
                        <li key={j} className="text-muted-foreground leading-relaxed flex gap-2">
                          <span className="text-primary mt-1">·</span>
                          <span dangerouslySetInnerHTML={{
                            __html: line
                              .replace(/^- \[.\] /, "")
                              .replace(/^- /, "")
                              .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
                          }} />
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (block.startsWith("1. ")) {
                  return (
                    <ol key={i} className="space-y-2">
                      {block.split("\n").map((line, j) => (
                        <li key={j} className="text-muted-foreground leading-relaxed flex gap-3">
                          <span className="font-mono-display text-primary text-sm tabular-nums">{String(j + 1).padStart(2, "0")}</span>
                          <span dangerouslySetInnerHTML={{
                            __html: line
                              .replace(/^\d+\.\s/, "")
                              .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
                          }} />
                        </li>
                      ))}
                    </ol>
                  );
                }
                if (block.startsWith("|")) {
                  const rows = block.split("\n").filter(r => !r.startsWith("|--"));
                  const headers = rows[0]?.split("|").filter(Boolean).map(h => h.trim());
                  const dataRows = rows.slice(1);
                  return (
                    <div key={i} className="border border-border rounded-sm overflow-hidden">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-card">
                            {headers?.map((h, hi) => (
                              <th key={hi} className="text-left p-3 font-mono-display uppercase text-xs tracking-wider text-muted-foreground border-b border-border">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {dataRows.map((row, ri) => (
                            <tr key={ri} className="border-b border-border last:border-0">
                              {row.split("|").filter(Boolean).map((cell, ci) => (
                                <td key={ci} className="p-3 text-muted-foreground">
                                  {cell.trim()}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                }
                return (
                  <p
                    key={i}
                    className="text-muted-foreground leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: block.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
                    }}
                  />
                );
              })}
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
