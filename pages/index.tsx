/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Fragment, SVGProps, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  MenuIcon,
  QuestionMarkCircleIcon,
  SearchIcon,
  ShoppingBagIcon,
  XIcon,
} from "@heroicons/react/outline";

const currencies = ["CAD", "USD", "AUD", "EUR", "GBP"];
const navigation = {
  categories: [
    {
      name: "Products",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
        {
          name: "Accessories",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg",
          imageAlt:
            "Model wearing minimalist watch with black wristband and white watch face.",
        },
        {
          name: "Carry",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg",
          imageAlt:
            "Model opening tan leather long wallet with credit card pockets and cash pouch.",
        },
      ],
    },
    {
      name: "Endorsements",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg",
          imageAlt:
            "Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg",
          imageAlt: "Model wearing light heather gray t-shirt.",
        },
        {
          name: "Accessories",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg",
          imageAlt:
            "Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.",
        },
        {
          name: "Carry",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg",
          imageAlt:
            "Model putting folded cash into slim card holder olive leather wallet with hand stitching.",
        },
      ],
    },
  ],
  pages: [
    { name: "Products", href: "#products" },
    {
      name: "YouTube",
      href: "https://www.youtube.com/user/Noneyabusinesschief",
    },
  ],
};
const categories = [
  {
    name: "New Arrivals",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg",
  },
  {
    name: "Productivity",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg",
  },
  {
    name: "Workspace",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-04.jpg",
  },
  {
    name: "Accessories",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-05.jpg",
  },
  {
    name: "Sale",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg",
  },
];
const products = [
  {
    name: "Guide to Vetting Women",
    href: "https://gumroad.com/a/320271475/hcDvJ",
    imageSrc: "/vetting-guide.webp",
    imageAlt:
      "Brown leather key ring with brass metal loops and rivets on wood table.",
    description:
      "Keep your phone, keys, and wallet together, so you can lose everything at once.",
  },
  {
    name: "The Polygynous Household",
    href: "https://gumroad.com/a/320271475/mQTkh",
    imageSrc: "/poly-household.jpg",
    imageAlt:
      "Natural leather mouse pad on white desk next to porcelain mug and keyboard.",
    description:
      "The rest of the house will still be a mess, but your desk will look great.",
  },
  {
    name: "The Mad Monkey",
    href: "https://gumroad.com/a/320271475/Mpkps",
    imageSrc: "/mad-monkey.webp",
    imageAlt:
      "Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.",
    description:
      "Be more productive than enterprise project managers with a single piece of paper.",
  },
];
const socialLinks = [
  {
    name: "Twitter",
    href: "https://twitter.com/Abuamerican",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/user/Noneyabusinesschief",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 896 628" fill="currentColor" {...props}>
        <path d="M877.3 98.1C872.199 79.1038 862.199 61.7805 848.3 47.8636C834.4 33.9467 817.09 23.9245 798.1 18.8C728.2 3.8147e-06 448 0 448 0C448 0 167.8 -3.8147e-06 97.9 18.7C78.902 23.8079 61.5825 33.8245 47.6806 47.744C33.7787 61.6634 23.7839 78.9956 18.7 98C-3.8147e-06 168 0 314 0 314C0 314 -3.8147e-06 460 18.7 529.9C29 568.5 59.4 598.9 97.9 609.2C167.8 628 448 628 448 628C448 628 728.2 628 798.1 609.2C836.7 598.9 867 568.5 877.3 529.9C896 460 896 314 896 314C896 314 896 168 877.3 98.1ZM359 448V180L591 313L359 448Z" />
      </svg>
    ),
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <Head>
        <title>Abuamerican</title>
        <meta name="title" content="Abuamerican" />
        <meta
          name="description"
          content="I’ve coached hundreds of men and helped them to improve their relationships. If you are looking to learn , I provide a number of courses &amp; products on the subject."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abuamerican.com/" />
        <meta property="og:title" content="Abuamerican" />
        <meta
          property="og:description"
          content="I’ve coached hundreds of men and helped them to improve their relationships. If you are looking to learn , I provide a number of courses &amp; products on the subject."
        />
        <meta property="og:image" content="https://abuamerican.com/wives.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://abuamerican.com/" />
        <meta property="twitter:title" content="Abuamerican" />
        <meta
          property="twitter:description"
          content="I’ve coached hundreds of men and helped them to improve their relationships. If you are looking to learn , I provide a number of courses &amp; products on the subject."
        />
        <meta
          property="twitter:image"
          content="https://abuamerican.com/wives.jpg"
        />
      </Head>

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

      <main>
        {/* Products section */}
        <Products
          title="Learn how to improve your relationships"
          description="With the right techniques, it’s possible to have multiple loving &amp;
        submissive women."
        />

        {/* Featured section */}
        <Community
          title="Men's Community"
          description="Do you feel like your interests are at odds with your contemporary
              friends? I’ve built a community for muslim men to learn from each
              other and become the best version of themselves."
          cta="Join Now"
          ctaLink="https://gumroad.com/a/320271475/XkBvB"
        />

        {/* Consultation section */}
        <Consultation
          title="Feel like you need personalised advice?"
          description="Feel free to schedule a paid private one-on-one with me."
          cta="Get One-on-One"
          ctaLink="https://calendly.com/abuamerican"
        />
      </main>

      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            {socialLinks.map((item) => (
              <Link href={item.href}>
                <a
                  key={item.name}
                  className="text-gray-400 hover:text-gray-500"
                >
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
    </div>
  );
}

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

const Products = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <section
      id="products"
      aria-labelledby="collection-heading"
      className="max-w-xl mx-auto pt-24 px-4 sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h2
        id="collection-heading"
        className="text-2xl font-extrabold tracking-tight text-gray-900"
      >
        {title}
      </h2>
      <p className="mt-4 text-base text-gray-500">{description}</p>

      <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
        {products.map((product) => (
          <Link href={product.href}>
            <a key={product.name} className="group block">
              <div
                aria-hidden="true"
                className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
              >
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  width={600}
                  height={400}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                {product.name}
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {product.description}
              </p>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};

const Community = ({
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
    <section
      aria-labelledby="comfort-heading"
      className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8"
    >
      <div className="relative rounded-lg overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/mens-community.jpg"
            alt="Men's community"
            className="w-full h-full object-center object-cover"
            layout="fill"
          />
        </div>
        <div className="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
          <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
            <h2
              id="comfort-heading"
              className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
            >
              {title}
            </h2>
            <p className="mt-3 text-xl text-white">{description}</p>
            <Link href={ctaLink}>
              <a className="mt-8 inline-block bg-blue-500 border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-50 transition-colors hover:opacity-90">
                {cta}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const Consultation = ({
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
    <section
      aria-labelledby="comfort-heading"
      className="max-w-7xl mx-auto py-6 px-4 sm:py-8 sm:px-6 lg:px-8"
    >
      <div className="relative rounded-lg overflow-hidden">
        <div className="relative py-6 px-6 sm:py-8 sm:px-12 lg:px-16">
          <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
            <h2
              id="comfort-heading"
              className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl"
            >
              {title}
            </h2>
            <p className="mt-3 text-xl text-black">{description}</p>
            <Link href={ctaLink}>
              <a className="mt-8 inline-block bg-blue-500 border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-50 transition-colors hover:opacity-90">
                {cta}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
