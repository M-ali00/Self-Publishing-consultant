import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing & Packages | Transparent Self-Publishing Costs",
    description: "Compare our self-publishing packages. From essential formatting to full-service bestseller launches, we have a plan for every author's budget.",
    alternates: {
        canonical: "/pricing",
    },
};

export default function PricingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
