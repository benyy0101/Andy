/** @type {import('next').NextConfig} */
const withPWA = require('@ducanh2912/next-pwa').default({
  dest: "public",
});
const nextConfig = withPWA({
  reactStrictMode: false,
  compiler: {               // 추가
    styledComponents: true, // 추가
  },
  images: {
    domains: ['s3.ap-northeast-2.amazonaws.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
      },
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
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "http://localhost:3000",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "Origin, X-Requested-With, Content-Type, Accept, Authorization",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PATCH, DELETE, OPTIONS",
          },
        ],
      },
    ];
  },
})
  
module.exports = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    domains: ['us.123rf.com', 'vrthumb.imagetoday.co.kr', 'img.segye.com', 't3.ftcdn.net', 'img.hankyung.com'], // 이미지 호스트 이름 추가
  },
}