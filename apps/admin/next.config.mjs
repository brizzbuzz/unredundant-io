import './src/env.mjs'

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  experimental: { appDir: true },
  transpilePackages: ['persistence'],
}

export default config
