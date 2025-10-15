import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.ufc.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
