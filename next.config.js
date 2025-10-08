/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: 'https', hostname: '*.agltv.io' }]
  }
};
module.exports = nextConfig;
