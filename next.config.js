/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
    minimumCacheTTL: 300,
    formats: ['image/webp'],
    domains: ['firebasestorage.googleapis.com', 'lh3.googleusercontent.com'],
  },
  
}
