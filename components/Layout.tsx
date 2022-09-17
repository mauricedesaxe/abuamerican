import Link from "next/link";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { navigation, products, socialLinks } from "../utils/contants";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      {/* Mobile menu */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 lg:hidden"
          onClose={setMobileMenuOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 pt-5 pb-2 flex">
                <button
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                {navigation.pages.map((page) => (
                  <div key={page.name} className="flow-root">
                    <Link href={page.href}>
                      <a className="-m-2 p-2 block font-medium text-gray-900">
                        {page.name}
                      </a>
                    </Link>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                {products.map((page) => (
                  <div key={page.name} className="flow-root">
                    <Link href={page.href}>
                      <a className="-m-2 p-2 block font-medium text-gray-900">
                        {page.name}
                      </a>
                    </Link>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                <div className="flow-root">
                  <Link href="https://gumroad.com/a/320271475/XkBvB">
                    <a className="-m-2 p-2 block font-medium text-gray-900">
                      Men's Community
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      {/* Hero section */}
      <div className="relative bg-gray-900">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <Image
            src="/wives.jpg"
            alt="Image of muslim wives"
            className="w-full h-full object-center object-cover"
            priority={true}
            layout="fill"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 opacity-70"
        />

        {/* Navigation */}
        <header className="relative z-10">
          <nav
            aria-label="Top"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4"
          >
            {/* Secondary navigation */}
            <div className="backdrop-blur-md backdrop-filter bg-opacity-10 bg-white rounded-lg">
              <div className="px-4 lg:px-10">
                <div>
                  <div className="h-16 flex items-center justify-between">
                    {/* Logo (lg+) */}
                    <div className="hidden lg:flex-1 lg:flex lg:items-center">
                      <Link href="/">
                        <a>
                          <span className="sr-only">Abuamerican</span>
                          <Image
                            className="h-8 w-auto rounded-lg"
                            src="/abuamerican_logo.jpg"
                            alt="Abuamerican Logo"
                            width={32}
                            height={32}
                          />
                        </a>
                      </Link>
                    </div>

                    <div className="hidden h-full lg:flex">
                      {/* Flyout menus */}
                      <Popover.Group className="px-4 bottom-0 inset-x-0">
                        <div className="h-full flex justify-center space-x-8">
                          {navigation.pages.map((page) => (
                            <Link href={page.href}>
                              <a
                                key={page.name}
                                className="flex items-center text-sm font-medium text-white"
                              >
                                {page.name}
                              </a>
                            </Link>
                          ))}
                          <Link href="https://gumroad.com/a/320271475/XkBvB">
                            <a className="flex items-center text-sm font-medium text-white">
                              Men's Community
                            </a>
                          </Link>
                        </div>
                      </Popover.Group>
                    </div>

                    {/* Mobile menu and search (lg-) */}
                    <div className="flex-1 flex items-center lg:hidden">
                      <button
                        type="button"
                        className="-ml-2 p-2 text-white"
                        onClick={() => setMobileMenuOpen(true)}
                      >
                        <span className="sr-only">Open menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    {/* Logo (lg-) */}
                    <Link href="/">
                      <a className="lg:hidden">
                        <span className="sr-only">Abuamerican</span>
                        <Image
                          className="h-8 w-auto rounded-lg"
                          src="/abuamerican_logo.jpg"
                          alt="Abuamerican Logo"
                          width={32}
                          height={32}
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <Hero
          title="Abuamerican"
          description="I’ve coached hundreds of men and helped them to improve their
        relationships. If you are looking to learn, I provide a number of
        courses &amp; products on the subject."
          cta="See Products"
          ctaLink="#products"
        />
      </div>
    </div>
  );
};

const Hero = ({
  title,
  description,
  cta,
  ctaLink,
}: {
  title: string;
  description: string;
  cta: string;
  ctaLink: string;
}) => {
  return (
    <div className="relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0">
      <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">
        {title}
      </h1>
      <p className="mt-4 text-xl text-white">{description}</p>
      <Link href={ctaLink}>
        <a className="mt-8 inline-block bg-blue-500 border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-50 transition-colors hover:opacity-90">
          {cta}
        </a>
      </Link>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {socialLinks.map((item) => (
            <Link href={item.href}>
              <a key={item.name} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            </Link>
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-400">
            &copy; {new Date().getFullYear()} Abuamerican, Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
