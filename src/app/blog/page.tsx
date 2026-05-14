import { Metadata } from "next";
import { BookOpen, Sparkles } from "lucide-react";
import BlogContent from "@/components/blog/BlogContent";
import { blogPosts } from "@/data/blog";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Publishing Intelligence | Self-Publishing Blog & Industry Data",
  description: "High-level tactics, industry data, and editorial methodologies for the modern global author. Explore case studies on Amazon Ads, KDP formatting, and global rights.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Self-Publishing Intelligence | SPC Blog",
    description: "Expert insights into keyword architecture, global distribution, and bestseller launches.",
    images: ["/og-blog.png"],
  },
};

export default function BlogPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Publishing Intelligence",
    "description": "Professional self-publishing tactics and market data.",
    "publisher": {
      "@type": "Organization",
      "name": "Self Publishing Consultant"
    },
    "blogPosts": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": post.author.name
      },
      "url": `https://selfpublishingconsultant.com/blog/${post.slug}`
    }))
  };

  return (
    <main className="min-h-screen bg-transparent pt-32 pb-24">
      <JsonLd schema={[blogSchema]} />
      
      {/* Header Section */}
      <header className="mb-16 text-center container mx-auto px-6 max-w-7xl">
        <div 
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6"
        >
          <BookOpen size={14} aria-hidden="true" /> The Masterclass Archive
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-primary mb-8 leading-[0.85]">
          Publishing <span className="font-serif italic text-primary-light">Intelligence.</span>
        </h1>
        <p className="text-foreground/80 text-xl font-medium max-w-2xl mx-auto">
          High-level tactics, industry data, and editorial methodologies for the modern global author.
        </p>
      </header>

      <BlogContent initialPosts={blogPosts} />

      {/* Newsletter Section */}
      <section className="mt-32 container mx-auto px-6 max-w-7xl">
        <div className="p-12 md:p-20 rounded-[3rem] bg-primary relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" aria-hidden="true" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <Sparkles className="w-10 h-10 text-secondary mx-auto mb-8" aria-hidden="true" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Stay Ahead of the Industry.</h2>
            <p className="text-white/90 text-lg font-medium mb-12 leading-relaxed">
              Join 5,000+ serious authors getting high-level publishing strategy, market data, and exclusive tool updates every Tuesday.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 p-2 bg-white/10 border border-white/20 rounded-2xl md:rounded-full">
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-transparent border-none outline-none text-white px-6 py-4 flex-grow placeholder:text-white/60 font-medium"
                required
              />
              <button 
                type="submit"
                className="px-10 py-4 bg-secondary text-primary font-black rounded-xl md:rounded-full hover:bg-white transition-all shadow-xl shadow-primary/20"
              >
                Join Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
