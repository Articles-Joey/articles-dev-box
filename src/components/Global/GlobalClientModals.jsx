"use client";
import { lazy } from 'react';

const InfoModal = lazy(() => import('../Games/InfoModal'));
const CreditsModal = lazy(() => import('../Games/Credits/CreditsModal'));
const FriendsList = lazy(() => import('../Friends/FriendsList'));
const SettingsModal = lazy(() => import('../Games/Settings/SettingsModal'));
const InviteModal = lazy(() => import('../Games/InviteModal'));

import useUserDetails from '../../hooks/User/useUserDetails';
import useUserToken from '../../hooks/User/useUserToken';

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

    const {
        data: userToken,
        error: userTokenError,
        isLoading: userTokenLoading,
        mutate: userTokenMutate
    } = useUserToken(
        process.env.NEXT_PUBLIC_GAME_PORT
    );

    const {
        data: userDetails,
        error: userDetailsError,
        isLoading: userDetailsLoading,
        mutate: userDetailsMutate
    } = useUserDetails({
        token: userToken
    });

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

        </>
    )
}