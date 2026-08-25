/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/VanshPortfolio',
    assetPrefix: '/VanshPortfolio/',
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;