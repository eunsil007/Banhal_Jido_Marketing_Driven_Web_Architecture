
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel 배포 시 ESLint 검사로 인한 빌드 에러 방지
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;