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
  // 개발/프로덕션 환경 분리
  ...(process.env.NODE_ENV === 'production' ? {
    // 프로덕션 환경 (도메인 직접 연결용)
    output: 'export',
    trailingSlash: true,
    images: {
      unoptimized: true
    },
    distDir: 'out'
  } : {
    // 개발 환경
    images: {
      unoptimized: true
    }
  })
};

export default nextConfig;
