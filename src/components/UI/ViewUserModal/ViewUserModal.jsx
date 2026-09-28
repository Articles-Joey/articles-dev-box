"use client"

import { useEffect, useMemo, useState } from 'react';
import { differenceInMonths, format } from 'date-fns';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import AddBoxIcon from '@mui/icons-material/AddBox';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import LinkOffIcon from '@mui/icons-material/LinkOff';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RefreshIcon from '@mui/icons-material/Refresh';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import StarIcon from '@mui/icons-material/Star';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

import Link from '#root/src/components/UI/Link';
import ArticlesDate from '#root/src/components/UI/ArticlesDate';
import UserProfilePhoto from '#root/src/components/UI/UserProfilePhoto';
import usePublicUserData from '#root/src/hooks/User/UserPublic/usePublicUserData';
import ArticlesButton from '#root/src/components/UI/Button';
import {
    ArticlesBadge,
    ArticlesDialog,
    ArticlesDialogActions,
    ArticlesDialogContent,
    ArticlesDialogTitle,
    articlesShadow,
} from '#root/src/components/UI/muiPrimitives';

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

const membershipImages = {
    Supporter: 'supporter.jpg',
    'Premium Supporter': 'premiumSupporter.jpg',
    Advocate: 'advocate.jpg',
};

function PartyMark({ partyId, parties, size = 15 }) {
    if (!partyId) return null;
    if (partyId === '62a830440593acbd4061c48c') return <LinkOffIcon sx={{ fontSize: size }} />;

    const party = parties?.find((item) => item._id === partyId);
    return (
        <Box
            component="img"
            width={size}
            height={size}
            loading="lazy"
            src={`${process.env.NEXT_PUBLIC_CDN}${party?.logo || ''}`}
            alt=""
            sx={{ objectFit: 'contain' }}
        />
    );
}

function StatusBadge({ children, color = 'var(--articles-theme-primary, #f9edcd)', textColor = '#000', sx }) {
    return (
        <ArticlesBadge
            sx={[
                {
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.5,
                    mr: 0.5,
                    mb: 0.5,
                    bgcolor: color,
                    color: textColor,
                    border: 1,
                    borderColor: 'divider',
                    textTransform: 'capitalize',
                },
                ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
            ]}
        >
            {children}
        </ArticlesBadge>
    );
}

