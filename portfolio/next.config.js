/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/**',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',  // Domínio de imagens do LinkedIn
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com', // Imagens do Imgur
        port: '',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
