"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollButton from "@/components/scrollnext";

export default function Examples() {
  return (
    <main className="font-sans text-gray-800 overflow-x-hidden">
      <ScrollButton />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-500 text-white pt-36 pb-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Example Websites You Could Have
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Website solutions tailored to your industry and goals.
          </p>
          <Link
            href="/"
            className="inline-block bg-orange-600 hover:bg-white hover:text-black text-white font-semibold rounded-full px-8 py-3 mt-8 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </section>

      {/* Examples Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-12">
            Website Solutions for Every Industry
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Local Service Providers */}
            <Link href="/landscaper">
              <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden flex flex-col">
                <div className="h-40 bg-gray-100 flex items-center justify-center">
                  <Image
                    src="/lsss1.png"
                    alt="Local Service Providers"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover border-0"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-semibold text-blue-800 mb-1">
                    Local Service Providers
                  </h3>
                  <div className="h-1 w-16 mb-4 bg-orange-400 rounded-lg" />
                  <p className="text-gray-700 italic mb-4">
                    Dog Walkers, Cleaners, Landscapers
                  </p>
                  <p className="text-gray-600 flex-1">
                    Simple, clean websites designed to capture leads and book
                    services online.
                  </p>
                </div>
              </div>
            </Link>

            {/* E‑Commerce / Online Stores */}
            <Link href="/clothing">
              <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden flex flex-col">
                <div className="h-40 bg-gray-100 flex items-center justify-center">
                  <Image
                    src="/examples/ecommerce.png"
                    alt="E‑Commerce / Online Stores"
                    width={240}
                    height={160}
                    className="object-contain"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-semibold text-blue-800 mb-1">
                    E‑Commerce / Online Stores
                  </h3>
                  <div className="h-1 w-16 mb-4 bg-orange-400 rounded-lg" />
                  <p className="text-gray-700 italic mb-4">
                    Clothing Brands, Wellness Products, Specialty Foods
                  </p>
                  <p className="text-gray-600 flex-1">
                    Fast, secure online stores built to sell your products 24/7.
                  </p>
                </div>
              </div>
            </Link>

            {/* Professional Services */}
            <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden flex flex-col">
              <div className="h-40 bg-gray-100 flex items-center justify-center">
                <Image
                  src="/examples/professional-services.png"
                  alt="Professional Services"
                  width={240}
                  height={160}
                  className="object-contain"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-semibold text-blue-800 mb-1">
                  Professional Services
                </h3>
                <div className="h-1 w-16 mb-4 bg-orange-400 rounded-lg" />
                <p className="text-gray-700 italic mb-4">
                  Consultants, Agencies, Lawyers
                </p>
                <p className="text-gray-600 flex-1">
                  Credibility‑building sites that position you as the expert
                  clients trust.
                </p>
              </div>
            </div>

            {/* Restaurants & Cafés */}
            <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden flex flex-col">
              <div className="h-40 bg-gray-100 flex items-center justify-center">
                <Image
                  src="/examples/restaurants.png"
                  alt="Restaurants & Cafés"
                  width={240}
                  height={160}
                  className="object-contain"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-semibold text-blue-800 mb-1">
                  Restaurants & Cafés
                </h3>
                <div className="h-1 w-16 mb-4 bg-orange-400 rounded-lg" />
                <p className="text-gray-700 italic mb-4">
                  Local Dining, Food Trucks, Coffee Shops
                </p>
                <p className="text-gray-600 flex-1">
                  Menu‑focused sites that help customers find you, view your
                  offerings, and visit you faster.
                </p>
              </div>
            </div>

            {/* Creative & Personal Brands */}
            <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden flex flex-col">
              <div className="h-40 bg-gray-100 flex items-center justify-center">
                <Image
                  src="/examples/creative-brands.png"
                  alt="Creative & Personal Brands"
                  width={240}
                  height={160}
                  className="object-contain"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-semibold text-blue-800 mb-1">
                  Creative & Personal Brands
                </h3>
                <div className="h-1 w-16 mb-4 bg-orange-400 rounded-lg" />
                <p className="text-gray-700 italic mb-4">
                  Artists, Coaches, Influencers
                </p>
                <p className="text-gray-600 flex-1">
                  Custom portfolio sites that help you stand out and get
                  noticed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-800 to-blue-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-4">
            Not Sure What You Need? Let’s Design It Together.
          </h3>
          <Link
            href="/#contact"
            className="inline-block bg-orange-600 hover:bg-white hover:text-black text-white font-semibold rounded-full px-8 py-3 transition-colors"
          >
            Book Your Free Website Strategy Call
          </Link>
        </div>
      </section>
    </main>
  );
}
