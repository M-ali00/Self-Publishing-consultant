"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Zap, Globe, Shield, ArrowRight, Book, Megaphone } from "lucide-react";
import Link from "next/link";

const publishingTiers = [
    {
        name: "Launchpad",
        price: "299",
        desc: "Essential starting point for new authors.",
        features: [
            "Proofreading Only",
            "eBook Formatting Only",
            "Premium Custom Cover Design",
            "Standard Author Support",
            "Final Author PDF / Galley"
        ],
        popular: false
    },
    {
        name: "Catalyst",
        price: "699",
        desc: "Everything you need for a solid multi-format launch.",
        features: [
            "Proofreading & Typesetting",
            "eBook + Paperback Formatting",
            "Premium Custom Cover Design",
            "4 Blogs & Articles",
            "1 Month Social Media Promo (12 posts)"
        ],
        popular: true
    },
    {
        name: "Ascension",
        price: "1,449",
        desc: "Expand to hardcover and extend promotional reach.",
        features: [
            "Proofreading & Typesetting",
            "eBook + Paperback + Hardcover",
            "Concierge Author Support",
            "6 Blogs & Articles",
            "3 Months Social Media Promo (15 posts/mo)"
        ],
        popular: false
    },
    {
        name: "Vanguard",
        price: "2,499",
        desc: "The standard choice for full comprehensive distribution.",
        features: [
            "Proofreading & Typesetting",
            "eBook + Paperback + Hardcover",
            "Concierge Author Support",
            "8 Blogs & Articles",
            "6 Months Social Media Promo (18 posts/mo)"
        ],
        popular: false
    },
    {
        name: "Executive",
        price: "2,999",
        desc: "Premium developmental editing and Amazon A+ content.",
        features: [
            "Developmental Editing Included",
            "eBook + Paperback + Hardcover",
            "Amazon A+ Content Setup",
            "10 Blogs & Articles",
            "9 Months Social Media Promo (20 posts/mo)"
        ],
        popular: false
    },
    {
        name: "Dominion",
        price: "4,999",
        desc: "Advanced 3D design and year-long promotional backing.",
        features: [
            "Advanced Developmental Editing",
            "3D Custom Cover Design",
            "Premium Concierge Support",
            "12 Blogs & Articles",
            "12 Months Social Media Promo (24 posts/mo)"
        ],
        popular: false
    },
    {
        name: "Apex Blueprint",
        price: "7,884",
        desc: "White-glove executive publishing for ultimate scale.",
        features: [
            "Advanced Editing (Structure, Plot, Characters)",
            "3D Custom Cover Design",
            "Amazon A+ Content",
            "16 Blogs & Articles",
            "15 Months Social Media Promo (26 posts/mo)"
        ],
        popular: false
    }
];

const marketingTiers = [
    {
        name: "Ignite Module",
        price: "499",
        desc: "Foundational digital footprint for your new release.",
        features: [
            "4 Blogs & Articles",
            "3 Months Social Media Promo (12 posts/mo)",
            "1 Month Amazon Optimization",
            "Author Intro Video"
        ],
        popular: false
    },
    {
        name: "Velocity",
        price: "999",
        desc: "Accelerate your discoverability across retailers.",
        features: [
            "6 Blogs & Articles",
            "3 Months Social Media Promo (12 posts/mo)",
            "3 Months Amazon Optimization",
            "Author Intro Video + 1 Press Release Draft"
        ],
        popular: false
    },
    {
        name: "Authority Build",
        price: "1,999",
        desc: "Establish a complete author brand and website.",
        features: [
            "8 Blogs & Articles",
            "6 Months Social Media Promo (15 posts/mo)",
            "6 Months Amazon Optimization",
            "Animated Video Trailer & Bookmark Designs",
            "One Page Author Website Setup"
        ],
        popular: true
    },
    {
        name: "Market Dominance",
        price: "3,499",
        desc: "Dedicated marketing campaigns and email sequences.",
        features: [
            "10 Blogs & Articles",
            "9 Months Social Media & Amazon Optimization",
            "1 Email Newsletter Campaign",
            "3 Months SEO Campaign",
            "Five Page Custom Website"
        ],
        popular: false
    },
    {
        name: "Bestseller Matrix",
        price: "6,000",
        desc: "High-level PR drafts and extended SEO strategies.",
        features: [
            "12 Blogs & Articles",
            "12 Months Social Media & Amazon Optimization",
            "2 Email Newsletter Campaigns",
            "6 Months SEO Campaign",
            "Five Page Custom Website + 1 Year Hosting"
        ],
        popular: false
    },
    {
        name: "Global Impact",
        price: "9,550",
        desc: "Dominate search rankings and reader inboxes.",
        features: [
            "15 Blogs & Articles",
            "12 Months Social Media (24 posts/mo)",
            "3 Email Newsletter Campaigns",
            "9 Months SEO Campaign",
            "Five Page Custom Website + 3 Years Hosting"
        ],
        popular: false
    },
    {
        name: "The Syndicate",
        price: "14,350",
        desc: "The absolute pinnacle of book marketing and global PR.",
        features: [
            "18 Blogs & Articles",
            "15 Months Social Media & Amazon Optimization",
            "Multiple Email Newsletter Campaigns",
            "12 Months SEO Campaign",
            "Full Custom Website + 5 Years Hosting",
            "5 Press Release Drafts"
        ],
        popular: false
    }
];

