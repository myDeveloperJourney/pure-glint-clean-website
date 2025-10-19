import Link from "next/link";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  const navigation = {
    services: [
      { name: "Standard Cleaning", href: "#services" },
      { name: "Deep Cleaning", href: "#services" },
      { name: "Move In/Out Services", href: "#services" },
      { name: "Short Term Rentals", href: "#services" },
      { name: "Post Construction", href: "#services" },
      { name: "Vacation Homes", href: "#services" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Process", href: "#process" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Service Areas", href: "#contact" },
      { name: "Contact", href: "#contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
    ],
    serviceAreas: [
      "North Fort Worth",
      "Keller",
      "Southlake",
      "Grapevine",
      "Colleyville",
      "Watauga",
      "Haltom City",
      "Newmarket (2025)",
    ],
  };

  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 xl:gap-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <span className="text-2xl font-bold text-white">Pure Glint Clean</span>
            </Link>
            <p className="text-gray-300 mb-6">
              Providing smiles one clean at a time. Professional residential cleaning services 
              in North Fort Worth and the DFW area.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <PhoneIcon className="h-5 w-5 mr-3 text-blue-400" />
                <a href="tel:8174057858" className="hover:text-white transition-colors">
                  (817) 405-7858
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <EnvelopeIcon className="h-5 w-5 mr-3 text-blue-400" />
                <a href="mailto:contact@pureglintclean.com" className="hover:text-white transition-colors">
                  contact@pureglintclean.com
                </a>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPinIcon className="h-5 w-5 mr-3 text-blue-400 mt-0.5" />
                <span>Serving North Fort Worth & DFW Area</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Our Services
            </h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Service Areas
            </h3>
            <ul className="space-y-2">
              {navigation.serviceAreas.map((area) => (
                <li key={area} className="text-gray-300 text-sm">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 border-t border-gray-800 pt-12">
          <div className="bg-blue-600 rounded-2xl px-6 py-8 sm:px-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience Pure Glint Clean?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who trust us with their homes. 
              Get your free quote today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8174057858"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Call (817) 405-7858
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition-colors"
              >
                Book Free Quote
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 Pure Glint Clean Home Cleaning. All Rights Reserved.
            </div>
            <div className="mt-4 md:mt-0 flex space-x-6">
              {navigation.legal.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          
          {/* Additional Info */}
          <div className="mt-6 text-center md:text-left">
            <p className="text-gray-500 text-xs">
              Licensed, bonded, and insured. Professional residential cleaning services 
              serving North Fort Worth, Keller, Southlake, Grapevine, Colleyville, and surrounding DFW areas.
              Expanding to Newmarket in early 2025.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;