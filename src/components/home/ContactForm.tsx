"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { submitContactForm } from "@/app/actions";

export const ContactForm = () => {
    const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        
        const form = e.currentTarget;
        const formData = new FormData(form);
        
        const data = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            genre: formData.get("genre") as string,
            message: formData.get("message") as string,
        };
        
        try {
            const result = await submitContactForm(data);
            
            if (result.success) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section className="py-24 md:py-32 relative overflow-hidden bg-white text-primary">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
                    
                    {/* Left: Heading and Info */}
                    <div className="lg:col-span-5 text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-[10px] font-black text-secondary uppercase tracking-[0.3em] mb-4">Direct Communication</h2>
                            <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-none text-primary mb-8 md:mb-10">
                                Let's Build Your <br />
                                <span className="font-serif italic text-primary-light">Literary Empire.</span>
                            </h3>
                            
                            <p className="text-lg text-primary/60 font-medium mb-12 leading-relaxed">
                                Ready to take the leap into professional publishing? Our team of experts is standing by to turn your manuscript into a global bestseller.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary transition-all group-hover:bg-primary group-hover:text-white border border-primary/10">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                    <p className="text-sm font-bold tracking-tight">100% Confidential consultation</p>
                                </div>
                                <div className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary transition-all group-hover:bg-primary group-hover:text-white border border-primary/10">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                    <p className="text-sm font-bold tracking-tight">Strategy tailored to your genre</p>
                                </div>
                                <div className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary transition-all group-hover:bg-primary group-hover:text-white border border-primary/10">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                    <p className="text-sm font-bold tracking-tight">Global distribution insights</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: The Form */}
                    <div className="lg:col-span-7">
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-primary text-white rounded-[2rem] p-8 md:p-12 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden"
                        >
                            {/* Abstract background graphics */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
                            
                            {status === "success" ? (
                                <div className="py-12 text-center relative z-10">
                                    <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 className="w-10 h-10 text-secondary" />
                                    </div>
                                    <h4 className="text-2xl font-bold mb-2">Message Sent Successfully!</h4>
                                    <p className="text-white/60 font-medium">Thank you for reaching out. We'll be in touch within 24 hours.</p>
                                    <button 
                                        onClick={() => setStatus("idle")} 
                                        className="mt-8 text-xs font-bold uppercase tracking-widest text-secondary hover:underline"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                                            <input 
                                                type="text" 
                                                name="name"
                                                required
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-secondary transition-all font-medium text-white placeholder:text-white/20 capitalize" 
                                                placeholder="William Shakespeare" 
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">Email Address</label>
                                            <input 
                                                type="email" 
                                                name="email"
                                                required
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-secondary transition-all font-medium text-white placeholder:text-white/20" 
                                                placeholder="william@stratford.com" 
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">Manuscript Topic / Genre</label>
                                        <select 
                                            name="genre"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-secondary transition-all font-medium text-white appearance-none"
                                        >
                                            <option className="bg-primary text-white">Fiction / Novel</option>
                                            <option className="bg-primary text-white">Non-Fiction</option>
                                            <option className="bg-primary text-white">Biography / Memoir</option>
                                            <option className="bg-primary text-white">Academic / Research</option>
                                            <option className="bg-primary text-white">Other</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">Your Message</label>
                                        <textarea 
                                            name="message"
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-secondary transition-all font-medium text-white placeholder:text-white/20 h-40 resize-none" 
                                            placeholder="Tell us about your masterpiece..." 
                                        />
                                    </div>
                                    
                                    <button 
                                        type="submit" 
                                        disabled={status === "loading"}
                                        className="w-full bg-secondary text-primary font-black py-5 rounded-xl flex items-center justify-center gap-3 hover:bg-white transition-all transform hover:scale-[1.02] shadow-xl disabled:opacity-50 disabled:cursor-not-allowed group uppercase tracking-widest text-xs"
                                    >
                                        {status === "loading" ? "Processing..." : (
                                            <>
                                                Initialize Publication <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                    
                                    {status === "error" && (
                                        <p className="text-red-400 text-xs font-bold text-center mt-4">Something went wrong. Please try again or email us directly.</p>
                                    )}
                                </form>
                            )}
                        </motion.div>
                    </div>

                </div>

            </div>
        </section>
    );
};
