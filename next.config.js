/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true
  })
  
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ['192.168.0.208'], // para acessar pelo IP na rede local
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};
  
  module.exports = withPWA(nextConfig);
  