// next.config.mjs
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      appDir: true, // Ensure it's needed for the app router
    },
  };
  
  export default nextConfig;
  