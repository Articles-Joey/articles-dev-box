// import useUserFriends from "@/hooks/Friends/useUserFriends";
import useUserFriends from "#root/src/hooks/User/useUserFriends";
import ArticlesButton from "../UI/Button";

import useUserToken from "#root/src/hooks/User/useUserToken.js";
import useUserDetails from "#root/src/hooks/User/useUserDetails.js";
import { useMemo } from "react";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import InfoIcon from '@mui/icons-material/Info';
import RefreshIcon from '@mui/icons-material/Refresh';
import SendIcon from '@mui/icons-material/Send';
import { ArticlesDialog, ArticlesDialogActions, ArticlesDialogContent, ArticlesDialogTitle } from '../UI/muiPrimitives';

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

        return <Box>
            {friends?.map((friend) => (
                <Box
                    key={friend.friend_id}
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1, border: 1, borderColor: 'divider', p: 1 }}
                >

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>

                        <Box component="img"
                            src={friend?.populated_user?.photo_url}
                            alt={`${friend?.populated_user?.username}'s avatar`}
                            width={32}
                            height={32}
                            sx={{ mr: 1 }}
                        />

                        {friend?.populated_user?.username} - {friend?.populated_user?.display_name || 'No Display Name'}

                    </Box>

                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                        {allowInvite && <ArticlesButton
                            variant="articles"
                            onClick={() => {
                                // mutateFriends()
                                allowInvite(friend)
                            }}
                        >
                            <SendIcon fontSize="inherit" sx={{ mr: 1 }} />
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
                            <InfoIcon fontSize="inherit" />
                        </ArticlesButton>
                        <ArticlesButton
                            variant="articles"
                            onClick={() => {
                                console.log("Start Message")
                                window.open(`https://articles.media/messages?startMsg=${friend?.friend_id}`, '_blank')
                            }}
                        >
                            <EmailIcon fontSize="inherit" />
                        </ArticlesButton>
                    </Box>

                </Box>
            ))}
        </Box>

    }, [friends, allowInvite])

    if (!componentType || componentType == 'list') {

        if (!friendsLoading && friends && friends.length > 0) {

            return friendsWrapped
        }

    }

    if (componentType?.toLowerCase() == 'modal') {
        return (
            <ArticlesDialog
                open={show}
                className={className}
                backdropClassName={modalBackdropClassName}
                onClose={() => setShow(false)}
                sx={style}
                id={id}
            >

                <ArticlesDialogTitle>Friends</ArticlesDialogTitle>

                <ArticlesDialogContent>

                    {friendsLoading &&
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <CircularProgress size={28} />
                            <Box>Loading...</Box>
                        </Box>
                    }

                    {!friendsLoading && friends && friends.length == 0 &&
                        <Box>
                            No friends to show.
                        </Box>
                    }

                    {!friendsLoading && friends && friends.length > 0 &&
                        friendsWrapped
                    }

                </ArticlesDialogContent>

                <ArticlesDialogActions>

                    <ArticlesButton
                        variant="articles"
                        onClick={() => {
                            mutateFriends()
                        }}
                    >
                        <RefreshIcon fontSize="inherit" sx={{ mr: 1 }} />
                        <span>Refresh</span>
                    </ArticlesButton>

                    <ArticlesButton
                        variant="articles"
                        onClick={() => {
                            setShow(false)
                        }}
                    >
                        <CloseIcon fontSize="inherit" sx={{ mr: 1 }} />
                        Close
                    </ArticlesButton>

                </ArticlesDialogActions>

            </ArticlesDialog>
        )
    }

}
