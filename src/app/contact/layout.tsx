import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Book Your Free Publishing Consultation",
    description: "Ready to publish your masterpiece? Contact Self Publishing Consultant today for a free consultation on editing, design, distribution, and marketing.",
    alternates: {
        canonical: "/contact",
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
