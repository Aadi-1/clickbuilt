import Link from "next/link";

export default function testimonial() {
  return (
    <main>
      <section className="bg-gradient-to-br from-blue-800 to-blue-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Customers</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            We partner with growing businesses to build systems that convert,
            retain, and scale.
          </p>
        </div>
      </section>

      {/* CUSTOMER CARD – Bark n’ Roll */}
      <section className="bg-sky-50 py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col gap-6">
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 text-center">
              Bark n’ Roll Petcare
            </h2>

            {/* Center Section */}
            <div className="space-y-8 text-gray-700 text-md leading-relaxed">
              {/* Overview */}
              <div>
                <h3 className="text-xl font-semibold text-grey-800 mb-2">
                  Overview
                </h3>
                <p>
                  Bark n’ Roll Petcare came to me looking for a way to automate
                  growth and free up the owner’s time. I delivered a fully
                  responsive Next.js site with a built-in booking form,
                  integrated email notifications, and a polished client
                  experience from the very first click.
                </p>
              </div>

              {/* Challenge Sections Reformatted into Paragraphs with Bold Inline Headings */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Challenges & Solutions
                </h3>
                <p className="mb-4">
                  <strong>Responsive Website & Booking System:</strong> <br />I
                  designed and developed a device-responsive website that
                  highlights Bark n’ Roll’s services, team, and personality. The
                  “Book a Consultation” form is seamlessly tied to an email
                  service so every inquiry arrives in the owner’s inbox
                  instantly—no manual follow-up required.
                </p>
                <p className="mb-4">
                  <strong>Owner Empowerment & Package Strategy:</strong> <br />
                  We reimagined his service tiers, introducing larger bundle
                  packages and upsell paths that encourage clients to commit
                  long-term. I guided him through stepping out of day-to-day
                  walks, setting himself up as the business owner who oversees
                  quality and growth rather than handles every appointment.
                </p>
                <p>
                  <strong>VIP Client Retention & Marketing Campaigns:</strong>{" "}
                  <br />
                  After analyzing purchase history, I identified Bark n’ Roll’s
                  top-spending clients and crafted a VIP program—exclusive
                  offers, priority scheduling, and personalized outreach—to
                  boost loyalty. Meanwhile, I ran Google Ads funnels to win back
                  inactive customers and attract new ones into premium plans.
                </p>
              </div>
            </div>

            {/* Bottom: Image + Testimonial */}
            <div className="flex flex-col md:flex-row gap-6 pt-8 border-t border-gray-300">
              {/* Website Image */}
              <div className="md:w-1/2">
                <img
                  src="/bnrss.png"
                  alt="Bark n’ Roll Website"
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
                    — Bark n’ Roll Petcare
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
