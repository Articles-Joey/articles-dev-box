import { useEffect, useState, useRef, lazy } from "react";

import ArticlesButton from '#root/src/components/UI/Button';
import Box from '@mui/material/Box';
import { ArticlesDialog, ArticlesDialogActions, ArticlesDialogContent, ArticlesDialogTitle } from '#root/src/components/UI/muiPrimitives';

const FriendsList = lazy(() => import('../Friends/FriendsList'));

export default function InviteModal({
    show,
    setShow,
    useSocketStore,
    // useStore,
}) {

    const socket = useSocketStore((state) => state?.socket);

    const [showModal, setShowModal] = useState(true)

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

                <ArticlesDialogTitle onClose={() => setShowModal(false)}>Invite Players</ArticlesDialogTitle>

                <ArticlesDialogContent sx={{ p: 0 }}>

                    <Box sx={{ p: 3 }}>

                        <FriendsList
                            componentType="list"
                            show={show}
                            setShow={setShow}
                            allowInvite={() => {
                                socket.emit('invitePlayer', {
                                    ...show
                                });
                            }}
                        />

                    </Box>

                </ArticlesDialogContent>

                <ArticlesDialogActions>

                    <Box />

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
