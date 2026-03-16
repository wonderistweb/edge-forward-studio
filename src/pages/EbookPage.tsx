import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingMarketingMenu from "@/components/FloatingMarketingMenu";
import markPhoto from "@/assets/mark-duerwachter.jpg";

const chapters = [
  {
    number: "01",
    title: "The End of Break-Fix IT",
    content: `The break-fix model served businesses adequately for decades. When something broke, you called a technician. They fixed it. You paid the bill. Simple, transactional, and seemingly cost-effective.

That model is now a liability — and the math proves it conclusively.

The average small-to-medium business with 50 employees operating on a reactive IT model spends between $268,000 and $647,000 annually on technology-related costs. This figure accounts for break-fix repair bills ($48,000-$72,000/year), downtime costs from 12-16 hours of unplanned outages ($120,000-$200,000), security incident remediation ($35,000-$150,000), compliance remediation ($50,000-$200,000), and increasingly expensive cyber liability insurance premiums ($15,000-$25,000).

Compare this to the managed services model for the same organization: $87,000-$165,000 annually, inclusive of 24/7 monitoring, proactive maintenance, enterprise-grade security, help desk support, and strategic technology planning. The managed model costs 50-75% less than reactive IT. Every single time.

But cost reduction is only the beginning of the value proposition. The managed model fundamentally changes the relationship between technology and business outcomes:

**Predictability replaces volatility.** Monthly fees replace surprise repair bills. Budgeting becomes straightforward. Cash flow becomes predictable. Finance teams can plan with confidence rather than holding reserves for unknown IT emergencies.

**Prevention replaces reaction.** A hard drive showing early signs of failure gets replaced during a maintenance window — not at 2 PM on a Tuesday when it takes your accounting system offline. A network switch experiencing port errors gets firmware-updated before it starts dropping packets. Issues are identified and resolved before users notice them.

**Strategy replaces firefighting.** Instead of an IT person who shows up when things break, you gain access to a virtual CIO who evaluates your technology stack holistically, creates multi-year roadmaps, manages vendor relationships, and ensures every dollar spent on technology delivers measurable business value.

The transition from reactive to managed IT typically takes 30-60 days. During that period, a qualified managed services provider conducts a comprehensive infrastructure audit, documents the environment, remediates critical vulnerabilities, deploys monitoring tools, and establishes baseline performance metrics. Most organizations see measurable improvement within the first 90 days.`,
  },
  {
    number: "02",
    title: "Understanding the Modern Threat Landscape",
    content: `Cybersecurity is no longer an IT problem. It is a business survival problem. The threat landscape of 2026 bears no resemblance to the landscape of even five years ago, and organizations that haven't updated their security posture accordingly are operating on borrowed time.

**Ransomware has industrialized.** Modern ransomware operations are run by sophisticated criminal enterprises with full-time developers, quality assurance teams, customer support, and affiliate programs. Ransomware-as-a-Service (RaaS) has democratized attacks to the point where conducting a ransomware campaign requires zero technical skill — an affiliate leases the tools for a percentage of the ransom proceeds, complete with technical support.

Double extortion is now standard: attackers exfiltrate your data before encrypting it. If you refuse to pay for the decryption key, they threaten to publish sensitive information on the dark web. Triple extortion adds another layer — contacting your customers, partners, and regulators directly to pressure payment through reputational damage.

The numbers are sobering: 67% of ransomware attacks target businesses with fewer than 100 employees. Average ransom demand: $1.5 million. Average recovery time: 22 days. Organizations that pay recover only 65% of their data. 80% of organizations that pay are attacked again within 12 months. 60% of affected SMBs close permanently within six months.

**Credential theft is epidemic.** Over 80% of breaches involve compromised credentials. Attackers don't hack in — they log in. Passwords are phished, leaked in data breaches, reused across accounts, and shared among team members. A password alone no longer represents identity.

**Supply chain attacks have changed the rules.** When your trusted software update mechanism delivers malware — as happened with SolarWinds, Kaseya, and dozens of less-publicized incidents — perimeter-based security provides zero protection.

**The talent gap is widening.** There are approximately 3.5 million unfilled cybersecurity positions globally. Even organizations with the budget to hire dedicated security staff are competing for talent against companies with deeper pockets and more compelling career paths.

The response to this landscape isn't panic — it's systematic, layered defense built on Zero Trust principles. And that defense is more accessible and affordable than most business leaders realize.`,
  },
  {
    number: "03",
    title: "Zero Trust Architecture: The New Security Standard",
    content: `"Never trust, always verify." This principle is the foundation of Zero Trust architecture — the security model that has become the new standard for organizations of every size.

Traditional network security operated on a simple premise: build a strong perimeter, and everything inside that perimeter is trusted. This model worked when employees sat in the same building, servers lived in the same closet, and the most sophisticated attack was password guessing.

Zero Trust eliminates the concept of a trusted network perimeter. Instead, every access request is verified regardless of where it originates, who makes it, or how many times the user has been verified before.

**The four pillars of Zero Trust:**

**1. Verify Explicitly.** Every access request must be authenticated and authorized based on all available data points: user identity, device health, location, time of day, resource sensitivity, and behavioral patterns. A user logging in from their usual workstation during business hours receives different scrutiny than the same user logging in from an unknown device at 3 AM from an unfamiliar location.

**2. Least-Privilege Access.** Users have access only to the specific resources needed for their current task, only for the duration needed. A marketing coordinator doesn't need access to financial data. An accounts payable clerk doesn't need admin rights to the CRM. Every excess permission is an attack surface.

**3. Assume Breach.** Design your architecture as if an attacker is already inside your network — because the average dwell time for an undetected attacker is 287 days. Segment your network. Encrypt data at rest and in transit. Monitor for anomalies. Maintain the ability to detect and contain threats in real time.

**4. Micro-Segmentation.** Instead of a flat network where every device can communicate with every other device, create granular security zones. Accounting systems are isolated from marketing. IoT devices are segregated from production data. A breach in one segment cannot propagate to others.

**Implementation follows a phased approach:**

Phase 1 (Weeks 1-4): Identity foundation — MFA everywhere, conditional access policies, single sign-on, privileged access management.

Phase 2 (Weeks 4-8): Device trust — endpoint detection and response, mobile device management, device health attestation, network access control.

Phase 3 (Weeks 8-12): Network segmentation — production, user, IoT, guest, and management segments with enforced access policies.

Phase 4 (Weeks 12-16): Continuous verification — UEBA, SIEM, automated response playbooks, regular penetration testing.

The average cost of implementing comprehensive Zero Trust for a 50-person organization: $25,000-$75,000. The average cost of a data breach for the same organization: $1.85 million. That's a 25:1 return on prevention.`,
  },
  {
    number: "04",
    title: "Cloud Strategy: Getting Migration Right",
    content: `Cloud migration is inevitable for most businesses. The benefits are real: elastic scalability, reduced capital expenditure, geographic redundancy, and access to managed services that would be impossible to build on-premises.

But the path from on-premises to cloud is littered with cautionary tales. The five most common migration mistakes account for the vast majority of failures — and every one of them is preventable.

**Mistake #1: Lift-and-Shift Without Optimization.** Taking everything running on physical servers and putting it on virtual servers in the cloud produces cloud prices for on-premises performance. A manufacturing company that lift-and-shifted their ERP to Azure saw monthly costs jump from $4,500 to $11,200 — with worse performance. The fix: assess every workload using the six R's framework (rehost, replatform, refactor, repurchase, retain, retire). Only 20-30% of workloads are appropriate for pure lift-and-shift.

**Mistake #2: Ignoring Data Gravity.** Cloud providers make data ingress cheap and egress expensive. An organization with 50TB in AWS faces $4,500 in egress fees just to move to another provider. Design your data architecture before your compute architecture. Consider multi-cloud from day one.

**Mistake #3: Underestimating Security.** The shared responsibility model means your provider secures infrastructure; you secure everything you put on it. Moving to the cloud doesn't make you HIPAA/PCI/SOC 2 compliant — it changes your compliance requirements and often increases them.

**Mistake #4: No Rollback Plan.** Maintain your on-premises environment for at least 90 days post-migration. Build and test rollback procedures. Migrate user groups incrementally. Define success criteria before decommissioning.

**Mistake #5: Choosing on Price Alone.** Calculate total cost of ownership over 3-5 years including compute, storage, networking, database, support, training, security, management, and exit costs. The cheapest compute pricing often comes with the most expensive storage, support, and egress fees.

Cloud migration, done correctly, is transformational. Done incorrectly, it's an expensive lesson in planning.`,
  },
  {
    number: "05",
    title: "Business Continuity: Why 60% Never Recover",
    content: `Within six months of a major data loss event, 60% of affected companies close permanently. Another 29% close within two years. These statistics from the National Archives and Records Administration represent real businesses destroyed by events that were entirely preventable.

Business continuity is not the same as disaster recovery. Disaster recovery focuses on restoring IT systems after a disruption. Business continuity encompasses everything: people, processes, facilities, supply chains, communications, and technology. DR answers "how do we get systems back online?" BC answers "how does our business continue operating?"

**The essential BCP components:**

**Business Impact Analysis (BIA)** systematically identifies critical processes and quantifies the impact of their interruption. For each process, determine revenue impact, regulatory impact, contractual impact, and operational dependencies. This produces your Recovery Time Objective (RTO) — maximum acceptable downtime — and Recovery Point Objective (RPO) — maximum acceptable data loss.

**Risk Assessment** identifies threats by probability and impact: natural disasters, hardware failure, cyber attacks, human error, supply chain disruption, facility events, and health emergencies.

**Recovery Strategies** address technology recovery (hot/warm/cold standby, DRaaS), facility recovery (alternate locations, remote work), and personnel recovery (cross-training, succession planning).

**Communication Plan** defines who needs to know what, when. Employee notification via automated mass systems. Customer communication with pre-drafted templates. Vendor coordination with escalation contacts. Regulatory notification per compliance requirements. Media response with designated contacts.

**Testing** is the most neglected element. An untested plan will fail. Test quarterly: tabletop exercises quarterly, functional tests semi-annually, full-scale drills annually.

**The modern BCP technology stack** makes enterprise-grade continuity accessible to every organization:

- Cloud backup with continuous data protection (15-minute RPO or better)
- Disaster Recovery as a Service bringing systems online in minutes
- Automated orchestration executing recovery procedures without human intervention
- Geographic redundancy across multiple data centers

The investment ranges from $5,000-$15,000/year for basic BCP (48-hour RTO) to $40,000-$100,000/year for enterprise BCP (15-minute RTO). Compare this to the $1.2 million average cost of a data loss event — and the 60% chance of permanent closure.

Business continuity isn't about technology. It's about survival.`,
  },
  {
    number: "06",
    title: "E-Rate & MIBs: Maximizing Federal Funding for Schools",
    content: `The E-Rate program — formally the Schools and Libraries Universal Service Support Mechanism — provides discounts of 20% to 90% on eligible telecommunications, internet access, and internal connections for K-12 schools and libraries. It is the single largest source of federal technology funding for education, distributing approximately $4 billion annually.

Yet billions of dollars go unclaimed every year because districts don't apply, make filing errors, or don't understand what's eligible. The program is powerful but complex — and the rules change regularly.

## Understanding MIBs (Manufacturer Internet Broadband)

**MIBs — Manufacturer Internet Broadband devices — are a critical and often misunderstood component of E-Rate Category 2 funding.** MIBs refer to the broadband equipment manufactured and supplied for internal connections, including managed internal broadband services (MIBS) that bundle equipment, installation, and management into a single eligible service.

Under E-Rate rules, **Managed Internal Broadband Services (MIBS)** allow schools to procure networking equipment — switches, wireless access points, cabling, UPS systems, racks, and related infrastructure — as a managed service rather than a capital purchase. This distinction is significant for several reasons:

**1. Budget Flexibility.** Instead of a large capital expenditure, districts can spread costs across the service period. MIBS contracts convert CapEx to OpEx, which is often easier to budget and approve at the school board level.

**2. Inclusive Management.** MIBS contracts can include ongoing management, monitoring, maintenance, and basic tech support for the equipment — services that would otherwise need to be separately budgeted. This means your wireless access points aren't just installed and forgotten; they're actively monitored and maintained throughout the contract term.

**3. Category 2 Budget Maximization.** Each school has a Category 2 budget cap (currently $167 per student, with a minimum floor of $25,000 per school). MIBS contracts allow districts to maximize this allocation by bundling eligible equipment and services into a single, discounted package.

**4. Simplified Procurement.** Rather than separately bidding equipment, installation labor, and management services, MIBS consolidates everything into a single Form 470 posting and competitive bid process.

## What's Eligible Under MIBS

- **Wireless Access Points** (WiFi 6/6E/7) — including mounting hardware and licensing
- **Network Switches** — managed switches for distribution and access layers
- **Structured Cabling** — Cat6/Cat6A runs, fiber backbone, patch panels, cable management
- **UPS/Power Protection** — battery backup for network closets and IDF rooms
- **Racks and Enclosures** — wall-mount and floor-standing network cabinets
- **Firewall/Content Filtering** — CIPA-compliant filtering (required for E-Rate eligibility)
- **Installation Labor** — professional installation and configuration
- **Basic Maintenance & Management** — monitoring, firmware updates, troubleshooting
- **Caching Servers** — for content delivery optimization

## What's NOT Eligible

- End-user devices (Chromebooks, tablets, laptops)
- Software that isn't directly tied to eligible equipment
- Servers used for administrative purposes
- Security cameras and physical security systems
- Telephone systems (these fall under separate Category 1 rules)
- Training and professional development

## The MIBS Application Process

**Step 1: Technology Plan Review.** Assess your current network infrastructure against educational requirements. Conduct wireless site surveys, document device density per classroom, and identify coverage gaps. This is where a qualified E-Rate consultant adds enormous value — we regularly find that districts are either over-provisioning (wasting budget) or under-provisioning (leaving students without reliable connectivity).

**Step 2: Form 470 Filing.** Post your requirements to the USAC portal for competitive bidding. The 470 must be posted for a minimum of 28 days. **Critical detail:** The description of services must be detailed enough to attract qualified bidders but not so specific that it limits competition. Getting this balance right is an art form.

**Step 3: Competitive Bidding.** Evaluate responses using price as the primary factor (per FCC rules), with consideration for prior experience, quality of service, and implementation timeline. All bid evaluation must be documented.

**Step 4: Form 471 Filing.** Submit your funding request with selected vendor, detailed cost breakdown, and discount calculation. This form is where most errors occur — incorrect service start dates, mismatched FRNs, or ineligible line items can delay or deny funding.

**Step 5: PIA Review.** USAC's Program Integrity Assurance team reviews your application. They may request additional documentation, clarification, or modifications. Response times directly impact funding timeline.

**Step 6: FCDL & Implementation.** Upon approval, you receive a Funding Commitment Decision Letter. Implementation can begin (or continue, if approved for early installation). Document everything — invoices, installation photos, serial numbers, and asset tags.

**Step 7: Form 486 & Invoicing.** Confirm services are being received and submit invoices for reimbursement through BEAR (Billed Entity Applicant Reimbursement) or SPI (Service Provider Invoice) methods.

## Common MIBS Mistakes That Cost Districts Money

**1. Not conducting a proper site survey.** Installing APs based on classroom count rather than RF analysis leads to either coverage gaps or co-channel interference. We've seen districts waste $50,000+ on APs that actively degraded network performance.

**2. Ignoring the 6GHz band.** WiFi 6E access points operating on the 6GHz band provide cleaner spectrum with less interference — critical for high-density educational environments. Districts still deploying WiFi 5 are buying equipment that will be obsolete before the E-Rate funding cycle ends.

**3. Failing to document cost allocation.** If a MIBS contract includes any ineligible components, the entire contract can be denied. Proper cost allocation separating eligible and ineligible items is essential.

**4. Missing the filing window.** E-Rate operates on a strict annual cycle. Missing the Form 470 posting window by even one day means waiting an entire year for funding.

**5. Not leveraging the Category 2 budget reset.** Category 2 budgets reset every five years. Districts that don't track their budget utilization leave money on the table.

## How Modern Edge Handles E-Rate MIBS

We've secured over **$12 million in E-Rate funding** for K-12 districts. Our process:

- **Free eligibility assessment** — we determine your discount rate and Category 2 budget before you commit to anything
- **Predictive wireless design** — Ekahau-based heat mapping ensures every AP is placed for optimal coverage, not just convenience
- **Full application management** — we handle Forms 470, 471, 486, and all PIA responses
- **MIBS contract structuring** — we structure proposals to maximize eligible services while maintaining compliance
- **Post-funding support** — ongoing network monitoring and management included in MIBS contracts
- **Audit preparation** — complete documentation packages ready for USAC compliance audits

The bottom line: if your district has students, you almost certainly qualify for E-Rate funding. The only question is whether you're capturing the full value available to you.`,
  },
  {
    number: "07",
    title: "Building Your Technology Roadmap",
    content: `Technology should be a strategic asset — not an afterthought. Yet most organizations make technology decisions reactively: buying whatever is cheapest when something breaks, adopting software because a vendor gave a compelling demo, or investing in infrastructure that solves today's problem but creates tomorrow's bottleneck.

A technology roadmap changes this dynamic. It aligns your IT investments with your business objectives, prioritizes spending based on impact, and ensures that every dollar delivers measurable value.

**Phase 1: Assessment (Weeks 1-2)**

Document your current state comprehensively:
- Complete hardware inventory with age, warranty, and end-of-life dates
- Software inventory with licensing, versions, and compliance status
- Network topology (physical and logical)
- Security posture assessment
- Backup and recovery verification
- Compliance gap analysis
- User satisfaction survey
- Current spend analysis across all technology categories

This assessment reveals your actual starting position — which is almost always different from what stakeholders believe it to be.

**Phase 2: Strategic Alignment (Weeks 2-3)**

Map technology capabilities to business objectives:
- Where is the business headed over the next 3-5 years?
- What growth is anticipated (employees, locations, revenue)?
- What compliance requirements are emerging?
- What competitive pressures require technology response?
- What operational inefficiencies could technology eliminate?
- What customer experience improvements would drive revenue?

This alignment ensures that technology investment serves business strategy — not the other way around.

**Phase 3: Roadmap Development (Weeks 3-4)**

Create a prioritized, phased implementation plan:

**Immediate (0-90 days):** Address critical vulnerabilities, compliance gaps, and systems at imminent risk of failure. These are non-negotiable investments that protect the business from existential threats.

**Short-term (90-180 days):** Modernize core infrastructure, implement monitoring and management platforms, deploy security controls. These investments establish the foundation for everything that follows.

**Medium-term (6-18 months):** Cloud migration, communication platform modernization, advanced security implementation, automation initiatives. These projects deliver competitive advantage and operational efficiency.

**Long-term (18-36 months):** Strategic initiatives aligned with business growth — new location buildouts, M&A technology integration, advanced analytics, AI/ML capabilities.

**Phase 4: Execution & Optimization (Ongoing)**

Execute the roadmap in defined sprints with measurable milestones. Review quarterly against business objectives. Adjust based on changing priorities, emerging threats, and new opportunities.

The roadmap is a living document — not a static plan. The organizations that execute most effectively are the ones that review and update quarterly, maintaining alignment between technology strategy and business reality.

**The bottom line:** Organizations with documented, maintained technology roadmaps spend 30-40% less on IT while achieving measurably better outcomes. The roadmap doesn't add cost — it eliminates waste, prevents emergencies, and transforms technology from a cost center into a competitive advantage.

This is what strategic IT partnership looks like. Not a vendor who sells you equipment. Not a technician who shows up when things break. A partner who understands your business, anticipates your needs, and ensures your technology serves your objectives — today and tomorrow.`,
  },
];

const EbookPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingMarketingMenu />

      {/* Hero */}
      <section className="pt-16 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm font-mono-display uppercase tracking-wider mb-8 transition-colors">
            <ArrowLeft size={14} /> Back to Home
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-mono-display uppercase tracking-wider px-3 py-1 mb-6">
              <BookOpen size={14} /> Free E-Book
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium uppercase leading-tight">
              The Strategic IT Playbook for Growing Businesses
            </h1>
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed max-w-2xl">
              A comprehensive guide to building, securing, and scaling your technology infrastructure — written for business leaders who want to turn IT from a cost center into a competitive advantage.
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-border">
              <img src={markPhoto} alt="Mark Duerwachter" className="w-14 h-14 rounded-full object-cover border border-border" />
              <div>
                <div className="text-sm font-medium text-foreground">Mark Duerwachter</div>
                <div className="text-xs text-muted-foreground">VP of Business Operations, Modern Edge Technology</div>
                <div className="text-xs text-muted-foreground mt-1">7 Chapters · 35 minute read</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="border-b border-border py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xs font-mono-display text-primary uppercase tracking-wider mb-6">Table of Contents</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {chapters.map((ch) => (
              <a
                key={ch.number}
                href={`#chapter-${ch.number}`}
                className="bg-card p-5 hover:bg-secondary transition-colors duration-150 group"
              >
                <div className="text-2xl font-mono-display font-semibold text-primary/30 group-hover:text-primary/50 transition-colors">{ch.number}</div>
                <div className="text-sm font-medium mt-2">{ch.title}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Chapters */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          {chapters.map((chapter, i) => (
            <motion.article
              key={chapter.number}
              id={`chapter-${chapter.number}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="mb-20 scroll-mt-24"
            >
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-border">
                <span className="text-4xl font-mono-display font-bold text-primary/20">{chapter.number}</span>
                <h2 className="text-2xl md:text-3xl font-medium uppercase">{chapter.title}</h2>
              </div>
              <div className="prose-custom">
                {chapter.content.split("\n\n").map((paragraph, pi) => {
                  if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                    return <h3 key={pi} className="text-lg font-semibold text-foreground mt-8 mb-3">{paragraph.replace(/\*\*/g, "")}</h3>;
                  }
                  if (paragraph.startsWith("**")) {
                    const parts = paragraph.split(/\*\*/g);
                    return (
                      <p key={pi} className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {parts.map((part, j) =>
                          j % 2 === 1 ? <strong key={j} className="text-foreground font-medium">{part}</strong> : part
                        )}
                      </p>
                    );
                  }
                  if (paragraph.startsWith("- ")) {
                    const items = paragraph.split("\n");
                    return (
                      <ul key={pi} className="space-y-2 mb-4 ml-4">
                        {items.map((item, j) => (
                          <li key={j} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                            <span className="text-primary mt-1.5 shrink-0">•</span>
                            {item.replace(/^- /, "").split(/\*\*/g).map((part, k) =>
                              k % 2 === 1 ? <strong key={k} className="text-foreground font-medium">{part}</strong> : part
                            )}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={pi} className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {paragraph.split(/\*\*/g).map((part, j) =>
                        j % 2 === 1 ? <strong key={j} className="text-foreground font-medium">{part}</strong> : part
                      )}
                    </p>
                  );
                })}
              </div>
              {i < chapters.length - 1 && <div className="h-px bg-border mt-16" />}
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-medium uppercase">Ready to put this playbook into action?</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Every strategy in this guide is one we implement for our clients every day. Let's start with a free infrastructure assessment and build your technology roadmap.
          </p>
          <Button variant="hero" size="lg" className="mt-8" asChild>
            <Link to="/quote">Get Your Free Assessment <ArrowRight className="ml-2" size={16} /></Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EbookPage;
