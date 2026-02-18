
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Kinzi Pharma",
    description: "Get in touch with Kinzi Pharma. Contact us for pharmaceutical export inquiries, partnerships, or support.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
