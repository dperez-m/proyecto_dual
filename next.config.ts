import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": path.join(__dirname, "src/components"), // Alias para componentes
      "@utils": path.join(__dirname, "src/utils"), // Alias para utilidades
    };
    return config;
  },
};

export default nextConfig;
