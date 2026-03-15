"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen">

            <section className="relative pt-40 pb-20 overflow-hidden">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-primary leading-[0.85]">Privacy <span className="font-serif italic text-primary-light">Policy.</span></h1>
                        <p className="text-xl text-foreground/60 font-medium">Last updated: February 26, 2026</p>
                    </motion.div>

                    <div className="prose prose-lg max-w-none text-foreground/70 space-y-12">
                        <section>
                            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                                <Shield className="text-primary w-8 h-8" /> 1. Introduction
                            </h2>
                            <p className="leading-relaxed">
                                At Self-Publishing Consultant, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                                <Lock className="text-primary w-8 h-8" /> 2. Information We Collect
                            </h2>
                            <p className="leading-relaxed">
                                We collect information that you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, and any other information you choose to provide.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                                <Eye className="text-primary w-8 h-8" /> 3. How We Use Your Information
                            </h2>
                            <p className="leading-relaxed">
                                We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to protect our users and our services.
                            </p>
                        </section>

                        <section className="bg-white/40 backdrop-blur-xl p-10 rounded-3xl border border-border">
                            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                                <FileText className="text-primary w-8 h-8" /> 4. Data Security
                            </h2>
                            <p className="leading-relaxed">
                                We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
                            </p>
                        </section>
                    </div>
                </div>
            </section>

        </main>
    );
}
