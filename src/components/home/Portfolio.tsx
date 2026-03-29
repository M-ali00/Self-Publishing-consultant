"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const bookImages = [
    "/images/Books/1.jpg",
    "/images/Books/2.jpg",
    "/images/Books/3.jpg",
    "/images/Books/4.jpg",
    "/images/Books/5.jpg",
    "/images/Books/6.jpg",
    "/images/Books/7.jpg",
    "/images/Books/8.jpg",
    "/images/Books/9.jpg",
    "/images/Books/10.jpg",
];

const testimonials = [
    {
        quote: "The definitive guide for every aspiring author. A must-read for self-publishing success.",
        author: "Marilyn Ross",
        book: "The Self-Publishing Manual"
    },
    {
        quote: "A hilarious collection that perfectly captures the heart of stand-up comedy.",
        author: "Edward",
        book: "Jokey: Standup Comedy"
    },
    {
        quote: "Practical, actionable advice that changed the way I look at my finances forever.",
        author: "Andrew Bowen",
        book: "The Path to Financial Freedom"
    },
    {
        quote: "A touching and powerful exploration of motherhood and resilience.",
        author: "Gerry Winston",
        book: "MOM"
    },
    {
        quote: "The perfect bedtime companion for curious young minds. Beautifully illustrated.",
        author: "Bedtime Stories",
        book: "What are the stars?"
    },
    {
        quote: "A gripping thriller that kept me on the edge of my seat until the very last page.",
        author: "Scott Flynn",
        book: "Mastermind"
    },
    {
        quote: "An inspiring journey of faith and triumph over life's greatest obstacles.",
        author: "Patrick Fendrickson",
        book: "Overcomer"
    },
    {
        quote: "A dark and atmospheric mystery that pulls you in and never lets go.",
        author: "Olivia Wilson",
        book: "Diary"
    }
];

const genres = [
    "Self-Help", "Comedy", "Finance", "Fiction", "Children", "Thriller", 
    "Christian", "Mystery", "Fantasy", "Romance"
];

const FloatingBook = ({ src, index, layer }: { src: string, index: number, layer: "primary" | "secondary" }) => {
    const isPrimary = layer === "primary";
    const duration = isPrimary ? 60 : 48;
    const delay = -(index * (duration / 4));
    const width = isPrimary ? 240 : 180;
    const left = isPrimary ? [40, 140, 26, 130][index % 4] : [20, 160, 30, 150][index % 4];
    
    return (
        <motion.div
            initial={{ y: 800 }}
            animate={{ y: [-800, 800] }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "linear",
                delay: delay
            }}
            style={{
                position: "absolute",
                left: left,
                width: width,
                zIndex: isPrimary ? 10 : 5,
            }}
            className="rounded-lg overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.4)] border border-white/10"
        >
            <div className="aspect-[2/3] relative">
                <Image
                    src={src}
                    alt={`Book ${index}`}
                    fill
                    className="object-cover"
                />
            </div>
        </motion.div>
    );
};

export const Portfolio = () => {
    const [testIndex, setTestIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTestIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 md:py-32 bg-primary/5 overflow-hidden border-y border-primary/10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
                    
                    {/* Left: Precise Vellum-style Book Parade (Going UP) */}
                    <div className="relative w-full max-w-[440px] h-[500px] shrink-0">
                        {/* Shadow/Overlay for edge fading */}
                        <div className="absolute inset-x-0 -top-1 h-20 bg-gradient-to-b from-primary/[0.05] to-transparent z-30 pointer-events-none" />
                        <div className="absolute inset-x-0 -bottom-1 h-20 bg-gradient-to-t from-primary/[0.05] to-transparent z-30 pointer-events-none" />
                        
                        <div className="relative h-full w-full overflow-hidden">
                            {/* Primary: 260px, Secondary: 195px */}
                            {[
                                { layer: "primary", width: 260, left: 40, delay: -45, src: bookImages[0] },
                                { layer: "primary", width: 260, left: 141, delay: -30, src: bookImages[1] },
                                { layer: "primary", width: 260, left: 26, delay: -15, src: bookImages[2] },
                                { layer: "primary", width: 260, left: 132, delay: 0, src: bookImages[3] },
                                
                                { layer: "secondary", width: 195, left: 20, delay: -36, src: bookImages[4] },
                                { layer: "secondary", width: 195, left: 160, delay: -24, src: bookImages[5] },
                                { layer: "secondary", width: 195, left: 30, delay: -12, src: bookImages[6] },
                                { layer: "secondary", width: 195, left: 150, delay: 0, src: bookImages[7] },
                            ].map((book, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ y: 840 }}
                                    animate={{ y: [840, -840] }} // GOING UP
                                    transition={{
                                        duration: book.layer === "primary" ? 60 : 48,
                                        repeat: Infinity,
                                        ease: "linear",
                                        delay: book.delay
                                    }}
                                    style={{
                                        position: "absolute",
                                        left: book.left,
                                        width: book.width,
                                        zIndex: book.layer === "primary" ? 20 : 10,
                                    }}
                                    className="shadow-[rgba(0,0,0,0.5)_3px_4px_16px_0px] rounded-sm overflow-hidden border border-white/5"
                                >
                                    <div className="aspect-[2/3] relative">
                                        <Image
                                            src={book.src}
                                            alt="Cover"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="max-w-xl text-left">
                        <motion.h2 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-6"
                        >
                            Author Portfolio
                        </motion.h2>

                        <motion.h3 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-10 text-primary"
                        >
                            What Will <br className="hidden md:block" /> You <span className="font-serif italic text-primary-light lowercase">Create?</span>
                        </motion.h3>

                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap gap-x-2 gap-y-1 mb-8 max-w-md"
                        >
                            {genres.map((genre, i) => (
                                <span key={i} className="text-xs font-black uppercase tracking-widest text-[#022c22]/40">
                                    {genre}{i < genres.length - 1 ? " |" : ""}
                                </span>
                            ))}
                        </motion.div>

                        <div className="h-px w-20 bg-primary/20 mb-12" />

                        {/* Rotating Testimonials */}
                        <div className="min-h-[140px] relative">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={testIndex}
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                    className="space-y-6"
                                >
                                    <p className="text-xl md:text-2xl text-foreground italic font-medium leading-relaxed">
                                        "{testimonials[testIndex].quote}"
                                    </p>
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">
                                            — {testimonials[testIndex].author}
                                        </p>
                                        <p className="text-[10px] font-bold text-primary-light uppercase tracking-widest mt-1">
                                            Author of <span className="italic">{testimonials[testIndex].book}</span>
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
