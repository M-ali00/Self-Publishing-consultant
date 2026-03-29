"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Facebook, Twitter, Instagram, Linkedin, Star, Shield, Zap, Lock } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-16 pb-12 overflow-hidden relative border-t border-white/10">
            <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-5 pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Brand Row — full width */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-12 mb-12 border-b border-white/10">
                    <Link href="/" className="flex items-center gap-4">
                        <Image
                            src="/logo-spc.png"
                            alt="Self-Publishing Consultant Logo"
                            width={100}
                            height={100}
                            className="object-contain shrink-0"
                        />
                        <div>
                            <span className="block text-2xl font-black tracking-tight text-white whitespace-nowrap">
                                Self-Publishing Consultant
                            </span>
                            <span className="text-xs text-white/70 font-medium uppercase tracking-widest">
                                Your Partner in Publishing Success
                            </span>
                        </div>
                    </Link>

                    <div className="flex items-center gap-4">
                        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                            <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all text-white/80 border border-white/10">
                                <Icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 mb-16">

                    {/* Services Column */}
                    <div>
                        <h4 className="font-bold mb-8 text-xs uppercase tracking-[0.3em] text-secondary">Services</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-y-4 gap-x-4">
                            {[
                                { label: "Ghost Writing", href: "/services/ghostwriting" },
                                { label: "Editing & Proofreading", href: "/services/copyediting" },
                                { label: "Book Cover Design", href: "/services/cover-design" },
                                { label: "Video Trailer", href: "/services/book-trailer" },
                                { label: "Book Publishing Services", href: "/services" },
                                { label: "Book Marketing", href: "/services/book-launch-strategy" },
                                { label: "Audio Book", href: "/services/audiobook-production" },
                                { label: "Portfolio", href: "/portfolio" },
                                { label: "Privacy Policy", href: "/privacy" },
                                { label: "Terms & Conditions", href: "/terms" }
                            ].map((item) => (
                                <li key={item.label} className="flex items-center gap-3 group">
                                    <div className="w-1.5 h-1.5 border-t-2 border-r-2 border-secondary rotate-45 shrink-0 transition-transform group-hover:translate-x-1" />
                                    <Link
                                        href={item.href}
                                        className="text-sm text-white/80 hover:text-secondary transition-colors font-medium"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="space-y-8">
                        <h4 className="font-bold text-xs uppercase tracking-[0.3em] text-secondary">Direct Contact</h4>
                        <div className="space-y-6">
                            <div className="group">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1 group-hover:text-secondary transition-colors">Phone & WhatsApp</p>
                                <a href="tel:+447922656521" className="text-sm font-bold text-white hover:text-secondary transition-colors">+44 7922 656521</a>
                            </div>
                            <div className="group">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1 group-hover:text-secondary transition-colors">Email Inquiry</p>
                                <a href="mailto:selfpublishingconsultants@gmail.com" className="text-sm font-bold text-white hover:text-secondary transition-colors">selfpublishingconsultants@gmail.com</a>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4 text-[10px] uppercase tracking-[0.2em] text-white/20">Head Office</h4>
                            <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                                <p className="text-sm text-white/60 leading-relaxed font-medium">
                                    100 Innovation Drive,<br />
                                    San Francisco, CA 94111
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Trust & Security Column */}
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
                                <p className="text-[10px] text-white/70 uppercase tracking-widest font-bold">Excellent 4.9/5</p>
                            </div>
                        </Link>
                        <div className="grid grid-cols-3 gap-2 opacity-50 contrast-125 grayscale hover:grayscale-0 transition-all duration-500">
                            {[Shield, Zap, Lock].map((Icon, i) => (
                                <div key={i} className="h-10 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                                    <Icon className="w-4 h-4 text-secondary" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                        <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">© {new Date().getFullYear()} SELF-PUBLISHING CONSULTANT. All rights reserved.</p>
                        <div className="flex flex-wrap justify-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                            {["Privacy", "Terms", "Blog", "Contact"].map((item) => (
                                <Link key={item} href={`/${item.toLowerCase()}`} className="hover:text-secondary transition-colors">
                                    {item === "Contact" ? "Support" : item}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <p className="text-[9px] text-white/20 font-medium italic hidden sm:block">Independent publication experts</p>
                        <div className="flex items-center overflow-hidden rounded-lg border border-white/10">
                            <div className="bg-[#4ade80] text-black text-[9px] font-black px-3 py-1.5">DMCA</div>
                            <div className="bg-black/50 text-white text-[9px] font-bold px-3 py-1.5 uppercase tracking-tighter">Protected</div>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}
