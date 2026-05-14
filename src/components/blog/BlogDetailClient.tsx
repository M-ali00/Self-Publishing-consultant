"use client";

import { Clock, ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { PostContent, Section } from "@/data/blog-content";

const categoryColors: Record<string, string> = {
    "Publishing Tips": "bg-primary/10 text-primary border-primary/20",
    "Marketing": "bg-orange-500/10 text-orange-600 border-orange-500/20",
    "Tools & Resources": "bg-secondary/20 text-[#064e3b] border-secondary/30",
    "Author Stories": "bg-purple-500/10 text-purple-600 border-purple-500/20",
    "Industry News": "bg-blue-500/10 text-blue-600 border-blue-500/20",
    "Pillar Guides": "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
};

function renderSection(s: Section, i: number) {
    if (s.type === "h2") return (
        <h2 key={i} id={`heading-${i}`} className="text-2xl md:text-3xl font-bold text-[#064e3b] tracking-tight mt-14 mb-5 scroll-mt-32">{s.text}</h2>
    );
    if (s.type === "p") return (
        <p key={i} className="text-[#064e3b]/70 font-medium leading-relaxed mb-5 text-base md:text-lg">{s.text}</p>
    );
    if (s.type === "hr") return (
        <hr key={i} className="border-border my-10" />
    );
    if (s.type === "ul") return (
        <ul key={i} className="space-y-2 my-6 pl-2">
            {s.items.map((item, j) => (
                <li key={j} className="flex items-start gap-3 text-[#064e3b]/70 font-medium leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    {item}
                </li>
            ))}
        </ul>
    );
    if (s.type === "ol") return (
        <ol key={i} className="space-y-3 my-6 pl-2">
            {s.items.map((item, j) => (
                <li key={j} className="flex items-start gap-4 text-[#064e3b]/70 font-medium leading-relaxed">
                    <span className="w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-black flex items-center justify-center shrink-0 mt-0.5">{j + 1}</span>
                    {item}
                </li>
            ))}
        </ol>
    );
    if (s.type === "blockquote") return (
        <blockquote key={i} className="my-8 pl-6 border-l-4 border-primary italic text-[#064e3b]/80 font-medium text-lg leading-relaxed">
            {s.text}
        </blockquote>
    );
    if (s.type === "tip") return (
        <div key={i} className="my-8 p-6 rounded-2xl bg-primary/5 border border-primary/15 flex gap-4 items-start">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
            <div>
                <p className="font-black text-[#064e3b] text-sm uppercase tracking-widest mb-1">{s.title}</p>
                <p className="text-sm text-[#064e3b]/70 font-medium leading-relaxed">{s.body}</p>
            </div>
        </div>
    );
    if (s.type === "table") return (
        <div key={i} className="overflow-x-auto my-8 rounded-2xl border border-border">
            <table className="w-full text-left border-collapse text-sm">
                <thead className="bg-[#064e3b] text-white">
                    <tr>{s.headers.map((h, j) => <th key={j} className="p-4 font-bold uppercase tracking-widest text-xs">{h}</th>)}</tr>
                </thead>
                <tbody>
                    {s.rows.map((row, j) => (
                        <tr key={j} className="border-t border-border hover:bg-muted/30 transition-colors">
                            {row.map((cell, k) => <td key={k} className="p-4 text-[#064e3b]/70 font-medium">{cell}</td>)}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
    return null;
}

export default function BlogDetailClient({ post, relatedPosts }: { post: PostContent; relatedPosts: { slug: string; title: string; readTime: string }[] }) {
    return (
        <main className="min-h-screen bg-transparent">
            {/* Breadcrumb */}
            <nav className="pt-28 pb-6 px-6 max-w-4xl mx-auto">
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#064e3b]/40">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight className="w-3 h-3" />
                    <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-primary truncate max-w-[200px]">{post.title}</span>
                </div>
            </nav>

            {/* Header */}
            <header className="max-w-4xl mx-auto px-6 mb-12">
                <div className="mb-5">
                    <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border ${categoryColors[post.category] ?? "bg-primary/10 text-primary border-primary/20"}`}>
                        {post.category}
                    </span>
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#064e3b] tracking-tighter leading-tight mb-6">
                    {post.title}
                </h1>
                <p className="text-lg md:text-xl text-[#064e3b]/60 font-medium leading-relaxed mb-8">
                    {post.excerpt}
                </p>
                <div className="flex items-center gap-6 pb-8 border-b border-border">
                    <div className="flex items-center gap-3">
                        <img src={`https://i.pravatar.cc/48?u=${post.author}`} className="w-11 h-11 rounded-full border-2 border-border" alt={post.author} />
                        <div>
                            <p className="font-bold text-[#064e3b] text-sm leading-none">{post.author}</p>
                            <p className="text-[10px] text-[#064e3b]/40 font-bold uppercase tracking-wider mt-1">{post.date}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#064e3b]/40">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-bold">{post.readTime}</span>
                    </div>
                </div>
            </header>

            {/* Cover image */}
            <div className="max-w-5xl mx-auto px-6 mb-16">
                <div className="aspect-[21/9] rounded-3xl overflow-hidden border border-border shadow-2xl">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
            </div>

            {/* 3-Column Layout: TOC | Article | Sidebar */}
            <div className="max-w-7xl mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-10 xl:gap-14">

                    {/* LEFT — Table of Contents (sticky) */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-28">
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#064e3b]/30 mb-5">On this page</p>
                            <nav className="space-y-2.5 border-l-2 border-border pl-4">
                                {post.sections.map((s, i) => s.type === "h2" ? (
                                    <button
                                        key={i}
                                        onClick={() => {
                                            const target = document.getElementById(`heading-${i}`);
                                            if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
                                        }}
                                        className="block text-left text-xs font-semibold text-[#064e3b]/45 hover:text-primary transition-colors leading-snug cursor-pointer"
                                    >
                                        {s.text}
                                    </button>
                                ) : null)}
                            </nav>

                            {/* Share */}
                            <div className="mt-10 pt-6 border-t border-border">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#064e3b]/30 mb-4">Share</p>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => window.open("https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href) + "&text=" + encodeURIComponent(post.title), "_blank")}
                                        className="w-9 h-9 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white text-primary/50 transition-all text-xs font-black"
                                    >
                                        X
                                    </button>
                                    <button
                                        onClick={() => window.open("https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(window.location.href), "_blank")}
                                        className="w-9 h-9 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white text-primary/50 transition-all text-xs font-black"
                                    >
                                        in
                                    </button>
                                    <button
                                        onClick={() => { navigator.clipboard.writeText(window.location.href); }}
                                        className="w-9 h-9 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white text-primary/50 transition-all text-xs font-black"
                                    >
                                        &#x1F517;
                                    </button>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* CENTER — Article */}
                    <article className="min-w-0">
                        {post.sections.map((s, i) => renderSection(s, i))}

                        {/* Back to blog */}
                        <div className="mt-16 pt-8 border-t border-border">
                            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-hover transition-colors group">
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                Back to all articles
                            </Link>
                        </div>
                    </article>

                    {/* RIGHT — Sidebar */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-28 space-y-8">

                            {/* Author Card */}
                            <div className="rounded-2xl border border-border bg-white/60 backdrop-blur-xl p-6">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#064e3b]/30 mb-4">Written by</p>
                                <div className="flex items-center gap-3 mb-4">
                                    <img src={`https://i.pravatar.cc/48?u=${post.author}`} className="w-12 h-12 rounded-full border-2 border-border" alt={post.author} />
                                    <div>
                                        <p className="font-bold text-[#064e3b] text-sm">{post.author}</p>
                                        <p className="text-[9px] text-[#064e3b]/40 font-bold uppercase tracking-wider">{post.category}</p>
                                    </div>
                                </div>
                                <p className="text-xs text-[#064e3b]/50 leading-relaxed">Contributing expert at Self-Publishing Consultant with hands-on experience in the indie publishing industry.</p>
                            </div>

                            {/* Related Posts */}
                            <div className="rounded-2xl border border-border bg-white/60 backdrop-blur-xl p-6">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#064e3b]/30 mb-5">Related Articles</p>
                                <div className="space-y-4">
                                    {relatedPosts.map((rel) => (
                                        <Link key={rel.slug} href={`/blog/${rel.slug}`} className="group block">
                                            <p className="text-sm font-bold text-[#064e3b] leading-snug group-hover:text-primary transition-colors mb-1">
                                                {rel.title}
                                            </p>
                                            <p className="text-[9px] font-bold text-[#064e3b]/30 uppercase tracking-wider">{rel.readTime}</p>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Newsletter Mini CTA */}
                            <div className="rounded-2xl bg-[#022c22] p-6 text-white relative overflow-hidden">
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-[40px]" />
                                <div className="relative z-10">
                                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-3">Newsletter</p>
                                    <p className="font-bold text-sm mb-1 tracking-tight">Get weekly publishing tips</p>
                                    <p className="text-[10px] text-white/40 mb-4">Join 4,000+ indie authors</p>
                                    <form onSubmit={e => e.preventDefault()} className="space-y-2">
                                        <input
                                            type="email"
                                            placeholder="your@email.com"
                                            className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/30 text-xs px-4 py-2.5 rounded-xl outline-none focus:border-primary transition-all"
                                        />
                                        <button type="submit" className="w-full bg-primary text-white text-[10px] font-black uppercase tracking-widest py-2.5 rounded-xl hover:bg-primary-hover transition-all">
                                            Subscribe Free
                                        </button>
                                    </form>
                                </div>
                            </div>

                            {/* Quick Tools */}
                            <div className="rounded-2xl border border-border bg-white/60 backdrop-blur-xl p-6">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#064e3b]/30 mb-4">Free Author Tools</p>
                                <div className="space-y-2">
                                    {[
                                        { name: "ISBN Barcode Generator", href: "/tools/isbn-barcode-generator" },
                                        { name: "Royalty Calculator", href: "/tools/royalty-calculator" },
                                        { name: "Book Description Generator", href: "/tools/book-description-generator" },
                                        { name: "Spine Width Calculator", href: "/tools/spine-width-calculator" },
                                    ].map(tool => (
                                        <Link
                                            key={tool.href}
                                            href={tool.href}
                                            className="flex items-center gap-2 text-xs font-semibold text-[#064e3b]/50 hover:text-primary transition-colors py-1.5 group"
                                        >
                                            <ChevronRight className="w-3 h-3 text-primary/40 group-hover:translate-x-0.5 transition-transform" />
                                            {tool.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
