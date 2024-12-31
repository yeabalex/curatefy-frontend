import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    domains: ["images.unsplash.com"],
  },

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://curatefy-backend-production.up.railway.app/:path*',
        experimental: {
          allowedHeaders: ['cookie', 'set-cookie']
        }
      }
    ]
  }
};

export default nextConfig;
