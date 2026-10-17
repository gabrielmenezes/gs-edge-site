import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  serverExternalPackages: ['gray-matter'],
  async redirects() {
    return [
      { source: '/products', destination: '/projetos', permanent: true },
      { source: '/products/gsmoney', destination: '/projetos/gsmoney', permanent: true },
      { source: '/products/gsedge-dc-game', destination: '/projetos/game-de-datacenters', permanent: true },
      { source: '/welcome', destination: '/#contact', permanent: true },
      { source: '/servicos', destination: '/#contact', permanent: true },
    ];
  },
  async headers() {
    return [{ source: '/api/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] }];
  },
};

export default nextConfig;
