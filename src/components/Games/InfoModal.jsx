import { useEffect, useState, useRef } from "react";

// import packageInfo from '@/package.json';

import ArticlesButton from '#root/src/components/UI/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ArticlesDialog, ArticlesDialogActions, ArticlesDialogContent, ArticlesDialogTitle } from '#root/src/components/UI/muiPrimitives';
// import { useModalNavigation } from "@/hooks/useModalNavigation";

// import B from "@articles-media/articles-gamepad-helper/dist/img/Xbox UI/B.svg";
// import { useStore } from "@/hooks/useStore";

export default function InfoModal({
    show,
    setShow,

    useStore,
    packageInfo,
    infoModalConfig
}) {

    const [showModal, setShowModal] = useState(true)

    const darkMode = useStore(state => state.darkMode)

    const elementsRef = useRef([]);
    // useModalNavigation(elementsRef, () => setShowModal(false));

    return (
        <>

            <ArticlesDialog
                open={showModal}
                onExited={() => {
                    setShow(false)
                }}
                onClose={() => {
                    setShowModal(false)
                }}
            >

                <ArticlesDialogTitle onClose={() => setShowModal(false)}>{process.env.NEXT_PUBLIC_GAME_NAME} Info</ArticlesDialogTitle>

                <ArticlesDialogContent sx={{ p: 0 }}>

                    {infoModalConfig?.contentOverride ?
                        <>
                            {infoModalConfig?.contentOverride}
                        </>
                        :
                        <>
                            {!infoModalConfig?.hidePreviewImage &&
                                <Box sx={{ width: 1, aspectRatio: '16 / 9' }}>
                                    <Box component="img"
                                        src={infoModalConfig?.previewImage}
                                        alt="Game Preview"
                                        sx={{
                                            width: 1,
                                            height: 1,
                                            objectFit: infoModalConfig?.previewImageObjectFit || 'cover' 
                                        }}
                                    />
                                </Box>
                            }

                            <Box sx={{ p: 3 }}>

                                {infoModalConfig?.prependContent &&
                                    <Box sx={{ mt: 2 }}>
                                        {infoModalConfig.prependContent}
                                    </Box>
                                }

                                <Box>
                                    {packageInfo?.description}
                                </Box>

                                {infoModalConfig?.appendContent &&
                                    <Box sx={{ mt: 2 }}>
                                        {infoModalConfig.appendContent}
                                    </Box>
                                }

                            </Box>
                        </>
                    }

                </ArticlesDialogContent>

                <ArticlesDialogActions>

                    <Typography variant="body2">Version: {packageInfo?.version}</Typography>

                    <ArticlesButton
                        // ref={el => elementsRef.current[0] = el}
                        variant="outline-dark"
                        onClick={() => {
                            setShow(false)
                        }}
                        sx={{ display: 'flex', alignItems: 'center' }}
                    >
                        {/* <img src={B.src} className="controller-only me-1" alt="Close" /> */}
                        Close
                    </ArticlesButton>

                </ArticlesDialogActions>

            </ArticlesDialog>

        </>
    )

}
