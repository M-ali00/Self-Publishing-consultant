import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions | Professional Service Agreement",
    description: "Our terms and conditions for publishing services. We ensure authors retain 100% rights and receive professional-grade production standards.",
    alternates: {
        canonical: "/terms",
    },
};

export default function TermsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
