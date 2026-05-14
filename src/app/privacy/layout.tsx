import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Your Data Security Matters",
    description: "Read our privacy policy to understand how we protect your intellectual property and personal information during the publishing process.",
    alternates: {
        canonical: "/privacy",
    },
};

export default function PrivacyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
