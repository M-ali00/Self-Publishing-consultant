"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    BookOpen, ArrowRight, TrendingUp, PenTool, Layout,
    Search, Clock, ChevronRight, Sparkles, Filter, Globe
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
    {
        category: "Marketing",
        title: "Scaling Amazon Ads: The Neural Bidding Framework",
        excerpt: "Leverage advanced AI tools to manage your AMS campaigns and significantly lower your ACoS while doubling unit sales.",
        date: "Dec 30, 2024",
        readTime: "9 min read",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",
        icon: <TrendingUp size={18} />,
        slug: "amazon-ads-for-indie-authors"
    },
    {
        category: "Publishing",
        title: "How to Format Your Book for Amazon KDP in 2026",
        excerpt: "A step-by-step guide to preparing a print-ready interior file that passes KDP's automated quality checks on the first submission.",
        date: "Feb 24, 2026",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=800&auto=format&fit=crop",
        icon: <Layout size={18} />,
        slug: "how-to-format-your-book-for-kdp"
    },
    {
        category: "Tools & Resources",
        title: "The Author's Complete ISBN and Barcode Guide",
        excerpt: "Everything you need to know about ISBNs, EAN-13 barcodes, and price extensions before your book goes to print.",
        date: "Feb 20, 2026",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1543005128-d39eefd02c4b?q=80&w=800&auto=format&fit=crop",
        icon: <BookOpen size={18} />,
        slug: "isbn-barcode-guide-for-authors"
    },
    {
        category: "Author Stories",
        title: "From Manuscript to Global Bestseller in 90 Days",
        excerpt: "David Chen shares the exact publishing and marketing timeline that took his debut tech book to #1 in three Amazon sub-categories.",
        date: "Feb 14, 2026",
        readTime: "12 min read",
        image: "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?q=80&w=800&auto=format&fit=crop",
        icon: <Sparkles size={18} />,
        slug: "from-manuscript-to-global-bestseller"
    },
    {
        category: "Marketing",
        title: "KDP Keywords: The 'Hidden' Data Architecture",
        excerpt: "Why the 7 backend keyword boxes are more important than your book's description, and how to fill them for maximum organic reach.",
        date: "Jan 12, 2026",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop",
        icon: <TrendingUp size={18} />,
        slug: "kdp-keywords-data-architecture"
    },
    {
        category: "Publishing",
        title: "Navigating Global Rights and Translations",
        excerpt: "Secure your book's potential in international markets by understanding rights licensing and high-grade translation services.",
        date: "Jan 5, 2026",
        readTime: "10 min read",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
        icon: <Globe size={18} />,
        slug: "global-rights-and-translations"
    }
];

const categories = ["All", "Marketing", "Publishing", "Tools & Resources", "Author Stories"];

export default function BlogList() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredPosts = activeCategory === "All"
        ? blogPosts
        : blogPosts.filter(post => post.category === activeCategory);

    const featuredPost = blogPosts[0];

    return (
        <main className="min-h-screen bg-transparent pt-32 pb-24">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Header Section */}
                <header className="mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6"
                    >
                        <BookOpen size={14} /> The Masterclass Archive
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter text-primary mb-8 leading-[0.85]"
                    >
                        Publishing <span className="font-serif italic text-primary-light">Intelligence.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-foreground/80 text-xl font-medium max-w-2xl mx-auto"
                    >
                        High-level tactics, industry data, and editorial methodologies for the modern global author.
                    </motion.p>
                </header>

                {/* Featured Post */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-20 relative group"
                >
                    <Link href={`/blog/${featuredPost.slug}`} className="block relative aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl border border-border">
                        <img
                            src={featuredPost.image}
                            alt={featuredPost.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent flex flex-col justify-end p-8 md:p-12">
                            <div className="max-w-3xl">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1 rounded-full bg-secondary text-primary text-[10px] font-black uppercase tracking-widest">Featured</span>
                                    <span className="text-white/90 text-[10px] font-black uppercase tracking-widest leading-none">{featuredPost.category}</span>
                                </div>
                                <h2 className="text-3xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-[0.9] group-hover:text-secondary transition-colors transition-duration-500">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-white/90 text-lg font-medium leading-relaxed mb-8 line-clamp-2">
                                    {featuredPost.excerpt}
                                </p>
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full border-2 border-white/20 overflow-hidden">
                                            <img src="https://i.pravatar.cc/150?u=sarah" alt="Author" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="text-white text-xs font-bold uppercase tracking-widest">Sarah J. Montgomery</div>
                                    </div>
                                    <div className="flex items-center gap-2 text-white/40 text-[10px] font-black uppercase tracking-widest border-l border-white/10 pl-6">
                                        <Clock size={12} /> {featuredPost.readTime}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </motion.section>

                {/* Filter & Search Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12 py-4 border-b border-border">
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto font-bold no-scrollbar">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${activeCategory === cat
                                        ? "bg-primary text-white shadow-lg shadow-primary/20"
                                        : "bg-white border border-border text-foreground/60 hover:border-primary/40 hover:text-primary"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredPosts.slice(1).map((post, i) => (
                            <motion.article
                                layout
                                key={post.slug}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ delay: i * 0.1 }}
                                className="group flex flex-col bg-white border border-border shadow-sm rounded-[2rem] overflow-hidden hover:shadow-2xl hover:border-primary/20 transition-all h-full"
                            >
                                <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white text-primary text-[9px] font-black uppercase tracking-widest shadow-sm">
                                            {post.icon} {post.category}
                                        </div>
                                    </div>
                                </Link>
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex justify-between items-center mb-4">
                                        <time className="text-[10px] font-bold text-foreground/30 uppercase tracking-[0.2em]">{post.date}</time>
                                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-foreground/30 uppercase tracking-[0.1em]">
                                            <Clock size={10} /> {post.readTime}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold tracking-tight text-primary mb-4 leading-tight group-hover:text-primary-light transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-8 flex-grow line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <div className="mt-auto pt-6 border-t border-border flex justify-between items-center">
                                        <Link href={`/blog/${post.slug}`} className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest group-hover:gap-4 transition-all">
                                            Read Article <ArrowRight size={14} />
                                        </Link>
                                        <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-all">
                                            <ChevronRight size={14} />
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Newsletter Section */}
                <section className="mt-32 p-12 md:p-20 rounded-[3rem] bg-primary relative overflow-hidden text-center">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <Sparkles className="w-10 h-10 text-secondary mx-auto mb-8" />
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Stay Ahead of the Industry.</h2>
                        <p className="text-white/90 text-lg font-medium mb-12 leading-relaxed">
                            Join 5,000+ serious authors getting high-level publishing strategy, market data, and exclusive tool updates every Tuesday.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 p-2 bg-white/10 border border-white/20 rounded-2xl md:rounded-full">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="bg-transparent border-none outline-none text-white px-6 py-4 flex-grow placeholder:text-white/60 font-medium"
                            />
                            <button className="px-10 py-4 bg-secondary text-primary font-black rounded-xl md:rounded-full hover:bg-white transition-all shadow-xl shadow-primary/20">
                                Join Now
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </main>
    );
}
