import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface QuoteFormData {
  // Step 1: Contact
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  // Step 2: Environment
  employeeCount: string;
  locations: string;
  currentProvider: string;
  monthlyBudget: string;
  // Step 3: Infrastructure
  networkDevices: string[];
  cloudPlatforms: string[];
  serverCount: string;
  workstationCount: string;
  // Step 4: Pain Points & Needs
  painPoints: string[];
  servicesNeeded: string[];
  timeline: string;
  additionalNotes: string;
}

const initialFormData: QuoteFormData = {
  firstName: "", lastName: "", email: "", phone: "", company: "", jobTitle: "",
  employeeCount: "", locations: "", currentProvider: "", monthlyBudget: "",
  networkDevices: [], cloudPlatforms: [], serverCount: "", workstationCount: "",
  painPoints: [], servicesNeeded: [], timeline: "", additionalNotes: "",
};

const steps = [
  { label: "Contact Info", number: "01" },
  { label: "Environment", number: "02" },
  { label: "Infrastructure", number: "03" },
  { label: "Needs & Timeline", number: "04" },
];

const inputClass = "w-full bg-card border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors duration-250 rounded-sm";
const labelClass = "text-xs font-mono-display uppercase tracking-wider text-muted-foreground mb-2 block";

const QuotePage = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<QuoteFormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleArrayValue = (field: keyof QuoteFormData, value: string) => {
    const current = formData[field] as string[];
    setFormData({
      ...formData,
      [field]: current.includes(value) ? current.filter(v => v !== value) : [...current, value],
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const next = () => setStep(s => Math.min(s + 1, 3));
  const prev = () => setStep(s => Math.max(s - 1, 0));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-32">
        <div className="max-w-3xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-250 mb-8">
            <ArrowLeft size={14} /> Back to Home
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-sm font-mono-display text-primary uppercase tracking-wider">Technical Discovery</span>
            <h1 className="text-3xl md:text-4xl font-medium uppercase mt-3 mb-4">Request a Quote</h1>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Help us understand your infrastructure so we can provide an accurate, tailored proposal.
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
                <span className={`text-xs font-mono-display tabular-nums ${i <= step ? "text-primary" : "text-muted-foreground"}`}>
                  {s.number}
                </span>
                <span className={`block text-xs mt-1 ${i === step ? "text-foreground" : "text-muted-foreground"}`}>
                  {s.label}
                </span>
              </button>
            ))}
          </div>

          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20">
              <CheckCircle size={48} className="text-primary mx-auto mb-6" />
              <h2 className="text-2xl font-mono-display font-medium uppercase mb-4">Discovery Submitted</h2>
              <p className="text-muted-foreground max-w-md mx-auto mb-8">
                Our team will review your technical environment and respond within one business day with a tailored proposal.
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
                  className="space-y-5"
                >
                  {step === 0 && (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass}>First Name *</label>
                          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className={inputClass} />
                        </div>
                        <div>
                          <label className={labelClass}>Last Name *</label>
                          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className={inputClass} />
                        </div>
                      </div>
                      <div>
                        <label className={labelClass}>Email *</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Phone *</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Company Name *</label>
                        <input type="text" name="company" value={formData.company} onChange={handleChange} required className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Job Title</label>
                        <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} className={inputClass} />
                      </div>
                    </>
                  )}

                  {step === 1 && (
                    <>
                      <div>
                        <label className={labelClass}>Number of Employees *</label>
                        <select name="employeeCount" value={formData.employeeCount} onChange={handleChange} required className={inputClass}>
                          <option value="">Select range</option>
                          <option value="1-10">1–10</option>
                          <option value="11-50">11–50</option>
                          <option value="51-100">51–100</option>
                          <option value="101-250">101–250</option>
                          <option value="251-500">251–500</option>
                          <option value="500+">500+</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>Number of Locations</label>
                        <input type="text" name="locations" value={formData.locations} onChange={handleChange} placeholder="e.g., 3 offices + 1 warehouse" className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Current IT Provider</label>
                        <select name="currentProvider" value={formData.currentProvider} onChange={handleChange} className={inputClass}>
                          <option value="">Select</option>
                          <option value="internal">Internal IT Team</option>
                          <option value="msp">Managed Service Provider</option>
                          <option value="breakfix">Break/Fix Technician</option>
                          <option value="none">No Current Provider</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>Monthly IT Budget Range</label>
                        <select name="monthlyBudget" value={formData.monthlyBudget} onChange={handleChange} className={inputClass}>
                          <option value="">Select range</option>
                          <option value="under-1k">Under $1,000</option>
                          <option value="1k-5k">$1,000 – $5,000</option>
                          <option value="5k-10k">$5,000 – $10,000</option>
                          <option value="10k-25k">$10,000 – $25,000</option>
                          <option value="25k+">$25,000+</option>
                          <option value="unsure">Not Sure</option>
                        </select>
                      </div>
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <div>
                        <label className={labelClass}>Network Equipment (select all that apply)</label>
                        <div className="grid grid-cols-2 gap-2 mt-1">
                          {["Firewall/UTM", "Managed Switches", "Wireless APs", "VPN Appliance", "Load Balancer", "Not Sure"].map(item => (
                            <button
                              type="button"
                              key={item}
                              onClick={() => toggleArrayValue("networkDevices", item)}
                              className={`text-left px-4 py-3 text-sm border rounded-sm transition-colors duration-250 ${
                                formData.networkDevices.includes(item)
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
                        <label className={labelClass}>Cloud Platforms in Use</label>
                        <div className="grid grid-cols-2 gap-2 mt-1">
                          {["Microsoft 365", "Google Workspace", "AWS", "Azure", "None", "Other"].map(item => (
                            <button
                              type="button"
                              key={item}
                              onClick={() => toggleArrayValue("cloudPlatforms", item)}
                              className={`text-left px-4 py-3 text-sm border rounded-sm transition-colors duration-250 ${
                                formData.cloudPlatforms.includes(item)
                                  ? "border-primary bg-primary/10 text-foreground"
                                  : "border-border bg-card text-muted-foreground hover:border-muted-foreground"
                              }`}
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass}>Number of Servers</label>
                          <input type="text" name="serverCount" value={formData.serverCount} onChange={handleChange} placeholder="e.g., 4" className={inputClass} />
                        </div>
                        <div>
                          <label className={labelClass}>Number of Workstations</label>
                          <input type="text" name="workstationCount" value={formData.workstationCount} onChange={handleChange} placeholder="e.g., 50" className={inputClass} />
                        </div>
                      </div>
                    </>
                  )}

                  {step === 3 && (
                    <>
                      <div>
                        <label className={labelClass}>Current Pain Points (select all that apply)</label>
                        <div className="grid grid-cols-2 gap-2 mt-1">
                          {[
                            "Frequent downtime", "Security concerns", "Slow network performance",
                            "Aging hardware", "Compliance requirements", "No disaster recovery plan",
                            "Poor vendor support", "Growing too fast for current IT",
                          ].map(item => (
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
                        <label className={labelClass}>Services of Interest</label>
                        <div className="grid grid-cols-2 gap-2 mt-1">
                          {[
                            "Managed IT", "Cybersecurity", "Cloud Migration",
                            "VoIP/Voice", "Access Control & Cameras", "Network Design",
                            "Disaster Recovery", "E-Rate Services",
                          ].map(item => (
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
                        <label className={labelClass}>Timeline</label>
                        <select name="timeline" value={formData.timeline} onChange={handleChange} className={inputClass}>
                          <option value="">Select timeline</option>
                          <option value="immediately">Immediately</option>
                          <option value="1-3-months">1–3 Months</option>
                          <option value="3-6-months">3–6 Months</option>
                          <option value="planning">Just Planning</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>Additional Notes</label>
                        <textarea
                          name="additionalNotes"
                          value={formData.additionalNotes}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Anything else we should know about your environment or requirements?"
                          className={`${inputClass} resize-none`}
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
                ) : <div />}

                {step < 3 ? (
                  <Button type="button" variant="hero" onClick={next}>
                    Next Step <ArrowRight size={14} className="ml-2" />
                  </Button>
                ) : (
                  <Button type="submit" variant="hero">
                    Submit Discovery <ArrowRight size={14} className="ml-2" />
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
