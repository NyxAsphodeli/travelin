module.exports = {
  reactStrictMode: true,
  images: {
      domains: ["i.ibb.co"],
  },
  i18n: {
      locales: ["en-US", "it"],
      defaultLocale: "it",
      localeDetection: false,
  },
  async redirects() {
      return [
          {
              source: "/:path*", // Matches all paths
              has: [{ type: "host", value: "www.apptravelin.com" }], // Match your host
              destination: "https://travelin.me/:path*", // Redirect to the target site
              permanent: true, // Use a permanent redirect (301)
          },
      ];
  },
};
