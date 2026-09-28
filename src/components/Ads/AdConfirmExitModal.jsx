import { useEffect } from 'react';

// import Link from 'next/link'
import Link from '#root/src/components/UI/Link';

// import ROUTES from 'components/constants/routes';
// import ArticlesButton from '../Articles/Button';
import ArticlesButton from '#root/src/components/UI/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import LinkIcon from '@mui/icons-material/Link';
import { ArticlesDialog, ArticlesDialogActions, ArticlesDialogContent, ArticlesDialogTitle } from '#root/src/components/UI/muiPrimitives';

export default function AdConfirmExitModal(props) {

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

                <ArticlesDialogTitle onClose={closeModal}>Confirm Exit</ArticlesDialogTitle>

                <ArticlesDialogContent>

                    <Box sx={{ width: 1, aspectRatio: '16 / 9', bgcolor: '#000', mb: 2 }}>

                    </Box>

                    <Typography component="p" sx={{ mb: 1 }}>This advertiser has been approved and verified to display ads but always be cautious when interacting with ads. Any offsite interactions are at your own risk and should be approached with caution. We can not be held responsible for any issues that may arise.</Typography>

                </ArticlesDialogContent>

                <ArticlesDialogActions>

                    <ArticlesButton
                        variant={'articles'}
                        onClick={closeModal}
                    >
                        <CloseIcon fontSize="inherit" sx={{ mr: 0.75 }} />
                        Close
                    </ArticlesButton>

                    <Link
                        href={ad?.website}
                        newPage
                        // target="_blank"
                        // rel="noreferrer"
                    >
                        <ArticlesButton
                            variant={'articles'}
                            onClick={closeModal}
                        >
                            <LinkIcon fontSize="inherit" sx={{ mr: 0.75 }} />
                            Proceed
                        </ArticlesButton>
                    </Link>

                </ArticlesDialogActions>

            </ArticlesDialog>

        </Box>

    );
}
