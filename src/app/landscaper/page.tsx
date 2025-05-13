"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollButton from "@/components/scrollnext";

export default function LandscapersPage() {
  return (
    <main className="font-sans text-gray-800 overflow-x-hidden">
      <ScrollButton />

      {/* Hero with background */}
      <section className="relative pt-36 pb-20 text-white text-center">
        <div
          className="absolute inset-0 bg-[url('/ls.jpg')] bg-cover bg-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-800 to-green-700 opacity-75" />
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Landscaper Template
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Showcase your landscaping services with a gallery, easy contact, and
            streamlined calls-to-action.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-black hover:bg-white hover:text-black text-white font-semibold rounded-full px-8 py-3 mt-8 transition-colors"
          >
            Book Your Free Strategy Call
          </Link>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-green-700 text-center mb-8">
            Recent Projects
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/ls1.jpg"
                alt="Recent project 1"
                width={400}
                height={300}
                className="object-cover w-full h-64"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/ls2.jpg"
                alt="Recent project 2"
                width={400}
                height={300}
                className="object-cover w-full h-64"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/ls3.jpg"
                alt="Recent project 3"
                width={400}
                height={300}
                className="object-cover w-full h-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Small Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-md">
          <h2 className="text-3xl font-semibold text-green-800 text-center mb-6">
            Get a Free Estimate
          </h2>
          <form action="#" className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={3}
                placeholder="Briefly describe your project"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold rounded-full px-6 py-3 transition-colors"
            >
              Send Request
            </button>
          </form>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-gradient-to-br from-green-800 to-green-700 text-white text-center">
        <div className="container mx-auto px-4">
          <p className="mb-4 text-lg">
            Not sure what you need? Let’s design it together.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-black hover:bg-white hover:text-black text-white font-semibold rounded-full px-8 py-3 transition-colors"
          >
            Book Your Free Website Strategy Call
          </Link>
        </div>
      </section>
    </main>
  );
}
