"use client";
import { lazy } from 'react';
import ArticlesDevStatusBadge from './ArticlesDevStatusBadge';
import ScreenshotModeHandler from '#root/src/components/UI/ScreenshotModeHandler';

const InfoModal = lazy(() => import('../Games/InfoModal'));
const CreditsModal = lazy(() => import('../Games/Credits/CreditsModal'));
const FriendsList = lazy(() => import('../Friends/FriendsList'));
const SettingsModal = lazy(() => import('../Games/Settings/SettingsModal'));
const InviteModal = lazy(() => import('../Games/InviteModal'));
const StatusModal = lazy(() => import('./StatusModal'));

export default function GlobalClientModals({
    useStore,
    useAudioStore,
    useTouchControlsStore,
    useSocketStore,

    packageInfo,
    settingsModalConfig,
    infoModalConfig
}) {

    const showInfoModal = useStore((state) => state.showInfoModal)
    const setShowInfoModal = useStore((state) => state.setShowInfoModal)

    const showSettingsModal = useStore((state) => state.showSettingsModal)
    const setShowSettingsModal = useStore((state) => state.setShowSettingsModal)

    const showCreditsModal = useStore((state) => state.showCreditsModal)
    const setShowCreditsModal = useStore((state) => state.setShowCreditsModal)

    const showFriendsModal = useStore((state) => state.showFriendsModal)
    const setShowFriendsModal = useStore((state) => state.setShowFriendsModal)

    const showInviteModal = useStore((state) => state.showInviteModal)
    const setShowInviteModal = useStore((state) => state.setShowInviteModal)

    const showDevStatusModal = useStore((state) => state.showDevStatusModal)
    const setShowDevStatusModal = useStore((state) => state.setShowDevStatusModal)

    if (!settingsModalConfig) {
        console.error("GlobalClientModals: settingsModalConfig is not provided!");
        return
    }

    return (
        <>
            {showInfoModal &&
                <InfoModal
                    show={showInfoModal}
                    setShow={setShowInfoModal}
                    useStore={useStore}
                    packageInfo={packageInfo}
                    infoModalConfig={infoModalConfig}
                />
            }

            {showSettingsModal &&
                <SettingsModal
                    show={showSettingsModal}
                    setShow={setShowSettingsModal}
                    store={useStore}
                    useAudioStore={useAudioStore}
                    useTouchControlsStore={useTouchControlsStore}
                    useSocketStore={useSocketStore}
                    config={
                        settingsModalConfig
                    }
                />
            }

            {showCreditsModal &&
                <CreditsModal
                    show={showCreditsModal}
                    setShow={setShowCreditsModal}
                />
            }

            {showFriendsModal &&
                <FriendsList
                    componentType="modal"
                    show={showFriendsModal}
                    setShow={setShowFriendsModal}
                />
            }

            {showInviteModal &&
                <InviteModal
                    show={showInviteModal}
                    setShow={setShowInviteModal}
                    useSocketStore={useSocketStore}
                />
            }

            {/* Dev related tools */}
            {/* StatusModal & ArticlesDevStatusBadge && ScreenshotModeHandler */}
            <>
                {showDevStatusModal &&
                    <StatusModal
                        show={showDevStatusModal}
                        setShow={setShowDevStatusModal}
                        useSocketStore={useSocketStore}
                    />
                }
    
                {process.env.NODE_ENV === 'development' &&
                    <ArticlesDevStatusBadge
                        useStore={useStore}
                    />
                }

                {/* TODO - I need a new home :( */}
                <ScreenshotModeHandler
                    useStore={useStore}
                />

            </>

        </>
    )
}

