import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/outline";

const Services = () => {
  const services = [
    {
      name: "Standard Recurring Services",
      description: "Perfect for maintaining a consistently clean home with our reliable weekly, bi-weekly, or monthly cleaning services.",
      image: "https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Complete dusting ceiling to floors",
        "Sweeping, mopping, vacuuming",
        "Full bathroom cleaning",
        "Kitchen cleaning and sanitizing",
        "Flexible scheduling options"
      ]
    },
    {
      name: "Deep Cleaning Services",
      description: "Comprehensive deep cleaning that reaches every corner of your home, perfect for seasonal cleaning or special occasions.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Tile and grout scrubbing",
        "Windows and windowsill cleaning",
        "Cleaning baseboards and walls",
        "Inside appliance cleaning",
        "Detailed dusting and sanitizing"
      ]
    },
    {
      name: "Move In/Out Cleaning",
      description: "Thorough cleaning service designed to make your move seamless, ensuring your new home is spotless or your old home is move-out ready.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Appliance cleaning inside and out",
        "Basement and garage sweeping",
        "Inside cabinets and drawers cleaning",
        "Complete sanitization",
        "Move-in ready guarantee"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Services</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Residential and Vacation Home Cleaning Services
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            We offer fully customizable or pre-packaged cleaning services tailored to your specific needs and lifestyle.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <div key={service.name} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  className="w-full h-full object-cover"
                  src={service.image}
                  alt={service.name}
                  width={400}
                  height={200}
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-20"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                      {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                </ul>
                <div className="mt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 transition-colors"
                  >
                    Book This Service
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom cleaning CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need something different?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              We offer fully customizable cleaning services to match your specific needs and preferences.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Request Custom Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;