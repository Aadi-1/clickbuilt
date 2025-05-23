import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

export default function testimonial() {
  return (
    <main>
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
      <section className="bg-gradient-to-br from-blue-800 to-blue-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Customers</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            We partner with growing businesses to build systems that convert,
            retain, and scale.
          </p>
          <Link
            href="/"
            className="inline-block bg-orange-600 hover:bg-white hover:text-black text-white font-semibold rounded-full px-8 py-3 mt-8 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </section>

      {/* CUSTOMER CARD – Bark n’ Roll */}
      <section className="bg-sky-100 py-12" id="barknroll">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col gap-6">
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center underline underline-offset-8 decoration-orange-400">
              Bark n’ Roll Petcare
            </h2>

            {/* Center Section */}
            <div className="space-y-8 text-gray-800 text-md leading-relaxed">
              {/* Overview */}
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  Overview:
                </h3>
                <p className="text-lg">
                  Bark n’ Roll Petcare came to us looking for a way to establish
                  digital presence, automate bookings and free up the owner’s
                  time.
                </p>
              </div>

              {/* Challenge Sections Reformatted into Proper Blocks */}
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-4">
                  How We Helped:
                </h3>

                <div className="mb-6">
                  <strong>Responsive Website w/ Booking System:</strong>
                  <ul className="mt-2 list-inside space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">→</span>
                      Developed a fast website that highlights Bark n’ Roll’s
                      services, team, and personality.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">→</span>
                      Created a “Book a Consultation” form that sends customer
                      information to the owner’s inbox instantly—no manual
                      follow-up required.
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <strong>Owner Empowerment:</strong>
                  <ul className="mt-2 list-inside space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">→</span>
                      Made a plan for the owner, setting himself up as the
                      business owner who handles the business (not every
                      appointment).
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">→</span>
                      Provided hands‑on support in recruiting—including
                      interview prep and candidate evaluation—to build a
                      reliable team.
                    </li>
                  </ul>
                </div>

                <div>
                  <strong>VIP Client Retention & Marketing Campaigns:</strong>
                  <ul className="mt-2 list-inside space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">→</span>
                      Identified Bark n’ Roll’s top‑spending clients and created
                      a VIP program with exclusive offers, priority scheduling,
                      and personalized outreach.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">→</span>
                      Implemented package deals and a referral system to keep
                      clients committed long‑term.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">→</span>
                      Executed targeted Google Ads campaigns to bring in new
                      clients efficiently while maximizing ROI.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom: Image + Testimonial */}
            <div className="flex flex-col md:flex-row gap-6 pt-8 border-t border-gray-300">
              {/* Website Image */}
              <div className="md:w-1/2">
                <Image
                  src="/bnrss.png"
                  alt="Bark n’ Roll Website"
                  width={400}
                  height={320}
                  className="rounded-lg w-full object-cover shadow-md"
                />
              </div>

              {/* Testimonial */}
              <div className="md:w-1/2 flex items-center">
                <div className="text-center md:text-left">
                  <p className="italic text-gray-700 text-lg mb-4">
                    "ClickBuilt completely changed the way I run my business.
                    From the website to client strategy, everything feels
                    professional now — and I finally have systems that work
                    without me."
                  </p>
                  <p className="text-blue-800 font-semibold">
                    — Jason from Bark n’ Roll Petcare
                  </p>
                </div>
              </div>
            </div>
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
