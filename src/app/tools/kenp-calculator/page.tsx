import Link from "next/link";
import { KenpCalculator } from "@/components/tools/KenpCalculator";
import {
    Landmark,
    Layers,
    DollarSign,
    ChevronRight,
    Info,
    CheckCircle,
    TrendingUp,
    Zap,
    ArrowRightCircle,
    BookOpenText,
    PieChart
} from "lucide-react";

export const metadata = {
    title: "KENP Royalty Calculator | Kindle Unlimited Earning Estimator",
    description: "Calculate your estimated earnings from Kindle Edition Normalized Pages read. Free tool for KDP Select authors.",
};

export default function KenpCalculatorPage() {
    return (
        <main className="min-h-screen bg-transparent">

            {/* Breadcrumbs */}
            <nav className="pt-32 px-6 max-w-7xl mx-auto">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#064e3b]/40">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight className="w-3 h-3" />
                    <Link href="/tools" className="hover:text-primary transition-colors">Tools</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-primary italic">KENP Estimator</span>
                </div>
            </nav>

            <section className="pt-12 pb-20 relative overflow-hidden">
                <div className="bg-eye-catching opacity-20" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <div>
                            <h1 className="text-sm font-bold text-primary uppercase tracking-[0.4em] mb-6">Subscription Economics</h1>
                            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-10 text-primary">
                                KENP Earning <br />
                                <span className="font-serif italic text-primary-light">Estimator.</span>
                            </h2>
                            <p className="text-[#064e3b]/60 text-xl font-medium leading-relaxed mb-12">
                                For authors in KDP Select, page reads are a vital revenue stream. Use this tool to predict your payout based on the monthly Global Fund rates.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                                {[
                                    { icon: Layers, title: "Precision Tracking", desc: "Calculate royalties down to the single page read." },
                                    { icon: DollarSign, title: "Dynamic Rates", desc: "Adjust payout rates based on the latest KDP fund announcements." },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
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
                                <div className="p-8 rounded-[32px] bg-primary/5 border border-primary/10">
                                    <h4 className="text-sm font-black text-[#064e3b] mb-6 flex items-center gap-2">
                                        <PieChart className="w-4 h-4 text-primary" /> Market Share
                                    </h4>
                                    <div className="space-y-4">
                                        {[
                                            { label: "Avg. KENP Rate", value: "$0.004 - $0.005" },
                                            { label: "Top Market", value: "USA / UK" },
                                            { label: "Fund Size", value: "$50M+ Monthly" }
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
                                        <Landmark className="w-5 h-5 text-primary" /> Global Fund Impact
                                    </h4>
                                    <p className="text-sm text-[#064e3b]/60 font-medium leading-relaxed">
                                        The KDP Select Global Fund is split among all participating authors. While the total fund grows, your individual payout per page is determined by the total number of pages read by all KU subscribers worldwide.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:sticky lg:top-40">
                            <KenpCalculator />
                        </div>
                    </div>
                </div>
            </section>

            {/* In-Depth SEO Content Section */}
            <section className="py-24 bg-transparent border-y border-border">
                <div className="max-w-4xl mx-auto px-6">
                    <article className="prose prose-slate max-w-none">
                        <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-[#064e3b] mb-12">Understanding Kindle Unlimited Royalties</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                            <div>
                                <h3 className="text-[#064e3b] text-xl font-black">What is KENP?</h3>
                                <p className="text-[#064e3b]/60 leading-relaxed font-medium">
                                    Kindle Edition Normalized Page count is a metric used by Amazon to standardize the "length" of a book regardless of font size or device. It ensures that authors are paid fairly based on the actual amount of content read.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-[#064e3b] text-xl font-black">How Payouts are Calculated</h3>
                                <p className="text-[#064e3b]/60 leading-relaxed font-medium">
                                    Every month, Amazon announces a "Global Fund." This pool of money is divided by the total number of KENP pages read that month. The result is the "Per Page Rate" (e.g., $0.0043).
                                </p>
                            </div>
                        </div>

                        <div className="my-16 p-8 rounded-3xl bg-primary/5 border border-primary/10">
                            <div className="flex gap-4 items-start">
                                <Info className="w-6 h-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-black text-[#064e3b] mb-2 uppercase tracking-tight">Author Hack: Backmatter matters</h4>
                                    <p className="text-sm text-[#064e3b]/60 m-0">
                                        Amazon pays for pages read up to 100% of the book. Ensure your "About the Author" and "Teasers" are high-quality to encourage readers to flip through until the very last page!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-black tracking-tighter text-[#064e3b] mb-8">Payer Per Page Benchmarks</h2>
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-primary/5">
                                    <th className="p-4 text-left text-xs font-black uppercase">Region</th>
                                    <th className="p-4 text-left text-xs font-black uppercase">Typical Rate</th>
                                    <th className="p-4 text-left text-xs font-black uppercase">Payout per 1k Pages</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t border-border">
                                    <td className="p-4 font-bold">Amazon.com (US)</td>
                                    <td className="p-4">~$0.0044</td>
                                    <td className="p-4 font-mono">$4.40</td>
                                </tr>
                                <tr className="border-t border-border">
                                    <td className="p-4 font-bold">Amazon.co.uk (UK)</td>
                                    <td className="p-4">~£0.0030</td>
                                    <td className="p-4 font-mono">£3.00</td>
                                </tr>
                                <tr className="border-t border-border">
                                    <td className="p-4 font-bold">Amazon.de (Germany)</td>
                                    <td className="p-4">~€0.0028</td>
                                    <td className="p-4 font-mono">€2.80</td>
                                </tr>
                            </tbody>
                        </table>
                    </article>

                    {/* FAQ and Related Tools */}
                    <div className="mt-32">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                            <div>
                                <h3 className="text-2xl font-black tracking-tighter text-[#064e3b] mb-8">KU Strategy FAQ</h3>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-bold text-[#064e3b] text-sm italic">"Does Amazon pay for re-reads?"</h4>
                                        <p className="text-xs text-[#064e3b]/60 mt-2 leading-relaxed">No. Amazon only pays for a page the first time a unique subscriber reads it. High re-readability doesn't increase KU royalties directly.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#064e3b] text-sm italic">"Is KDP Select exclusive?"</h4>
                                        <p>
                                            <span className="text-xs text-[#064e3b]/60 mt-2 leading-relaxed">Yes. To earn KENP royalties, your E-book must be exclusive to Amazon. You cannot sell it on Apple, Kobo, or your own site.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-black tracking-tighter text-[#064e3b] mb-8">Other Earnings Tools</h3>
                                <div className="grid grid-cols-1 gap-3">
                                    <Link href="/tools/royalty-calculator" className="flex items-center justify-between p-4 bg-white/60 backdrop-blur-xl border border-border rounded-2xl group hover:border-primary transition-colors">
                                        <span className="text-sm font-bold flex items-center gap-2"><DollarSign className="w-4 h-4 text-primary" /> Print Royalty Calculator</span>
                                        <ArrowRightCircle className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-primary" />
                                    </Link>
                                    <Link href="/tools/amazon-sales-calculator" className="flex items-center justify-between p-4 bg-white/60 backdrop-blur-xl border border-border rounded-2xl group hover:border-primary transition-colors">
                                        <span className="text-sm font-bold flex items-center gap-2"><TrendingUp className="w-4 h-4 text-primary" /> Amazon Sales Estimator</span>
                                        <ArrowRightCircle className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-primary" />
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

