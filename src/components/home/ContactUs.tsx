"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Image from "next/image";

export const ContactUs = () => {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden bg-primary text-white">
            <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-[10px] font-black text-secondary uppercase tracking-[0.3em] mb-4">Direct Access</h2>
                    <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-none text-white">
                        Start Your <span className="font-serif italic text-white/80">Publishing Journey.</span>
                    </h3>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative w-full max-w-5xl mx-auto rounded-[2rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-white/10"
                >
                    <div className="aspect-[16/10] relative">
                        <Image 
                            src="/images/manuscript.png" 
                            alt="Manuscript Interior Preview" 
                            fill 
                            className="object-cover" 
                            priority
                        />
                        {/* Overlay to give it a premium feel */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                    </div>
                </motion.div>

                <div className="mt-16 text-center">
                    <p className="text-white/60 text-lg max-w-2xl mx-auto font-medium leading-relaxed italic">
                        "Every page is structured with mathematical precision, ensuring your readers enjoy a flawless aesthetic experience from first word to last."
                    </p>
                </div>
            </div>
        </section>
    );
};
