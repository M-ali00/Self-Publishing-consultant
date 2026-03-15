"use client";

import React, { useState } from "react";
import { Hash, Copy, Check, Sparkles, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const genreTags: Record<string, string[]> = {
    "fiction": ["#fiction", "#novel", "#reading", "#bookstagram", "#writerslife", "#storytelling", "#booklover"],
    "non-fiction": ["#nonfiction", "#learning", "#growth", "#knowledge", "#success", "#selfhelp", "#education"],
    "romance": ["#romancebooks", "#romanceauthor", "#bookish", "#spicybooks", "#bookrecs", "#romancestory"],
    "fantasy": ["#fantasybooks", "#worldbuilding", "#epicfantasy", "#magic", "#fantasyart", "#dragon"],
    "thriller": ["#thrillerbooks", "#mystery", "#suspense", "#psychologicalthriller", "#mustread"],
    "business": ["#entrepreneur", "#businessbooks", "#leadership", "#productivity", "#mindset", "#success"],
};

const goalTags: Record<string, string[]> = {
    "reach": ["#explorepage", "#trending", "#viral", "#bookish", "#writingcommunity"],
    "engagement": ["#qotd", "#writerlife", "#creative", "#askauthor", "#bookworm"],
    "sales": ["#newrelease", "#kindle", "#amazonfinds", "#mustread", "#on-sale", "#bestseller"],
};

export const HashtagGenerator = () => {
    const [genre, setGenre] = useState("fiction");
    const [goal, setGoal] = useState("reach");
    const [generatedTags, setGeneratedTags] = useState<string[]>([]);
    const [copied, setCopied] = useState(false);

    const generate = () => {
        const base = genreTags[genre] || [];
        const extra = goalTags[goal] || [];
        const combined = [...new Set([...base, ...extra])];

        // Shuffle and pick 15
        const shuffled = combined.sort(() => 0.5 - Math.random());
        setGeneratedTags(shuffled.slice(0, 15));
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedTags.join(" "));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bento-card bg-white/40 backdrop-blur-md border-primary/10 h-full flex flex-col">
            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 border border-blue-500/20">
                    <Hash className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold tracking-tight text-[#064e3b]">Hashtag Optimizer</h3>
                    <p className="text-[#064e3b]/40 text-sm font-medium">Boost discoverability on social platforms</p>
                </div>
            </div>

            <div className="space-y-6 flex-grow">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-foreground/40 mb-2">Book Genre</label>
                        <select
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                            className="w-full bg-white/50 border border-border px-4 py-3 rounded-xl text-sm font-bold outline-none focus:border-primary transition-colors text-primary"
                        >
                            {Object.keys(genreTags).map(g => (
                                <option key={g} value={g}>{g.charAt(0).toUpperCase() + g.slice(1)}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-foreground/40 mb-2">Primary Goal</label>
                        <select
                            value={goal}
                            onChange={(e) => setGoal(e.target.value)}
                            className="w-full bg-white/50 border border-border px-4 py-3 rounded-xl text-sm font-bold outline-none focus:border-primary transition-colors text-primary"
                        >
                            <option value="reach">Maximize Reach</option>
                            <option value="engagement">Community Engagement</option>
                            <option value="sales">Promote Sales</option>
                        </select>
                    </div>
                </div>

                <button
                    onClick={generate}
                    className="w-full bg-[#064e3b] text-white py-4 rounded-xl font-bold uppercase tracking-[0.2em] text-xs hover:scale-[1.02] transition-all flex items-center justify-center gap-3 active:scale-95"
                >
                    <Sparkles className="w-4 h-4" /> Generate Optimized Set
                </button>

                <AnimatePresence>
                    {generatedTags.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="mt-6 p-6 bg-white border border-border rounded-2xl relative group"
                        >
                            <div className="flex flex-wrap gap-2 mb-6">
                                {generatedTags.map((tag, i) => (
                                    <span key={i} className="text-xs font-bold px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full border border-blue-100 italic">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <button
                                onClick={copyToClipboard}
                                className="w-full flex items-center justify-center gap-2 py-3 bg-secondary text-[#064e3b] rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-secondary/80 transition-all"
                            >
                                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                {copied ? "Copied!" : "Copy to Clipboard"}
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="mt-8 p-4 bg-blue-500/5 rounded-xl flex gap-3 items-start border border-blue-500/10">
                <RefreshCw className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-[11px] text-[#064e3b]/60 leading-relaxed font-medium">
                    Protip: Mix high-volume hashtags with niche-specific ones for the best performance across Instagram, TikTok, and X.
                </p>
            </div>
        </div>
    );
};
