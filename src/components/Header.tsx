"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Logo from "./Logo";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#home" },
    // { name: "About", href: "#about" },
    { name: "Services & Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
    { name: "Process", href: "#process" },
  ];

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-blue-500 py-1 lg:border-none">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Logo width={700} height={225} priority={true} className="h-28 w-auto sm:h-32" />
            </Link>
          </div>
          <div className="ml-10 hidden space-x-8 lg:block">
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="ml-10 hidden lg:flex lg:items-center lg:space-x-4">
            <a
              href="tel:8174057858"
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition-colors"
            >
              <PhoneIcon className="h-4 w-4 mr-2" />
              (817) 405-7858
            </a>
            <Link
              href="/book-now"
              className="inline-flex items-center rounded-md border border-blue-600 bg-white px-4 py-2 text-sm font-medium text-blue-600 shadow-sm hover:bg-blue-50 transition-colors"
            >
              Book Now
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <Logo width={700} height={225} className="h-20 w-auto" />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6 space-y-4">
                  <a
                    href="tel:8174057858"
                    className="flex w-full items-center justify-center rounded-md bg-blue-600 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    <PhoneIcon className="h-4 w-4 mr-2" />
                    Call (817) 405-7858
                  </a>
                  <Link
                    href="/book-now"
                    className="flex w-full items-center justify-center rounded-md border border-blue-600 bg-white px-3 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;