import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_basePath,
  reactStrictMode: true,

};

export default nextConfig;
