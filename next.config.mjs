/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/playlist',
                destination: 'https://open.spotify.com/playlist/36NKwu4twh8xMCAOqvEiqV?si=a65ed062240148b8',
                permanent: true
            },
            {
                source: '/resume',
                destination: 'https://drive.google.com/file/d/1deFsmyLI8x4x6OLnRmDscgpx1pGIq8NL/view?usp=sharing',
                permanent: true
            },
        ]
    },
};

export default nextConfig;
