import Link from "next/link";
import { RoyaltyCalculator } from "@/components/tools/RoyaltyCalculator";
import {
    DollarSign,
    PieChart,
    TrendingUp,
    HelpCircle,
    ChevronRight,
    Info,
    CheckCircle,
    Calculator,
    ShieldCheck,
    ArrowRightCircle,
    Target,
    BarChart3
} from "lucide-react";

export const metadata = {
    title: "Amazon KDP & IngramSpark Royalty Calculator | Net Profit Per Book",
    description: "Calculate your exact royalty per book sale on Amazon KDP and IngramSpark. Account for print costs, platform fees, and wholesale discounts.",
    alternates: {
        canonical: "/tools/royalty-calculator",
    },
};

export default function RoyaltyCalculatorPage() {
    return (
        <main className="min-h-screen bg-transparent">

            {/* Breadcrumbs */}
            <nav className="pt-32 px-6 max-w-7xl mx-auto">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#064e3b]/40">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight className="w-3 h-3" />
                    <Link href="/tools" className="hover:text-primary transition-colors">Tools</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-primary italic">Royalty Calculator</span>
                </div>
            </nav>

            <section className="pt-12 pb-20 relative overflow-hidden">
                <div className="bg-eye-catching opacity-20" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <div>
                            <h1 className="text-sm font-bold text-primary uppercase tracking-[0.4em] mb-6">Financial Planning</h1>
                            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-10 text-primary">
                                Book Royalty <br />
                                <span className="font-serif italic text-primary-light">Calculator.</span>
                            </h2>
                            <p className="text-[#064e3b]/60 text-xl font-medium leading-relaxed mb-12">
                                Don't guess your profits. Our calculator helps you understand exactly how much you'll earn per sale after printing costs and retail cuts.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                                {[
                                    { icon: DollarSign, title: "Net Profit Analysis", desc: "Calculate exact take-home pay after all hidden fees." },
                                    { icon: PieChart, title: "Cost Breakdown", desc: "See where every dollar goes (Printing vs. Platform)." },
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
                                        <ShieldCheck className="w-4 h-4 text-primary" /> Multi-Platform Ready
                                    </h4>
                                    <div className="space-y-4">
                                        {[
                                            { label: "Amazon KDP", value: "60% Std." },
                                            { label: "Expanded Dist.", value: "40% Std." },
                                            { label: "IngramSpark", value: "Wholesale" }
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
                                        <Target className="w-5 h-5 text-primary" /> Strategic Pricing
                                    </h4>
                                    <p className="text-sm text-[#064e3b]/60 font-medium leading-relaxed">
                                        Finding the "Golden Price" is key. A $14.99 book often yields more high-quality reviews than a $9.99 book, while maintaining a healthy 30-40% profit margin per unit.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:sticky lg:top-40">
                            <RoyaltyCalculator />
                        </div>
                    </div>
                </div>
            </section>

            {/* In-Depth SEO Content Section */}
            <section className="py-24 bg-transparent border-y border-border">
                <div className="max-w-4xl mx-auto px-6">
                    <article className="prose prose-slate max-w-none">
                        <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-[#064e3b] mb-12">Understanding Book Royalties</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                            <div>
                                <h3 className="text-[#064e3b] text-xl font-black">Printing Costs</h3>
                                <p className="text-[#064e3b]/60 leading-relaxed font-medium">
                                    Print-on-demand (POD) services like KDP or IngramSpark charge a fixed cost per book plus a charge per page. Color interior is significantly more expensive than black and white.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-[#064e3b] text-xl font-black">Retailer Cut</h3>
                                <p className="text-[#064e3b]/60 leading-relaxed font-medium">
                                    Standard industry math follows a 60/40 split for Amazon's direct sales, where the author gets 60% of the list price (minus printing) and Amazon takes 40%.
                                </p>
                            </div>
                        </div>

                        <div className="my-16 p-8 rounded-3xl bg-secondary/5 border border-secondary/10">
                            <div className="flex gap-4 items-start">
                                <HelpCircle className="w-6 h-6 text-secondary shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-black text-[#064e3b] mb-2 uppercase tracking-tight">Expanded Distribution Explained</h4>
                                    <p className="text-sm text-[#064e3b]/60 m-0">
                                        When you choose expanded distribution, your book is available to libraries and non-Amazon stores. Because middle-men need a cut, your royalty rate typically drops from 60% to 40%.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-black tracking-tighter text-[#064e3b] mb-8">Amazon KDP Royalty Cheat Sheet</h2>
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-primary/5">
                                    <th className="p-4 text-left text-xs font-black uppercase">Format</th>
                                    <th className="p-4 text-left text-xs font-black uppercase">Standard Royalty</th>
                                    <th className="p-4 text-left text-xs font-black uppercase">Key Variable</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t border-border">
                                    <td className="p-4 font-bold">Kindle Ebook</td>
                                    <td className="p-4">35% or 70%</td>
                                    <td className="p-4 text-sm opacity-60">Price & Delivery Fee</td>
                                </tr>
                                <tr className="border-t border-border">
                                    <td className="p-4 font-bold">Paperback (Direct)</td>
                                    <td className="p-4">60%</td>
                                    <td className="p-4 text-sm opacity-60">Printing Cost</td>
                                </tr>
                                <tr className="border-t border-border">
                                    <td className="p-4 font-bold">Hardcover</td>
                                    <td className="p-4">60%</td>
                                    <td className="p-4 text-sm opacity-60">High Fixed Base Cost</td>
                                </tr>
                            </tbody>
                        </table>
                    </article>

                    {/* FAQ and Related Tools */}
                    <div className="mt-32">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                            <div>
                                <h3 className="text-2xl font-black tracking-tighter text-[#064e3b] mb-8">Profitability FAQ</h3>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-bold text-[#064e3b] text-sm italic">"Does Amazon charge VAT/Sales Tax before or after royalty?"</h4>
                                        <p className="text-xs text-[#064e3b]/60 mt-2 leading-relaxed">Royalties are always calculated based on the net price after applicable taxes in the local marketplace.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#064e3b] text-sm italic">"What is the 'Delivery Fee' on Ebooks?"</h4>
                                        <p className="text-xs text-[#064e3b]/60 mt-2 leading-relaxed">If you choose the 70% option, Amazon charges a small fee (usually $0.15/MB) based on the file size of your book.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-black tracking-tighter text-[#064e3b] mb-8">Marketing Tools</h3>
                                <div className="grid grid-cols-1 gap-3">
                                    <Link href="/tools/amazon-sales-calculator" className="flex items-center justify-between p-4 bg-white/60 backdrop-blur-xl border border-border rounded-2xl group hover:border-primary transition-colors">
                                        <span className="text-sm font-bold flex items-center gap-2"><BarChart3 className="w-4 h-4 text-primary" /> Sales Estimator</span>
                                        <ArrowRightCircle className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-primary" />
                                    </Link>
                                    <Link href="/tools/spine-width-calculator" className="flex items-center justify-between p-4 bg-white/60 backdrop-blur-xl border border-border rounded-2xl group hover:border-primary transition-colors">
                                        <span className="text-sm font-bold flex items-center gap-2"><Calculator className="w-4 h-4 text-primary" /> Spine Calculator</span>
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

