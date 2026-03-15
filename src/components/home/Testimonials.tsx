"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "L. K. Robinson",
        role: "Historical Fiction Author",
        text: "The distribution network is unmatched. My books were available globally in hours, not weeks.",
    },
    {
        name: "James Chen",
        role: "Tech Thought Leader",
        text: "Automated royalties changed the game for our publishing house. Absolute transparency.",
    },
    {
        name: "Sarah Jenkins",
        role: "Bestselling Novelist",
        text: "Exceptional design and market positioning. They understand how authors think.",
    },
    {
        name: "Marcus Thorne",
        role: "Business Author",
        text: "The metadata optimization alone doubled my daily organic reach. Pure publishing engineering.",
    },
    {
        name: "Elena Rossi",
        role: "Cookbook Author",
        text: "Professional formatting for complex layouts that actually work on Kindle and print.",
    },
    {
        name: "Thomas Wright",
        role: "Biography Author",
        text: "A truly modern platform for writers. They handle the tech so I can handle the story.",
    },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="bento-card relative flex flex-col justify-between h-[320px] w-[350px] p-10 bg-white/80 backdrop-blur-3xl shadow-2xl border border-primary/5 group mx-4 shrink-0 transition-transform duration-500 hover:scale-[1.02] hover:border-primary/20">
        <div className="relative z-10">
            <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-8 border border-primary/10">
                <span className="text-2xl font-serif italic text-primary opacity-50">"</span>
            </div>
            <p className="text-primary/90 text-lg font-bold leading-relaxed tracking-tight line-clamp-4">
                {testimonial.text}
            </p>
        </div>

        <div className="relative z-10">
            <h4 className="text-xl font-black text-primary tracking-tighter mb-1">{testimonial.name}</h4>
            <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-primary">{testimonial.role}</p>
        </div>
    </div>
);

export const Testimonials = () => {
    return (
        <section className="py-32 bg-transparent relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-24">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
                    <div className="max-w-3xl">
                        <h2 className="text-sm font-bold text-primary uppercase tracking-[0.4em] mb-6">User Verdicts</h2>
                        <h3 className="text-6xl lg:text-8xl font-black tracking-tighter leading-[0.85] text-primary">
                            Trusted <br />
                            <span className="font-serif italic text-primary-light">Perspective.</span>
                        </h3>
                    </div>
                </div>
            </div>

            <div className="relative flex overflow-hidden marquee-row select-none py-10">
                <motion.div
                    className="flex shrink-0 animate-scroll"
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <TestimonialCard key={i} testimonial={t} />
                    ))}
                </motion.div>

                {/* Gradient Masks */}
                <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background/80 via-background/20 to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background/80 via-background/20 to-transparent z-10" />
            </div>
        </section>
    );
};
