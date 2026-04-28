import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    const idempotencyKey = `contact-${crypto.randomUUID()}`;
    try {
      const { error } = await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "contact-notification",
          recipientEmail: "mduerwachter@modernedgetech.net",
          idempotencyKey,
          templateData: {
            name: `${formData.firstName} ${formData.lastName}`.trim(),
            email: formData.email,
            phone: formData.phone,
            source: formData.topic,
            message: formData.message,
          },
        },
      });
      if (error) throw error;
      setSubmitted(true);
      toast({ title: "Inquiry submitted", description: "We'll respond within one business day." });
      setFormData({ firstName: "", lastName: "", email: "", phone: "", topic: "", message: "" });
    } catch (err) {
      console.error("Contact submission failed", err);
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.2, 1, 0.3, 1] }}
          >
            <span className="text-sm font-mono-display text-primary uppercase tracking-wider">Contact</span>
            <h2 className="text-3xl md:text-4xl font-medium uppercase mt-3">
              Request a technical audit
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed max-w-md">
              Tell us about your infrastructure challenges. Our team will respond within one business day with a detailed assessment plan.
            </p>

            <div className="mt-12 space-y-6 text-sm">
              <div className="flex items-center gap-4 text-muted-foreground">
                <span className="font-mono-display text-primary">01</span>
                <span>Submit your inquiry</span>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span className="font-mono-display text-primary">02</span>
                <span>Receive a detailed assessment plan</span>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span className="font-mono-display text-primary">03</span>
                <span>Begin your infrastructure transformation</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.2, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono-display uppercase tracking-wider text-muted-foreground mb-2 block">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors duration-250 rounded-sm"
                />
              </div>
              <div>
                <label className="text-xs font-mono-display uppercase tracking-wider text-muted-foreground mb-2 block">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors duration-250 rounded-sm"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-mono-display uppercase tracking-wider text-muted-foreground mb-2 block">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors duration-250 rounded-sm"
              />
            </div>
            <div>
              <label className="text-xs font-mono-display uppercase tracking-wider text-muted-foreground mb-2 block">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors duration-250 rounded-sm"
              />
            </div>
            <div>
              <label className="text-xs font-mono-display uppercase tracking-wider text-muted-foreground mb-2 block">Topic</label>
              <select
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                required
                className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors duration-250 rounded-sm"
              >
                <option value="">Select a topic</option>
                <option value="managed-it">Managed IT Services</option>
                <option value="cybersecurity">Cybersecurity</option>
                <option value="cloud">Cloud Infrastructure</option>
                <option value="networking">Networking</option>
                <option value="voip">Voice Services</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-mono-display uppercase tracking-wider text-muted-foreground mb-2 block">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors duration-250 rounded-sm resize-none"
              />
            </div>
            <Button variant="hero" size="lg" type="submit" className="w-full" disabled={submitting}>
              {submitting ? "Submitting…" : submitted ? "Submitted — we'll be in touch" : "Submit Inquiry"}
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
