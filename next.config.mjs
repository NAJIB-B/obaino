/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		dangerouslyAllowSVG: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'obinnaogadah.s3.eu-north-1.amazonaws.com',
			}
		]
	}
};

export default nextConfig;
