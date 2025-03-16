/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/den',
                destination: 'https://discord.gg/WqnSbKj37h',
                permanent: true
            },
            {
                source: '/playlist',
                destination: 'https://open.spotify.com/playlist/36NKwu4twh8xMCAOqvEiqV?si=a65ed062240148b8',
                permanent: true
            },
            {
                source: '/sat',
                destination: 'https://discord.gg/enZFr8QQ33',
                permanent: true
            },
        ]
    },
};

export default nextConfig;
