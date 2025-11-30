"use client";

import { useState, FormEvent } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    hasDriversLicense: "",
    hasReliableVehicle: "",
    liveInFortWorth: "",
    availableMonFri: "",
    hasVehicleInsurance: "",
    hasConviction: "",
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
      const response = await fetch("/api/application", {
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
          message: data.message || "Thank you for your application! We'll review it and get back to you soon.",
        });
        
        // Clear form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          hasDriversLicense: "",
          hasReliableVehicle: "",
          liveInFortWorth: "",
          availableMonFri: "",
          hasVehicleInsurance: "",
          hasConviction: "",
          honeypot: "",
        });

        // Auto-hide success message after 15 seconds
        setTimeout(() => {
          setSubmitStatus({ type: null, message: "" });
        }, 15000);
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
    <section className="mt-20 py-16 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-10 text-center">
            <h1 className="text-4xl font-bold text-white mb-3">
              Full Time Residential Cleaner Application
            </h1>
            <p className="text-xl text-blue-100">
              Please Complete the Application Below:
            </p>
          </div>

          {/* Form */}
          <div className="px-8 py-10">
            {/* Success Message */}
            {submitStatus.type === "success" && (
              <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-start mb-4">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-green-900 text-lg">Application Submitted!</p>
                    <p className="text-green-700 mt-1">{submitStatus.message}</p>
                  </div>
                </div>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-md"
                >
                  Return to Home Page
                </Link>
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

              {/* Name Fields - Two Column */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    placeholder="First Name"
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
                    placeholder="Last Name"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Email and Phone - Two Column */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    placeholder="enter email address"
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
                    placeholder="enter phone number"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Yes/No Questions - Two Column Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Drivers License */}
                <div>
                  <label
                    htmlFor="hasDriversLicense"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Do you have a valid drivers license? <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="hasDriversLicense"
                    name="hasDriversLicense"
                    value={formData.hasDriversLicense}
                    onChange={handleSelectChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 bg-white"
                    disabled={isSubmitting}
                  >
                    <option value="">Click Here To Answer</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                {/* Reliable Vehicle */}
                <div>
                  <label
                    htmlFor="hasReliableVehicle"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Do you have a reliable vehicle? <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="hasReliableVehicle"
                    name="hasReliableVehicle"
                    value={formData.hasReliableVehicle}
                    onChange={handleSelectChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 bg-white"
                    disabled={isSubmitting}
                  >
                    <option value="">Click Here To Answer</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                {/* Live in Fort Worth */}
                <div>
                  <label
                    htmlFor="liveInFortWorth"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Do you live/plan on living in Fort Worth? <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="liveInFortWorth"
                    name="liveInFortWorth"
                    value={formData.liveInFortWorth}
                    onChange={handleSelectChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 bg-white"
                    disabled={isSubmitting}
                  >
                    <option value="">Click Here To Answer</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                {/* Available Mon-Fri */}
                <div>
                  <label
                    htmlFor="availableMonFri"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Are you available to work Monday - Friday 8a-6p? <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="availableMonFri"
                    name="availableMonFri"
                    value={formData.availableMonFri}
                    onChange={handleSelectChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 bg-white"
                    disabled={isSubmitting}
                  >
                    <option value="">Click Here To Answer</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                {/* Vehicle Insurance */}
                <div>
                  <label
                    htmlFor="hasVehicleInsurance"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Is your vehicle insured? <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="hasVehicleInsurance"
                    name="hasVehicleInsurance"
                    value={formData.hasVehicleInsurance}
                    onChange={handleSelectChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 bg-white"
                    disabled={isSubmitting}
                  >
                    <option value="">Click Here To Answer</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                {/* Felony Conviction */}
                <div>
                  <label
                    htmlFor="hasConviction"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Have you ever been convicted of a felony? <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="hasConviction"
                    name="hasConviction"
                    value={formData.hasConviction}
                    onChange={handleSelectChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 bg-white"
                    disabled={isSubmitting}
                  >
                    <option value="">Click Here To Answer</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-blue-400 disabled:to-blue-500 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none disabled:cursor-not-allowed text-lg text-white"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900"
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
                  <>
                    Apply For Full Time Cleaner Position
                    <br />
                    <span className="text-base font-semibold">Click Here</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
