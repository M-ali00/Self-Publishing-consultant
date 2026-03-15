"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Lightbulb, PenLine, BookOpen, Scissors, Palette, Layout,
    FileText, Barcode, Globe, Megaphone, BarChart3,
    Headphones, Video, Mail, Search, Users, ArrowRight, CheckCircle2, ChevronRight, Wrench, ArrowUpRight
} from "lucide-react";
import Link from "next/link";

const phases = [
    {
        phase: "Phase 01",
        title: "Concept & Manuscript",
        color: "bg-violet-500/10 text-violet-600 border-violet-200",
        accentBg: "bg-violet-500",
        icon: Lightbulb,
        description: "Every publishing journey begins with your idea. Before a single word is edited, your manuscript needs to be structured, complete, and ready for professional handling.",
        steps: [
            {
                step: "01",
                icon: Lightbulb,
                slug: "book-launch-strategy",
                name: "Concept Development & Market Research",
                desc: "We research comparable titles, audience demand, and category trends to validate your book's concept and positioning before you write a single chapter.",
                deliverables: ["Comp title analysis", "Target reader persona", "Category & genre positioning"]
            },
            {
                step: "02",
                icon: PenLine,
                slug: "ghostwriting",
                name: "Ghostwriting & Writing Coaching",
                desc: "Whether you need a full ghostwriter or a coach to guide you through each chapter, we provide professional support to get your manuscript completed.",
                deliverables: ["Full manuscript ghostwriting", "Chapter-by-chapter coaching", "Outline & structure planning"]
            },
            {
                step: "03",
                icon: BookOpen,
                slug: "developmental-editing",
                name: "Manuscript Assessment",
                desc: "Before editing begins, a professional manuscript assessment identifies structural weaknesses, pacing issues, and areas for high-impact improvement.",
                deliverables: ["Detailed editorial report", "Structural feedback", "Revision roadmap"]
            }
        ]
    },
    {
        phase: "Phase 02",
        title: "Editing & Refinement",
        color: "bg-blue-500/10 text-blue-600 border-blue-200",
        accentBg: "bg-blue-500",
        icon: Scissors,
        description: "Great books are built in the editing room. Our multi-layered editing process ensures your manuscript is polished, precise, and ready for readers.",
        steps: [
            {
                step: "04",
                icon: Scissors,
                slug: "developmental-editing",
                name: "Developmental Editing",
                desc: "High-level editing addressing story structure, character arcs, plot consistency, pacing, and thematic depth. The most transformative stage of the editing process.",
                deliverables: ["Full story structure analysis", "Character arc review", "Plot hole identification"]
            },
            {
                step: "05",
                icon: FileText,
                slug: "substantive-editing",
                name: "Line Editing & Substantive Editing",
                desc: "Sentence-level editing improving flow, tone, voice, and style. We transform rough prose into compelling, reader-friendly writing.",
                deliverables: ["Paragraph-level rewrites", "Voice & tone consistency", "Scene-by-scene flow analysis"]
            },
            {
                step: "06",
                icon: CheckCircle2,
                slug: "copyediting",
                name: "Copyediting",
                desc: "Precision correction of grammar, syntax, punctuation, and consistency across the entire manuscript following house style guidelines.",
                deliverables: ["Grammar & syntax correction", "Style guide enforcement", "Consistency check"]
            },
            {
                step: "07",
                icon: Search,
                slug: "proofreading",
                name: "Proofreading",
                desc: "The final read-through catching any remaining typos, formatting gaps, widow/orphan lines, and last-mile errors before the book goes to press.",
                deliverables: ["Final error sweep", "Formatting verification", "Print-ready sign-off"]
            }
        ]
    },
    {
        phase: "Phase 03",
        title: "Design & Production",
        color: "bg-primary/10 text-primary border-primary/20",
        accentBg: "bg-primary",
        icon: Palette,
        description: "A book's design is its first handshake with a reader. Our design team creates covers that compel, interiors that breathe, and formats that sell.",
        steps: [
            {
                step: "08",
                icon: Palette,
                slug: "cover-design",
                name: "Book Cover Design",
                desc: "Market-researched, genre-appropriate cover design that competes with traditionally published titles. Available in 2D, 3D, and full-wrap formats.",
                deliverables: ["Front, back & spine design", "3D mockup render", "Print & digital versions"]
            },
            {
                step: "09",
                icon: Layout,
                slug: "interior-formatting",
                name: "Interior Formatting & Typesetting",
                desc: "Professional interior layout for print (PDF) and digital (ePub/Mobi) formats. We handle headers, footers, chapter breaks, drop caps, and all typographic details.",
                deliverables: ["Print-ready PDF", "ePub & Mobi files", "Custom chapter headers"]
            },
            {
                step: "10",
                icon: Barcode,
                slug: "isbn-acquisition",
                name: "ISBN, Barcode & Copyright Registration",
                desc: "We assign your book its unique International Standard Book Number, generate the retail barcode, and guide you through copyright registration.",
                deliverables: ["ISBN assignment (per edition)", "EAN barcode file", "Copyright filing guidance"]
            },
            {
                step: "11",
                icon: Headphones,
                slug: "audiobook-production",
                name: "Audiobook Production",
                desc: "Professional narration recording, audio editing, mastering, and delivery in ACX-compliant formats for distribution on Audible, iTunes, and beyond.",
                deliverables: ["Studio-quality narration", "ACX-compliant masters", "Audible & iTunes delivery"]
            }
        ]
    },
    {
        phase: "Phase 04",
        title: "Publishing & Distribution",
        color: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
        accentBg: "bg-emerald-500",
        icon: Globe,
        description: "With your book polished and produced, it's time to publish it to the world. We handle the entire upload, distribution, and platform setup process.",
        steps: [
            {
                step: "12",
                icon: BookOpen,
                slug: "metadata-optimization",
                name: "Kindle Direct Publishing (KDP) Setup",
                desc: "Full KDP account setup and book upload including metadata optimization, category selection, keyword targeting, and pricing strategy to maximize visibility.",
                deliverables: ["KDP account & book setup", "Keyword & category strategy", "Pricing optimization"]
            },
            {
                step: "13",
                icon: Globe,
                slug: "print-on-demand-setup",
                name: "Global Distribution via IngramSpark",
                desc: "Get your book listed in 40,000+ retail outlets, libraries, and bookstores worldwide through IngramSpark — the gold standard of book distribution.",
                deliverables: ["IngramSpark account setup", "Retail & library distribution", "Wholesale discount configuration"]
            },
            {
                step: "14",
                icon: FileText,
                slug: "metadata-optimization",
                name: "Metadata & SEO Optimization",
                desc: "Strategic title tagging, keyword embedding, and description writing that maximizes searchability on Amazon, Google, and every major book retailer.",
                deliverables: ["Title & subtitle SEO", "Backend keyword research", "Book description copywriting"]
            },
            {
                step: "15",
                icon: Search,
                slug: "advertising-management",
                name: "Amazon A+ Content Setup",
                desc: "Rich media content for your Amazon listing — including enhanced images, comparison charts, and editorial sections that can increase conversions by up to 10%.",
                deliverables: ["A+ content design", "Brand story section", "Visual comparison modules"]
            }
        ]
    },
    {
        phase: "Phase 05",
        title: "Marketing & Launch",
        color: "bg-amber-500/10 text-amber-600 border-amber-200",
        accentBg: "bg-amber-500",
        icon: Megaphone,
        description: "Publishing without marketing is like opening a store with no sign. Our launch strategy transforms your release day into a sales event.",
        steps: [
            {
                step: "16",
                icon: Users,
                slug: "review-sourcing",
                name: "ARC (Advance Review Copy) Campaign",
                desc: "Build social proof before launch by distributing advance copies to targeted readers and book bloggers who will post verified reviews on release day.",
                deliverables: ["ARC reader list building", "NetGalley submission", "Review tracking dashboard"]
            },
            {
                step: "17",
                icon: Megaphone,
                slug: "book-launch-strategy",
                name: "Book Launch Strategy",
                desc: "A comprehensive launch plan covering pre-launch buzz, launch day activities, and post-launch momentum including paid and organic tactics.",
                deliverables: ["Launch timeline calendar", "Pre-launch checklist", "Post-launch review strategy"]
            },
            {
                step: "18",
                icon: Video,
                slug: "book-trailer",
                name: "Book Trailer Video Production",
                desc: "Cinematic short-form video trailers for social media and YouTube designed to generate shares, create emotional connection, and drive pre-orders.",
                deliverables: ["30–90 second trailer", "Social media cut-downs", "YouTube-optimized version"]
            },
            {
                step: "19",
                icon: Mail,
                slug: "email-marketing",
                name: "Email Marketing Setup",
                desc: "Build your reader mailing list from scratch, design your welcome sequence, and set up automated email campaigns to drive ongoing book sales.",
                deliverables: ["Email list setup (Mailchimp/Klaviyo)", "Welcome sequence design", "Launch broadcast campaign"]
            }
        ]
    },
    {
        phase: "Phase 06",
        title: "Growth & Ongoing Promotion",
        color: "bg-rose-500/10 text-rose-600 border-rose-200",
        accentBg: "bg-rose-500",
        icon: BarChart3,
        description: "The work doesn't stop at launch. We help you build lasting author brands, paid ad campaigns, and long-term readership that compounds over time.",
        steps: [
            {
                step: "20",
                icon: BarChart3,
                slug: "advertising-management",
                name: "Amazon Advertising (AMS) Management",
                desc: "Managed pay-per-click campaigns on Amazon targeting readers actively searching for books in your genre. Includes bid strategy, keyword optimization, and reporting.",
                deliverables: ["Sponsored Product ads", "Keyword bid management", "Monthly performance reports"]
            },
            {
                step: "21",
                icon: Search,
                slug: "metadata-optimization",
                name: "SEO & Blog Content Strategy",
                desc: "Grow organic discoverability with an author blog, SEO articles, and keyword-rich content targeting your reader audience on Google search.",
                deliverables: ["Monthly blog articles", "On-page SEO optimization", "Backlink building strategy"]
            },
            {
                step: "22",
                icon: BarChart3,
                slug: "social-media-management",
                name: "Social Media Management",
                desc: "Consistent, engaging social content for Instagram, Facebook, X (Twitter), and TikTok to grow your author following and keep readers connected.",
                deliverables: ["12–26 posts/month", "Graphic design & copywriting", "Analytics & reporting"]
            },
            {
                step: "23",
                icon: Users,
                slug: "author-website",
                name: "Author Website Design",
                desc: "A premium author website serving as your central hub — showcasing your books, collecting leads, and converting visitors into lifelong readers.",
                deliverables: ["Up to 5-page custom website", "Email opt-in integration", "Mobile-responsive design"]
            },
            {
                step: "24",
                icon: BarChart3,
                slug: "royalty-accounting",
                name: "Royalty Reporting & Sales Analytics",
                desc: "Monthly consolidated royalty reports from all platforms (KDP, IngramSpark, Audible, etc.) so you always know exactly what you're earning and where.",
                deliverables: ["Consolidated sales dashboard", "Platform-by-platform breakdown", "Quarterly growth reports"]
            }
        ]
    }
];

