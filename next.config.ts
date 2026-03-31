import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "reinventmedia.in",
      },
      {
        protocol: "https",
        hostname: "www.reinventmedia.in",
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