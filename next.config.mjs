/** @type {import('next').NextConfig} */
const nextConfig = {
   darkMode: 'class',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      }
    ],
  },
};

export default nextConfig;
