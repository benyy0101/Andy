/** @type {import('next').NextConfig} */
const withPWA = require('@ducanh2912/next-pwa').default({
  dest: "public",
});
const nextConfig = withPWA({
  experimental: {
    // 어디서 bailout이 발생하는지 찾기
    missingSuspenseWithCSRBailout: false,
  },
  reactStrictMode: true,
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
        pathname: '/200',
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
  images: {
    domains: ['us.123rf.com', 'vrthumb.imagetoday.co.kr', 'img.segye.com', 't3.ftcdn.net', 'img.hankyung.com'], // 이미지 호스트 이름 추가
  },
}