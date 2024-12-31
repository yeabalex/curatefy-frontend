import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    domains: ["images.unsplash.com"],
  },

  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        destination: 'https://curatefy-backend-production.up.railway.app/:path*',
      }
    ]
  },
};

export default nextConfig;
