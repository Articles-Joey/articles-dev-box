import { lazy, memo, useEffect, useState } from 'react';
import { differenceInMinutes } from 'date-fns';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import BroadcastOnPersonalIcon from '@mui/icons-material/BroadcastOnPersonal';
import ChatIcon from '@mui/icons-material/Chat';
import CircleIcon from '@mui/icons-material/Circle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import ShareIcon from '@mui/icons-material/Share';

import Link from '#root/src/components/UI/Link';
import ArticlesButton from '#root/src/components/UI/Button';
import ArticlesDate from '#root/src/components/UI/ArticlesDate';
import { articlesShadow } from '#root/src/components/UI/muiPrimitives';
import useAd from '#root/src/hooks/Ads/useAd';
import useAds from '#root/src/hooks/Ads/useAds';
import numberWithCommas from '#root/src/util/numberWithCommas';

const AdDetailsModal = lazy(() => import('#root/src/components/Ads/AdDetailsModal'));
const AdConfirmExitModal = lazy(() => import('#root/src/components/Ads/AdConfirmExitModal'));

function generateRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const panelSx = {
    bgcolor: 'var(--articles-ad-background-color, #f9edcd)',
    color: 'var(--articles-ad-font-color, #000)',
    height: 400,
    display: 'flex',
    flexDirection: 'column',
};

const actionSx = {
    p: 0.5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    flexShrink: 0,
    border: '1px solid var(--articles-ad-border-color, #f9edcd)',
    color: 'var(--articles-ad-font-color, #000)',
    borderRadius: '10px',
    mx: 'auto',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'background-color 200ms, color 200ms',
    '&:hover': { bgcolor: '#fff', color: '#000' },
    '&:active': { bgcolor: 'grey.500' },
};

