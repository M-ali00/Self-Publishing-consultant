/**
 * Individual Service Detail Page
 *
 * SEO/GEO optimizations:
 * - Converted from "use client" to Server Component
 * - generateMetadata for per-service dynamic meta (title, description, OG, Twitter)
 * - Service JSON-LD schema (Service + BreadcrumbList)
 * - generateStaticParams for full SSG (no runtime cost)
 * - Interactive UI delegated to thin client wrapper
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { JsonLd } from "@/components/JsonLd";
import ServiceDetailContent from "@/components/services/ServiceDetailContent";

const SITE_URL = "https://selfpublishingconsultant.com";

/* ── Static Path Generation (SSG) ────────────────────────────────────────── */
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

/* ── Per-Service Dynamic Metadata ────────────────────────────────────────── */
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  const title = `${service.title} | Professional Self-Publishing Services`;
  const description = `${service.description} Trusted by independent authors worldwide. Retain 100% of your rights. Book a free consultation today.`;
  const url = `/services/${service.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${service.title} — Self Publishing Consultant`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}

/* ── Per-Service JSON-LD Schemas ─────────────────────────────────────────── */
function buildServiceSchema(service: any) {
  const serviceUrl = `${SITE_URL}/services/${service.slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Self Publishing Consultant",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        "url": `${SITE_URL}/logo-spc.png`
      }
    },
    url: serviceUrl,
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} Deliverables`,
      itemListElement: service.features.map((feature: string, i: number) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: {
          "@type": "Service",
          name: feature,
        },
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: service.title, item: serviceUrl },
    ],
  };

  const schemas: any[] = [serviceSchema, breadcrumbSchema];

  // Add HowTo Schema
  if (service.howTo) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: `How to manage ${service.title}`,
      description: `Step-by-step guide to professional ${service.title.toLowerCase()} in 2026.`,
      step: service.howTo.map((step: any, i: number) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: step.step,
        itemListElement: [{ "@type": "HowToDirection", text: step.text }]
      }))
    });
  }

  // Add FAQ Schema
  if (service.faqs) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((faq: any) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a }
      }))
    });
  }

  return schemas;
}

/* ── Page Component ───────────────────────────────────────────────────────── */
export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const schemas = buildServiceSchema(service);

  return (
    <>
      <JsonLd schema={schemas} />
      <ServiceDetailContent service={service} />
    </>
  );
}
