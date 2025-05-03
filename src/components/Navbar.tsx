// src/components/Navbar.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md  w-full z-50">
      <nav className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Logo (hidden on mobile) */}
        <a href="/" className="hidden md:block">
          <Image
            src="/click4.png"
            alt="ClickBuilt Logo"
            width={200}
            height={80}
            className="object-contain"
            priority
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-lg font-medium">
          <a href="/" className="hover:text-blue-600">
            Home
          </a>
          <a href="/services" className="hover:text-blue-600">
            Services
          </a>
          <a href="/testimonials" className="hover:text-blue-600">
            Testimonials
          </a>
          <a href="/about" className="hover:text-blue-600">
            About
          </a>
          <a href="/#contact" className="hover:text-blue-600">
            Contact
          </a>
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
          <a
            href="/"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-blue-600"
          >
            Home
          </a>
          <a
            href="/services"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-blue-600"
          >
            Services
          </a>
          <a
            href="/testimonials"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-blue-600"
          >
            Testimonials
          </a>
          <a
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-blue-600"
          >
            About
          </a>
          <a
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-blue-600"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
