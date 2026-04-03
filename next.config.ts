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
};

export default nextConfig;