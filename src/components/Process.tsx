import { PhoneIcon, CreditCardIcon, HomeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const Process = () => {
  const steps = [
    {
      id: 1,
      title: "Complete Booking Form",
      description: "Provide your contact information through our secure online form, or give us a call at (817) 405-7858. We respect your privacy and only use your information to contact you about your booking—we never share it with anyone.",
      icon: PhoneIcon,
      image: "/cleaning-dogs.png",
      cta: "Book Online",
      ctaHref: "#booking"
    },
    {
      id: 2,
      title: "Get Your Free Quote",
      description: "We'll reach out to provide a customized quote for your home and confirm your appointment date and time. Transparent pricing with no hidden fees.",
      icon: CreditCardIcon,
      image: "/cleaning-crew.png",
      cta: "Get Started",
      ctaHref: "#booking"
    },
    {
      id: 3,
      title: "Enjoy a Clean Home",
      description: "Sit back, relax, and get ready to enjoy a spotless home. Our team of highly-skilled cleaners will take care of everything, leaving you with a pristine living space.",
      icon: HomeIcon,
      image: "/cleaning-crew-three.jpeg",
      cta: "Book Now",
      ctaHref: "#booking"
    }
  ];

  return (
    <section id="process" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* How it works */}
        <div className="text-center mb-16">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">How It Works</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            3 Simple Steps to a Cleaner Home
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            You are one call away from transforming your beautiful home into a clean paradise.
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, stepIndex) => (
            <div key={step.id} className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
              <div className={stepIndex % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 text-white mr-4 flex-shrink-0 text-2xl font-bold">
                    {step.id}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    {step.title}
                  </h3>
                </div>
                <p className="text-lg text-gray-600 mb-8">
                  {step.description}
                </p>
                <a
                  href={step.ctaHref}
                  className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-md"
                >
                  {step.cta}
                </a>
              </div>
              <div className={`mt-10 lg:mt-0 ${stepIndex % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="relative">
                  <Image
                    className="relative mx-auto rounded-lg shadow-xl"
                    width={490}
                    height={300}
                    src={step.image}
                    alt={`${step.title} - Pure Glint Clean process step ${step.id}`}
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 490px"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;