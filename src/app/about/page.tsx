"use client";

import { motion } from "framer-motion";
import {
    BookOpen, Users, Award, Shield,
    Library, Sparkles, Globe, Zap,
    Target, Quote, ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function About() {
    return (
        <main className="min-h-screen bg-transparent pt-32 pb-24">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Cinematic Hero */}
                <header className="mb-32 relative">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8"
                            >
                                <Sparkles size={14} /> The Vanguard of Independent Publishing
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-6xl md:text-8xl font-black tracking-tighter text-primary mb-10 leading-[0.85]"
                            >
                                Building <br />
                                <span className="font-serif italic text-primary-light">Global Legacies.</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-foreground/80 text-xl font-medium leading-relaxed mb-12"
                            >
                                We founded Self-Publishing Consultant to dismantle the gatekeeper model. Our mission is to provide every author with the high-grade industrial infrastructure previously reserved for the world's largest publishing houses.
                            </motion.p>

                            <div className="grid grid-cols-2 gap-10 py-10 border-t border-border">
                                <div>
                                    <p className="text-4xl font-black text-primary">180+</p>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 mt-1">Territories Reached</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-black text-primary-light">40k+</p>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 mt-1">Retail Partners</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-border"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800&auto=format&fit=crop"
                                    alt="Library and Wisdom"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#022c22]/80 via-transparent to-transparent" />
                                <div className="absolute bottom-10 left-10 right-10 p-8 rounded-3xl bg-black/40 backdrop-blur-md border border-white/10">
                                    <Quote className="text-secondary mb-4" size={32} />
                                    <p className="text-white text-xl font-serif italic mb-4 leading-tight">
                                        "The future of literature belongs to those who own their distribution."
                                    </p>
                                    <p className="text-secondary text-[10px] font-black uppercase tracking-[0.3em]">SPC Founding Manifesto</p>
                                </div>
                            </motion.div>

                            {/* Floating Stats */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-10 -left-10 p-8 rounded-3xl bg-white shadow-2xl border border-border hidden xl:block"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-primary shadow-lg shadow-primary/20 flex items-center justify-center text-white">
                                        <Award size={24} />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-black text-primary">#1</p>
                                        <p className="text-[8px] font-black uppercase tracking-widest text-foreground/60">Industry Rank</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </header>

                {/* Our Philosophy Grid */}
                <section className="mb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-1">
                            <span className="text-[10px] font-black text-primary-light uppercase tracking-[0.3em] mb-4 block">The Philosophy</span>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-primary mb-6">Why We Scale Authors.</h2>
                            <p className="text-foreground/80 font-medium leading-relaxed mb-8">
                                Most consultants focus on "formatting." We focus on **Commercial Velocity**. We treat your book as a global product, ensuring every algorithmic lever is pulled in your favor.
                            </p>
                            <Link href="/services" className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs group">
                                View Our Methodology <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    icon: <Shield className="w-6 h-6" />,
                                    title: "Absolute Rights",
                                    desc: "You maintain 100% of your intellectual property and creative control. Forever."
                                },
                                {
                                    icon: <Zap className="w-6 h-6" />,
                                    title: "Algorithmic Precision",
                                    desc: "Our systems identify the exact categories and keywords required to trigger retail visibility."
                                },
                                {
                                    icon: <Globe className="w-6 h-6" />,
                                    title: "Global Mastery",
                                    desc: "Reach 40,000+ bookstores and libraries in 180+ countries via the IngramSpark network."
                                },
                                {
                                    icon: <Target className="w-6 h-6" />,
                                    title: "Launch Engineering",
                                    desc: "We don't just 'list' books; we engineer day-one sales momentum built on market data."
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="p-8 rounded-[2rem] border border-border bg-white hover:border-primary/20 hover:shadow-xl transition-all"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 border border-primary/10">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-xl font-bold text-primary mb-3">{item.title}</h4>
                                    <p className="text-sm text-foreground/60 font-medium leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Impact Statement */}
                <section className="bg-primary rounded-[4rem] p-12 md:p-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid opacity-10" />
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
                                Higher Standards for <br />
                                <span className="font-serif italic text-secondary">Every Word.</span>
                            </h2>
                            <p className="text-white/90 text-lg font-medium leading-relaxed mb-10 max-w-xl">
                                Whether you're a first-time novelist or a multi-title business leader, our infrastructure scales to meet your exact ambition. No compromises. No gatekeepers.
                            </p>
                            <Link href="/contact" className="px-10 py-5 bg-secondary text-primary font-black text-xs uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-xl shadow-primary/20">
                                Connect With Our Experts
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { val: "42", label: "Bestsellers" },
                                { val: "12k+", label: "Reviews" },
                                { val: "15M", label: "Words Polished" },
                                { val: "24/7", label: "Global Reach" }
                            ].map((s, i) => (
                                <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                    <p className="text-4xl font-black text-secondary mb-1">{s.val}</p>
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}
