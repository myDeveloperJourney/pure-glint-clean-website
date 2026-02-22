import { Metadata } from "next";
import Header from "@/components/Header";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Get a Free Quote - House Cleaning in North Fort Worth",
  description:
    "Request a free quote for professional house cleaning services in North Fort Worth, TX. Standard, deep cleaning, and move-in/out services available. Book online today!",
  openGraph: {
    title: "Get a Free Quote | Pure Glint Clean",
    description:
      "Request a free quote for professional house cleaning in North Fort Worth, TX. Same-day service available.",
    url: "https://pureglintclean.com/get-quote",
    siteName: "Pure Glint Clean",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get a Free Quote | Pure Glint Clean",
    description:
      "Request a free quote for professional house cleaning in North Fort Worth, TX.",
  },
  alternates: {
    canonical: "https://pureglintclean.com/get-quote",
  },
};

export default function GetQuote() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        <BookingForm redirectOnSuccess="/success" />
      </main>
      <Footer />
    </div>
  );
}
