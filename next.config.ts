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
};

export default nextConfig;