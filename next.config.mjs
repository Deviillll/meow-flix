/** @type {import('next').NextConfig} */
const nextConfig = {
   
    // images: {
    //     domains: ['image.tmdb.org', 'www.themoviedb.org',"via.placeholder.com"],
    // },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'image.tmdb.org',
            port: '',
            
          },
          {
            protocol: 'https',
            hostname: 'www.themoviedb.org',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'placehold.co',
            port: '',
            
          },
          {
            protocol: 'https',
            hostname: 'via.placeholder.com',
            port: '',
            
          },
          
        ],
      },
    eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
