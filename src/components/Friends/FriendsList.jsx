// import useUserFriends from "@/hooks/Friends/useUserFriends";
import useUserFriends from "#root/src/hooks/User/useUserFriends";
import { Modal } from "react-bootstrap";
import ArticlesButton from "../UI/Button";

import useUserToken from "#root/src/hooks/User/useUserToken.js";
import useUserDetails from "#root/src/hooks/User/useUserDetails.js";
import { useMemo } from "react";

export default function FriendsList({
    show,
    setShow,
    componentType,
    className,
    style = {},
    // user_id,
    // user_token,
    id = null,
    allowInvite = false,
    inviteFunction = null,
    modalBackdropClassName = '',
    passedPort
}) {

    const port = window.location.port || passedPort;
    // const port = 3030;

    console.log("Logged a port of ", port, " passedPort: ", passedPort)

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

    // const { style } = props;

    const {
        data: friends,
        error: friendsError,
        isLoading: friendsLoading,
        // isValidating: friendsValidating,
        mutate: mutateFriends,
    } = useUserFriends({
        user_id: userDetails?.user_id,
        user_token: userToken,
    });

    const friendsWrapped = useMemo(() => {

        return <div>
            {friends?.map((friend) => (
                <div
                    key={friend.friend_id}
                    className="d-flex align-items-center justify-content-between border p-1"
                >

                    <div>

                        <img
                            src={friend?.populated_user?.photo_url}
                            alt={`${friend?.populated_user?.username}'s avatar`}
                            width={32}
                            height={32}
                            className="me-2"
                        />

                        {friend?.populated_user?.username} - {friend?.populated_user?.display_name || 'No Display Name'}

                    </div>

                    <div>
                        {allowInvite && <ArticlesButton
                            variant="articles"
                            onClick={() => {
                                // mutateFriends()
                                allowInvite(friend)
                            }}
                        >
                            <i className="fad fa-paper-plane me-2"></i>
                            <span>Invite</span>
                        </ArticlesButton>}
                        <ArticlesButton
                            variant="articles"
                            onClick={() => {
                                // mutateFriends()
                                console.log("View friend details for ", friend)
                                window.open(`https://articles.media/settings/friends?friend_relationship_id=${friend?._id}`, '_blank')
                            }}
                        >
                            <i className="fad fa-info me-0"></i>
                        </ArticlesButton>
                        <ArticlesButton
                            variant="articles"
                            onClick={() => {
                                console.log("Start Message")
                                window.open(`https://articles.media/messages?startMsg=${friend?.friend_id}`, '_blank')
                            }}
                        >
                            <i className="fad fa-envelope me-0"></i>
                        </ArticlesButton>
                    </div>

                </div>
            ))}
        </div>

    }, [friends])

    if (!componentType || componentType == 'list') {

        if (!friendsLoading && friends && friends.length > 0) {

            return friendsWrapped

            return (
                <ul className={className} style={style}>
                    {friends.map((friend) => (
                        <li key={friend.friend_id}>
                            {friend?.populated_user?.username} - {friend?.populated_user?.display_name || 'No Display Name'}
                        </li>
                    ))}
                </ul>
            )
        }

    }

    if (componentType.toLowerCase() == 'modal') {
        return (
            <Modal
                show={show}
                size={'md'}
                className={`articles-modal ${className}`}
                // modalBackdropClassName={modalBackdropClassName}
                backdropClassName={modalBackdropClassName}
                centered
                onHide={() => setShow(false)}
                style={style}
                id={id}
            >

                <Modal.Header>
                    <Modal.Title>
                        Friends
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    {friendsLoading &&
                        <div className="d-flex align-items-center">
                            <i className="fad fa-spinner-third fa-spin fa-2x"></i>
                            <div>Loading...</div>
                        </div>
                    }

                    {!friendsLoading && friends && friends.length == 0 &&
                        <div>
                            No friends to show.
                        </div>
                    }

                    {!friendsLoading && friends && friends.length > 0 &&
                        friendsWrapped
                    }

                </Modal.Body>

                <Modal.Footer className="justify-content-between">

                    <ArticlesButton
                        variant="articles"
                        onClick={() => {
                            mutateFriends()
                        }}
                    >
                        <i className="fad fa-redo me-2"></i>
                        <span>Refresh</span>
                    </ArticlesButton>

                    <ArticlesButton
                        variant="articles"
                        onClick={() => {
                            setShow(false)
                        }}
                    >
                        <i className="fad fa-times me-2"></i>
                        Close
                    </ArticlesButton>

                </Modal.Footer>

            </Modal>
        )
    }

}