"use client";

import React, { useState, useRef, useEffect } from "react";
import bwipjs from "bwip-js";
import { jsPDF } from "jspdf";
import { Barcode, Download, FileText, CheckCircle2, AlertCircle, Maximize2, Info, Settings2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const BarcodeGenerator = () => {
    // Default example using an ISBN that ends in a non-zero digit to demonstrate flexibility
    const [isbn, setIsbn] = useState("978-0-9970254-9-1");
    const [price, setPrice] = useState("19.99");
    const [includePrice, setIncludePrice] = useState(true);
    const [priceExtension, setPriceExtension] = useState("51999");
    const [error, setError] = useState<string | null>(null);
    const [isGenerating, setIsGenerating] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Convert decimal price to EAN-5 extension (e.g., 19.99 -> 51999)
    useEffect(() => {
        if (!includePrice || !price || price === ".") {
            setPriceExtension("90000");
            return;
        }
        // Only compute once user has typed a valid complete number (not trailing dot)
        const cleaned = price.replace(/\.+$/, ""); // strip trailing dot before parse
        const numericPrice = parseFloat(cleaned);
        if (!isNaN(numericPrice) && numericPrice >= 0) {
            const cents = Math.round(numericPrice * 100);
            // EAN-5: prefix '5' + 4-digit cents
            const extension = "5" + (cents % 10000).toString().padStart(4, "0");
            setPriceExtension(extension);
        }
    }, [price, includePrice]);

    const calculateCheckDigit = (isbn12: string) => {
        let sum = 0;
        for (let i = 0; i < 12; i++) {
            const digit = parseInt(isbn12[i]);
            if (isNaN(digit)) return "0";
            sum += digit * (i % 2 === 0 ? 1 : 3);
        }
        const checkDigit = (10 - (sum % 10)) % 10;
        return checkDigit.toString();
    };

    const drawLabel = (ctx: CanvasRenderingContext2D, text: string, x: number, y: number) => {
        ctx.save();
        // Use a monospace font to match the 'authentic' technical look
        ctx.font = "bold 38px 'Courier New', Courier, monospace";
        ctx.fillStyle = "#000000";
        ctx.textAlign = "center";
        ctx.letterSpacing = "2px";
        ctx.fillText(`ISBN ${text}`, x, y);
        ctx.restore();
    };

    const generateBarcode = () => {
        if (!canvasRef.current) return;
        setError(null);
        setIsGenerating(true);

        try {
            const digits = isbn.replace(/[^0-9]/g, "").trim();

            if (digits.length < 12) {
                throw new Error("Please enter at least 12 digits for a 13-digit ISBN.");
            }

            const base12 = digits.slice(0, 12);
            const validCheckDigit = calculateCheckDigit(base12);

            let finalSequence = digits;
            if (digits.length === 12) {
                finalSequence = base12 + validCheckDigit;
            } else if (digits.length >= 13 && digits[12] !== validCheckDigit) {
                finalSequence = base12 + validCheckDigit;
                console.warn(`Adjusted check digit to ${validCheckDigit} for barcode validity.`);
            }

            const addon = priceExtension !== "90000" ? priceExtension : undefined;
            const fullText = addon ? `${finalSequence} ${addon}` : finalSequence;

            // Step 1: Render bwipjs into an offscreen canvas with NO top padding
            const offscreen = document.createElement("canvas");
            bwipjs.toCanvas(offscreen, {
                bcid: "ean13",
                text: fullText,
                scale: 4,
                height: 25,
                includetext: true,
                textsize: 10,
                backgroundcolor: "ffffff",
                // paddingwidth: 15 modules × scale 4 = 60px — ensures the '9' digit
                // on the far-left of EAN-13 is never clipped
                paddingwidth: 15,
                // paddingheight: 10 modules × scale 4 = 40px — ensures the digit row
                // below the bars is fully visible with no add-on
                paddingheight: 10,
            });

            // Step 2: Composite onto the real canvas with a fixed header for the ISBN label
            const LABEL_HEIGHT = 70; // 70px gives comfortable top margin for the label text
            const canvas = canvasRef.current;
            canvas.width = offscreen.width;
            canvas.height = offscreen.height + LABEL_HEIGHT;

            const ctx = canvas.getContext("2d");
            if (ctx) {
                // White background for the whole canvas
                ctx.fillStyle = "#ffffff";
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                // Draw ISBN label centred vertically in the header band
                const labelText = isbn.includes("-") ? isbn : finalSequence.replace(/(\d{3})(\d)(\d{2})(\d{6})(\d)/, "$1-$2-$3-$4-$5");
                drawLabel(ctx, labelText, canvas.width / 2, LABEL_HEIGHT - 16);

                // Draw the full bwipjs barcode (with its own padding) directly below
                ctx.drawImage(offscreen, 0, LABEL_HEIGHT);
            }

            setTimeout(() => setIsGenerating(false), 300);
        } catch (e: any) {
            console.error("Barcode Studio Error:", e);
            setError(e.message || "Check your digits and try again.");
            setIsGenerating(false);
        }
    };

    useEffect(() => {
        generateBarcode();
    }, [isbn, priceExtension]);

    const downloadPNG = () => {
        if (!canvasRef.current) return;
        const link = document.createElement("a");
        link.download = `ISBN-${isbn.replace(/[^0-9]/g, "")}-BARCODE.png`;
        link.href = canvasRef.current.toDataURL("image/png", 1.0);
        link.click();
    };

    const exportPDF = () => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const imgData = canvas.toDataURL("image/png", 1.0);

        const pdf = new jsPDF({
            orientation: "landscape",
            unit: "mm",
            format: [101.6, 50.8]
        });

        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, "PNG", 0, (50.8 - pdfHeight) / 2, pdfWidth, pdfHeight);
        pdf.save(`ISBN-${isbn.replace(/[^0-9]/g, "")}-SPEC.pdf`);
    };

    return (
        <div className="bento-card bg-white/40 backdrop-blur-md border-primary/20 h-full flex flex-col p-0 overflow-hidden shadow-2xl">
            <div className="bg-[#064e3b] p-6 text-white flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
                        <Barcode className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold tracking-tight">Barcode Studio Pro</h3>
                        <p className="text-white/40 text-[10px] uppercase tracking-widest font-black">Professional ISBN Generator</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/10">
                    <div className={`w-2 h-2 rounded-full ${isGenerating ? 'bg-yellow-400 animate-pulse' : 'bg-emerald-400'}`} />
                    <span className="text-[10px] font-bold uppercase tracking-tighter">{isGenerating ? 'Rendering' : 'Ready'}</span>
                </div>
            </div>

            <div className="p-8 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#064e3b]/40 mb-3">
                            <Settings2 className="w-3 h-3" /> ISBN-13 Sequence
                        </label>
                        <input
                            type="text"
                            value={isbn}
                            onChange={(e) => setIsbn(e.target.value)}
                            placeholder="Enter 13 digits..."
                            className="w-full bg-white border border-border px-4 py-4 rounded-xl text-lg font-mono font-bold outline-none focus:border-primary transition-all shadow-sm"
                        />
                    </div>
                    <div>
                        <div className="flex items-center justify-between mb-3">
                            <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#064e3b]/40">
                                Retail Price ($)
                            </label>
                            <button
                                onClick={() => setIncludePrice(p => !p)}
                                className={`text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-full border transition-all ${includePrice
                                    ? "bg-primary/10 text-primary border-primary/30"
                                    : "bg-gray-100 text-gray-400 border-gray-200"
                                    }`}
                            >
                                {includePrice ? "✓ Include price" : "No price add-on"}
                            </button>
                        </div>
                        <div className="flex gap-3">
                            <input
                                type="text"
                                value={price}
                                disabled={!includePrice}
                                onChange={(e) => {
                                    // Allow digits and at most one dot
                                    const val = e.target.value.replace(/[^0-9.]/g, "");
                                    const parts = val.split(".");
                                    setPrice(parts.length > 2 ? parts[0] + "." + parts.slice(1).join("") : val);
                                }}
                                placeholder="e.g. 19.99"
                                className="flex-1 bg-white border border-border px-4 py-4 rounded-xl text-lg font-mono font-bold outline-none focus:border-primary transition-all shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
                            />
                            <div className="flex flex-col items-center justify-center bg-[#064e3b]/5 border border-border px-4 py-2 rounded-xl min-w-[90px]">
                                <span className="text-[9px] font-black uppercase tracking-widest text-[#064e3b]/30 mb-0.5">EAN-5</span>
                                <span className="text-sm font-mono font-bold text-[#064e3b]/60">{includePrice ? priceExtension : "—"}</span>
                                {includePrice && !price.endsWith(".") && parseFloat(price) > 0 && (
                                    <span className="text-[9px] text-primary font-bold mt-0.5">
                                        ${parseFloat(price).toFixed(2)}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <AnimatePresence>
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center gap-3 text-red-600 bg-red-50 p-4 rounded-xl border border-red-100 shadow-sm"
                        >
                            <AlertCircle className="w-5 h-5 shrink-0" />
                            <p className="text-sm font-bold">{error}</p>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="relative group bg-white border-2 border-border border-dashed rounded-2xl p-8 flex items-center justify-center shadow-inner overflow-hidden">
                    <canvas ref={canvasRef} className="max-w-full h-auto drop-shadow-md select-none" />

                    {isGenerating && (
                        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center">
                            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                        </div>
                    )}
                </div>

                <button
                    onClick={generateBarcode}
                    className="w-full bg-secondary text-[#064e3b] py-4 rounded-xl font-bold uppercase tracking-[0.2em] text-xs hover:scale-[1.01] transition-all shadow-lg shadow-lime-500/10 active:scale-95 flex items-center justify-center gap-3 border border-secondary/20"
                >
                    <Barcode className="w-4 h-4" /> Update Barcode Assets
                </button>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <button
                        onClick={downloadPNG}
                        className="group flex flex-col items-center justify-center gap-2 bg-[#064e3b] text-white py-6 rounded-2xl font-bold transition-all hover:scale-[1.02] shadow-xl"
                    >
                        <div className="flex items-center gap-2 uppercase tracking-widest text-[11px]">
                            <Download className="w-4 h-4" /> Save PNG
                        </div>
                        <span className="text-[8px] opacity-40 uppercase">300 DPI IMAGE</span>
                    </button>
                    <button
                        onClick={exportPDF}
                        className="group flex flex-col items-center justify-center gap-2 bg-primary text-white py-6 rounded-2xl font-bold transition-all hover:scale-[1.02] shadow-xl"
                    >
                        <div className="flex items-center gap-2 uppercase tracking-widest text-[11px]">
                            <FileText className="w-4 h-4" /> Export PDF
                        </div>
                        <span className="text-[8px] opacity-40 uppercase">PRINT READY SPEC</span>
                    </button>
                </div>
            </div>

            <div className="bg-muted/50 p-6 flex gap-4 items-start border-t border-border">
                <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-[10px] text-[#064e3b]/40 leading-relaxed font-bold uppercase tracking-tight">
                    This tool generates industry-standard barcodes. If you enter 12 digits, we automatically calculate the required 13th check digit for retail compatibility.
                </p>
            </div>
        </div>
    );
};
