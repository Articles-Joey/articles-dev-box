import ArticlesButton from "../UI/Button";
import Box from '@mui/material/Box';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import {
    ArticlesDialog,
    ArticlesDialogActions,
    ArticlesDialogContent,
    ArticlesDialogTitle,
} from '../UI/muiPrimitives';

export default function SignOutModal({
    show,
    setShow,
    action
}) {

    return (
        <ArticlesDialog
            open={show}
            onClose={() => setShow(false)}
        >
            <ArticlesDialogTitle>Confirm Sign Out</ArticlesDialogTitle>

            <ArticlesDialogContent>

                Are you sure you want to sign out? This will also sign you out on https://articles.media and other Articles Media services.

            </ArticlesDialogContent>

            <ArticlesDialogActions>

                <ArticlesButton
                    variant="articles"
                    onClick={() => {
                        setShow(false)
                    }}
                >
                    <ReplayIcon fontSize="inherit" sx={{ mr: 1 }} />
                    <Box component="span">Cancel</Box>
                </ArticlesButton>

                <ArticlesButton
                    variant="articles"
                    onClick={() => {
                        action();
                        setShow(false)
                    }}
                >
                    <CloseIcon fontSize="inherit" sx={{ mr: 1 }} />
                    Confirm
                </ArticlesButton>

            </ArticlesDialogActions>

        </ArticlesDialog>
    )
}
