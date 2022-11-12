import Head from "next/head";
import {
  Community,
  Consultation,
  NewsletterSection,
  Products,
} from "../components/Home";
import { Footer, Header } from "../components/Layout";

export default function Home() {
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
          cta1="Book 30 min"
          ctaLink1="https://gumroad.com/a/320271475/gwsgp"
          cta2="Book 60 min"
          ctaLink2="https://gumroad.com/a/320271475/jhzzwa"
        />

        <NewsletterSection />
      </main>

      <Footer />
    </div>
  );
}
