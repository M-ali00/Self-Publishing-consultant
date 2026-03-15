"use client";

import React from "react";
import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { CheckCircle2, ArrowLeft, Globe, Shield, Zap, Wrench, ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServiceDetailPage() {
    const params = useParams();
    const service = services.find((s) => s.slug === params.slug);

    if (!service) {
        notFound();
    }

    const Icon = service.icon;

    return (
        <main className="min-h-screen bg-white">

            {/* Hero Section */}
            <section className="relative pt-48 pb-24 overflow-hidden bg-muted/30">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-grid -z-10 opacity-20" />
                <div className="max-w-7xl mx-auto px-6">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest mb-12 hover:gap-4 transition-all"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Services
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="w-20 h-20 rounded-3xl bg-primary/10 text-primary flex items-center justify-center mb-8 shadow-sm border border-primary/20"
                            >
                                <Icon className="w-10 h-10" />
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight"
                            >
                                {service.title}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-xl text-foreground/60 font-medium leading-relaxed mb-12"
                            >
                                {service.description}
                            </motion.p>

                            <div className="flex flex-wrap gap-4">
                                <Link href="/contact" className="btn-primary px-10 py-4 rounded-full font-bold">
                                    Inquire Now
                                </Link>
                                <Link href="/schedule" className="btn-secondary px-10 py-4 rounded-full font-bold bg-white">
                                    Schedule Consultation
                                </Link>
                            </div>
                        </div>

                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="aspect-[4/3] rounded-[3rem] bg-[#022c22] p-12 relative overflow-hidden flex flex-col justify-between"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />

                                <div className="relative z-10 flex justify-between items-start">
                                    <div>
                                        <p className="text-primary font-black text-[10px] uppercase tracking-[0.4em] mb-2">Module Status</p>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                            <span className="text-white font-bold text-sm tracking-tight text-emerald-500">Live & Operational</span>
                                        </div>
                                    </div>
                                    <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[8px] font-black uppercase text-white/40 tracking-widest">
                                        SECURE PROTOCOL v4.0
                                    </div>
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-3xl font-bold text-white mb-6 tracking-tighter italic font-serif">Key Outcomes</h3>
                                    <ul className="space-y-4">
                                        {service.features.map((feature, i) => (
                                            <motion.li
                                                key={feature}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.3 + (i * 0.1) }}
                                                className="flex items-center gap-3 text-white/60 font-medium text-lg"
                                            >
                                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                                {feature}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="relative z-10 pt-8 border-t border-white/10 flex justify-between items-center">
                                    <div className="flex gap-4">
                                        <Globe className="w-4 h-4 text-white/20" />
                                        <Shield className="w-4 h-4 text-white/20" />
                                        <Zap className="w-4 h-4 text-white/20" />
                                    </div>
                                    <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">Self-Publishing Consultant</p>
                                </div>
                            </motion.div>

                            {/* Floating Accent */}
                            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2rem] shadow-2xl border border-border hidden md:block">
                                <p className="text-3xl font-black text-primary italic font-serif leading-none">SPC</p>
                                <p className="text-[10px] font-black uppercase tracking-widest text-foreground/40 mt-1">Enterprise Grade</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Deep Content Section */}
            <section className="py-32 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
                    <div className="lg:col-span-2 space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-bold tracking-tighter">Service Overview</h2>
                            <p className="text-xl text-foreground/70 leading-relaxed font-medium">
                                The modern publishing landscape demands precision. Our {service.title} service is engineered to provide exactly that, ensuring your manuscript doesn't just meet industry standards, but defines them.
                            </p>
                            <p className="text-lg text-foreground/60 leading-relaxed font-medium">
                                We utilize a proprietary blend of veteran industry expertise and advanced analytical tools. This "Dual-Layer" approach ensures that while the technological framework handles the heavy lifting of logistics and data, the human element remains focused on the nuance, tone, and soul of your work.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-10 rounded-3xl bg-primary/5 border border-primary/10">
                                <h4 className="text-xl font-bold mb-4 text-[#064e3b]">The Approach</h4>
                                <p className="text-[#064e3b]/60 leading-relaxed font-medium">
                                    Every project begins with a deep-dive analysis into your core goals, target audience, and current manuscript state.
                                </p>
                            </div>
                            <div className="p-10 rounded-3xl bg-secondary/5 border border-secondary/10">
                                <h4 className="text-xl font-bold mb-4 text-[#064e3b]">The Impact</h4>
                                <p className="text-[#064e3b]/60 leading-relaxed font-medium">
                                    Our clients see a marked increase in both retail discoverability and reader retention rates post-optimization.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="p-10 rounded-[2.5rem] bg-[#022c22] text-white">
                            <h4 className="text-2xl font-bold mb-8 tracking-tighter">Why Choose Us?</h4>
                            <ul className="space-y-6">
                                {[
                                    { t: "Absolute Rights", d: "You maintain 100% control." },
                                    { t: "Global Scale", d: "Reach 180+ markets instantly." },
                                    { t: "Data Driven", d: "Predictive market analytics." }
                                ].map((item, i) => (
                                    <li key={i} className="space-y-1">
                                        <p className="font-bold text-primary">{item.t}</p>
                                        <p className="text-white/40 text-sm leading-snug">{item.d}</p>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contact" className="inline-block mt-10 text-sm font-black text-primary uppercase tracking-[0.3em] border-b-2 border-primary/20 pb-1 hover:border-primary transition-all">
                                Let's Discuss Your Book →
                            </Link>
                        </div>

                        {/* Related Tools Promotion */}
                        <div className="p-10 rounded-[2.5rem] bg-primary/5 border border-primary/10">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center">
                                    <Wrench className="w-5 h-5" />
                                </div>
                                <h4 className="text-xl font-bold tracking-tighter text-[#064e3b]">
                                    {service.relatedTools && service.relatedTools.length > 0 ? "Free Expert Tools" : "Essential Author Tools"}
                                </h4>
                            </div>
                            <div className="space-y-6">
                                {(service.relatedTools && service.relatedTools.length > 0 ? service.relatedTools : [
                                    { title: "Amazon Sales Calculator", slug: "amazon-sales-calculator", description: "Estimate potential sales and volume on Amazon." },
                                    { title: "Book Description Generator", slug: "book-description-generator", description: "Draft compelling sales copy with AI assistance." },
                                    { title: "Royalty Calculator", slug: "royalty-calculator", description: "Calculate your estimated earnings per sale." }
                                ]).map((tool, i) => (
                                    <Link 
                                        key={i} 
                                        href={`/tools/${tool.slug}`}
                                        className="block group"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <p className="font-black text-sm text-[#064e3b] group-hover:text-primary transition-colors">{tool.title}</p>
                                            <ArrowUpRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                        </div>
                                        <p className="text-xs text-[#064e3b]/50 font-medium leading-relaxed">{tool.description}</p>
                                    </Link>
                                ))}
                            </div>
                            <Link 
                                href="/tools" 
                                className="inline-flex items-center gap-2 mt-8 text-[10px] font-black uppercase tracking-[0.2em] text-primary hover:gap-4 transition-all"
                            >
                                Explore All Tools <ArrowRight className="w-3 h-3" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
