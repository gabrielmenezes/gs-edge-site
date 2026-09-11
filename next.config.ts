import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['gray-matter'],
  async redirects() {
    return [
      {
        source: '/servicos',
        destination: '/#services',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
