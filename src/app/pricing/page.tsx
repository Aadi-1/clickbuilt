"use client";
import Link from "next/link";
import ScrollButton from "@/components/scrollnext";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";

export default function PricingPage() {
  return (
    <main className="font-sans text-gray-800 overflow-x-hidden">
      <ScrollButton />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-500 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Flexible Pricing to Fit Your Business Goals
          </h1>
          <p className="mt-10 text-2xl">
            All packages can be customized to fit your unique needs.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-sky-50">
        +{" "}
        <div className="container mx-auto px-4 grid gap-8 sm:grid-cols-1 md:grid-cols-3 items-start">
          {/* One-Time Build */}
          <div className="flex flex-col justify-between h-full bg-white rounded-xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">One-Time Build</h3>
            <p className="text-4xl font-bold text-blue-800 mb-4">$1000</p>

            <ul className="space-y-2 text-gray-700 mb-6 text-left">
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">→</span>
                Custom Website Design & Development
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">→</span>
                Fully Responsive & SEO-Ready
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">→</span>
                Initial Onboarding & Training
              </li>
            </ul>

            {/* Missing Out On (styled like Marketing Extras) */}
            <h4 className="text-lg font-semibold mb-2 underline underline-offset-4">
              Missing Out On
            </h4>
            <ul className="space-y-2 text-gray-700 text-left">
              <li className="flex items-start">
                <XMarkIcon className="w-7 h-7 text-red-600" />
                Ongoing SEO & content updates
              </li>
              <li className="flex items-start">
                <XMarkIcon className="w-7 h-7 text-red-600" />
                Performance tracking or analytics
              </li>
              <li className="flex items-start">
                <XMarkIcon className="w-7 h-7 text-red-600" />
                Growth-focused marketing support
              </li>
              <li className="flex items-start">
                <XMarkIcon className="w-7 h-7 text-red-600" />
                Strategy adjustments based on data
              </li>
            </ul>
          </div>

          {/* Monthly Partnership */}
          <div className="relative">
            <div className="absolute -top-3 left-1/2 transform font-semibold -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-md">
              Most Popular
            </div>

            <div className="flex flex-col justify-between h-full bg-white rounded-xl shadow-lg p-8 text-center border-4 border-blue-500">
              <h3 className="text-2xl font-semibold mb-4">
                Monthly Partnership
              </h3>
              <p className="text-4xl font-bold text-blue-800 mb-4">$600/mo</p>
              <ul className="space-y-2 text-gray-700 mb-2 text-left">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">→</span>
                  Website Build & Ongoing Edits
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">→</span>
                  Monthly SEO & Content Updates
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">→</span>
                  Analytics & Performance Reporting
                </li>
              </ul>
              {/* Marketing Extras */}
              <h4 className="text-lg font-semibold mb-2 ">Marketing Extras</h4>
              <ul className="space-y-2 text-gray-700 text-left">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">→</span>
                  Google Business Profile Management
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">→</span>
                  Growth Campaign Strategy{" "}
                </li>
              </ul>
            </div>
          </div>

          {/* Ads Management Only */}
          <div className="flex flex-col justify-between bg-white rounded-xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Ads Management Only</h3>
            <p className="text-4xl font-bold text-blue-800 mb-4">
              Depending on Ad Budget{" "}
            </p>
            <p className="text-xs mb-4">
              (We take 10-20% cut depending on size of budget)
            </p>
            <ul className="space-y-2 text-gray-700 mb-6 text-left flex-1">
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">→</span>
                Google & Facebook Ads Setup
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">→</span>
                A/B Testing & Optimization
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">→</span>
                Clients pays Google and Facebook directly for Ad Budget
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            href="/#contact"
            className="mt-10 inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full px-6 py-3 transition-colors"
          >
            Schedule a Free Call
          </Link>
        </div>
      </section>

      {/* Compare Packages Table */}
      {/* Compare Packages Table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
            Compare Packages
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-3 border-b">Feature</th>
                  <th className="p-3 border-b">One-Time</th>
                  <th className="p-3 border-b">Monthly</th>
                  <th className="p-3 border-b">Ads Only</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border-b">Website Build</td>
                  <td className="p-3 border-b">
                    <CheckIcon className="w-8 h-8 text-green-600" />
                  </td>
                  <td className="p-3 border-b">
                    <CheckIcon className="w-8 h-8 text-green-600" />
                  </td>
                  <td className="p-3 border-b">
                    <XMarkIcon className="w-8 h-8 text-red-600" />
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-b">Ongoing Support</td>
                  <td className="p-3 border-b">
                    <XMarkIcon className="w-8 h-8 text-red-600" />
                  </td>
                  <td className="p-3 border-b">
                    <CheckIcon className="w-8 h-8 text-green-600" />
                  </td>
                  <td className="p-3 border-b">
                    <XMarkIcon className="w-8 h-8 text-red-600" />
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-b">Ads Management</td>
                  <td className="p-3 border-b">
                    <span>Optional</span>
                  </td>
                  <td className="p-3 border-b">
                    <span>Optional</span>
                  </td>
                  <td className="p-3 border-b">
                    <CheckIcon className="w-8 h-8 text-green-600" />
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-b">Monthly Reporting</td>
                  <td className="p-3 border-b">
                    <XMarkIcon className="w-8 h-8 text-red-600" />
                  </td>
                  <td className="p-3 border-b">
                    <CheckIcon className="w-8 h-8 text-green-600" />
                  </td>
                  <td className="p-3 border-b">
                    <CheckIcon className="w-8 h-8 text-green-600" />
                  </td>
                </tr>
                <tr>
                  <td className="p-3 ">Marketing Extras</td>
                  <td className="p-3 ">
                    <XMarkIcon className="w-8 h-8 text-red-600" />
                  </td>
                  <td className="p-3">
                    <CheckIcon className="w-8 h-8 text-green-600" />
                  </td>
                  <td className="p-3 ">Optional</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
