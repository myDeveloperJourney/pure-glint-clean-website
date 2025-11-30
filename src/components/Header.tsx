"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Logo from "./Logo";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const allNavigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#booking" },
    { name: "Work with Us", href: "/work-with-us" },
    { name: "Contact", href: "/#booking" },
  ];

  // Filter out "Home" link when on homepage
  const navigation = pathname === "/" 
    ? allNavigation.filter(item => item.name !== "Home")
    : allNavigation;

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-2 lg:py-1">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Logo width={700} height={225} priority={true} className="h-20 w-auto sm:h-24" />
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
          <div className="ml-10 hidden lg:flex lg:items-center lg:space-x-3">
            <a
              href="tel:8174057858"
              className="inline-flex items-center rounded-md bg-blue-600 px-5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              (817) 405-7858
            </a>
            <Link
              href="#booking"
              className="inline-flex items-center rounded-md bg-blue-700 px-6 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-blue-800 transition-colors whitespace-nowrap"
            >
              BOOK ONLINE
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
                    className="flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
                  >
                    <PhoneIcon className="h-5 w-5 mr-2" />
                    (817) 405-7858
                  </a>
                  <Link
                    href="#booking"
                    className="flex w-full items-center justify-center rounded-md bg-blue-700 px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-800 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    BOOK ONLINE
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