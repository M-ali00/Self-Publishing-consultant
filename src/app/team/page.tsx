"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail, Globe, Cpu, Zap, Shield, Users } from "lucide-react";

const teamMembers = [
    {
        name: "Andrew Bowen",
        role: "Founder & Chief Publishing Strategist",
        bio: "Andrew Bowen is the Founder & Chief Publishing Strategist with a mission to help authors publish impactful, high-quality books. He brings industry expertise in editing, design, distribution, and marketing to ensure every book reaches its full potential in the global marketplace.",
        image: "/images/team/andreww.png",
        specialization: "System Architecture",
        color: "text-primary"
    },
    {
        name: "Alan Edward",
        role: "Chief Executive Officer",
        bio: "Alan Edward is the Chief Executive Officer, responsible for driving the company’s vision, operations, and strategic growth. His leadership focuses on innovation, excellence, and empowering authors to succeed in the global publishing market.",
        image: "/images/team/Allen.png",
        specialization: "Editorial Mastery",
        color: "text-secondary"
    },
    {
        name: "Khaled Mohamed",
        role: "Chief Technology Officer",
        bio: "Khaled Mohamed is the Chief Technology Officer, overseeing the company’s technology strategy and digital systems. He focuses on innovation, security, and scalable solutions that support modern publishing and enhance the author experience.",
        image: "/images/team/khaled.png",
        specialization: "Network Logistics",
        color: "text-accent"
    },
    {
        name: "Sam Johnson",
        role: "Head of Production",
        bio: "Sam Johnson is the Head of Production and an award-winning visual communicator, leading the design studio to create cinematic book covers and strong author brands that stand out in global digital marketplaces.. He leads our design studio, creating cinematic book covers and author brands that dominate digital marketplaces.",
        image: "/images/team/sam-1.png",
        specialization: "Visual Identity",
        color: "text-primary"
    },
    {
        name: "Julian Vane",
        role: "Head of Rights & Legal",
        bio: "Intellectual property expert focusing on international licensing and sub-rights. Julian ensures our authors maintain absolute control over their creative assets.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        specialization: "Rights Optimization",
        color: "text-secondary"
    },
    {
        name: "Aria Novak",
        role: "Head of Marketing Analytics",
        bio: "Data scientist specializing in reader sentiment and market predictive modeling. Aria manages the high-ROAS advertising frameworks for our elite authors.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        specialization: "Growth Intelligence",
        color: "text-accent"
    }
];

export default function TeamPage() {
    return (
        <main className="min-h-screen bg-transparent">
            {/* Hero Section */}
            <section className="relative pt-48 pb-24 overflow-hidden text-center bg-transparent">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-grid -z-10 opacity-30" />
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8"
                    >
                        <Users className="w-4 h-4 text-primary" />
                        <span className="text-sm font-bold text-primary uppercase tracking-widest">The Core Collective</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter mb-10 leading-[0.85] text-primary"
                    >
                        Meet the minds behind <br />
                        <span className="font-serif italic text-primary-light">The Architecture.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-foreground/60 font-medium leading-relaxed"
                    >
                        A specialized cross-section of publishing veterans, data scientists, and creative architects dedicated to your global literary scale.
                    </motion.p>
                </div>
            </section>

            {/* Team Grid */}
            <section className="py-32 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] border border-border p-10 group hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-4"
                        >
                            <div className="relative mb-10">
                                <div className="aspect-square rounded-3xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl">
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" />
                                </div>
                                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-primary/10 backdrop-blur-xl rounded-2xl flex flex-col items-center justify-center p-2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100 border border-primary/20">
                                    <p className="text-[8px] font-black uppercase tracking-widest text-primary/40 leading-none mb-1">Status</p>
                                    <p className="text-xs font-black text-primary uppercase">Active</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <p className={`text-[10px] font-black uppercase tracking-[0.3em] mb-2 ${member.color}`}>
                                        {member.specialization}
                                    </p>
                                    <h3 className="text-3xl font-bold tracking-tighter text-[#064e3b]">{member.name}</h3>
                                    <p className="text-sm font-bold text-[#064e3b]/40 uppercase tracking-widest mt-1">{member.role}</p>
                                </div>

                                <p className="text-[#064e3b]/60 leading-relaxed font-medium">
                                    {member.bio}
                                </p>

                                <div className="pt-8 border-t border-border flex items-center gap-4">
                                    <button className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-[#064e3b]/30 hover:bg-primary/10 hover:text-primary transition-all">
                                        <Linkedin className="w-4 h-4" />
                                    </button>
                                    <button className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-[#064e3b]/30 hover:bg-primary/10 hover:text-primary transition-all">
                                        <Twitter className="w-4 h-4" />
                                    </button>
                                    <button className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-[#064e3b]/30 hover:bg-primary/10 hover:text-primary transition-all">
                                        <Mail className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Joining Section */}
            <section className="py-32 bg-[#022c22] text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-grid-white opacity-5 -z-0" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 italic font-serif">A multi-disciplinary node network.</h2>
                            <p className="text-white/60 text-xl font-medium leading-relaxed">
                                Our team operates as a high-velocity decentralized network of masters. We aren't just employees; we are owners of your success.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <div className="p-8 bg-white/5 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 text-center">
                                <p className="text-4xl font-bold text-primary mb-2">180+</p>
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">Partner Nodes</p>
                            </div>
                            <div className="p-8 bg-white/5 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 text-center">
                                <p className="text-4xl font-bold text-secondary mb-2">24/7</p>
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">System Monitoring</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
