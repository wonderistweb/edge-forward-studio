import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Clock, Send, ChevronDown, Filter } from "lucide-react";
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
  campaign: string;
  audience: string;
  goal: string;
  emails: Email[];
}

const campaigns = [
  { id: "all", label: "All Campaigns" },
  { id: "general", label: "General / MSP" },
  { id: "erate", label: "E-Rate" },
  { id: "cybersecurity", label: "Cybersecurity" },
];

const sequences: Sequence[] = [
  {
    name: "New Lead Nurture",
    campaign: "general",
    audience: "Website form submissions & free assessment requests",
    goal: "Convert cold leads to booked discovery calls within 14 days",
    emails: [
      {
        day: "Day 0",
        subject: "Your IT is costing you $268K/yr. Here's the math.",
        preview: "You requested an assessment. Here's what we're going to find...",
        body: `{{first_name}},

You just requested a free IT assessment. Good move.

Here's what I'm going to tell you before we even look at your network:

**Your IT is costing you 3-5x what it should.**

How do I know? Because in 500+ assessments, we've never — not once — found a business running reactive IT that wasn't massively overpaying.

The average 50-person company on break-fix IT spends **$268,000-$647,000/year**. That's not a typo. That includes:

→ $48K-$72K in repair bills
→ $120K-$200K in downtime (12-16 hrs/yr of unplanned outages)
→ $35K-$150K in security incident cleanup
→ $50K-$200K in compliance remediation

We replace all of that for **$87K-$165K/year**. Same company. Better results. 99.99% uptime.

**Here's what happens next:**

1. I call you within 24 hours
2. Our engineers audit your entire environment (2-4 hrs)
3. You get a brutally honest report with prioritized fixes

No contract. No obligation. No BS.

If your IT is solid, I'll tell you. If it's a ticking time bomb (it usually is), I'll tell you that too.

Talk soon,
Mark Duerwachter
Modern Edge Technology`,
      },
      {
        day: "Day 3",
        subject: "The $647K question nobody asks their IT guy",
        preview: "Your IT provider has zero incentive to fix this. Here's why...",
        body: `{{first_name}},

Quick thought experiment:

Your break-fix IT guy charges by the hour. More problems = more billable hours. More downtime = more emergency calls. More fires = more revenue for them.

**Why would they ever fix the root cause?**

They wouldn't. And they don't. That's why the same problems keep happening.

The managed model flips this entirely:

→ We charge a flat monthly fee
→ Every outage costs US money (not you)
→ Every fire we prevent saves US time
→ Our entire incentive is to make your IT boring

**Boring IT = profitable business.**

The companies paying us $7K-$14K/month used to spend $22K-$54K/month on reactive IT. They didn't cut costs by switching — they cut costs by 60-75%.

Still haven't booked your assessment? Two options:

1. Reply "yes" and I'll call you
2. Grab a time: {{calendar_link}}

Either way takes 30 seconds.

— Mark`,
      },
      {
        day: "Day 7",
        subject: "Your backup probably doesn't work. (Seriously.)",
        preview: "73% of the businesses we audit have broken backups. Here's the scary part...",
        body: `{{first_name}},

I need to ask you one question:

**When was the last time someone actually tested restoring from your backup?**

Not "when did the backup run." When did someone restore a file, a database, an entire server — and verify it actually worked?

If the answer is "I don't know" or "never," you're in the majority. And you're gambling your entire business on an assumption.

Here's what we find in 73% of assessments:

🔴 Backups failed silently weeks ago — nobody noticed
🔴 Backups run but have never been test-restored
🔴 Critical systems aren't included in the backup scope
🔴 Recovery would take 5-7 days (business can't survive 5-7 days)

**60% of businesses that lose their data shut down within 6 months.**

Not "have a bad quarter." Shut down. Permanently.

Our assessment includes a full backup audit — we test your restores, verify your RPO and RTO, and tell you exactly where you stand.

Free. No strings. 2-4 hours of your time for total peace of mind (or a wake-up call you needed).

{{calendar_link}}

— Mark`,
      },
      {
        day: "Day 10",
        subject: "We found 12 critical vulnerabilities. The client had 'no IT problems.'",
        preview: "A real assessment from last week. This is what 'fine' looks like...",
        body: `{{first_name}},

Real story from last week.

45-person company. {{industry}} space. Owner told me: "Our IT is fine. We just want a second opinion."

Here's what "fine" looked like:

🔴 Firewall firmware: 3 years outdated, 12 known exploit paths
🔴 8 workstations with ZERO endpoint protection
🔴 Backup hadn't completed in 6 WEEKS (no alerts set up)
🔴 3 former employee accounts still active with full access
🔴 No MFA on email, VPN, or any cloud service
🔴 Guest WiFi on same network as accounting software

Any ONE of these = ransomware entry point.
ALL of them together = guaranteed breach. Just a matter of when.

**We fixed everything in 30 days.**

Six months later:
→ Zero security incidents
→ Zero unplanned outages
→ Monthly IT cost dropped 40%

That's not magic. That's what proactive IT looks like.

Your assessment takes 2-4 hours. You'll either sleep better tonight or get the wake-up call that saves your business.

{{calendar_link}}

— Mark`,
      },
      {
        day: "Day 14",
        subject: "Last email. But read this before you delete it.",
        preview: "Every business owner who got breached said the same thing...",
        body: `{{first_name}},

Last email. I promise.

But I need you to read this one line:

**Every single business owner who got breached told me the same thing: "I knew I should have done something sooner."**

Every. Single. One.

Not "I had no idea." Not "nobody told me." It was always: "I knew. I just didn't make it a priority."

The assessment is:
→ Free
→ 2-4 hours
→ No obligation
→ No contract
→ No sales pitch

You get a report. A roadmap. Clarity.

Whether you work with us or not, you'll know exactly where you stand.

Reply "yes" or book here: {{calendar_link}}

After this, I'm out of your inbox.

— Mark`,
      },
    ],
  },
  {
    name: "E-Rate Blitz — Schools & Libraries",
    campaign: "erate",
    audience: "Every K-12 superintendent, IT director, library director & board member with eligible E-Rate funds",
    goal: "Ensure no school or library leaves federal dollars unclaimed",
    emails: [
      {
        day: "Day 0",
        subject: "You're leaving $835,000 on the table. Here's the proof.",
        preview: "Federal money your school/library already qualifies for — unclaimed...",
        body: `{{first_name}},

I'm going to tell you a number. And it's going to make you uncomfortable.

**$4 billion.** That's how much E-Rate funding is available every year for schools and libraries.

**Billions** of it goes unclaimed. Every. Single. Year.

Schools and libraries that qualify for 60-90% discounts on WiFi, switches, cabling, firewalls, and internet service just... don't apply. Because the process looks complicated. Because nobody told them. Because they assumed they didn't qualify.

Let me make this simple:

**If you have students, you qualify.**
**If you have patrons, you qualify.**

Here's what the math looks like:

📊 Schools: **$167 per student** in Category 2 funding
→ 500 students = $83,500
→ 2,000 students = $334,000
→ 5,000 students = $835,000

📊 Libraries: **$2.39 per square foot** in Category 2 funding
→ 10,000 sq ft = $23,900
→ 15,000 sq ft = $35,850
→ 3 branches @ 15K sq ft each = $107,550

**That's YOUR money. It's already allocated. The government WANTS you to take it.**

We've secured **$12M+** in E-Rate funding. 98% approval rate. We handle every form, every bid, every compliance requirement.

You focus on students and patrons. We handle the paperwork.

Free eligibility check — takes 15 minutes: {{calendar_link}}

— Mark Duerwachter
Modern Edge Technology`,
      },
      {
        day: "Day 3",
        subject: "Your library's WiFi complaints end here. (90% funded.)",
        preview: "E-Rate will pay for 60-90% of your WiFi upgrade. No catch...",
        body: `{{first_name}},

Your patrons are complaining about WiFi. I know because they ALL are.

200 people on consumer-grade networking equipment = disaster. Dropped video calls. Streaming that buffers every 30 seconds. Kids who can't complete homework. Adults who can't apply for jobs.

**Your library exists for digital equity. Broken WiFi defeats the purpose.**

Here's the thing: the federal government will pay for 60-90% of a complete wireless network upgrade. It's called E-Rate. And your library almost certainly qualifies.

What we deploy for library systems:

→ Enterprise WiFi 6E — handles 200+ simultaneous devices without flinching
→ CIPA-compliant filtering — required for E-Rate, protects minors
→ Network segmentation — staff, public, and IoT on separate networks
→ Managed switches & cabling — the infrastructure that makes it all work

**Real numbers from a real library:**

3 branches. 45,000 total sq ft. 70% discount rate.

Total project cost: $153,643
Library paid: $46,093
**Federal funding: $107,550**

That's not a grant application that takes 6 months. That's E-Rate. We handle the forms. You get enterprise WiFi.

15-minute eligibility check: {{calendar_link}}

— Mark`,
      },
      {
        day: "Day 6",
        subject: "Miss this deadline, wait 365 days. Not kidding.",
        preview: "E-Rate has RIGID deadlines. One day late = one year wait...",
        body: `{{first_name}},

I'm not going to sugarcoat this.

**E-Rate has the strictest deadlines of any federal program I've worked with.**

Miss the Form 470 window by ONE day? Wait a full year.
File Form 486 one day late? Forfeit your ENTIRE year's funding.
One typo on a service date? Application denied.

Here are the dates burned into my calendar:

📅 Oct-Nov: Form 470 posted (starts 28-day competitive bid)
📅 Jan-Mar: Form 471 filing window
📅 120 days after approval: Form 486 deadline

The top 5 mistakes that KILL applications:

1. Bad bid documentation (USAC audits this aggressively)
2. Service dates don't match across forms (one day off = denied)
3. Including ineligible items (Chromebooks, cameras, phones = NO)
4. Missing Form 486 (120-day clock starts ticking immediately)
5. Not keeping records for 10 years (yes, TEN years)

Schools and libraries that use a qualified E-Rate consultant get **30-50% more funding** than self-filers.

We've filed hundreds of applications. Zero rejections for compliance errors. Ever.

The window is open NOW. Let's get your application started before it slams shut.

{{calendar_link}}

— Mark`,
      },
      {
        day: "Day 10",
        subject: "MIBS: How to get managed WiFi for pennies on the dollar",
        preview: "Most E-Rate applicants don't know about this. It changes everything...",
        body: `{{first_name}},

Most schools and libraries use E-Rate to BUY equipment.

Smart schools and libraries use E-Rate to get **managed equipment**.

It's called **MIBS — Managed Internal Broadband Services.** And it's the single best-kept secret in the E-Rate program.

Here's the difference:

❌ Without MIBS: You buy APs. They sit on the ceiling. Nobody monitors them. Firmware goes stale. Performance degrades. You don't know until teachers complain.

✅ With MIBS: You get APs + installation + monitoring + firmware updates + troubleshooting + performance optimization. ALL covered by E-Rate.

Same discount. Same funding. But instead of equipment collecting dust, you get a **fully managed network**.

**What MIBS covers:**
→ WiFi 6E/7 access points + licensing
→ Managed network switches
→ Structured cabling
→ UPS/battery backup
→ Firewall & CIPA filtering
→ Professional installation
→ Ongoing monitoring & maintenance

**What it doesn't cover:**
→ Chromebooks, tablets, laptops
→ Security cameras
→ Phone systems
→ Training

We structure MIBS contracts to squeeze every eligible dollar out of your Category 2 budget. $167/student for schools. $2.39/sq ft for libraries.

**We've never had a MIBS application rejected.** Not once.

Want to see what MIBS looks like for your organization?

{{calendar_link}}

— Mark`,
      },
      {
        day: "Day 14",
        subject: "$400K for a school. $107K for a library. Real E-Rate results.",
        preview: "Two real projects. Real numbers. Your organization could be next...",
        body: `{{first_name}},

No theory. No projections. Just results.

**🏫 SCHOOL DISTRICT — 5,000 students**

Problem: 8-year-old WiFi. Dead zones in 40% of classrooms. State testing kept crashing. Teachers furious.

What we deployed:
→ 180 WiFi 6E access points
→ 24 managed switches
→ Complete Cat6A cabling upgrade
→ 5-year MIBS contract

The numbers:
Total cost: $500,000
E-Rate discount: 80%
**District paid: $100,000**
**Federal funding: $400,000**

Results after one semester:
→ ZERO WiFi-related test disruptions (was 47 the prior year)
→ Teacher satisfaction up 34%
→ Student connectivity issues down 91%
→ IT help desk tickets dropped 85%

---

**📚 LIBRARY SYSTEM — 3 branches, 45,000 sq ft**

Problem: Patron WiFi complaints at EVERY branch. 200+ users crashing consumer-grade equipment. No CIPA filtering (not even E-Rate eligible without it).

What we deployed:
→ 42 enterprise APs across 3 branches
→ SD-WAN connecting all branches
→ CIPA-compliant filtering
→ Full network segmentation
→ 3-year MIBS contract

The numbers:
Total cost: $153,643
E-Rate discount: 70%
**Library paid: $46,093**
**Federal funding: $107,550**

Results:
→ WiFi complaints: near zero
→ Patron satisfaction up 28%
→ IT troubleshooting time down 75%

---

**Your organization is next.** The money is there. The funding window is open. We handle everything.

15 minutes on the phone. That's all it takes to start.

{{calendar_link}}

— Mark`,
      },
    ],
  },
  {
    name: "Cybersecurity Wake-Up Call",
    campaign: "cybersecurity",
    audience: "Business owners who downloaded security content or visited security pages",
    goal: "Create urgency and convert to managed security clients",
    emails: [
      {
        day: "Day 0",
        subject: "You have a 67% chance of getting ransomwared. Here's why.",
        preview: "The stats are terrifying. But the fix costs less than a part-time employee...",
        body: `{{first_name}},

You downloaded our cybersecurity checklist. Which means you already suspect something is wrong.

Let me confirm it.

**67% of ransomware attacks target businesses with fewer than 100 employees.**

Not Fortune 500s. Not banks. Businesses like yours.

Average ransom demand: **$1.5 million**
Average recovery time: **22 days**
Percentage that pay and get ALL data back: **0%** (average recovery is 65%)
Percentage attacked AGAIN within 12 months: **80%**
Percentage that close permanently within 6 months: **60%**

Read that last one again. **Sixty percent close. Forever.**

Now here's the part that should make you angry:

**Preventing all of this costs $8K-$20K/year.** For a 50-person company. That's less than a part-time employee.

We assessed a 60-person company last week. "Good reputation. Profitable. Solid security." Their words.

In 30 minutes we found:
→ 14 devices with ZERO endpoint protection
→ No MFA anywhere (email, VPN, cloud apps)
→ 6 former employee accounts still active
→ Backup hadn't completed in 3 weeks

That's not unusual. That's AVERAGE.

Free security assessment. 2 hours. You'll know exactly where you stand.

{{calendar_link}}

— Mark`,
      },
      {
        day: "Day 5",
        subject: "The $1.85M mistake you're making right now",
        preview: "Ransomware costs 100x more than prevention. These are the exact numbers...",
        body: `{{first_name}},

Let me put two numbers in front of you:

**Cost of prevention:** $8,000-$20,000/year
**Cost of a breach:** $1,850,000 average

That's a 100:1 ratio. You're either spending $1 on prevention or $100 on cleanup. There is no third option.

Here's what $8K-$20K/year buys you:

✅ 24/7 managed detection & response (humans watching your network around the clock)
✅ Endpoint protection on EVERY device
✅ AI-powered email security
✅ Automated patch management (no more "we'll get to it next week")
✅ Immutable backups with verified restores
✅ Security awareness training + phishing simulations
✅ Incident response plan (tested, not theoretical)

**Every layer matters.** Attackers only need ONE gap. One unpatched server. One phished employee. One reused password. One missing MFA prompt.

You either close the gaps or you pray. And prayer is not a cybersecurity strategy.

30-minute security review. I'll walk through your posture and give you your three highest-priority fixes. Free. No strings.

{{calendar_link}}

— Mark`,
      },
      {
        day: "Day 10",
        subject: "Your cyber insurance is probably worthless. Here's the test.",
        preview: "Insurers are denying claims left and right. Check these 8 boxes or you're exposed...",
        body: `{{first_name}},

Plot twist: **your cyber insurance might not pay out when you need it.**

Premiums have jumped 300% in three years. And insurers are now DENYING claims to organizations that can't prove specific security controls were in place BEFORE the breach.

Here's their checklist. Fail any item and you're looking at:
→ Coverage denied entirely
→ Premiums 5-10x higher on renewal
→ Exclusions that make the policy worthless

**The 8 controls every insurer now requires:**

☐ MFA on all remote access and email
☐ EDR (endpoint detection & response) on all devices
☐ Documented patch management cadence
☐ Tested backup & recovery procedures
☐ Security awareness training program
☐ Written incident response plan
☐ Network segmentation
☐ Email filtering & anti-phishing controls

**How many can you check right now?**

If it's not 8/8, you're either paying too much for insurance, getting denied coverage, or holding a policy with so many exclusions it's basically wallpaper.

We implement all 8 controls — typically within 30-60 days. Several clients saw their premiums DECREASE after working with us because insurers reward proper security posture.

Average breach without insurance: **$1.85M.** Out of pocket. Game over.

Let's make sure that's not you.

{{calendar_link}}

— Mark`,
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
  const [activeCampaign, setActiveCampaign] = useState("all");

  const filtered = activeCampaign === "all"
    ? sequences
    : sequences.filter((s) => s.campaign === activeCampaign);

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
              High-conversion email campaigns written in a direct, value-first style. No fluff. No corporate speak. Just results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Campaign Toggles */}
      <section className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center gap-3 flex-wrap">
            <Filter size={14} className="text-muted-foreground" />
            {campaigns.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCampaign(c.id)}
                className={`text-xs font-mono-display uppercase tracking-wider px-4 py-2 border transition-colors ${
                  activeCampaign === c.id
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          {filtered.length === 0 ? (
            <div className="text-center text-muted-foreground py-20">No sequences for this campaign.</div>
          ) : (
            filtered.map((seq, i) => (
              <SequenceAccordion key={i} sequence={seq} />
            ))
          )}
        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-medium uppercase">Ready to automate your outreach?</h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm">Every email written to convert. No fluff. No "just checking in." Pure value and urgency.</p>
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
