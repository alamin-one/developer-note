/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingIncludes: {
    '/**': ['./generated/prisma/**/*'],
  },
};

export default nextConfig;
