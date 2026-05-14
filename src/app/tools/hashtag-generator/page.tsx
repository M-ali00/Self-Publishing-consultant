import Link from "next/link";
import { HashtagGenerator } from "@/components/tools/HashtagGenerator";
import {
    Hash,
    Sparkles,
    Share2,
    ChevronRight,
    Info,
    CheckCircle,
    Instagram,
    TrendingUp,
    ArrowRightCircle,
    Target,
    Zap
} from "lucide-react";

export const metadata = {
    title: "Book Marketing Hashtag Generator | Instagram & TikTok for Authors",
    description: "Generate trending hashtags for your book marketing campaigns on social media. Reach more readers on TikTok, Instagram, and X.",
    alternates: {
        canonical: "/tools/hashtag-generator",
    },
};

export default function HashtagGeneratorPage() {
    return (
        <main className="min-h-screen bg-transparent">

            {/* Breadcrumbs */}
            <nav className="pt-32 px-6 max-w-7xl mx-auto">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#064e3b]/40">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight className="w-3 h-3" />
                    <Link href="/tools" className="hover:text-primary transition-colors">Tools</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-primary italic">Hashtag Optimizer</span>
                </div>
            </nav>

            <section className="pt-12 pb-20 relative overflow-hidden">
                <div className="bg-eye-catching opacity-20" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <div>
                            <h1 className="text-sm font-bold text-primary uppercase tracking-[0.4em] mb-6">Social Growth</h1>
                            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-10 text-primary">
                                Hashtag <br />
                                <span className="font-serif italic text-primary-light">Optimizer.</span>
                            </h2>
                            <p className="text-[#064e3b]/60 text-xl font-medium leading-relaxed mb-12">
                                Stop guessing which tags work. Our generator crafts goal-oriented hashtag bundles tailored to your genre and marketing objectives.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                                {[
                                    { icon: Sparkles, title: "Algorithm Ready", desc: "Balanced bundles of high-traffic and niche hashtags." },
                                    { icon: Share2, title: "Multi-Platform", desc: "Optimized for Instagram, TikTok, X, and Pinterest." },
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
                                        <Target className="w-4 h-4 text-primary" /> Reach Benchmarks
                                    </h4>
                                    <div className="space-y-4">
                                        {[
                                            { label: "Niche Engagement", value: "8-10%" },
                                            { label: "Discovery Rate", value: "Up 40%" },
                                            { label: "Bot Filtering", value: "Active" }
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
                                        <Zap className="w-5 h-5 text-primary" /> The 'Rule of 30'
                                    </h4>
                                    <p className="text-sm text-[#064e3b]/60 font-medium leading-relaxed">
                                        While Instagram allows 30 hashtags, latest data shows that 3-5 highly relevant tags out-perform "tag-stuffing" for reaching new audiences via the Explore page.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:sticky lg:top-40">
                            <HashtagGenerator />
                        </div>
                    </div>
                </div>
            </section>

            {/* In-Depth SEO Content Section */}
            <section className="py-24 bg-transparent border-y border-border">
                <div className="max-w-4xl mx-auto px-6">
                    <article className="prose prose-slate max-w-none">
                        <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-[#064e3b] mb-12">Mastering Book Social Media Discovery</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                            <div>
                                <h3 className="text-[#064e3b] text-xl font-black">TikTok (BookTok) Strategy</h3>
                                <p className="text-[#064e3b]/60 leading-relaxed font-medium">
                                    BookTok is driven by "aesthetic" hashtags. Instead of just #romance, use tags like #slowburn, #enemiestolovers, or #grumpyxsunshine to reach readers looking for specific tropes.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-[#064e3b] text-xl font-black">Instagram (Bookstagram)</h3>
                                <p className="text-[#064e3b]/60 leading-relaxed font-medium">
                                    Engagement is king here. Mix broad tags (#bookstagram) with community-specific ones (#bookish) and extremely specific genre tags to hit the widest possible cross-section.
                                </p>
                            </div>
                        </div>

                        <div className="my-16 p-8 rounded-3xl bg-secondary/5 border border-secondary/10">
                            <div className="flex gap-4 items-start">
                                <Info className="w-6 h-6 text-secondary shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-black text-[#064e3b] mb-2 uppercase tracking-tight">The Shadowban Myth</h4>
                                    <p className="text-sm text-[#064e3b]/60 m-0">
                                        Using the same block of hashtags every day can trigger spam filters. Our generator produces "shuffled" variations to keep your account safe and your reach high.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-black tracking-tighter text-[#064e3b] mb-8">Platform Hashtag Capacity</h2>
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-primary/5">
                                    <th className="p-4 text-left text-xs font-black uppercase">Platform</th>
                                    <th className="p-4 text-left text-xs font-black uppercase">Max Count</th>
                                    <th className="p-4 text-left text-xs font-black uppercase">Recommended</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t border-border">
                                    <td className="p-4 font-bold">Instagram</td>
                                    <td className="p-4">30</td>
                                    <td className="p-4 text-sm opacity-60">5-11 Highly Specific</td>
                                </tr>
                                <tr className="border-t border-border">
                                    <td className="p-4 font-bold">TikTok</td>
                                    <td className="p-4">Unlimited (Character limit)</td>
                                    <td className="p-4 text-sm opacity-60">3-6 Trope/Genre tags</td>
                                </tr>
                                <tr className="border-t border-border">
                                    <td className="p-4 font-bold">Pinterest</td>
                                    <td className="p-4">20</td>
                                    <td className="p-4 text-sm opacity-60">2-3 Broad Categories</td>
                                </tr>
                            </tbody>
                        </table>
                    </article>

                    {/* FAQ and Related Tools */}
                    <div className="mt-32">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                            <div>
                                <h3 className="text-2xl font-black tracking-tighter text-[#064e3b] mb-8">Social Media FAQ</h3>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-bold text-[#064e3b] text-sm italic">"Should I put hashtags in the caption or first comment?"</h4>
                                        <p className="text-xs text-[#064e3b]/60 mt-2 leading-relaxed">Most tests show no reach difference. However, captions are better for SEO discovery on both Instagram and TikTok.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#064e3b] text-sm italic">"Do capitalizing hashtags hurt performance?"</h4>
                                        <p className="text-xs text-[#064e3b]/60 mt-2 leading-relaxed">No. In fact, #CamelCase hashtags are better for accessibility (screen readers) and just as effective for search.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-black tracking-tighter text-[#064e3b] mb-8">Marketing Studio</h3>
                                <div className="grid grid-cols-1 gap-3">
                                    <Link href="/tools/book-description-generator" className="flex items-center justify-between p-4 bg-white/60 backdrop-blur-xl border border-border rounded-2xl group hover:border-primary transition-colors">
                                        <span className="text-sm font-bold flex items-center gap-2"><Sparkles className="w-4 h-4 text-primary" /> Blurb Generator</span>
                                        <ArrowRightCircle className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-primary" />
                                    </Link>
                                    <Link href="/tools/qr-code-generator" className="flex items-center justify-between p-4 bg-white/60 backdrop-blur-xl border border-border rounded-2xl group hover:border-primary transition-colors">
                                        <span className="text-sm font-bold flex items-center gap-2"><TrendingUp className="w-4 h-4 text-primary" /> QR Code Studio</span>
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

