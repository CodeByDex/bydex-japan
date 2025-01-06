import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.NEXT_PUBLIC_basePath,
  reactStrictMode: true,

};

export default nextConfig;
