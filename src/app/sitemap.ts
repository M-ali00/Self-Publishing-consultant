import { Metadata, MetadataRoute } from "next";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blog";

/**
 * Sitemap Generator
 *
 * Essential for Technical SEO.
 * Includes all static pages (Home, Services, Pricing, About, etc.)
 * plus all 36+ dynamic service routes (SSG).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://selfpublishingconsultant.com";

  // ── Core Pages ────────────────────────────────────────────────────────────
  const routes = [
    "",
    "/services",
    "/pricing",
    "/portfolio",
    "/about",
    "/team",
    "/contact",
    "/schedule",
    "/privacy",
    "/terms",
    "/tools",
    "/blog",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // ── Service Detail Pages ──────────────────────────────────────────────────
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ── Tool Pages ────────────────────────────────────────────────────────────
  const toolSlugs = [
    "amazon-sales-calculator",
    "audible-sales-calculator",
    "book-description-generator",
    "hashtag-generator",
    "isbn-barcode-generator",
    "kenp-calculator",
    "qr-code-generator",
    "royalty-calculator",
    "spine-width-calculator",
  ];
  const toolRoutes = toolSlugs.map((slug) => ({
    url: `${baseUrl}/tools/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // ── Blog Post Pages ──────────────────────────────────────────────────────
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...routes, ...serviceRoutes, ...toolRoutes, ...blogRoutes];
}
