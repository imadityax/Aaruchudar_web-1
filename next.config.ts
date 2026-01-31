import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/workshop",
        destination: "/hi-workshops",
        permanent: true, // 301
      },
      {
        source: "/labs",
        destination: "/hi-labs",
        permanent: true,
      },
      {
        source: "/cources",
        destination: "/hi-courses",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/",
        permanent: true,
      },
      {
        source: "/legal",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/fee-internship",
        destination: "/internship",
        permanent: true,
      },
      {
        source: "/workshopregistration",
        destination: "/hi-workshops",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