export default function ServicesPage() {

    return (
        <main className="min-h-screen bg-transparent">

            {/* Hero */}
            <section className="relative pt-40 pb-24 overflow-hidden text-center px-6">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                <div className="max-w-4xl mx-auto relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8"
                    >
                        <span className="text-sm font-bold text-primary uppercase tracking-widest">Complete Publishing Journey</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black tracking-tighter text-primary mb-8 leading-tight"
                    >
                        From First Word to <br />
                        <span className="font-serif italic text-primary">Global Bookshelf.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-foreground/80 font-medium max-w-2xl mx-auto leading-relaxed"
                    >
                        Every service your book needs — organized in the exact order you need them. Click any service to learn more.
                    </motion.p>

                    {/* Stats Row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-8 mt-14"
                    >
                        {[
                            { value: "24", label: "Core Services" },
                            { value: "6", label: "Publishing Phases" },
                            { value: "180+", label: "Global Markets" },
                            { value: "100%", label: "Rights Retained" },
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <p className="text-4xl font-black text-primary">{stat.value}</p>
                                <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* All Phases */}
            <section className="max-w-7xl mx-auto px-6 py-16 space-y-24">
                {phases.map((phase, pi) => (
                    <motion.div
                        key={pi}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Phase Header */}
                        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12 pb-8 border-b border-border">
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${phase.color} border`}>
                                <phase.icon className="w-8 h-8" />
                            </div>
                            <div className="flex-1">
                                <p className="text-xs font-black uppercase tracking-widest text-foreground/30 mb-1">{phase.phase}</p>
                                <h2 className="text-3xl font-black tracking-tighter text-primary">{phase.title}</h2>
                                <p className="text-sm text-foreground/60 font-medium mt-2 max-w-2xl">{phase.description}</p>
                            </div>
                            <div className={`shrink-0 w-10 h-10 rounded-full ${phase.accentBg} text-white flex items-center justify-center font-black text-sm`}>
                                {phase.steps.length}
                            </div>
                        </div>

                        {/* Service Cards Grid — each card links to detail page */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {phase.steps.map((step, si) => (
                                <motion.div
                                    key={si}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: si * 0.08 }}
                                >
                                    <Link
                                        href={`/services/${step.slug}`}
                                        className="group flex flex-col p-8 rounded-3xl border border-border bg-white hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all h-full cursor-pointer"
                                    >
                                        <div className="flex items-start gap-5 mb-6">
                                            <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-all">
                                                <step.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                                            </div>
                                            <div className="flex-1">
                                                <span className="text-[10px] font-black uppercase tracking-widest text-foreground/20">Step {step.step}</span>
                                                <h3 className="text-lg font-black text-primary tracking-tight leading-tight group-hover:text-primary transition-colors">{step.name}</h3>
                                            </div>
                                            {/* Arrow indicator */}
                                            <ArrowRight className="w-4 h-4 text-foreground/20 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                                        </div>

                                        <p className="text-sm text-foreground/50 font-medium leading-relaxed mb-6 flex-1">{step.desc}</p>

                                        <div className="space-y-2">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-foreground/30 mb-3">Deliverables</p>
                                            {step.deliverables.map((d, di) => (
                                                <div key={di} className="flex items-center gap-3">
                                                    <ChevronRight className="w-3 h-3 text-primary shrink-0" />
                                                    <span className="text-xs font-bold text-primary/70">{d}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-primary/60 group-hover:text-primary transition-colors">View Full Details</span>
                                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all">
                                                <ArrowRight className="w-3 h-3 text-primary group-hover:text-white transition-colors" />
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </section>

            {/* Free Strategic Tools Section */}
            <section className="py-24 bg-primary/5 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center">
                                    <Wrench className="w-5 h-5" />
                                </div>
                                <span className="text-sm font-black text-primary uppercase tracking-[0.3em]">Author Resources</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-primary mb-6">
                                Empower Your Publishing <br />
                                <span className="font-serif italic text-primary text-gradient-primary">with Free Expert Tools.</span>
                            </h2>
                            <p className="text-lg text-primary/70 font-medium leading-relaxed mb-8">
                                In addition to our professional services, we offer a suite of free calculators, generators, and optimization tools to help you manage your publishing catalog.
                            </p>
                            <Link href="/tools" className="inline-flex items-center gap-2 group text-primary font-black uppercase tracking-widest text-sm bg-white px-8 py-4 rounded-full border border-primary/10 hover:bg-primary hover:text-white transition-all shadow-lg shadow-primary/5">
                                Explore All Free Tools <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-auto">
                            {[
                                { title: "Amazon Sales Calc", slug: "amazon-sales-calculator", desc: "Predict your volume." },
                                { title: "Royalty Calculator", slug: "royalty-calculator", desc: "Calculate your net." },
                                { title: "Description Gen", slug: "book-description-generator", desc: "AI-powered copy." },
                                { title: "Spine Width Calc", slug: "spine-width-calculator", desc: "Precision printing." }
                            ].map((tool, i) => (
                                <Link
                                    key={i}
                                    href={`/tools/${tool.slug}`}
                                    className="p-6 rounded-2xl bg-white border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all group"
                                >
                                    <h4 className="font-black text-sm text-primary group-hover:text-primary transition-colors flex items-center justify-between">
                                        {tool.title} <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all" />
                                    </h4>
                                    <p className="text-[10px] font-bold text-primary/40 uppercase tracking-widest mt-1">{tool.desc}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-32 bg-primary text-white relative overflow-hidden px-6">
                <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-10 pointer-events-none" />
                <div className="max-w-4xl mx-auto text-center relative">
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 italic">
                        Ready to Start <br />Your Journey?
                    </h2>
                    <p className="text-white/50 text-lg font-medium mb-12 max-w-xl mx-auto">
                        Book a free consultation and we'll map out the exact services your book needs to succeed.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/contact" className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all shadow-xl shadow-primary/30 flex items-center gap-2">
                            Get a Free Consultation <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link href="/pricing" className="px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all border border-white/20 flex items-center gap-2">
                            View Pricing Packages <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
