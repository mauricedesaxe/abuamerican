import Link from "next/link";
import { products } from "../utils/contants";
import Image from "next/image";
import { useState } from "react";
import { NewsletterForm } from "./Newsletter";
import { LinkBtn } from "./Buttons";

export const Products = ({
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
          <Link key={product.name} href={product.href}>
            <a className="group block">
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

export const Community = ({
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
            <LinkBtn link={ctaLink} cta={cta} />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Consultation = ({
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
            <LinkBtn link={ctaLink} cta={cta} />
          </div>
        </div>
      </div>
    </section>
  );
};

export const NewsletterSection = () => {
  return (
    <section
      aria-labelledby="comfort-heading"
      className="max-w-2xl mx-auto py-6 px-4 sm:py-8 sm:px-6 lg:px-8"
    >
      <div className="relative rounded-lg overflow-hidden">
        <div className="relative py-6 px-6 sm:py-8 sm:px-12 lg:px-16">
          <div className="relative max-w-3xl mx-auto flex flex-col">
            <NewsletterForm />
          </div>
        </div>
      </div>
    </section>
  );
};
