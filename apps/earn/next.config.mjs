import defaultNextConfig from '@sushiswap/nextjs-config'

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...defaultNextConfig,
  basePath: '/pools',
  transpilePackages: [
    '@sushiswap/redux-token-lists',
    '@sushiswap/redux-localstorage',
    '@sushiswap/wagmi',
    '@sushiswap/ui',
  ],
  async redirects() {
    return [
      {
        source: '/',
        destination: '/pools',
        permanent: true,
        basePath: false,
      },
    ]
  },
}

export default nextConfig
