/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
}
module.exports = {
  target: 'serverless', // Este é importante para habilitar a exportação
  // ...
}
module.exports = nextConfig
