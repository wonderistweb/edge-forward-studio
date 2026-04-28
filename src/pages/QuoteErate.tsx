import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

interface ErateFormData {
  // Step 1
  applicantType: string;
  ben: string;
  fundingYear: string;
  servicesNeeded: string[];
  currentStatus: string;
  studentCount: string;
  buildingsCount: string;
  helpAreas: string[];
  projectSummary: string;
  // Step 2
  firstName: string;
  lastName: string;
  title: string;
  email: string;
  phone: string;
  organizationName: string;
}

const initialFormData: ErateFormData = {
  applicantType: "",
  ben: "",
  fundingYear: "",
  servicesNeeded: [],
  currentStatus: "",
  studentCount: "",
  buildingsCount: "",
  helpAreas: [],
  projectSummary: "",
  firstName: "",
  lastName: "",
  title: "",
  email: "",
  phone: "",
  organizationName: "",
};

const steps = [
  { label: "About Your E-Rate Project", number: "01" },
  { label: "Your Contact Info", number: "02" },
];

const inputClass =
  "w-full bg-card border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors duration-250 rounded-sm";
const labelClass =
  "text-xs font-mono-display uppercase tracking-wider text-muted-foreground mb-2 block";

const QuoteErate = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<ErateFormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleArrayValue = (field: keyof ErateFormData, value: string) => {
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
    const idempotencyKey = `erate-${crypto.randomUUID()}`;
    try {
      const { error } = await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "erate-notification",
          recipientEmail: "mduerwachter@modernedgetech.net",
          idempotencyKey,
          templateData: {
            name: `${formData.firstName} ${formData.lastName}`.trim(),
            email: formData.email,
            phone: formData.phone,
            organization: formData.organizationName,
            applicantType: formData.applicantType,
            fundingYear: formData.fundingYear,
            servicesNeeded: formData.servicesNeeded,
            processStatus: formData.currentStatus,
            helpAreas: formData.helpAreas,
            studentCount: formData.studentCount,
            projectSummary: formData.projectSummary,
          },
        },
      });
      if (error) throw error;
    } catch (err) {
      console.error("E-Rate notification failed", err);
      toast({ title: "Submission received", description: "We'll be in touch shortly." });
    }
    setSubmitted(true);
  };

  const canAdvance = () =>
    formData.applicantType.trim() !== "" &&
    formData.fundingYear.trim() !== "" &&
    formData.servicesNeeded.length > 0 &&
    formData.currentStatus.trim() !== "" &&
    formData.helpAreas.length > 0 &&
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
            to="/e-rate"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-250 mb-8"
          >
            <ArrowLeft size={14} /> Back to E-Rate
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-mono-display text-primary uppercase tracking-wider">
              E-Rate Consultation
            </span>
            <h1 className="text-3xl md:text-4xl font-medium uppercase mt-3 mb-4">
              Request E-Rate Guidance
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Tell us about your funding year, eligible services, and where you need expert
              support. A senior engineer familiar with USAC and SPIN 143036232 will follow up
              within one business day.
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
                We'll review your E-Rate project details and respond within one business day with
                next steps.
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
                          <label className={labelClass}>Applicant Type *</label>
                          <select
                            name="applicantType"
                            value={formData.applicantType}
                            onChange={handleChange}
                            className={inputClass}
                          >
                            <option value="">Select type</option>
                            <option value="school">School</option>
                            <option value="district">School District</option>
                            <option value="library">Library</option>
                            <option value="library-system">Library System</option>
                            <option value="consortium">Consortium</option>
                          </select>
                        </div>
                        <div>
                          <label className={labelClass}>Funding Year *</label>
                          <select
                            name="fundingYear"
                            value={formData.fundingYear}
                            onChange={handleChange}
                            className={inputClass}
                          >
                            <option value="">Select year</option>
                            <option value="FY2026">FY2026 (Jul 2026 – Jun 2027)</option>
                            <option value="FY2027">FY2027</option>
                            <option value="not-sure">Not sure yet</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className={labelClass}>BEN (Billed Entity Number, optional)</label>
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

                      <div>
                        <label className={labelClass}>
                          Eligible services you're considering * (select any)
                        </label>
                        <div className="grid grid-cols-2 gap-2 mt-1">
                          {[
                            "Category 1 – Internet Access",
                            "Category 1 – Data Transmission",
                            "Category 2 – Internal Connections (Wi-Fi)",
                            "Category 2 – Network Switches / Routers",
                            "Category 2 – Firewalls",
                            "Category 2 – Managed Internal Broadband (MIBS)",
                            "Category 2 – Cabling",
                            "Not sure yet",
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
                        <label className={labelClass}>Where are you in the process? *</label>
                        <select
                          name="currentStatus"
                          value={formData.currentStatus}
                          onChange={handleChange}
                          className={inputClass}
                        >
                          <option value="">Select status</option>
                          <option value="exploring">Just exploring eligibility</option>
                          <option value="planning">Planning — pre Form 470</option>
                          <option value="form-470-ready">Ready to file Form 470</option>
                          <option value="evaluating-bids">Form 470 posted / evaluating bids</option>
                          <option value="form-471">Working on Form 471</option>
                          <option value="post-commitment">Post-commitment / invoicing</option>
                          <option value="appeal">Need help with an appeal or denial</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass}>Approx. Student Count (optional)</label>
                          <input
                            type="text"
                            name="studentCount"
                            value={formData.studentCount}
                            onChange={handleChange}
                            placeholder="e.g. 1,200"
                            maxLength={20}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className={labelClass}># of Buildings / Sites (optional)</label>
                          <input
                            type="text"
                            name="buildingsCount"
                            value={formData.buildingsCount}
                            onChange={handleChange}
                            placeholder="e.g. 3"
                            maxLength={20}
                            className={inputClass}
                          />
                        </div>
                      </div>

                      <div>
                        <label className={labelClass}>
                          Where do you need expert guidance? * (select any)
                        </label>
                        <div className="grid grid-cols-2 gap-2 mt-1">
                          {[
                            "Eligibility review",
                            "Form 470 specifications",
                            "Bid evaluation",
                            "Form 471 prep",
                            "Category 2 budget planning",
                            "Network design / SOW",
                            "Vendor coordination",
                            "Audit / appeal support",
                          ].map((item) => (
                            <button
                              type="button"
                              key={item}
                              onClick={() => toggleArrayValue("helpAreas", item)}
                              className={`text-left px-4 py-3 text-sm border rounded-sm transition-colors duration-250 ${
                                formData.helpAreas.includes(item)
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
                          Briefly describe your project or question *
                        </label>
                        <textarea
                          name="projectSummary"
                          value={formData.projectSummary}
                          onChange={handleChange}
                          rows={4}
                          placeholder="A few sentences about your goals, timing, and any deadlines or constraints."
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
                          placeholder="e.g. Technology Director, Library Director"
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
                        <label className={labelClass}>School / District / Library Name *</label>
                        <input
                          type="text"
                          name="organizationName"
                          value={formData.organizationName}
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

export default QuoteErate;