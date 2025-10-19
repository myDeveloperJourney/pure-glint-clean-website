import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Pure Glint Clean - Professional Home Cleaning in DFW",
  description: "Pure Glint Clean provides exceptional residential cleaning services in North Fort Worth and DFW area. Book your free quote today! Standard, deep cleaning, and move-in/out services available.",
  keywords: "house cleaning, maid service, residential cleaning, Fort Worth, DFW, home cleaning, deep cleaning",
  openGraph: {
    title: "Pure Glint Clean - Professional Home Cleaning in DFW",
    description: "Providing smiles one clean at a time. Professional residential cleaning services in North Fort Worth.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
