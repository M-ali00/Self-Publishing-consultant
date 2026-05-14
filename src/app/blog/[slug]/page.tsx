import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogContent } from "@/data/blog-content";
import { blogPosts } from "@/data/blog";
import { JsonLd } from "@/components/JsonLd";
import BlogDetailClient from "@/components/blog/BlogDetailClient";

const SITE_URL = "https://selfpublishingconsultant.com";

/* ── Static Path Generation (SSG) ────────────────────────────────────────── */
export function generateStaticParams() {
    return Object.keys(blogContent).map((slug) => ({ slug }));
}

/* ── Per-Post Dynamic Metadata ─────────────────────────────────────────── */
export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
    const { slug } = await params;
    const post = blogContent[slug];
    if (!post) return {};

    const title = `${post.title} | Self-Publishing Intelligence`;
    const description = post.excerpt;
    const url = `/blog/${slug}`;

    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: {
            title,
            description,
            url,
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
            images: [
                {
                    url: post.image,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [post.image],
        },
    };
}

/* ── BlogPosting JSON-LD ─────────────────────────────────────────────────── */
function buildBlogPostSchema(post: any, slug: string) {
    return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "image": post.image,
        "datePublished": post.date,
        "author": {
            "@type": "Person",
            "name": post.author
        },
        "publisher": {
            "@type": "Organization",
            "@id": `${SITE_URL}/#organization`,
            "name": "Self Publishing Consultant",
            "logo": {
                "@type": "ImageObject",
                "url": `${SITE_URL}/logo-spc.png`
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${SITE_URL}/blog/${slug}`
        }
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogContent[slug];

    if (!post) {
        notFound();
    }

    const relatedPosts = Object.entries(blogContent)
        .filter(([k]) => k !== slug)
        .slice(0, 4)
        .map(([k, v]) => ({
            slug: k,
            title: v.title,
            readTime: v.readTime
        }));

    const blogPostSchema = buildBlogPostSchema(post, slug);
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": SITE_URL
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": `${SITE_URL}/blog`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": post.title,
                "item": `${SITE_URL}/blog/${slug}`
            }
        ]
    };

    return (
        <>
            <JsonLd schema={[blogPostSchema, breadcrumbSchema]} />
            <BlogDetailClient post={post} relatedPosts={relatedPosts} />
        </>
    );
}
