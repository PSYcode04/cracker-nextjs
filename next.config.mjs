/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
    typedRoutes: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
