import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Clock, Send, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingMarketingMenu from "@/components/FloatingMarketingMenu";
import { useState } from "react";

interface Email {
  day: string;
  subject: string;
  preview: string;
  body: string;
}

interface Sequence {
  name: string;
  audience: string;
  goal: string;
  emails: Email[];
}

const sequences: Sequence[] = [
  {
    name: "New Lead Nurture",
    audience: "Website form submissions & free assessment requests",
    goal: "Convert cold leads to booked discovery calls within 14 days",
    emails: [
      {
        day: "Day 0",
        subject: "Your Free IT Assessment — Here's What Happens Next",
        preview: "Thanks for reaching out. Here's exactly what to expect...",
        body: `Hi {{first_name}},

Thanks for requesting a free IT infrastructure assessment from Modern Edge Technology. I'm Mark Duerwachter, VP of Business Operations, and I'll be personally overseeing your assessment.

Here's exactly what happens next:

1. **Discovery Call (15 min)** — I'll reach out within 24 hours to schedule a brief call. We'll discuss your current environment, pain points, and what you're hoping to achieve.

2. **On-Site or Remote Assessment (2-4 hrs)** — Our engineering team conducts a comprehensive audit of your network, security posture, backup systems, and infrastructure health.

3. **Findings Report** — Within 5 business days, you'll receive a detailed report with prioritized recommendations, risk scores, and a proposed roadmap.

There's no obligation and no sales pressure. Our goal is to give you an honest picture of where your IT stands — and where it could be.

In the meantime, you might find this useful: our latest article on [why SMBs can no longer afford to ignore managed IT]({{blog_link}}) breaks down the real cost of reactive IT support.

Looking forward to connecting.

Best,
Mark Duerwachter
VP of Business Operations
Modern Edge Technology
{{phone}} | {{email}}`,
      },
      {
        day: "Day 3",
        subject: "The #1 IT Mistake That Costs SMBs $268K/Year",
        preview: "Most businesses don't realize how much reactive IT actually costs...",
        body: `Hi {{first_name}},

I wanted to share something that comes up in almost every assessment we conduct.

The average SMB with 50 employees spends between **$268,000 and $647,000 per year** on reactive IT — and most of them don't realize it. That number includes:

- **Break-fix repair bills**: $48K-$72K/year
- **Downtime costs** (12-16 hours/year): $120K-$200K/year  
- **Security incident costs**: $35K-$150K/year
- **Compliance remediation**: $50K-$200K/year

Compare that to managed IT services for the same company: **$87,000-$165,000/year** — with 99.99% uptime, 24/7 monitoring, and zero surprise bills.

The math speaks for itself. But the real value isn't in the spreadsheet — it's in the peace of mind that comes from knowing your infrastructure is monitored, maintained, and protected around the clock.

If you haven't had a chance to schedule your free assessment yet, just reply to this email and I'll get something on the calendar.

Best,
Mark`,
      },
      {
        day: "Day 7",
        subject: "Quick question about your IT setup",
        preview: "I had a thought about your environment that I wanted to share...",
        body: `Hi {{first_name}},

Quick question — do you know when your last backup was successfully tested?

I ask because in 73% of the assessments we conduct, we discover that backup systems are either:
- Not running at all (failed silently weeks or months ago)
- Running but never tested (so recovery is unverified)
- Missing critical systems (backing up files but not databases or configurations)

A backup that's never been tested isn't a backup — it's a hypothesis. And 60% of businesses that experience significant data loss shut down within 6 months.

Our free assessment includes a complete backup audit. We'll verify that your backups are running, test a restoration, and confirm your recovery time and recovery point objectives are achievable.

No cost. No obligation. Just clarity about whether your business could survive a worst-case scenario.

Want to get that scheduled? Reply here or grab a time: {{calendar_link}}

Best,
Mark`,
      },
      {
        day: "Day 10",
        subject: "What we found at a company just like yours",
        preview: "A recent client assessment revealed some surprises worth sharing...",
        body: `Hi {{first_name}},

I wanted to share a quick case study that might resonate with your situation.

We recently conducted a free assessment for a 45-person company in the {{industry}} space. They believed their IT was "fine" — they had a firewall, antivirus on most machines, and a backup that ran nightly.

Here's what we actually found:

🔴 **Critical**: Firewall firmware was 3 years out of date with 12 known CVEs
🔴 **Critical**: 8 workstations had no endpoint protection at all
🟡 **High**: Backup hadn't completed successfully in 6 weeks (no alerts configured)
🟡 **High**: 3 user accounts from former employees still active with full access
🟡 **High**: No multi-factor authentication on any system, including email
🔵 **Medium**: Network had zero segmentation — guest WiFi on same VLAN as accounting

Any one of these findings could have been the entry point for a ransomware attack. Together, they represented a ticking time bomb.

We remediated everything within 30 days and transitioned them to our managed services platform. Six months later: zero security incidents, zero unplanned outages, and their monthly IT cost dropped 40%.

Your assessment might reveal similar findings — or it might confirm that you're in great shape. Either way, you'll have clarity.

Ready to find out? {{calendar_link}}

Best,
Mark`,
      },
      {
        day: "Day 14",
        subject: "Last chance: your free IT assessment offer",
        preview: "I don't want you to miss out on this — here's why it matters...",
        body: `Hi {{first_name}},

This is my last note about your free IT assessment — I don't want to overstay my welcome in your inbox.

But I do want to leave you with this: every organization I've worked with that experienced a significant IT failure — ransomware, data loss, extended outage — said the same thing afterward:

**"We knew we should have addressed this sooner."**

The assessment is free. It takes 2-4 hours. There's no obligation, no contract, and no sales pitch. You get a detailed report of your infrastructure's health, a prioritized list of vulnerabilities, and a roadmap for addressing them — whether you work with us or not.

If now isn't the right time, I completely understand. But if there's even a small voice in the back of your mind saying "we should probably look at this," trust that instinct.

Book your assessment: {{calendar_link}}
Or simply reply to this email.

Wishing you all the best either way.

Mark Duerwachter
VP of Business Operations
Modern Edge Technology`,
      },
    ],
  },
  {
    name: "E-Rate Awareness — Schools & Libraries",
    audience: "K-12 school administrators, IT coordinators, library directors & board members",
    goal: "Drive E-Rate eligibility consultations for every school and library with unclaimed funding",
    emails: [
      {
        day: "Day 0",
        subject: "Your School/Library Could Be Missing Out on 90% Technology Funding",
        preview: "The E-Rate program funds up to 90% of networking & telecom costs...",
        body: `Hi {{first_name}},

Did you know that billions of dollars in federal technology funding go unclaimed by schools and libraries every year?

The **E-Rate program** (Schools and Libraries Universal Service Support Mechanism) provides discounts of **20% to 90%** on eligible telecommunications and networking equipment for K-12 schools and public libraries. Since 1997, the program has distributed over $50 billion.

Here's what E-Rate can fund:
- **Internet access & transport** (fiber, cable, wireless)
- **WiFi access points & controllers**
- **Network switches** (core, distribution, access layer)
- **Structured cabling** (Cat6/Cat6A, fiber optic)
- **Routers & UPS systems**
- **Managed Internal Broadband Services (MIBS)**

**For schools**: $167 per student in Category 2 funding. A district with 5,000 students at an 80% discount rate has a five-year budget of **$835,000**.

**For libraries**: $2.39 per square foot in Category 2 funding. A 15,000 sq ft branch library qualifies for **$35,850** — and most library systems have multiple branches.

We've helped schools and libraries secure over **$12 million** in E-Rate funding. Want to find out what you qualify for?

**Free eligibility consultation**: {{calendar_link}}

Best,
Mark Duerwachter
VP of Business Operations
Modern Edge Technology`,
      },
      {
        day: "Day 3",
        subject: "Library Directors: Your Patrons Deserve Better WiFi",
        preview: "E-Rate covers up to 90% of your WiFi upgrade — here's how...",
        body: `Hi {{first_name}},

If you run a public library, your patrons are probably complaining about WiFi. Slow speeds, dropped connections, inability to stream educational content or join video calls — these aren't minor inconveniences. They're barriers to the digital equity your library exists to provide.

The good news: **E-Rate can fund 60-90% of a complete wireless network upgrade.**

Here's what we typically deploy for library systems:

📡 **Enterprise WiFi 6E access points** — handling 200+ simultaneous patron devices without breaking a sweat
🔒 **CIPA-compliant content filtering** — required for E-Rate eligibility, protects minors while preserving adult access
🔌 **Managed switches & structured cabling** — the backbone that makes everything work
🛡️ **Firewall & network segmentation** — separating staff, public, and IoT networks

**Real example**: A 3-branch library system with 45,000 total sq ft qualified for **$107,550** in Category 2 funding at a 70% discount rate. Their out-of-pocket cost for a complete network modernization: **$46,093** instead of $153,643.

The application window is open. We handle every form, every bid, every compliance requirement.

**Check your library's eligibility**: {{calendar_link}}

Best,
Mark`,
      },
      {
        day: "Day 6",
        subject: "E-Rate Application Deadlines Are Approaching — Don't Wait Another Year",
        preview: "Missing a deadline by even one day can forfeit your entire year's funding...",
        body: `Hi {{first_name}},

The E-Rate application timeline is rigid — and the consequences of missing a deadline are severe. Missing by even **one day** can result in denial of your entire application for that funding year.

**Key dates you need to know:**

📅 **October-November**: Form 470 must be posted (initiates 28-day competitive bidding)
📅 **January-March**: Form 471 filing window (funding request)
📅 **After funding commitment**: Form 486 due within 120 days

The most common mistakes that kill applications:
1. Insufficient competitive bidding documentation
2. Mismatched service dates between forms
3. Requesting ineligible equipment
4. Missing the Form 486 deadline
5. Inadequate record retention (10-year requirement)

**Institutions that work with a qualified E-Rate vendor receive 30-50% more funding** than those that self-file. Our team manages the entire lifecycle — from needs assessment through compliance documentation.

This applies to **both schools AND libraries**. If you have students or patrons, you almost certainly qualify.

Don't leave federal money on the table. Let's review your eligibility before the window closes.

{{calendar_link}}

Best,
Mark`,
      },
      {
        day: "Day 10",
        subject: "MIBS: The Smartest Way to Use Your E-Rate Dollars",
        preview: "Managed Internal Broadband Services bundle equipment + management into one E-Rate package...",
        body: `Hi {{first_name}},

Most schools and libraries apply for E-Rate to buy equipment — access points, switches, cabling. But there's a smarter approach that most don't know about: **MIBS (Managed Internal Broadband Services).**

MIBS lets you bundle eligible equipment, installation, AND ongoing management into a single E-Rate contract. Here's why that matters:

**💰 CapEx → OpEx**: Instead of a large capital purchase, spread costs across the service period. Easier to budget. Easier to get board approval.

**🔧 Inclusive Management**: Your access points aren't just installed and forgotten. MIBS contracts include monitoring, firmware updates, troubleshooting, and performance optimization — all covered by E-Rate.

**📋 Simplified Procurement**: One Form 470 covers everything. One competitive bid process. One contract. One invoice.

**📊 Budget Maximization**: Schools get $167/student. Libraries get $2.39/sq ft. MIBS bundles help you use every eligible dollar.

**What's eligible under MIBS**:
✅ WiFi 6/6E/7 access points + licensing
✅ Managed network switches
✅ Structured cabling (Cat6/6A, fiber)
✅ UPS/battery backup
✅ Firewall & content filtering
✅ Installation & configuration
✅ Ongoing monitoring & maintenance

**What's NOT eligible**: Chromebooks, tablets, servers, cameras, phone systems, training.

We structure MIBS contracts for maximum E-Rate coverage while maintaining full USAC compliance. One mistake in cost allocation can get your entire application denied — we've never had one rejected.

Ready to explore MIBS for your school or library?

{{calendar_link}}

Best,
Mark`,
      },
      {
        day: "Day 14",
        subject: "How One District Saved $400K — And a Library System Saved $107K",
        preview: "Real E-Rate results from organizations just like yours...",
        body: `Hi {{first_name}},

Let me share two real examples of E-Rate in action.

**🏫 School District — 5,000 Students**

The situation: Complete wireless network upgrade needed. 8-year-old infrastructure couldn't support 1:1 Chromebook programs. Dead zones in 40% of classrooms.

The project:
- 180 enterprise wireless access points (WiFi 6E)
- 24 managed network switches
- Complete Cat6A cabling upgrade
- Wireless controllers and cloud management
- 5-year MIBS support contract

**Total cost**: $500,000
**E-Rate discount**: 80%
**District paid**: $100,000
**Federal funding**: $400,000

Result: Zero WiFi-related test disruptions. Teacher satisfaction up 34%. Student connectivity issues down 91%.

**📚 Library System — 3 Branches, 45,000 sq ft**

The situation: Patron WiFi complaints at every branch. 200+ simultaneous users crashing consumer-grade networks. No CIPA-compliant filtering.

The project:
- 42 enterprise access points across 3 branches
- Managed switches and SD-WAN connectivity
- CIPA-compliant content filtering
- Network segmentation (staff, public, IoT)
- 3-year MIBS contract with monitoring

**Total cost**: $153,643
**E-Rate discount**: 70%
**Library paid**: $46,093
**Federal funding**: $107,550

Result: WiFi complaints dropped to near zero. Patron satisfaction scores increased 28%. IT troubleshooting time reduced 75%.

**Your organization could achieve similar results.** We handle the entire process — you focus on students and patrons.

{{calendar_link}}

Best,
Mark`,
      },
    ],
  },
  {
    name: "Cybersecurity Urgency",
    audience: "Business owners who downloaded security content",
    goal: "Convert security-aware leads into managed security service clients",
    emails: [
      {
        day: "Day 0",
        subject: "Your Cybersecurity Checklist — Plus Something That Surprised Us",
        preview: "Thanks for downloading our security guide. Here's a finding from this week...",
        body: `Hi {{first_name}},

Thanks for downloading our cybersecurity checklist. You clearly take your organization's security seriously — and in 2026, that's not optional.

I wanted to share something from an assessment we completed this week. A 60-person company — profitable, well-run, good reputation — had what they believed was solid security. Firewall, antivirus, "the usual."

In the first 30 minutes of our assessment, we found:
- **14 devices** with no endpoint protection
- **Zero multi-factor authentication** (including on their email and VPN)
- **6 former employee accounts** still active in Active Directory
- A backup system that **hadn't completed a successful job in 3 weeks**

This isn't unusual. This is *typical*. We see similar findings in 70%+ of our assessments.

The checklist you downloaded will help you identify your own gaps. But if you want a professional assessment — conducted by engineers who've evaluated hundreds of environments — we offer them free of charge.

No obligation. No sales pitch. Just a clear-eyed look at where you stand.

{{calendar_link}}

Best,
Mark Duerwachter
VP of Business Operations
Modern Edge Technology`,
      },
      {
        day: "Day 5",
        subject: "67% of Ransomware Attacks Target Businesses Under 100 Employees",
        preview: "The stats are worse than you think — but prevention is more affordable than you'd expect...",
        body: `Hi {{first_name}},

I want to put some numbers in front of you — not to scare you, but because I've watched too many businesses learn these lessons the hard way.

**Ransomware in 2026 — the numbers:**
- 67% of attacks target businesses under 100 employees
- Average ransom demand: $1.5 million
- Average recovery time: 22 days
- Organizations that pay recover only 65% of data
- 80% of organizations that pay are attacked again within 12 months
- 60% of affected SMBs close within 6 months

**The cost of prevention:**
- Comprehensive managed security for a 50-person company: $8,000-$20,000/year
- That's 1/100th the cost of a single successful attack

Prevention includes:
✅ 24/7 managed detection and response
✅ Endpoint protection on every device
✅ Email security with AI-powered threat detection
✅ Automated patch management
✅ Immutable backup with verified restores
✅ Security awareness training with phishing simulation
✅ Incident response planning and testing

Every layer matters. Missing even one creates the gap an attacker needs.

Would a 30-minute security review be worth your time? I'll walk through your current posture and identify your three highest-priority improvements — no strings attached.

{{calendar_link}}

Best,
Mark`,
      },
      {
        day: "Day 10",
        subject: "Your cyber insurance might not cover you",
        preview: "Insurers are now requiring specific controls — here's what they check...",
        body: `Hi {{first_name}},

Here's something that catches many business owners off guard: **cyber insurance premiums have increased 300% in three years** — and insurers are now denying coverage to organizations that can't demonstrate specific security controls.

Before issuing or renewing a policy, most underwriters now require evidence of:

☐ Multi-factor authentication on all remote access and email
☐ Endpoint detection and response on all devices
☐ Regular patch management with documented cadence
☐ Backup systems with tested recovery procedures
☐ Security awareness training program
☐ Incident response plan
☐ Network segmentation
☐ Email filtering and anti-phishing controls

If you can't check every box, you're likely facing one of three scenarios:
1. **Denied coverage** entirely
2. **Dramatically higher premiums** (sometimes 5-10x)
3. **Coverage exclusions** that render the policy useless when you need it

When a breach occurs without insurance, the average SMB recovery cost exceeds **$1.85 million**.

We help clients implement every control on that checklist — often within 30-60 days — and provide the documentation insurers require. Several clients have seen their premiums decrease after implementing our managed security services.

Worth a conversation?

{{calendar_link}}

Best,
Mark`,
      },
    ],
  },
];

