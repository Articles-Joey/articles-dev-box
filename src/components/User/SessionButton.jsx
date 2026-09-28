"use client";
import { lazy, useState } from "react";

import useUserDetails from "#root/src/hooks/User/useUserDetails";
import useUserToken from "#root/src/hooks/User/useUserToken";

import SignInButton from "#root/src/components/User/SignInButton";
import ViewUserModal from "#root/src/components/UI/ViewUserModal/ViewUserModal";
import ArticlesButton from "#root/src/components/UI/Button";

import FriendsList from "#root/src/components/Friends/FriendsList";
import SignOutModal from "#root/src/components/User/SignOutModal";
import Box from '@mui/material/Box';
import GroupsIcon from '@mui/icons-material/Groups';
import LogoutIcon from '@mui/icons-material/Logout';

const Textfit = lazy(() => import('../UI/Textfit').then(module => ({ default: module.Textfit })));

export default function SessionButton({
    port,
    friendsButton,
    enableTextfit = false,
    size = "sm",
}) {

    const {
        data: userToken,
        error: userTokenError,
        isLoading: userTokenLoading,
        mutate: userTokenMutate
    } = useUserToken(
        port
    );

    const {
        data: userDetails,
        error: userDetailsError,
        isLoading: userDetailsLoading,
        mutate: userDetailsMutate
    } = useUserDetails({
        token: userToken
    });

    const [showFriendsModal, setShowFriendsModal] = useState(false);

    const [confirmSignOut, setConfirmSignOut] = useState(false);

    return (
        <>
            {!userDetails ?
                <Box sx={{ mb: 1 }}><SignInButton size={size} /></Box>
                :
                <Box className="SessionButton" sx={{ width: 1, display: 'flex', alignItems: 'stretch', mb: 1 }}>

                    <ViewUserModal
                        buttonType="Link"
                        sx={{ width: 1 }}
                    >
                        <ArticlesButton
                            sx={{ width: 1, height: 1 }}
                            // small
                            size={size}
                            onClick={() => {
                                // setShowSignOutModal(true)
                                console.log("userDetails", userDetails)
                            }}
                        >
                            {/* <i className="fad fa-sign-out"></i> */}
                            {enableTextfit ?
                                <Textfit 
                                    maxFontSize={11}
                                    minFontSize={6}
                                    justifyContent="center"
                                >
                                    <LogoutIcon fontSize="inherit" sx={{ mr: 0.5 }} />
                                    Logged in as {userDetails?.display_name || "Unknown User"}
                                </Textfit>
                                :
                                <>
                                    <LogoutIcon fontSize="inherit" sx={{ mr: 0.5 }} />
                                    Logged in as {userDetails?.display_name || "Unknown User"}
                                </>
                            }
                        </ArticlesButton>
                    </ViewUserModal>

                    {confirmSignOut &&
                        <SignOutModal
                            show={confirmSignOut}
                            setShow={setConfirmSignOut}
                            action={() => {
                                const baseUrl = '';

                                const logoutLink = `${baseUrl}/api/signout?redirect=${encodeURIComponent(window.location.href)}`;

                                // console.log("Start of logging out...")
                                window.location.assign(logoutLink);
                            }}
                        />
                    }

                    {showFriendsModal &&
                        <FriendsList
                            show={showFriendsModal}
                            setShow={setShowFriendsModal}
                            componentType="modal"
                        // user_id={userDetails?.id}
                        // user_token={userToken}
                        />
                    }

                    {friendsButton &&
                        <ArticlesButton
                            className={""}
                            small
                            title="My Friends"
                            onClick={() => {
                                setShowFriendsModal(true)
                            }}
                        >
                            <GroupsIcon fontSize="inherit" />
                        </ArticlesButton>
                    }

                    <ArticlesButton
                        className={""}
                        small
                        title="Sign out"
                        onClick={() => {
                            setConfirmSignOut(true)
                        }}
                    >
                        <LogoutIcon fontSize="inherit" />
                    </ArticlesButton>

                </Box>
            }
        </>
    )

}
