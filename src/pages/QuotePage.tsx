import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface QuoteFormData {
  // Step 1: Why are you reaching out
  servicesNeeded: string[];
  painPoints: string[];
  timeline: string;
  additionalNotes: string;
  // Step 2: Contact
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
}

const initialFormData: QuoteFormData = {
  servicesNeeded: [],
  painPoints: [],
  timeline: "",
  additionalNotes: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
};

const steps = [
  { label: "How Can We Help", number: "01" },
  { label: "Your Contact Info", number: "02" },
];

const inputClass =
  "w-full bg-card border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors duration-250 rounded-sm";
const labelClass =
  "text-xs font-mono-display uppercase tracking-wider text-muted-foreground mb-2 block";

const QuotePage = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<QuoteFormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleArrayValue = (field: keyof QuoteFormData, value: string) => {
    const current = formData[field] as string[];
    setFormData({
      ...formData,
      [field]: current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value],
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const next = () => setStep((s) => Math.min(s + 1, 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-32">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-250 mb-8"
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-mono-display text-primary uppercase tracking-wider">
              Let's Talk
            </span>
            <h1 className="text-3xl md:text-4xl font-medium uppercase mt-3 mb-4">
              Request a Quote
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Tell us a little about why you're reaching out and we'll get back to you within one
              business day. No long forms, no commitments.
            </p>
          </motion.div>

          {/* Step indicator */}
          <div className="flex gap-2 mb-12">
            {steps.map((s, i) => (
              <button
                key={s.number}
                onClick={() => setStep(i)}
                className={`flex-1 border-t-2 pt-3 text-left transition-colors duration-250 ${
                  i === step ? "border-primary" : i < step ? "border-primary/40" : "border-border"
                }`}
              >
                <span
                  className={`text-xs font-mono-display tabular-nums ${
                    i <= step ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {s.number}
                </span>
                <span
                  className={`block text-xs mt-1 ${
                    i === step ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {s.label}
                </span>
              </button>
            ))}
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <CheckCircle size={48} className="text-primary mx-auto mb-6" />
              <h2 className="text-2xl font-mono-display font-medium uppercase mb-4">
                Thanks — We'll Be In Touch
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto mb-8">
                A senior engineer will review your request and respond within one business day.
              </p>
              <Button variant="outline" asChild>
                <Link to="/">Return to Home</Link>
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {step === 0 && (
                    <>
                      <div>
                        <label className={labelClass}>
                          What are you interested in? (select any)
                        </label>
                        <div className="grid grid-cols-2 gap-2 mt-1">
                          {[
                            "Managed IT",
                            "Cybersecurity",
                            "Cloud Migration",
                            "VoIP / Voice",
                            "Wireless Networks",
                            "Access Control & Cameras",
                            "Business Continuity",
                            "E-Rate Guidance",
                            "Just Exploring",
                          ].map((item) => (
                            <button
                              type="button"
                              key={item}
                              onClick={() => toggleArrayValue("servicesNeeded", item)}
                              className={`text-left px-4 py-3 text-sm border rounded-sm transition-colors duration-250 ${
                                formData.servicesNeeded.includes(item)
                                  ? "border-primary bg-primary/10 text-foreground"
                                  : "border-border bg-card text-muted-foreground hover:border-muted-foreground"
                              }`}
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className={labelClass}>
                          What's prompting the conversation? (optional)
                        </label>
                        <div className="grid grid-cols-2 gap-2 mt-1">
                          {[
                            "Frequent downtime",
                            "Security concerns",
                            "Slow network",
                            "Aging hardware",
                            "Compliance requirements",
                            "No disaster recovery",
                            "Unhappy with current provider",
                            "Growing or relocating",
                          ].map((item) => (
                            <button
                              type="button"
                              key={item}
                              onClick={() => toggleArrayValue("painPoints", item)}
                              className={`text-left px-4 py-3 text-sm border rounded-sm transition-colors duration-250 ${
                                formData.painPoints.includes(item)
                                  ? "border-primary bg-primary/10 text-foreground"
                                  : "border-border bg-card text-muted-foreground hover:border-muted-foreground"
                              }`}
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className={labelClass}>Timeline (optional)</label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className={inputClass}
                        >
                          <option value="">Select timeline</option>
                          <option value="immediately">Immediately</option>
                          <option value="1-3-months">1–3 Months</option>
                          <option value="3-6-months">3–6 Months</option>
                          <option value="planning">Just Planning</option>
                        </select>
                      </div>

                      <div>
                        <label className={labelClass}>
                          Anything else you'd like us to know? (optional)
                        </label>
                        <textarea
                          name="additionalNotes"
                          value={formData.additionalNotes}
                          onChange={handleChange}
                          rows={4}
                          placeholder="A few sentences about your situation is plenty."
                          className={`${inputClass} resize-none`}
                        />
                      </div>
                    </>
                  )}

                  {step === 1 && (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass}>First Name *</label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            maxLength={100}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className={labelClass}>Last Name *</label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            maxLength={100}
                            className={inputClass}
                          />
                        </div>
                      </div>
                      <div>
                        <label className={labelClass}>Work Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          maxLength={255}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Phone (optional)</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          maxLength={30}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Company *</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          maxLength={150}
                          className={inputClass}
                        />
                      </div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex justify-between mt-10">
                {step > 0 ? (
                  <Button type="button" variant="outline" onClick={prev}>
                    <ArrowLeft size={14} className="mr-2" /> Previous
                  </Button>
                ) : (
                  <div />
                )}

                {step < 1 ? (
                  <Button type="button" variant="hero" onClick={next}>
                    Continue <ArrowRight size={14} className="ml-2" />
                  </Button>
                ) : (
                  <Button type="submit" variant="hero">
                    Send Request <ArrowRight size={14} className="ml-2" />
                  </Button>
                )}
              </div>
            </form>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default QuotePage;
