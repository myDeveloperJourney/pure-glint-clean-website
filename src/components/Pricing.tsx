import { CheckIcon, StarIcon } from "@heroicons/react/24/solid";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Pricing = () => {
  const tiers = [
    {
      name: "Standard Cleaning",
      price: 130,
      priceLabel: "starting at",
      duration: "2-3 Hour Cleanings",
      description: "Perfect for regular maintenance and keeping your home consistently clean.",
      features: [
        "Complete dusting ceiling to floors",
        "Sweeping, mopping, vacuuming",
        "Full cleanings of bathrooms",
        "Kitchen cleaning and sanitizing",
        "Trash removal",
        "Basic organizing"
      ],
      cta: "Book a Standard Clean",
      popular: false
    },
    {
      name: "Deep Home Cleaning",
      price: 205,
      priceLabel: "starting at",
      duration: "3-4 Hour Cleanings",
      description: "Our most popular service - comprehensive cleaning that reaches every detail.",
      features: [
        "Everything in Standard Cleaning",
        "Tile and grout scrubbing",
        "Windows and windowsill cleaning",
        "Cleaning baseboards and walls",
        "Inside appliance cleaning",
        "Detailed dusting of all surfaces",
        "Cabinet front cleaning"
      ],
      cta: "Book a Deep Home Cleaning",
      popular: true
    },
    {
      name: "Move Out Cleaning",
      price: 280,
      priceLabel: "starting at",
      duration: "4-5 Hour Cleanings",
      description: "Comprehensive cleaning for move-ins, move-outs, or special occasions.",
      features: [
        "Everything in Deep Cleaning",
        "Appliance cleaning inside & out",
        "Basement and garage sweeping",
        "Inside cabinets and drawers cleaning",
        "Light fixture cleaning",
        "Switch plate and outlet cleaning",
        "Final walkthrough included"
      ],
      cta: "Book a Move Out Cleaning",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Pricing</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Pure Glint Clean Pricing Packages
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Transparent pricing with no hidden fees. Choose the cleaning level that works best for your home and budget.
          </p>
        </div>

        <div className="mt-16 space-y-8 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl shadow-lg ${
                tier.popular
                  ? "ring-2 ring-blue-500 bg-blue-50"
                  : "bg-white"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500 text-white">
                    <StarIcon className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900">{tier.name}</h3>
                <p className="mt-2 text-gray-600">{tier.duration}</p>
                <p className="mt-4 text-gray-500">{tier.description}</p>
                
                <div className="mt-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">${tier.price}</span>
                    <span className="ml-1 text-xl font-medium text-gray-500">/{tier.priceLabel}</span>
                  </div>
                </div>

                <ul className="mt-8 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <a
                    href="#contact"
                    className={`w-full flex items-center justify-center px-6 py-3 rounded-md text-base font-medium transition-colors ${
                      tier.popular
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                    }`}
                  >
                    {tier.cta}
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional pricing info */}
        {/* <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Pricing Information
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="text-left">
                <h4 className="font-semibold text-gray-900 mb-2">What affects pricing?</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Home size and layout</li>
                  <li>• Current cleanliness level</li>
                  <li>• Frequency of service</li>
                  <li>• Special requests or add-ons</li>
                  <li>• Accessibility considerations</li>
                </ul>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-gray-900 mb-2">Discounts available:</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• 10% off weekly cleanings</li>
                  <li>• 5% off bi-weekly cleanings</li>
                  <li>• Senior & military discounts</li>
                  <li>• Referral program rewards</li>
                  <li>• First-time customer specials</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-gray-600">
                All prices are estimates. Final pricing determined after free in-home consultation.
                <span className="block mt-2 font-medium text-blue-600">
                  Call <a href="tel:8174057858" className="hover:underline">(817) 405-7858</a> for exact quote.
                </span>
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Pricing;