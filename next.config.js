/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		esmExternals: false
	},
	env: {
		SERVER_URL: process.env.SERVER_URL
	},
	images: {
		domains: ['127.0.0.1'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'i.dummyjson.com',
				port: '',
				pathname: '/data/**'
			},
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '3000',
				pathname: '/**'
			}
		]
	},
	async rewrites() {
		return [
			{
				source: '/uploads/:path*',
				destination: `http://localhost:4200/uploads/:path*`
			}
		]
	}
}

module.exports = nextConfig
