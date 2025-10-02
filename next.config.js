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
  // 개발 환경에서는 output과 basePath 설정을 제거
  // 배포시에만 필요한 설정들
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    basePath: '/HGECreatorWeb'
  })
};

export default nextConfig;
