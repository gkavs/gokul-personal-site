/** @type {import('next').NextConfig} */
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  ...(isGitHubActions
    ? {
        assetPrefix: "/gokul-personal-site/",
        basePath: "/gokul-personal-site",
      }
    : {}),
};

export default nextConfig;
