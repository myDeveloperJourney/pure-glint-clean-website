import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ApplicationForm from "@/components/ApplicationForm";

export const metadata: Metadata = {
  title: "Work with Us - Join Our Team | Pure Glint Clean",
  description: "Join the Pure Glint Clean team! We're hiring full-time residential cleaners in the Fort Worth area. Apply now to become part of our professional cleaning crew.",
  openGraph: {
    title: "Work with Us - Join Our Team | Pure Glint Clean",
    description: "Join the Pure Glint Clean team! We're hiring full-time residential cleaners in the Fort Worth area.",
    url: "https://pureglintclean.com/work-with-us",
    siteName: "Pure Glint Clean",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work with Us - Join Our Team | Pure Glint Clean",
    description: "Join the Pure Glint Clean team! We're hiring full-time residential cleaners in the Fort Worth area.",
  },
  alternates: {
    canonical: "https://pureglintclean.com/work-with-us",
  },
};

export default function WorkWithUsPage() {
    return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ApplicationForm />
      </main>
      <Footer />
    </div>
  );
}
