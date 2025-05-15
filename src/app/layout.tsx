import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ClickBuilt",
  description:
    "Custom websites, sales funnels, and marketing solutions that bring real customers to your door",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-gradient-to-l shadow-lg border-b bg-white text-black z-50 w-full ">
          <Navbar />
        </div>
        {children}
        <footer className="bg-gray-900 text-gray-300 py-12">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: Logo & Contact */}
            <div>
              <div className="text-2xl font-bold mb-3">
                Click<span className="text-blue-500">Built</span>
              </div>
              <p className="text-gray-400 mb-4">
                Digital marketing solutions for businesses looking to grow and
                thrive online.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <i className="fas fa-map-marker-alt mr-2 text-blue-500"></i>
                  Based in Simi Valley, California
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone mr-2 text-blue-500"></i>
                  <a
                    href="tel:8054288828"
                    className="hover:text-blue-500 transition-colors underline underline-offset-5"
                  >
                    (805) 428‑CKBT
                  </a>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-envelope mr-2 text-blue-500"></i>
                  <a
                    href="mailto:clickbuiltsolutions@gmail.com"
                    className="hover:text-blue-500 transition-colors  underline underline-offset-5"
                  >
                    clickbuiltsolutions@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Services */}
            <div>
              <h3
                className="text-xl font-semibold mb-4 relative pb-2 inline-block
                     after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-blue-500"
              >
                Services
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-500 transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 transition-colors">
                    SEO Optimization
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 transition-colors">
                    Digital Advertising
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h3
                className="text-xl font-semibold mb-4 relative pb-2 inline-block
                     after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-blue-500"
              >
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/about"
                    className="hover:text-blue-500 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/testimonials"
                    className="hover:text-blue-500 transition-colors"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-500 mt-12 text-sm">
            &copy; 2025 ClickBuilt Digital Marketing. All Rights Reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
