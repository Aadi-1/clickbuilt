"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ServicesCarousel() {
  const slideCount = 4;
  const [current, setCurrent] = useState(0);
  const startX = useRef(0);
  const endX = useRef(0);

  const prev = () => setCurrent((c) => (c + slideCount - 1) % slideCount);
  const next = () => setCurrent((c) => (c + 1) % slideCount);

  // autoplay every 8 seconds
  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  // touch handlers for swipe
  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    endX.current = e.touches[0].clientX;
  };
  const onTouchEnd = () => {
    const diff = startX.current - endX.current;
    if (diff > 50) next();
    else if (diff < -50) prev();
  };

  return (
    <section className="bg-sky-50 py-20">
      {/* Header */}
      <div className="container mx-auto px-4 text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-3">Our Services</h2>
      </div>

      {/* Carousel */}
      <div
        className="relative overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {/* Slide 1: Web Development */}
          <div className="min-w-full px-6">
            <div className="relative mx-auto max-w-3xl rounded-xl overflow-hidden shadow-lg">
              <div
                className="absolute inset-0 bg-[url('/wedevhome1.svg')] bg-cover bg-center"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 bg-white bg-opacity-30"
                aria-hidden="true"
              />
              <div className="relative flex flex-col items-center text-center p-12 bg-white bg-opacity-80 max-w-2xl mx-auto">
                <h3 className="text-3xl font-semibold mb-2 text-blue-800">
                  Web Development
                </h3>
                <p className="text-gray-700 mb-6 text-xl">
                  Responsive websites designed to convert visitors into
                  customers.
                </p>
                <ul className="space-y-3 text-left w-full">
                  <li className="flex items-start text-gray-700">
                    <span className="text-orange-600 mr-2">→</span>
                    <span className="flex-1">
                      <span className="font-semibold text-blue-700">
                        Custom‑designed websites
                      </span>{" "}
                      tailored to your brand and business goals
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-orange-600 mr-2">→</span>
                    <span className="flex-1">
                      Landing pages built to maximize{" "}
                      <span className="font-semibold text-blue-700">
                        lead generation
                      </span>{" "}
                      and conversions
                    </span>{" "}
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-orange-600 mr-2">→</span>
                    <span className="flex-1">
                      Mobile-first layouts that adapt seamlessly across all
                      devices
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Slide 2: SEO Optimization */}
          <div className="min-w-full px-6">
            <div className="relative mx-auto max-w-3xl rounded-xl overflow-hidden shadow-lg">
              <div
                className="absolute inset-0 bg-[url('/seo-graphic.png')] bg-cover bg-center"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 bg-white bg-opacity-30"
                aria-hidden="true"
              />
              <div className="relative flex flex-col items-center text-center p-12 bg-white bg-opacity-80 max-w-2xl mx-auto">
                <h3 className="text-3xl font-semibold mb-2 text-blue-800">
                  Search Engine Optimization (SEO)
                </h3>
                <p className="text-gray-700 mb-6 text-xl">
                  Get discovered, rank higher, and turn searches into sales.
                </p>
                <ul className="space-y-3 text-left w-full">
                  <li className="flex items-start text-gray-700">
                    <span className="text-orange-600 mr-2">→</span>
                    SEO strategies designed to help your business rank higher on
                    Google
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-orange-600 mr-2">→</span>
                    <span className="flex-1">
                      <span className="font-semibold text-blue-700">
                        Targeted keyword research
                      </span>{" "}
                      & content planning so customers can find you
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-orange-600 mr-2">→</span>
                    Local SEO setup (e.g. Google Business Profile) to dominate
                    your area
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Slide 3: Digital Advertising */}
          <div className="min-w-full px-6">
            <div className="relative mx-auto max-w-3xl rounded-xl overflow-hidden shadow-lg">
              <div
                className="absolute inset-0 bg-[url('/ads-graphic.png')] bg-cover bg-center"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 bg-white bg-opacity-30"
                aria-hidden="true"
              />
              <div className="relative flex flex-col items-center text-center p-12 bg-white bg-opacity-80 max-w-2xl mx-auto">
                <h3 className="text-3xl font-semibold mb-2 text-blue-800">
                  Digital Advertising
                </h3>
                <p className="text-gray-700 mb-6 text-xl">
                  Put your brand in front of the right people.
                </p>
                <ul className="space-y-3 text-left w-full">
                  <li className="flex items-start text-gray-700">
                    <span className="text-orange-600 mr-2">→</span>
                    <span className="flex-1">
                      Ad setup & management on{" "}
                      <span className="font-semibold text-blue-700">
                        Google
                      </span>
                      ,{" "}
                      <span className="font-semibold text-blue-700">
                        Facebook
                      </span>
                      , and{" "}
                      <span className="font-semibold text-blue-700">
                        Instagram
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-orange-600 mr-2">→</span>
                    Conversion tracking with performance analytics to save every
                    $$$
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-orange-600 mr-2">→</span>
                    <span className="flex-1">
                      <span className="font-semibold text-blue-700">
                        A/B testing
                      </span>{" "}
                      to lower ad costs and increase conversions
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Slide 4: Marketing Strategies */}
          <div className="min-w-full px-6">
            <div className="relative mx-auto max-w-3xl rounded-xl overflow-hidden shadow-lg">
              <div
                className="absolute inset-0 bg-[url('/marketing-graphic.png')] bg-cover bg-center"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 bg-white bg-opacity-30"
                aria-hidden="true"
              />
              <div className="relative flex flex-col items-center text-center p-12 bg-white bg-opacity-80 max-w-2xl mx-auto">
                <h3 className="text-3xl font-semibold mb-2 text-blue-800">
                  Marketing Strategies
                </h3>
                <p className="text-gray-700 mb-6 text-xl">
                  Proven tactics to bring in more customers and boost growth.
                </p>
                <ul className="space-y-3 text-left w-full">
                  <li className="flex items-start text-gray-700">
                    <span className="text-orange-600 mr-2">→</span>
                    Package deals & tiered offerings to increase average order
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-orange-600 mr-2">→</span>
                    Referral programs and affiliate partnerships
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-orange-600 mr-2">→</span>
                    Local tactics like billboards and signage
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop nav */}
      <div className="hidden sm:flex justify-center space-x-4 mt-8">
        {[
          "Web Development",
          "SEO Optimization",
          "Digital Advertising",
          "Marketing Strategies",
        ].map((label, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`px-5 py-2 rounded-full font-medium transition-colors ${
              current === idx
                ? "bg-blue-800 text-white"
                : "bg-white text-blue-800 hover:bg-blue-100"
            }`}
          >
            {idx + 1}. {label}
          </button>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link
          href="/#contact"
          className="inline-block bg-orange-600 hover:bg-white hover:text-black
                     text-white font-semibold rounded-full px-8 py-3 transition-colors"
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile dots */}
      <div className="flex sm:hidden justify-center space-x-2 mt-6">
        {Array.from({ length: slideCount }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2 w-2 rounded-full transition-colors ${
              current === idx ? "bg-blue-800" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
