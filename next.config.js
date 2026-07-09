/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/KiwiDefence-web',
  assetPrefix: '/KiwiDefence-web/',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/KiwiDefence-web',
  },
}

module.exports = nextConfig
