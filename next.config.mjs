/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
    domains: [
      'glassgollc.com',
      'res.cloudinary.com',
      'images.pexels.com' // ✅ Added support for external Pexels thumbnails
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
