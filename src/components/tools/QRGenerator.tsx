"use client";

import React, { useState, useEffect } from "react";
import { QrCode, Download, Settings, Palette, Info, HelpCircle, Star, Mail, Book } from "lucide-react";
import QRCode from "qrcode";
import { motion, AnimatePresence } from "framer-motion";

const PRESETS = [
    { label: "Review Page", icon: Star, hint: "https://www.amazon.com/review/create-review/?asin=ASIN_HERE", color: "bg-yellow-500/10 text-yellow-600" },
    { label: "Mailing List", icon: Mail, hint: "https://yourwebsite.com/signup", color: "bg-blue-500/10 text-blue-600" },
    { label: "Series Page", icon: Book, hint: "https://amazon.com/dp/B08XYZ123", color: "bg-purple-500/10 text-purple-600" },
];

export const QRGenerator = () => {
    const [url, setUrl] = useState("https://yourbooklink.com");
    const [qrDataUrl, setQrDataUrl] = useState("");
    const [color, setColor] = useState("#064e3b");
    const [generating, setGenerating] = useState(false);

    useEffect(() => {
        const generateQR = async () => {
            setGenerating(true);
            try {
                const dataUrl = await QRCode.toDataURL(url || " ", {
                    width: 1000,
                    margin: 2,
                    color: {
                        dark: color,
                        light: "#ffffff"
                    },
                    errorCorrectionLevel: 'H'
                });
                setQrDataUrl(dataUrl);
            } catch (err) {
                console.error(err);
            }
            setTimeout(() => setGenerating(false), 200);
        };
        generateQR();
    }, [url, color]);

    const downloadQR = () => {
        const link = document.createElement("a");
        link.download = `book-qr-${Date.now()}.png`;
        link.href = qrDataUrl;
        link.click();
    };

    return (
        <div className="bento-card bg-white/40 backdrop-blur-md border-primary/10 h-full flex flex-col p-8">
            <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-600 border border-purple-500/20 shadow-sm">
                    <QrCode className="w-7 h-7" />
                </div>
                <div>
                    <h3 className="text-3xl font-black tracking-tighter text-[#064e3b]">QR Studio</h3>
                    <p className="text-[#064e3b]/40 text-sm font-bold uppercase tracking-widest">Connect Print to Digital</p>
                </div>
            </div>

            <div className="space-y-8 flex-grow">
                <div>
                    <div className="flex justify-between items-end mb-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-[#064e3b]/40">
                            Marketing Presets
                        </label>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        {PRESETS.map((p, i) => (
                            <button
                                key={i}
                                onClick={() => setUrl(p.hint)}
                                className={`flex flex-col items-center justify-center p-4 rounded-xl border border-border transition-all hover:scale-105 active:scale-95 bg-white group shadow-sm`}
                            >
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-2 ${p.color}`}>
                                    <p.icon className="w-5 h-5" />
                                </div>
                                <span className="text-[9px] font-black uppercase tracking-tighter text-[#064e3b]/60">{p.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-[#064e3b]/40 mb-3">
                        Target Destination URL
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="https://..."
                            className="w-full bg-white border border-border px-5 py-4 rounded-2xl text-base font-bold outline-none focus:border-primary transition-all shadow-inner"
                        />
                    </div>
                </div>

                <div className="relative group flex items-center justify-center p-12 bg-white border-2 border-dashed border-border rounded-3xl min-h-[300px] overflow-hidden">
                    <AnimatePresence mode="wait">
                        {qrDataUrl && !generating ? (
                            <motion.img
                                key="qr"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                src={qrDataUrl}
                                alt="QR Code"
                                className="w-56 h-56 relative z-10 drop-shadow-2xl"
                            />
                        ) : (
                            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                        )}
                    </AnimatePresence>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 bg-white border border-border rounded-2xl">
                        <label className="block text-[10px] font-black uppercase tracking-widest text-[#064e3b]/40 mb-3">Brand Color</label>
                        <div className="flex gap-3">
                            {["#064e3b", "#14b8a6", "#2563eb", "#000000", "#ef4444"].map(c => (
                                <button
                                    key={c}
                                    onClick={() => setColor(c)}
                                    className={`w-7 h-7 rounded-full border-2 transition-all hover:scale-110 ${color === c ? 'border-primary shadow-lg ring-2 ring-primary/20' : 'border-transparent'}`}
                                    style={{ backgroundColor: c }}
                                />
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={downloadQR}
                        className="flex flex-col items-center justify-center gap-2 bg-[#064e3b] text-white py-5 rounded-3xl font-bold transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-primary/5 border border-white/5"
                    >
                        <div className="flex items-center gap-2 uppercase tracking-[0.2em] text-[10px]">
                            <Download className="w-4 h-4" /> Export High-Res
                        </div>
                        <span className="text-[8px] opacity-40 uppercase tracking-tighter">Print Ready PNG</span>
                    </button>
                </div>
            </div>

            <div className="mt-10 p-5 bg-purple-500/5 rounded-2xl flex gap-4 items-start border border-purple-500/10">
                <Info className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                <p className="text-[11px] text-[#064e3b]/60 leading-relaxed font-bold uppercase tracking-tight">
                    Protip: Use the "Review Page" preset and replace ASIN with your book's unique Amazon ID to boost organic review growth.
                </p>
            </div>
        </div>
    );
};

