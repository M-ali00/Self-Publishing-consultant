import Link from "next/link";
import { QRGenerator } from "@/components/tools/QRGenerator";
import {
    QrCode,
    Smartphone,
    Share2,
    Globe,
    ChevronRight,
    Info,
    CheckCircle,
    Link as LinkIcon,
    Palette,
    ArrowRightCircle,
    Scan,
    Rocket
} from "lucide-react";

export const metadata = {
    title: "Free QR Code Generator for Authors | Custom Book Marketing",
    description: "Create custom QR codes for your book. Links to Amazon, your website, or social media. Free high-resolution downloads with custom branding options.",
};

export default function QRGeneratorPage() {
    return (
        <main className="min-h-screen bg-transparent">

            {/* Breadcrumbs */}
            <nav className="pt-32 px-6 max-w-7xl mx-auto">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#064e3b]/40">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight className="w-3 h-3" />
                    <Link href="/tools" className="hover:text-primary transition-colors">Tools</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-secondary italic">QR Code Studio</span>
                </div>
            </nav>

            <section className="pt-12 pb-20 relative overflow-hidden">
                <div className="bg-eye-catching opacity-20" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <div>
                            <h1 className="text-sm font-bold text-secondary uppercase tracking-[0.4em] mb-6">Digital Connectivity</h1>
                            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-10 text-primary">
                                QR Code <br />
                                <span className="font-serif italic text-primary-light">Studio.</span>
                            </h2>
                            <p className="text-[#064e3b]/60 text-xl font-medium leading-relaxed mb-12">
                                Bridge the gap between your physical book and your digital presence. Generate clean, branded QR codes for bookmarks, postcards, and back-matter.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                                {[
                                    { icon: Smartphone, title: "Mobile Optimized", desc: "Our codes are generated to be easily scanned by any mobile camera." },
                                    { icon: Palette, title: "Custom Branding", desc: "Adjust colors and styles to match your book cover aesthetic." },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#064e3b] text-base">{item.title}</h4>
                                            <p className="text-xs text-[#064e3b]/50 font-medium leading-tight">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-12">
                                <div className="p-8 rounded-[32px] bg-secondary/5 border border-secondary/10">
                                    <h4 className="text-sm font-black text-[#064e3b] mb-6 flex items-center gap-2">
                                        <Scan className="w-4 h-4 text-secondary" /> Technical Specs
                                    </h4>
                                    <div className="space-y-4">
                                        {[
                                            { label: "Minimum Size", value: "2cm x 2cm" },
                                            { label: "Export Format", value: "High-Res PNG" },
                                            { label: "Reliability", value: "99.9% Read-Rate" }
                                        ].map((stat, i) => (
                                            <div key={i} className="flex justify-between items-center border-b border-[#064e3b]/5 pb-2">
                                                <span className="text-xs font-bold text-[#064e3b]/60 uppercase tracking-tighter">{stat.label}</span>
                                                <span className="text-sm font-black text-[#064e3b]">{stat.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-8 rounded-[32px] bg-white border border-border shadow-sm">
                                    <h4 className="text-base font-black text-[#064e3b] mb-4 flex items-center gap-2">
                                        <Rocket className="w-5 h-5 text-secondary" /> Launch Hack
                                    </h4>
                                    <p className="text-sm text-[#064e3b]/60 font-medium leading-relaxed">
                                        Put a QR code on the back cover of your ARC (Advance Review Copy) that leads to a hidden landing page. Collect email subscribers *before* your book even launches officially.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:sticky lg:top-40">
                            <QRGenerator />
                        </div>
                    </div>
                </div>
            </section>

            {/* In-Depth SEO Content Section */}
            <section className="py-24 bg-transparent border-y border-border">
                <div className="max-w-4xl mx-auto px-6">
                    <article className="prose prose-slate max-w-none">
                        <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-[#064e3b] mb-12">Smart QR Code Marketing for Authors</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                            <div>
                                <h3 className="text-[#064e3b] text-xl font-black">Back-Matter Integration</h3>
                                <p className="text-[#064e3b]/60 leading-relaxed font-medium">
                                    Put a QR code on the final page of your book to instantly invite readers to join your mailing list or buy the next book in the series. It removes the friction of typing in a long URL.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-[#064e3b] text-xl font-black">Review Prompting</h3>
                                <p className="text-[#064e3b]/60 leading-relaxed font-medium">
                                    Create a QR code that leads directly to your book's review page on Amazon. This is one of the most effective ways to increase your review count early after launch.
                                </p>
                            </div>
                        </div>

                        <div className="my-16 p-8 rounded-3xl bg-secondary/5 border border-secondary/10">
                            <div className="flex gap-4 items-start">
                                <Info className="w-6 h-6 text-secondary shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-black text-[#064e3b] mb-2 uppercase tracking-tight">Pro Tip: Testing is Vital</h4>
                                    <p className="text-sm text-[#064e3b]/60 m-0">
                                        Always test your QR code on both iOS and Android before printing 1,000 copies of your book. Different camera apps have varying levels of tolerance for color contrast and code scale.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-black tracking-tighter text-[#064e3b] mb-8">QR Code Placement Strategies</h2>
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-primary/5">
                                    <th className="p-4 text-left text-xs font-black uppercase">Asset</th>
                                    <th className="p-4 text-left text-xs font-black uppercase">Best Goal</th>
                                    <th className="p-4 text-left text-xs font-black uppercase">Placement Tips</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t border-border">
                                    <td className="p-4 font-bold">Bookmarks</td>
                                    <td className="p-4">Email Signups</td>
                                    <td className="p-4 text-sm opacity-60">Add a clear CTA (Call to Action)</td>
                                </tr>
                                <tr className="border-t border-border">
                                    <td className="p-4 font-bold">Event Banners</td>
                                    <td className="p-4">Instant Sales</td>
                                    <td className="p-4 text-sm opacity-60">Keep it at eye level</td>
                                </tr>
                                <tr className="border-t border-border">
                                    <td className="p-4 font-bold">Back-Matter</td>
                                    <td className="p-4">Reader Retention</td>
                                    <td className="p-4 text-sm opacity-60">Link to the next book in series</td>
                                </tr>
                            </tbody>
                        </table>
                    </article>

                    {/* FAQ and Related Tools */}
                    <div className="mt-32">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                            <div>
                                <h3 className="text-2xl font-black tracking-tighter text-[#064e3b] mb-8">Author QR FAQ</h3>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-bold text-[#064e3b] text-sm italic">"Do these QR codes expire?"</h4>
                                        <p className="text-xs text-[#064e3b]/60 mt-2 leading-relaxed">No. Our codes are 'Static', meaning the link is hard-coded into the pattern. They will work as long as your destination URL exists.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#064e3b] text-sm italic">"Can I put my logo inside the QR code?"</h4>
                                        <p className="text-xs text-[#064e3b]/60 mt-2 leading-relaxed">Yes, though we recommend keeping the center clear or using a very simple icon to maintain error-correction levels.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-black tracking-tighter text-[#064e3b] mb-8">Marketing Assets</h3>
                                <div className="grid grid-cols-1 gap-3">
                                    <Link href="/tools/book-description-generator" className="flex items-center justify-between p-4 bg-white/60 backdrop-blur-xl border border-border rounded-2xl group hover:border-secondary transition-colors">
                                        <span className="text-sm font-bold flex items-center gap-2"><Share2 className="w-4 h-4 text-secondary" /> Blurb Generator</span>
                                        <ArrowRightCircle className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-secondary" />
                                    </Link>
                                    <Link href="/tools/amazon-sales-calculator" className="flex items-center justify-between p-4 bg-white/60 backdrop-blur-xl border border-border rounded-2xl group hover:border-secondary transition-colors">
                                        <span className="text-sm font-bold flex items-center gap-2"><Smartphone className="w-4 h-4 text-secondary" /> Sales Estimator</span>
                                        <ArrowRightCircle className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-secondary" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}

