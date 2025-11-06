import { PhoneIcon, HomeIcon, CheckCircleIcon, CreditCardIcon, ChatBubbleLeftRightIcon, GiftIcon, EyeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
// Removed unused imports: Link and CalendarIcon

const Process = () => {
  const steps = [
    {
      id: 1,
      title: "Call or Select a Date",
      description: "Call (817) 405-7858 or use our online booking system to select a time that works best for you. Whether you need weekly, bi-weekly, or monthly cleaning, we've got you covered.",
      icon: PhoneIcon,
      image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "Get a Free Quote",
      description: "Call (817) 405-7858 to speak with a team member or book online to receive a customized quote for your home. Once you book, you'll receive a finalized date & time for your cleaning.",
      icon: CreditCardIcon,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Enjoy a Clean Home",
      description: "Sit back, relax, and get ready to enjoy a clean and organized home. Our team of highly-skilled cleaners will take care of everything, leaving you with a spotless living space.",
      icon: HomeIcon,
      image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const features = [
    {
      name: "Tailored Cleaning",
      description: "You know your home best, so simply inform us of your cleaning needs and preferences, and we'll create a customized plan for you.",
      icon: CheckCircleIcon,
    },
    {
      name: "Talk to the Crew",
      description: "Easily leave instructions, notes, or messages for our crew assigned to your appointments, ensuring a smooth and efficient service.",
      icon: ChatBubbleLeftRightIcon,
    },
    {
      name: "Earn Rewards",
      description: "Love Pure Glint Clean's service? Spread the word and earn $50 in credits for each home you refer to us, contributing to your next cleaning.",
      icon: GiftIcon,
    },
    {
      name: "Full Transparency",
      description: "Whether you're at home or away, you'll have access to real-time updates on our arrival, cleaning progress, and departure.",
      icon: EyeIcon,
    },
  ];

  return (
    <section id="process" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* How it works */}
        <div className="text-center mb-16">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">How It Works</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Receive a Free Cleaning Quote for Your Home
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            You are one call away from transforming your beautiful home into a clean paradise.
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, stepIndex) => (
            <div key={step.id} className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className={stepIndex % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mr-4">
                    <span className="text-xl font-bold">{step.id}</span>
                  </div>
                  <step.icon className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-500 mb-6">
                  {step.description}
                </p>
                <a
                  href={step.id === 1 ? "tel:8174057858" : "#contact"}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  {step.id === 1 ? "Call Now" : step.id === 2 ? "Get Quote" : "Book Cleaning"}
                </a>
              </div>
              <div className={`mt-10 lg:mt-0 ${stepIndex % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="relative">
                  <Image
                    className="relative mx-auto rounded-lg shadow-lg"
                    width={490}
                    height={300}
                    src={step.image}
                    alt={step.title}
                    priority
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology features */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Our Easy Booking Technology
            </h3>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              At Pure Glint Clean, we provide genuine personalization for your home cleaning services, 
              granting you complete control over booking details and scheduling. With just a click, 
              you can effortlessly opt for an extensive cleaning this month or include laundry and 
              dishwashing services in your upcoming appointment.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">{feature.name}</h4>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-blue-600 rounded-2xl px-6 py-12 sm:px-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who trust Pure Glint Clean with their homes. 
              Experience the difference of professional cleaning services.
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
                Book Online
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;