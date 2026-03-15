"use client";

import React, { useState, useEffect } from "react";
import { Headphones, Activity, BookOpen, Info } from "lucide-react";
import { motion } from "framer-motion";

export const AudibleSalesCalculator = () => {
    const [rank, setRank] = useState<number | "">(1000);
    const [sales, setSales] = useState({ daily: 0, monthly: 0 });

    useEffect(() => {
        // Approximate Audible Rank to Sales mapping logic
        let daily = 0;
        const r = Number(rank) || 0;

        if (r <= 1) daily = 1000;
        else if (r <= 10) daily = 500;
        else if (r <= 50) daily = 200;
        else if (r <= 100) daily = 100;
        else if (r <= 500) daily = 40;
        else if (r <= 1000) daily = 20;
        else if (r <= 5000) daily = 5;
        else if (r <= 10000) daily = 2;
        else daily = 1;

        setSales({
            daily: Math.round(daily),
            monthly: Math.round(daily * 30)
        });
    }, [rank]);

    return (
        <div className="bento-card bg-white/40 backdrop-blur-md border-primary/10 h-full flex flex-col">
            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600 border border-purple-500/20">
                    <Headphones className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold tracking-tight text-[#064e3b]">Audible Sales Estimator</h3>
                    <p className="text-[#064e3b]/40 text-sm font-medium">Estimate monthly audiobook performance</p>
                </div>
            </div>

            <div className="space-y-6 flex-grow">
                <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-foreground/40 mb-2">
                        Audible Best Seller Rank
                    </label>
                    <input
                        type="number"
                        value={rank}
                        onChange={(e) => setRank(e.target.value === "" ? "" : Number(e.target.value))}
                        className="w-full bg-white/50 border border-border px-4 py-3 rounded-xl text-lg font-bold outline-none focus:border-primary transition-colors text-primary"
                        placeholder="e.g. 1000"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-6 bg-white border border-border rounded-2xl text-center shadow-sm"
                    >
                        <div className="flex justify-center mb-2">
                            <Activity className="w-4 h-4 text-purple-500/40" />
                        </div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-1">Daily Units</p>
                        <p className="text-3xl font-black text-purple-600">{sales.daily}</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-6 bg-purple-500/5 border border-purple-500/20 rounded-2xl text-center shadow-sm"
                    >
                        <div className="flex justify-center mb-2">
                            <BookOpen className="w-4 h-4 text-purple-500/40" />
                        </div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-purple-600 mb-1">Monthly Estim.</p>
                        <p className="text-3xl font-black text-[#064e3b]">{sales.monthly}</p>
                    </motion.div>
                </div>
            </div>

            <div className="mt-8 p-4 bg-purple-500/5 rounded-xl flex gap-3 items-start border border-purple-500/10">
                <Info className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                <p className="text-[11px] text-[#064e3b]/60 leading-relaxed font-medium">
                    Audiobook data is tracked across Audible.com ranking metrics. These values are estimates based on aggregated industry reports.
                </p>
            </div>
        </div>
    );
};
