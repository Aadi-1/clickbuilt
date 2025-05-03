import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

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
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1: Logo & Contact */}
            <div>
              <div className="text-2xl font-bold mb-3">
                Click<span className="text-blue-500">Built</span>
              </div>
              <p className="text-gray-400 mb-4">
                Digital marketing solutions tailored for small businesses
                looking to grow and thrive online.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <i className="fas fa-map-marker-alt mr-2 text-blue-500"></i>
                  Based in Simi Valley, California
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone mr-2 text-blue-500"></i>
                  (555) 123-4567
                </li>
                <li className="flex items-center">
                  <i className="fas fa-envelope mr-2 text-blue-500"></i>
                  clickbuiltsolutions@gmail.com
                </li>
              </ul>
              <div className="flex space-x-3 mt-4">
                <a
                  href="#"
                  className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  <i className="fab fa-facebook-f text-white"></i>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  <i className="fab fa-twitter text-white"></i>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  <i className="fab fa-instagram text-white"></i>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  <i className="fab fa-linkedin-in text-white"></i>
                </a>
              </div>
            </div>

            {/* Column 2: Services */}
            <div>
              <h3 className="text-xl font-semibold mb-4 relative pb-2 inline-block after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-blue-500">
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
              <h3 className="text-xl font-semibold mb-4 relative pb-2 inline-block after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-blue-500">
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

            {/* Column 4: Newsletter */}
            <div>
              <h3 className="text-xl font-semibold mb-4 relative pb-2 inline-block after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-blue-500">
                Newsletter
              </h3>
              <p className="text-gray-400 mb-4">
                Subscribe to receive digital marketing tips and updates.
              </p>
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full p-3 rounded-full text-gray-800 bg-gray-100 mb-3"
              />
              <a
                href="#"
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full px-6 py-2 transition-colors"
              >
                Subscribe
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-500 mt-12 text-sm">
            &copy; 2025 ClickBuilt Digital Marketing. All Rights Reserved.
          </div>
        </footer>
      </body>
      {/* Footer */}
    </html>
  );
}
