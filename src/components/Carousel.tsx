"use client";

import { useState, useEffect } from "react";

type Service = {
  icon: string;
  title: string;
  desc: string;
  items: string[];
};

export default function ServicesCarousel() {
  const services: Service[] = [
    {
      icon: "fas fa-laptop-code",
      title: "Web Development",
      desc: "Professional, responsive websites designed to convert visitors into customers.",
      items: [
        "Custom website design & development",
        "High-converting landing pages",
        "Mobile-first, responsive layouts",
      ],
    },
    {
      icon: "fas fa-search",
      title: "SEO Optimization",
      desc: "Get discovered, rank higher, and turn searches into sales.",
      items: [
        "Search engine optimization",
        "Keyword research and content planning",
        "Local SEO setup (ex: Google Business)",
        "Link-building and authority growth",
      ],
    },
    {
      icon: "fas fa-ad",
      title: "Digital Advertising",
      desc: "Put your brand in front of the right people and turn clicks into customers.",
      items: [
        "Google, Facebook, Instagram Ads setup and management",
        "Conversion tracking and analytics",
        "A/B testing for ads and landing pages",
      ],
    },
  ];

  const [current, setCurrent] = useState(0);
  const prev = () =>
    setCurrent((c) => (c + services.length - 1) % services.length);
  const next = () => setCurrent((c) => (c + 1) % services.length);

  // autoplay every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-sky-50 py-20">
      <div className="container mx-auto px-4 text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-3">
          Our Complete Digital Marketing Solutions
        </h2>
        <p className="text-gray-700">
          Everything your small business needs to succeed online
        </p>
      </div>

      <div className="relative overflow-hidden">
        {/* Left arrow */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-100 z-10"
        >
          <i className="fas fa-chevron-left text-blue-800"></i>
        </button>

        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {services.map((svc) => (
            <div key={svc.title} className="min-w-full px-6">
              <div className="bg-white p-12 rounded-xl shadow-lg mx-auto max-w-3xl">
                {/* Reserved graphic area */}
                <div className="h-64 mb-8 bg-gray-100 rounded-md flex items-center justify-center">
                  {/* drop your custom graphic here */}
                  <i className={`${svc.icon} text-6xl text-blue-200`}></i>
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                  {svc.title}
                </h3>
                <p className="text-gray-600 mb-6">{svc.desc}</p>
                <ul className="space-y-3 text-left">
                  {svc.items.map((item) => (
                    <li key={item} className="flex items-start text-gray-700">
                      <span className="text-orange-600 mr-2">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={next}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-100 z-10"
        >
          <i className="fas fa-chevron-right text-blue-800"></i>
        </button>
      </div>

      {/* Bottom nav */}
      <div className="flex justify-center space-x-4 mt-8">
        {services.map((svc, idx) => (
          <button
            key={svc.title}
            onClick={() => setCurrent(idx)}
            className={`px-5 py-2 rounded-full font-medium transition-colors ${
              idx === current
                ? "bg-blue-800 text-white"
                : "bg-white text-blue-800 hover:bg-blue-100"
            }`}
          >
            <span className="mr-2">{idx + 1}.</span>
            {svc.title}
          </button>
        ))}
      </div>
    </section>
  );
}
