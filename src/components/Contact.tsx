"use client";

import { useState } from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    homeSize: "",
    frequency: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    alert("Thank you for your interest! We'll contact you soon to schedule your free quote.");
  };

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
    <section id="contact" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Contact Us</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Book Your Free Cleaning Quote
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Ready to experience the Pure Glint Clean difference? Get your free, no-obligation quote today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Quote</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="(817) 555-0123"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Type *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select a service</option>
                      <option value="standard">Standard Cleaning</option>
                      <option value="deep">Deep Cleaning</option>
                      <option value="moveout">Move In/Out Cleaning</option>
                      <option value="rental">Short Term Rental</option>
                      <option value="construction">Post Construction</option>
                      <option value="vacation">Vacation Home</option>
                      <option value="custom">Custom Service</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="homeSize" className="block text-sm font-medium text-gray-700 mb-2">
                      Home Size
                    </label>
                    <select
                      id="homeSize"
                      name="homeSize"
                      value={formData.homeSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select size</option>
                      <option value="1br">1 Bedroom</option>
                      <option value="2br">2 Bedrooms</option>
                      <option value="3br">3 Bedrooms</option>
                      <option value="4br">4 Bedrooms</option>
                      <option value="5br">5+ Bedrooms</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="frequency" className="block text-sm font-medium text-gray-700 mb-2">
                    Cleaning Frequency
                  </label>
                  <select
                    id="frequency"
                    name="frequency"
                    value={formData.frequency}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select frequency</option>
                    <option value="onetime">One-time cleaning</option>
                    <option value="weekly">Weekly</option>
                    <option value="biweekly">Bi-weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="asneeded">As needed</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tell us about any special requests, specific areas of focus, or questions you have..."
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
                  >
                    Get My Free Quote
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
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

              {/* Quick Contact */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Need immediate assistance?</h4>
                <div className="space-y-3">
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
              </div>

              {/* Service Areas */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Service Area</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>• North Fort Worth Area</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-blue-600 rounded-2xl px-6 py-12 sm:px-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Home?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Don't wait another week to feel peace in your own space. Let Pure Glint Clean take the burden off your shoulders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8174057858"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
              >
                <PhoneIcon className="h-6 w-6 mr-2" />
                Call Now for Instant Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;