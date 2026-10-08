import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: { root: process.cwd() },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.rugsberber.com" }],
        destination: "https://rugsberber.com/:path*",
        permanent: true,
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;