import classNames from "classnames"
import Box from '@mui/material/Box';

export default function UserProfilePhoto(props) {

    const { profile_photo, width, alt, hideDefault, activityStatus, user_id } = props

    if (profile_photo?.key) {

        return (
            <Box
                data-using-react-profile-photo="true"
                className={classNames('profile-photo-wrap')}
                sx={{ position: 'relative', width: width || 1, height: width || 1 }}
            >
                <ActivityStatus
                    activityStatus={activityStatus}
                    user_id={user_id}
                />
                <Box component="img"
                    src={`${process.env.NEXT_PUBLIC_CDN}${profile_photo.key}`}
                    sx={{ width: 1, height: 1, objectFit: 'contain' }}
                    // width="55px"
                    // height="55px"
                    alt={alt || 'Profile photo of a user'}
                />
            </Box>
        )

    } else {

        return (
            <Box
                data-using-react-profile-photo="true"
                className={classNames(
                    'profile-photo-wrap',
                    { 'profile-photo-hidden': hideDefault })
                }
                sx={{
                    position: 'relative',
                    width: width || 1,
                    height: width || 1,
                    display: hideDefault ? 'none' : 'block',
                }}
            >
                <ActivityStatus
                    activityStatus={activityStatus}
                    user_id={user_id}
                />
                <Box component="img"
                    src={`${process.env.NEXT_PUBLIC_CDN}profile_photos/starter/articles.jpg`}
                    sx={{ width: 1, height: 1, objectFit: 'contain' }}
                    // width="55px"
                    // height="55px"
                    alt={alt || 'Profile photo of a user'}
                />
            </Box>
        )

    }

}

function ActivityStatus({
    activityStatus,
    user_id
}) {

    if (!activityStatus || !user_id) {
        return
    }

    return (
        <Box
            data-user_id={user_id}
            className={classNames(
                'online-status',
                {
                    'status-online': (activityStatus?.status == 'Online' || user_id == "630f0b337c52851e754b03f7"),
                    'status-offline': activityStatus?.status == 'Offline',
                    'status-away': activityStatus?.status == 'Away',
                    // Maybe one day show that friends are in a game or on a page if they want to share, we already collect this data anyway!
                    'activity-active': false,
                }
            )}
            sx={{
                position: 'absolute',
                width: 10,
                height: 10,
                bgcolor: (activityStatus?.status === 'Online' || user_id === '630f0b337c52851e754b03f7') ? 'success.main' : 'grey.500',
                bottom: 1,
                right: 1,
                border: '2px solid',
                borderColor: (activityStatus?.status === 'Online' || user_id === '630f0b337c52851e754b03f7') ? '#009b22' : '#000',
                zIndex: 1,
            }}
        >

        </Box>
    )
}
