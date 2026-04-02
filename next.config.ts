import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eledenthospitals.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "www.eledenthospitals.com",
        pathname: "/wp-content/uploads/**",
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