export default function ViewUserModal(props) {
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
        sx,
    } = props;

    const [modalShow, setModalShow] = useState(false);
    const [userData, setUserData] = useState(populated_user || {});
    const [contentDisplayTab, setContentDisplayTab] = useState('Proposals Stance');
    const [showFullStanceDetails, setShowFullStanceDetails] = useState(false);
    const [usersProposalSentiments, setUsersProposalSentiments] = useState({});
    const [adminMode, setAdminMode] = useState(false);

    // Authentication state is not currently wired into this package.
    const userReduxState = false;

    const { data: politicalParties } = usePoliticalParties();
    const { data: publicUserData, mutate: publicUserDataMutate } = usePublicUserData(
        ((user_id || populated_user?._id) && (modalShow || dangerousPopulate))
            ? { user_id: user_id || populated_user?._id }
            : null
    );
    const { data: personalUserData, mutate: personalUserDataMutate } = usePublicUserData(
        (userReduxState?._id && (modalShow || dangerousPopulate))
            ? { user_id: userReduxState._id }
            : null
    );

    useEffect(() => {
        if (populated_user) setUserData(populated_user);
    }, [populated_user]);

    useEffect(() => {
        if (publicUserData) setUserData(publicUserData);
    }, [publicUserData]);

    useEffect(() => {
        if (personalUserData) {
            setUsersProposalSentiments(personalUserData?.populated_public_proposals_stance || {});
        }
    }, [personalUserData]);

    const displayUser = populated_user || userData;
    const hasMembership = displayUser?.articles_membership?.status === 'Active';
    const membershipName = fakeMembership || displayUser?.articles_membership?.plan;
    const membershipImage = membershipImages[userData?.articles_membership?.plan];
    const party = politicalParties?.find((item) => item._id === displayUser?.political?.party_id);
    const activeLayoutProposalSentiments = publicUserData?.populated_public_proposals_stance || {};
    const userLayoutsData = publicUserData?.populated_public_layouts || [];
    const userProposalsSubmitted = publicUserData?.populated_public_proposals || [];
    const userNewsSubmitted = publicUserData?.populated_public_news_submissions || [];
    const userDonations = publicUserData?.populated_public_donations || { count: 0, list: [], total: 0 };

    const userLayoutLink = useMemo(
        () => userLayoutsData.find((layout) => layout.user_layout)?.url,
        [userLayoutsData]
    );

    const handleClose = () => setModalShow(false);

    const userBadge = (
        <Box
            className={className}
            sx={[
                {
                    display: 'flex',
                    alignItems: 'stretch',
                    position: 'relative',
                    cursor: 'pointer',
                    ...(size === 'lg' && { fontSize: '1.5rem' }),
                },
                ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
            ]}
        >
            <ArticlesBadge
                onClick={() => setModalShow(true)}
                sx={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    minHeight: size === 'lg' ? 30 : 22,
                    bgcolor: 'var(--articles-theme-primary, #f9edcd)',
                    color: '#000',
                    cursor: 'pointer',
                    '&:hover': { filter: 'brightness(0.95)' },
                }}
            >
                {(hasMembership || fakeMembership) && (
                    <WorkspacePremiumIcon sx={{ position: 'absolute', top: -5, left: -5, fontSize: '0.9rem', zIndex: 1 }} />
                )}

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {!hidePhoto && (
                        <Box sx={{ mr: size === 'lg' ? 0 : 0.5 }}>
                            <UserProfilePhoto width={size === 'lg' ? '22px' : '15px'} profile_photo={userData.profile_photo} />
                        </Box>
                    )}
                    {userData.display_name || populated_user?.display_name}
                </Box>

                <AddBoxIcon sx={{ ml: 1, fontSize: '1em' }} />
            </ArticlesBadge>

            {visibleItems?.includes('Not Verified') && populated_user?.verified?.status !== 'Verified' && (
                <Tooltip title="User is not verified" placement="bottom">
                    <span>
                        <StatusBadge color="#d32f2f" textColor="#fff"><SmartToyIcon fontSize="inherit" />Unverified</StatusBadge>
                    </span>
                </Tooltip>
            )}

            {visibleItems?.includes('Verification Status') && (
                <Tooltip title={populated_user?.verified?.status === 'Verified' ? 'Verified' : 'Not Verified'} placement="bottom">
                    <span>
                        {populated_user?.verified?.status === 'Verified'
                            ? <StatusBadge color="#2e7d32" textColor="#fff"><CheckIcon fontSize="inherit" /></StatusBadge>
                            : <StatusBadge color="#d32f2f" textColor="#fff"><SmartToyIcon fontSize="inherit" />?</StatusBadge>}
                    </span>
                </Tooltip>
            )}

            {visibleItems?.includes('Political Party') && displayUser?.political?.party_id && (
                <Tooltip
                    placement="bottom"
                    title={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <PartyMark partyId={displayUser.political.party_id} parties={politicalParties} size={40} />
                            <Box component="span">{party?.name}</Box>
                        </Box>
                    }
                >
                    <span>
                        <StatusBadge color="#fff">
                            <PartyMark partyId={displayUser.political.party_id} parties={politicalParties} />
                        </StatusBadge>
                    </span>
                </Tooltip>
            )}
        </Box>
    );

    const trigger = buttonType === 'Link'
        ? (
            <Box
                component="span"
                role="button"
                tabIndex={0}
                className={className}
                onClick={() => setModalShow(true)}
                onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') setModalShow(true);
                }}
                sx={[{ cursor: 'pointer' }, ...(Array.isArray(sx) ? sx : sx ? [sx] : [])]}
            >
                {children}
            </Box>
        )
        : userBadge;

    const fundamentalAnswered = usersProposalSentiments?.fundamental?.filter((proposal) =>
        usersProposalSentiments?.user_sentiments?.some((sentiment) => sentiment.proposal_id === proposal._id)
    ).length || 0;
    const fundamentalTotal = usersProposalSentiments?.fundamental?.length || 0;

    const tabs = [
        { name: 'Proposals Stance', count: `${fundamentalAnswered}/${fundamentalTotal}` },
        { name: 'Proposal Sentiments', count: userData?.populated_public_proposals_stance?.user_sentiments_count || 0 },
        { name: 'Proposal Comments', count: userData?.populated_public_proposals_stance?.user_comments_count || 0 },
        { name: 'Proposal Submissions', count: userProposalsSubmitted.length },
        { name: 'News Comments', count: userData?.populated_news_comments_count || 0 },
        { name: 'News Submissions', count: userNewsSubmitted.length },
        { name: 'Verifications', count: userData.verified?.verified_methods?.length || 0 },
        { name: 'Layouts', count: userLayoutsData.length },
        { name: 'Donations', count: `${userDonations.count || 0} · $${numberWithCommas(((userDonations.total || 0) / 100).toFixed(2))}` },
        { name: 'Orders', count: 0 },
        ...(process.env.NODE_ENV === 'development' ? [{ name: 'Achievements', count: 0 }] : []),
    ];

    return (
        <>
            {trigger}

            <ArticlesDialog
                open={modalShow}
                onClose={handleClose}
                id="view-users-modal"
                className="view-users-modal"
                paperSx={{ maxWidth: 900 }}
            >
                <ArticlesDialogTitle onClose={handleClose}>User Info</ArticlesDialogTitle>

                <ArticlesDialogContent>
                    <Box className="main-panel">
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                            <Box sx={{ width: 100, flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Box role="button" tabIndex={0} sx={{ cursor: 'pointer' }}>
                                    <UserProfilePhoto width="100px" profile_photo={userData?.profile_photo} />
                                </Box>

                                <Tooltip title="Joined Articles Media" placement="bottom">
                                    <span>
                                        <ArticlesBadge sx={{ mt: 0.5, bgcolor: '#000', color: '#fff', borderRadius: 0, boxShadow: 1 }}>
                                            Joined {userData?.sign_up_date && format(new Date(userData.sign_up_date), 'M/dd/yy')}
                                        </ArticlesBadge>
                                    </span>
                                </Tooltip>

                                {userLayoutLink && (
                                    <Link href={`https://articles.media/layouts/${userLayoutLink}`} sx={{ mt: 2, width: 1 }}>
                                        <ArticlesButton sx={{ width: 1 }}>
                                            <HomeIcon fontSize="inherit" sx={{ mr: 0.5 }} />Layout
                                        </ArticlesButton>
                                    </Link>
                                )}

                                {process.env.NODE_ENV === 'development' && (
                                    <Link href={`https://articles.media/messages?startMsg=${userData?._id}`} sx={{ mt: 2, width: 1 }}>
                                        <ArticlesButton sx={{ width: 1, fontSize: '0.88rem' }}>
                                            <EmailIcon fontSize="inherit" sx={{ mr: 0.5 }} />Message
                                        </ArticlesButton>
                                    </Link>
                                )}
                            </Box>

                            <Box sx={{ minWidth: 0, flexGrow: 1 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', mb: 1 }}>
                                    <Typography variant="h5" sx={{ mb: 0 }}>{displayUser?.display_name}</Typography>
                                    <Typography component="span" sx={{ ml: 1, color: 'text.secondary' }}>@{userData?.username}</Typography>
                                </Box>

                                {hasMembership && (
                                    <Tooltip
                                        placement="bottom"
                                        title={
                                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 1 }}>
                                                {membershipImage && (
                                                    <Box component="img" src={`https://articles.media/images/store/memberships/${membershipImage}`} width={50} height={50} alt="Membership plan level" />
                                                )}
                                                <Box>{userData.articles_membership.plan}</Box>
                                                <Typography variant="caption">Since <ArticlesDate format="MM/dd/yy" date={userData.articles_membership.membership_started} /></Typography>
                                            </Box>
                                        }
                                    >
                                        <span>
                                            <StatusBadge>
                                                <WorkspacePremiumIcon fontSize="inherit" />
                                                {membershipName}
                                                <Box component="span" sx={{ px: 0.5 }}>|</Box>
                                                <Box component="span" sx={{ fontWeight: 700 }}>
                                                    {differenceInMonths(new Date(), new Date(userData.articles_membership.membership_started)) || 0}
                                                </Box>
                                            </StatusBadge>
                                        </span>
                                    </Tooltip>
                                )}

                                {userData?.address?.state && (
                                    <Tooltip title={`From the state of ${userData.address.state}`} placement="bottom">
                                        <span><StatusBadge><LocationOnIcon fontSize="inherit" />{userData.address.state}</StatusBadge></span>
                                    </Tooltip>
                                )}

                                {userData.verified?.status !== 'Verified' && (
                                    <Tooltip title="User is not verified" placement="bottom">
                                        <span><StatusBadge color="#d32f2f" textColor="#fff"><SmartToyIcon fontSize="inherit" />Unverified</StatusBadge></span>
                                    </Tooltip>
                                )}

                                {userData.verified?.status === 'Verified' && (
                                    <Tooltip
                                        placement="bottom"
                                        title={
                                            <Box>
                                                <Box>Verified by {userData.verified?.verified_methods?.length || 0} method{userData.verified?.verified_methods?.length === 1 ? '' : 's'}</Box>
                                                <Divider sx={{ my: 1, borderColor: 'rgba(255,255,255,.35)' }} />
                                                {userData.verified?.verified_methods?.map((item, index) => <Box key={index}>{item?.method_name || item}</Box>)}
                                            </Box>
                                        }
                                    >
                                        <span><StatusBadge><StarIcon fontSize="inherit" />Verified</StatusBadge></span>
                                    </Tooltip>
                                )}

                                {userData.political?.party_id && (
                                    <Tooltip title="User's political party" placement="bottom">
                                        <span>
                                            <Link href={`https://articles.media/politics/parties/${userData.political.party_id}`} sx={{ textDecoration: 'none' }}>
                                                <StatusBadge>
                                                    <PartyMark partyId={userData.political.party_id} parties={politicalParties} size={14} />
                                                    {party?.name}
                                                </StatusBadge>
                                            </Link>
                                        </span>
                                    </Tooltip>
                                )}

                                <Divider sx={{ my: 2 }} />

                                {userData?._id === '5e90cc96579a17440c5d7d52' && (
                                    <Typography variant="body2">
                                        Founder of Articles Media, thank you for using the site, feel free to message me with any questions, concerns or anything else.
                                    </Typography>
                                )}
                            </Box>
                        </Box>

                        <Divider sx={{ my: 2 }} />

                        {adminMode && (
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="body2">Admin Mode Toolbar</Typography>
                            </Box>
                        )}

                        <Tabs
                            value={contentDisplayTab}
                            onChange={(_event, value) => setContentDisplayTab(value)}
                            variant="scrollable"
                            scrollButtons="auto"
                            aria-label="User information sections"
                            sx={{ mb: 2, borderBottom: 1, borderColor: 'divider' }}
                        >
                            {tabs.map((item) => (
                                <Tab
                                    key={item.name}
                                    value={item.name}
                                    label={
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                            {item.name}
                                            <ArticlesBadge sx={{ bgcolor: item.name === 'Donations' ? 'primary.main' : '#000', color: '#fff' }}>{item.count}</ArticlesBadge>
                                        </Box>
                                    }
                                />
                            ))}
                        </Tabs>

                        {contentDisplayTab === 'Proposals Stance' && (
                            <ProposalsStance
                                activeLayoutProposalSentiments={activeLayoutProposalSentiments}
                                populated_user={populated_user}
                                usersProposalSentiments={usersProposalSentiments}
                                setShowFullStanceDetails={setShowFullStanceDetails}
                                showFullStanceDetails={showFullStanceDetails}
                                userData={userData}
                            />
                        )}
                        {contentDisplayTab === 'Proposal Comments' && <ProposalComments activeLayoutProposalSentiments={activeLayoutProposalSentiments} />}
                        {contentDisplayTab === 'Proposal Sentiments' && <ProposalSentiments activeLayoutProposalSentiments={activeLayoutProposalSentiments} />}
                        {contentDisplayTab === 'Proposal Submissions' && <ProposalSubmissions userProposalsSubmitted={userProposalsSubmitted} />}
                        {contentDisplayTab === 'News Comments' && <NewsComments publicUserData={publicUserData} />}
                        {contentDisplayTab === 'News Submissions' && <NewsSubmissions publicUserData={publicUserData} userNewsSubmitted={userNewsSubmitted} />}
                        {contentDisplayTab === 'Donations' && (
                            <Donations userDonations={userDonations} lifetimeContribution={userDonations.total || 0} />
                        )}
                        {contentDisplayTab === 'Layouts' && <Layouts userLayoutsData={userLayoutsData} />}
                        {contentDisplayTab === 'Verifications' && <Verifications userData={userData} />}
                        {contentDisplayTab === 'Achievements' && <Achievements />}
                        {contentDisplayTab === 'Orders' && <Typography variant="body2">User has no public orders.</Typography>}
                    </Box>
                </ArticlesDialogContent>

                <ArticlesDialogActions>
                    {userReduxState?._id === '5e90cc96579a17440c5d7d52' ? (
                        <Box component="span" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <ArticlesButton
                                onClick={() => setAdminMode(adminMode ? false : { tab: '' })}
                                small
                                active={Boolean(adminMode)}
                            >
                                <EditIcon fontSize="inherit" sx={{ mr: 0.5 }} />Admin Mode
                            </ArticlesButton>
                            <ArticlesButton
                                onClick={() => {
                                    publicUserDataMutate();
                                    personalUserDataMutate();
                                }}
                                small
                                variant="warning"
                            >
                                <RefreshIcon fontSize="inherit" />
                            </ArticlesButton>
                            <Typography variant="caption">{userData?._id}</Typography>
                        </Box>
                    ) : <Box />}

                    <ArticlesButton variant="articles" onClick={handleClose}>Close</ArticlesButton>
                </ArticlesDialogActions>
            </ArticlesDialog>
        </>
    );
}
