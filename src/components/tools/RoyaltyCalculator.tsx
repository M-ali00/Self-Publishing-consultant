"use client";

import React, { useState, useEffect } from "react";
import { Calculator, DollarSign, Info, TrendingUp } from "lucide-react";

export const RoyaltyCalculator = () => {
    const [price, setPrice] = useState<number | "">(19.99);
    const [pageCount, setPageCount] = useState<number | "">(200);
    const [interiorType, setInteriorType] = useState<"bw" | "color">("bw");
    const [isExpanded, setIsExpanded] = useState(false);

    const [results, setResults] = useState({
        printingCost: 0,
        royalty: 0,
        margin: 0
    });

    useEffect(() => {
        // Basic KDP-style logic
        const pCount = Number(pageCount) || 0;
        const lPrice = Number(price) || 0;

        const fixedCost = 0.85;
        const perPageCost = interiorType === "bw" ? 0.012 : 0.07;
        const printingCost = fixedCost + (pCount * perPageCost);

        const royaltyRate = isExpanded ? 0.40 : 0.60;
        const grossRoyalty = lPrice * royaltyRate;
        const netRoyalty = Math.max(0, grossRoyalty - printingCost);
        const margin = lPrice > 0 ? (netRoyalty / lPrice) * 100 : 0;

        setResults({
            printingCost: Number(printingCost.toFixed(2)),
            royalty: Number(netRoyalty.toFixed(2)),
            margin: Number(margin.toFixed(1))
        });
    }, [price, pageCount, interiorType, isExpanded]);

    return (
        <div className="bento-card bg-white/40 backdrop-blur-sm border-primary/10 h-full flex flex-col">
            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-[#064e3b] border border-secondary/20">
                    <Calculator className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold tracking-tight text-[#064e3b]">Royalty Calculator</h3>
                    <p className="text-[#064e3b]/40 text-sm font-medium">Estimate your earnings per sale</p>
                </div>
            </div>

            <div className="space-y-6 flex-grow">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-foreground/40 mb-2">
                            List Price ($)
                        </label>
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value === "" ? "" : Number(e.target.value))}
                            step="0.01"
                            className="w-full bg-white/50 border border-border px-4 py-3 rounded-xl text-lg font-bold outline-none focus:border-primary transition-colors text-primary"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-foreground/40 mb-2">
                            Page Count
                        </label>
                        <input
                            type="number"
                            value={pageCount}
                            onChange={(e) => setPageCount(e.target.value === "" ? "" : Number(e.target.value))}
                            className="w-full bg-white/50 border border-border px-4 py-3 rounded-xl text-lg font-bold outline-none focus:border-primary transition-colors text-primary"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-foreground/40 mb-4">
                        Interior Type
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            onClick={() => setInteriorType("bw")}
                            className={`px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-widest transition-all border ${interiorType === "bw"
                                ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                                : "bg-white/50 text-foreground/60 border-border hover:border-primary/30"
                                }`}
                        >
                            Black & White
                        </button>
                        <button
                            onClick={() => setInteriorType("color")}
                            className={`px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-widest transition-all border ${interiorType === "color"
                                ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                                : "bg-white/50 text-foreground/60 border-border hover:border-primary/30"
                                }`}
                        >
                            Standard Color
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-2xl border border-border">
                    <div>
                        <p className="font-bold text-[#064e3b]">Expanded Distribution</p>
                        <p className="text-xs text-foreground/40 font-medium">Lower royalty, wider reach</p>
                    </div>
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className={`w-14 h-8 rounded-full transition-all relative ${isExpanded ? "bg-primary" : "bg-foreground/10"
                            }`}
                    >
                        <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${isExpanded ? "left-7" : "left-1"
                            }`} />
                    </button>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-8">
                    <div className="p-4 bg-white border border-border rounded-2xl text-center">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-1">Print Cost</p>
                        <p className="text-xl font-black text-[#064e3b]">${results.printingCost}</p>
                    </div>
                    <div className="p-4 bg-primary/5 border border-primary/20 rounded-2xl text-center">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">Your Royalty</p>
                        <p className="text-2xl font-black text-primary">${results.royalty}</p>
                    </div>
                    <div className="p-4 bg-secondary/5 border border-secondary/20 rounded-2xl text-center">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-1">Net Margin</p>
                        <p className="text-xl font-black text-[#064e3b]">{results.margin}%</p>
                    </div>
                </div>
            </div>

            <div className="mt-8 p-4 bg-primary/5 rounded-xl flex gap-3 items-start">
                <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-[11px] text-[#064e3b]/60 leading-relaxed font-medium">
                    Estimates are based on standard industry rates. Final royalties may vary depending on the specific retail platform and regional taxes.
                </p>
            </div>
        </div>
    );
};
