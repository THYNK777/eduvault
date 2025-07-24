import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.bjp.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'career.webindia123.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
