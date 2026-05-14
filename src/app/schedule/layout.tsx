import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Schedule a Call | Free 15-Minute Strategy Session",
    description: "Book a time to speak with our lead publishing consultant. Get answers to your KDP and IngramSpark questions instantly.",
    alternates: {
        canonical: "/schedule",
    },
};

export default function ScheduleLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
