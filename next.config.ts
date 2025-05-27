import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://raw.githubusercontent.com/**"),
      new URL("https://res.cloudinary.com/**"),
    ],
  },
};

export default nextConfig;
