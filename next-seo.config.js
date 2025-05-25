export default {
  title: "ClickBuilt | Website Design & SEO for Local Businesses",
  description:
    "Custom websites, digital ads, and SEO strategies to grow your local business and generate real leads.",
  canonical: "https://clickbuilt.net",
  openGraph: {
    url: "https://clickbuilt.net",
    title: "ClickBuilt | Website Design & SEO for Local Businesses",
    description:
      "Custom websites, digital ads, and SEO strategies to grow your local business and generate real leads.",
    images: [{ url: "https://clickbuilt.net/og-image.png" }],
  },
  additionalMetaTags: [{ name: "robots", content: "index,follow" }],
  // LocalBusiness schema
  additionalScripts: [
    {
      type: "application/ld+json",
      json: {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "ClickBuilt Digital Marketing",
        url: "https://clickbuilt.net",
        telephone: "(805) 428-CKBT",
        address: {
          "@type": "PostalAddress",
          streetAddress: "123 Main St",
          addressLocality: "Simi Valley",
          addressRegion: "CA",
          postalCode: "93065",
          addressCountry: "US",
        },
        openingHours: "Mo,Tu,We,Th,Fr 09:00-17:00",
      },
    },
  ],
};
