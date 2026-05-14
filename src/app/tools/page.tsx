import Link from "next/link";
import { Metadata } from "next";
import {
    Barcode,
    Calculator,
    Ruler,
    TrendingUp,
    FileText,
    QrCode,
    ArrowRight,
    Headphones,
    Layers,
    Hash,
    ExternalLink,
    Zap,
    SpellCheck,
    Palette
} from "lucide-react";

export const metadata: Metadata = {
    title: "Free Author Tools | Self-Publishing Calculators & Generators",
    description: "A comprehensive suite of free tools for self-publishing authors. ISBN generators, royalty calculators, sales estimators, and more.",
    alternates: {
        canonical: "/tools",
    },
};

const tools = [
    {
        title: "Profit Planner",
        description: "Institutional-grade 2026 ROI forecasting for professional book launches.",
        href: "/tools/roi-calculator",
        icon: Calculator,
        color: "text-emerald-500",
        bg: "bg-emerald-500/5"
    },
    {
        title: "ISBN Barcode",
        description: "Generate print-ready ISBN-13 barcodes for your book cover.",
        href: "/tools/isbn-barcode-generator",
        icon: Barcode,
        color: "text-primary",
        bg: "bg-primary/5"
    },
    {
        title: "Royalty Calculator",
        description: "Estimate earnings after printing costs and retail margins.",
        href: "/tools/royalty-calculator",
        icon: Calculator,
        color: "text-secondary",
        bg: "bg-secondary/10"
    },
    {
        title: "Spine Calculator",
        description: "Calculate precise spine width for cover design specs.",
        href: "/tools/spine-width-calculator",
        icon: Ruler,
        color: "text-accent",
        bg: "bg-accent/5"
    },
    {
        title: "Sales Estimator",
        description: "Convert Amazon BSR into daily and monthly sales volume.",
        href: "/tools/amazon-sales-calculator",
        icon: TrendingUp,
        color: "text-orange-600",
        bg: "bg-orange-500/5"
    },
    {
        title: "Audible Estimator",
        description: "Predict audiobook sales based on Audible rank metrics.",
        href: "/tools/audible-sales-calculator",
        icon: Headphones,
        color: "text-purple-600",
        bg: "bg-purple-500/5"
    },
    {
        title: "KENP Estimator",
        description: "Calculate royalties for Kindle Unlimited page reads.",
        href: "/tools/kenp-calculator",
        icon: Layers,
        color: "text-emerald-600",
        bg: "bg-emerald-500/5"
    },
    {
        title: "Blurb Formatter",
        description: "Create Amazon-approved HTML descriptions without code.",
        href: "/tools/book-description-generator",
        icon: FileText,
        color: "text-blue-600",
        bg: "bg-blue-500/5"
    },
    {
        title: "QR Code Studio",
        description: "Custom branded QR codes for book marketing and links.",
        href: "/tools/qr-code-generator",
        icon: QrCode,
        color: "text-purple-600",
        bg: "bg-purple-500/5"
    },
    {
        title: "Hashtag Optimizer",
        description: "Generate goal-oriented hashtags for social discoverability.",
        href: "/tools/hashtag-generator",
        icon: Hash,
        color: "text-blue-400",
        bg: "bg-blue-400/5"
    }
];

const externalResources = [
    {
        title: "Publisher Rocket",
        desc: "The gold standard for Amazon keyword and category research.",
        icon: Zap,
        link: "https://publisherrocket.com",
        tag: "Marketing"
    },
    {
        title: "Atticus",
        desc: "All-in-one book writing and professional formatting software.",
        icon: FileText,
        link: "https://atticus.io",
        tag: "Writing"
    },
    {
        title: "ProWritingAid",
        desc: "Advanced grammar checker and style editor for manuscripts.",
        icon: SpellCheck,
        link: "https://prowritingaid.com",
        tag: "Editing"
    },
    {
        title: "100 Covers",
        desc: "Premium book cover design services for self-published authors.",
        icon: Palette,
        link: "https://100covers.com",
        tag: "Design"
    }
];

export default function ToolsHubPage() {
    return (
        <main className="min-h-screen">

            <section className="pt-40 pb-32 relative overflow-hidden">
                <div className="bg-eye-catching" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="max-w-3xl mb-24">
                        <h1 className="text-sm font-bold text-primary uppercase tracking-[0.4em] mb-6">Author Resource Lab</h1>
                        <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8 text-[#064e3b]">
                            Empowering <br />
                            <span className="font-serif italic text-primary-light">Authorpreneurs.</span>
                        </h2>
                        <p className="text-[#064e3b]/60 text-xl font-medium leading-relaxed max-w-2xl">
                            We've built a world-class suite of utilities to handle the technical side of publishing. From financial forecasting to asset generation—all free, forever.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {tools.map((tool, i) => (
                            <Link
                                key={i}
                                href={tool.href}
                                className={`bento-card group flex flex-col justify-between overflow-hidden h-full hover:scale-[1.03] transition-all duration-500 ${tool.bg} border-primary/10`}
                            >
                                <div>
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-white shadow-sm border border-border group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ${tool.color}`}>
                                        <tool.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4 tracking-tighter text-[#064e3b]">{tool.title}</h3>
                                    <p className="text-[#064e3b]/50 text-base font-medium leading-relaxed">
                                        {tool.description}
                                    </p>
                                </div>

                                <div className="mt-12">
                                    <div className={`flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 group-hover:gap-5 ${tool.color}`}>
                                        Launch Tool <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Third Party Resources Section */}
            <section className="py-32 bg-transparent relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-[#1B4D24] mb-6">
                                The Pro <span className="font-serif italic text-gradient-signature">Ecosystem.</span>
                            </h2>
                            <p className="text-[#1B4D24]/50 text-xl font-medium">
                                Beyond our internal tools, we recommend these industry-leading resources to help you scale your publishing empire.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {externalResources.map((res, i) => (
                            <a
                                key={i}
                                href={res.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-8 rounded-3xl bg-white border border-border hover:border-primary/30 hover:shadow-xl transition-all group"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary border border-primary/10">
                                        <res.icon className="w-6 h-6" />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-muted rounded-full text-foreground/40">{res.tag}</span>
                                </div>
                                <h3 className="text-xl font-bold text-[#1B4D24] mb-3 flex items-center gap-2">
                                    {res.title}
                                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h3>
                                <p className="text-sm text-[#1B4D24]/50 font-medium leading-relaxed">
                                    {res.desc}
                                </p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-32 bg-[#1B4D24] text-white overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-10 pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 italic">Ready to scale your publishing?</h2>
                    <p className="text-white/40 text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                        Beyond our free tools, we provide enterprise-grade distribution, high-end editorial management, and cinematic cover design.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link href="/contact" className="btn-primary">Connect with a Consultant</Link>
                        <Link href="/services" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all">Explore Services</Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
