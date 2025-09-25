import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      // Add other domains if needed in the future
      {
        protocol: 'https',
        hostname: 'www.un.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'sdgs.un.org',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

