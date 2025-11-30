"use client";

import { useState, FormEvent } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceType: "",
    honeypot: "", // Hidden field for spam protection
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: data.message || "Thank you! We'll contact you shortly.",
        });
        
        // Clear form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          serviceType: "",
          honeypot: "",
        });

        // Auto-hide success message after 8 seconds
        setTimeout(() => {
          setSubmitStatus({ type: null, message: "" });
        }, 8000);
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "Failed to submit. Please call us at (817) 405-7858.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="booking" className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-10 text-center">
            <h2 className="text-4xl font-bold text-white mb-3">
              Book Online
            </h2>
            <p className="text-xl text-blue-100">
              Claim Your $50 Voucher By Booking Online
            </p>
            <div className="mt-4 inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-semibold text-lg shadow-lg">
              🎁 Limited Time Offer!
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Column - Dog Photo */}
            <div className="relative h-64 lg:h-auto">
              <Image
                src="/cleaning-dogs.png"
                alt="Pure Glint Clean team mascots - friendly dogs representing our trusted and reliable cleaning service"
                fill
                className="object-cover object-[center_15%]"
                quality={85}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Right Column - Form */}
            <div className="px-8 py-10">
            {/* Success Message */}
            {submitStatus.type === "success" && (
              <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-green-900">Success!</p>
                  <p className="text-green-700">{submitStatus.message}</p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus.type === "error" && (
              <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="font-semibold text-red-900">Error</p>
                <p className="text-red-700">{submitStatus.message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field - hidden from users */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                className="absolute opacity-0 pointer-events-none"
                aria-hidden="true"
              />

              {/* First Name */}
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  maxLength={50}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                  placeholder="Enter your first name"
                  disabled={isSubmitting}
                />
              </div>

              {/* Last Name */}
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  maxLength={50}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                  placeholder="Enter your last name"
                  disabled={isSubmitting}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                  placeholder="your.email@example.com"
                  disabled={isSubmitting}
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  maxLength={20}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                  placeholder="(817) 555-0123"
                  disabled={isSubmitting}
                />
              </div>

              {/* Service Type Selection */}
              <div>
                <label
                  htmlFor="serviceType"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Service Interested In <span className="text-red-500">*</span>
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleSelectChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 bg-white"
                  disabled={isSubmitting}
                >
                  <option value="">Select a service...</option>
                  <option value="standard-clean">Standard Clean</option>
                  <option value="deep-clean">Deep Clean</option>
                  <option value="move-in-out">Move In/Out Clean</option>
                  <option value="short-term-rental">Short Term Rental</option>
                  <option value="post-construction">Post Construction</option>
                  <option value="vacation-homes">Vacation Homes</option>
                  <option value="not-sure">Not Sure - Let Us Make a Recommendation</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none disabled:cursor-not-allowed text-lg"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "Book Online - Claim Your $50 Voucher"
                )}
              </button>

              {/* Privacy Note */}
              <p className="text-sm text-gray-500 text-center mt-4">
                By submitting, you agree to be contacted about your booking.
                We respect your privacy and will never share your information.
              </p>
            </form>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="bg-gray-50 px-8 py-6 text-center border-t border-gray-200">
            <p className="text-gray-700 mb-3">
              Prefer to talk? Give us a call!
            </p>
            <a
              href="tel:8174057858"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg"
            >
              📞 (817) 405-7858
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
