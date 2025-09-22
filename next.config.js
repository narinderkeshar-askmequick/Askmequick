/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed static export configuration for normal Vercel deployment
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
