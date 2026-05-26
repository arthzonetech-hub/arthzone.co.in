import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/services/e-commerce-development",
        destination: "/services/web-application",
        permanent: true,
      },
    ];
  },
  /* config options here */
};

export default nextConfig;
