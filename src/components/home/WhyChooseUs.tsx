"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Target, TrendingUp, Award } from "lucide-react";

export const WhyChooseUs = () => {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden bg-primary/5">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center uppercase">
                    {/* Left: Content and Features */}
                    <div>
                        <div className="mb-12">
                            <h2 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-6">Why Choose Us</h2>
                            <h3 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight mb-8 text-primary">
                                Unmatched Expertise. <br />
                                <span className="font-serif italic text-primary-light lowercase">Guaranteed Results.</span>
                            </h3>
                            <p className="text-foreground/80 text-lg font-medium max-w-xl normal-case">
                                We don't just publish books; we engineer market leaders. Our proprietary systems ensure your work reaches its maximum potential.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 normal-case">
                            {[
                                { icon: Shield, title: "100% Rights Kept", desc: "You retain full creative and legal ownership of your work, always." },
                                { icon: Target, title: "Precision Targeting", desc: "Data-driven marketing that puts your book in front of hungry readers." },
                                { icon: Award, title: "Elite Quality", desc: "Industry-leading editorial and design standards that rival Big Five publishers." },
                                { icon: TrendingUp, title: "Maximum Royalties", desc: "Transparent accounting and direct payouts for every single sale." }
                            ].map((feature, idx) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white/60 backdrop-blur-md border border-primary/10 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary">
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-lg font-bold text-primary mb-2 line-clamp-1">{feature.title}</h4>
                                    <p className="text-foreground/70 font-medium leading-relaxed text-sm">
                                        {feature.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Transparent Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative group mr-[-40px]"
                    >
                        <div className="relative z-10 transition-transform duration-700 group-hover:scale-105">
                            <img 
                                src="/images/whychoseus.png" 
                                alt="Why Choose Us"
                                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(20,184,166,0.3)]"
                            />
                        </div>
                        
                        {/* Abstract background blobs */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-[100px] -z-10 group-hover:bg-primary/10 transition-colors" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
