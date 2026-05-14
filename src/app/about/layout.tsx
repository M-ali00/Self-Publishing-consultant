import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Our Mission & Self-Publishing Expertise",
    description: "Learn about the team behind Self Publishing Consultant. We help independent authors navigate the complex world of KDP, IngramSpark, and global distribution.",
    alternates: {
        canonical: "/about",
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
