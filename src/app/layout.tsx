import type { Metadata } from "next";
import { Inter, Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { JsonLd } from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const SITE_URL = "https://selfpublishingconsultant.com";
const SITE_NAME = "Self Publishing Consultant";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Self Publishing Consultant | From Manuscript to Global Bookshelf",
    template: "%s | Self Publishing Consultant",
  },
  description:
    "Expert self-publishing consulting services — manuscript assessment, professional editing, book cover design, interior formatting, global distribution via KDP & IngramSpark, and full book launch strategy. Retain 100% of your rights.",
  keywords: [
    "self publishing consultant",
    "book publishing services",
    "manuscript editing",
    "book cover design",
    "interior formatting",
    "KDP publishing",
    "IngramSpark distribution",
    "book launch strategy",
    "self publish a book",
    "ghostwriting services",
    "audiobook production",
    "book marketing",
    "Amazon book publishing",
    "author services",
  ],
  authors: [{ name: "Self Publishing Consultant", url: SITE_URL }],
  creator: "Self Publishing Consultant",
  publisher: "Self Publishing Consultant",
  category: "Publishing Services",

  /* ── Canonical & Alternates ─────────────────────────────────────────── */
  alternates: {
    canonical: "/",
  },

  /* ── Robots ─────────────────────────────────────────────────────────── */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  /* ── Open Graph ──────────────────────────────────────────────────────── */
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Self Publishing Consultant | From Manuscript to Global Bookshelf",
    description:
      "End-to-end self-publishing services. Professional editing, stunning cover design, global distribution, and powerful book launch strategy — all under one roof.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Self Publishing Consultant — Professional Book Publishing Services",
      },
    ],
  },

  /* ── Twitter / X Card ───────────────────────────────────────────────── */
  twitter: {
    card: "summary_large_image",
    title: "Self Publishing Consultant | From Manuscript to Global Bookshelf",
    description:
      "End-to-end self-publishing services. Professional editing, cover design, global distribution, and book launch strategy.",
    images: ["/og-image.png"],
    creator: "@selfpubconsult",
  },

  /* ── Icons ───────────────────────────────────────────────────────────── */
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },

  /* ── Verification tokens (add real values when available) ───────────── */
  verification: {
    google: "google-site-verification-token",
  },
};

/* ── Global JSON-LD Schemas ─────────────────────────────────────────────── */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: "SPC",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/icon.png`,
    width: 512,
    height: 512,
  },
  description:
    "Self Publishing Consultant provides end-to-end book publishing services including manuscript editing, cover design, interior formatting, global distribution, and book marketing for independent authors worldwide. Under the direction of our founder M. Ali, we ensure authors maintain 100% of their creative and legal rights.",
  foundingDate: "2020",
  founder: {
    "@type": "Person",
    "name": "M. Ali",
    "jobTitle": "Lead Publishing Consultant",
    "description": "With over a decade of experience in self-publishing, M. Ali has guided hundreds of authors through the complex landscape of KDP and IngramSpark distribution, focusing on absolute rights retention and market-ready production standards.",
    "url": `${SITE_URL}/team`,
    "sameAs": [
      "https://www.linkedin.com/in/selfpublishingconsultant",
      "https://twitter.com/selfpubconsult"
    ]
  },
  member: [
    {
      "@type": "Person",
      "name": "M. Ali"
    }
  ],
  areaServed: "Worldwide",
  serviceType: [
    "Book Editing",
    "Book Cover Design",
    "Interior Formatting",
    "Self-Publishing Consulting on 2026 Standards",
    "Book Marketing",
    "Global Book Distribution (KDP, IngramSpark)",
    "Ghostwriting",
    "Audiobook Production (Virtual Voice Strategy)",
  ],
  knowsAbout: [
    "KDP 2026 Royalty Models (40% Virtual Voice)",
    "US Copyright Law 2026 (AI Disclosure Requirements)",
    "IngramSpark Market Access Fee Structure (1.875%)",
    "Advanced Book SEO for AI Overviews",
    "Human-in-the-loop Formatting Standards"
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+44-7922-656521",
      contactType: "customer service",
      areaServed: "GB",
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      email: "selfpublishingconsultants@gmail.com",
      contactType: "customer support",
      availableLanguage: "English",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "GB",
  },
  sameAs: [
    "https://www.facebook.com/selfpublishingconsultant",
    "https://twitter.com/selfpubconsult",
    "https://www.instagram.com/selfpublishingconsultant",
    "https://www.linkedin.com/company/self-publishing-consultant",
    "https://www.youtube.com/@selfpublishingconsultant",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description:
    "Expert self-publishing consulting for 2026 KDP and IngramSpark distribution, focusing on absolute author rights and AI-compliant formatting.",
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/services?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "en-US",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/kid-sitting.png"
          type="image/png"
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${outfit.variable} bg-graph-gradient antialiased selection:bg-primary/20 selection:text-primary`}
      >
        <JsonLd schema={[organizationSchema, websiteSchema]} />

        {/* ── Shooting Stars Background ── */}
        <div id="shooting-stars-bg" aria-hidden="true">
          {/* Static twinkling star field */}
          <div className="stars-small" />
          <div className="stars-medium" />
          <div className="stars-large" />
          {/* Shooting star streaks */}
          <div className="shooting-star" />
          <div className="shooting-star" />
          <div className="shooting-star" />
          <div className="shooting-star" />
          <div className="shooting-star" />
          <div className="shooting-star" />
          <div className="shooting-star" />
          <div className="shooting-star" />
          <div className="shooting-star" />
          <div className="shooting-star" />
          <div className="shooting-star" />
          <div className="shooting-star" />
          {/* Floating open-book icons — nth-child 16..23 */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/books/open-book.svg" alt="" className="floating-book" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/books/open-book.svg" alt="" className="floating-book" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/books/open-book.svg" alt="" className="floating-book" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/books/open-book.svg" alt="" className="floating-book" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/books/open-book.svg" alt="" className="floating-book" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/books/open-book.svg" alt="" className="floating-book" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/books/open-book.svg" alt="" className="floating-book" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/books/open-book.svg" alt="" className="floating-book" />
        </div>

        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
