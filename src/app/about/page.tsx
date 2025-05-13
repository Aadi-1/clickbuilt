"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollButton from "@/components/scrollnext";

export default function AboutPage() {
  return (
    <main className="font-sans text-gray-800 overflow-x-hidden">
      <ScrollButton />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-500 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">
            Our Journey
          </h2>
          <p className=" mb-6">
            Over the past four years, we honed our skills building responsive
            websites, dynamic applications, and robust marketing funnels—for
            startups, independent professionals, and local businesses.
          </p>
          <p className="mb-6 ">
            In 2025, we formed Click
            <span className="text-blue-700 font-semibold ">Built</span>, a
            digital consulting agency dedicated to making enterprise‑grade
            digital marketing affordable for businesses of all sizes.
          </p>
          <p className="">
            From custom site builds to SEO strategy and targeted ad campaigns,
            every project is a partnership: your goals inform our strategy, and
            our expertise brings your brand to life online.
          </p>
          <p className="text-right mt-4 italic ">
            – Aadi, Founder of ClickBuilt
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-blue-800 mb-8">
            Our Team
          </h2>
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-64 h-64 mb-6 rounded-full overflow-hidden mx-auto border border-orange-600 shadow-lg">
              <Image
                src="/AboutMepic.png"
                alt="Aadi, Founder"
                fill
                quality={100}
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Aadi</h3>
            <h4 className="text-lg text-gray-800 mb-4 font-semibold italic">
              Founder of ClickBuilt
            </h4>
            <p className=" max-w-xl">
              Specializing in web development, SEO, and Google Ads with four
              years of industry experience.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-blue-800 to-blue-500 text-white text-center"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Collaborate?</h2>
          <p className="text-lg mb-6">
            Let’s put our four years of expertise to work for you.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-orange-600 hover:bg-white hover:text-black text-white font-semibold rounded-full px-8 py-3 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
