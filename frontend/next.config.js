
/** @type {import('next').NextConfig} */
const withPWA = require('@ducanh2912/next-pwa').default({
  dest: "public",
});
const nextConfig = withPWA({
  reactStrictMode: true,
  compiler: {               // 추가
    styledComponents: true, // 추가
  },
})
  
module.exports = nextConfig;