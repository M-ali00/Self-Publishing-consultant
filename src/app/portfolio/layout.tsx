import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio | Successful Book Launches & Cover Designs",
    description: "Explore our gallery of professional book covers, interior formatting examples, and bestseller case studies from independent authors worldwide.",
    alternates: {
        canonical: "/portfolio",
    },
};

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
