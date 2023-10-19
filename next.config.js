/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
}
module.exports = {
  target: 'serverless', // Este é importante para habilitar a exportação
  // ...
}
module.exports = nextConfig
