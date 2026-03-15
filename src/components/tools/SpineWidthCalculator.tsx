"use client";

import React, { useState, useEffect } from "react";
import { Book, Ruler, Layers, ArrowRightLeft } from "lucide-react";

export const SpineWidthCalculator = () => {
    const [pageCount, setPageCount] = useState<number | "">(200);
    const [paperType, setPaperType] = useState<"white" | "cream" | "color">("white");
    const [unit, setUnit] = useState<"in" | "mm">("in");

    const [spineWidth, setSpineWidth] = useState(0);

    useEffect(() => {
        // Standard industry PPI (Pages Per Inch) values
        const PPI = {
            white: 500,
            cream: 434,
            color: 450
        };

        const pages = Number(pageCount) || 0;
        const widthInInches = pages / PPI[paperType];

        if (unit === "in") {
            setSpineWidth(Number(widthInInches.toFixed(3)));
        } else {
            setSpineWidth(Number((widthInInches * 25.4).toFixed(2)));
        }
    }, [pageCount, paperType, unit]);

    return (
        <div className="bento-card bg-white/40 backdrop-blur-sm border-primary/10 h-full flex flex-col">
            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent border border-accent/20">
                    <Ruler className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold tracking-tight text-[#064e3b]">Spine Calculator</h3>
                    <p className="text-[#064e3b]/40 text-sm font-medium">Calculate exact spine width for your cover</p>
                </div>
            </div>

            <div className="space-y-6 flex-grow">
                <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-foreground/40 mb-2">
                        Total Page Count
                    </label>
                    <input
                        type="number"
                        value={pageCount}
                        onChange={(e) => setPageCount(e.target.value === "" ? "" : Number(e.target.value))}
                        className="w-full bg-white/50 border border-border px-4 py-3 rounded-xl text-lg font-bold outline-none focus:border-primary transition-colors text-primary"
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-foreground/40 mb-4">
                        Paper Weight / Type
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                        {["white", "cream", "color"].map((type) => (
                            <button
                                key={type}
                                onClick={() => setPaperType(type as any)}
                                className={`px-2 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all border ${paperType === type
                                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                                    : "bg-white/50 text-foreground/60 border-border hover:border-primary/30"
                                    }`}
                            >
                                {type === "white" ? "50lb White" : type === "cream" ? "55lb Cream" : "Standard Color"}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-2xl border border-border">
                    <div className="flex items-center gap-3">
                        <ArrowRightLeft className="w-4 h-4 text-primary" />
                        <span className="text-xs font-bold uppercase tracking-widest text-foreground/60">Measurement Unit</span>
                    </div>
                    <div className="flex bg-white rounded-lg p-1 border border-border">
                        <button
                            onClick={() => setUnit("in")}
                            className={`px-3 py-1 rounded-md text-[10px] font-black transition-all ${unit === "in" ? "bg-primary text-white" : "text-foreground/40"}`}
                        >
                            IN
                        </button>
                        <button
                            onClick={() => setUnit("mm")}
                            className={`px-3 py-1 rounded-md text-[10px] font-black transition-all ${unit === "mm" ? "bg-primary text-white" : "text-foreground/40"}`}
                        >
                            MM
                        </button>
                    </div>
                </div>

                <div className="mt-8 flex flex-col items-center">
                    <div className="relative w-full max-w-[200px] h-40 bg-white border-2 border-dashed border-border rounded-xl flex items-center justify-center p-4">
                        {/* Visual Book Representation */}
                        <div className="flex h-full items-center">
                            <div className="w-4 h-full bg-primary/10 border-l border-primary/20 rounded-l-sm" />
                            <div
                                className="bg-primary flex flex-col items-center justify-center text-white border-x border-primary-hover relative transition-all duration-500"
                                style={{ width: `${Math.max(20, spineWidth * 20)}px` }}
                            >
                                <div className="absolute top-4 left-1/2 -translate-x-1/2 -rotate-90 origin-center whitespace-nowrap text-[8px] font-black uppercase tracking-tighter opacity-40">
                                    SPINE WIDTH
                                </div>
                            </div>
                            <div className="w-24 h-full bg-white border-r border-y border-border rounded-r-lg shadow-sm" />
                        </div>
                    </div>
                    <div className="mt-6 text-center">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-1">Calculated Spine Width</p>
                        <p className="text-5xl font-black text-primary tracking-tighter">
                            {spineWidth}<span className="text-lg ml-1">{unit}</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-8 p-4 bg-accent/5 rounded-xl flex gap-3 items-start border border-accent/10">
                <Layers className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="text-[11px] text-[#064e3b]/60 leading-relaxed font-medium">
                    This width is for the spine only. Remember to add bleed (typically 0.125" or 3mm on all sides) when designing your full wraparound cover.
                </p>
            </div>
        </div>
    );
};
