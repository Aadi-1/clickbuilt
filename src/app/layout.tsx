import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";

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
  title:
    "ClickBuilt Digital Consulting | SEO, Google Ads & Web Design in Simi Valley",
  description:
    "ClickBuilt helps small businesses grow online through high-performance websites, SEO strategies, and Google Ads campaigns. Based in Simi Valley, CA.",
  keywords: [
    "Simi Valley SEO",
    "small business web design",
    "Google Ads management",
    "ClickBuilt Digital Consulting",
    "local marketing agency",
  ],
  openGraph: {
    title: "ClickBuilt Digital Consulting",
    description: "SEO, Google Ads & Web Design Services in Simi Valley",
    url: "https://clickbuilt.net",
    siteName: "ClickBuilt",
    images: [
      {
        url: "/click4.png",
        width: 1200,
        height: 630,
        alt: "ClickBuilt - SEO and Web Design",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClickBuilt Digital Consulting",
    description: "SEO, Google Ads & Web Design Services in Simi Valley",
    images: ["/click4.png"],
  },
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
        <Head>
          <Script type="application/ld+json" strategy="afterInteractive">
            {`
                {
                  "@context": "https://schema.org",
                  "@type": "LocalBusiness",
                  "name": "ClickBuilt Digital Consulting",
                  "image": "https://clickbuilt.net/og-image.jpg",
                  "url": "https://clickbuilt.net",
                  "telephone": "+1-805-410-3871",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Simi Valley",
                    "addressRegion": "CA",
                    "postalCode": "93063",
                    "addressCountry": "US"
                  },
                  "sameAs": [
                    "https://www.instagram.com/YOUR_HANDLE",
                    "https://www.linkedin.com/in/YOUR_HANDLE"
                  ]
                }
                `}
          </Script>
        </Head>

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
                    href="tel:8054103871
"
                    className="hover:text-blue-500 transition-colors underline underline-offset-5"
                  >
                    (805) 410-3871
                  </a>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-envelope mr-2 text-blue-500"></i>
                  <a
                    href="mailto:clickbuiltsolutions@gmail.com"
                    className="hover:text-blue-500 transition-colors  underline underline-offset-5"
                  >
                    aadi@clickbuilt.net
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
                <li>
                  <a
                    href="/pricing"
                    className="hover:text-blue-500 transition-colors"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-500 mt-12 text-sm">
            &copy; 2025 ClickBuilt Digital Consulting. All Rights Reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
