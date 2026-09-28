import { useState } from "react";
import ArticlesButton from "../UI/Button"
import useMainSiteStatus from "#root/src/hooks/useMainSiteStatus";
import useAuthSiteStatus from "#root/src/hooks/useAuthSiteStatus";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ArticlesBadge, ArticlesDialog, ArticlesDialogActions, ArticlesDialogContent, ArticlesDialogTitle } from '../UI/muiPrimitives';

export default function StatusModal({
    show,
    setShow,
    useSocketStore
}) {

    const socket = useSocketStore((state) => state.socket);

    const [showMainDetails, setShowMainDetails] = useState(false);
    const [showAuthDetails, setShowAuthDetails] = useState(false);

    const getStatusCode = (data, error, loading) => {
        if (loading) return "...";
        if (error) return error.response?.status || "Error";
        if (data) return "200";
        return "-";
    }

    const {
        data: mainSiteStatus,
        error: mainSiteStatusError,
        isLoading: mainSiteStatusLoading,
        mutate: mainSiteStatusMutate
    } = useMainSiteStatus({
        disable: process.env.NODE_ENV !== "development"
    });

    const {
        data: authSiteStatus,
        error: authSiteStatusError,
        isLoading: authSiteStatusLoading,
        mutate: authSiteStatusMutate
    } = useAuthSiteStatus({
        disable: process.env.NODE_ENV !== "development"
    });

    function openFolder(folderName) {

        socket.emit("open-folder", folderName, (response) => {
            if (response.success) {
                console.log(`Opened folder: ${folderName}`);
            } else {
                console.error(`Failed to open folder: ${folderName}`, response.error);
            }
        });

    }

    return (
        <ArticlesDialog open={show} onClose={() => setShow(false)}>

            <ArticlesDialogTitle>Status Details</ArticlesDialogTitle>

            <ArticlesDialogContent>

                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1, mb: 1 }}>

                    <Typography variant="h6">Main Site Status: <ArticlesBadge sx={{ color: '#fff', bgcolor: mainSiteStatus ? 'success.main' : 'error.main' }}>{getStatusCode(mainSiteStatus, mainSiteStatusError, mainSiteStatusLoading)}</ArticlesBadge></Typography>

                    <ArticlesButton variant="link" size="sm" sx={{ p: 0 }} onClick={() => setShowMainDetails(!showMainDetails)}>
                        {showMainDetails ? 'Hide' : 'View'} More
                    </ArticlesButton>

                    <ArticlesButton
                        variant="link"
                        size="sm"
                        sx={{ p: 0, display: 'inline-flex', ml: 1 }}
                        onClick={() => {
                            openFolder("articles.media")
                        }}
                    >
                        Open Folder
                    </ArticlesButton>

                </Box>
                {showMainDetails && (
                    <Box component="pre" sx={{ whiteSpace: 'pre-wrap', overflowX: 'auto' }}>
                        {mainSiteStatusLoading && 'Loading...'}
                        {mainSiteStatusError && `Error: ${mainSiteStatusError.message}`}
                        {mainSiteStatus && JSON.stringify(mainSiteStatus, null, 2)}
                    </Box>
                )}

                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1, mb: 1 }}>

                    <Typography variant="h6">Auth Site Status: <ArticlesBadge sx={{ color: '#fff', bgcolor: authSiteStatus ? 'success.main' : 'error.main' }}>{getStatusCode(authSiteStatus, authSiteStatusError, authSiteStatusLoading)}</ArticlesBadge></Typography>

                    <ArticlesButton variant="link" size="sm" sx={{ p: 0 }} onClick={() => setShowAuthDetails(!showAuthDetails)}>
                        {showAuthDetails ? 'Hide' : 'View'} More
                    </ArticlesButton>

                    <ArticlesButton
                        variant="link"
                        size="sm"
                        sx={{ p: 0, display: 'inline-flex', ml: 1 }}
                        onClick={() => {
                            openFolder("accounts.articles.media")
                        }}
                    >
                        Open Folder
                    </ArticlesButton>

                </Box>
                {showAuthDetails && (
                    <Box component="pre" sx={{ whiteSpace: 'pre-wrap', overflowX: 'auto' }}>
                        {authSiteStatusLoading && 'Loading...'}
                        {authSiteStatusError && `Error: ${authSiteStatusError.message}`}
                        {authSiteStatus && JSON.stringify(authSiteStatus, null, 2)}
                    </Box>
                )}

            </ArticlesDialogContent>

            <ArticlesDialogActions>

                <ArticlesButton
                    variant="articles"
                    onClick={() => {
                        setShow(false)
                    }}
                >
                    Close
                </ArticlesButton>

            </ArticlesDialogActions>

        </ArticlesDialog>
    )

}
