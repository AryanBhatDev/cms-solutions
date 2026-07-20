import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
