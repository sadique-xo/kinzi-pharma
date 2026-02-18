import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kinzipharma.com"),
  title: "Kinzi Pharma | Global Pharmaceutical Exporter",
  description: "Kinzi Pharma is a leading pharmaceutical exporter based in Mumbai, trusted across 30+ countries. Delivering excellence in healthcare.",
  icons: {
    icon: "/site-icon-kinzi.png",
    shortcut: "/site-icon-kinzi.png",
    apple: "/site-icon-kinzi.png",
  },
};

import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${raleway.variable} antialiased selection:bg-kinzi-teal/30 font-sans`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
