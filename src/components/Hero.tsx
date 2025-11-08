import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-blue-100 pt-40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Professional Home Cleaning</span>
            <span className="block text-blue-600">in North Fort Worth</span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
            Experience exceptional residential cleaning services that give you more time for what matters most.
          </p>
          <div className="mx-auto mt-5 max-w-lg sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="#contact"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-12 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-16 md:text-lg transition-colors whitespace-nowrap"
              >
                Book Free Quote
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="tel:8174057858"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-12 py-3 text-base font-medium text-blue-600 hover:bg-gray-50 md:py-4 md:px-16 md:text-lg transition-colors whitespace-nowrap"
              >
                (817) 405-7858
              </a>
            </div>
          </div>
          
          {/* Value propositions - honest and compelling */}
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="col-span-1 flex justify-center md:col-span-1">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600">Satisfaction Guarantee</div>
              </div>
            </div>
            <div className="col-span-1 flex justify-center md:col-span-1">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">Same</div>
                <div className="text-sm text-gray-600">Day Service</div>
              </div>
            </div>
            <div className="col-span-1 flex justify-center md:col-span-1">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">Fully</div>
                <div className="text-sm text-gray-600">Insured & Bonded</div>
              </div>
            </div>
            <div className="col-span-1 flex justify-center md:col-span-1">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">Free</div>
                <div className="text-sm text-gray-600">Quotes & Estimates</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hero Image */}
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0">
              <Image
                className="h-full w-full object-cover object-center md:object-[center_27%]"
                src="/cleaning-crew-two.jpg"
                alt="Professional Pure Glint Clean team with smiling faces"
                width={1024}
                height={683}
                priority
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1280px"
              />
              <div className="absolute inset-0 bg-blue-600 mix-blend-multiply opacity-70" />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-white">Ready to experience</span>
                <span className="block text-blue-200">Pure Glint Clean?</span>
              </h2>
              <p className="mx-auto mt-6 max-w-lg text-center text-xl text-blue-100 sm:max-w-3xl">
                Proudly serving the North Fort Worth area with professional cleaning services.
              </p>
              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                  <a
                    href="#pricing"
                    className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-blue-600 shadow-md hover:bg-blue-50 transition-colors"
                  >
                    Get Free Estimate
                  </a>
                  <a
                    href="#pricing"
                    className="flex items-center justify-center rounded-md border border-transparent bg-blue-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-md hover:bg-opacity-70 transition-colors"
                  >
                    View Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;