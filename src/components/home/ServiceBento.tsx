"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Palette, ShieldCheck, Zap, PenTool, FileSearch, ArrowRight, Activity, Library, Layout, Award, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

import Link from "next/link";

const services = [
    {
        title: "Manuscript Assessment",
        description: "Deep structural analysis identifying pacing, tone, and market fit using private machine learning.",
        icon: FileSearch,
        size: "col-span-1 md:col-span-2",
        bgColor: "bg-primary/5",
        iconColor: "text-primary",
        slug: "developmental-editing"
    },
    {
        title: "Editorial Excellence",
        description: "Multi-layered proofing by industry legends and AI cross-verification for pristine prose.",
        icon: PenTool,
        size: "col-span-1",
        bgColor: "bg-secondary/10",
        iconColor: "text-secondary",
        slug: "substantive-editing"
    },
    {
        title: "Cover & Layout",
        description: "Cinematic cover design and multi-format layout for digital and luxury print editions.",
        icon: Palette,
        size: "col-span-1",
        bgColor: "bg-accent/5",
        iconColor: "text-accent",
        slug: "cover-design"
    },
    {
        title: "Global Distribution",
        description: "Proprietary pipelines to 40,000+ retail nodes across 180+ countries instantly.",
        icon: Globe,
        size: "col-span-1 md:col-span-2",
        bgColor: "bg-primary/10",
        iconColor: "text-primary",
        slug: "print-on-demand-setup"
    },
    {
        title: "Metadata Pulse",
        description: "Dynamic SEO optimization and categorization driven by real-time catalog data.",
        icon: Zap,
        size: "col-span-1",
        bgColor: "bg-secondary/5",
        iconColor: "text-secondary",
        slug: "metadata-optimization"
    },
    {
        title: "Rights Guard",
        description: "Enterprise-grade protection and instant licensing modules for global scale.",
        icon: ShieldCheck,
        size: "col-span-1",
        bgColor: "bg-primary/5",
        iconColor: "text-primary-light",
        slug: "copyright-registration"
    },
    {
        title: "Royalty Intelligence",
        description: "Real-time sales tracking and automated royalty distribution with transparent reporting.",
        icon: Library,
        size: "col-span-1",
        bgColor: "bg-primary/5",
        iconColor: "text-primary",
        slug: "royalty-accounting"
    },
    {
        title: "Marketing Velocity",
        description: "High-impact launch strategies and AI-driven ad targeting to maximize reach.",
        icon: Activity,
        size: "col-span-1 md:col-span-2",
        bgColor: "bg-secondary/10",
        iconColor: "text-secondary",
        slug: "book-launch-strategy"
    },
    {
        title: "Format Mastering",
        description: "Universal formatting for Kindle, ePub, and high-end paperback/hardcover formats.",
        icon: Layout,
        size: "col-span-1",
        bgColor: "bg-accent/5",
        iconColor: "text-accent",
        slug: "interior-formatting"
    },
];

export const ServiceBento = () => {
    return (
        <section className="py-32 bg-transparent relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
                    <div className="max-w-3xl">
                        <h2 className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-6">Omni-Channel Solution</h2>
                        <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-8 text-primary">
                            One Interface. <br />
                            <span className="font-serif italic text-primary-light">Absolute Control.</span>
                        </h3>
                    </div>
                    <p className="text-foreground/60 text-lg max-w-sm font-medium leading-relaxed italic">
                        "The bridge between creator and consumer has been refined into a single interface."
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <Link href={`/services/${service.slug}`} key={service.title} className={cn(
                            "group h-full",
                            service.size.includes("md:col-span-2") ? "sm:col-span-2" : "col-span-1"
                        )}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className={cn(
                                    "bento-card group flex flex-col justify-between overflow-hidden h-full p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem]",
                                    service.bgColor
                                )}
                            >
                                <div className="relative z-10">
                                    <div className={cn(
                                        "w-12 h-12 md:w-16 md:h-16 rounded-[1rem] md:rounded-[1.25rem] flex items-center justify-center mb-6 md:mb-8 bg-card shadow-sm border border-border group-hover:scale-110 group-hover:rotate-3 transition-all duration-500",
                                        service.iconColor
                                    )}>
                                        <service.icon className="w-6 h-6 md:w-8 md:h-8" />
                                    </div>

                                    <h4 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 tracking-tighter text-primary">{service.title}</h4>
                                    <p className="text-foreground/80 text-base md:text-lg leading-relaxed font-medium">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="mt-8 md:mt-12">
                                    <div className={cn(
                                        "flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 group-hover:gap-5",
                                        service.iconColor
                                    )}>
                                        Explore Module <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
