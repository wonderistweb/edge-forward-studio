import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, ThumbsUp, MessageSquare, Share2, MoreHorizontal, Globe, Heart, Send, Bookmark, MapPin, Filter } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingMarketingMenu from "@/components/FloatingMarketingMenu";
import markPhoto from "@/assets/mark-duerwachter.jpg";

/* ── Google Search Ad ── */
const GoogleSearchAd = ({ headline, desc1, desc2, url, sitelinks }: {
  headline: string; desc1: string; desc2: string; url: string;
  sitelinks: { title: string; desc: string }[];
}) => (
  <div className="bg-white rounded-lg p-5 text-left max-w-2xl" style={{ fontFamily: "Arial, sans-serif" }}>
    {/* URL line */}
    <div className="flex items-center gap-2 mb-1">
      <div className="w-7 h-7 rounded-full bg-purple-100 flex items-center justify-center">
        <span className="text-purple-700 text-xs font-bold">M</span>
      </div>
      <div>
        <div className="text-sm text-gray-800">Modern Edge Technology</div>
        <div className="text-xs text-gray-600">{url}</div>
      </div>
      <MoreHorizontal size={16} className="text-gray-400 ml-auto" />
    </div>
    {/* Headline */}
    <h3 className="text-xl text-blue-800 hover:underline cursor-pointer leading-snug mt-2">{headline}</h3>
    {/* Description */}
    <p className="text-sm text-gray-600 mt-1 leading-relaxed">{desc1}</p>
    <p className="text-sm text-gray-600 leading-relaxed">{desc2}</p>
    {/* Sitelinks */}
    <div className="grid grid-cols-2 gap-x-6 gap-y-3 mt-4 pt-3 border-t border-gray-100">
      {sitelinks.map((sl) => (
        <div key={sl.title}>
          <div className="text-blue-800 text-sm hover:underline cursor-pointer">{sl.title}</div>
          <div className="text-xs text-gray-500">{sl.desc}</div>
        </div>
      ))}
    </div>
    <div className="text-[10px] text-gray-400 mt-3 uppercase tracking-wider">Sponsored</div>
  </div>
);

/* ── LinkedIn Post ── */
const LinkedInPost = ({ name, role, body, likes, comments }: {
  name: string; role: string; body: string; likes: number; comments: number;
}) => (
  <div className="bg-white rounded-lg overflow-hidden max-w-xl text-left" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
    {/* Header */}
    <div className="px-4 pt-4 pb-3">
      <div className="flex items-start gap-3">
        <img src={markPhoto} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div className="flex-1">
          <div className="text-sm font-semibold text-gray-900">{name}</div>
          <div className="text-xs text-gray-500">{role}</div>
          <div className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
            3d · <Globe size={10} />
          </div>
        </div>
        <span className="text-blue-600 text-sm font-semibold">+ Follow</span>
      </div>
    </div>
    {/* Body */}
    <div className="px-4 pb-3">
      <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-line">{body}</p>
    </div>
    {/* Engagement bar */}
    <div className="px-4 py-2 flex items-center gap-1 text-xs text-gray-500 border-t border-gray-100">
      <span className="inline-flex items-center gap-0.5">
        <span className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center"><ThumbsUp size={9} className="text-white" /></span>
        <span className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center -ml-1"><Heart size={9} className="text-white" /></span>
      </span>
      <span className="ml-1">{likes.toLocaleString()}</span>
      <span className="ml-auto">{comments} comments</span>
    </div>
    <div className="flex border-t border-gray-100">
      {[
        { icon: ThumbsUp, label: "Like" },
        { icon: MessageSquare, label: "Comment" },
        { icon: Share2, label: "Repost" },
        { icon: Send, label: "Send" },
      ].map((action) => (
        <button key={action.label} className="flex-1 flex items-center justify-center gap-2 py-3 text-gray-500 hover:bg-gray-50 text-xs font-semibold">
          <action.icon size={16} />
          {action.label}
        </button>
      ))}
    </div>
  </div>
);

