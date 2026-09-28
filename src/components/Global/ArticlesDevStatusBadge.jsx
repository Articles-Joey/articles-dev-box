import useMainSiteStatus from "#root/src/hooks/useMainSiteStatus";
import useAuthSiteStatus from "#root/src/hooks/useAuthSiteStatus";
import classNames from 'classnames';
import Box from '@mui/material/Box';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export default function ArticlesDevStatusBadge({
    useStore
}) {

    const {
        data: mainSiteStatus,
        error: mainSiteStatusError,
        isLoading: mainSiteStatusLoading,
        mutate: mainSiteStatusMutate
    } = useMainSiteStatus({
        disable: (
            process.env.NODE_ENV !== "development"
            ||
            process.env.NEXT_PUBLIC_ENABLE_ARTICLES === "false"
        )
    });

    const {
        data: authSiteStatus,
        error: authSiteStatusError,
        isLoading: authSiteStatusLoading,
        mutate: authSiteStatusMutate
    } = useAuthSiteStatus({
        disable: (
            process.env.NODE_ENV !== "development"
            ||
            process.env.NEXT_PUBLIC_ENABLE_ARTICLES === "false"
        )
    });

    const showDevStatusModal = useStore((state) => state.showDevStatusModal)
    const setShowDevStatusModal = useStore((state) => state.setShowDevStatusModal)

    return (
        <Box
                onClick={() => {
                    setShowDevStatusModal(true)
                }}
                className={classNames(
                    `articles-dev-status`,
                    {
                        "main-connected": mainSiteStatus,
                        "auth-connected": authSiteStatus
                    }
                )}
                sx={{
                    '@keyframes grow-shrink': {
                        '0%, 100%': { transform: 'translateY(-50px)' },
                        '50%': { transform: 'translateY(0)' },
                    },
                    transform: 'translateY(-40px)',
                    zIndex: (theme) => theme.zIndex.modal + 1,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 50,
                    height: 50,
                    m: 0,
                    p: 0,
                    bgcolor: mainSiteStatus ? 'success.main' : 'warning.main',
                    color: '#fff',
                    fontFamily: (theme) => theme.typography.fontFamily,
                    animation: 'grow-shrink 2s ease-in',
                    border: '4px solid',
                    borderColor: authSiteStatus ? 'primary.main' : 'error.main',
                    cursor: 'pointer',
                }}
            >
                <ThumbUpIcon />
            </Box>
    )

}
