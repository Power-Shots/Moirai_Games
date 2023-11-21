/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['pages', 'src'],
  },
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    console.log(config.module.rules);
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    });
    // Fixes npm packages that depend on `fs` module

    // if (!isServer) {
    //   config.resolve = {
    //     ...config.resolve,
    //     fallback: {
    //       fs: false,
    //       os: false,
    //       path: require.resolve('path-browserify'),
    //     },
    //   };
    // }

    return config;
  },
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx'],
};

module.exports = nextConfig;
