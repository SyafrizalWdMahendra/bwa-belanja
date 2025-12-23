import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "oycbkuooadeyuelskvqn.supabase.co",
      },
    ],
  },
};

export default nextConfig;
