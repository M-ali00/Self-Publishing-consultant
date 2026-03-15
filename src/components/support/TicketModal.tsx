"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, AlertCircle, CheckCircle2, Loader2, LifeBuoy } from "lucide-react";
import { submitTicket } from "@/app/actions";

interface TicketModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const TicketModal = ({ isOpen, onClose }: TicketModalProps) => {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        category: "General",
        priority: "Medium",
        subject: "",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const result = await submitTicket(formData);
            if (result.success) {
                setStatus("success");
                setTimeout(() => {
                    onClose();
                    setStatus("idle");
                    setFormData({
                        name: "",
                        email: "",
                        category: "General",
                        priority: "Medium",
                        subject: "",
                        message: ""
                    });
                }, 3000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-[#022c22]/80 backdrop-blur-md"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-8 md:p-12 bg-[#022c22] text-white relative">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-0" />
                            <div className="relative z-10 flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
                                        <LifeBuoy className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">Support Protocol</h2>
                                        <p className="text-white/40 text-xs font-black uppercase tracking-widest mt-1">Node Ticket Ingestion v1.0</p>
                                    </div>
                                </div>
                                <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 md:p-12 max-h-[70vh] overflow-y-auto">
                            {status === "success" ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center py-20"
                                >
                                    <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-8">
                                        <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-[#064e3b] mb-4 tracking-tighter">Ticket Ingested.</h3>
                                    <p className="text-[#064e3b]/40 font-medium">Your issue has been logged into our support grid. <br /> A technician will respond within 4 hours.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-[#064e3b]/40 ml-2">Name</label>
                                            <input
                                                required
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                placeholder="Technician Name"
                                                className="w-full bg-muted border border-border px-6 py-4 rounded-2xl outline-none focus:border-primary transition-colors text-foreground font-medium"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-[#064e3b]/40 ml-2">Email</label>
                                            <input
                                                required
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                placeholder="admin@node.com"
                                                className="w-full bg-muted border border-border px-6 py-4 rounded-2xl outline-none focus:border-primary transition-colors text-foreground font-medium"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-[#064e3b]/40 ml-2">Category</label>
                                            <select
                                                value={formData.category}
                                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                                className="w-full bg-muted border border-border px-6 py-4 rounded-2xl outline-none focus:border-primary transition-colors text-foreground font-medium appearance-none"
                                            >
                                                <option>API Integration</option>
                                                <option>Distribution Node</option>
                                                <option>Metadata Optimization</option>
                                                <option>Royalty Payouts</option>
                                                <option>General Support</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-[#064e3b]/40 ml-2">Urgency</label>
                                            <select
                                                value={formData.priority}
                                                onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                                                className="w-full bg-muted border border-border px-6 py-4 rounded-2xl outline-none focus:border-primary transition-colors text-foreground font-medium appearance-none"
                                            >
                                                <option>Low - Informational</option>
                                                <option>Medium - Standard</option>
                                                <option>High - Breaking</option>
                                                <option>Critical - System Down</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-[#064e3b]/40 ml-2">Subject</label>
                                        <input
                                            required
                                            type="text"
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            placeholder="Brief description of the anomaly"
                                            className="w-full bg-muted border border-border px-6 py-4 rounded-2xl outline-none focus:border-primary transition-colors text-foreground font-medium"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-[#064e3b]/40 ml-2">System Logs / Issue Description</label>
                                        <textarea
                                            required
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            rows={4}
                                            placeholder="Provide detailed context or error messages..."
                                            className="w-full bg-muted border border-border px-6 py-4 rounded-2xl outline-none focus:border-primary transition-colors text-foreground font-medium resize-none"
                                        />
                                    </div>

                                    <button
                                        disabled={status === "submitting"}
                                        className="btn-primary w-full flex items-center justify-center gap-3 py-5 text-lg group disabled:opacity-50"
                                    >
                                        {status === "submitting" ? (
                                            <>
                                                Ingesting... <Loader2 className="w-5 h-5 animate-spin" />
                                            </>
                                        ) : (
                                            <>
                                                Submit Ticket <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>

                                    {status === "error" && (
                                        <div className="flex items-center gap-2 text-red-500 text-xs font-bold justify-center mt-4">
                                            <AlertCircle className="w-4 h-4" /> Connection timeout. Please try again.
                                        </div>
                                    )}
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
