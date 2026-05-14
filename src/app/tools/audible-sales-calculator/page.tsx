import Link from "next/link";
import { AudibleSalesCalculator } from "@/components/tools/AudibleSalesCalculator";
import {
    Headphones,
    Activity,
    TrendingUp,
    ChevronRight,
    Info,
    CheckCircle,
    Mic2,
    Lock,
    ArrowRightCircle,
    BarChart3,
    Clock
} from "lucide-react";

export const metadata = {
    title: "Audible Sales Calculator | Audiobook BSR Estimator",
    description: "Estimate monthly audiobook sales based on Audible Best Seller Rank. Plan your audiobook launch with real market data.",
    alternates: {
        canonical: "/tools/audible-sales-calculator",
    },
};

export default function AudibleSalesPage() {
    return (
        <main className="min-h-screen bg-transparent">

            {/* Breadcrumbs */}
            <nav className="pt-32 px-6 max-w-7xl mx-auto">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#064e3b]/40">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight className="w-3 h-3" />
                    <Link href="/tools" className="hover:text-primary transition-colors">Tools</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-secondary italic">Audible Sales Estimator</span>
                </div>
            </nav>

            <section className="pt-12 pb-20 relative overflow-hidden">
                <div className="bg-eye-catching opacity-20" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <div>
                            <h1 className="text-sm font-bold text-secondary uppercase tracking-[0.4em] mb-6">Audiobook Market Insights</h1>
                            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-10 text-primary">
                                Audible Sales <br />
                                <span className="font-serif italic text-primary-light">Estimator.</span>
                            </h2>
                            <p className="text-[#064e3b]/60 text-xl font-medium leading-relaxed mb-12">
                                Understand your performance in the rapidly growing audiobook market. Our algorithm analyzes Audible BSR to provide unit sales volume estimates.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                                {[
                                    { icon: Headphones, title: "ACX Ecosystem", desc: "Optimized for the specific ranking logic used on Audible.com." },
                                    { icon: Activity, title: "Unit Estimates", desc: "Convert rank into hard sales numbers for your forecasting." },
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
                                        <Clock className="w-4 h-4 text-secondary" /> Data Freshness
                                    </h4>
                                    <div className="space-y-4">
                                        {[
                                            { label: "BSR Lag Time", value: "2-4 Hours" },
                                            { label: "Market Growth", value: "+24% YoY" },
                                            { label: "Top Rank Yield", value: "High Volume" }
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
                                        <Mic2 className="w-5 h-5 text-secondary" /> Production ROI
                                    </h4>
                                    <p className="text-sm text-[#064e3b]/60 font-medium leading-relaxed">
                                        Audiobook production is expensive (often $200-$400 per finished hour). Use this calculator to see if your niche's top books sell enough units to justify the investment.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:sticky lg:top-40">
                            <AudibleSalesCalculator />
                        </div>
                    </div>
                </div>
            </section>

            {/* In-Depth SEO Content Section */}
            <section className="py-24 bg-transparent border-y border-border">
                <div className="max-w-4xl mx-auto px-6">
                    <article className="prose prose-slate max-w-none">
                        <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-[#064e3b] mb-12">How Audible Categories Work</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                            <div>
                                <h3 className="text-[#064e3b] text-xl font-black">Categories vs. Store Rank</h3>
                                <p className="text-[#064e3b]/60 leading-relaxed font-medium">
                                    Being #1 in a tiny category like "Ancient Greek History" might only require 5 sales a day. However, to break into the Top 100 on the entire Audible storefront, you often need hundreds of sales per day.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-[#064e3b] text-xl font-black">Member Credits</h3>
                                <p className="text-[#064e3b]/60 leading-relaxed font-medium">
                                    A "Credit" purchase on Audible weights your BSR exactly the same as a cash purchase. Our calculator factors in the combined velocity of both fulfillment methods.
                                </p>
                            </div>
                        </div>

                        <div className="my-16 p-8 rounded-3xl bg-secondary/5 border border-secondary/10">
                            <div className="flex gap-4 items-start">
                                <Info className="w-6 h-6 text-secondary shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-black text-[#064e3b] mb-2 uppercase tracking-tight">Author Note: BSR vs ACX Dashboard</h4>
                                    <p className="text-sm text-[#064e3b]/60 m-0">
                                        Your ACX sales dashboard typically lags behind your BSR. If you see your rank drop significantly, a sale has happened—even if it hasn't appeared in your reporting yet.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-black tracking-tighter text-[#064e3b] mb-8">Audible Rank Benchmarks</h2>
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-primary/5">
                                    <th className="p-4 text-left text-xs font-black uppercase">Audible Rank</th>
                                    <th className="p-4 text-left text-xs font-black uppercase">Est. Monthly Sales</th>
                                    <th className="p-4 text-left text-xs font-black uppercase">Market Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t border-border">
                                    <td className="p-4 font-bold">#1 - #100</td>
                                    <td className="p-4">5,000+ units</td>
                                    <td className="p-4 text-sm opacity-60">Mega-Bestseller</td>
                                </tr>
                                <tr className="border-t border-border">
                                    <td className="p-4 font-bold">#1,000</td>
                                    <td className="p-4">300-400 units</td>
                                    <td className="p-4 text-sm opacity-60">High Performance</td>
                                </tr>
                                <tr className="border-t border-border">
                                    <td className="p-4 font-bold">#5,000</td>
                                    <td className="p-4">60-80 units</td>
                                    <td className="p-4 text-sm opacity-60">Good Niche Fit</td>
                                </tr>
                            </tbody>
                        </table>
                    </article>

                    {/* FAQ and Related Tools */}
                    <div className="mt-32">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                            <div>
                                <h3 className="text-2xl font-black tracking-tighter text-[#064e3b] mb-8">Author FAQ</h3>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-bold text-[#064e3b] text-sm italic">"Does Audible include 'Whispersync' sales?"</h4>
                                        <p className="text-xs text-[#064e3b]/60 mt-2 leading-relaxed">Yes. Whispersync for Voice deals are counted as full sales for BSR purposes.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#064e3b] text-sm italic">"Is Audible BSR separate from Amazon BSR?"</h4>
                                        <p className="text-xs text-[#064e3b]/60 mt-2 leading-relaxed">Yes. They are entirely separate ecosystems. A book can be ranked #1 on Amazon and #10,000 on Audible simultaneously.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-black tracking-tighter text-[#064e3b] mb-8">Grow Your Sales</h3>
                                <div className="grid grid-cols-1 gap-3">
                                    <Link href="/tools/amazon-sales-calculator" className="flex items-center justify-between p-4 bg-white/60 backdrop-blur-xl border border-border rounded-2xl group hover:border-secondary transition-colors">
                                        <span className="text-sm font-bold flex items-center gap-2"><BarChart3 className="w-4 h-4 text-secondary" /> Kindle Sales Estimator</span>
                                        <ArrowRightCircle className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-secondary" />
                                    </Link>
                                    <Link href="/tools/book-description-generator" className="flex items-center justify-between p-4 bg-white/60 backdrop-blur-xl border border-border rounded-2xl group hover:border-secondary transition-colors">
                                        <span className="text-sm font-bold flex items-center gap-2"><Lock className="w-4 h-4 text-secondary" /> Blurb Generator</span>
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

