import { Hero } from "@/components/home/Hero";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ServiceBento } from "@/components/home/ServiceBento";
import { ContactUs } from "@/components/home/ContactUs";
import { Testimonials } from "@/components/home/Testimonials";
import { ContactForm } from "@/components/home/ContactForm";
import { FAQs } from "@/components/home/FAQs";
import { Portfolio } from "@/components/home/Portfolio";
import { AnswerBlock } from "@/components/layout/AnswerBlock";
import { JsonLd } from "@/components/JsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default async function Home() {
  let initialBooks = [];
  try {
    const res = await fetch(
      "https://www.googleapis.com/books/v1/volumes?q=subject:fiction+bestseller&maxResults=40&orderBy=relevance&printType=books",
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );
    const data = await res.json();
    if (data.items) {
      initialBooks = data.items.map((item: any) => ({
        n: item.volumeInfo.authors?.[0] || "Global Author",
        t: item.volumeInfo.title,
        a: Math.floor(Math.random() * 2400) + 150,
        loc: ["USA", "UK", "Germany", "Japan", "India", "Brazil"][Math.floor(Math.random() * 6)],
        popularity: (item.volumeInfo.ratingsCount || 0) * (item.volumeInfo.averageRating || 1),
        id: item.id,
      })).sort((a: any, b: any) => b.popularity - a.popularity);
    }
  } catch (error) {
    console.error("Home page SSR fetch failed:", error);
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who keeps the rights to my book?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You retain 100% of your creative and legal rights. We act purely as your service provider and consultant. We do not take any percentage of your rights or ownership."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the publishing process take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The timeline varies depending on the services required (e.g., developmental editing vs. just formatting). Typically, a full suite of services from raw manuscript to published book takes between 3 to 6 months."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get paid from sales?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All sales accounts (Amazon KDP, IngramSpark, etc.) are set up in your name. Royalties are paid directly into your designated bank account by the retailers. We don't touch your money."
        }
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd schema={[faqSchema]} />
      <h1 className="sr-only">Professional Self-Publishing Process & Global Distribution Strategy</h1>
      <Hero initialTransactions={initialBooks} />
      <div className="container mx-auto px-6 -mt-10 mb-10 z-10">
        <AnswerBlock 
          question="What are the 2026 Self-Publishing Standards?"
          answer="Professional self-publishing in 2026 requires strict compliance with US Copyright Office AI disclosure mandates and Amazon's 'Virtual Voice' royalty models (40%). It involves deep manuscript assessment, 100% human-verified formatting, and global distribution across 40,000+ retail networks without the $25 revision fees eliminated on Feb 1st, while ensuring authors retain absolute creative and legal rights."
        />
      </div>
      <ServiceBento />
      <ContactUs />
      <Portfolio />
      <WhyChooseUs />
      {/* <AZServices /> */}
      <Testimonials />
      <ContactForm />
      <FAQs />
    </div>
  );
}
