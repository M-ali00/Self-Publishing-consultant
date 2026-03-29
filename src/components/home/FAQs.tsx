"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        q: "Who keeps the rights to my book?",
        a: "You retain 100% of your creative and legal rights. We act purely as your service provider and consultant. We do not take any percentage of your rights or ownership."
    },
    {
        q: "How long does the publishing process take?",
        a: "The timeline varies depending on the services required (e.g., developmental editing vs. just formatting). Typically, a full suite of services from raw manuscript to published book takes between 3 to 6 months."
    },
    {
        q: "How do I get paid from sales?",
        a: "All sales accounts (Amazon KDP, IngramSpark, etc.) are set up in your name. Royalties are paid directly into your designated bank account by the retailers. We don't touch your money."
    },
    {
        q: "Do you guarantee book sales?",
        a: "While we employ industry-leading marketing strategies and provide you with all the tools for a successful launch, no ethical publisher or consultant can guarantee specific sales numbers, as the market ultimately decides."
    },
    {
        q: "Can I choose which services I need?",
        a: "Absolutely. We offer an omnichannel solution, but our services are fully modular. You can pick and choose exactly what you need, whether it's just cover design or a complete launch strategy."
    }
];

export const FAQs = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 md:py-32 relative overflow-hidden bg-transparent">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-6">Clarity & Transparency</h2>
                    <h3 className="text-4xl md:text-5xl font-black tracking-tighter leading-none mb-6 text-primary">
                        Frequently Asked <span className="font-serif italic text-primary-light">Questions.</span>
                    </h3>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div 
                            key={idx} 
                            className={`border ${openIndex === idx ? 'border-primary shadow-md' : 'border-border'} rounded-2xl bg-white/40 backdrop-blur-sm overflow-hidden transition-all duration-300`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                            >
                                <span className={`font-bold text-lg tracking-tight ${openIndex === idx ? 'text-primary' : 'text-foreground'}`}>
                                    {faq.q}
                                </span>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openIndex === idx ? 'bg-primary text-white' : 'bg-primary/5 text-primary'}`}>
                                    {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-foreground/70 font-medium leading-relaxed">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
