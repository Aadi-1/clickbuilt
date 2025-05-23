"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollButton from "@/components/scrollnext";
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

export default function services() {
  return (
    <main className="font-sans text-gray-800 overflow-x-hidden">
      <Script
        id="gtm-head"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KNBDPQ8X');`,
        }}
      />
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-NF2LXM7Q"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      <ScrollButton />
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-500 text-white pt-36 pb-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Our Services: Build, Optimize & Advertise
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Deep dives into why a strong web presence, SEO, and Google Ads are
            must-haves for growing businesses.
          </p>
          <Link
            href="/"
            className="inline-block bg-orange-600 hover:bg-white hover:text-black text-white font-semibold rounded-full px-8 py-3 mt-8 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </section>

      {/* 1. Why Web Presence */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:flex md:items-center md:space-x-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-semibold text-blue-800 mb-2">
              Bad Website = Losing Potential Customers
            </h2>
            {/* Underline */}
            <div className="h-1 w-50 mb-4 bg-orange-400 rounded-lg "></div>
            <p className="text-gray-700 mb-2 text-xl">
              Your website is the first impression for your potential customers.{" "}
              <br />A professional, fast, and mobile-friendly website:
            </p>
            <ul className=" list-inside space-y-2 text-gray-700 text-lg">
              <li>
                <span className="text-blue-500 mr-2">→</span>Builds credibility
                & trust
              </li>
              <li>
                <span className="text-blue-500 mr-2">→</span>Works 24/7 as your
                online storefront
              </li>
              <li>
                <span className="text-blue-500 mr-2">→</span>Captures potential
                customers & data to fuel marketing
              </li>
              <li>
                <span className="text-blue-500 mr-2">→</span>Levels the playing
                field vs. big competitors
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/webdev2.png"
              alt="Web Presence Illustration"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* 2. Why & What SEO */}
      <section className="py-20 bg-sky-100">
        <div className="container mx-auto px-4 md:flex md:items-center md:flex-row-reverse md:space-x-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-semibold text-blue-800 mb-2">
              What Is SEO?
            </h2>
            {/* Underline */}
            <div className="h-1 w-25 mb-4 bg-orange-400 rounded-lg"></div>
            <p className="text-gray-700 mb-4 text-xl">
              SEO (Search Engine Optimization) is improving your website so it
              ranks higher in Google which brings in FREE traffic. <br />
              We can optimize by:
            </p>
            <ul className="list-inside space-y-2 text-gray-700 text-lg">
              <li>
                <span className="text-blue-500 mr-2">→</span>Keyword research to
                find what prospects search for
              </li>
              <li>
                <span className="text-blue-500 mr-2">→</span>On-page
                optimizations (content, meta tags, headings)
              </li>
              <li>
                <span className="text-blue-500 mr-2">→</span>Technical SEO (site
                speed, mobile-first, structured data)
              </li>
              <li>
                <span className="text-blue-500 mr-2">→</span>Link-building to
                grow your domain authority
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/seo.png"
              alt="SEO Illustration"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* 3. How Google Ads Helps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:flex md:items-center md:space-x-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-semibold text-blue-800 mb-2">
              Why You Need Advertising
            </h2>
            {/* Underline */}
            <div className="h-1 w-50 mb-4 bg-orange-400 rounded-lg"></div>
            <p className="text-gray-700 mb-4 text-xl">
              Google and Social Media Ads puts your brand in front of
              ready-to-buy customers at the exact moment they’re searching.
              <br /> You get:
            </p>
            <ul className="space-y-2 text-gray-700 text-lg">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">→</span>
                Priority visibility at the top of search results
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">→</span>
                Laser-focused targeting by keywords, location & device
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">→</span>
                Full control over budget & real-time bid adjustments
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">→</span>
                Measurable ROI with conversion & analytics tracking
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/advert.png"
              alt="Google Ads Illustration"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      <section className="py-20 bg-sky-100">
        <div className="container mx-auto px-4 md:flex md:items-center md:space-x-12">
          {/* Illustration Column (now first) */}
          <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
            <Image
              src="/market.svg"
              alt="Marketing Strategies Illustration"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Text Column */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-semibold text-blue-800 mb-2">
              Creative Marketing Strategies
            </h2>
            {/* Underline */}
            <div className="h-1 w-50 mb-4 bg-orange-400 rounded-lg"></div>
            <p className="text-gray-700 mb-4 text-xl">
              Beyond web & ads, we drive new customers through:
            </p>
            <ul className="space-y-2 text-gray-700 text-lg">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">→</span>
                Strategic package deals and referral programs
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">→</span>
                Partnerships & affiliate offers with complementary businesses
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">→</span>
                Unconventional outreach—billboards, signage, & guerrilla tactics
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-blue-800 to-blue-500 text-white text-center"
      >
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="mb-6">
            Book your free consultation and let’s craft your winning strategy.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-orange-600 hover:bg-white hover:text-black
                     text-white font-semibold rounded-full px-8 py-3 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
