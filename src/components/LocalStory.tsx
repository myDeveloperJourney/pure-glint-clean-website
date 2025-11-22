import Image from "next/image";
import { PhoneIcon } from "@heroicons/react/24/outline";

const LocalStory = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          {/* Content */}
          <div className="mb-10 lg:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
              LOCALLY OWNED & OPERATED FAMILY BUSINESS
            </h2>
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                We are available to chat via our website contact form, email or by phone. 
                Contact us today!
              </p>
              <p>
                At Pure Glint Clean, we understand the importance of trust and reliability in the 
                cleaning industry, and we continually strive to build lasting relationships with our 
                clients. Our commitment to customer satisfaction drives everything we do as we establish 
                ourselves in the North Fort Worth community.
              </p>
              <p>
                As a locally owned and operated business, we treat every home with the same care and 
                attention we would give our own. Our team takes pride in delivering exceptional cleaning 
                services that give you more time for what matters most.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:8174057858"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                (817) 405-7858
              </a>
              <a
                href="#booking"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors"
              >
                Book Online
              </a>
            </div>
          </div>

          {/* Image */}
          <div>
            <div className="relative">
              <Image
                className="relative mx-auto rounded-lg shadow-xl"
                width={600}
                height={600}
                src="/cleaning-crew.png"
                alt="Pure Glint Clean - Locally owned and operated family business in North Fort Worth"
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalStory;
