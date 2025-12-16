import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function Success() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="flex-grow pt-24">
        <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden p-12 text-center">
              {/* Success Icon */}
              <div className="flex justify-center mb-6">
                <CheckCircleIcon className="h-24 w-24 text-green-500" />
              </div>

              {/* Success Message */}
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Thank You!
              </h1>
              <p className="text-xl text-gray-700 mb-2">
                We've received your quote request.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our team will contact you shortly to discuss your cleaning needs and provide a personalized quote.
              </p>

              {/* Contact Info */}
              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <p className="text-gray-700 mb-3">
                  Need immediate assistance?
                </p>
                <a
                  href="tel:8174057858"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg"
                >
                  📞 (817) 405-7858
                </a>
              </div>

              {/* Back to Homepage Button */}
              <Link
                href="/"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg"
              >
                Back to Homepage
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
