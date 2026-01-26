// import useUserFriends from "@/hooks/Friends/useUserFriends";
import useUserFriends from "#root/src/hooks/User/useUserFriends";
import ArticlesButton from "../UI/Button"
import { Modal } from "react-bootstrap";

export default function FriendsList({
    show,
    setShow,
    componentType,
    className,
    style = {},
    user_id,
    user_token,
    id = null,
    allowInvite = false,
    inviteFunction = null,
    modalBackdropClassName = ''
}) {

    // const { style } = props;

    const {
        data: friends,
        error: friendsError,
        isLoading: friendsLoading,
        // isValidating: friendsValidating,
        mutate: mutateFriends,
    } = useUserFriends({
        user_id: user_id,
        user_token: user_token,
    });

    if (!componentType || componentType == 'list') {

        if (!friendsLoading && friends && friends.length > 0) {
            return (
                <ul className={className} style={style}>
                    {friends.map((friend) => (
                        <li key={friend.user_id}>
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
                modalBackdropClassName={modalBackdropClassName}
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
                        <ul>
                            {friends.map((friend) => (
                                <li key={friend.user_id}>
                                    {friend?.populated_user?.username} - {friend?.populated_user?.display_name || 'No Display Name'}
                                </li>
                            ))}
                        </ul>
                    }

                </Modal.Body>

                <Modal.Footer className="justify-content-between">

                    <ArticlesButton
                        variant="articles"
                        onClick={() => {
                            mutateFriends()
                        }}
                    >
                        <i className="fad fa-redo"></i>
                    </ArticlesButton>

                    <ArticlesButton
                        variant="articles"
                        onClick={() => {
                            setShow(false)
                        }}
                    >
                        Close
                    </ArticlesButton>

                </Modal.Footer>

            </Modal>
        )
    }

}