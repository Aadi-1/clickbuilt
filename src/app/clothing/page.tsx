"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollButton from "@/components/scrollnext";

export default function ClothingPage() {
  return (
    <main className="font-sans text-white overflow-x-hidden bg-gray-900">
      <ScrollButton />

      {/* Hero with purple gradient + background image */}
      <section className="relative pt-36 pb-20 text-center">
        <div
          className="absolute inset-0 bg-[url('/cl.jpg')] bg-cover bg-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-800 to-black opacity-75" />
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            E‑Commerce Template
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Showcase products with style—dark theme meets vibrant purple
            accents.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full px-6 py-3 mt-8 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Products Grid with background image */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        {/* background behind products */}
        <div
          className="absolute inset-0 bg-[url('/products-bg.jpg')] bg-cover bg-center opacity-20"
          aria-hidden="true"
        />
        <div className="relative container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-purple-400 text-center mb-12">
            Featured Products
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Product 1 */}
            <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-700 flex items-center justify-center">
                <Image
                  src="/hoodie1.webp"
                  alt="Product 1"
                  width={300}
                  height={200}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Leather Jacket</h3>
                <div className="flex items-baseline space-x-2">
                  <span className="line-through text-gray-500">$150</span>
                  <span className="text-purple-400 font-bold">$120</span>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-700 flex items-center justify-center">
                <Image
                  src="/scarf1.png"
                  alt="Product 2"
                  width={300}
                  height={200}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Silk Scarf</h3>
                <div className="flex items-baseline space-x-2">
                  <span className="line-through text-gray-500">$45</span>
                  <span className="text-purple-400 font-bold">$35</span>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-700 flex items-center justify-center">
                <Image
                  src="/denim.png"
                  alt="Product 3"
                  width={300}
                  height={200}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Denim Jeans</h3>
                <div className="text-white font-bold">$80</div>
              </div>
            </div>

            {/* Product 4 */}
            <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-700 flex items-center justify-center">
                <Image
                  src="/sneaker2.webp"
                  alt="Product 4"
                  width={300}
                  height={200}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sneaker</h3>
                <div className="flex items-baseline space-x-2">
                  <span className="line-through text-gray-500">$120</span>
                  <span className="text-purple-400 font-bold">$99</span>
                </div>
              </div>
            </div>

            {/* Product 5 */}
            <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-700 flex items-center justify-center">
                <Image
                  src="/sweater.png"
                  alt="Product 5"
                  width={300}
                  height={200}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Wool Sweater</h3>
                <div className="text-white font-bold">$70</div>
              </div>
            </div>

            {/* Product 6 */}
            <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-700 flex items-center justify-center">
                <Image
                  src="/boots.png"
                  alt="Product 6"
                  width={300}
                  height={200}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Leather Boots</h3>
                <div className="flex items-baseline space-x-2">
                  <span className="line-through text-gray-500">$180</span>
                  <span className="text-purple-400 font-bold">$150</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Final CTA */}
      <section className="py-12 bg-gradient-to-br from-black via-purple-800 to-black text-white text-center">
        <div className="container mx-auto px-4">
          <p className="mb-4 text-lg">
            Ready to launch your online store? Let’s make it happen.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full px-8 py-3 transition-colors"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </main>
  );
}
