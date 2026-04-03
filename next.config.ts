import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.eledenthospitals.com",
      },
      {
        protocol: "https",
        hostname: "eledenthospitals.com",
      },
      {
        protocol: "https",
        hostname: "backend.eledenthospitals.com",
      },
      {
        protocol: "https",
        hostname: "www.backend.eledenthospitals.com",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/location/:slug",
        destination: "/:slug",
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/dental-implant",
        destination: "/dental-implant/index.html",
      },
      {
        source: "/store-visit-generic",
        destination: "/store-visit-generic/index.html",
      },
      {
        source: "/kondapur-generic",
        destination: "/kondapur-generic/index.html",
      },
      {
        source: "/dental-generic",
        destination: "/dental-generic/index.html",
      },
      {
        source: "/invisalign",
        destination: "/invisalign/index.html",
      },
     

    ];
  },
};

export default nextConfig;