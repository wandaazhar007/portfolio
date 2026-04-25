/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'http',
        hostname: 'portfolio.birojasa-sahabat.com',
      },
      {
        protocol: 'https',
        hostname: 'portfolio.birojasa-sahabat.com',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
      {
        protocol: 'http',
        hostname: 'storage.googleapis.com',
      },
    ],
  },
};

module.exports = nextConfig;