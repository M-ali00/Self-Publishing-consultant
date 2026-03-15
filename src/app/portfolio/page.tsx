"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    BookOpen, TrendingUp, Star, Globe,
    ArrowRight, CheckCircle2, Award, Users,
    Zap, Sparkles, Filter, ChevronRight
} from "lucide-react";
import Link from "next/link";

const categories = ["All", "Bestsellers", "Fiction", "Non-Fiction", "Design"];

const successes = [
    {
        title: "The Silent Orbit",
        author: "J.R. Vence",
        category: "Fiction",
        isBestseller: true,
        result: "NYT #1 Bestseller / 120k+ Copies",
        desc: "A hard sci-fi masterpiece that utilized our Neural Bidding Framework and Global Distribution. Reached the summit of 5 major charts.",
        image: "https://images.unsplash.com/photo-1614728263952-84ea206f99b6?q=80&w=600&auto=format&fit=crop",
        tags: ["Metadata SEO", "Global Launch", "AMS Ads"],
        stats: { ranking: "#1", sales: "120k+", ads: "14% ACoS" }
    },
    {
        title: "Mindful Execution",
        author: "Sarah Jenks",
        category: "Non-Fiction",
        isBestseller: true,
        result: "WSJ Bestseller / 45k+ Pre-orders",
        desc: "Business strategy architected via our Editorial Excellence and Marketing Velocity modules. Redefined industry standards for non-fiction launches.",
        image: "https://images.unsplash.com/photo-1553484771-047a44eee27b?q=80&w=600&auto=format&fit=crop",
        tags: ["Ghostwriting", "PR Campaign", "IngramSpark"],
        stats: { ranking: "#4", sales: "85k+", ads: "18% ACoS" }
    },
    {
        title: "Echoes of the Valley",
        author: "M.T. Khan",
        category: "Fiction",
        isBestseller: false,
        result: "International Translation Deal",
        desc: "Literary fiction that secured 7 international rights deals across Europe and Asia through our Rights Guard protocol.",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop",
        tags: ["Rights Licensing", "Editing", "Global Distribution"],
        stats: { deals: "7 States", reach: "12 Languages", reviews: "4.8/5" }
    },
    {
        title: "Azure Depths",
        author: "Elena Rossi",
        category: "Design",
        isBestseller: false,
        result: "Global Indie Design Award Winner",
        desc: "A breathtaking wrap design and formatting that drove a 300% increase in organic retail click-through rates.",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop",
        tags: ["Cover Design", "Formatting", "Kindle Vella"],
        stats: { ctr: "4.2%", reviews: "600+", design: "Award Winner" }
    },
    {
        title: "The Lean Start",
        author: "Marcus Thorne",
        category: "Non-Fiction",
        isBestseller: true,
        result: "Amazon Top 10 / 30k Sales",
        desc: "Utilized our AI-driven Keyword Rocket to dominate small business categories for 24 consecutive months.",
        image: "https://images.unsplash.com/photo-1454165833767-027ffea9e778?q=80&w=600&auto=format&fit=crop",
        tags: ["Category Rank", "AI Marketing", "Growth"],
        stats: { ranking: "#8", sales: "30k+", passive: "$4k/mo" }
    },
    {
        title: "Empire of Glass",
        author: "S.J. Maas (Inspired)",
        category: "Fiction",
        isBestseller: true,
        result: "Kindle Top 100 / 50k+ KU Reads",
        desc: "An epic fantasy odyssey that leveraged our Trope-Optimized Metadata and high-velocity launch strategy.",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop",
        tags: ["Metadata", "Trope Analysis", "KU Strategy"],
        stats: { ranking: "#62", reads: "5M+", reviews: "1.2k" }
    },
    {
        title: "The Quantum Recipe",
        author: "Dr. Aris V.",
        category: "Design",
        isBestseller: false,
        result: "Premium Print Production",
        desc: "A complex technical cookbook that pushed the boundaries of POD printing with our high-res color-matching protocol.",
        image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=600&auto=format&fit=crop",
        tags: ["High-Res POD", "Color Matching", "Layout"],
        stats: { quality: "Tier 1", sales: "15k+", awards: "Design Finalist" }
    }
];

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredSuccesses = activeCategory === "All"
        ? successes
        : successes.filter(s =>
            activeCategory === "Bestsellers" ? s.isBestseller : s.category === activeCategory
        );

    return (
        <main className="min-h-screen bg-transparent pt-32 pb-24">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Header / Hero */}
                <header className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6"
                    >
                        <Award size={14} /> Global Commercial Registry
                    </motion.div>
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                        <div className="max-w-3xl">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-6xl md:text-8xl font-black tracking-tighter text-primary mb-8 leading-[0.85]"
                            >
                                Verified <br />
                                <span className="font-serif italic text-primary-light">Success Stories.</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-foreground/80 text-xl font-medium leading-relaxed"
                            >
                                We don't just publish books; we engineer market leaders. Explore the commercial triumphs of authors who leveraged our high-grade infrastructure.
                            </motion.p>
                        </div>

                        {/* Summary Stats */}
                        <div className="flex gap-10 border-l border-border pl-10">
                            <div>
                                <p className="text-4xl font-black text-primary">42</p>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mt-1">#1 Bestsellers</p>
                            </div>
                            <div>
                                <p className="text-4xl font-black text-primary-light">850k+</p>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mt-1">Copies Sold</p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Categories */}
                <div className="flex flex-wrap items-center gap-2 mb-12 py-4 border-b border-border font-bold">
                    <Filter size={14} className="text-primary mr-2" />
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-[10px] uppercase font-bold tracking-widest transition-all ${activeCategory === cat
                                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                                    : "bg-white border border-border text-foreground/60 hover:border-primary/40 hover:text-primary"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredSuccesses.map((item, i) => (
                            <motion.div
                                layout
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="group bg-white border border-border rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:border-primary/20 transition-all"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] h-full">
                                    {/* Book Visual Area */}
                                    <div className="relative bg-muted/30 p-6 flex items-center justify-center overflow-hidden">
                                        <div className="absolute inset-0 bg-grid opacity-20" />
                                        <motion.div
                                            whileHover={{ scale: 1.05, rotate: -2 }}
                                            className="relative z-10 w-full aspect-[2/3] shadow-2xl rounded-sm overflow-hidden border border-white/20"
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />
                                            {item.isBestseller && (
                                                <div className="absolute top-2 right-2 p-1.5 bg-yellow-400 rounded-full shadow-lg">
                                                    <Star size={10} className="text-white fill-current" />
                                                </div>
                                            )}
                                        </motion.div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="p-8 flex flex-col justify-between">
                                        <div>
                                            <div className="flex justify-between items-start mb-4">
                                                <div className="flex gap-2 flex-wrap">
                                                    <span className="px-2.5 py-1 rounded-full bg-primary/5 border border-primary/10 text-[9px] font-black uppercase text-primary tracking-widest">
                                                        {item.category}
                                                    </span>
                                                    {item.tags.map(tag => (
                                                        <span key={tag} className="px-2.5 py-1 rounded-full bg-foreground/5 text-[9px] font-bold uppercase text-foreground/40 tracking-wider">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <h3 className="text-2xl font-bold tracking-tight text-primary mb-1 group-hover:text-primary-light transition-colors">{item.title}</h3>
                                            <p className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.3em] mb-4">Author: {item.author}</p>

                                            <div className="flex items-center gap-2 text-primary mb-6">
                                                <Zap size={14} className="fill-current text-secondary" />
                                                <span className="text-xs font-black uppercase tracking-widest">{item.result}</span>
                                            </div>

                                            <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-8 line-clamp-3">
                                                {item.desc}
                                            </p>
                                        </div>

                                        {/* Result Metrics */}
                                        <div className="pt-6 border-t border-border grid grid-cols-3 gap-2">
                                            {Object.entries(item.stats).map(([key, val]) => (
                                                <div key={key}>
                                                    <p className="text-xs font-black text-primary leading-none">{val}</p>
                                                    <p className="text-[8px] font-bold text-foreground/40 uppercase tracking-widest mt-1">{key}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Dynamic CTA */}
                <section className="mt-32 p-12 md:p-20 rounded-[4rem] bg-primary relative overflow-hidden flex flex-col items-center text-center text-white">
                    <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-10 pointer-events-none" />
                    <Sparkles className="w-12 h-12 text-secondary mb-10" />
                    <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.85]">
                        Your Manuscript <br />
                        <span className="font-serif italic text-secondary">In This Gallery.</span>
                    </h2>
                    <p className="text-white/90 text-xl font-medium max-w-2xl mb-12">
                        The distinction between a "book project" and a "market leader" is a proprietary infrastructure. Let's build your legacy.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 relative z-10">
                        <Link href="/contact" className="px-10 py-5 bg-secondary text-primary font-black text-xs uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-xl shadow-primary/20 flex items-center gap-3">
                            Start Your Journey <ArrowRight size={16} />
                        </Link>
                        <Link href="/services" className="px-10 py-5 bg-white/5 border border-white/20 text-white font-black text-xs uppercase tracking-widest rounded-full hover:bg-white/10 transition-all flex items-center gap-3">
                            Explore Services <ChevronRight size={16} />
                        </Link>
                    </div>
                </section>

            </div>
        </main>
    );
}
