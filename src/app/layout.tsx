import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Nexify | Software Development & Digital Transformation Company",
  description:
    "The Nexify is a Madurai-based technology company providing web development, data analytics, AI automation, ERP, CRM and cloud solutions for businesses.",
  keywords: [
    "The Nexify",
    "Software Development Madurai",
    "Web Development",
    "Data Analytics",
    "AI Automation",
    "ERP CRM Systems",
    "Cloud Web Hosting",
    "Digital Transformation India",
  ],
  authors: [{ name: "The Nexify" }],
  creator: "The Nexify",
  publisher: "The Nexify",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://thenexify.com",
    title: "The Nexify | Software Development & Digital Transformation Company",
    description:
      "Technology that solves real business problems. Modern websites, intelligent AI automation, Power BI data analytics, and custom ERP/CRM software.",
    siteName: "The Nexify",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased text-brandText-primary bg-white flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
