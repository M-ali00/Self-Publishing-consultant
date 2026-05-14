import Link from "next/link";
import ROIPageClient from "@/components/tools/ROIPageClient";
import {
    DollarSign,
    PieChart,
    TrendingUp,
    ChevronRight,
    Target,
    BarChart3,
    ArrowRightCircle,
    ShieldCheck
} from "lucide-react";

export const metadata = {
    title: "Self-Publishing ROI Calculator 2026 | Accurate Profit Planning",
    description: "Plan your book launch with precision. Calculate editing, marketing, and production costs against real-time royalty rates to forecast your net profit.",
    alternates: {
        canonical: "/tools/roi-calculator",
    },
};

export default function ROICalculatorPage() {
    return (
        <main className="min-h-screen bg-transparent">

            {/* Breadcrumbs */}
            <nav className="pt-32 px-6 max-w-7xl mx-auto">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#064e3b]/40">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight className="w-3 h-3" />
                    <Link href="/tools" className="hover:text-primary transition-colors">Tools</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-primary italic">Profit Planner</span>
                </div>
            </nav>

            <section className="pt-12 pb-20 relative overflow-hidden">
                <div className="bg-eye-catching opacity-20" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <div>
                            <h1 className="text-sm font-bold text-primary uppercase tracking-[0.4em] mb-6 underline decoration-secondary decoration-4 underline-offset-8">Execution Engine</h1>
                            <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-12 text-[#064e3b]">
                                2026 Profit <br />
                                <span className="font-serif italic text-primary-light">Planner.</span>
                            </h2>
                            <p className="text-[#064e3b]/70 text-xl font-medium leading-relaxed mb-16 mr-10 shadow-sm border-l-4 border-secondary pl-6">
                                Professional self-publishing is an investment. Our institutional-grade calculator factors in everything from editorial debt to meta-platform fees.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-20">
                                {[
                                    { icon: ShieldCheck, title: "Risk Mitigation", desc: "Identify loss-leading prices before you launch." },
                                    { icon: PieChart, title: "Asset Allocation", desc: "Optimize your marketing spend for maximum yield." },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-5 group hover:translate-y-[-4px] transition-transform duration-300">
                                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-primary/5 shadow-inner group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all">
                                            <item.icon className="w-7 h-7" />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-[#064e3b] text-lg mb-1 leading-none">{item.title}</h4>
                                            <p className="text-[11px] text-[#064e3b]/40 font-bold uppercase tracking-widest">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-12">
                                <div className="p-10 rounded-[48px] bg-white border-4 border-[#064e3b]/5 shadow-xl transition-all hover:bg-primary/5 hover:border-primary/10">
                                    <h4 className="text-sm font-black text-[#064e3b] mb-10 flex items-center gap-4">
                                        <Target className="w-6 h-6 text-primary" /> Multi-Platform Benchmarking
                                    </h4>
                                    <div className="space-y-6">
                                        {[
                                            { label: "KDP Standard", value: "60.00% Net", color: "bg-secondary" },
                                            { label: "Expanded Dist.", value: "40.00% Net", color: "bg-primary" },
                                            { label: "Wholesale (P)", value: "50.00% Flat", color: "bg-[#064e3b]" }
                                        ].map((stat, i) => (
                                            <div key={i} className="flex justify-between items-center group">
                                                <div className="flex items-center gap-4">
                                                    <div className={`w-2 h-2 rounded-full ${stat.color} transition-all group-hover:scale-150 group-hover:animate-pulse`} />
                                                    <span className="text-xs font-black text-[#064e3b]/60 uppercase tracking-widest">{stat.label}</span>
                                                </div>
                                                <span className="text-sm font-black text-[#064e3b] tabular-nums">{stat.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ROIPageClient />
                    </div>
                </div>
            </section>
        </main>
    );
}
