import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Team | Expert Publishing Consultants & Designers",
    description: "Meet the experts behind your book's success. Our team of editors, designers, and marketing strategists are dedicated to your publishing journey.",
    alternates: {
        canonical: "/team",
    },
};

export default function TeamLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
