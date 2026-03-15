"use client";

import React, { useState, useEffect } from "react";
import { Landmark, Layers, CircleDollarSign, Info } from "lucide-react";
import { motion } from "framer-motion";

export const KenpCalculator = () => {
    const [pages, setPages] = useState<number | "">(10000);
    const [rate, setRate] = useState<number | "">(0.0045);
    const [earnings, setEarnings] = useState(0);

    useEffect(() => {
        setEarnings((Number(pages) || 0) * (Number(rate) || 0));
    }, [pages, rate]);

    return (
        <div className="bento-card bg-white/40 backdrop-blur-md border-primary/10 h-full flex flex-col">
            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 border border-emerald-500/20">
                    <Layers className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold tracking-tight text-[#064e3b]">KENP Earning Estimator</h3>
                    <p className="text-[#064e3b]/40 text-sm font-medium">Calculate Kindle Unlimited royalties</p>
                </div>
            </div>

            <div className="space-y-6 flex-grow">
                <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-foreground/40 mb-2">
                        Total Pages Read
                    </label>
                    <input
                        type="number"
                        value={pages}
                        onChange={(e) => setPages(e.target.value === "" ? "" : Number(e.target.value))}
                        className="w-full bg-white/50 border border-border px-4 py-3 rounded-xl text-lg font-bold outline-none focus:border-primary transition-colors text-primary"
                        placeholder="e.g. 10000"
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-foreground/40 mb-2">
                        Payout Rate (per page)
                    </label>
                    <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40 font-bold">$</span>
                        <input
                            type="number"
                            step="0.0001"
                            value={rate}
                            onChange={(e) => setRate(e.target.value === "" ? "" : Number(e.target.value))}
                            className="w-full bg-white/50 border border-border pl-8 pr-4 py-3 rounded-xl text-lg font-bold outline-none focus:border-primary transition-colors text-primary"
                        />
                    </div>
                    <p className="text-[10px] text-foreground/30 mt-2 italic font-medium">Standard rates usually hover between $0.0040 and $0.0045</p>
                </div>

                <div className="mt-8">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-8 bg-emerald-600 text-white rounded-2xl text-center shadow-xl shadow-emerald-900/10"
                    >
                        <div className="flex justify-center mb-2">
                            <CircleDollarSign className="w-6 h-6 text-emerald-300" />
                        </div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-200 mb-1">Estimated Earnings</p>
                        <p className="text-4xl font-black">${earnings.toFixed(2)}</p>
                    </motion.div>
                </div>
            </div>

            <div className="mt-8 p-4 bg-emerald-500/5 rounded-xl flex gap-3 items-start border border-emerald-500/10">
                <Info className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-[11px] text-[#064e3b]/60 leading-relaxed font-medium">
                    KDP Global Fund rates fluctuate monthly. This calculator uses the most recent average payout data for estimation.
                </p>
            </div>
        </div>
    );
};
