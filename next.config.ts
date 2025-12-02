import type { NextConfig } from "next";

// Only add basePath/assetPrefix when deploying to GitHub Pages
// Set this environment variable in GitHub Actions
const isGitHubPages = process.env.GITHUB_PAGES === "true";

// 🔴 If your repo name is different, change "beachHouseInteriors" below
const repoName = "beachHouseInteriors";

const nextConfig: NextConfig = {
  // 1) Tell Next to output a static export (no Node server)
  output: "export",

  // 2) Make paths work when served from: /<repoName>/...
  basePath: isGitHubPages ? `/${repoName}` : "",
  assetPrefix: isGitHubPages ? `/${repoName}/` : "",

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