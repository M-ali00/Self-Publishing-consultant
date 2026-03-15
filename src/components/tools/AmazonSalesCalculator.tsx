"use client";

import React, { useState, useEffect } from "react";
import { TrendingUp, BookOpen, Clock, Info, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

export const AmazonSalesCalculator = () => {
    const [rank, setRank] = useState<number | "">(5000);
    const [bookType, setBookType] = useState<"book" | "ebook">("ebook");
    const [sales, setSales] = useState({ daily: 0, monthly: 0 });

    useEffect(() => {
        // Refined BSR to Sales mapping logic
        let daily = 0;
        const r = Math.max(1, Number(rank) || 0);

        if (bookType === "ebook") {
            if (r === 1) daily = 6000;
            else if (r <= 10) daily = 4000 - (r * 200);
            else if (r <= 100) daily = 1000 - (r * 5);
            else if (r <= 1000) daily = 120 - (r * 0.1);
            else if (r <= 10000) daily = 35 - (r * 0.002);
            else if (r <= 50000) daily = 12 - (r * 0.0001);
            else daily = 1;
        } else {
            // Print books sell less for the same rank in the overall store BSR usually
            if (r === 1) daily = 4000;
            else if (r <= 10) daily = 2500 - (r * 150);
            else if (r <= 100) daily = 700 - (r * 4);
            else if (r <= 1000) daily = 90 - (r * 0.08);
            else if (r <= 10000) daily = 25 - (r * 0.001);
            else daily = 1;
        }

        const adjustedDaily = Math.max(1, Math.round(daily));

        setSales({
            daily: adjustedDaily,
            monthly: adjustedDaily * 30
        });
    }, [rank, bookType]);

    return (
        <div className="bento-card bg-white/40 backdrop-blur-md border-primary/10 h-full flex flex-col p-8">
            <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-600 border border-orange-500/20 shadow-sm">
                    <TrendingUp className="w-7 h-7" />
                </div>
                <div>
                    <h3 className="text-3xl font-black tracking-tighter text-[#064e3b]">BSR Navigator</h3>
                    <p className="text-[#064e3b]/40 text-sm font-bold uppercase tracking-widest">Global Sales Intelligence</p>
                </div>
            </div>

            <div className="space-y-8 flex-grow">
                <div className="grid grid-cols-2 gap-3 bg-muted/30 p-1.5 rounded-2xl border border-border">
                    <button
                        onClick={() => setBookType("ebook")}
                        className={`flex items-center justify-center gap-2 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${bookType === "ebook"
                            ? "bg-white text-[#064e3b] shadow-md border border-border"
                            : "text-[#064e3b]/40 hover:text-[#064e3b]"
                            }`}
                    >
                        <Zap className="w-3 h-3" /> E-Book
                    </button>
                    <button
                        onClick={() => setBookType("book")}
                        className={`flex items-center justify-center gap-2 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${bookType === "book"
                            ? "bg-white text-[#064e3b] shadow-md border border-border"
                            : "text-[#064e3b]/40 hover:text-[#064e3b]"
                            }`}
                    >
                        <BookOpen className="w-3 h-3" /> Print
                    </button>
                </div>

                <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-[#064e3b]/40 mb-3">
                        Best Seller Rank (current)
                    </label>
                    <input
                        type="number"
                        value={rank}
                        onChange={(e) => setRank(e.target.value === "" ? "" : Number(e.target.value))}
                        className="w-full bg-white border border-border px-5 py-4 rounded-2xl text-2xl font-black outline-none focus:border-orange-500 transition-all text-[#064e3b] shadow-inner"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-8 bg-white border border-border rounded-3xl text-center shadow-sm relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-3 opacity-10">
                            <Clock className="w-12 h-12" />
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#064e3b]/40 mb-2">Daily Volume</p>
                        <p className="text-4xl font-black text-orange-600 tracking-tighter">{sales.daily}</p>
                        <p className="text-[8px] font-bold text-[#064e3b]/30 mt-1 uppercase">Units Sold</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="p-8 bg-[#064e3b] text-white rounded-3xl text-center shadow-xl shadow-orange-900/10 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-3 opacity-10">
                            <TrendingUp className="w-12 h-12" />
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Monthly Projection</p>
                        <p className="text-4xl font-black text-white tracking-tighter">{sales.monthly}</p>
                        <p className="text-[8px] font-bold text-white/30 mt-1 uppercase">Units Sold</p>
                    </motion.div>
                </div>
            </div>

            <div className="mt-10 p-5 bg-orange-500/5 rounded-2xl flex gap-4 items-start border border-orange-500/10">
                <ShieldCheck className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <p className="text-[11px] text-[#064e3b]/60 leading-relaxed font-bold uppercase tracking-tight">
                    Intelligence Note: BSR is highly dynamic. For the most accurate forecasting, track your rank over a 7-day period to account for seasonal sales fluctuations.
                </p>
            </div>
        </div>
    );
};

