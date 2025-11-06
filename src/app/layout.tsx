import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Pure Glint Clean - Professional Home Cleaning in North Fort Worth",
  description: "Pure Glint Clean provides exceptional residential cleaning services in North Fort Worth Area. Book your free quote today! Standard, deep cleaning, and move-in/out services available.",
  keywords: "house cleaning, maid service, residential cleaning, North Fort Worth, home cleaning, deep cleaning",
  icons: {
    icon: [
      { url: '/pure_glint.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' }
    ],
  },
  openGraph: {
    title: "Pure Glint Clean - Professional Home Cleaning in North Fort Worth",
    description: "Professional residential cleaning services in North Fort Worth.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: '/pure_glint.svg',
        width: 1200,
        height: 630,
        alt: 'Pure Glint Clean Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pure Glint Clean - Professional Home Cleaning in North Fort Worth",
    description: "Professional residential cleaning services in North Fort Worth.",
    images: ['/pure_glint.svg'],
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
