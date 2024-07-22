/** @type {import('next').NextConfig} */
const nextConfig = {
   
    images: {
        domains: ['image.tmdb.org', 'www.themoviedb.org',"via.placeholder.com"],
    },
    eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
