/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  target: 'server', // Use 'server' when using "output": "export"
}

module.exports = nextConfig
