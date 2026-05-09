"use client";
import { lazy, useState } from "react";

import useUserDetails from "#root/src/hooks/User/useUserDetails";
import useUserToken from "#root/src/hooks/User/useUserToken";

import SignInButton from "#root/src/components/User/SignInButton";
import ViewUserModal from "#root/src/components/UI/ViewUserModal/ViewUserModal";
import ArticlesButton from "#root/src/components/UI/Button";

import FriendsList from "#root/src/components/Friends/FriendsList";
import SignOutModal from "#root/src/components/User/SignOutModal";

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
                <SignInButton className={"mb-2"} size={size} />
                :
                <div className='SessionButton w-100 d-flex align-items-stretch mb-2'>

                    <ViewUserModal
                        buttonType="Link"
                        className={"w-100"}
                    >
                        <ArticlesButton
                            className={"w-100 h-100"}
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
                                    <i className="fad fa-sign-out"></i>
                                    Logged in as {userDetails?.display_name || "Unknown User"}
                                </Textfit>
                                :
                                <>
                                    <i className="fad fa-sign-out"></i>
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
                            <i className="fad fa-users"></i>
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
                        <i className="fad fa-sign-out"></i>
                    </ArticlesButton>

                </div>
            }
        </>
    )

}