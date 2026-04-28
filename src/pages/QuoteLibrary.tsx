import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

interface LibraryFormData {
  // Step 1
  libraryType: string;
  ben: string;
  squareFootage: string;
  branchCount: string;
  patronCount: string;
  currentChallenges: string[];
  servicesNeeded: string[];
  erateInterest: string;
  projectSummary: string;
  // Step 2
  firstName: string;
  lastName: string;
  title: string;
  email: string;
  phone: string;
  libraryName: string;
}

const initialFormData: LibraryFormData = {
  libraryType: "",
  ben: "",
  squareFootage: "",
  branchCount: "",
  patronCount: "",
  currentChallenges: [],
  servicesNeeded: [],
  erateInterest: "",
  projectSummary: "",
  firstName: "",
  lastName: "",
  title: "",
  email: "",
  phone: "",
  libraryName: "",
};

const steps = [
  { label: "About Your Library", number: "01" },
  { label: "Your Contact Info", number: "02" },
];

const inputClass =
  "w-full bg-card border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors duration-250 rounded-sm";
const labelClass =
  "text-xs font-mono-display uppercase tracking-wider text-muted-foreground mb-2 block";

const QuoteLibrary = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<LibraryFormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleArrayValue = (field: keyof LibraryFormData, value: string) => {
    const current = formData[field] as string[];
    setFormData({
      ...formData,
      [field]: current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value],
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 1) return;
    const idempotencyKey = `library-${crypto.randomUUID()}`;
    try {
      const recipients = [
        "mduerwachter@modernedgetech.net",
        "michael.anderson@wonderistagency.com",
      ];
      const templateData = {
            name: `${formData.firstName} ${formData.lastName}`.trim(),
            email: formData.email,
            phone: formData.phone,
            libraryName: formData.libraryName,
            libraryType: formData.libraryType,
            branches: formData.branchCount,
            servicesNeeded: formData.servicesNeeded,
            currentChallenges: formData.currentChallenges,
            erateInterest: formData.erateInterest,
            projectSummary: formData.projectSummary,
      };
      const results = await Promise.all(
        recipients.map((recipientEmail) =>
          supabase.functions.invoke("send-transactional-email", {
            body: {
              templateName: "library-notification",
              recipientEmail,
              idempotencyKey: `${idempotencyKey}-${recipientEmail}`,
              templateData,
            },
          })
        )
      );
      const firstError = results.find((r) => r.error)?.error;
      if (firstError) throw firstError;
    } catch (err) {
      console.error("Library notification failed", err);
      toast({ title: "Submission received", description: "We'll be in touch shortly." });
    }
    setSubmitted(true);
  };

  const canAdvance = () =>
    formData.libraryType.trim() !== "" &&
    formData.currentChallenges.length > 0 &&
    formData.servicesNeeded.length > 0 &&
    formData.erateInterest.trim() !== "" &&
    formData.projectSummary.trim().length >= 10;

  const next = () => {
    if (!canAdvance()) return;
    setStep((s) => Math.min(s + 1, 1));
  };
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-32">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            to="/industries/libraries"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-250 mb-8"
          >
            <ArrowLeft size={14} /> Back to Libraries
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-mono-display text-primary uppercase tracking-wider">
              Library Consultation
            </span>
            <h1 className="text-3xl md:text-4xl font-medium uppercase mt-3 mb-4">
              Request a Library IT Consultation
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Tell us about your branches, patron Wi-Fi, and any E-Rate goals. We work with
              Wisconsin libraries on patron-safe networks, public access, and Category 2 budget
              planning.
            </p>
          </motion.div>

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
                A senior engineer will review your library's needs and respond within one business
                day.
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
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass}>Library Type *</label>
                          <select
                            name="libraryType"
                            value={formData.libraryType}
                            onChange={handleChange}
                            className={inputClass}
                          >
                            <option value="">Select type</option>
                            <option value="single-branch">Single-branch public library</option>
                            <option value="multi-branch">Multi-branch public library</option>
                            <option value="library-system">Library system / consortium</option>
                            <option value="academic">Academic library</option>
                            <option value="special">Special / research library</option>
                          </select>
                        </div>
                        <div>
                          <label className={labelClass}>BEN (optional)</label>
                          <input
                            type="text"
                            name="ben"
                            value={formData.ben}
                            onChange={handleChange}
                            placeholder="e.g. 16012345"
                            maxLength={20}
                            className={inputClass}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <label className={labelClass}>Sq. Footage (optional)</label>
                          <input
                            type="text"
                            name="squareFootage"
                            value={formData.squareFootage}
                            onChange={handleChange}
                            placeholder="e.g. 18,000"
                            maxLength={20}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className={labelClass}># of Branches</label>
                          <input
                            type="text"
                            name="branchCount"
                            value={formData.branchCount}
                            onChange={handleChange}
                            placeholder="e.g. 1"
                            maxLength={10}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className={labelClass}>Avg. Daily Patrons</label>
                          <input
                            type="text"
                            name="patronCount"
                            value={formData.patronCount}
                            onChange={handleChange}
                            placeholder="e.g. 200"
                            maxLength={20}
                            className={inputClass}
                          />
                        </div>
                      </div>

                      <div>
                        <label className={labelClass}>
                          Current challenges * (select any)
                        </label>
                        <div className="grid grid-cols-2 gap-2 mt-1">
                          {[
                            "Slow / unreliable patron Wi-Fi",
                            "Aging access points or switches",
                            "Public computer reliability",
                            "CIPA / content filtering",
                            "Print management",
                            "Staff network separated from patrons",
                            "Branch-to-branch connectivity",
                            "Cybersecurity concerns",
                          ].map((item) => (
                            <button
                              type="button"
                              key={item}
                              onClick={() => toggleArrayValue("currentChallenges", item)}
                              className={`text-left px-4 py-3 text-sm border rounded-sm transition-colors duration-250 ${
                                formData.currentChallenges.includes(item)
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
                          Services you're interested in * (select any)
                        </label>
                        <div className="grid grid-cols-2 gap-2 mt-1">
                          {[
                            "Patron Wi-Fi design / refresh",
                            "Network switches & cabling",
                            "Firewall & content filtering",
                            "Public access PCs",
                            "VoIP / phones",
                            "Managed IT support",
                            "Cybersecurity assessment",
                            "Branch connectivity",
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
                        <label className={labelClass}>E-Rate interest *</label>
                        <select
                          name="erateInterest"
                          value={formData.erateInterest}
                          onChange={handleChange}
                          className={inputClass}
                        >
                          <option value="">Select option</option>
                          <option value="actively-using">Actively using E-Rate funding</option>
                          <option value="want-to-use">Want to use E-Rate for this project</option>
                          <option value="curious">Curious about Category 2 budget</option>
                          <option value="not-interested">Not pursuing E-Rate right now</option>
                        </select>
                      </div>

                      <div>
                        <label className={labelClass}>
                          Briefly describe your project or question *
                        </label>
                        <textarea
                          name="projectSummary"
                          value={formData.projectSummary}
                          onChange={handleChange}
                          rows={4}
                          placeholder="A few sentences about your goals, timing, and any community impact you want to address."
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
                        <label className={labelClass}>Title / Role (optional)</label>
                        <input
                          type="text"
                          name="title"
                          value={formData.title}
                          onChange={handleChange}
                          placeholder="e.g. Library Director, IT Coordinator"
                          maxLength={150}
                          className={inputClass}
                        />
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
                        <label className={labelClass}>Library Name *</label>
                        <input
                          type="text"
                          name="libraryName"
                          value={formData.libraryName}
                          onChange={handleChange}
                          required
                          maxLength={200}
                          className={inputClass}
                        />
                      </div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-between mt-10">
                {step > 0 ? (
                  <Button type="button" variant="outline" onClick={prev}>
                    <ArrowLeft size={14} className="mr-2" /> Previous
                  </Button>
                ) : (
                  <div />
                )}

                {step < 1 ? (
                  <div className="flex flex-col items-end gap-2">
                    {!canAdvance() && (
                      <span className="text-xs text-muted-foreground">
                        Please complete the required fields above to continue
                      </span>
                    )}
                    <Button
                      type="button"
                      variant="hero"
                      onClick={next}
                      disabled={!canAdvance()}
                    >
                      Continue <ArrowRight size={14} className="ml-2" />
                    </Button>
                  </div>
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

export default QuoteLibrary;