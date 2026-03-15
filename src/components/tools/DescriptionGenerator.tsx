"use client";

import React, { useState } from "react";
import { Copy, Check, FileText, Bold, Italic, List, Heading1, Heading2, CornerDownLeft, Eye, Code } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const DescriptionGenerator = () => {
    const [text, setText] = useState("");
    const [copied, setCopied] = useState(false);
    const [view, setView] = useState<"edit" | "preview">("edit");

    const handleCopy = () => {
        if (!text) return;
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const wrapText = (openTag: string, closeTag: string) => {
        const textarea = document.getElementById("blurb-editor") as HTMLTextAreaElement;
        if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selected = text.substring(start, end);

        const newText = text.substring(0, start) +
            `<${openTag}>` + selected + `</${closeTag}>` +
            text.substring(end);

        setText(newText);
        // Refocus and set cursor (next tick)
        setTimeout(() => {
            textarea.focus();
            const offset = openTag.length + 2;
            textarea.setSelectionRange(start + offset, end + offset);
        }, 0);
    };

    const addTag = (tag: string) => {
        const textarea = document.getElementById("blurb-editor") as HTMLTextAreaElement;
        if (!textarea) return;
        const start = textarea.selectionStart;
        const newText = text.substring(0, start) + tag + text.substring(start);
        setText(newText);
    };

    return (
        <div className="bento-card bg-white/40 backdrop-blur-md border-primary/10 h-full flex flex-col p-0 overflow-hidden">
            <div className="bg-[#064e3b] p-6 text-white flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
                        <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold tracking-tight">Blurb Formatter</h3>
                        <p className="text-white/40 text-[10px] uppercase tracking-widest font-black">Amazon KDP compliant</p>
                    </div>
                </div>

                <div className="flex bg-white/10 rounded-lg p-1 border border-white/10">
                    <button
                        onClick={() => setView("edit")}
                        className={`px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-widest transition-all flex items-center gap-2 ${view === "edit" ? "bg-primary text-white" : "text-white/60 hover:text-white"}`}
                    >
                        <Code className="w-3 h-3" /> Editor
                    </button>
                    <button
                        onClick={() => setView("preview")}
                        className={`px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-widest transition-all flex items-center gap-2 ${view === "preview" ? "bg-primary text-white" : "text-white/60 hover:text-white"}`}
                    >
                        <Eye className="w-3 h-3" /> Preview
                    </button>
                </div>
            </div>

            <div className="p-6 flex-grow flex flex-col gap-6">
                <AnimatePresence mode="wait">
                    {view === "edit" ? (
                        <motion.div
                            key="editor"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            className="flex flex-col gap-4 h-full"
                        >
                            <div className="flex flex-wrap gap-1.5 p-1.5 bg-muted/30 border border-border rounded-xl">
                                <button onClick={() => wrapText("b", "b")} className="p-2.5 hover:bg-white hover:shadow-sm rounded-lg transition-all text-[#064e3b]" title="Bold"><Bold className="w-4 h-4" /></button>
                                <button onClick={() => wrapText("i", "i")} className="p-2.5 hover:bg-white hover:shadow-sm rounded-lg transition-all text-[#064e3b]" title="Italic"><Italic className="w-4 h-4" /></button>
                                <button onClick={() => wrapText("h1", "h1")} className="p-2.5 hover:bg-white hover:shadow-sm rounded-lg transition-all text-[#064e3b]" title="H1"><Heading1 className="w-4 h-4" /></button>
                                <button onClick={() => wrapText("h2", "h2")} className="p-2.5 hover:bg-white hover:shadow-sm rounded-lg transition-all text-[#064e3b]" title="H2"><Heading2 className="w-4 h-4" /></button>
                                <button onClick={() => addTag("<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>")} className="p-2.5 hover:bg-white hover:shadow-sm rounded-lg transition-all text-[#064e3b]" title="List"><List className="w-4 h-4" /></button>
                                <div className="w-px h-8 bg-border mx-1 self-center" />
                                <button onClick={() => addTag("<br>")} className="p-2.5 hover:bg-white hover:shadow-sm rounded-lg transition-all text-[#064e3b] flex items-center gap-1 text-[10px] font-bold" title="Line Break"><CornerDownLeft className="w-3 h-3" /> BR</button>
                            </div>

                            <textarea
                                id="blurb-editor"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                placeholder="Paste your text here and use the toolbar to add Amazon-friendly HTML formatting..."
                                className="w-full flex-grow min-h-[350px] bg-white/50 border border-border p-6 rounded-2xl text-base font-medium outline-none focus:border-primary transition-all resize-none shadow-inner"
                            />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="preview"
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="flex flex-col gap-4 h-full"
                        >
                            <div className="text-[10px] font-bold uppercase tracking-widest text-[#064e3b]/40 mb-2">Live Storefront Preview</div>
                            <div className="w-full flex-grow min-h-[400px] bg-white border border-border p-8 rounded-2xl overflow-y-auto shadow-sm prose prose-slate max-w-none">
                                {text ? (
                                    <div dangerouslySetInnerHTML={{ __html: text }} />
                                ) : (
                                    <div className="text-muted-foreground italic">Formatting will appear here...</div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="bg-[#064e3b] p-6 rounded-2xl text-white shadow-xl shadow-primary/5 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary/20 transition-all pointer-events-none" />

                    <div className="flex items-center justify-between mb-4 relative z-10">
                        <div className="flex items-center gap-2">
                            <Code className="w-3 h-3 text-primary" />
                            <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">Raw KDP Code</p>
                        </div>
                        <button
                            onClick={handleCopy}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${copied ? "bg-primary text-white" : "bg-white/10 hover:bg-white/20"}`}
                        >
                            {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                            {copied ? "Copied to Clipboard" : "Copy Final HTML"}
                        </button>
                    </div>

                    <div className="bg-black/20 p-4 rounded-xl border border-white/5 relative z-10">
                        <code className="text-xs font-mono break-all line-clamp-3 block opacity-80 whitespace-pre-wrap leading-relaxed">
                            {text || "<!-- No content yet -->"}
                        </code>
                    </div>
                </div>
            </div>
        </div>
    );
};

