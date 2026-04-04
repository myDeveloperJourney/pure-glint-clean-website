import { Metadata } from "next";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Thank You | Pure Glint Clean",
  robots: "noindex",
};

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 text-center">
            <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-6" />

            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              We&apos;re On It!
            </h1>

            <p className="text-lg text-gray-600 mb-6">
              Check your phone &mdash; you&apos;ll receive a text from us within minutes.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-8">
              <p className="text-blue-800 font-medium">
                We&apos;ll get you a personalized quote for your home.
              </p>
            </div>

            <p className="text-gray-500 text-sm mb-6">
              Have questions? Give us a call at{" "}
              <a
                href="tel:8174057858"
                className="text-blue-600 font-semibold hover:text-blue-700"
              >
                (817) 405-7858
              </a>
            </p>

            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-md"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
