const basePath = '/KiwiDefence-web'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'development' ? '' : basePath,
  assetPrefix: process.env.NODE_ENV === 'development' ? '' : `${basePath}/`,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NODE_ENV === 'development' ? '' : basePath,
  },
}

module.exports = nextConfig
