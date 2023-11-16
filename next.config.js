/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['pages', 'src'],
  },
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx'],
}

module.exports = nextConfig
