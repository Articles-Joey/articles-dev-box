// Not ready yet, but was thinking of doing a defaul theme for @mui but most dont use it'use client';
// import { Roboto } from 'next/font/google';

// const roboto = Roboto({
//     weight: ['300', '400', '500', '700'],
//     subsets: ['latin'],
//     display: 'swap',
// });

const getTheme = (createTheme) => createTheme({
    cssVariables: true,
    palette: {
        mode: 'dark',
    },
    // typography: {
    //     fontFamily: roboto.style.fontFamily,
    // },
    components: {
        MuiAlert: {
            styleOverrides: {
                root: {
                    variants: [
                        {
                            props: { severity: 'info' },
                            style: {
                                backgroundColor: '#60a5fa',
                            },
                        }
                    ],
                },
            },
        },
    },
});

export default getTheme;