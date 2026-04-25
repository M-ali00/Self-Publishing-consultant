"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, CheckCircle2, Globe, Zap, TrendingUp, Quote } from "lucide-react";
import Image from "next/image";

export const Hero = ({ initialTransactions = [] }: { initialTransactions?: any[] }) => {
    const [transactions, setTransactions] = React.useState<any[]>(initialTransactions);
    const [isLoading, setIsLoading] = React.useState(initialTransactions.length === 0);
    const [lastSync, setLastSync] = React.useState<string>("");

    const [quoteIndex, setQuoteIndex] = React.useState(0);
    const quotes = [
        { text: "Not all those who wander are lost.", author: "J.R.R. Tolkien" },
        { text: "It is a truth universally acknowledged...", author: "Jane Austen" },
        { text: "The only way out of the labyrinth is to forgive.", author: "John Green" },
        { text: "Everything was beautiful and nothing hurt.", author: "Kurt Vonnegut" },
        { text: "Stay gold, Ponyboy, stay gold.", author: "S.E. Hinton" },
        { text: "We accept the love we think we deserve.", author: "Stephen Chbosky" }
    ];

    React.useEffect(() => {
        const quoteInterval = setInterval(() => {
            setQuoteIndex((prev) => (prev + 1) % quotes.length);
        }, 3000);
        return () => clearInterval(quoteInterval);
    }, []);

    React.useEffect(() => {
        // Only fetch if we really have no data
        const fetchRealReports = async () => {
            if (transactions.length > 0 && !isLoading) return;

            try {
                const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=subject:fiction+bestseller&maxResults=40&orderBy=relevance&printType=books');
                const data = await response.json();

                if (data.items) {
                    const sortedBooks = data.items
                        .map((item: any) => ({
                            n: item.volumeInfo.authors?.[0] || "Global Author",
                            t: item.volumeInfo.title,
                            a: Math.floor(Math.random() * 2400) + 150,
                            loc: ["USA", "UK", "Germany", "Japan", "India", "Brazil"][Math.floor(Math.random() * 6)],
                            popularity: (item.volumeInfo.ratingsCount || 0) * (item.volumeInfo.averageRating || 1),
                            id: item.id
                        }))
                        .sort((a: any, b: any) => b.popularity - a.popularity);

                    setTransactions(sortedBooks);
                    setIsLoading(false);
                    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
                    setLastSync(currentTime);
                }
            } catch (error) {
                console.error("API Fetch Error:", error);
            }
        };

        if (initialTransactions.length === 0) {
            fetchRealReports();
        } else {
            const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            setLastSync(currentTime);
        }
        
        const syncInterval = setInterval(fetchRealReports, 300000);

        const rotateInterval = setInterval(() => {
            setTransactions(prev => {
                if (prev.length === 0) return prev;
                const last = prev[prev.length - 1];
                return [last, ...prev.slice(0, prev.length - 1)];
            });
        }, 5000);

        return () => {
            clearInterval(syncInterval);
            clearInterval(rotateInterval);
        };
    }, [initialTransactions]);

    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/5 border border-primary/10 mb-10">
                    <span className="flex h-2 w-2 rounded-full bg-primary-light animate-ping" />
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Premium Publishing Infrastructure</span>
                </div>

                <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-tighter mb-10 leading-[0.85] text-primary">
                    Designed to <br />
                    Delight <span className="font-serif italic text-primary-light">Authors.</span>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className="max-w-3xl mx-auto text-xl md:text-2xl text-foreground/80 mb-14 font-medium leading-relaxed"
                >
                    The distinction between a "book project" and a "global legacy" is infrastructure. Reach 180+ markets with <span className="text-primary-light font-bold underline decoration-primary-light/30 underline-offset-8">AI-optimized pathways</span> and absolute creative control.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 md:px-0"
                >
                    <Link
                        href="/contact"
                        className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 group"
                    >
                        Get Started Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="/schedule"
                        className="glass w-full sm:w-auto px-10 py-4 rounded-full text-base md:text-lg font-bold hover:bg-primary/5 transition-all border-border shadow-sm text-foreground flex items-center justify-center"
                    >
                        Book a Demo
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                    className="relative mt-24 md:mt-32 mx-auto max-w-6xl px-2 sm:px-4 lg:px-8"
                >
                    {/* Creative illustration of kid sitting on the box edge */}
                    <div className="absolute -top-[120px] md:-top-[200px] right-[10%] md:right-[15%] w-[150px] md:w-[250px] aspect-square z-20 pointer-events-none hover:rotate-2 transition-transform duration-500 origin-bottom">
                        <Image 
                            src="/images/kid-sitting.png" 
                            alt="Kid sitting on the box" 
                            width={250}
                            height={250}
                            className="w-full h-full object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.3)]"
                            priority
                        />
                    </div>

                    <div className="relative rounded-[2rem] md:rounded-[3rem] border border-border bg-white p-3 sm:p-4 md:p-8 shadow-[0_32px_64px_-16px_rgba(20,184,166,0.15)] overflow-hidden">
                        <div className="flex items-center gap-2 mb-6 md:mb-10 px-4">
                            <div className="flex gap-1.5 grayscale opacity-50">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                            </div>
                            <div className="ml-4 h-6 px-3 rounded-full bg-muted flex items-center gap-2 relative z-10">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                <span className="text-[9px] font-bold uppercase tracking-widest text-primary">Live Neural Node</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 text-left">
                            <div className="lg:col-span-3 bg-muted/50 rounded-[1.5rem] md:rounded-[2rem] p-5 sm:p-6 md:p-8 space-y-6 border border-border/50 flex flex-col order-2 lg:order-1">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-2">
                                    <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                                </div>
                                <div className="space-y-6 flex-grow">
                                    <div className="space-y-2">
                                        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-primary/60">Marketing ROAS</p>
                                        <div className="flex items-end gap-2">
                                            <span className="text-2xl font-black text-primary">4.8x</span>
                                            <span className="text-[10px] font-bold text-primary-light mb-1">↑12%</span>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        {[
                                            { label: "Amazon Ads", val: 88 },
                                            { label: "Meta Pulse", val: 64 },
                                            { label: "Neural Bidding", val: 95 }
                                        ].map((item, i) => (
                                            <div key={i} className="space-y-1.5">
                                                <div className="flex justify-between text-[7px] font-black uppercase tracking-widest text-[#022c22]/60">
                                                    <span>{item.label}</span>
                                                    <span>{item.val}%</span>
                                                </div>
                                                <div className="h-1 rounded-full w-full bg-primary/5 overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${item.val}%` }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 1, delay: 0.6 + i * 0.1 }}
                                                        className="h-full bg-primary"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="pt-4 md:pt-6 mt-auto border-t border-primary/5">
                                    <div className="bg-gradient-to-br from-[#022c22] to-primary rounded-2xl p-4 relative overflow-hidden">
                                        <div className="relative z-10">
                                            <p className="text-[8px] font-bold text-secondary mb-1">AI STRATEGY</p>
                                            <p className="text-[10px] sm:text-[11px] font-bold text-white">Scale Ad Spend by 15%</p>
                                        </div>
                                        <Zap className="absolute -bottom-2 -right-2 w-10 h-10 text-white/5" />
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-9 flex flex-col gap-6 order-1 lg:order-2">
                                <div className="min-h-[120px] md:min-h-[160px] h-auto py-5 md:py-6 bg-gradient-to-br from-muted to-white border border-border rounded-[2rem] md:rounded-[2.5rem] flex flex-col sm:flex-row items-start sm:items-center px-5 md:px-8 gap-4 md:gap-8 relative overflow-hidden group shadow-inner">
                                    <div className="flex flex-col gap-1 shrink-0 relative z-10">
                                        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/40">Verified Real-Time Index</p>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-4xl font-black text-primary tracking-tighter">#1</span>
                                            <span className="text-[9px] font-bold text-secondary px-3 py-1 bg-primary rounded-full">Authentic Data</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 mt-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary-bright animate-pulse" />
                                            <span className="text-[9px] font-black text-primary/60 uppercase tracking-widest">Global Sync Active</span>
                                        </div>
                                    </div>

                                    <div className="hidden sm:block h-12 w-px bg-border relative z-10" />

                                    <div className="flex-grow w-full h-20 md:h-24 relative overflow-hidden z-10">
                                        {isLoading ? (
                                            <div className="space-y-4 pt-4">
                                                <div className="h-6 w-3/4 bg-primary/5 animate-pulse rounded-lg" />
                                                <div className="h-4 w-1/2 bg-primary/5 animate-pulse rounded-lg" />
                                            </div>
                                        ) : (
                                            <motion.div
                                                animate={{ y: [0, -70, -140, -210] }}
                                                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                                                className="flex flex-col gap-8 pt-2"
                                            >
                                                {transactions.slice(0, 10).map((book, i) => (
                                                    <div key={book.id + i} className="flex flex-col">
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-[10px] font-black text-primary">RANK #{i + 1}</span>
                                                            <p className="text-sm font-black text-[#022c22] truncate max-w-[200px] md:max-w-md">{book.t}</p>
                                                        </div>
                                                        <div className="flex items-center gap-3 mt-1">
                                                            <p className="text-[8px] font-bold text-foreground/40 uppercase tracking-widest">{book.n}</p>
                                                            <div className="flex items-center gap-1">
                                                                <TrendingUp className="w-2 h-2 text-emerald-500" />
                                                                <span className="text-[8px] font-black text-emerald-500 uppercase">Volume: High</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </motion.div>
                                        )}
                                    </div>

                                    <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-20" />
                                    <Globe className="absolute -right-4 -top-4 w-20 md:w-32 h-20 md:h-32 text-primary/5" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
                                    <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 border border-border shadow-sm flex flex-col justify-between relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
                                        <div className="relative z-10 flex flex-col h-full">
                                            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-foreground/60 mb-8">Literary Insights & Sentiment</p>

                                            <div className="flex-grow min-h-[140px] md:min-h-[180px] h-auto py-2 flex flex-col relative mb-8">
                                                <AnimatePresence mode="wait">
                                                    <motion.div
                                                        key={quoteIndex}
                                                        initial={{ opacity: 0, x: 20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: -20 }}
                                                        transition={{ duration: 0.5 }}
                                                        className="flex flex-col"
                                                    >
                                                        <div className="flex justify-end mb-4 md:mb-6">
                                                            <div className="flex flex-col items-end border-r-2 border-primary/20 pr-4">
                                                                <p className="text-[8px] font-black uppercase tracking-[0.2em] text-primary/60 leading-none mb-1">Source Node</p>
                                                                <p className="text-xs md:text-sm font-black text-primary tracking-tight">
                                                                    {quotes[quoteIndex].author}
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div className="relative">
                                                            <Quote className="absolute -top-4 -left-2 w-8 md:w-10 h-8 md:h-10 text-primary/5 -z-10" />
                                                            <p className="text-base md:text-xl font-serif italic text-primary leading-tight tracking-tight text-right pr-2">
                                                                "{quotes[quoteIndex].text}"
                                                            </p>
                                                        </div>
                                                    </motion.div>
                                                </AnimatePresence>
                                            </div>

                                            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-auto">
                                                <div className="p-3 md:p-4 bg-muted/50 rounded-2xl border border-border/50">
                                                    <div className="flex items-center justify-between mb-1">
                                                        <p className="text-[7px] font-black uppercase tracking-wider text-primary/60">Engage Rate</p>
                                                        <TrendingUp className="w-2.5 h-2.5 text-emerald-600" />
                                                    </div>
                                                    <p className="text-lg md:text-xl font-black text-primary">84.2%</p>
                                                </div>
                                                <div className="p-3 md:p-4 bg-muted/50 rounded-2xl border border-border/50">
                                                    <div className="flex items-center justify-between mb-1">
                                                        <p className="text-[7px] font-black uppercase tracking-wider text-primary/60">Trends</p>
                                                        <Zap className="w-2.5 h-2.5 text-primary" />
                                                    </div>
                                                    <p className="text-base md:text-xl font-black text-primary truncate">Sci-Fi ↑</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-primary text-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between shadow-2xl shadow-primary/20 relative overflow-hidden group">
                                        <div className="relative z-10">
                                            <div className="flex items-center justify-between mb-6 md:mb-8">
                                                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                                                    <TrendingUp className="w-5 h-5 text-secondary" />
                                                </div>
                                                <div className="flex items-center gap-2 px-2.5 py-1 bg-white/10 rounded-full">
                                                    <span className="w-1 h-1 rounded-full bg-secondary animate-pulse" />
                                                    <span className="text-[8px] font-bold uppercase tracking-widest text-secondary/80">Real-Time Revenue</span>
                                                </div>
                                            </div>

                                            <div className="h-[220px] md:h-[260px] relative overflow-hidden">
                                                {isLoading ? (
                                                    <div className="space-y-3">
                                                        {[1, 2, 3, 4].map(i => <div key={i} className="h-10 bg-white/5 rounded-lg animate-pulse" />)}
                                                    </div>
                                                ) : (
                                                    <div className="flex flex-col gap-3 md:gap-4">
                                                        {transactions.slice(0, 6).map((item, idx) => (
                                                            <div key={idx} className="flex items-center justify-between border-b border-white/5 pb-2.5 last:border-0 text-left">
                                                                <div className="flex flex-col max-w-[120px]">
                                                                    <span className="text-[10px] md:text-[11px] font-black text-white leading-none truncate">{item.t}</span>
                                                                    <span className="text-[8px] font-bold text-white/70 uppercase truncate">{item.n}</span>
                                                                </div>
                                                                <div className="text-right">
                                                                    <span className="text-[11px] md:text-sm font-black text-secondary">+$ {item.a}</span>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="relative z-10 pt-4 mt-auto border-t border-white/20 flex items-center justify-between">
                                            <p className="text-[10px] font-bold text-white/70 uppercase">Verified Royalty Stream</p>
                                            <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Premium Decal — right side */}
            <div className="absolute bottom-24 right-4 2xl:right-8 bg-primary p-5 rounded-[2rem] shadow-2xl border border-emerald-900/30 animate-float hidden xl:block z-20" style={{ animationDelay: '2.5s' }}>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center border border-secondary/20">
                        <Globe className="text-secondary w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-[9px] text-secondary font-black uppercase tracking-[0.3em] mb-1">Live Distribution</p>
                        <p className="text-lg font-bold text-white tracking-tight">40,000+ Retailers</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
