"use client";

import React from "react";
import { motion } from "framer-motion";
import { Scale, AlertCircle, CheckCircle, HelpCircle } from "lucide-react";

export default function TermsPage() {
    return (
        <main className="min-h-screen">

            <section className="relative pt-40 pb-20 overflow-hidden">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-primary leading-[0.85]">Terms of <span className="font-serif italic text-primary-light">Service.</span></h1>
                        <p className="text-xl text-foreground/60 font-medium">Last updated: February 26, 2026</p>
                    </motion.div>

                    <div className="prose prose-lg max-w-none text-foreground/70 space-y-12">
                        <section>
                            <h2 className="text-3xl font-bold text-[#064e3b] mb-6 flex items-center gap-3">
                                <Scale className="text-primary w-8 h-8" /> 1. Acceptance of Terms
                            </h2>
                            <p className="leading-relaxed">
                                By accessing or using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold text-[#064e3b] mb-6 flex items-center gap-3">
                                <AlertCircle className="text-primary w-8 h-8" /> 2. Use of Services
                            </h2>
                            <p className="leading-relaxed">
                                You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account information.
                            </p>
                        </section>

                        <section className="bg-white/40 backdrop-blur-xl p-10 rounded-3xl border border-border">
                            <h2 className="text-3xl font-bold text-[#064e3b] mb-6 flex items-center gap-3">
                                <CheckCircle className="text-primary w-8 h-8" /> 3. Intellectual Property
                            </h2>
                            <p className="leading-relaxed">
                                All content and materials available on our website are the property of Self-Publishing Consultant or its licensors and are protected by intellectual property laws.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold text-[#064e3b] mb-6 flex items-center gap-3">
                                <HelpCircle className="text-primary w-8 h-8" /> 4. Limitation of Liability
                            </h2>
                            <p className="leading-relaxed">
                                In no event shall Self-Publishing Consultant be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of our services.
                            </p>
                        </section>
                    </div>
                </div>
            </section>

        </main>
    );
}
