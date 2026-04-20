import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  experimental: {
    // Inline critical CSS and lazy-load the rest → eliminates render-blocking stylesheet
    optimizeCss: true,
  },
};

export default nextConfig;
