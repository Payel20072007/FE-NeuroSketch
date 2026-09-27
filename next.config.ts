/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Tells Next.js to compile into plain HTML/CSS files
  images: {
    unoptimized: true, // Required for static exports
  },
  // If your GitHub repository name is exactly "prismcode-ai", uncomment the line below:
  // basePath: '/prismcode-ai',
};

export default nextConfig;