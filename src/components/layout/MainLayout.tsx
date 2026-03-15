"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    BookOpen, Globe, Shield, Zap, Menu, X, ArrowRight,
    MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin,
    Star, CreditCard, Lock, ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "About Us", href: "/about" },
    { name: "Team", href: "/team" },
];

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen]);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass py-2" : "bg-transparent py-4"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 md:gap-3 shrink-0 group">
                    <div className="w-8 h-8 md:w-10 md:h-10 relative flex items-center justify-center transition-transform group-hover:scale-110">
                        <img
                            src="/logo.png"
                            alt="Self-Publishing Consultant Logo"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <span className="text-sm sm:text-lg md:text-xl font-black tracking-tight text-[#064e3b] whitespace-nowrap">
                        Self-Publishing <span className="text-primary italic hidden sm:inline">Consultant</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8 text-[13px] font-bold tracking-[0.05em] text-foreground/70">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`hover:text-primary transition-colors relative py-2 group ${pathname === link.href ? "text-primary" : ""
                                }`}
                        >
                            {link.name}
                            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left ${pathname === link.href ? "scale-x-100" : ""
                                }`} />
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-3 md:gap-6">
                    <Link
                        href="/contact"
                        className="btn-primary"
                    >
                        Contact Us
                    </Link>

                    {/* Menu Toggle */}
                    <button
                        className="lg:hidden p-2 text-foreground hover:bg-muted/50 rounded-xl transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-background/95 backdrop-blur-2xl z-[60] lg:hidden flex flex-col"
                    >
                        <div className="flex items-center justify-between p-6 border-b border-border">
                            <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
                                <img src="/logo.png" alt="" className="w-8 h-8" />
                                <span className="font-black text-sm">Self-Publishing Consultant</span>
                            </Link>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="p-2 bg-muted rounded-full"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="flex-grow overflow-y-auto px-6 py-12">
                            <div className="flex flex-col gap-4">
                                {navLinks.map((link, idx) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={`flex items-center justify-between text-2xl font-bold tracking-tight py-4 border-b border-border/50 hover:text-primary transition-colors ${pathname === link.href ? "text-primary border-primary/20" : ""
                                                }`}
                                        >
                                            {link.name}
                                            <ChevronRight className="w-5 h-5 opacity-30" />
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-16 space-y-8">
                                <div className="space-y-4">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40">Direct Contact</p>
                                    <div className="space-y-2">
                                        <a href="tel:+447922656521" className="flex items-center gap-3 text-lg font-bold">
                                            <Phone className="w-5 h-5 text-primary" />
                                            +44 7922 656521
                                        </a>
                                        <a href="mailto:info@selfpublishingconsultant.com" className="flex items-center gap-3 text-lg font-bold">
                                            <Mail className="w-5 h-5 text-primary" />
                                            info@selfpublishingconsultant.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                        <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                            <Icon className="w-5 h-5" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border-t border-border">
                            <Link
                                href="/contact"
                                onClick={() => setIsMenuOpen(false)}
                                className="w-full btn-primary py-5 text-lg flex items-center justify-center gap-3"
                            >
                                Start Your Journey <ArrowRight className="w-6 h-6" />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export const Footer = () => {
    return (
        <footer className="bg-[#022c22] text-white pt-24 pb-12 overflow-hidden relative border-t border-emerald-900">
            <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-5 pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mb-20">
                    {/* Brand & About Column */}
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 relative">
                                <img
                                    src="/logo.png"
                                    alt="Self-Publishing Consultant Logo"
                                    className="w-full h-full object-contain brightness-0 invert transition-transform group-hover:scale-110"
                                />
                            </div>
                            <span className="text-xl font-black tracking-tight text-white leading-tight">Self-Publishing<br />Consultant</span>
                        </Link>
                        <p className="text-white/70 text-sm leading-relaxed font-medium">
                            We produce books that influence the literary sphere and enhance your worth as an author.
                            We collaborate with you to produce the best possible results that <span className="text-primary italic font-serif">align with your goals.</span>
                        </p>
                        <div className="flex gap-4 items-center">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-white/40 border border-white/5">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 className="font-bold mb-8 text-xs uppercase tracking-[0.3em] text-primary">Services</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-y-4 gap-x-4">
                            {[
                                "Ghost Writing", "Editing & Proofreading", "Book Cover Design",
                                "Video Trailer", "Book Publishing Services", "Book Marketing",
                                "Audio Book", "Portfolio", "Privacy Policy", "Terms & Conditions"
                            ].map((service) => (
                                <li key={service} className="flex items-center gap-3 group">
                                    <div className="w-1.5 h-1.5 border-t-2 border-r-2 border-primary rotate-45 shrink-0 transition-transform group-hover:translate-x-1" />
                                    <Link
                                        href={service === "Privacy Policy" ? "/privacy" : service === "Terms & Conditions" ? "/terms" : "/services"}
                                        className="text-sm text-white/50 hover:text-white transition-colors font-medium"
                                    >
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact details */}
                    <div className="space-y-8">
                        <h4 className="font-bold text-xs uppercase tracking-[0.3em] text-primary">Direct Contact</h4>
                        <div className="space-y-6">
                            <div className="group">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-1 group-hover:text-primary transition-colors">Phone & WhatsApp</p>
                                <a href="tel:+447922656521" className="text-sm font-bold text-white hover:text-primary transition-colors">+44 7922 656521</a>
                            </div>
                            <div className="group">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-1 group-hover:text-primary transition-colors">Email Inquiry</p>
                                <a href="mailto:info@selfpublishingconsultant.com" className="text-sm font-bold text-white hover:text-primary transition-colors">info@selfpublishingconsultant.com</a>
                            </div>
                        </div>

                        <div className="pt-4">
                            <h4 className="font-bold mb-6 text-[10px] uppercase tracking-[0.2em] text-white/20">Head Office</h4>
                            <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                                <MapPin className="w-5 h-5 text-primary shrink-0" />
                                <p className="text-sm text-white/60 leading-relaxed font-medium">
                                    173 Dallow Rd, Luton,<br />
                                    LU1 1NX, UK
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Trust & Security */}
                    <div>
                        <h4 className="font-bold mb-8 text-xs uppercase tracking-[0.3em] text-white">Trust & Security</h4>
                        <Link href="https://www.trustpilot.com" target="_blank" className="block mb-8 group">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-primary/50 transition-all backdrop-blur-sm grayscale group-hover:grayscale-0">
                                <div className="flex items-center gap-2 mb-2">
                                    <Star className="w-5 h-5 text-[#00b67a] fill-[#00b67a]" />
                                    <span className="font-bold text-sm">Trustpilot</span>
                                </div>
                                <div className="flex gap-1 mb-2">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <div key={s} className="w-5 h-5 bg-[#00b67a] flex items-center justify-center rounded-sm">
                                            <Star className="w-3.5 h-3.5 text-white fill-white" />
                                        </div>
                                    ))}
                                </div>
                                <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Excellent 4.9/5</p>
                            </div>
                        </Link>

                        <div className="grid grid-cols-3 gap-2 opacity-50 contrast-125 grayscale hover:grayscale-0 transition-all duration-500">
                            {[Shield, Zap, Lock].map((Icon, i) => (
                                <div key={i} className="h-10 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                                    <Icon className="w-4 h-4 text-primary" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                        <p className="text-[10px] text-white/20 font-bold uppercase tracking-widest">© 2026 SELF-PUBLISHING CONSULTANT</p>
                        <div className="flex flex-wrap justify-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                            {["Privacy", "Terms", "Blog", "Support"].map((item) => (
                                <Link key={item} href={`/${item.toLowerCase()}`} className="hover:text-white transition-colors">{item}</Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <p className="text-[9px] text-white/20 font-medium italic hidden sm:block">Independent entity from Amazon KDP</p>
                        <div className="flex items-center overflow-hidden rounded-lg border border-white/10">
                            <div className="bg-[#4ade80] text-black text-[9px] font-black px-3 py-1.5">DMCA</div>
                            <div className="bg-black/50 text-white text-[9px] font-bold px-3 py-1.5 uppercase tracking-tighter">Protected</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
