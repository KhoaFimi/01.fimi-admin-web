import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	serverExternalPackages: ['argon2'],
	output: 'standalone'
}

export default nextConfig
