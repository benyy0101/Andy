/** @type {import('next').NextConfig} */
const withPWA = require('@ducanh2912/next-pwa').default({
  dest: "public",
});
const nextConfig = withPWA({
  reactStrictMode: false,
  compiler: {               // 추가
    styledComponents: true, // 추가
  },
  
  
})
  
module.exports = {
  webpack(config, options) {
    const { isServer } = options;
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve('url-loader'),
          options: {
            limit: config.inlineImageLimit,
            fallback: require.resolve('file-loader'),
            publicPath: `${config.assetPrefix}/_next/static/images/`,
            outputPath: `${isServer ? '../' : ''}static/images/`,
            name: '[name]-[hash].[ext]',
            esModule: config.esModule || false,
          },
        },
      ],
    });

    return config;
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    domains: [''],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.ap-northeast-2.amazonaws.com',
        pathname:'/andyimagebucket/profiles/**'
      },
      {
        protocol: 'https',
        hostname: 'andyimagebucket.s3.ap-northeast-2.amazonaws.com',
        pathname:'**'
      },
      {
        protocol: 'https',
        hostname: 'lottie.host',
        pathname:'**'
      }
    ],
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/main',
        permanent: true,
      },
    ]
  },
}