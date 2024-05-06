/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "naru200-strapi.s3.ap-northeast-2.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
