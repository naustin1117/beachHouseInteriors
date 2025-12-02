import type { NextConfig } from "next";

// Only add basePath/assetPrefix in production (on GitHub Pages)
const isProd = process.env.NODE_ENV === "production";

// 🔴 If your repo name is different, change "beachHouseInteriors" below
const repoName = "beachHouseInteriors";

const nextConfig: NextConfig = {
  // 1) Tell Next to output a static export (no Node server)
  output: "export",

  // 2) Make paths work when served from: /<repoName>/...
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",

  // 3) Keep your existing image config, but make them static-friendly
  images: {
    unoptimized: true, // important for static export + next/image
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;