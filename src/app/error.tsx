"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCcw, Home } from "lucide-react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <main className="min-h-screen bg-transparent pt-40 pb-32 px-6">
            <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-red-500/5 border border-red-500/10 text-red-500 mb-8">
                    <AlertTriangle size={32} />
                </div>
                
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-primary mb-6">
                    Error <span className="font-serif italic text-primary-light">Occurred.</span>
                </h1>
                
                <p className="text-xl text-foreground/60 font-medium mb-12 max-w-lg mx-auto leading-relaxed">
                    Something went wrong on our end. We've been notified and are working to restore this page.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={() => reset()}
                        className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-black rounded-2xl hover:bg-primary-hover transition-all flex items-center justify-center gap-2"
                    >
                        <RefreshCcw size={18} /> Try Again
                    </button>
                    <Link 
                        href="/" 
                        className="w-full sm:w-auto px-8 py-4 bg-primary/5 border border-primary/10 text-primary font-black rounded-2xl hover:bg-primary/10 transition-all flex items-center justify-center gap-2"
                    >
                        <Home size={18} /> Back to Home
                    </Link>
                </div>
            </div>
        </main>
    );
}
