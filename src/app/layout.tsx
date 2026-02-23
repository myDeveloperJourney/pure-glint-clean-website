import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = 'https://pureglintclean.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pure Glint Clean - Professional House Cleaning in North Fort Worth, TX",
    template: "%s | Pure Glint Clean"
  },
  description: "Pure Glint Clean provides exceptional residential cleaning services in North Fort Worth, Texas. Book your free quote today! Offering standard recurring cleaning, deep cleaning, and move-in/out services. Fully insured, bonded, and same-day service available.",
  keywords: [
    // Primary keywords
    "house cleaning North Fort Worth",
    "maid service North Fort Worth TX",
    "residential cleaning Fort Worth",
    "home cleaning services near me",
    // Service-specific keywords
    "deep cleaning service Fort Worth",
    "move in cleaning North Fort Worth",
    "move out cleaning service",
    "recurring house cleaning",
    "weekly maid service",
    "bi-weekly cleaning",
    // Local SEO keywords
    "cleaning service 76177",
    "house cleaning Keller TX",
    "maid service Watauga",
    "cleaning service North Richland Hills",
    "house cleaning Saginaw TX",
    // Long-tail keywords
    "professional house cleaners Fort Worth",
    "same day cleaning service",
    "affordable house cleaning near me",
    "trusted cleaning company",
    "insured cleaning service",
    "bonded maid service"
  ],
  authors: [{ name: "Pure Glint Clean" }],
  creator: "Pure Glint Clean",
  publisher: "Pure Glint Clean",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/pure_glint.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Pure Glint Clean',
    title: 'Pure Glint Clean - Professional House Cleaning in North Fort Worth, TX',
    description: 'Top-rated residential cleaning services in North Fort Worth. Same-day service available. Fully insured & bonded. Free quotes. Book online today!',
    images: [
      {
        url: '/team-professional.jpg',
        width: 1200,
        height: 630,
        alt: 'Pure Glint Clean Professional Cleaning Team',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pure Glint Clean - Professional House Cleaning in North Fort Worth, TX',
    description: 'Top-rated residential cleaning services in North Fort Worth. Same-day service available. Fully insured & bonded.',
    images: ['/team-professional.jpg'],
    creator: '@pureglintclean',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  // verification: {
  //   google: 'your-google-verification-code', // TODO: Add actual verification code from Google Search Console
  // },
  category: 'business',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
