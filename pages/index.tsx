import Head from "next/head";
import {
  Community,
  Consultation,
  NewsletterSection,
  Products,
} from "../components/Home";
import { Footer, Header } from "../components/Layout";
import { links } from "../utils/contants";
import { useState } from "react";

export default function Home() {
  const [banner, setBanner] = useState(true);

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
          ctaLink={links.menCommunity}
        />

        {/* Consultation section */}
        <Consultation
          title="Feel like you need personalised advice?"
          description="Feel free to schedule a paid private one-on-one with me."
          cta1="Book 30 min"
          ctaLink1={links.thirtyMinuteConsultation}
          cta2="Book 60 min"
          ctaLink2={links.oneHourConsultation}
        />

        <NewsletterSection />
      </main>

      <Footer />

      {/* Bali Real Estate Brochure */}
      {/* {banner && (
        <div className="fixed bottom-0 right-0 p-4 min-w-16 sm:w-[520px]">
          <div className="shadow rounded-md">
            <div className="bg-gray-100 p-4 rounded-t-md shadow-sm flex justify-between">
              <p className="text-base font-semibold">
                Your guide to finding beautiful properties in Indonesia.
              </p>
              <button
                onClick={() => setBanner(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4 bg-gray-50 rounded-b-md">
              <p>
                Whether you're looking for a peaceful mountain retreat or a
                stunning beachfront plot, we provide the support and expertise
                you need to make your dream a reality.
              </p>
              <a
                className="bg-blue-500 text-white px-4 py-2 rounded mt-2 block text-center"
                href="/bali_and_beyond.pdf"
                download
              >
                Get the "Bali and Beyond" Brochure
              </a>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}
