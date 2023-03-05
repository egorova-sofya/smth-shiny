/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  //TODO replace to real data
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cs2.livemaster.ru",
        port: "",
        pathname: "/storage/19/35/**",
      },
      {
        protocol: "https",
        hostname: "uprostim.com",
        port: "",
        pathname: "/wp-content/uploads/2021/05/**",
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "variables.scss"; @import "mixins.scss";`,
  },
  experimental: {
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
};

module.exports = nextConfig;
