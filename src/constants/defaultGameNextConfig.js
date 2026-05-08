// NOTE - This does not work as a Next.js config file directly, but is meant to be imported and used in a Next.js config file. This is because Next.js does not allow for ESM exports in the config file. If that ever changes then this will get used.

const defaultGameNextConfig = {
    poweredByHeader: false,
    reactCompiler: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.articles.media',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'articles-website.s3.amazonaws.com',
                port: '',
            },
        ],
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN',
                    },
                ],
            },
        ];
    },
};

export default defaultGameNextConfig;
