import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
  // 배포시에만 필요한 설정들
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    basePath: '/HGECreatorWeb',
    trailingSlash: true,
    images: {
      unoptimized: true
    }
  })
};

export default nextConfig;
