import { ShieldCheckIcon, UserGroupIcon, CheckCircleIcon, StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const WhyChooseUs = () => {
  const features = [
    {
      name: "Locally Owned & Operated",
      description: "As a locally owned and operated business, we understand the North Fort Worth community and are committed to serving our neighbors with excellence.",
      icon: UserGroupIcon,
    },
    {
      name: "Licensed & Insured",
      description: "Our team is bonded, insured, and background checked. We're committed to building lasting relationships with our clients through trust and reliability.",
      icon: ShieldCheckIcon,
    },
    {
      name: "100% Satisfaction Guarantee",
      description: "We stand behind our work with an iron-clad satisfaction guarantee. If you're not happy, we'll make it right—no questions asked.",
      icon: CheckCircleIcon,
    },
    {
      name: "Professional Team",
      description: "Our highly-trained cleaning professionals deliver exceptional service with attention to detail, treating your home with the respect and care it deserves.",
      icon: StarIcon,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          {/* Image */}
          <div className="mb-10 lg:mb-0">
            <div className="relative">
              <Image
                className="relative mx-auto rounded-lg shadow-xl"
                width={600}
                height={400}
                src="/cleaning-crew-two.jpg"
                alt="Pure Glint Clean professional cleaning team providing residential cleaning services in North Fort Worth"
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase mb-2">
              Why Pure Glint Clean?
            </h2>
            <p className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
              5 Star Professional Cleaning Service
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Elevate the cleanliness of your property with our professional, top-notch
              cleaning services that pay meticulous attention to every detail. Trust Pure Glint Clean
              to provide unparalleled property cleaning for your North Fort Worth home.
            </p>

            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.name} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{feature.name}</h3>
                    <p className="mt-1 text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="#booking"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg"
              >
                BOOK ONLINE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
