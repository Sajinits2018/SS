/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ generate static HTML in /out for Netlify
  output: 'export',

  reactStrictMode: true,

  // ✅ Next/Image must be disabled for static export
  images: {
    unoptimized: true,
    // (optional) keep remotePatterns if you later move to SSR hosting
    remotePatterns: [
      { protocol: 'https', hostname: '*.agltv.io' } // keep or remove; harmless
    ]
  },
};

module.exports = nextConfig;