export default function PricingPage() {
    const [activeTab, setActiveTab] = useState<"publishing" | "marketing">("publishing");

    const currentTiers = activeTab === "publishing" ? publishingTiers : marketingTiers;

    return (
        <main className="min-h-screen pt-32 pb-24 bg-transparent">
            {/* Hero Section */}
            <section className="text-center px-6 max-w-4xl mx-auto mb-16 relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="inline-block px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8"
                >
                    <span className="text-sm font-bold text-primary uppercase tracking-widest">Global Scalability</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-primary leading-tight"
                >
                    Packages for every <br />
                    <span className="font-serif italic text-primary-light">Author Journey.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl text-foreground/80 font-medium leading-relaxed"
                >
                    Choose from our completely reimagined architectural packages. From foundational publishing to absolute market dominance.
                </motion.p>
            </section>

            {/* Toggle Switch */}
            <div className="flex justify-center mb-16 px-6">
                <div className="bg-muted p-2 rounded-2xl flex items-center shadow-inner relative border border-border w-full max-w-md">
                    <button
                        onClick={() => setActiveTab("publishing")}
                        className={`flex-1 py-4 text-sm font-bold tracking-widest uppercase rounded-xl transition-all duration-300 relative z-10 flex items-center justify-center gap-2 ${activeTab === "publishing" ? "text-white" : "text-foreground/50 hover:text-primary"}`}
                    >
                        <Book size={16} /> Publishing
                    </button>
                    <button
                        onClick={() => setActiveTab("marketing")}
                        className={`flex-1 py-4 text-sm font-bold tracking-widest uppercase rounded-xl transition-all duration-300 relative z-10 flex items-center justify-center gap-2 ${activeTab === "marketing" ? "text-white" : "text-foreground/50 hover:text-primary"}`}
                    >
                        <Megaphone size={16} /> Marketing
                    </button>
                    {/* Sliding Background */}
                    <motion.div
                        initial={false}
                        animate={{ left: activeTab === "publishing" ? "0.5rem" : "50%", right: activeTab === "marketing" ? "0.5rem" : "50%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="absolute top-2 bottom-2 bg-primary rounded-xl shadow-lg z-0"
                        style={{ width: "calc(50% - 0.5rem)" }}
                    />
                </div>
            </div>

            {/* Pricing Tiers Grid */}
            <section className="max-w-[1400px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {currentTiers.map((tier, i) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className={`relative flex flex-col p-8 rounded-[2rem] transition-all bg-white border ${tier.popular ? 'border-primary shadow-xl ring-4 ring-primary/10 shadow-primary/10 scale-[1.02]' : 'border-border hover:shadow-2xl hover:border-primary/30'}`}
                        >
                            {tier.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-signature-gradient text-white text-[10px] font-black px-6 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-2xl font-bold tracking-tighter mb-2 text-primary">{tier.name}</h3>
                                <p className="text-xs font-medium text-foreground/80 leading-relaxed h-8">{tier.desc}</p>
                            </div>

                            <div className="mb-8 flex items-baseline gap-1 pb-8 border-b border-border">
                                <span className="text-4xl font-black tracking-tighter text-primary">${tier.price}</span>
                            </div>

                            <div className="space-y-4 mb-10 flex-grow">
                                {tier.features.map(feature => (
                                    <div key={feature} className="flex gap-3 items-start">
                                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 border border-primary/20">
                                            <Check className="w-3 h-3 text-primary stroke-[3]" />
                                        </div>
                                        <span className="text-xs font-bold leading-relaxed text-foreground/80">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Link 
                                href={`/contact?package=${encodeURIComponent(tier.name)}`}
                                className={`w-full py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all text-center flex items-center justify-center ${tier.popular ? 'btn-primary shadow-lg shadow-primary/30' : 'bg-primary/5 text-primary border border-primary/20 hover:bg-primary hover:text-white'}`}
                            >
                                Select Package
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Feature Grid */}
            <section className="mt-32 py-24 bg-primary/5 border-y border-border">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    {[
                        { icon: Zap, title: "Neural Sync", desc: "Metadata updates reflect in 24h across all retailers." },
                        { icon: Globe, title: "Global Access", desc: "No extra fees for international distribution." },
                        { icon: Shield, title: "Total Rights", desc: "Keep 100% of your rights and creative control." },
                        { icon: ArrowRight, title: "Easy Migration", desc: "Switch from your current publisher in minutes." }
                    ].map((feature, i) => (
                        <div key={i} className="group">
                            <div className="w-16 h-16 bg-white rounded-[1.5rem] flex items-center justify-center mx-auto mb-6 shadow-xl border border-border group-hover:scale-110 transition-transform">
                                <feature.icon className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-primary tracking-tighter">{feature.title}</h4>
                            <p className="text-sm font-medium text-foreground/80 leading-relaxed max-w-[200px] mx-auto">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
