"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import ScrollButton from "@/components/scrollnext";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(false);

  const caseStudies = [
    {
      slug: "bark-n-roll-petcare", //  <-- add a slug
      img: "bnrss.png",
      title: "Bark n' Roll Petcare",
      desc: "Helped a family-owned Dog Walking business improve their online presence and traffic through a Responsive Website, Efficient SEO, and Google Advertising",
      metrics: [
        { value: "100%", label: "More Traffic" },
        { value: "77%", label: "More Bookings" },
      ],
      testimonial: `"ClickBuild transformed our online presence. We now get consistent orders through our website every day!"`,
    },
    // …more case studies here…
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", { method: "POST", body: form });
    setLoading(false);
    if (res.ok) {
      alert("Thanks! We’ll be in touch soon.");
      router.refresh();
    } else {
      alert("Oops, something went wrong.");
    }
  };

  return (
    <div className="font-sans text-gray-800 overflow-x-hidden">
      {/* Header */}
      <main className="w-full">
        <ScrollButton />
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-800 to-blue-500 text-white pt-36 pb-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              <span className="underline underline-offset-10 decoration-orange-600">
                Stop Losing Customers
              </span>{" "}
              <br />
              to Competitors Who Market Better.
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              We help you take control of your online market with
              high-converting websites and growth-focused campaigns.
            </p>
            <a
              href="#contact"
              className="inline-block bg-orange-600 hover:bg-white hover:text-black text-white font-semibold rounded-full px-8 py-3 transition-colors"
            >
              Take Back Your Market
            </a>
          </div>
        </section>

        <Carousel />

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gray-300 bg-gradient-to-br from-blue-800 to-blue-500">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-3 underline underline-offset-8 decoration-orange-600">
                Why Businesses Choose Us
              </h2>
              <p className="text-white font-semibold">
                Yes, we might be small, but we leave a HUGE impact
              </p>
            </div>

            {/* Flex wrapper instead of grid */}
            <div className="flex flex-wrap justify-center gap-8">
              {[
                {
                  icon: "cbcheck.svg",
                  title: "Custom Solutions",
                  desc: "Every strategy is crafted to match your industry, goals, and growth stage.",
                },
                {
                  icon: "cbresults.svg",
                  title: "Results Driven",
                  desc: "We focus on delivering the best products with in detail reporting so you can see how your $$$ is invested.",
                },
                {
                  icon: "cbhand.svg",
                  title: "Ongoing Support",
                  desc: "We don’t disappear after launch. From analytics to optimization, we support your growth every step of the way.",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="text-center p-6 w-80 bg-white rounded-lg shadow-lg"
                >
                  <Image
                    src={`/${feature.icon}`} // from public/
                    alt={feature.title}
                    width={60}
                    height={48}
                    className="mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <a
              href="/services"
              className="
      inline-block 
      bg-orange-600 hover:bg-orange-700 
      text-white text-sm font-semibold 
      rounded-full 
      px-4 py-2 
      transition-colors
    "
            >
              Learn More
            </a>
          </div>
        </section>

        {/* Results Section */}
        <section id="testimonials" className="bg-sky-50 py-20 justify-center">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-800 mb-3">
                Real Results from Real Businesses
              </h2>
              <p className="text-gray-700">
                See how we've helped businesses just like yours
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {caseStudies.map((cs) => (
                <Link
                  key={cs.slug}
                  href={`/testimonials`}
                  className="
                block
                bg-white rounded-lg overflow-hidden shadow-lg
                text-center w-full sm:w-1/2 md:w-1/3
                hover:shadow-xl transform hover:-translate-y-2
                transition-transform
              "
                >
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <img
                      src={cs.img}
                      alt={cs.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{cs.title}</h3>
                    <p className="text-gray-600 mb-4">{cs.desc}</p>
                    <div className="flex space-x-4 mb-4">
                      {cs.metrics.map((m) => (
                        <div key={m.label} className="flex-1 text-center">
                          <div className="text-2xl font-bold text-blue-800">
                            {m.value}
                          </div>
                          <div className="text-gray-500">{m.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="italic text-gray-700 border-t pt-4">
                      {cs.testimonial}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-blue-800 mb-3">
              How We Work With You
            </h2>
            <p className="text-gray-700 mb-8">
              A simple, effective process focused on your success
            </p>
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 flex items-center"></div>
              <div className="relative flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-4 mt-8">
                {[
                  {
                    number: "1",
                    title: "Discovery",
                    desc: "We learn about your business goals and challenges",
                  },
                  {
                    number: "2",
                    title: "Strategy",
                    desc: "Develop a custom digital marketing plan",
                  },
                  {
                    number: "3",
                    title: "Implementation",
                    desc: "Build your website, SEO, and digital assets",
                  },
                  {
                    number: "4",
                    title: "Growth",
                    desc: "Ongoing optimization and support",
                  },
                ].map((step) => (
                  <div
                    key={step.number}
                    className="flex-1 text-center relative"
                  >
                    <div className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="contact"
          className="bg-gradient-to-br from-blue-800 to-blue-500 text-white py-20"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Grow Your Business?
            </h2>
            <form
              onSubmit={handleSubmit}
              className="max-w-lg mx-auto space-y-4 text-gray-800"
              encType="multipart/form-data"
            >
              <div className="flex space-x-4">
                <input
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  required
                  className="flex-1 p-3 rounded-full bg-gray-100"
                />
                <input
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  required
                  className="flex-1 p-3 rounded-full bg-gray-100"
                />
              </div>

              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-full bg-gray-100"
              />

              <input
                name="businessName"
                type="text"
                placeholder="Business Name"
                className="w-full p-3 rounded-full bg-gray-100"
              />

              <div className="flex space-x-4">
                <select
                  name="businessType"
                  required
                  className="w-full p-3 rounded-full bg-gray-100"
                >
                  <option value="">Business Type</option>
                  <option>Personal Brands</option>
                  <option>Restaurants/Cafe</option>
                  <option>Professional Services (Legal, Business)</option>
                  <option>E-commerce</option>
                  <option>Service Based Businesses</option>
                </select>
              </div>

              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 rounded-full bg-gray-100"
              />

              <div className="flex space-x-4">
                <select
                  name="budget"
                  required
                  className="flex-1 p-3 rounded-full bg-gray-100"
                >
                  <option value="">Budget</option>
                  <option>Under 1k</option>
                  <option>1-2k</option>
                  <option>3-4k</option>
                  <option>5k+</option>
                </select>
                <select
                  name="revenue"
                  required
                  className="flex-1 p-3 rounded-full bg-gray-100"
                >
                  <option value="">Monthly Revenue</option>
                  <option>Under 1k</option>
                  <option>1-5k</option>
                  <option>5-10k</option>
                  <option>10k+</option>
                </select>
              </div>

              <textarea
                name="message"
                rows={3}
                placeholder="Additional details (optional)"
                className="w-full p-3 rounded-lg bg-gray-100"
              />

              <button
                type="submit"
                disabled={loading}
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full px-8 py-3 transition-colors"
              >
                {loading ? "Sending..." : "Start Your Digital Transformation"}
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
