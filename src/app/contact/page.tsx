"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, Clock, Zap, LifeBuoy } from "lucide-react";
import { TicketModal } from "@/components/support/TicketModal";
import { cn } from "@/lib/utils";

export default function Contact() {
    const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);

    return (
        <div className="pt-32 pb-24 bg-transparent min-h-screen">
            <div className="container mx-auto px-6 max-w-7xl">
                <header className="mb-20 text-center lg:text-left flex flex-col lg:flex-row justify-between lg:items-end gap-10">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6"
                        >
                            <Zap size={14} className="text-secondary fill-secondary" /> Direct Strategic Access
                        </motion.div>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-primary mb-8 leading-[0.85]">
                            Initiate <br />
                            <span className="font-serif italic text-primary-light text-gradient-primary">The Partnership.</span>
                        </h1>
                        <p className="text-foreground/80 text-xl font-medium leading-relaxed">
                            Whether you need a rapid manuscript assessment or an enterprise distribution setup, our strategist team is online to engineer your success.
                        </p>
                    </div>
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsTicketModalOpen(true)}
                        className="flex items-center justify-center gap-3 px-10 py-5 bg-white text-primary hover:bg-primary hover:text-white transition-all rounded-2xl font-black tracking-widest uppercase text-xs border border-primary/10 shadow-xl shadow-primary/5 shrink-0"
                    >
                        <LifeBuoy size={18} /> Open Support Ticket
                    </motion.button>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-12 xl:col-span-5 space-y-8 order-2 lg:order-1">
                        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-1 gap-6">
                            {[
                                { icon: <MapPin />, title: "HQ Command", lines: ["100 Innovation Drive", "San Francisco, CA 94111"], color: "bg-primary" },
                                { icon: <Phone />, title: "Direct Lines", lines: ["+44 7922 656521 (WhatsApp)", "1-800-PUBLISH (US)"], color: "bg-primary-light" },
                                { icon: <Mail />, title: "Comms Portal", lines: ["selfpublishingconsultants@gmail.com", "strategist@spc.io"], color: "bg-primary" },
                            ].map((item, i) => (
                                <motion.div 
                                    key={i} 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="flex xl:flex-row flex-col gap-6 p-8 bg-white/60 backdrop-blur-xl rounded-[2rem] border border-border group hover:shadow-2xl hover:border-primary/20 transition-all duration-500"
                                >
                                    <div className={cn("p-4 rounded-2xl shadow-lg flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-500", item.color)}>
                                        {item.icon}
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40 mb-3">{item.title}</h3>
                                        {item.lines.map((line, j) => <p key={j} className="text-primary font-bold text-base tracking-tight">{line}</p>)}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="p-8 rounded-[2rem] bg-secondary/10 border border-secondary/20 relative overflow-hidden">
                            <Zap className="absolute -right-4 -bottom-4 w-24 h-24 text-secondary/20 rotate-12" />
                            <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-2">Response Protocol</h4>
                            <p className="text-primary/70 text-sm font-medium">94% of strategic inquiries receive a baseline assessment within 4 business hours.</p>
                        </div>
                    </div>

                    <div className="lg:col-span-12 xl:col-span-7 bg-signature-gradient p-1 md:p-1.5 rounded-[3rem] shadow-2xl relative order-1 lg:order-2 overflow-hidden">
                        <div className="bg-primary p-8 md:p-16 rounded-[2.85rem] border border-white/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
                            <h2 className="text-3xl md:text-4xl font-black text-white mb-10 tracking-tighter">Strategic Inquiry <span className="text-secondary font-serif italic">Details.</span></h2>
                            
                            <form className="space-y-8 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="block text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">Full Identity</label>
                                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-secondary/50 focus:bg-white/10 transition-all text-sm font-medium placeholder:text-white/20" placeholder="e.g. Alexander Knight" required />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="block text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">Email Portal</label>
                                        <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-secondary/50 focus:bg-white/10 transition-all text-sm font-medium placeholder:text-white/20" placeholder="name@domain.com" required />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="block text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">Architecture Path</label>
                                    <div className="relative">
                                        <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-secondary/50 focus:bg-white/10 transition-all text-sm font-medium cursor-pointer appearance-none">
                                            <option className="bg-primary">Manuscript Assessment</option>
                                            <option className="bg-primary">Full Global Distribution</option>
                                            <option className="bg-primary">Executive Branding & Cover</option>
                                            <option className="bg-primary">Marketing Multiplier (SEO/Ads)</option>
                                            <option className="bg-primary">General Consultation</option>
                                        </select>
                                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                                            <Zap size={14} />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="block text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">Project Brief</label>
                                    <textarea className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-secondary/50 focus:bg-white/10 transition-all h-40 resize-none text-sm font-medium placeholder:text-white/20" placeholder="Detail your book's genre, word count, and mission objectives..." required></textarea>
                                </div>
                                <button className="w-full py-6 bg-secondary text-primary font-black tracking-[0.2em] uppercase text-xs rounded-2xl shadow-xl shadow-secondary/10 hover:bg-white transition-all flex items-center justify-center gap-4 active:scale-95 group">
                                    <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Transmit Strategic Request
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <TicketModal isOpen={isTicketModalOpen} onClose={() => setIsTicketModalOpen(false)} />
        </div>
    );
}
