import { HomeIcon, SparklesIcon, TruckIcon } from "@heroicons/react/24/outline";

const ServiceCards = () => {
  const services = [
    {
      id: 1,
      name: "Residential Cleaning",
      icon: HomeIcon,
      features: [
        "Initial Cleans",
        "Recurring Cleans",
        "Customized Services"
      ],
      href: "#pricing"
    },
    {
      id: 2,
      name: "Deep Cleaning",
      icon: SparklesIcon,
      features: [
        "Tile & Grout Scrubbing",
        "Inside Appliances",
        "Baseboards & Walls"
      ],
      href: "#pricing"
    },
    {
      id: 3,
      name: "Move In/Out Cleaning",
      icon: TruckIcon,
      features: [
        "Move Out Cleans",
        "Move In Ready",
        "Complete Sanitization"
      ],
      href: "#pricing"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Professional Cleaning Services
          </h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our North Fort Worth Home Services
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Select From Our Property Services Below:
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-500 hover:shadow-lg transition-all text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.name}
              </h3>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">
                    -{feature}
                  </li>
                ))}
              </ul>

              <a
                href={service.href}
                className="inline-flex items-center justify-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                {service.name}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#pricing"
            className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 transition-colors"
          >
            OUR SERVICES →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
