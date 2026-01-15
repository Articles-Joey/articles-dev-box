"use client"
import { useState, useEffect, useMemo } from 'react';

// import Link from 'next/link'
import Link from '#root/src/components/UI/Link';

// import dynamic from "next/dynamic";
// import Image from 'next/image';

// import axios from 'axios'

import { differenceInMonths, format } from 'date-fns'

// import { useSelector, useDispatch } from 'react-redux'

import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
// import ProgressBar from 'react-bootstrap/ProgressBar'

// import ROUTES from 'components/constants/routes';

// import convertRegion from 'util/convertRegion';

import '#root/src/styles/components/view-user-modal-badge.scss';
// import "#root/src/styles/components/Ad.scss";

// TODO - ADD BACK IN
import ArticlesDate from '#root/src/components/UI/ArticlesDate';
import UserProfilePhoto from '#root/src/components/UI/UserProfilePhoto';
import usePublicUserData from '#root/src/hooks/User/UserPublic/usePublicUserData';
import IsDev from '#root/src/components/UI/IsDev';
import ArticlesButton from '#root/src/components/UI/Button';

// const Lightbox = dynamic(
//     () => import('@/components/Articles/ArticlesLightbox'),
//     {
//         ssr: false,
//     },
// )

// import { Textfit } from '#root/src/components/UI/Textfit';

// import NewsPreviewImage from '../../News/NewsPreviewImage';

// import BanPanel from './AdminPanels/Bans';
// import VerificationPanel from './AdminPanels/Verification';
// import ModerationPanel from './AdminPanels/Moderation';
// import LayoutsPanel from './AdminPanels/Layouts';
// import StripePanel from './AdminPanels/Stripe';
// import UserDetailsPanel from './AdminPanels/UserDetails';
// import ResetPasswordPanel from './AdminPanels/ResetPassword';
// import SessionsPanel from './AdminPanels/Sessions';

import ProposalsStance from '#root/src/components/UI/ViewUserModal/Panels/ProposalsStance';
import ProposalComments from '#root/src/components/UI/ViewUserModal/Panels/ProposalComments';
import ProposalSentiments from '#root/src/components/UI/ViewUserModal/Panels/ProposalSentiments';
import ProposalSubmissions from './Panels/ProposalSubmissions';
import NewsComments from './Panels/NewsComments';
import NewsSubmissions from './Panels/NewsSubmissions';
import Donations from './Panels/Donations';
import Layouts from './Panels/Layouts';
import Verifications from './Panels/Verifications';
import Achievements from './Panels/Achievements';

import numberWithCommas from '#root/src/util/numberWithCommas';
import usePoliticalParties from '#root/src/hooks/Politics/usePoliticalParties';

// import Tabs from './Tabs';
// import AdminTabs from '#root/src/components/UI/ViewUserModal/AdminTabs';