/* ── Facebook/Instagram Ad ── */
const FacebookAd = ({ pageName, body, headline, cta, linkDesc }: {
  pageName: string; body: string; headline: string; cta: string; linkDesc: string;
}) => (
  <div className="bg-white rounded-lg overflow-hidden max-w-lg text-left" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
    {/* Page header */}
    <div className="flex items-center gap-3 px-4 pt-4 pb-3">
      <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
        <span className="text-white text-sm font-bold">ME</span>
      </div>
      <div className="flex-1">
        <div className="text-sm font-semibold text-gray-900">{pageName}</div>
        <div className="text-xs text-gray-500">Sponsored · <Globe size={10} className="inline" /></div>
      </div>
      <MoreHorizontal size={18} className="text-gray-400" />
    </div>
    {/* Text */}
    <div className="px-4 pb-3">
      <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-line">{body}</p>
    </div>
    {/* Image area */}
    <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 px-8 py-12 text-center">
      <div className="text-3xl font-bold text-white leading-tight mb-3">{headline}</div>
      <div className="text-purple-200 text-sm">{linkDesc}</div>
    </div>
    {/* Link preview */}
    <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-t border-gray-200">
      <div>
        <div className="text-xs text-gray-500 uppercase">modernedgetech.net</div>
        <div className="text-sm font-semibold text-gray-800">{headline}</div>
      </div>
      <button className="bg-gray-200 text-gray-800 text-sm font-semibold px-4 py-2 rounded">{cta}</button>
    </div>
    {/* Reactions */}
    <div className="px-4 py-2 flex items-center text-xs text-gray-500 border-t border-gray-100">
      <span className="inline-flex items-center gap-0.5">
        <span className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center"><ThumbsUp size={9} className="text-white" /></span>
        <span className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center -ml-1"><Heart size={9} className="text-white" /></span>
      </span>
      <span className="ml-1">847</span>
      <span className="ml-auto">42 comments · 18 shares</span>
    </div>
    <div className="flex border-t border-gray-100">
      {["Like", "Comment", "Share"].map((label) => (
        <button key={label} className="flex-1 py-3 text-gray-500 hover:bg-gray-50 text-sm font-semibold">{label}</button>
      ))}
    </div>
  </div>
);

/* ── Google Display Banner ── */
const GoogleDisplayAd = ({ headline, body, cta }: {
  headline: string; body: string; cta: string;
}) => (
  <div className="max-w-2xl">
    {/* 728x90 leaderboard */}
    <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 rounded overflow-hidden flex items-center justify-between px-6 py-4 h-[90px] border border-purple-700/30">
      <div className="flex-1">
        <div className="text-white font-bold text-lg leading-tight">{headline}</div>
        <div className="text-purple-200 text-xs mt-1">{body}</div>
      </div>
      <div className="shrink-0 ml-4">
        <button className="bg-white text-purple-900 text-xs font-bold px-4 py-2 rounded hover:bg-purple-100 transition-colors">{cta}</button>
      </div>
      <div className="absolute top-1 right-1">
        <span className="text-purple-400 text-[8px]">Ad</span>
      </div>
    </div>
    {/* 300x250 medium rectangle below */}
    <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 rounded overflow-hidden mt-4 p-6 w-[300px] h-[250px] flex flex-col justify-between border border-purple-700/30 relative">
      <div>
        <div className="text-purple-300 text-[9px] uppercase tracking-wider font-semibold mb-2">Modern Edge Technology</div>
        <div className="text-white font-bold text-xl leading-tight">{headline}</div>
        <div className="text-purple-200 text-xs mt-2 leading-relaxed">{body}</div>
      </div>
      <button className="bg-white text-purple-900 text-xs font-bold px-5 py-2.5 rounded self-start hover:bg-purple-100 transition-colors">{cta}</button>
      <span className="absolute top-2 right-2 text-purple-400 text-[8px]">Ad</span>
    </div>
  </div>
);

