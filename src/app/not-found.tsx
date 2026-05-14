import Link from "next/link";
import { Search, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-transparent pt-40 pb-32 px-6">
            <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-primary/5 border border-primary/10 text-primary mb-8">
                    <Search size={32} />
                </div>
                
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-primary mb-6">
                    404 <span className="font-serif italic text-primary-light">Lost.</span>
                </h1>
                
                <p className="text-xl text-foreground/60 font-medium mb-12 max-w-lg mx-auto leading-relaxed">
                    The page you are looking for has been moved, deleted, or never existed in our publishing archive.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link 
                        href="/" 
                        className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-black rounded-2xl hover:bg-primary-hover transition-all flex items-center justify-center gap-2"
                    >
                        <Home size={18} /> Back to Home
                    </Link>
                    <Link 
                        href="/blog" 
                        className="w-full sm:w-auto px-8 py-4 bg-primary/5 border border-primary/10 text-primary font-black rounded-2xl hover:bg-primary/10 transition-all flex items-center justify-center gap-2"
                    >
                        <ArrowLeft size={18} /> Browse Blog
                    </Link>
                </div>

                <div className="mt-20 pt-10 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
                    {[
                        { label: "Services", href: "/services" },
                        { label: "Portfolio", href: "/portfolio" },
                        { label: "Author Tools", href: "/tools" },
                        { label: "Pricing", href: "/pricing" }
                    ].map((link) => (
                        <Link 
                            key={link.label} 
                            href={link.href}
                            className="text-xs font-bold uppercase tracking-widest text-primary/40 hover:text-primary transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
