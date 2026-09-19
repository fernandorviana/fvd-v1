import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/work/upvio-ai",
        destination: "/work/upvio-platform",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
