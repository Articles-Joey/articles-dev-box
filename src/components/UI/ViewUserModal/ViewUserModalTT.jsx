"use client"
import { useState, useEffect, useMemo } from 'react';

// import Link from 'next/link'
import Link from '#root/src/components/UI/Link';

// import dynamic from "next/dynamic";
// import Image from 'next/image';

import axios from 'axios'

// import { differenceInMonths, format } from 'date-fns'

// import { useSelector, useDispatch } from 'react-redux'

import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
// import ProgressBar from 'react-bootstrap/ProgressBar'

// import ROUTES from 'components/constants/routes';

// import convertRegion from 'util/convertRegion';

// TODO - ADD BACK IN
// import ArticlesDate from '../../Articles/Date';
// import UserProfilePhoto from '../../SiteLayout/UserProfilePhoto';
import usePublicUserData from '#root/src/hooks/User/UserPublic/usePublicUserData';
// import IsDev from '../../IsDev';
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

// import ProposalSentiments from './Panels/ProposalSentiments';
// import ProposalComments from './Panels/ProposalComments';
// import ProposalSubmissions from './Panels/ProposalSubmissions';
// import NewsComments from './Panels/NewsComments';
// import ProposalsStance from './Panels/ProposalsStance';
// import NewsSubmissions from './Panels/NewsSubmissions';
// import Donations from './Panels/Donations';
// import Layouts from './Panels/Layouts';
// import Verifications from './Panels/Verifications';
// import Achievements from './Panels/Achievements';

// import numberWithCommas from '#root/src/util/withCommas';
import usePoliticalParties from '#root/src/hooks/Politics/usePoliticalParties';

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
    // const [contentDisplayTab, setContentDisplayTab] = useState('Proposals Stance');

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

    const UserBadge = () => {

        let hasMembership = (populated_user || userData)?.articles_membership?.status == "Active"

        return (
            <div
                style={
                    ({ position: 'relative' })
                    &&
                    (size == 'lg' ? { fontSize: "1.5rem" } : {})
                }
                className={`view-user-modal-badge-wrap ${size == 'lg' && 'large'} ${className && className}`}
            >

                <span
                    onClick={() => {
                        setModalShow(true)
                    }}
                    className="position-relative view-user-modal-badge d-flex justify-content-between align-items-center badge bg-articles-secondary shadow-articles badge-hover "
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
                                {/* <UserProfilePhoto
                                    width={'15px'}
                                    profile_photo={userData.profile_photo}
                                /> */}
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
                                    className={`badge badge-membership bg-light text-capitalize ms-0 shadow-articles h-100 d-flex justify-content-center align-items-center`}
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
                                    className={`badge bg-light text-capitalize ms-0 shadow-articles h-100 d-flex justify-content-center align-items-center`}
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

    const [userLastSocketLogin, setUserLastSocketLogin] = useState({});
    function loadAdminUserData(params) {

        axios.post('/api/admin/users', {
            user_id: userData?._id
        })
            .then(function (response) {
                console.log(response);
                setAdminUserData(response.data)
                setAdminUserReports(response.data.reports)
                setUserLastSocketLogin(response.data.last_socket_login)
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    function toggleBanCustomPhotoUpload() {
        axios.post('/api/admin/users/banned/profile-photo-uploads', {
            user_id: userData?._id
        })
            .then(function (response) {
                console.log(response);
                loadAdminUserData()
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const [adminMode, setAdminMode] = useState(false)
    const [adminUserData, setAdminUserData] = useState({});
    const [adminUserReports, setAdminUserReports] = useState({});

    useEffect(() => {

        if (adminMode && Object.keys(adminUserData).length == 0) {
            console.log("adminUserData", personalUserData)
            loadAdminUserData()
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

                    123

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
                            {/* <IsDev
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

                            </IsDev> */}
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