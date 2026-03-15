"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Link from "next/link";

const glossary: { letter: string; name: string; desc: string }[] = [
    { letter: "A", name: "Amazon KDP", desc: "The foundational portal for direct digital and print self-publishing." },
    { letter: "B", name: "Beta Readers", desc: "Strategic pre-launch audience feedback to refine narrative and market fit." },
    { letter: "C", name: "Copyright", desc: "Legal ownership protection ensuring your intellectual property remains yours." },
    { letter: "D", name: "Developmental Editing", desc: "High-level structural analysis of plot, pacing, and core character arcs." },
    { letter: "E", name: "eBook", desc: "Universal digital format optimized for Kindle, Apple Books, and global e-readers." },
    { letter: "F", name: "Formatting", desc: "Precise interior typesetting engineered for both digital and luxury print editions." },
    { letter: "G", name: "Global Distribution", desc: "Simultaneous connection to 40,000+ retail nodes across 180+ countries." },
    { letter: "H", name: "Hardcover", desc: "Premium rigid-case binding designed for library longevity and collector editions." },
    { letter: "I", name: "ISBN", desc: "The unique 13-digit global identifier required for every commercial edition." },
    { letter: "J", name: "Jacket Copy", desc: "Persuasive sales psychology applied to your back cover and retail descriptions." },
    { letter: "K", name: "Keyword Optimization", desc: "Algorithmic engineering to ensure your book surfaces in profitable search results." },
    { letter: "L", name: "Launch Strategy", desc: "Coordinated systems to trigger early retail momentum and review generation." },
    { letter: "M", name: "Metadata", desc: "The invisible data infrastructure that drives book discovery and ranking." },
    { letter: "N", name: "Net Royalty", desc: "The transparent revenue stream delivered after retailer and production costs." },
    { letter: "O", name: "Offset Printing", desc: "High-volume traditional production for cost-effective large scale runs." },
    { letter: "P", name: "Print-on-Demand", desc: "Eco-efficient model where books are manufactured only when an order is placed." },
    { letter: "Q", name: "Quality Assurance", desc: "Multi-point verification of files to ensure zero-defect global distribution." },
    { letter: "R", name: "Royalties", desc: "Direct earnings paid into your account from every global copy sold." },
    { letter: "S", name: "Self-Publishing", desc: "The absolute control over your art, rights, and commercial direction." },
    { letter: "T", name: "Typesetting", desc: "Classic arrangement of typography for maximum readability and aesthetic." },
    { letter: "U", name: "Universal Book Link", desc: "A singular smart link directing readers to their favorite local bookstore." },
    { letter: "V", name: "Video Trailer", desc: "Cinematic visual assets designed to capture attention in saturated markets." },
    { letter: "W", name: "Word Count", desc: "The metric of manuscript volume that determines production and layout paths." },
    { letter: "X", name: "XML Metadata", desc: "Raw data structures that enable seamless sync across retailer catalogs." },
    { letter: "Y", name: "Young Adult", desc: "The high-velocity market sector bridging teenage and adult readership." },
    { letter: "Z", name: "Zero-Inventory", desc: "The modern financial model that eliminates the need for expensive warehousing." },
];

export const AZServices = () => {
    const [openLetter, setOpenLetter] = useState<string | null>(null);

    return (
        <section className="py-24 md:py-32 bg-transparent relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
                    <div className="max-w-2xl">
                        <h2 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-6">A-Z Infrastructure</h2>
                        <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-8 text-primary">
                            Core Terminology <br />
                            <span className="font-serif italic text-primary-light">At a Glance.</span>
                        </h3>
                        <p className="mt-8 text-foreground/80 text-lg font-medium max-w-xl leading-relaxed">
                            A definitive lexicon of modern publishing. Mastery of these 26 nodes is the bridge to market leadership.
                        </p>
                    </div>
                </div>

                {/* Simplified Letters Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {glossary.map(({ letter, name, desc }, idx) => (
                        <motion.div
                            key={letter}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.02 }}
                            className="p-8 border border-border rounded-3xl bg-white/40 backdrop-blur-sm group hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 flex flex-col items-start gap-6"
                        >
                            <span className="w-14 h-14 rounded-2xl bg-primary/10 text-primary text-3xl font-black flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                                {letter}
                            </span>
                            <div>
                                <h4 className="text-xl font-bold text-primary mb-3 tracking-tighter group-hover:text-primary-light transition-colors">{name}</h4>
                                <p className="text-sm font-medium text-foreground/70 leading-relaxed italic">
                                    "{desc}"
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