const SequenceAccordion = ({ sequence }: { sequence: Sequence }) => {
  const [openEmail, setOpenEmail] = useState<number | null>(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-border mb-8"
    >
      {/* Sequence header */}
      <div className="bg-secondary/30 px-6 py-5 border-b border-border">
        <div className="flex items-center gap-3 mb-2">
          <Send size={16} className="text-primary" />
          <h3 className="font-mono-display text-sm uppercase tracking-wider">{sequence.name}</h3>
        </div>
        <div className="flex flex-wrap gap-6 text-xs text-muted-foreground">
          <span><strong className="text-foreground">Audience:</strong> {sequence.audience}</span>
          <span><strong className="text-foreground">Goal:</strong> {sequence.goal}</span>
          <span><strong className="text-foreground">Emails:</strong> {sequence.emails.length}</span>
        </div>
      </div>

      {/* Emails */}
      {sequence.emails.map((email, i) => (
        <div key={i} className="border-b border-border last:border-b-0">
          <button
            onClick={() => setOpenEmail(openEmail === i ? null : i)}
            className="w-full flex items-center gap-4 px-6 py-4 text-left hover:bg-secondary/20 transition-colors"
          >
            <div className="flex items-center gap-3 shrink-0">
              <Clock size={14} className="text-primary" />
              <span className="text-xs font-mono-display text-primary w-14">{email.day}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-foreground truncate">{email.subject}</div>
              <div className="text-xs text-muted-foreground truncate">{email.preview}</div>
            </div>
            <ChevronDown size={16} className={`text-muted-foreground shrink-0 transition-transform duration-200 ${openEmail === i ? "rotate-180" : ""}`} />
          </button>

          {openEmail === i && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="px-6 pb-6"
            >
              <div className="bg-background border border-border p-6 mt-2">
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
                  <Mail size={14} className="text-primary" />
                  <span className="text-xs text-muted-foreground">Subject:</span>
                  <span className="text-sm font-medium">{email.subject}</span>
                </div>
                <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line font-mono text-xs">
                  {email.body}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      ))}
    </motion.div>
  );
};

const EmailsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingMarketingMenu />

      <section className="pt-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm font-mono-display uppercase tracking-wider mb-8 transition-colors">
            <ArrowLeft size={14} /> Back to Home
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-sm font-mono-display text-primary uppercase tracking-wider">Marketing Showcase</span>
            <h1 className="text-4xl md:text-5xl font-medium uppercase mt-3">Email Sequences</h1>
            <p className="text-muted-foreground mt-4 max-w-2xl text-lg leading-relaxed">
              Automated email nurture campaigns designed to educate prospects, build trust, and drive conversions across key verticals.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          {sequences.map((seq, i) => (
            <SequenceAccordion key={i} sequence={seq} />
          ))}
        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-medium uppercase">Ready to automate your outreach?</h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm">These sequences are customized per client. Every email is written by industry experts and optimized for deliverability.</p>
          <Button variant="hero" size="lg" className="mt-6" asChild>
            <Link to="/quote">Get Started</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EmailsPage;
