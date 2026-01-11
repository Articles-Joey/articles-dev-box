import classNames from "classnames"

export default function UserProfilePhoto(props) {

    const { profile_photo, width, alt, hideDefault, activityStatus, user_id } = props

    if (profile_photo?.key) {

        return (
            <div
                data-using-react-profile-photo="true"
                className={`profile-photo-wrap ${!width ? "w-100 h-100" : ''}`}
                style={{
                    ...(width && {
                        width: width,
                        height: width
                    })
                }}
            >
                <ActivityStatus
                    activityStatus={activityStatus}
                    user_id={user_id}
                />
                <img className="w-100 h-100"
                    src={`${process.env.NEXT_PUBLIC_CDN}${profile_photo.key}`}
                    style={{ objectFit: 'contain' }}
                    // width="55px"
                    // height="55px"
                    alt={alt || 'Profile photo of a user'}
                />
            </div>
        )

    } else {

        return (
            <div
                data-using-react-profile-photo="true"
                className={classNames(
                    'profile-photo-wrap',
                    {
                        "w-100 h-100": !width,
                        'd-none': hideDefault
                    })
                }
                style={{
                    ...(width && {
                        width: width,
                        height: width
                    })
                }}
            >
                <ActivityStatus
                    activityStatus={activityStatus}
                    user_id={user_id}
                />
                <img className="w-100 h-100"
                    src={`${process.env.NEXT_PUBLIC_CDN}profile_photos/starter/articles.jpg`}
                    style={{ objectFit: 'contain' }}
                    // width="55px"
                    // height="55px"
                    alt={alt || 'Profile photo of a user'}
                />
            </div>
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
        <div
            data-user_id={user_id}
            className={classNames(
                `online-status`,
                {
                    'status-online': (activityStatus?.status == 'Online' || user_id == "630f0b337c52851e754b03f7"),
                    'status-offline': activityStatus?.status == 'Offline',
                    'status-away': activityStatus?.status == 'Away',
                    // Maybe one day show that friends are in a game or on a page if they want to share, we already collect this data anyway!
                    'activity-active': false,
                }
            )}
        >

        </div>
    )
}