/* ── Metrics Bar ── */
const MetricsBar = ({ metrics }: { metrics: { impressions: string; ctr: string; cpc: string } }) => (
  <div className="grid grid-cols-3 gap-4 mt-4">
    {[
      { label: "Impressions", value: metrics.impressions },
      { label: "CTR", value: metrics.ctr },
      { label: "CPC", value: metrics.cpc },
    ].map((m) => (
      <div key={m.label} className="bg-card border border-border p-3 text-center">
        <div className="text-xs text-muted-foreground uppercase tracking-wider">{m.label}</div>
        <div className="text-sm font-mono-display font-semibold text-primary mt-1">{m.value}</div>
      </div>
    ))}
  </div>
);

const adCampaigns = [
  { id: "all", label: "All Campaigns" },
  { id: "general", label: "General / MSP" },
  { id: "erate", label: "E-Rate" },
  { id: "cybersecurity", label: "Cybersecurity" },
  { id: "hospitality", label: "Hospitality" },
];

/* ── Page ── */
const AdsPage = () => {
  const [activeCampaign, setActiveCampaign] = useState("all");

  const show = (campaign: string) => activeCampaign === "all" || activeCampaign === campaign;

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
            <h1 className="text-4xl md:text-5xl font-medium uppercase mt-3">Ad Campaign Examples</h1>
            <p className="text-muted-foreground mt-4 max-w-2xl text-lg leading-relaxed">
              Platform-accurate mockups across Google, LinkedIn, Facebook, and display networks — targeting key verticals with data-driven messaging.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Campaign Toggles */}
      <section className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center gap-3 flex-wrap">
            <Filter size={14} className="text-muted-foreground" />
            {adCampaigns.map((c) => (
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
        <div className="max-w-5xl mx-auto px-6 space-y-20">

          {/* ── Google Search: Managed IT ── */}
          {show("general") && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-2">
              <Search size={18} className="text-primary" />
              <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Google Search Ad</span>
            </div>
            <h2 className="text-xl font-medium uppercase mb-1">Managed IT — Decision Makers</h2>
            <p className="text-sm text-muted-foreground mb-6">Targeting: "managed IT services near me", "IT support for business", "MSP provider"</p>

            {/* Browser chrome mockup */}
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-2xl border border-gray-300">
              <div className="bg-gray-200 px-4 py-2 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 bg-white rounded-full px-4 py-1 text-xs text-gray-500 flex items-center gap-2">
                  <Search size={12} />
                  managed IT services near me
                </div>
              </div>
              <div className="p-6">
                <GoogleSearchAd
                  headline="Managed IT Services — 99.99% Uptime Guaranteed | Modern Edge Technology"
                  desc1="Stop paying for break-fix IT. Our proactive managed services cut your IT costs by 50-75% while delivering enterprise-grade reliability."
                  desc2="Free infrastructure audit. No long-term contracts. 24/7 monitoring & support."
                  url="https://modernedgetech.net/managed-it"
                  sitelinks={[
                    { title: "Free IT Assessment", desc: "Get a no-obligation audit of your infrastructure" },
                    { title: "Cybersecurity Services", desc: "24/7 SOC monitoring & threat response" },
                    { title: "Cloud Solutions", desc: "Azure, AWS, hybrid cloud migration" },
                    { title: "Client Reviews", desc: "See why 500+ businesses trust us" },
                  ]}
                />
              </div>
            </div>
            <MetricsBar metrics={{ impressions: "45K/mo", ctr: "4.8%", cpc: "$12.50" }} />
          </motion.div>
          )}

          {/* ── Google Search: E-Rate ── */}
          {show("erate") && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-2">
              <Search size={18} className="text-primary" />
              <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Google Search Ad</span>
            </div>
            <h2 className="text-xl font-medium uppercase mb-1">E-Rate — School Administrators</h2>
            <p className="text-sm text-muted-foreground mb-6">Targeting: "E-Rate funding", "school WiFi upgrade", "E-Rate consultant"</p>

            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-2xl border border-gray-300">
              <div className="bg-gray-200 px-4 py-2 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 bg-white rounded-full px-4 py-1 text-xs text-gray-500 flex items-center gap-2">
                  <Search size={12} />
                  E-Rate funding for schools
                </div>
              </div>
              <div className="p-6">
                <GoogleSearchAd
                  headline="E-Rate Funding — Up to 90% Off School Technology | Free Eligibility Check"
                  desc1="Don't leave federal money on the table. We've secured $12M+ in E-Rate funding for K-12 schools and libraries."
                  desc2="Free eligibility check — most districts qualify for 60-90% discounts. We handle the entire application."
                  url="https://modernedgetech.net/e-rate"
                  sitelinks={[
                    { title: "Check Eligibility", desc: "Free E-Rate eligibility consultation" },
                    { title: "What's Covered", desc: "WiFi, switches, cabling, internet" },
                    { title: "Application Support", desc: "We manage Forms 470, 471 & 486" },
                    { title: "Case Studies", desc: "$400K saved for one district" },
                  ]}
                />
              </div>
            </div>
            <MetricsBar metrics={{ impressions: "18K/mo", ctr: "5.2%", cpc: "$8.75" }} />
          </motion.div>
          )}

          {/* ── LinkedIn: Cost of IT ── */}
          {show("general") && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-2">
              <svg className="text-primary" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              <span className="text-xs font-mono-display text-primary uppercase tracking-wider">LinkedIn Post</span>
            </div>
            <h2 className="text-xl font-medium uppercase mb-1">Thought Leadership — C-Suite & IT Directors</h2>
            <p className="text-sm text-muted-foreground mb-6">Organic post from Mark Duerwachter's profile, boosted with $50/day spend</p>

            <div className="flex justify-center">
              <LinkedInPost
                name="Mark Duerwachter"
                role="VP of Business Operations at Modern Edge Technology"
                body={`Your IT provider is costing you more than you think.

The average SMB loses $268K-$647K annually on reactive IT. Our managed services model delivers enterprise-grade infrastructure at 50-75% less than break-fix.

Here's what changes when you switch to proactive IT:

✅ 99.99% uptime (vs. 12-16 hours of downtime/year)
✅ <15 minute response times
✅ 24/7 SOC monitoring
✅ Predictable monthly costs
✅ Zero surprise repair bills

We've helped 500+ organizations make the switch.

Ready to see the numbers for your business? Link in comments 👇

#ManagedIT #ITServices #BusinessTechnology #CyberSecurity`}
                likes={1247}
                comments={86}
              />
            </div>
            <MetricsBar metrics={{ impressions: "85K/mo", ctr: "1.8%", cpc: "$6.20" }} />
          </motion.div>
          )}

          {/* ── LinkedIn: Hospitality ── */}
          {show("hospitality") && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-2">
              <svg className="text-primary" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              <span className="text-xs font-mono-display text-primary uppercase tracking-wider">LinkedIn Post</span>
            </div>
            <h2 className="text-xl font-medium uppercase mb-1">Hospitality — Hotel & Property Managers</h2>
            <p className="text-sm text-muted-foreground mb-6">Targeted sponsored content to hospitality industry professionals</p>

            <div className="flex justify-center">
              <LinkedInPost
                name="Mark Duerwachter"
                role="VP of Business Operations at Modern Edge Technology"
                body={`Guest WiFi complaints are killing your reviews. 🏨

68% of hotel guests say WiFi quality directly impacts their review score. Yet most properties are running consumer-grade networks designed for a fraction of the device density they're experiencing.

We design hospitality-grade wireless networks that handle:

🔹 500+ simultaneous devices per floor
🔹 Branded captive portals with analytics
🔹 PCI-compliant network segmentation
🔹 Seamless roaming across the property

One property saw their WiFi complaint rate drop from 23% to under 1% within 30 days of our deployment.

What's your property's WiFi complaint rate? DM me for a free wireless assessment.

#Hospitality #HotelTech #WiFi #GuestExperience`}
                likes={634}
                comments={47}
              />
            </div>
            <MetricsBar metrics={{ impressions: "32K/mo", ctr: "2.1%", cpc: "$4.80" }} />
          </motion.div>
          )}

          {/* ── Facebook/Instagram: Cybersecurity ── */}
          {show("cybersecurity") && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-2">
              <svg className="text-primary" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Facebook / Instagram Ad</span>
            </div>
            <h2 className="text-xl font-medium uppercase mb-1">Cybersecurity — Small Business Owners</h2>
            <p className="text-sm text-muted-foreground mb-6">Targeting: Business owners, 25-65, interests in cybersecurity, IT, small business</p>

            <div className="flex justify-center">
              <FacebookAd
                pageName="Modern Edge Technology"
                body={"67% of ransomware attacks target businesses with fewer than 100 employees.\n\nAverage cost? $1.85M.\nAverage recovery time? 22 days.\n60% never reopen.\n\nFor less than the cost of a part-time employee, you can have 24/7 enterprise-grade cybersecurity monitoring, endpoint protection, and incident response.\n\nDon't become a statistic. 🛡️"}
                headline="Cybersecurity Isn't Optional Anymore"
                cta="Learn More"
                linkDesc="Free security audit for businesses under 100 employees"
              />
            </div>
            <MetricsBar metrics={{ impressions: "120K/mo", ctr: "3.2%", cpc: "$2.15" }} />
          </motion.div>
          )}

          {/* ── Google Display ── */}
          {show("general") && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-2">
              <MapPin size={18} className="text-primary" />
              <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Google Display / Retargeting</span>
            </div>
            <h2 className="text-xl font-medium uppercase mb-1">Retargeting — Previous Site Visitors</h2>
            <p className="text-sm text-muted-foreground mb-6">728×90 leaderboard and 300×250 medium rectangle formats</p>

            <GoogleDisplayAd
              headline="Still Thinking About Your IT?"
              body="Your free infrastructure assessment is waiting. No obligation."
              cta="Schedule Now →"
            />
            <MetricsBar metrics={{ impressions: "200K/mo", ctr: "0.8%", cpc: "$1.50" }} />
          </motion.div>
          )}

          {/* ── E-Rate LinkedIn: Schools ── */}
          {show("erate") && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-2">
              <svg className="text-primary" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              <span className="text-xs font-mono-display text-primary uppercase tracking-wider">LinkedIn Sponsored</span>
            </div>
            <h2 className="text-xl font-medium uppercase mb-1">E-Rate Outreach — Superintendents & IT Directors</h2>
            <p className="text-sm text-muted-foreground mb-6">Targeting: Job titles — Superintendent, CTO, Technology Director, IT Director at K-12 schools & public libraries</p>

            <div className="flex justify-center">
              <LinkedInPost
                name="Mark Duerwachter"
                role="VP of Business Operations at Modern Edge Technology"
                body={`Your district is leaving money on the table. 💰

Every year, billions in E-Rate funding goes unclaimed. Schools and libraries that qualify for 60-90% discounts on WiFi, switches, cabling, and internet service simply... don't apply.

Here's what $167/student in Category 2 funding looks like:

📊 500 students = $83,500 in eligible equipment
📊 2,000 students = $334,000
📊 5,000 students = $835,000

That's 60-90% OFF enterprise-grade WiFi 6E, managed switches, structured cabling, and firewall systems.

We've secured $12M+ in E-Rate funding for districts just like yours. We handle:

✅ Free eligibility assessment
✅ Form 470, 471, and 486 filing
✅ Competitive bid management
✅ MIBS contract structuring
✅ Full compliance documentation

The Form 470 window is open NOW. Don't wait another year.

DM me or comment "ERATE" for a free eligibility check 👇

#ERate #EdTech #K12 #SchoolTechnology #WiFi #Libraries`}
                likes={892}
                comments={134}
              />
            </div>
            <MetricsBar metrics={{ impressions: "65K/mo", ctr: "3.4%", cpc: "$5.10" }} />
          </motion.div>
          )}

          {/* ── E-Rate Facebook: Libraries ── */}
          {show("erate") && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-2">
              <svg className="text-primary" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Facebook / Instagram Ad</span>
            </div>
            <h2 className="text-xl font-medium uppercase mb-1">E-Rate for Libraries — Library Directors & Board Members</h2>
            <p className="text-sm text-muted-foreground mb-6">Targeting: Library directors, board members, public library staff, interests in library technology & ALA</p>

            <div className="flex justify-center">
              <FacebookAd
                pageName="Modern Edge Technology"
                body={"Your library qualifies for up to 90% off WiFi, internet, and networking equipment through the federal E-Rate program.\n\nLibraries receive $2.39/sq ft in Category 2 funding — that's new access points, managed switches, cabling, and firewall systems at a fraction of the cost.\n\nMost libraries don't apply because the process seems complicated. We handle everything:\n\n📋 Free eligibility check\n📋 All USAC form filings\n📋 Vendor bidding management\n📋 Equipment deployment\n📋 Compliance documentation\n\nWe've helped 50+ libraries modernize their networks. Your patrons deserve reliable WiFi. 📚"}
                headline="Your Library Is Eligible for E-Rate Funding"
                cta="Check Eligibility"
                linkDesc="Free E-Rate assessment for public libraries — no obligation"
              />
            </div>
            <MetricsBar metrics={{ impressions: "40K/mo", ctr: "2.8%", cpc: "$3.40" }} />
          </motion.div>
          )}

          {/* ── E-Rate Google Search: Direct ── */}
          {show("erate") && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-2">
              <Search size={18} className="text-primary" />
              <span className="text-xs font-mono-display text-primary uppercase tracking-wider">Google Search Ad</span>
            </div>
            <h2 className="text-xl font-medium uppercase mb-1">E-Rate Direct Response — Active Searchers</h2>
            <p className="text-sm text-muted-foreground mb-6">Targeting: "E-Rate application help", "E-Rate consultant", "MIBS E-Rate", "school WiFi funding"</p>

            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-2xl border border-gray-300">
              <div className="bg-gray-200 px-4 py-2 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 bg-white rounded-full px-4 py-1 text-xs text-gray-500 flex items-center gap-2">
                  <Search size={12} />
                  E-Rate MIBS application help
                </div>
              </div>
              <div className="p-6">
                <GoogleSearchAd
                  headline="E-Rate MIBS Experts — $12M+ Secured | Free Eligibility Check"
                  desc1="Stop leaving federal dollars on the table. We manage the entire E-Rate lifecycle — Forms 470, 471, 486, PIA responses, and MIBS contract structuring."
                  desc2="98% approval rate. 150+ schools & libraries served. Category 1 & 2 specialists."
                  url="https://modernedgetech.net/e-rate"
                  sitelinks={[
                    { title: "Free Eligibility Check", desc: "Find out your discount rate in 24 hours" },
                    { title: "MIBS Contracts", desc: "Managed services bundled with E-Rate" },
                    { title: "Library E-Rate", desc: "$2.39/sq ft in Category 2 funding" },
                    { title: "WiFi 6E Deployments", desc: "Enterprise wireless for education" },
                  ]}
                />
              </div>
            </div>
            <MetricsBar metrics={{ impressions: "12K/mo", ctr: "6.1%", cpc: "$9.25" }} />
          </motion.div>
          )}

        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-medium uppercase">Want these campaigns running for your business?</h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm">These are sample creatives. We customize every campaign to your specific market, services, and growth goals.</p>
          <Button variant="hero" size="lg" className="mt-6" asChild>
            <Link to="/quote">Get Started</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdsPage;
