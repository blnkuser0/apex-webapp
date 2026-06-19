import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apex Innovations Inc",
  description:
    "Empowering organizations through digital transformation, IT infrastructure, business solutions, and strategic technology services across the Philippines.",
  keywords: [
    "IT solutions Philippines",
    "digital transformation",
    "network security",
    "IT infrastructure",
    "business technology",
    "Apex Innovations",
    "APEX Innovations",
    "conference solutions",
    "data center",
    "HR information system",
  ],
  authors: [{ name: "Apex Innovations Inc." }],
  openGraph: {
    title: "Apex Innovations Inc. | Powerhouse of Transformative Solutions",
    description:
      "Empowering organizations through digital transformation, IT infrastructure, business solutions, and strategic technology services.",
    type: "website",
    locale: "en_PH",
    siteName: "Apex Innovations Inc.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Innovations Inc.",
    description:
      "Empowering organizations through digital transformation and strategic technology services.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
