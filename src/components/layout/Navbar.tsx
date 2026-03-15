"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pricing", href: "/pricing" },
    { name: "Tools", href: "/tools" },
    { name: "Blogs", href: "/blog" },
    { name: "About Us", href: "/about" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-white/80 backdrop-blur-xl border-b border-border py-2 shadow-sm" : "bg-transparent py-3"}`}>
            <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
                <Link href="/" className="flex items-center gap-3 group">
                    <Image src="/logo-spc.png" alt="Self-Publishing Consultant Logo" width={110} height={110} className="object-contain" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="text-[11px] font-black uppercase tracking-[0.2em] text-foreground/70 hover:text-primary transition-all relative group">
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/contact" className="ml-4 px-6 py-2.5 bg-primary text-white text-sm font-bold rounded-full hover:bg-primary/90 transition-all shadow-md hover:shadow-primary/20 hover:scale-105 active:scale-95">
                        Get Started
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="lg:hidden text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="absolute top-full left-0 w-full lg:hidden bg-white/98 backdrop-blur-xl border-b border-border z-40 overflow-hidden">
                        <div className="flex flex-col p-6 gap-6 text-center shadow-2xl">
                            {navLinks.map((link) => (
                                <Link key={link.name} href={link.href} className="text-lg font-bold text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                                    {link.name}
                                </Link>
                            ))}
                            <Link href="/contact" className="mt-4 px-8 py-3.5 bg-primary text-white font-bold rounded-full w-full max-w-sm mx-auto shadow-xl" onClick={() => setIsOpen(false)}>
                                Get Started Free
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
