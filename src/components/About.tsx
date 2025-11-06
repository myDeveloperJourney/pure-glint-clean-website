import Image from "next/image";
import { CheckIcon, ShieldCheckIcon, UserGroupIcon, ClockIcon } from "@heroicons/react/24/outline";

const About = () => {
  const features = [
    {
      name: "Local Business",
      description: "As a locally owned and operated business, we understand the Fort Worth community and are committed to serving our neighbors with excellence.",
      icon: UserGroupIcon,
    },
    {
      name: "Trusted & Reliable",
      description: "Our team is bonded, insured, and background checked. We're committed to building lasting relationships with our clients through trust and reliability.",
      icon: ShieldCheckIcon,
    },
    {
      name: "Customer-Centric",
      description: "We treat our customers with respect and admiration, delivering personalized and exceptional cleaning services to each and every one.",
      icon: CheckIcon,
    },
    {
      name: "Flexible Scheduling",
      description: "We work around your schedule with convenient booking options and flexible appointment times that fit your busy lifestyle.",
      icon: ClockIcon,
    },
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Best Local Cleaning Company
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Pure Glint Clean is committed to providing exceptional cleaning services to our customers. 
            We have dedicated ourselves to creating a customer-centric approach that prioritizes your needs above all else.
          </p>
        </div>

        <div className="mt-16">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Serving the Community with Pride
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                We understand the importance of trust and reliability in the cleaning industry, and we continually 
                strive to build lasting relationships with our clients. Our commitment to customer satisfaction drives 
                everything we do as we establish ourselves in the North Fort Worth community.
              </p>

              <dl className="mt-10 space-y-10">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="relative">
                <Image
                  className="relative mx-auto rounded-lg shadow-lg"
                  width={490}
                  height={490}
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Professional cleaning team"
                />
                
                {/* Stats overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-blue-600">5★</div>
                        <div className="text-xs text-gray-600">Average Rating</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">500+</div>
                        <div className="text-xs text-gray-600">Happy Customers</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">100%</div>
                        <div className="text-xs text-gray-600">Satisfaction</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 bg-blue-50 rounded-2xl px-6 py-8 sm:px-12 sm:py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900">Ready to experience the Pure Glint Clean difference?</h3>
            <p className="mt-4 text-lg text-gray-600">
              Become one of our satisfied customers who trust us with their homes.
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Book a Cleaning
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;