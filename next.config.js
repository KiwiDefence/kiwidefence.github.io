/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/KiwiDefence-web',
  assetPrefix: '/KiwiDefence-web/',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
