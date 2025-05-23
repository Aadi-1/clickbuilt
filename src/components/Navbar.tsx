// src/components/Navbar.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md  w-full z-50">
      <nav className="flex items-center justify-between max-w-screen-xl mx-auto px-4">
        {/* Logo (hidden on mobile) */}
        <Link href="/" className="hidden md:block">
          <Image
            src="/click4.png"
            alt="ClickBuilt Logo"
            width={200}
            height={80}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-lg font-medium">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/services" className="hover:text-blue-600">
            Services
          </Link>
          <Link href="/testimonials" className="hover:text-blue-600">
            Testimonials
          </Link>
          <Link href="/pricing" className="hover:text-blue-600">
            Pricing
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>

          {/* Styled “Contact” pill */}
          <Link
            href="/#contact"
            className="
              bg-orange-600 hover:bg-orange-700
              text-white text-md font-semibold
              rounded-full
              px-4 py-2
              transition-colors
            "
          >
            Book Now!
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            // X icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 pb-4 space-y-3 text-lg font-medium">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            href="/services"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-blue-600"
          >
            Services
          </Link>
          <Link
            href="/testimonials"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-blue-600"
          >
            Testimonials
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-blue-600"
          >
            About
          </Link>
          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className=" inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full px-4 py-2 transition-colors"
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
}
