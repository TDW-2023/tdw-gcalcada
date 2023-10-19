/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  target: 'server', // Correção: use 'server' em vez de 'serverless'
}

module.exports = nextConfig
