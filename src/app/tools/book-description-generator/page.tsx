import Link from "next/link";
import { DescriptionGenerator } from "@/components/tools/DescriptionGenerator";
import {
    Sparkles,
    FileText,
    Layout,
    MousePointer2,
    ChevronRight,
    Info,
    CheckCircle,
    Eye,
    Code2,
    ArrowRightCircle,
    Target,
    Zap
} from "lucide-react";

export const metadata = {
    title: "Amazon Book Blurb Generator | KDP HTML Description Tool",
    description: "Format your book description for Amazon KDP easily. Use headers, bold, and lists without knowing HTML. Professional layout tool for authors.",
};

export default function BlurbGeneratorPage() {
    return (
        <main className="min-h-screen bg-transparent">

            {/* Breadcrumbs */}
            <nav className="pt-32 px-6 max-w-7xl mx-auto">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary/40">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight className="w-3 h-3" />
                    <Link href="/tools" className="hover:text-primary transition-colors">Tools</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-primary italic">Description Formatter</span>
                </div>
            </nav>

            <section className="pt-12 pb-20 relative overflow-hidden">
                <div className="bg-eye-catching opacity-20" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <div>
                            <h1 className="text-sm font-bold text-primary uppercase tracking-[0.4em] mb-6">Conversion Optimization</h1>
                            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-10 text-primary">
                                Blurb HTML <br />
                                <span className="font-serif italic text-primary-light">Generator.</span>
                            </h2>
                            <p className="text-primary/60 text-xl font-medium leading-relaxed mb-12">
                                Clean formatting is the difference between an amateur blurb and a best-seller. Generate Amazon-approved HTML without writing code.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                                {[
                                    { icon: Sparkles, title: "KDP Optimized", desc: "Uses tags officially supported by the Kindle storefront." },
                                    { icon: Layout, title: "Visual Hierarchy", desc: "Easily add headings and list tiers to make blurbs skimmable." },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary text-base">{item.title}</h4>
                                            <p className="text-xs text-primary/50 font-medium leading-tight">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-12">
                                <div className="p-8 rounded-[32px] bg-primary/5 border border-primary/10">
                                    <h4 className="text-sm font-black text-primary mb-6 flex items-center gap-2">
                                        <Code2 className="w-4 h-4 text-primary" /> Supported Tags
                                    </h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            "Bold (<b>)", "Italic (<i>)", "Headings (<h1>)", "Lists (<ul>)", "Amazon Icons"
                                        ].map((stat, i) => (
                                            <div key={i} className="flex items-center gap-2 text-[10px] font-black text-primary/60 uppercase tracking-tighter">
                                                <CheckCircle className="w-3 h-3 text-primary" /> {stat}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-8 rounded-[32px] bg-white border border-border shadow-sm">
                                    <h4 className="text-base font-black text-primary mb-4 flex items-center gap-2">
                                        <Eye className="w-5 h-5 text-primary" /> The Scan Test
                                    </h4>
                                    <p className="text-sm text-primary/60 font-medium leading-relaxed">
                                        80% of Amazon shoppers scan the description before reading. If they don't see a bold hook or bullet points within 3 seconds, they bounce. Our tool forces good structure.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:sticky lg:top-40">
                            <DescriptionGenerator />
                        </div>
                    </div>
                </div>
            </section>

            {/* In-Depth SEO Content Section */}
            <section className="py-24 bg-transparent border-y border-border">
                <div className="max-w-4xl mx-auto px-6">
                    <article className="prose prose-slate max-w-none">
                        <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-primary mb-12">How to Write a High-Converting Blurb</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                            <div>
                                <h3 className="text-primary text-xl font-black">The Hook (The Headline)</h3>
                                <p className="text-primary/60 leading-relaxed font-medium">
                                    Start with a bold, attention-grabbing statement. Use our Heading tags to make this stand out. This should speak directly to the reader's main pain point or the high-stakes conflict of your story.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-primary text-xl font-black">Social Proof & Tropes</h3>
                                <p className="text-primary/60 leading-relaxed font-medium">
                                    Use bullet points to list awards, reviews, or comparable authors ("Fans of Sarah J. Maas will love..."). This helps readers categorize your book instantly.
                                </p>
                            </div>
                        </div>

                        <div className="my-16 p-8 rounded-3xl bg-secondary/5 border border-secondary/10">
                            <div className="gap-4 items-start flex">
                                <Zap className="w-6 h-6 text-secondary shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-black text-primary mb-2 uppercase tracking-tight">KDP Formatter Warning</h4>
                                    <p className="text-sm text-primary/60 m-0">
                                        Never copy-paste directly from Microsoft Word into the KDP dashboard. Word adds "hidden" code that breaks Amazon's layout. Always run your text through our generator first to "sanitize" the HTML.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-black tracking-tighter text-primary mb-8">Amazon Description Technical Limits</h2>
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-primary/5">
                                    <th className="p-4 text-left text-xs font-black uppercase">Limit Type</th>
                                    <th className="p-4 text-left text-xs font-black uppercase">Capacity</th>
                                    <th className="p-4 text-left text-xs font-black uppercase">Requirement</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t border-border">
                                    <td className="p-4 font-bold">Character Count</td>
                                    <td className="p-4">4,000 Characters</td>
                                    <td className="p-4 text-sm opacity-60">Including HTML Tags</td>
                                </tr>
                                <tr className="border-t border-border">
                                    <td className="p-4 font-bold">Allowed Tags</td>
                                    <td className="p-4">~8 Standard Tags</td>
                                    <td className="p-4 text-sm opacity-60">KDP/B&N Supported Only</td>
                                </tr>
                                <tr className="border-t border-border">
                                    <td className="p-4 font-bold">Emoji Support</td>
                                    <td className="p-4">Limited</td>
                                    <td className="p-4 text-sm opacity-60">Standard Unicode Only</td>
                                </tr>
                            </tbody>
                        </table>
                    </article>

                    {/* FAQ and Related Tools */}
                    <div className="mt-32">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                            <div>
                                <h3 className="text-2xl font-black tracking-tighter text-primary mb-8">Copywriting FAQ</h3>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-bold text-primary text-sm italic">"Should I use my book's first chapter as the blurb?"</h4>
                                        <p className="text-xs text-primary/60 mt-2 leading-relaxed">No. A blurb is a sales document, not a literary one. Focus on the 'why' rather than the 'what'.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary text-sm italic">"Do keywords in the description help SEO?"</h4>
                                        <p className="text-xs text-primary/60 mt-2 leading-relaxed">Yes, on Google. For Amazon internal search, the 7 backend keyword slots are more important, but the blurb still helps customer conversion.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-black tracking-tighter text-primary mb-8">Design Tools</h3>
                                <div className="grid grid-cols-1 gap-3">
                                    <Link href="/tools/isbn-barcode-generator" className="flex items-center justify-between p-4 bg-white/60 backdrop-blur-xl border border-border rounded-2xl group hover:border-primary transition-colors">
                                        <span className="text-sm font-bold flex items-center gap-2"><FileText className="w-4 h-4 text-primary" /> Barcode Generator</span>
                                        <ArrowRightCircle className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-primary" />
                                    </Link>
                                    <Link href="/tools/spine-width-calculator" className="flex items-center justify-between p-4 bg-white/60 backdrop-blur-xl border border-border rounded-2xl group hover:border-primary transition-colors">
                                        <span className="text-sm font-bold flex items-center gap-2"><Layout className="w-4 h-4 text-primary" /> Spine Calculator</span>
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