function Ad(props) {
    const {
        previewMode,
        user_ad_token,
        userDetails,
        userDetailsLoading,
        prepend,
        append,
        sx: adWrapSx = {},
    } = props;

    const viewedAds = [];
    const userReduxState = false;
    const previewData = props.previewData || {};

    const [adId, setAdId] = useState(null);
    const [promo, setPromo] = useState(null);
    const [promoIndex, setPromoIndex] = useState(0);
    const [adDetailsExpanded, setAdDetailsExpanded] = useState(false);
    const [confirmAdExitModal, setConfirmAdExitModal] = useState(false);
    const [loggedEvents, setLoggedEvents] = useState([]);
    const [adsAvoided, setAdsAvoided] = useState(null);
    const [adsAvoidedLoading, setAdsAvoidedLoading] = useState(false);

    const { data: ads } = useAds({
        loading: userDetailsLoading,
        disabled: userDetails?.articles_membership?.status === 'Active',
    });
    const { data: ad } = useAd(adId, user_ad_token);

    useEffect(() => {
        if (ads?.length > 0 && !adId) {
            setAdId(props.ad_id || ads[generateRandomInteger(0, ads.length - 1)]?._id);
        }
    }, [ads, adId, props.ad_id]);

    useEffect(() => {
        if (ad?.populated_promos && promoIndex >= 0) {
            setPromo(ad.populated_promos[promoIndex]);
        }
    }, [promoIndex, ad]);

    const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });

    function logEvent(event) {
        if (previewMode || loggedEvents.includes(event)) return;

        const params = new URLSearchParams({ ad_id: ad?._id, event }).toString();
        fetch(`/api/ads/event?${params}`)
            .then((response) => response.json())
            .then(() => setLoggedEvents((current) => [...current, event]))
            .catch((error) => console.error(error));
    }

    useEffect(() => {
        if (previewMode || !inView || !adId) return;

        const unexpiredRecentViews = [
            { ad_id: adId, date: new Date().toString() },
            ...viewedAds.filter((item) => differenceInMinutes(new Date(), new Date(item.date)) <= 5),
        ];

        if (process.env.NODE_ENV === 'development') {
            console.log('Recent ad views', unexpiredRecentViews);
        }
    }, [inView, adId, previewMode]);

    function logAdAvoided() {
        setAdsAvoidedLoading(true);
        const url = process.env.NODE_ENV === 'development'
            ? 'http://localhost:3001/api/user/advertising/avoided'
            : 'https://articles.media/api/user/advertising/avoided';
        const params = new URLSearchParams({ user_id: userDetails?._id }).toString();

        fetch(`${url}?${params}`, { headers: { 'x-articles-api-key': user_ad_token } })
            .then((response) => response.json())
            .then((data) => setAdsAvoided(data.avoided_count))
            .catch((error) => console.error(error))
            .finally(() => setAdsAvoidedLoading(false));
    }

    useEffect(() => {
        if (!previewMode && userDetails?.articles_membership?.status === 'Active' && inView) {
            logAdAvoided();
        }
    }, [inView, previewMode, userDetails?.articles_membership?.status]);

    if (userDetailsLoading) return null;

    const isActiveMember = userDetails?.articles_membership?.status === 'Active';
    const promos = ad?.populated_promos || [];

    return (
        <Box
            ref={ref}
            className={classNames('ad-wrap', { 'active-member': isActiveMember })}
            sx={[
                {
                    zIndex: 1,
                    mx: 'auto',
                    mb: 2,
                    maxWidth: 312,
                    width: 1,
                    '--articles-ad-background-color': previewData.background_color || ad?.background_color || '#f9edcd',
                    '--articles-ad-font-color': previewData.font_color || ad?.font_color || '#000',
                    '--articles-ad-border-color': previewData.border_color || ad?.border_color || '#f9edcd',
                },
                ...(Array.isArray(adWrapSx) ? adWrapSx : [adWrapSx]),
            ]}
        >
            {adDetailsExpanded && (
                <AdDetailsModal setModalShow={setAdDetailsExpanded} ad={ad} previewData={previewData} />
            )}
            {confirmAdExitModal && (
                <AdConfirmExitModal setModalShow={setConfirmAdExitModal} ad={ad} previewData={previewData} />
            )}

            {prepend && <Box className="prepend-container">{prepend}</Box>}

            <Box
                className="ad"
                sx={(theme) => ({
                    position: 'relative',
                    alignSelf: 'flex-start',
                    width: 1,
                    zIndex: 2,
                    fontFamily: 'brandon-grotesque, sans-serif',
                    boxShadow: articlesShadow,
                    fontSize: 16,
                    [theme.breakpoints.up(769)]: { fontSize: 14 },
                })}
            >
                {!isActiveMember && (
                    <Box className="main-panel" sx={panelSx}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                px: 1.5,
                                py: '0.1rem',
                                fontWeight: 900,
                                fontSize: '1rem',
                                borderBottom: '1px solid var(--articles-ad-border-color, #f9edcd)',
                            }}
                        >
                            <Box>{ad?.city && 'Local'} Advertisement</Box>
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    height: 125,
                                    width: 1,
                                    flexShrink: 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    pl: 2,
                                    borderBottom: '1px solid #000',
                                }}
                            >
                                {(previewData.logo?.location || ad?.logo?.location) && (
                                    <Box
                                        component="img"
                                        src={previewData?.logo?.key
                                            ? `${process.env.NEXT_PUBLIC_CDN}${previewData.logo.key}`
                                            : `${process.env.NEXT_PUBLIC_CDN}${ad?.logo?.key}`}
                                        alt=""
                                        sx={{ width: 75, height: 75, objectFit: 'contain', zIndex: 1 }}
                                    />
                                )}

                                {(ad?.background?.key || previewData?.background?.key) && (
                                    <Box
                                        component="img"
                                        src={previewData?.background?.key
                                            ? `${process.env.NEXT_PUBLIC_CDN}${previewData.background.key}`
                                            : `${process.env.NEXT_PUBLIC_CDN}${ad?.background?.key}`}
                                        alt=""
                                        sx={{ position: 'absolute', inset: 0, width: 1, height: 1, objectFit: 'cover' }}
                                    />
                                )}
                            </Box>

                            <Box sx={{ width: 1 }}>
                                <Box sx={{ p: 1.5, pb: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant="h4" sx={{ fontFamily: 'inherit', fontSize: '1.5rem' }}>
                                        {previewData?.business || ad?.business}
                                    </Typography>
                                </Box>
                                <Box sx={{ px: 1.5, pt: 0.5, pb: 0, minHeight: 50, maxHeight: 125, overflowY: 'auto' }}>
                                    {previewData?.description || ad?.description}
                                </Box>
                            </Box>
                        </Box>

                        {userReduxState?.roles?.isDev && promos.length > 0 && (
                            <Box>
                                {promo && (
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mx: 2, p: 1, px: 2, border: 2, borderColor: 'common.white' }}>
                                        <Box>
                                            <Box>{promo.title}</Box>
                                            <Typography variant="body2">{promo.details}</Typography>
                                        </Box>
                                        <ArticlesButton sx={{ px: 3 }} small>Save</ArticlesButton>
                                    </Box>
                                )}

                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Box sx={{ px: 2 }}>{promos.length} Promos Active</Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <IconButton
                                            size="small"
                                            onClick={() => setPromoIndex((current) => current === 0 ? promos.length - 1 : current - 1)}
                                        >
                                            <ArrowCircleLeftIcon />
                                        </IconButton>
                                        {promos.map((item, index) => (
                                            <CircleIcon key={item._id} sx={{ fontSize: 8, opacity: index === promoIndex ? 1 : 0.35 }} />
                                        ))}
                                        <IconButton
                                            size="small"
                                            onClick={() => setPromoIndex((current) => current === promos.length - 1 ? 0 : current + 1)}
                                        >
                                            <ArrowCircleRightIcon />
                                        </IconButton>
                                    </Box>
                                </Box>
                            </Box>
                        )}

                        <Divider sx={{ mt: 'auto', mb: 0, borderColor: 'var(--articles-ad-border-color, #f9edcd)' }} />

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', px: 3, py: 2 }}>
                            <Box
                                role="button"
                                tabIndex={0}
                                onClick={() => {
                                    setAdDetailsExpanded(true);
                                    logEvent('Details');
                                }}
                                sx={actionSx}
                            >
                                Details
                            </Box>

                            <Box sx={{ px: 4 }} />

                            <Box
                                component="a"
                                href={ad?.website}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(event) => {
                                    event.preventDefault();
                                    setConfirmAdExitModal(true);
                                    logEvent('Confirm Exit Modal Opened');
                                }}
                                sx={actionSx}
                            >
                                Website
                            </Box>
                        </Box>
                    </Box>
                )}

                {isActiveMember && (
                    <Box className="main-panel" sx={{ ...panelSx, height: 310 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Box sx={{ position: 'relative', height: 125, width: 1, borderBottom: '1px solid #000' }}>
                                <Box sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000' }}>
                                    <BroadcastOnPersonalIcon sx={{ fontSize: '3rem', mr: 2 }} />
                                    <Box sx={{ display: 'flex', flexDirection: 'column', lineHeight: 1, alignItems: 'flex-start' }}>
                                        <Typography sx={{ fontWeight: 700, fontSize: '2rem', lineHeight: 1 }}>
                                            {adsAvoidedLoading ? <CircularProgress size={24} color="inherit" /> : numberWithCommas(adsAvoided || 0)}
                                        </Typography>
                                        <Typography sx={{ fontSize: '1.5rem', lineHeight: 1 }}>ads avoided.</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ position: 'absolute', bottom: 0, left: 0, py: 0.5, px: 1, bgcolor: 'rgba(0,0,0,.5)', color: '#fff', fontSize: '0.75rem', borderTopRightRadius: 1 }}>
                                    Member since: <ArticlesDate format="PP" date={userDetails?.articles_membership?.membership_started} />
                                </Box>
                            </Box>

                            <Box sx={{ width: 1 }}>
                                <Box sx={{ p: 1.5, pb: 0 }}>
                                    <Typography variant="h4" sx={{ fontFamily: 'inherit', fontSize: '1.5rem' }}>Thanks for the support!</Typography>
                                </Box>
                                <Box sx={{ px: 1.5, pt: 0.5, pb: 0 }}>
                                    <Box sx={{ mb: 2 }}>Without support from users like you, we wouldn&apos;t be here.</Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <Link newPage href="https://articles.media/messages" sx={{ color: '#000', '&:hover': { textDecorationColor: 'red' } }}>
                                            <ChatIcon fontSize="inherit" sx={{ mr: 0.5 }} />0 unread messages.
                                        </Link>
                                        <Link newPage href="https://articles.media/settings/notifications" onClick={logAdAvoided} sx={{ color: '#000', '&:hover': { textDecorationColor: 'red' } }}>
                                            <NotificationsIcon fontSize="inherit" sx={{ mr: 0.5 }} />0 notifications.
                                        </Link>
                                        <Link newPage href="https://articles.media/settings/account" sx={{ color: '#000', '&:hover': { textDecorationColor: 'red' } }}>
                                            <SettingsIcon fontSize="inherit" sx={{ mr: 0.5 }} />Manage account settings.
                                        </Link>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                )}
            </Box>

            {append && <Box className="append-container">{append}</Box>}

            {!previewMode && (
                <Box
                    sx={{
                        p: 1,
                        bgcolor: previewData.background_color || ad?.background_color || '#f9edcd',
                        color: previewData.font_color || ad?.font_color || '#000',
                        borderTop: 2,
                        borderColor: previewData.border_color || ad?.border_color || '#f9edcd',
                    }}
                >
                    <Link
                        href="https://articles.media/advertising"
                        newPage
                        sx={{ display: 'block', width: 1, textAlign: 'center', color: 'inherit', typography: 'body2', '&:hover': { textDecorationColor: 'red' } }}
                    >
                        <ShareIcon fontSize="inherit" sx={{ mr: 0.5 }} />
                        Advertise with Articles Media!
                    </Link>
                </Box>
            )}
        </Box>
    );
}

export default memo(Ad);
