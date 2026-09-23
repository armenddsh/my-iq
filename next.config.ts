import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "out",
  basePath: "/my-iq",
  assetPrefix: "/my-iq",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
