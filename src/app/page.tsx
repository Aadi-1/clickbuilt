"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import ScrollButton from "@/components/scrollnext";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const caseStudies = [
    {
      slug: "bark-n-roll-petcare",
      img: "bnrss.png",
      title: "Bark n' Roll Petcare",
      desc: "Helped a family-owned Dog Walking business improve their online presence and traffic through a Responsive Website, Efficient SEO, and Google Advertising",
      metrics: [
        { value: "100%", label: "More Traffic" },
        { value: "77%", label: "More Bookings" },
      ],
      testimonial: `"ClickBuild transformed our online presence. We now get consistent orders through our website every day!"`,
    },
    // …add more case studies here…
  ];

  // smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", {
      method: "POST",
      body: form,
    });
    setLoading(false);

    if (res.ok) {
      setShowSuccess(true);
      formRef.current?.reset();
    } else {
      setShowError(true);
    }
  };

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => setShowSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  // auto-hide error toast
  useEffect(() => {
    if (showError) {
      const timer = setTimeout(() => setShowError(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showError]);

  return (
    <div className="font-sans text-gray-800 overflow-x-hidden">
      <main className="w-full">
        {/* Scroll-to‑next FAB */}
        <ScrollButton />

        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-800 to-blue-500 text-white pt-36 pb-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              <span className="underline underline-offset-10 decoration-orange-600">
                Stop Losing Customers
              </span>
              <br />
              to Competitors Who Market Better.
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              We help you take control of your online market with
              high‑converting websites and growth‑focused campaigns.
            </p>
            <a
              href="#contact"
              className="inline-block bg-orange-600 hover:bg-white hover:text-black text-white font-semibold rounded-full px-8 py-3 transition-colors"
            >
              Take Back Your Market
            </a>
          </div>
        </section>

        {/* Case Studies Carousel */}
        <Carousel />

        {/* Results Section */}
        <section
          id="testimonials"
          className="bg-gradient-to-br from-blue-800 to-sky-300 py-20 flex justify-center"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-3">
                Real Results from Real Businesses
              </h2>
              <p className="text-gray-100 text-lg">
                See how we've helped businesses just like yours
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {caseStudies.map((cs) => (
                <Link
                  key={cs.slug}
                  href={`/testimonials/#${cs.slug}`}
                  className="block bg-white rounded-lg overflow-hidden shadow-lg text-center w-full sm:w-1/2 md:w-1/3 hover:shadow-xl transform hover:-translate-y-2 transition-transform"
                >
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <Image
                      src={`/${cs.img}`}
                      alt={cs.title}
                      width={400}
                      height={320}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{cs.title}</h3>
                    <p className="text-gray-600 mb-4">{cs.desc}</p>
                    <div className="flex space-x-4 mb-4">
                      {cs.metrics.map((m) => (
                        <div key={m.label} className="flex-1 text-center">
                          <div className="text-2xl font-bold text-blue-800">
                            {m.value}
                          </div>
                          <div className="text-gray-500">{m.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="italic text-gray-700 border-t pt-4">
                      {cs.testimonial}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-300 bg-sky-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-blue-800 mb-3 underline underline-offset-8 decoration-orange-600">
                Why Businesses Choose Us
              </h2>
              <p className="text-blue-800 font-semibold text-lg">
                You don’t need a big agency. You need a partner who actually
                cares about your success.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center p-6 w-80 bg-white rounded-lg shadow-lg">
                <Image
                  src="/cbcheck.svg"
                  alt="Custom Solutions"
                  width={60}
                  height={48}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
                <p className="text-gray-600">
                  Every strategy is crafted to match your industry, goals, and
                  growth stage.
                </p>
              </div>
              <div className="text-center p-6 w-80 bg-white rounded-lg shadow-lg">
                <Image
                  src="/cbresults.svg"
                  alt="Results Driven"
                  width={60}
                  height={48}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Results Driven</h3>
                <p className="text-gray-600">
                  We focus on delivering the best products with in‑detail
                  reporting so you can see how your $$$ is invested.
                </p>
              </div>
              <div className="text-center p-6 w-80 bg-white rounded-lg shadow-lg">
                <Image
                  src="/cbhand.svg"
                  alt="Ongoing Support"
                  width={60}
                  height={48}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
                <p className="text-gray-600">
                  We don’t disappear after launch. From analytics to
                  optimization, we support your growth every step of the way.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <a
                href="/services"
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold rounded-full px-4 py-2 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-blue-800 mb-3">
              How We Work With You
            </h2>
            <p className="text-gray-700 mb-8">
              A simple, effective process focused on your success
            </p>
            <div className="relative max-w-4xl mx-auto">
              <div className="relative flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-4 mt-8">
                {[
                  {
                    number: "1",
                    title: "Discovery",
                    desc: "We learn about your business goals and challenges",
                  },
                  {
                    number: "2",
                    title: "Strategy",
                    desc: "Develop a custom digital marketing plan",
                  },
                  {
                    number: "3",
                    title: "Implementation",
                    desc: "Build your website, SEO, and digital assets",
                  },
                  {
                    number: "4",
                    title: "Growth",
                    desc: "Ongoing optimization and support",
                  },
                ].map((step) => (
                  <div
                    key={step.number}
                    className="flex-1 text-center relative"
                  >
                    <div className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section
          id="contact"
          className="bg-gradient-to-br from-blue-800 to-blue-500 text-white py-20"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Grow Your Business?
            </h2>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="max-w-lg mx-auto space-y-4 text-gray-800"
              encType="multipart/form-data"
            >
              <div className="flex space-x-4">
                <input
                  name="firstName"
                  type="text"
                  placeholder="Name"
                  required
                  className="flex-1 p-3 rounded-full bg-gray-100"
                />
              </div>
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-full bg-gray-100"
              />
              <input
                name="businessName"
                type="text"
                placeholder="Business Name"
                className="w-full p-3 rounded-full bg-gray-100"
              />
              <select
                name="businessType"
                required
                className="w-full p-3 rounded-full bg-gray-100"
              >
                <option value="">Business Type</option>
                <option>Personal Brands</option>
                <option>Restaurants/Cafe</option>
                <option>Professional Services (Legal, Business)</option>
                <option>E‑commerce</option>
                <option>Service Based Businesses</option>
              </select>
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 rounded-full bg-gray-100"
              />
              <div className="flex space-x-4">
                <select
                  name="budget"
                  required
                  className="flex-1 p-3 rounded-full bg-gray-100"
                >
                  <option value="">Budget</option>
                  <option>Under 1k</option>
                  <option>1‑2k</option>
                  <option>3‑4k</option>
                  <option>5k+</option>
                </select>
                <select
                  name="revenue"
                  required
                  className="flex-1 p-3 rounded-full bg-gray-100"
                >
                  <option value="">Monthly Revenue</option>
                  <option>Under 1k</option>
                  <option>1‑5k</option>
                  <option>5‑10k</option>
                  <option>10k+</option>
                </select>
              </div>
              <textarea
                name="message"
                rows={3}
                placeholder="Additional details (optional)"
                className="w-full p-3 rounded-lg bg-gray-100"
              />
              <button
                type="submit"
                disabled={loading}
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full px-8 py-3 transition-colors"
              >
                {loading ? "Sending..." : "Start Your Digital Transformation"}
              </button>
            </form>
          </div>
        </section>

        {/* Success Toast */}
        {showSuccess && (
          <div className="fixed bottom-6 right-6 z-50 transition-opacity duration-500">
            <div className="bg-white border-l-4 border-blue-600 rounded-md shadow-lg p-4 max-w-xs opacity-100">
              <h3 className="text-lg font-semibold mb-1 text-blue-600">
                Success!
              </h3>
              <p className="text-gray-700 mb-3">Your message has been sent.</p>
              <button
                onClick={() => setShowSuccess(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-full text-sm"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Error Toast */}
        {showError && (
          <div className="fixed bottom-6 right-6 z-50 transition-opacity duration-500">
            <div className="bg-white border-l-4 border-red-600 rounded-md shadow-lg p-4 max-w-xs opacity-100">
              <h3 className="text-lg font-semibold mb-1 text-red-600">Oops!</h3>
              <p className="text-gray-700 mb-3">
                Something went wrong. Please try again later.
              </p>
              <button
                onClick={() => setShowError(false)}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-full text-sm"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
