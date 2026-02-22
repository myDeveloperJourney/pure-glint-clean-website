import TrustBadges from "./TrustBadges";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-blue-100 pt-32 sm:pt-40 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="w-full h-full transform translate-y-[10%]">
          <Image
            src="/cleaning-crew.png"
            alt="Pure Glint Clean professional cleaning crew serving North Fort Worth"
            fill
            priority
            quality={100}
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-blue-900 opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block">We Clean. You Relax.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-blue-50 sm:text-2xl">
            Let Us Give You A 5 Star Experience.
          </p>
          <p className="mx-auto mt-3 max-w-md text-base text-blue-100 sm:text-lg">
            Professional Home Cleaning Services
          </p>
          <div className="mx-auto mt-8 max-w-md sm:flex sm:justify-center sm:max-w-2xl md:mt-10">
            <div className="rounded-md shadow-lg">
              <a
                href="#booking"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-10 py-4 text-lg font-semibold text-white hover:bg-blue-700 transition-colors shadow-xl"
              >
                Book Online
              </a>
            </div>
            <div className="mt-3 rounded-md shadow-lg sm:mt-0 sm:ml-4">
              <a
                href="tel:8174057858"
                aria-label="Call Pure Glint Clean at (817) 405-7858"
                className="flex w-full items-center justify-center rounded-md border-2 border-blue-600 bg-white px-10 py-4 text-lg font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                (817) 405-7858
              </a>
            </div>
          </div>
          <TrustBadges />
        </div>
      </div>
    </section>
  );
};

export default Hero;