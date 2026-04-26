import useUserDetails from "#root/src/hooks/User/useUserDetails";
import useUserToken from "#root/src/hooks/User/useUserToken";

import SignInButton from "#root/src/components/User/SignInButton";
import ViewUserModal from "#root/src/components/UI/ViewUserModal/ViewUserModal";
import ArticlesButton from "#root/src/components/UI/Button";

export default function SessionButton({
    port
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

    // const baseUrl = process.env.NODE_ENV === 'production' ? "https://accounts.articles.media" : 'http://localhost:3012';

    const baseUrl = '';

    const logoutLink = `${baseUrl}/api/signout`

    return (
        <>
            {!userDetails ?
                <SignInButton className={"mb-2"} />
                :
                <div className='w-100 d-flex align-items-stretch mb-2'>

                    <ViewUserModal
                        buttonType="Link"
                        className={"w-100"}
                    >
                        <ArticlesButton
                            className={"w-100"}
                            small
                            onClick={() => {
                                // setShowSignOutModal(true)
                                console.log("userDetails", userDetails)
                            }}
                        >
                            <i className="fad fa-sign-out"></i>
                            Logged in as {userDetails?.display_name || "Unknown User"}
                        </ArticlesButton>
                    </ViewUserModal>

                    <ArticlesButton
                            className={""}
                            small
                            title="Sign out"
                            onClick={() => {

                                fetch(logoutLink, {
                                    method: 'GET',
                                    headers: {}
                                })
                                    .then(response => response.json())
                                    .then(data => {
                                        console.log("Logout successful:", data);
                                        // window.location.reload();
                                        userTokenMutate(null);
                                        userDetailsMutate(null);
                                    })
                                    .catch((error) => {
                                        console.error("Logout error:", error);
                                    });

                            }}
                        >
                            <i className="fad fa-sign-out"></i>
                        </ArticlesButton>

                </div>
            }
        </>
    )

}