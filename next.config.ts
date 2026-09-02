import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const githubBasePath = isGitHubPages ? "/dmitrievs-bistro-demo" : "";

const nextConfig: NextConfig = {
  ...(isGitHubPages ? { output: "export" as const, trailingSlash: true } : {}),
  basePath: githubBasePath,
  assetPrefix: githubBasePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: githubBasePath },
  typescript: { ignoreBuildErrors: isGitHubPages },
};

export default nextConfig;
