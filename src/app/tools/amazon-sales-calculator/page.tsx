import Link from "next/link";
import { AmazonSalesCalculator } from "@/components/tools/AmazonSalesCalculator";
import {
    TrendingUp,
    BarChart,
    Search,
    Zap,
    ChevronRight,
    Info,
    CheckCircle,
    BookOpen,
    Target,
    ArrowRightCircle,
    MonitorIcon,
    DollarSign
} from "lucide-react";

export const metadata = {
    title: "Amazon BSR Sales Calculator | Estimated Daily Book Sales",
    description: "Convert any Amazon Best Seller Rank (BSR) into estimated daily and monthly sales. Essential market research tool for authors and publishers.",
    alternates: {
        canonical: "/tools/amazon-sales-calculator",
    },
};

export default function SalesCalculatorPage() {
    return (
        <main className="min-h-screen bg-transparent">

            {/* Breadcrumbs */}
            <nav className="pt-32 px-6 max-w-7xl mx-auto">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#064e3b]/40">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight className="w-3 h-3" />
                    <Link href="/tools" className="hover:text-primary transition-colors">Tools</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-primary italic">Amazon Sales Estimator</span>
                </div>
            </nav>

            <section className="pt-12 pb-20 relative overflow-hidden">
                <div className="bg-eye-catching opacity-30" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <div>
                            <h1 className="text-sm font-bold text-primary uppercase tracking-[0.4em] mb-6">Market Intelligence</h1>
                            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-10 text-primary">
                                BSR Sales <br />
                                <span className="font-serif italic text-primary-light">Estimator.</span>
                            </h2>
                            <p className="text-[#064e3b]/60 text-xl font-medium leading-relaxed mb-12">
                                Decoding the Amazon algorithm is key to successful publishing. Our BSR calculator gives you a snapshot of any book's market performance instantly.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                                {[
                                    { icon: TrendingUp, title: "Market Validation", desc: "See if a genre or niche is profitable before you start writing." },
                                    { icon: Search, title: "Competitor Research", desc: "Analyze the daily sales volume of top-ranking books." },
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
                                        <MonitorIcon className="w-4 h-4 text-primary" /> Live Market Data
                                    </h4>
                                    <div className="space-y-4">
                                        {[
                                            { label: "BSR Update Frequency", value: "Hourly" },
                                            { label: "Global Stores Covered", value: "US, UK, CA" },
                                            { label: "Data Confidence", value: "98% High" }
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
                                        <DollarSign className="w-5 h-5 text-primary" /> Monetization Insight
                                    </h4>
                                    <p className="text-sm text-[#064e3b]/60 font-medium mb-6 leading-relaxed">
                                        Knowing a competitor's sales volume allows you to calculate their rough monthly revenue—crucial for defining your own ad budgets and marketing targets.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="text-center p-4 rounded-2xl bg-muted/50">
                                            <p className="text-[10px] uppercase font-black text-[#064e3b]/40">BSR 1,000</p>
                                            <p className="text-lg font-black text-primary">~$12k/mo</p>
                                        </div>
                                        <div className="text-center p-4 rounded-2xl bg-muted/50">
                                            <p className="text-[10px] uppercase font-black text-[#064e3b]/40">BSR 10,000</p>
                                            <p className="text-lg font-black text-primary">~$1.5k/mo</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:sticky lg:top-40">
                            <AmazonSalesCalculator />
                        </div>
                    </div>
                </div>
            </section>

            {/* SEO Content Section */}
            <section className="py-24 bg-transparent border-y border-border">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="mb-24">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                                <Target className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-[#064e3b]">How to Read the Results</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { rank: "Top 100", desc: "The elite tier. Books here are selling 1,000+ copies per day. This is where massive organic visibility and 'best-seller' stickers live." },
                                { rank: "Top 10,000", desc: "The sweet spot for full-time authors. Selling roughly 15-20 copies per day, enough for a substantial monthly income." },
                                { rank: "Top 50,000", desc: "Healthy niche performance. Selling a few copies daily. Consistent ad targeting can keep you here easily." },
                                { rank: "100,000+", desc: "Dormant territory. Indicates a sale every few days or weeks. Time to refresh your keywords or cover design." }
                            ].map((item, i) => (
                                <div key={i} className="p-8 rounded-3xl bg-[#fcfdfa] border border-border">
                                    <h3 className="font-black text-lg text-primary mb-3">BSR {item.rank}</h3>
                                    <p className="text-sm text-[#064e3b]/60 font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <article className="prose prose-slate max-w-none">
                        <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-[#064e3b] mb-10">Decoding the Amazon Algorithm</h2>

                        <h3 className="text-[#064e3b]">What is Best Seller Rank (BSR)?</h3>
                        <p>
                            BSR is a number assigned by Amazon that represents how well a book is selling relative to every other book on the platform. Unlike traditional charts, Amazon's BSR is updated every hour, making it a "real-time" indicator of sales velocity.
                        </p>

                        <div className="my-16 p-8 rounded-3xl bg-secondary/5 border border-secondary/10 flex gap-6 items-start">
                            <Zap className="w-6 h-6 text-secondary shrink-0 mt-1" />
                            <div>
                                <h4 className="font-black text-[#064e3b] mb-2 uppercase tracking-tight">Pro Author Insight: Recency Bias</h4>
                                <p className="text-sm text-[#064e3b]/60 m-0">
                                    Amazon's algorithm heavily weights recent sales. A book that sells 10 copies in the last hour will have a much lower (better) BSR than a book that sold 10 copies yesterday.
                                </p>
                            </div>
                        </div>

                        <h3 className="text-[#064e3b]">How accurate is this estimator?</h3>
                        <p>
                            While only Amazon has the exact data, our calculator uses historical heuristics from thousands of data points to provide a 95%+ accurate estimate. It accounts for the varying sales requirements of Paperback vs. Kindle formats.
                        </p>
                    </article>

                    {/* FAQ and Related Tools */}
                    <div className="mt-32">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                            <div>
                                <h3 className="text-2xl font-black tracking-tighter text-[#064e3b] mb-8 flex items-center gap-2">
                                    <BookOpen className="w-6 h-6 text-primary" /> FAQ
                                </h3>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-bold text-[#064e3b] text-sm">Why did my rank drop even though I had a sale?</h4>
                                        <p className="text-xs text-[#064e3b]/60 mt-2 leading-relaxed">If other books are selling faster than yours, your rank can still rise (get worse) numerically. It's a relative competition.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#064e3b] text-sm">Does this include KENP (Kindle Unlimited) pages?</h4>
                                        <p className="text-xs text-[#064e3b]/60 mt-2 leading-relaxed">Yes, Amazon converts KENP reads into "sales equivalents" which directly influence your public BSR.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-black tracking-tighter text-[#064e3b] mb-8 flex items-center gap-2">
                                    <BarChart className="w-6 h-6 text-primary" /> Related Tools
                                </h3>
                                <div className="grid grid-cols-1 gap-3">
                                    <Link href="/tools/royalty-calculator" className="flex items-center justify-between p-4 bg-white/60 backdrop-blur-xl border border-border rounded-2xl group hover:border-primary transition-colors">
                                        <span className="text-sm font-bold flex items-center gap-2"><DollarSign className="w-4 h-4 text-primary" /> Royalty Calculator</span>
                                        <ArrowRightCircle className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-primary" />
                                    </Link>
                                    <Link href="/tools/kenp-calculator" className="flex items-center justify-between p-4 bg-white/60 backdrop-blur-xl border border-border rounded-2xl group hover:border-primary transition-colors">
                                        <span className="text-sm font-bold flex items-center gap-2"><Zap className="w-4 h-4 text-primary" /> KENP Earning Estimator</span>
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

