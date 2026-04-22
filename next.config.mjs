/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["lenis", "gsap"],
  },
};

export default nextConfig;
