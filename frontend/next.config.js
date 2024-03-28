/** @type {import('next').NextConfig} */
const withPWA = require('@ducanh2912/next-pwa').default({
  dest: "public",
});
const nextConfig = withPWA({
  reactStrictMode: false,
  compiler: {               // 추가
    styledComponents: true, // 추가
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
})
  
module.exports = {
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
    ],
  },
}