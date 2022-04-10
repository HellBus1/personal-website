/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets.vercel.com', 'encrypted-tbn0.gstatic.com'],
    formats: ['image/avif', 'image/webp']
  }
}

module.exports = nextConfig
