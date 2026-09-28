import { useEffect } from 'react';

// import Link from 'next/link'
import Link from '#root/src/components/UI/Link';

// import ROUTES from 'components/constants/routes';
// import ArticlesButton from '../Articles/Button';
import ArticlesButton from '#root/src/components/UI/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { ArticlesBadge, ArticlesDialog, ArticlesDialogActions, ArticlesDialogContent, ArticlesDialogTitle, articlesShadow } from '#root/src/components/UI/muiPrimitives';

export default function AdDetailsModal(props) {

    let { setModalShow, ad, previewData } = props;

    useEffect(() => {

        console.log("Mounted")

    }, []);

    const closeModal = () => {
        // console.log("WHYYYY")
        setModalShow(false)
    }

    return (

        <Box>

            <ArticlesDialog
                open
                onClose={closeModal}
            >

                <ArticlesDialogTitle onClose={closeModal}>Ad Details</ArticlesDialogTitle>

                <ArticlesDialogContent>

                    <Typography component="p" sx={{ mb: 1 }}>Advertiser: <b>{ad?.business}</b></Typography>
                    <Typography component="p" sx={{ mb: 0 }}>Ad ID: <b>{previewData?._id || ad._id}</b></Typography>

                    <Divider sx={{ my: 2 }} />

                    <Box sx={{ mb: 1 }}>This ad is being shown to you for the following reasons</Box>

                    {/* <hr className="border w-100 border-white" /> */}

                    {ad.city ?
                        <Box>

                            <Typography variant="h4" sx={{ mb: 1 }}>
                                {ad.business}
                            </Typography>

                            <Box>Is advertising to all zip codes within a</Box>
                            <ArticlesBadge sx={{ bgcolor: '#000', color: '#fff', boxShadow: articlesShadow }}>15 Mile Radius</ArticlesBadge>
                            <Box>of it&apos;s business</Box>

                            <Divider sx={{ my: 2, width: 0.5 }} />

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Box>Your Zip code</Box>
                                <ArticlesBadge sx={{ bgcolor: '#000', color: '#fff', boxShadow: articlesShadow }}>00000</ArticlesBadge>
                                <Box>is</Box>
                                <ArticlesBadge sx={{ bgcolor: '#000', color: '#fff', boxShadow: articlesShadow }}>4.2 miles away</ArticlesBadge>
                            </Box>
                        </Box>
                        :
                        <Box>

                            <Typography variant="h4" sx={{ mb: 1 }}>
                                {ad.business}
                            </Typography>

                            <Box>Is advertising to all users</Box>

                        </Box>
                    }

                    <Box sx={{ flexGrow: 1 }} />
                    <Divider sx={{ my: 2, width: 1 }} />

                    <Box sx={{ lineHeight: 1.25, mb: 2 }}>Ads we display to you will always be transparent as to why you are seeing them.</Box>

                    <Link href={'https://articles.media/settings/account'} newPage>
                    
                        <ArticlesButton
                            small
                        >
                            Settings
                        </ArticlesButton>
                       
                    </Link>
                </ArticlesDialogContent>

                <ArticlesDialogActions sx={{ justifyContent: 'center' }}>
                    <ArticlesButton
                        variant={'articles'}
                        onClick={closeModal}
                    >
                        Close
                    </ArticlesButton>
                </ArticlesDialogActions>

            </ArticlesDialog>

        </Box>

    );
}
