/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
    typedRoutes: true,
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
