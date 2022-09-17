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
import { Footer, Header } from "../components/Layout";
import { products } from "../utils/contants";

export default function Example() {
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

      <Header />

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

      <Footer />
    </div>
  );
}

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
