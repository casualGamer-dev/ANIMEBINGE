const withPWA = require("next-pwa");

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
  images: {
    domains: ["gogocdn.net","media.discordapp.net","media.kitsu.io", "s2.bunnycdn.ru"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
});
