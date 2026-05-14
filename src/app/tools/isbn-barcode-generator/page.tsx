import Link from "next/link";
import { BarcodeGenerator } from "@/components/tools/BarcodeGenerator";
import {
    Book,
    Shield,
    Download,
    CheckCircle,
    ChevronRight,
    Info,
    Lightbulb,
    HelpCircle,
    FileCheck,
    Globe,
    ExternalLink
} from "lucide-react";

export const metadata = {
    title: "Free ISBN Barcode Generator | High-Resolution Print Ready Barcodes",
    description: "Create professional ISBN-13 barcodes for your book cover. Free, high-resolution PNG & PDF downloads compatible with KDP, IngramSpark, and global retailers. No registration required.",
    alternates: {
        canonical: "/tools/isbn-barcode-generator",
    },
};

export default function ISBNBarcodePage() {
    return (
        <main className="min-h-screen bg-transparent">

            {/* Breadcrumbs */}
            <nav className="pt-32 px-6 max-w-7xl mx-auto">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#064e3b]/40">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight className="w-3 h-3" />
                    <Link href="/tools" className="hover:text-primary transition-colors">Tools</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-primary">ISBN Barcode Generator</span>
                </div>
            </nav>

            <section className="pt-12 pb-20 relative overflow-hidden">
                <div className="bg-eye-catching" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <h1 className="text-sm font-bold text-primary uppercase tracking-[0.4em] mb-6">Author Resource Lab</h1>
                            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-10 text-primary">
                                Professional <br />
                                <span className="font-serif italic text-primary-light">ISBN Barcodes.</span>
                            </h2>
                            <p className="text-[#064e3b]/60 text-xl font-medium leading-relaxed mb-10">
                                Generate print-ready ISBN-13 barcodes for your book cover in seconds. Our tool ensures industry-standard EAN-13 compliance, optimized for KDP, IngramSpark, and physical retail.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                                {[
                                    { icon: Shield, title: "Retail Standard", desc: "100% compliant with EAN-13 requirements for global book distribution." },
                                    { icon: Download, title: "High Res Assets", desc: "Download in 300 DPI PNG or vector-ready PDF formats for crisp printing." },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#064e3b]">{item.title}</h4>
                                            <p className="text-xs text-[#064e3b]/50 font-medium leading-tight">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-2 gap-y-3">
                                {[
                                    "Amazon KDP", "IngramSpark", "Barnes & Noble",
                                    "Apple Books", "Kobo Writing Life", "Draft2Digital"
                                ].map((retailer, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm font-bold text-[#064e3b]/60">
                                        <CheckCircle className="w-4 h-4 text-primary" />
                                        {retailer}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:sticky lg:top-28">
                            <BarcodeGenerator />
                        </div>
                    </div>
                </div>
            </section>

            {/* In-Depth SEO Content Section */}
            <section className="py-24 bg-transparent border-y border-border">
                <div className="max-w-4xl mx-auto px-6">
                    {/* section: How it works */}
                    <div className="mb-24">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                                <Lightbulb className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-[#064e3b]">How to Generate Your Barcode</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { step: "01", title: "Enter ISBN-13", desc: "Type your 13-digit ISBN. Our tool automatically validates the check digit for accuracy." },
                                { step: "02", title: "Add Price (Optional)", desc: "Include a 5-digit price extension if you're selling in physical stores." },
                                { step: "03", title: "Download & Insert", desc: "Save as PNG or PDF and place on the bottom right of your back cover." }
                            ].map((item, i) => (
                                <div key={i} className="relative p-8 rounded-3xl bg-[#fcfdfa] border border-border">
                                    <span className="text-5xl font-black text-primary/5 absolute top-4 right-6 leading-none">{item.step}</span>
                                    <h3 className="font-bold text-lg text-[#064e3b] mb-3 relative z-10">{item.title}</h3>
                                    <p className="text-sm text-[#064e3b]/60 font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section: Educational Guide */}
                    <article className="prose prose-slate max-w-none prose-h3:text-2xl prose-h3:font-black prose-p:text-[#064e3b]/60 prose-p:font-medium prose-p:leading-relaxed">
                        <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-[#064e3b] mb-12">Everything You Need to Know About ISBN Barcodes</h2>

                        <h3 className="text-[#064e3b]">Do I need an ISBN for my book?</h3>
                        <p>
                            If you plan to sell your physical book in bookstores or through major online retailers like Amazon, an ISBN (International Standard Book Number) is mandatory. It is the unique fingerprint for your specific book edition, allowing libraries and bookstores to track inventory and sales data correctly.
                        </p>

                        <h3 className="text-[#064e3b]">ISBN vs. Barcode: What’s the difference?</h3>
                        <p>
                            The ISBN is the 13-digit number itself. The barcode is the visual representation of that number (specifically using the EAN-13 symbology) that can be scanned by laser hardware. You need both on your book cover to meet retail standards.
                        </p>

                        <div className="my-16 p-8 rounded-3xl bg-primary/5 border border-primary/10">
                            <div className="flex gap-4 items-start">
                                <Info className="w-6 h-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-black text-[#064e3b] mb-2 uppercase tracking-tight">Pro Author Tip: Placement Matters</h4>
                                    <p className="text-sm text-[#064e3b]/60 m-0">
                                        Standard placement is the bottom right corner of the back cover. Ensure there is at least 0.25" of white space (quiet zone) around the barcode to prevent scanning errors.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-[#064e3b]">What is the price extension?</h3>
                        <p>
                            Sometimes referred to as the EAN-5, this is a smaller barcode located to the right of the main ISBN barcode. It encodes the currency and price. While optional for many indie authors on Amazon, it is often required by brick-and-mortar bookstores to facilitate automated price scanning at checkout.
                        </p>
                    </article>

                    {/* Section: Technical Data Table */}
                    <div className="mt-24">
                        <h2 className="text-3xl font-black tracking-tighter text-[#064e3b] mb-8 flex items-center gap-3">
                            <Globe className="w-6 h-6 text-primary" /> Common Currency Codes
                        </h2>
                        <div className="overflow-hidden rounded-3xl border border-border shadow-sm">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-[#064e3b] text-white">
                                    <tr>
                                        <th className="p-4 text-xs font-black uppercase tracking-widest">Region</th>
                                        <th className="p-4 text-xs font-black uppercase tracking-widest">Code Indicator</th>
                                        <th className="p-4 text-xs font-black uppercase tracking-widest">Example Extension</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    {[
                                        { region: "US (USD)", code: "5", example: "51999 ($19.99)" },
                                        { region: "Canada (CAD)", code: "6", example: "62495 ($24.95)" },
                                        { region: "UK (GBP)", code: "0", example: "01099 (£10.99)" },
                                        { region: "Australia (AUD)", code: "7", example: "73499 ($34.99)" }
                                    ].map((row, i) => (
                                        <tr key={i} className="border-t border-border hover:bg-muted/30 transition-colors">
                                            <td className="p-4 font-bold text-[#064e3b]">{row.region}</td>
                                            <td className="p-4 font-mono text-sm text-primary">{row.code}</td>
                                            <td className="p-4 text-sm text-[#064e3b]/50">{row.example}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Section: FAQ */}
                    <div className="mt-32">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                                <HelpCircle className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-[#064e3b]">Frequently Asked Questions</h2>
                        </div>

                        <div className="space-y-8">
                            {[
                                { q: "Is this barcode generator really free?", a: "Yes. We believe authors should have access to professional-grade tools without hidden costs. You can generate unlimited barcodes for personal or commercial use." },
                                { q: "Will this barcode work on Amazon KDP?", a: "Absolutely. Amazon accepts any standard EAN-13 barcode that matches your book's ISBN. Our tool follows the exact specifications used by Bowker and Nielsen." },
                                { q: "Do I need a separate barcode for my E-book?", a: "No. Barcodes are only required for physical products that need to be scanned in a warehouse or at a retail register. E-books use digital identifiers (ASIN/ISBN) but do not require the visual bars." },
                                { q: "Where can I buy an ISBN?", a: "In the United States, Bowker (myidentifiers.com) is the official source. In other countries, contact your national ISBN agency. Amazon KDP also offers free ISBNs, but these can only be used on their platform." }
                            ].map((faq, i) => (
                                <div key={i} className="p-8 rounded-3xl bg-white border border-border hover:border-primary/20 transition-all">
                                    <h3 className="text-xl font-bold text-[#064e3b] mb-4">{faq.q}</h3>
                                    <p className="text-[#064e3b]/60 font-medium leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Final CTA / Related Links */}
                    <div className="mt-32 p-12 rounded-[32px] bg-[#064e3b] text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] -mr-32 -mt-32" />
                        <div className="relative z-10">
                            <h3 className="text-3xl font-black tracking-tighter mb-8 italic">Ready to finish your cover?</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Link href="/tools/spine-width-calculator" className="flex items-center justify-between p-6 bg-white/10 hover:bg-white/20 rounded-2xl transition-all group">
                                    <span className="font-bold flex items-center gap-3"><FileCheck className="w-5 h-5 text-primary" /> Spine Width Calculator</span>
                                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link href="/contact" className="flex items-center justify-between p-6 bg-primary hover:bg-primary-hover rounded-2xl transition-all group text-white">
                                    <span className="font-bold flex items-center gap-3"><ExternalLink className="w-5 h-5" /> Professional Cover Design</span>
                                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}

