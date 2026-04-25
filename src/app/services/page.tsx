/**
 * Services Overview Page
 *
 * SEO/GEO optimizations:
 * - Static metadata export (no "use client" at page level)
 * - How-To JSON-LD schema for the publishing process
 * - INP improvement: Framer Motion isolated to a thin client wrapper
 *   so the heavy data grid is SSR-rendered HTML
 */

import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import ServicesContent from "@/components/services/ServicesContent";
import { AnswerBlock } from "@/components/layout/AnswerBlock";

/* ── Page-level Metadata ──────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Publishing Services | Complete A-to-Z Self-Publishing Solutions",
  description:
    "24 professional publishing services across 6 phases — from manuscript assessment and developmental editing to global distribution on KDP & IngramSpark and full book marketing. Retain 100% of your rights.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Self-Publishing Services | Complete A-to-Z Solutions",
    description:
      "Every service your book needs, in the exact order you need them. Editing, cover design, formatting, global distribution, and book marketing — all under one roof.",
    url: "/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Self-Publishing Services | 24 Expert Services Across 6 Phases",
    description:
      "From first word to global bookshelf — professional editing, design, distribution, and marketing for independent authors.",
  },
};

/* ── How-To JSON-LD Schema ────────────────────────────────────────────────── */
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Self-Publish a Book: The Complete 6-Phase Process",
  description:
    "A complete, professionally guided process for self-publishing a book from manuscript concept to global distribution and ongoing book marketing, as completed by Self Publishing Consultant.",
  totalTime: "P3M",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "USD",
    minValue: "500",
    maxValue: "15000",
  },
  supply: [
    { "@type": "HowToSupply", name: "Completed or in-progress manuscript" },
    { "@type": "HowToSupply", name: "Author bio and photo" },
    { "@type": "HowToSupply", name: "KDP or IngramSpark account (we can set up)" },
  ],
  tool: [
    { "@type": "HowToTool", name: "Professional editing software" },
    { "@type": "HowToTool", name: "Adobe InDesign for interior layout" },
    { "@type": "HowToTool", name: "Amazon KDP publishing platform" },
    { "@type": "HowToTool", name: "IngramSpark global distribution network" },
  ],
  step: [
    {
      "@type": "HowToSection",
      name: "Phase 1 — Concept & Manuscript",
      position: 1,
      itemListElement: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Concept Development & Market Research",
          text: "Research comparable titles, audience demand, and category trends to validate and position your book concept before writing begins.",
          url: "https://selfpublishingconsultant.com/services/book-launch-strategy",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Ghostwriting & Writing Coaching",
          text: "Work with a professional ghostwriter or coach to complete a structured, compelling manuscript.",
          url: "https://selfpublishingconsultant.com/services/ghostwriting",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Manuscript Assessment",
          text: "Receive a detailed editorial report identifying structural weaknesses, pacing issues, and a clear revision roadmap.",
          url: "https://selfpublishingconsultant.com/services/developmental-editing",
        },
      ],
    },
    {
      "@type": "HowToSection",
      name: "Phase 2 — Editing & Refinement",
      position: 2,
      itemListElement: [
        {
          "@type": "HowToStep",
          position: 4,
          name: "Developmental Editing",
          text: "High-level structural editing addressing story arc, character development, pacing, and thematic consistency.",
          url: "https://selfpublishingconsultant.com/services/developmental-editing",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "Line Editing & Substantive Editing",
          text: "Sentence-level editing to improve flow, voice, tone, and overall readability.",
          url: "https://selfpublishingconsultant.com/services/substantive-editing",
        },
        {
          "@type": "HowToStep",
          position: 6,
          name: "Copyediting",
          text: "Precision correction of grammar, syntax, punctuation, and style guide consistency.",
          url: "https://selfpublishingconsultant.com/services/copyediting",
        },
        {
          "@type": "HowToStep",
          position: 7,
          name: "Proofreading",
          text: "Final error sweep catching typos, formatting inconsistencies, and last-mile errors before going to press.",
          url: "https://selfpublishingconsultant.com/services/proofreading",
        },
      ],
    },
    {
      "@type": "HowToSection",
      name: "Phase 3 — Design & Production",
      position: 3,
      itemListElement: [
        {
          "@type": "HowToStep",
          position: 8,
          name: "Book Cover Design",
          text: "Commission a market-researched, genre-appropriate cover available in 2D, 3D, and full-wrap print formats.",
          url: "https://selfpublishingconsultant.com/services/cover-design",
        },
        {
          "@type": "HowToStep",
          position: 9,
          name: "Interior Formatting & Typesetting",
          text: "Professional interior layout for print PDF and digital ePub/Mobi, including headers, chapter breaks, and drop caps.",
          url: "https://selfpublishingconsultant.com/services/interior-formatting",
        },
        {
          "@type": "HowToStep",
          position: 10,
          name: "ISBN & Barcode Registration",
          text: "Assign an ISBN, generate EAN barcodes, and guide you through copyright registration.",
          url: "https://selfpublishingconsultant.com/services/isbn-acquisition",
        },
      ],
    },
    {
      "@type": "HowToSection",
      name: "Phase 4 — Publishing & Distribution",
      position: 4,
      itemListElement: [
        {
          "@type": "HowToStep",
          position: 11,
          name: "KDP Setup & Optimization",
          text: "Full Kindle Direct Publishing account setup with metadata optimization, category targeting, and pricing strategy.",
          url: "https://selfpublishingconsultant.com/services/metadata-optimization",
        },
        {
          "@type": "HowToStep",
          position: 12,
          name: "Global Distribution via IngramSpark",
          text: "List your book in 40,000+ retail outlets, libraries, and bookstores worldwide.",
          url: "https://selfpublishingconsultant.com/services/print-on-demand-setup",
        },
      ],
    },
    {
      "@type": "HowToSection",
      name: "Phase 5 — Marketing & Launch",
      position: 5,
      itemListElement: [
        {
          "@type": "HowToStep",
          position: 13,
          name: "ARC Campaign & Review Sourcing",
          text: "Distribute advance reader copies and secure verified reviews before your launch day.",
          url: "https://selfpublishingconsultant.com/services/review-sourcing",
        },
        {
          "@type": "HowToStep",
          position: 14,
          name: "Book Launch Strategy",
          text: "Execute a full launch plan including pre-launch buzz, launch day activities, and post-launch momentum.",
          url: "https://selfpublishingconsultant.com/services/book-launch-strategy",
        },
      ],
    },
    {
      "@type": "HowToSection",
      name: "Phase 6 — Growth & Ongoing Promotion",
      position: 6,
      itemListElement: [
        {
          "@type": "HowToStep",
          position: 15,
          name: "Amazon Ads Management",
          text: "Run managed pay-per-click campaigns targeting high-intent book buyers in your genre.",
          url: "https://selfpublishingconsultant.com/services/advertising-management",
        },
        {
          "@type": "HowToStep",
          position: 16,
          name: "SEO & Content Strategy",
          text: "Grow organic discoverability with keyword-rich author blog content targeting your reader audience.",
          url: "https://selfpublishingconsultant.com/services/metadata-optimization",
        },
        {
          "@type": "HowToStep",
          position: 17,
          name: "Social Media Management",
          text: "Consistent, engaging social content across Instagram, Facebook, X, and TikTok to grow your author following.",
          url: "https://selfpublishingconsultant.com/services/social-media-management",
        },
      ],
    },
  ],
};