function ViewUserModal(props) {

    const {
        populated_user,
        hidePhoto,
        visibleItems,
        size,
        className,
        dangerousPopulate,
        user_id,
        buttonType,
        children,
        fakeMembership,
        // name
    } = props;

    const [modalShow, setModalShow] = useState(false);

    const [userData, setUserData] = useState({});

    const [userLayoutsData, setUserLayoutsData] = useState([]);

    const [userDonations, setUserDonations] = useState([]);

    const [lifetimeContribution, setLifetimeContribution] = useState(null);

    // const [ UserNewsComments, setUserNewsComments ] = useState()

    const [userNewsSubmitted, setUserNewsSubmitted] = useState([]);


    const [userProposalsSubmitted, setUserProposalsSubmitted] = useState([]);
    const [viewAllProposalsSubmitted, setViewAllProposalsSubmitted] = useState(false);

    // const userReduxState = useSelector((state) => state.auth.user_details)
    const userReduxState = false

    const { data: politicalParties, isLoading: politicalPartiesIsLoading, mutate: politicalPartiesMutate } = usePoliticalParties()

    // const [userSubmittedCount, setUserSubmittedCount] = useState({});

    // TODO - Set this as localstorage maybe?
    const [contentDisplayTab, setContentDisplayTab] = useState('Proposals Stance');

    const handleClose = () => {
        setModalShow(false);
    }

    useEffect(() => {

        // Store everything on userData by default
        if (populated_user) {
            setUserData({
                ...populated_user
            })
        }

        // if (dangerousPopulate) {
        //     console.log("dangerousPopulate called in ViewUserModal")

        //     // Only populated user details
        //     axios.get('/api/user-public/getUserDetails', {
        //         params: {
        //             user_id: user_id || populated_user?._id
        //         }
        //     })
        //         .then(function (response) {
        //             console.log(response);
        //             setUserData(response.data)
        //         })

        // }

    }, []);

    const [showFullStanceDetails, setShowFullStanceDetails] = useState(false)

    const [activeLayoutProposalSentiments, setActiveLayoutProposalSentiments] = useState([])

    const [usersProposalSentiments, setUsersProposalSentiments] = useState([])

    const { data: publicUserData, isLoading: publicUserDataIsLoading, mutate: publicUserDataMutate } = usePublicUserData(
        ((user_id || populated_user?._id) && (modalShow || dangerousPopulate)) ?
            {
                user_id: (user_id || populated_user?._id)
            }
            :
            null
    )

    const { data: personalUserData, isLoading: personalUserDataIsLoading, mutate: personalUserDataMutate } = usePublicUserData(
        (userReduxState?._id && (modalShow || dangerousPopulate)) ?
            {
                user_id: userReduxState?._id
            }
            :
            null
    )

    useEffect(() => {

        if (publicUserData) {
            console.log("publicUserData", publicUserData)
            setUserData(publicUserData)
            setUserLayoutsData(publicUserData?.populated_public_layouts)
            setUserDonations(publicUserData?.populated_public_donations)
            setLifetimeContribution(publicUserData?.populated_public_donations.total)
            setUserProposalsSubmitted(publicUserData?.populated_public_proposals)
            setActiveLayoutProposalSentiments(publicUserData?.populated_public_proposals_stance)
            setUserNewsSubmitted(publicUserData?.populated_public_news_submissions || [])
            // Used directly, no state
            // setUserNewsComments(publicUserData?.populated_public_news_comments)
        }

    }, [publicUserData])

    useEffect(() => {

        if (personalUserData) {
            console.log("personalUserData", personalUserData)
            setUsersProposalSentiments(personalUserData?.populated_public_proposals_stance)
        }

    }, [personalUserData])

    let membershipSafeName = (populated_user || userData)?.articles_membership?.plan.replace(' ', '-').toLowerCase()

    let membershipFakeSafeName = (fakeMembership)?.replace(' ', '-').toLowerCase()

    const base = `https://articles.media/images/store/memberships/`

    const UserBadge = () => {

        let hasMembership = (populated_user || userData)?.articles_membership?.status == "Active"

        return (
            <div
                style={
                    ({ 
                        position: 'relative',
                        cursor: 'pointer'
                    })
                    &&
                    (size == 'lg' ? { fontSize: "1.5rem" } : {})
                }
                className={`view-user-modal-badge-wrap ${size == 'lg' && 'large'} ${className && className}`}
            >

                <span
                    onClick={() => {
                        setModalShow(true)
                    }}
                    className="position-relative view-user-modal-badge d-flex justify-content-between align-items-center badge bg-articles badge-hover "
                >

                    {(hasMembership || fakeMembership) &&
                        <i
                            className={`fad membership-badge ${membershipFakeSafeName || membershipSafeName} fa-badge-check`}
                            style={{
                                position: 'absolute',
                                // top: '50%',
                                top: '-2px',
                                left: '-2px',
                                // transform: 'translateY(-50%)',
                                fontSize: '0.9rem',
                                zIndex: 1
                                // marginRight: '-0.5rem'
                                // color: `${obj.badge_color}!important`
                            }}
                        ></i>
                    }

                    <div className={`d-flex align-items-center ${hasMembership && ''}`}>

                        {!hidePhoto &&
                            <div className={size == 'lg' ? 'me-0' : 'me-1'}>
                                <UserProfilePhoto
                                    width={'15px'}
                                    profile_photo={userData.profile_photo}
                                />
                            </div>
                        }

                        {userData.display_name || populated_user?.display_name}

                    </div>

                    <i className="fad fa-plus-square me-0 ms-2"></i>

                </span>

                {/* Show not verified badge */}
                {visibleItems?.includes("Not Verified") &&
                    populated_user?.verified?.status !== 'Verified' &&
                    <OverlayTrigger
                        placement="bottom"
                        // delay={{ show: 250, hide: 400 }}
                        overlay={

                            <Tooltip style={{ pointerEvents: 'none' }} id="button-tooltip">
                                <div className=''>
                                    User is not verified
                                </div>
                            </Tooltip>

                        }
                    >

                        <span
                            className="verification-user-badge badge bg-danger d-flex align-items-center"
                        >
                            <i style={{ paddingBottom: '2px' }} className="fas fa-robot me-1"></i>
                            <span className=''>Unverified</span>
                        </span>

                    </OverlayTrigger>
                }

                {/* Show Membership */}
                {(
                    // true
                    // ||
                    // visibleItems?.includes("Membership")
                    false
                ) &&
                    <div className='d-flex'>
                        {populated_user?.articles_membership?.status == "Active" &&
                            <OverlayTrigger
                                placement={'bottom'}
                                overlay={
                                    <Tooltip
                                        id={`tooltip-${'bottom'}`}
                                    >
                                        <div className='d-flex'>
                                            <img
                                                width={'40px'}
                                                height={'40px'}
                                                style={{
                                                    objectFit: 'contain',
                                                    padding: '0px',
                                                    zIndex: '10',
                                                    position: 'relative'
                                                }}
                                                loading='lazy'
                                                src={`${process.env.NEXT_PUBLIC_CDN}` + politicalParties?.find(party => party._id == (populated_user || userData)?.political?.party_id)?.logo}
                                                alt=""
                                            />
                                            <span className='ms-2'>
                                                <div>{(populated_user || userData)?.articles_membership?.plan}</div>
                                                {/* <div className='text-muted'>Since <ArticlesDate format={'MM/dd/yy'} date={(populated_user || userData)?.articles_membership?.membership_started} /></div> */}
                                            </span>
                                        </div>
                                    </Tooltip>
                                }
                            >
                                <div
                                    className={`badge badge-membership bg-light text-capitalize ms-0 h-100 d-flex justify-content-center align-items-center`}
                                    style={{
                                        padding: '0 0.25rem',
                                        cursor: 'pointer'
                                    }}
                                >

                                    {/* <i
                                        className="fad fa-trophy fa-lg me-1"
                                        style={{ fontSize: '0.7rem' }}
                                    ></i> */}

                                    <i
                                        className={`fad membership-badge supporter fa-badge-check me-0`}
                                        style={{
                                            // position: 'absolute',
                                            // top: '50%',
                                            // top: '-2px',
                                            // left: '-2px',
                                            // transform: 'translateY(-50%)',
                                            fontSize: '0.9rem'
                                            // marginRight: '-0.5rem'
                                            // color: `${obj.badge_color}!important`
                                        }}
                                    ></i>

                                    {/* <div className="months">
                                        {differenceInMonths(
                                            new Date(),
                                            new Date((populated_user || userData)?.articles_membership?.membership_started),
                                        ) || 0}
                                    </div> */}

                                </div>
                            </OverlayTrigger>
                        }
                    </div>
                }

                {/* Show verification status no matter the status */}
                {visibleItems?.includes("Verification Status") &&
                    <OverlayTrigger
                        placement="bottom"
                        // delay={{ show: 250, hide: 400 }}
                        overlay={

                            <Tooltip
                                id="button-tooltip"
                                style={{ pointerEvents: 'none', transformX: '-20px' }}
                            >

                                {populated_user?.verified?.status == "Verified" ? "Verified" : " Not Verified"}

                            </Tooltip>

                        }
                    >

                        {populated_user?.verified?.status == "Verified" ?
                            <span className="verification-user-badge badge bg-success cursor-pointer">
                                <i className="fas fa-check me-0"></i>
                            </span>
                            :
                            <span className="verification-user-badge badge bg-danger cursor-pointer">
                                <i className="fas fa-robot me-1"></i>
                                <span>?</span>
                            </span>
                        }

                    </OverlayTrigger>
                }

                {/* Show political party */}
                {visibleItems?.includes("Political Party") &&
                    <div className='d-flex'>
                        {(populated_user || userData)?.political?.party_id &&
                            <OverlayTrigger
                                placement={'bottom'}
                                overlay={
                                    <Tooltip
                                        id={`tooltip-${'bottom'}`}
                                        style={{ position: "fixed" }}
                                    >
                                        <img
                                            width={'40px'}
                                            height={'40px'}
                                            style={{
                                                objectFit: 'contain',
                                                padding: '0px',
                                                zIndex: '10',
                                                position: 'relative'
                                            }}
                                            loading='lazy'
                                            src={`${process.env.NEXT_PUBLIC_CDN}` + politicalParties?.find(party => party._id == (populated_user || userData)?.political?.party_id)?.logo}
                                            alt=""
                                        />
                                        <span
                                            className='ms-2'
                                        >
                                            {politicalParties?.find(party => party._id == (populated_user || userData)?.political?.party_id)?.name}
                                        </span>
                                    </Tooltip>
                                }
                            >
                                <div
                                    className={`badge bg-light text-capitalize ms-0 h-100 d-flex justify-content-center align-items-center`}
                                    style={{
                                        padding: '0 0.15rem',
                                        cursor: 'pointer'
                                    }}
                                >
                                    {/* {!politicalParties && 'Missing political_parties prop'} */}
                                    {/* {political_parties?.find(party => party._id == comment.populated_user?.political?.party_id)?.name || 'None'} */}
                                    {(populated_user || userData)?.political?.party_id &&

                                        (
                                            (populated_user || userData)?.political?.party_id == '62a830440593acbd4061c48c' ?
                                                <i className="fad fa-unlink unaffiliated-icon fa-lg me-0"></i>
                                                :
                                                <img
                                                    width={'15px'}
                                                    height={'15px'}
                                                    style={{
                                                        objectFit: 'contain',
                                                        padding: '0px'
                                                    }}
                                                    loading='lazy'
                                                    src={`${process.env.NEXT_PUBLIC_CDN}` + politicalParties?.find(party => party._id == (populated_user || userData)?.political?.party_id)?.logo}
                                                    alt=""
                                                />)

                                    }
                                    {/* {comment.populated_user?.political?.party_id} */}
                                </div>
                            </OverlayTrigger>
                        }
                    </div>
                }

            </div>
        )
    }

    function renderModalButton(buttonType) {

        switch (buttonType) {
            // case 'badge':
            //     return (
            //         <UserBadge />
            //     );
            case 'Link':
                return (
                    <span
                        type='button'
                        onClick={() => {
                            setModalShow(true)
                        }}
                    >
                        {children}
                    </span>
                );
            default:
                return (
                    <UserBadge />
                );
        }

    }

    const [adminMode, setAdminMode] = useState(false)
    const [adminUserData, setAdminUserData] = useState({});
    const [adminUserReports, setAdminUserReports] = useState({});

    useEffect(() => {

        if (adminMode && Object.keys(adminUserData).length == 0) {
            console.log("adminUserData", personalUserData)
            // loadAdminUserData()
        }

    }, [adminMode])

    const [lightboxData, setLightboxData] = useState(null);

    function saveUser() {
        alert("TODO")
        return
    }

    const userLayoutLink = useMemo(() => {

        return (
            userLayoutsData?.filter(layout => {

                return layout.user_layout

            })?.[0]?.url
        )

    }, [userLayoutsData])

    return <>

        {renderModalButton(buttonType)}

        <Modal
            show={modalShow}
            size={'lg'}
            id="view-users-modal"
            className="view-users-modal articles-modal"
            // centered
            scrollable
            onHide={handleClose}
        >

            <Modal.Header closeButton>
                <div className="w-100 d-flex justify-content-between align-items-center">

                    <h3 className="mb-0">User Info</h3>

                    {/* {userData.employee?.bool
                        ?
                        <Link href={ROUTES.TRANSPARENCY_EMPLOYEES + `/${userData.employee?.friendly_url}`}>
                            <a className="badge badge-hover badge-articles"><i className="fad fa-external-link me-1"></i>View Employee Page</a>
                        </Link>
                        :
                        'False'
                    } */}

                </div>

            </Modal.Header>

            <Modal.Body>

                {/* {userData.banner_photo_key && <img className="img-fluid mb-3" src={`${process.env.NEXT_PUBLIC_CDN}banner_photos/${userData.banner_photo_key}`} alt="" />} */}

                {/* <div className=""> */}

                <div className='main-panel'>

                    <div className='d-flex'>

                        <div
                            className='d-flex flex-column align-items-center'
                            style={{
                                width: '100px'
                            }}
                        >

                            {/* {lightboxData && (
                                <Lightbox
                                    mainSrc={lightboxData}
                                    onCloseRequest={() => setLightboxData(null)}
                                    reactModalStyle={{
                                        overlay: {
                                            zIndex: '2000'
                                        }
                                    }}
                                />
                            )} */}

                            <div
                                type='button'
                                onClick={() => {
                                    setLightboxData(`${process.env.NEXT_PUBLIC_CDN}${userData?.profile_photo?.key}`)
                                }}
                            >
                                <UserProfilePhoto
                                    width={'100px'}
                                    profile_photo={userData?.profile_photo}
                                />
                            </div>

                            <OverlayTrigger
                                placement={'bottom'}
                                overlay={
                                    <Tooltip
                                        id={`tooltip-${'bottom'}`}
                                    >
                                        Joined Articles Media
                                    </Tooltip>
                                }
                            >
                                <div className='badge bg-black border border-white shadow-sm rounded-0'>Joined {userData?.sign_up_date && format(new Date(userData?.sign_up_date), 'M/dd/yy')}</div>
                            </OverlayTrigger>

                            {userLayoutLink &&
                                <Link
                                    href={
                                        // `${ROUTES.LAYOUTS}/${userLayoutLink}`
                                        `https://articles.media/layouts/${userLayoutLink}`
                                    }
                                    className="mt-2 w-100"
                                >
                                    <ArticlesButton
                                        // small
                                        className="w-100"
                                        style={{
                                            // fontSize: '0.75rem'
                                        }}
                                    >
                                        <i className="fad fa-home"></i>
                                        <span>Layout</span>
                                    </ArticlesButton>
                                </Link>
                            }

                            {/* <div>Test {userLayoutLink}</div> */}

                            {/* TODO - Make conditional to user pref */}
                            <IsDev className={'w-100'}>
                                <Link
                                    href={{
                                        // pathname: ROUTES.MESSAGES,
                                        pathname: "https://articles.media/messages",
                                        query: {
                                            startMsg: userData?._id
                                        }
                                    }}
                                    className="mt-2 w-100"
                                >
                                    <ArticlesButton
                                        // small
                                        className="w-100"
                                        style={{
                                            fontSize: '0.88rem'
                                        }}
                                    >
                                        <i className="fad fa-envelope"></i>
                                        <span>Message</span>
                                    </ArticlesButton>
                                </Link>
                            </IsDev>

                            {adminMode &&
                                <div
                                    className='d-flex flex-column w-100 mt-2'
                                    style={{
                                        maxWidth: '100px'
                                    }}
                                >
                                    <ArticlesButton variant='warning' small className="">
                                        <Textfit max={14} mode='single'>Remove Photo</Textfit>
                                    </ArticlesButton>
                                    {adminUserData?.user?.profile_photo?.banned_uploads ?
                                        <ArticlesButton
                                            variant='warning'
                                            small
                                            className=""
                                            onClick={() => {
                                                toggleBanCustomPhotoUpload()
                                            }}
                                        >
                                            <Textfit max={14} mode='single'>Unban Uploads</Textfit>
                                        </ArticlesButton>
                                        :
                                        <ArticlesButton
                                            variant='danger'
                                            small
                                            className=""
                                            onClick={() => {
                                                toggleBanCustomPhotoUpload()
                                            }}
                                        >
                                            <Textfit max={14} mode='single'>Ban Uploads</Textfit>
                                        </ArticlesButton>
                                    }
                                </div>
                            }

                        </div>

                        <div className="mx-2">

                            <div className="d-flex  align-items-center mb-1">

                                <h5 className="mb-0">{populated_user?.display_name || userData.display_name}</h5>

                                <span className='ms-2'> @{userData?.username}</span>

                            </div>

                            {userData?.articles_membership?.status == "Active" &&
                                <OverlayTrigger
                                    placement={'bottom'}
                                    overlay={
                                        <Tooltip
                                            id={`tooltip-${'bottom'}`}
                                        >
                                            <div className='d-flex flex-column py-1'>

                                                <div className='position-relative'>

                                                    {userData?.articles_membership?.plan == 'Supporter' && <img src={`${base}supporter.jpg`} width={50} height={50} alt={"Membership plan level"} />}
                                                    {userData?.articles_membership?.plan == 'Premium Supporter' && <img src={`${base}premiumSupporter.jpg`} width={50} height={50} alt={"Membership plan level"} />}
                                                    {userData?.articles_membership?.plan == 'Advocate' && <img src={`${base}advocate.jpg`} width={50} height={50} alt={"Membership plan level"} />}

                                                    <i
                                                        className={`fad membership-badge ${membershipSafeName} fa-badge-check me-1`}
                                                        style={{
                                                            position: 'absolute',
                                                            top: '50%',
                                                            // top: '-2px',
                                                            left: '50%',
                                                            transform: 'translateX(-50%) translateY(-50%)',
                                                            fontSize: '1.5rem'
                                                            // marginRight: '-0.5rem'
                                                            // color: `${obj.badge_color}!important`
                                                        }}
                                                    ></i>

                                                </div>

                                                {/* <img
                                                    width={'40px'}
                                                    height={'40px'}
                                                    style={{
                                                        objectFit: 'contain',
                                                        padding: '0px',
                                                        zIndex: '10',
                                                        position: 'relative'
                                                    }}
                                                    loading='lazy'
                                                    src={`${process.env.NEXT_PUBLIC_CDN}` + political_parties?.find(party => party._id == userData?.political?.party_id)?.logo}
                                                    alt=""
                                                /> */}

                                                <span className='lh-sm'>
                                                    <div>{userData?.articles_membership?.plan}</div>
                                                    <div className='small'>Since <ArticlesDate format={'MM/dd/yy'} date={userData?.articles_membership?.membership_started} /></div>
                                                </span>
                                            </div>
                                        </Tooltip>
                                    }
                                >
                                    <div
                                        className={`badge bg-articles border me-1 mb-1`}
                                        style={{
                                            // padding: '0 0.25rem',
                                            cursor: 'pointer'
                                        }}
                                    >

                                        {/* <i
                                        className="fad fa-trophy fa-lg me-1"
                                        style={{ fontSize: '0.7rem' }}
                                    ></i> */}

                                        <i
                                            className={`fad membership-badge ${membershipSafeName} fa-badge-check me-1`}
                                            style={{
                                                // position: 'absolute',
                                                // top: '50%',
                                                // top: '-2px',
                                                // left: '-2px',
                                                // transform: 'translateY(-50%)',
                                                // fontSize: '0.9rem'
                                                // marginRight: '-0.5rem'
                                                // color: `${obj.badge_color}!important`
                                            }}
                                        ></i>

                                        <span>
                                            {userData?.articles_membership?.plan}
                                        </span>

                                        <span className='px-1'>
                                            |
                                        </span>

                                        <span className="months fw-bold">
                                            {differenceInMonths(
                                                new Date(),
                                                new Date(userData?.articles_membership?.membership_started),
                                            ) || 0}
                                        </span>

                                    </div>
                                </OverlayTrigger>
                            }

                            {userData?.address?.state && <OverlayTrigger
                                placement={'bottom'}
                                overlay={
                                    userData.address?.state?.length == 2 ?
                                        <Tooltip id={`tooltip-${'bottom'}`}>
                                            From the state of {convertRegion(userData.address?.state, 'name') ? convertRegion(userData.address?.state, 'name')[0] : ''}
                                        </Tooltip>
                                        :
                                        <Tooltip id={`tooltip-${'bottom'}`}>
                                            From the state of {userData.address?.state}
                                        </Tooltip>

                                }
                            >
                                <div className='badge bg-articles border me-1 mb-1'>
                                    <i className="fad fa-map-pin me-1"></i>
                                    {userData.address?.state}
                                </div>
                            </OverlayTrigger>}

                            {userData.verified?.status !== 'Verified' && <OverlayTrigger
                                placement={'bottom'}
                                overlay={
                                    <Tooltip id={`tooltip-${'bottom'}`}>
                                        User is not verified
                                    </Tooltip>
                                }
                            >
                                <div className='badge bg-danger me-1 mb-1'>
                                    <i className="fad fa-robot me-1"></i>
                                    Unverified
                                </div>
                            </OverlayTrigger>}

                            {userData.verified?.status == 'Verified' && <OverlayTrigger
                                placement={'bottom'}
                                overlay={
                                    <Tooltip
                                        id={`tooltip-${'bottom'}`}
                                        className=''
                                    >
                                        <div>Verified by {userData.verified?.verified_methods?.length} method{userData.verified?.verified_methods?.length > 1 && 's'}</div>
                                        <hr />
                                        <div className='pb-2'>
                                            {userData.verified?.verified_methods?.map((item, item_i) => {

                                                if (Object.keys(item)?.length > 0) {
                                                    return (
                                                        <div
                                                            key={item_i}
                                                            className='object'
                                                        >
                                                            {item?.method_name}
                                                        </div>
                                                    )
                                                } else {
                                                    return (
                                                        <div
                                                            key={item_i}
                                                            className='single'
                                                        >
                                                            {item}
                                                        </div>
                                                    )
                                                }

                                            })}
                                        </div>
                                    </Tooltip>
                                }
                            >
                                <div className='badge bg-articles border me-1 mb-1'>
                                    <i className="fad fa-star me-1"></i>
                                    {userData.verified?.status}
                                </div>
                            </OverlayTrigger>}

                            {userData.political?.party_id &&
                                <>
                                    <OverlayTrigger
                                        placement={'bottom'}
                                        overlay={
                                            <Tooltip id={`tooltip-${'bottom'}`}>
                                                <div>Users political party</div>
                                            </Tooltip>
                                        }
                                    >

                                        <Link 
                                            href={
                                                // `${ROUTES.RESOURCES_POLITICAL_PARTIES}/${(populated_user || userData)?.political?.party_id}`
                                                `https://articles.media/politics/parties/${(populated_user || userData)?.political?.party_id}`
                                        }
                                        >
                                            <div className='badge bg-articles border text-capitalize me-1'>

                                                <div className=''>
                                                    {(
                                                        (populated_user || userData)?.political?.party_id == '62a830440593acbd4061c48c' ?
                                                            <i className="fad fa-unlink unaffiliated-icon fa-lg me-0"></i>
                                                            :
                                                            <img
                                                                width={'14px'}
                                                                height={'14px'}
                                                                style={{
                                                                    objectFit: 'contain',
                                                                    padding: '0px'
                                                                }}
                                                                loading='lazy'
                                                                src={`${process.env.NEXT_PUBLIC_CDN}` + politicalParties?.find(party => party._id == userData?.political?.party_id)?.logo}
                                                                alt=""
                                                            />
                                                    )}

                                                    <span className='ms-1'>{politicalParties?.find(obj => obj._id == userData.political?.party_id)?.name}</span>
                                                </div>

                                            </div>
                                        </Link>

                                    </OverlayTrigger>

                                    {/* <Link
                                        href={ROUTES.RESOURCES_POLITICAL_PARTIES + '/' + political_parties.find(obj => obj._id == userData.political?.party_id)?._id}
                                        >
                                        <span className='badge badge-hover bg-articles-secondary border text-capitalize me-0'>
                                            <i className="fad fa-link me-0"></i>
                                        </span>
                                    </Link> */}
                                </>
                            }

                            <hr />

                            <div className='small'>
                                {userData?._id == '5e90cc96579a17440c5d7d52' &&
                                    <span>Founder of Articles Media, thank you for using the site, feel free to message me with any questions, concerns or anything else.</span>
                                }
                            </div>

                        </div>

                    </div>

                    <hr />

                    {adminMode &&
                        <div>

                            <div className='d-flex align-items-center justify-content-between'>
                                <div className='small'>Admin Mode Toolbar</div>
                            </div>

                            <div>

                                <div className='d-flex mb-2'>
                                    <ArticlesButton
                                        small
                                        variant='warning'
                                        className=""
                                        onClick={() => {
                                            loadAdminUserData()
                                        }}
                                    >
                                        <i className="fad fa-redo me-0"></i>
                                    </ArticlesButton>
                                    <ArticlesButton
                                        active={adminMode?.edit}
                                        small
                                        className=""
                                        onClick={() => {
                                            setAdminMode({
                                                ...adminMode,
                                                edit: !adminMode?.edit
                                            })
                                        }}
                                    >
                                        Edit Mode
                                    </ArticlesButton>
                                    {adminMode?.edit &&
                                        <ArticlesButton
                                            small
                                            variant='success'
                                            className="me-0"
                                            onClick={() => {
                                                saveUser()
                                            }}
                                        >
                                            <i className="fad fa-save me-0"></i>
                                        </ArticlesButton>
                                    }
                                </div>

                                {[
                                    'User Details',
                                    'Verification',
                                    'Moderation',
                                    'Bans',
                                    'Stripe',
                                    'Layouts',
                                    'Reset Password',
                                    'Sessions',
                                ].map(tab =>
                                    <ArticlesButton
                                        key={tab}
                                        active={tab == adminMode?.tab}
                                        small
                                        onClick={() => {
                                            setAdminMode({
                                                ...adminMode,
                                                tab: tab
                                            })
                                        }}
                                    >
                                        {tab}
                                    </ArticlesButton>
                                )}

                            </div>

                            {/* <Tabs
                                {...{
                                    adminMode,
                                    setAdminMode,
                                    userData,
                                    setUserData,
                                    adminUserData,
                                    adminUserReports,
                                    loadAdminUserData,
                                    userLastSocketLogin,
                                    setUserLastSocketLogin,
                                }}
                            /> */}

                            <hr />

                        </div>
                    }

                    <div className='pe-3 pb-3'>

                        <div className='mb-2 me-2'>

                            {[
                                {
                                    name: 'Proposals Stance',
                                    badge: <span className='badge bg-black ms-1'>

                                        <div className='small'>

                                            <span>
                                                {usersProposalSentiments?.fundamental?.filter(obj => {

                                                    if (usersProposalSentiments?.user_sentiments?.find(sen => sen.proposal_id == obj._id)) {
                                                        return obj
                                                    } else {
                                                        return null
                                                    }

                                                }).length}
                                            </span>

                                            <span className='px-1'>/</span>

                                            <span>{usersProposalSentiments?.fundamental?.length}</span>

                                        </div>

                                    </span>
                                },
                                {
                                    name: 'Proposal Sentiments',
                                    badge: <span className='badge bg-black ms-1'>{userData?.populated_public_proposals_stance?.user_sentiments_count || 0}</span>
                                },
                                {
                                    name: 'Proposal Comments',
                                    badge: <span className='badge bg-black ms-1'>{userData?.populated_public_proposals_stance?.user_comments_count || 0}</span>
                                },
                                {
                                    name: 'Proposal Submissions',
                                    badge: <span className='badge bg-black ms-1'>
                                        {userProposalsSubmitted?.length || 0}
                                    </span>
                                    // TODO - Make conditional
                                },
                                {
                                    name: 'News Comments',
                                    badge: <span className='badge bg-black ms-1'>{userData?.populated_news_comments_count || 0}</span>
                                },
                                {
                                    name: 'News Submissions',
                                    badge: <span className='badge bg-black ms-1'>
                                        {userNewsSubmitted?.length || 0}
                                    </span>
                                    // TODO - Make conditional
                                },
                                {
                                    name: 'Verifications',
                                    // dev: true,
                                    badge: <span className='badge bg-black ms-1'>{userData.verified?.verified_methods?.length || 0}</span>
                                    // TODO - Make conditional
                                },
                                {
                                    name: 'Layouts',
                                    badge: <span className='badge bg-black ms-1'>
                                        {userLayoutsData?.length || 0}
                                    </span>
                                },
                                {
                                    name: 'Donations',
                                    badge: <span>
                                        <span className='badge bg-primary ms-1'>
                                            {publicUserData?.populated_public_donations?.count || 0}
                                        </span>
                                        <span className='badge bg-black'>
                                            {/* {userData?.populated_news_comments_count || 0} */}
                                            ${numberWithCommas((publicUserData?.populated_public_donations.total / 100).toFixed(2))}
                                        </span>
                                    </span>
                                },
                                {
                                    name: 'Orders',
                                    badge: <span>
                                        <span className='badge bg-primary ms-1'>
                                            0
                                        </span>
                                        <span className='badge bg-black'>
                                            0
                                        </span>
                                    </span>
                                },
                                {
                                    name: 'Achievements',
                                    dev: true,
                                    badge: <span className='badge bg-black ms-1'>0</span>
                                    // TODO - Make conditional
                                },
                            ].map(obj => {

                                const button = (
                                    <ArticlesButton
                                        key={obj.name}
                                        onClick={() => setContentDisplayTab(obj.name)}
                                        active={obj.name == contentDisplayTab}
                                        small
                                    >
                                        {obj.name}
                                        {obj.badge}
                                    </ArticlesButton>
                                )

                                if (obj.dev) {

                                    return (
                                        <IsDev
                                            key={obj.name}
                                            inline
                                        >
                                            <ArticlesButton
                                                key={obj.name}
                                                onClick={() => setContentDisplayTab(obj.name)}
                                                active={obj.name == contentDisplayTab}
                                                small
                                            >
                                                {obj.name}
                                                {obj.badge}
                                            </ArticlesButton>
                                        </IsDev>
                                    )
                                } else {
                                    return (
                                        <ArticlesButton
                                            key={obj.name}
                                            onClick={() => setContentDisplayTab(obj.name)}
                                            active={obj.name == contentDisplayTab}
                                            small
                                        >
                                            {obj.name}
                                            {obj.badge}
                                        </ArticlesButton>
                                    )
                                }

                            })}

                            {/* <ArticlesButton small disabled className="">News Interactions</ArticlesButton>
                                <ArticlesButton small disabled className="">Politics Interactions</ArticlesButton> */}

                        </div>

                        {contentDisplayTab == 'Proposals Stance' &&
                            <ProposalsStance
                                {...{
                                    activeLayoutProposalSentiments,
                                    populated_user,
                                    usersProposalSentiments,
                                    setShowFullStanceDetails,
                                    showFullStanceDetails,
                                    userData
                                }}
                            />
                        }

                        {contentDisplayTab == 'Proposal Comments' &&
                            <ProposalComments
                                activeLayoutProposalSentiments={activeLayoutProposalSentiments}
                            />
                        }

                        {contentDisplayTab == 'Proposal Sentiments' &&
                            <ProposalSentiments
                                activeLayoutProposalSentiments={activeLayoutProposalSentiments}
                            />
                        }

                        {contentDisplayTab == 'Proposal Submissions' &&
                            <ProposalSubmissions
                                userProposalsSubmitted={publicUserData?.populated_public_proposals}
                            />
                        }

                        {contentDisplayTab == 'News Comments' &&
                            <NewsComments
                                publicUserData={publicUserData}
                            />
                        }

                        {contentDisplayTab == 'News Submissions' &&
                            <NewsSubmissions
                                publicUserData={publicUserData}
                                userNewsSubmitted={publicUserData?.populated_public_news_submissions}
                            />
                        }

                        {contentDisplayTab == 'Donations' &&
                            <Donations
                                publicUserData={publicUserData}
                                userDonations={publicUserData?.populated_public_donations}
                                lifetimeContribution={lifetimeContribution}
                            />
                        }

                        {contentDisplayTab == 'Layouts' &&
                            <Layouts
                                publicUserData={publicUserData}
                                userLayoutsData={publicUserData?.populated_public_layouts}
                            // handleClose={handleClose}
                            />
                        }

                        {contentDisplayTab == 'Verifications' &&
                            <Verifications
                                publicUserData={publicUserData}
                                userData={userData}
                            />
                        }

                        {contentDisplayTab == 'Achievements' &&
                            <Achievements
                                publicUserData={publicUserData}
                            />
                        }

                    </div>

                </div>

                {/* <div className="side-panel">

                </div> */}

                {/* </div> */}

            </Modal.Body>

            <Modal.Footer className="justify-content-between">

                {
                    userReduxState?._id == '5e90cc96579a17440c5d7d52'
                        ?
                        <span>
                            <IsDev
                                inline
                                className={'me-2'}
                            >

                                <ArticlesButton
                                    onClick={() => {

                                        if (adminMode) {
                                            setAdminMode(false)
                                        } else {
                                            setAdminMode({
                                                tab: ''
                                            })
                                        }

                                    }}
                                    small
                                    active={adminMode}
                                    variant=''
                                    className='me-1'
                                >
                                    <i className="fad fa-pen"></i>
                                    <span>Admin Mode</span>
                                </ArticlesButton>

                                <ArticlesButton
                                    onClick={() => {
                                        publicUserDataMutate()
                                        personalUserDataMutate()
                                    }}
                                    small
                                    variant='warning'
                                    className=''
                                >
                                    <i className="fad fa-redo me-0"></i>
                                </ArticlesButton>

                            </IsDev>
                            <span style={{ fontSize: "0.8rem" }}>{userData?._id}</span>
                        </span>
                        :
                        <span></span>
                }

                <div className="justify-content-">

                    {/* <ArticlesButton variant="articles me-2" onClick={handleClose}>
                        Message
                    </ArticlesButton> */}

                    <ArticlesButton variant="articles" onClick={handleClose}>
                        Close
                    </ArticlesButton>

                </div>

            </Modal.Footer>

        </Modal>

    </>;

}

export default ViewUserModal;