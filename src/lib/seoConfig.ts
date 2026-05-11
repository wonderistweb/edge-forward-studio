import type { SeoProps } from "@/components/Seo";

const BRAND = "Modern Edge Technology";
const ORIGIN = "https://modernedgetech.net";

/** Reusable LocalBusiness schema for service / industry pages. */
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BRAND,
  url: ORIGIN,
  telephone: "+1-414-269-1900",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Milwaukee",
    addressRegion: "WI",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "State", name: "Wisconsin" },
    { "@type": "City", name: "Milwaukee" },
  ],
};

const serviceSchema = (name: string, description: string, slug: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: name,
  name,
  description,
  provider: {
    "@type": "LocalBusiness",
    name: BRAND,
    url: ORIGIN,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Milwaukee",
      addressRegion: "WI",
      addressCountry: "US",
    },
  },
  areaServed: [
    { "@type": "State", name: "Wisconsin" },
    { "@type": "City", name: "Milwaukee" },
  ],
  url: `${ORIGIN}${slug}`,
});

const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
});

type StaticSeo = Omit<SeoProps, "canonicalPath">;

export const STATIC_SEO: Record<string, StaticSeo> = {
  "/": {
    title: "Managed IT Services Milwaukee & Wisconsin | Modern Edge Technology",
    description:
      "Lean, senior-led managed IT, cybersecurity, cloud, and network services for Milwaukee and Wisconsin organizations. Low markup. No fleet. Real expertise.",
    jsonLd: localBusinessSchema,
  },

  "/about": {
    title: "About Modern Edge Technology | Wisconsin IT Consulting",
    description:
      "Founded by Mark Duerwachter, Modern Edge Technology delivers senior-engineer-led IT, cybersecurity, and E-Rate guidance to Wisconsin businesses, schools, and libraries.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Mark Duerwachter",
      jobTitle: "VP of Business Operations",
      worksFor: { "@type": "Organization", name: BRAND, url: ORIGIN },
      knowsAbout: [
        "Managed IT services",
        "Cybersecurity",
        "Cloud migration",
        "E-Rate program",
        "Network design",
        "Wisconsin K-12 and library technology",
      ],
      url: `${ORIGIN}/about`,
    },
  },

  "/contact": {
    title: "Contact Modern Edge Technology | Wisconsin IT Support",
    description:
      "Talk to a senior engineer about managed IT, cybersecurity, cloud, network, or E-Rate projects in Milwaukee and across Wisconsin. Free, no-pressure assessment.",
  },

  "/quote": {
    title: "Request a Free IT Quote | Modern Edge Technology Wisconsin",
    description:
      "Get a free, custom quote for managed IT, cybersecurity, cloud migration, VoIP, or network projects in Milwaukee and across Wisconsin. Senior engineer review.",
  },

  "/quote/erate": {
    title: "E-Rate Project Quote for Wisconsin Schools | Modern Edge",
    description:
      "Request a free E-Rate project quote and expert guidance on Form 470, vendor evaluation, and Category 2 budgets for Wisconsin schools and districts.",
  },

  "/quote/library": {
    title: "Library E-Rate Quote | Wisconsin Public Library Funding",
    description:
      "Request an E-Rate quote built for Wisconsin public libraries — Category 2 budget review, eligible equipment, and senior-engineer support from Modern Edge Technology.",
  },

  "/blog": {
    title: "The Edge Report | IT, Cybersecurity & E-Rate Insights",
    description:
      "Practical guidance on managed IT, cybersecurity, cloud migration, VoIP, network design, and E-Rate funding from Modern Edge Technology's senior engineers.",
  },

  "/case-studies": {
    title: "Case Studies | Wisconsin IT, E-Rate & Network Projects",
    description:
      "Real-world results from Modern Edge Technology — Wisconsin library E-Rate funding, network design, and IT modernization case studies and analysis.",
  },

  "/case-studies/wisconsin-library-funding": {
    title: "Wisconsin Library E-Rate Funding Gap | Case Study",
    description:
      "An analysis of Wisconsin public library E-Rate Category 2 activity reveals 94% of libraries leave federal funding unused — and what the funded 6% did differently.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Wisconsin Library E-Rate Funding Gap",
      description:
        "Analysis of $28M in unused federal E-Rate Category 2 funding across Wisconsin public libraries.",
      author: { "@type": "Person", name: "Mark Duerwachter" },
      publisher: { "@type": "Organization", name: BRAND, url: ORIGIN },
      mainEntityOfPage: `${ORIGIN}/case-studies/wisconsin-library-funding`,
    },
  },

  "/case-studies/ubiquiti-erate-specifications": {
    title: "Why MET Avoids Ubiquiti for E-Rate | Case Study",
    description:
      "How vendor specification choices impact E-Rate timelines, pricing, and inventory risk — and why Modern Edge Technology designs around enterprise-grade alternatives.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Vendor Specifications and E-Rate Risk",
      description:
        "A senior engineer's analysis of Ubiquiti specifications in E-Rate projects, including pricing, inventory, and support trade-offs.",
      author: { "@type": "Person", name: "Mark Duerwachter" },
      publisher: { "@type": "Organization", name: BRAND, url: ORIGIN },
      mainEntityOfPage: `${ORIGIN}/case-studies/ubiquiti-erate-specifications`,
    },
  },

  "/e-rate": {
    title: "E-Rate Funding Guidance for WI Schools & Libraries",
    description:
      "Up to 90% E-Rate funding for school and library technology. Expert guidance on Form 470, competitive bidding, Category 2 budgets, and project delivery in Wisconsin.",
    jsonLd: faqSchema([
      {
        q: "What is E-Rate?",
        a: "E-Rate is the FCC's Schools and Libraries Universal Service program, providing up to 90% discounts on eligible internet, network equipment, and managed Wi-Fi services for schools and libraries.",
      },
      {
        q: "Does Modern Edge Technology file E-Rate forms?",
        a: "We provide expert guidance on the E-Rate process — including Form 470 strategy, vendor evaluation, Category 2 budget planning, and project execution — but we do not file forms on a school or library's behalf.",
      },
      {
        q: "How much funding can my school or library receive?",
        a: "Discounts range from 20% to 90% based on student poverty rates and rural status. Category 2 also has per-student and per-square-foot budget caps that reset on a five-year cycle.",
      },
    ]),
  },

  "/industries/education": {
    title: "K-12 IT Services & E-Rate Support in Wisconsin",
    description:
      "Network, cybersecurity, classroom Wi-Fi, and E-Rate guidance for Wisconsin K-12 districts and private schools. Senior engineers, not entry-level technicians.",
    jsonLd: serviceSchema("K-12 Education IT Services", "Managed IT, network design, and E-Rate guidance for Wisconsin schools.", "/industries/education"),
  },

  "/industries/libraries": {
    title: "Public Library IT & E-Rate Services | Wisconsin",
    description:
      "Managed IT, public-access Wi-Fi, security, and E-Rate Category 2 guidance for Wisconsin public libraries — from a senior-engineer-led local team.",
    jsonLd: serviceSchema("Public Library IT Services", "IT, Wi-Fi, and E-Rate Category 2 guidance for Wisconsin public libraries.", "/industries/libraries"),
  },

  "/industries/healthcare": {
    title: "Healthcare IT & HIPAA Network Services | Wisconsin",
    description:
      "HIPAA-aligned networks, clinical Wi-Fi, EHR infrastructure, and zero-trust security for Wisconsin healthcare practices, clinics, and specialty providers.",
    jsonLd: serviceSchema("Healthcare IT Services", "HIPAA-aligned IT, networking, and security for Wisconsin healthcare organizations.", "/industries/healthcare"),
  },

  "/industries/manufacturing": {
    title: "Manufacturing IT & OT Network Security | Wisconsin",
    description:
      "OT/IT segmentation, plant-floor Wi-Fi, ERP infrastructure, and cybersecurity for Wisconsin manufacturers — built by senior engineers who understand the floor.",
    jsonLd: serviceSchema("Manufacturing IT Services", "OT/IT network design, cybersecurity, and infrastructure for Wisconsin manufacturers.", "/industries/manufacturing"),
  },

  "/industries/retail": {
    title: "Retail IT, POS & Wi-Fi Services in Wisconsin",
    description:
      "POS networks, guest Wi-Fi, PCI-aligned security, and multi-location IT support for Wisconsin retailers and franchise operators.",
    jsonLd: serviceSchema("Retail IT Services", "POS, Wi-Fi, and cybersecurity for Wisconsin retail and franchise operators.", "/industries/retail"),
  },

  "/industries/hospitality": {
    title: "Hospitality IT, Wi-Fi & PMS Networks | Wisconsin",
    description:
      "Guest Wi-Fi, PMS/POS networks, IPTV, and managed IT for Wisconsin hotels, restaurants, and venues — designed for uptime and a great guest experience.",
    jsonLd: serviceSchema("Hospitality IT Services", "Guest Wi-Fi, PMS networks, and managed IT for Wisconsin hospitality operators.", "/industries/hospitality"),
  },

  "/industries/corporate": {
    title: "Corporate Office IT Services in Wisconsin",
    description:
      "Managed IT, hybrid-work infrastructure, security, and cloud services for Wisconsin corporate offices and multi-site businesses.",
    jsonLd: serviceSchema("Corporate IT Services", "Managed IT, security, and cloud services for Wisconsin corporate offices.", "/industries/corporate"),
  },

  "/industries/custom": {
    title: "Custom IT Solutions for Wisconsin Businesses",
    description:
      "Tailored IT design, integration, and managed services for Wisconsin organizations with non-standard environments — from labs to mixed-use facilities.",
    jsonLd: serviceSchema("Custom IT Solutions", "Custom-designed IT, network, and security solutions for Wisconsin organizations.", "/industries/custom"),
  },

  "/industries/government": {
    title: "Government & Municipal IT Services | Wisconsin",
    description:
      "Secure networks, CJIS-aligned infrastructure, and managed IT for Wisconsin municipalities, public agencies, and government offices.",
    jsonLd: serviceSchema("Government IT Services", "Managed IT, security, and network services for Wisconsin government and municipal agencies.", "/industries/government"),
  },

  "/industries/non-profit": {
    title: "Nonprofit IT Services & Cybersecurity | Wisconsin",
    description:
      "Affordable managed IT, cybersecurity, and cloud services for Wisconsin nonprofits — including TechSoup eligibility guidance and donor-data protection.",
    jsonLd: serviceSchema("Nonprofit IT Services", "Managed IT and cybersecurity for Wisconsin nonprofits.", "/industries/non-profit"),
  },

  "/industries/legal": {
    title: "Law Firm IT & Cybersecurity Services in Wisconsin",
    description:
      "Confidentiality-focused IT, document management, secure email, and cybersecurity for Wisconsin law firms and legal practices.",
    jsonLd: serviceSchema("Legal IT Services", "Managed IT, document management, and cybersecurity for Wisconsin law firms.", "/industries/legal"),
  },

  "/industries/financial-services": {
    title: "Financial Services IT & Compliance | Wisconsin",
    description:
      "GLBA- and SEC-aware IT, secure networks, and cybersecurity for Wisconsin financial advisors, RIAs, credit unions, and accounting firms.",
    jsonLd: serviceSchema("Financial Services IT", "Compliance-aware IT and cybersecurity for Wisconsin financial firms.", "/industries/financial-services"),
  },

  "/industries/real-estate": {
    title: "Real Estate IT, Wi-Fi & VoIP Services | Wisconsin",
    description:
      "Multi-office IT, agent productivity, VoIP, and secure document workflows for Wisconsin real estate brokerages and property management firms.",
    jsonLd: serviceSchema("Real Estate IT Services", "Managed IT, VoIP, and secure document workflows for Wisconsin real estate firms.", "/industries/real-estate"),
  },

  "/services/access-control": {
    title: "Access Control & Security Cameras | Milwaukee, WI",
    description:
      "Enterprise access control, badge systems, and IP surveillance for Milwaukee and Wisconsin businesses, schools, and government facilities.",
    jsonLd: serviceSchema("Access Control & Surveillance", "Enterprise access control and IP camera systems for Wisconsin organizations.", "/services/access-control"),
  },

  "/services/hardware-software": {
    title: "Business Hardware & Software Procurement | Wisconsin",
    description:
      "Right-sized hardware and software procurement, deployment, and lifecycle management from authorized partners — for Milwaukee and Wisconsin businesses.",
    jsonLd: serviceSchema("Hardware & Software Procurement", "Hardware and software procurement and lifecycle management for Wisconsin organizations.", "/services/hardware-software"),
  },

  "/services/voice-services": {
    title: "Business VoIP & Voice Services in Wisconsin",
    description:
      "Cloud VoIP, SIP trunking, contact center, and unified communications for Wisconsin businesses — designed and supported by senior network engineers.",
    jsonLd: serviceSchema("Voice & VoIP Services", "Cloud VoIP, SIP trunking, and unified communications for Wisconsin businesses.", "/services/voice-services"),
  },

  "/services/it-audits": {
    title: "IT Audits & Network Assessments | Milwaukee, WI",
    description:
      "Independent IT, security, and network audits with prioritized remediation roadmaps for Milwaukee and Wisconsin businesses, schools, and libraries.",
    jsonLd: serviceSchema("IT Audits & Assessments", "Independent IT and security audits for Wisconsin organizations.", "/services/it-audits"),
  },

  "/services/cloud-migrations": {
    title: "Cloud Migration Services | AWS, Azure, M365 in Wisconsin",
    description:
      "Plan and execute zero-downtime cloud migrations to AWS, Azure, Google Cloud, and Microsoft 365 for Wisconsin businesses, schools, and nonprofits.",
    jsonLd: serviceSchema("Cloud Migration Services", "AWS, Azure, GCP, and Microsoft 365 migrations for Wisconsin organizations.", "/services/cloud-migrations"),
  },

  "/services/wireless-networks": {
    title: "Business Wi-Fi & Wireless Network Design | Wisconsin",
    description:
      "WiFi 6/6E design, structured cabling, and high-density wireless networks engineered to TIA/EIA standards for Wisconsin schools, libraries, and businesses.",
    jsonLd: serviceSchema("Wireless Network Design", "WiFi 6/6E design and structured cabling for Wisconsin organizations.", "/services/wireless-networks"),
  },

  "/services/business-continuity": {
    title: "Backup, DR & Business Continuity | Wisconsin IT",
    description:
      "Backup, disaster recovery, and business continuity for Wisconsin organizations — immutable snapshots, geo-redundant storage, and tested failover.",
    jsonLd: serviceSchema("Business Continuity & Disaster Recovery", "Backup, DR, and continuity for Wisconsin organizations.", "/services/business-continuity"),
  },

  "/services/e-rate": {
    title: "E-Rate Services for Wisconsin Schools & Libraries",
    description:
      "Expert E-Rate guidance for Wisconsin schools and libraries — Form 470 strategy, vendor evaluation, Category 2 budget planning, and project delivery.",
    jsonLd: serviceSchema("E-Rate Services", "Expert E-Rate guidance for Wisconsin schools and libraries.", "/services/e-rate"),
  },

  "/marketing/ads": {
    title: "Ad Campaigns | Modern Edge Technology",
    description: "Featured ad creative and campaigns from Modern Edge Technology.",
    robots: "noindex,follow",
  },
  "/marketing/emails": {
    title: "Email Campaigns | Modern Edge Technology",
    description: "Featured email campaigns from Modern Edge Technology.",
    robots: "noindex,follow",
  },
  "/marketing/ebook": {
    title: "Free IT Ebook | Modern Edge Technology",
    description:
      "Download Modern Edge Technology's free guide for Wisconsin IT decision-makers, covering managed IT, cybersecurity, and infrastructure planning.",
  },
  "/marketing/library-whitepaper": {
    title: "Wisconsin Library E-Rate Whitepaper | Modern Edge",
    description:
      "Download our analysis of $28M in unused E-Rate Category 2 funding across Wisconsin public libraries — and how to capture your library's share.",
  },

  "/unsubscribe": {
    title: "Unsubscribe | Modern Edge Technology",
    description: "Manage your email subscription preferences for Modern Edge Technology.",
    robots: "noindex,nofollow",
  },
};

export const NOT_FOUND_SEO: StaticSeo = {
  title: "Page Not Found | Modern Edge Technology",
  description: "The page you are looking for could not be found.",
  robots: "noindex,follow",
};