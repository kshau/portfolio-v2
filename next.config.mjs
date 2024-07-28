/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/sat',
                destination: 'https://discord.gg/enZFr8QQ33',
                permanent: true
            },
            {
                source: '/playlist',
                destination: 'https://open.spotify.com/playlist/3UqFRTl7cDqhifWgBoxuOA?si=4bd4bc420de240c5',
                permanent: true
            },
        ]
    },
};

export default nextConfig;
