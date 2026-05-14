import Link from "next/link";
import { SpineWidthCalculator } from "@/components/tools/SpineWidthCalculator";
import {
    Ruler,
    Layers,
    PenTool,
    CheckCircle,
    ChevronRight,
    Info,
    BookOpen,
    Settings,
    Layout,
    ArrowRightCircle
} from "lucide-react";

export const metadata = {
    title: "Book Spine Width Calculator | KDP & IngramSpark Cover Layout",
    description: "Calculate the exact spine width for your book cover design. Supports white paper, cream paper, and color interiors for KDP and IngramSpark.",
    alternates: {
        canonical: "/tools/spine-width-calculator",
    },
};

export default function SpineCalculatorPage() {
    return (
        <main className="min-h-screen bg-transparent">

            {/* Breadcrumbs */}
            <nav className="pt-32 px-6 max-w-7xl mx-auto">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary/40">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight className="w-3 h-3" />
                    <Link href="/tools" className="hover:text-primary transition-colors">Tools</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-accent">Spine Width Calculator</span>
                </div>
            </nav>

            <section className="pt-12 pb-20 relative overflow-hidden">
                <div className="bg-eye-catching opacity-20" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <div>
                            <h1 className="text-sm font-bold text-accent uppercase tracking-[0.4em] mb-6">Cover Engineering</h1>
                            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-10 text-primary">
                                Spine Width <br />
                                <span className="font-serif italic text-primary-light">Calculator.</span>
                            </h2>
                            <p className="text-primary/60 text-xl font-medium leading-relaxed mb-12">
                                Precision is everything in cover design. Even a 0.01" error can cause your spine text to drift onto the front cover. Get the math right for KDP, IngramSpark, and beyond.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                                {[
                                    { icon: Ruler, title: "Dual Units", desc: "Calculate in Inches or Millimeters for international print specs." },
                                    { icon: Layers, title: "Paper Weight", desc: "Accounts for white, cream, and color paper density." },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary">{item.title}</h4>
                                            <p className="text-xs text-primary/50 font-medium leading-tight">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-12">
                                <div className="p-8 rounded-[32px] bg-accent/5 border border-accent/10">
                                    <h4 className="text-sm font-black text-primary mb-6 flex items-center gap-2">
                                        <Info className="w-4 h-4 text-accent" /> Spine Design Safety
                                    </h4>
                                    <div className="space-y-4">
                                        {[
                                            { label: "Minimum Page Count", value: "100+ for Text" },
                                            { label: "Safety Margin (Quiet Zone)", value: "0.0625\"" },
                                            { label: "Bleed Allowance", value: "0.125\"" }
                                        ].map((stat, i) => (
                                            <div key={i} className="flex justify-between items-center border-b border-primary/5 pb-2">
                                                <span className="text-xs font-bold text-primary/60 uppercase tracking-tighter">{stat.label}</span>
                                                <span className="text-sm font-black text-primary">{stat.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-primary/40 mb-6 flex items-center gap-2">
                                        <div className="w-4 h-px bg-primary/20" /> Printer Compatibility
                                    </h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            { name: "Amazon KDP", status: "Verified" },
                                            { name: "IngramSpark", status: "Verified" },
                                            { name: "Lulu", status: "Supported" },
                                            { name: "BookBaby", status: "Supported" }
                                        ].map((p, i) => (
                                            <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white border border-border">
                                                <span className="text-[10px] font-bold text-primary">{p.name}</span>
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary-bright" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:sticky lg:top-40">
                            <SpineWidthCalculator />
                        </div>
                    </div>
                </div>
            </section>

            {/* In-Depth SEO Content Section */}
            <section className="py-24 bg-transparent border-y border-border">
                <div className="max-w-4xl mx-auto px-6">
                    {/* section: How to measure */}
                    <div className="mb-24">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-12 h-12 rounded-full bg-accent/5 flex items-center justify-center text-accent">
                                <Settings className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-primary">How to Use the Spine Calculator</h2>
                        </div>

                        <div className="space-y-12">
                            {[
                                { title: "1. Select Your Paper Type", desc: "Paper thickness varies by color and weight. 50lb White paper is thinner than 55lb Cream paper. Selecting the correct density is the first step to a perfect fit." },
                                { title: "2. Input Your Final Page Count", desc: "Include everything from the title page to the back matter. Even if you haven't finished formatting, use an estimate to start your cover design early." },
                                { title: "3. Choose Your Units", desc: "KDP usually prefers inches, while IngramSpark and some international printers use Millimeters (mm). Switch instantly to match your template." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6">
                                    <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-black shrink-0 text-xs">{i + 1}</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                                        <p className="text-primary/60 leading-relaxed font-medium">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section: Educational Guide */}
                    <article className="prose prose-slate max-w-none">
                        <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-primary mb-10">Professional Spine Design Guide</h2>

                        <p className="text-lg text-primary/70 font-medium leading-relaxed">
                            Creating a spine that looks professionally published requires more than just knowing its width. Here are the core principles used by high-end book designers.
                        </p>

                         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-16">
                            <div className="p-8 rounded-3xl bg-white/60 backdrop-blur-xl border border-border">
                                <Layout className="w-8 h-8 text-accent mb-4" />
                                <h3 className="text-xl font-black text-primary mt-0">The 100-Page Rule</h3>
                                <p className="text-sm text-primary/60 leading-relaxed">
                                    Most printers (including Amazon KDP) will not allow text on the spine if your book is under 100 pages. The spine is simply too narrow to ensure legible printing without drifting.
                                </p>
                            </div>
                            <div className="p-8 rounded-3xl bg-white/60 backdrop-blur-xl border border-border">
                                <PenTool className="w-8 h-8 text-accent mb-4" />
                                <h3 className="text-xl font-black text-primary mt-0">Quiet Zones</h3>
                                <p className="text-sm text-primary/60 leading-relaxed">
                                    Maintain a "quiet zone" of at least 0.0625" (1.6mm) on both sides of your spine text. This buffer prevents your title from wrapping onto the front or back cover.
                                </p>
                            </div>
                        </div>

                        <h3 className="text-primary">Why Paper Weight Matters</h3>
                        <p>
                            The "bulk" of a book depends entirely on the PPI (Pages Per Inch) of the paper stock. For example, standard 50lb white paper has a PPI of 500, meaning 500 pages equals one inch. However, 55lb cream paper is much fluffier, with a PPI around 434.
                        </p>

                        <table className="w-full mt-8 border-collapse">
                            <thead>
                                <tr className="bg-primary/5">
                                    <th className="p-4 text-left text-xs font-black uppercase">Paper Type</th>
                                    <th className="p-4 text-left text-xs font-black uppercase">PPI Density</th>
                                    <th className="p-4 text-left text-xs font-black uppercase">Typical Use</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t border-border">
                                    <td className="p-4 font-bold">50lb White</td>
                                    <td className="p-4">500</td>
                                    <td className="p-4 text-sm opacity-60">Non-fiction, Textbooks</td>
                                </tr>
                                <tr className="border-t border-border">
                                    <td className="p-4 font-bold">55lb Cream</td>
                                    <td className="p-4">434</td>
                                    <td className="p-4 text-sm opacity-60">Fiction, Memoirs</td>
                                </tr>
                                <tr className="border-t border-border">
                                    <td className="p-4 font-bold">Standard Color</td>
                                    <td className="p-4">450</td>
                                    <td className="p-4 text-sm opacity-60">Children's Books</td>
                                </tr>
                            </tbody>
                        </table>
                    </article>

                    {/* FAQ and Related Tools */}
                    <div className="mt-32">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                            <div>
                                <h3 className="text-2xl font-black tracking-tighter text-primary mb-8">FAQ</h3>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-bold text-primary text-sm">Does this include the cover thickness?</h4>
                                        <p className="text-xs text-primary/60 mt-2 leading-relaxed">No, this calculator provides the width for the interior block only. The cover wrap is typically accounted for by the printer's bleed settings.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary text-sm">Is this for Hardcovers?</h4>
                                        <p className="text-xs text-primary/60 mt-2 leading-relaxed">This tool is optimized for Paperbacks. Hardcover spines require additional "hinge" measurements which vary significantly by binder.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-black tracking-tighter text-primary mb-8">Related Design Tools</h3>
                                <div className="grid grid-cols-1 gap-3">
                                    <Link href="/tools/isbn-barcode-generator" className="flex items-center justify-between p-4 bg-white/60 backdrop-blur-xl border border-border rounded-2xl group hover:border-accent transition-colors">
                                        <span className="text-sm font-bold flex items-center gap-2"><Ruler className="w-4 h-4 text-accent" /> ISBN Barcode Generator</span>
                                        <ArrowRightCircle className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-accent" />
                                    </Link>
                                    <Link href="/tools/description-generator" className="flex items-center justify-between p-4 bg-white/60 backdrop-blur-xl border border-border rounded-2xl group hover:border-accent transition-colors">
                                        <span className="text-sm font-bold flex items-center gap-2"><BookOpen className="w-4 h-4 text-accent" /> Blurb Optimizer</span>
                                        <ArrowRightCircle className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-accent" />
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

