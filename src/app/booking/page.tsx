import Script from "next/script";
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";
import type { Metadata } from "next";
import Header from "../../components/Header";

export const metadata: Metadata = {
  title: "Book Your Cleaning Service Online",
  description: "Book your professional house cleaning service with Pure Glint Clean. Easy online booking for residential cleaning in North Fort Worth, TX. Same-day service available. Free quotes!",
  keywords: "book cleaning service, schedule house cleaning, online booking Fort Worth, cleaning appointment North Fort Worth",
  openGraph: {
    title: "Book Your Cleaning Service | Pure Glint Clean",
    description: "Book your professional house cleaning service online. Easy scheduling, same-day service available in North Fort Worth.",
    url: "https://pureglintclean.com/booking",
    images: [
      {
        url: '/cleaning-crew-two.jpg',
        width: 1200,
        height: 630,
        alt: 'Pure Glint Clean Professional Cleaning Team',
      },
    ],
  },
  alternates: {
    canonical: "https://pureglintclean.com/booking",
  },
};

export default function BookNowPage() {
  const contactInfo = [
    {
      name: "Phone",
      value: "(817) 405-7858",
      href: "tel:8174057858",
      icon: PhoneIcon,
    },
    {
      name: "Email",
      value: "contact@pureglintclean.com",
      href: "mailto:contact@pureglintclean.com",
      icon: EnvelopeIcon,
    },
    {
      name: "Service Area",
      value: "North Fort Worth Area",
      href: "#",
      icon: MapPinIcon,
    },
    {
      name: "Hours",
      value: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM",
      href: "#",
      icon: ClockIcon,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <Header />
      {/* Booking Form Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 pt-32 pb-16 mt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Book Your Cleaning Service
            </h1>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Schedule your professional cleaning service in just a few clicks. Choose your preferred date, time, and service type.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Booking Koala Embedded Form */}
          <div className="mb-8">
            <div className="bg-white rounded-lg shadow-lg p-2 sm:p-4 md:p-6 lg:p-8">
              <div className="w-full">
                <iframe 
                  src="https://pureglintclean.bookingkoala.com/booknow?embed=true" 
                  style={{ border: 'none', width: '100%', minHeight: '1000px' }}
                  scrolling="no"
                  title="Pure Glint Clean Booking Form"
                />
                <Script 
                  src="https://pureglintclean.bookingkoala.com/resources/embed.js" 
                  strategy="lazyOnload"
                />
              </div>
            </div>
          </div>

          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.name} className="flex items-start">
                    <item.icon className="h-6 w-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">{item.name}</div>
                      {item.href !== "#" ? (
                        <a
                          href={item.href}
                          className="text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-gray-600">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact & Why Choose Us */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Need Help Booking?</h4>
              <div className="space-y-3 mb-8">
                <a
                  href="tel:8174057858"
                  className="w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Call (817) 405-7858
                </a>
                <a
                  href="mailto:contact@pureglintclean.com"
                  className="w-full flex items-center justify-center px-4 py-3 border border-blue-600 rounded-md shadow-sm text-base font-medium text-blue-600 bg-white hover:bg-blue-50 transition-colors"
                >
                  <EnvelopeIcon className="h-5 w-5 mr-2" />
                  Send Email
                </a>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us?</h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Professional, background-checked cleaners</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>100% satisfaction guarantee</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Flexible scheduling & easy online booking</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Eco-friendly cleaning products available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