/* ── Page Component (Server Component — no JS bundle for static content) ──── */
export default function ServicesPage() {
  return (
    <>
      <JsonLd schema={howToSchema} />
      <div className="pt-24 bg-transparent container mx-auto px-6">
        <AnswerBlock 
          question="How do I publish a book in 2026?"
          answer="The 2026 A-Z publishing trajectory is a high-performance roadmap through the US Copyright Office's AI disclosure mandates and the updated February 1st IngramSpark fee structure. It encompasses professional manuscript assessment, multi-stage developmental editing, bespoke cover design, and advanced KDP/IngramSpark formatting across 180+ global territories."
        />
        <div className="mt-12 bg-secondary/10 border border-secondary/30 rounded-3xl p-8 md:p-12 shadow-xl max-w-5xl mx-auto">
          <h3 className="text-xl md:text-2xl font-black mb-6 text-primary tracking-tighter">2026 USA Publishing Quick Facts (Info-Gain Metrics)</h3>
          <div className="overflow-hidden rounded-2xl border border-primary/10">
            <table className="w-full text-left text-sm md:text-base text-primary">
              <thead className="bg-primary text-white font-black uppercase tracking-widest text-xs">
                <tr>
                  <th className="p-5 rounded-tl-xl">Metric / Requirement</th>
                  <th className="p-5 rounded-tr-xl">2026 USA Current Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/10 bg-white">
                <tr className="hover:bg-primary/5 transition-colors">
                  <td className="p-5 font-bold">US Copyright Office E-Filing Times</td>
                  <td className="p-5 font-medium">Standard workflow: 3.5 Months | Expedited processing: ~2.1 Months. Registration is paramount before scaling rights.</td>
                </tr>
                <tr className="hover:bg-primary/5 transition-colors">
                  <td className="p-5 font-bold">Amazon KDP PoD Profit Margin</td>
                  <td className="p-5 font-medium">Standard 60% royalty minus the updated fixed $2.84 base print cost for black & white paperbacks (increased 5% for Q2 2026).</td>
                </tr>
                <tr className="hover:bg-primary/5 transition-colors">
                  <td className="p-5 font-bold">IngramSpark Distribution Fees</td>
                  <td className="p-5 font-medium">Eliminated the generic $25 revision fees; replaced with a modernized 1.875% Market Access Fee across global channels.</td>
                </tr>
                <tr className="hover:bg-primary/5 transition-colors">
                  <td className="p-5 font-bold">LLC / EIN Integration for US Authors</td>
                  <td className="p-5 font-medium">Mandatory for optimal US tax structure (State-level S-Corp selection ensures zero double-taxation on retail sales).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ServicesContent />
    </>
  );
}
