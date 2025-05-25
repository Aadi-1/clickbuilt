/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://clickbuilt.net",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: "/_next/" },
    ],
  },
};
