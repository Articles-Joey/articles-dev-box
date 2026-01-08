import { useState, useEffect, memo } from 'react';

// import { useSelector, useDispatch } from 'react-redux'

// import Link from 'next/link'
// import dynamic from 'next/dynamic'

import axios from 'axios'

// import Popover from 'react-bootstrap/Popover';
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import { useInView } from 'react-intersection-observer';

// import ROUTES from 'components/constants/routes';
import useAd from '#root/src/hooks/Ads/useAd';
import useAds from '#root/src/hooks/Ads/useAds';

// import SavePromoModal from 'components/Ads/SavePromoModal';
// const SavePromoModal = dynamic(
//     () => import('@/components/Ads/SavePromoModal'),
//     { ssr: false }
// )

// const AdDetailsModal = dynamic(
//     () => import('@/components/Ads/AdDetailsModal'),
//     { ssr: false }
// )

// import generateRandomInteger from 'util/generateRandomInteger'
// import { setViewedAds } from '@/redux/actions/adsActions';
import {
    differenceInMinutes,
    parse,
    parseISO
} from 'date-fns';
import ArticlesButton from '#root/src/components/UI/Button';
// import useAds from 'hooks/Ads/useAds';

// import "../../styles/components/Ads/Ad.scss";
import "#root/src/styles/components/Ad.scss";

function generateRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Ad(props) {

    // const dispatch = useDispatch()

    const userReduxState = false
    const viewedAds = []

    // const userReduxState = useSelector((state) => state.auth.user_details)
    // const viewedAds = useSelector((state) => state.ads.viewed_ads)

    // const reduxAds = useSelector((state) => state.ads.ads)
    // const dev_force_ad = useSelector((state) => state.site.dev_force_ad)

    // const ads = []

    const {
        data: ads,
        isLoading: adsIsLoading,
        mutate: adsMutate
    } = useAds()

    // props.setLocation(props.tabLocation);

    let { previewMode } = props;
    let previewData = props.previewData || {}

    const [adId, setAdId] = useState(null)

    const [randomAdId, setRandomAdId] = useState(null);
    const [promoId, setPromoId] = useState(null);

    // const [ad, setAd] = useState({});

    const [promo, setPromo] = useState(null);
    const [promoIndex, setPromoIndex] = useState(0);

    const [modalShow, setModalShow] = useState(false);
    // const [modalLoading, setModalLoading] = useState(false);

    const [adDetailsExpanded, setAdDetailsExpanded] = useState(false);

    const [selectedDate, handleDateChange] = useState(new Date());

    const [loggedEvents, setLoggedEvents] = useState([]);

    const { data: ad, isLoading: adIsLoading } = useAd(adId)

    useEffect(() => {

        if (!ads) return

        if (ads?.length > 0 && !adId) {
            console.log("Ad Mounted or reduxAds changed")
            setAdId(props.ad_id || ads[generateRandomInteger(0, ads?.length - 1)]?._id)
        }

        return

        let randomId = props.ad_id || reduxAds[generateRandomInteger(0, reduxAds.length - 1)]?._id

        setRandomAdId(randomId)

        getAdData()

    }, [ads]);

    // useEffect(() => {

    //     if (randomAdId) {



    //     }

    // }, [randomAdId]);

    useEffect(() => {

        // if (randomAdId) {

        //     axios.get(`/api/ads/${randomAdId}`, {
        //         params: {
        //             ad_id: props.ad_id,
        //             ...(dev_force_ad && { force_ad: dev_force_ad })
        //         }
        //     })
        //         .then(function (response) {
        //             setAd(response.data.result)
        //         })
        //         .catch(function (error) {
        //             console.log(error);
        //         });

        // }

    }, [ad]);

    useEffect(() => {

        if (ad?.populated_promos && promoIndex >= 0) {
            setPromo(ad?.populated_promos[promoIndex])
        }

    }, [promoIndex, ad]);

    // const popover = (
    //     <Popover className="hours-popover " id="popover-basic">
    //         <Popover.Header as="h3">Store Hours</Popover.Header>
    //         <Popover.Body>
    //             <div className="day-wrap">
    //                 <div className="day">Sunday:</div>
    //                 <div className="hours">6:30AM–8PM</div>
    //             </div>
    //             <div className="day-wrap active">
    //                 <div className="day"><b>Monday:</b></div>
    //                 <div className="hours">6:30AM–8PM</div>
    //             </div>
    //             <div className="day-wrap">
    //                 <div className="day">Tuesday:</div>
    //                 <div className="hours">6:30AM–8PM</div>
    //             </div>
    //             <div className="day-wrap">
    //                 <div className="day">Wednesday:</div>
    //                 <div className="hours">6:30AM–8PM</div>
    //             </div>
    //             <div className="day-wrap">
    //                 <div className="day">Thursday:</div>
    //                 <div className="hours">6:30AM–8PM</div>
    //             </div>
    //             <div className="day-wrap">
    //                 <div className="day">Friday:</div>
    //                 <div className="hours">6:30AM–8PM</div>ad?.
    //             </div>
    //             <div className="day-wrap">
    //                 <div className="day">Saturday:</div>
    //                 <div className="hours">6:30AM–8PM</div>
    //             </div>
    //         </Popover.Body>
    //     </Popover>
    // );

    function adDetailsExpandedToggle() {
        setAdDetailsExpanded(!adDetailsExpanded);
    }

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
        triggerOnce: true
    });

    function logEvent(event) {

        if (previewMode) {
            console.log("Preventing this event from being logged as this ad is being shown in preview mode.")
        }

        if (loggedEvents.find(obj => obj == event)) {
            console.log("Already logged this event");
            return
        }

        axios.get(`/api/ads/event`, {
            params: {
                ad_id: ad?._id,
                event: event
            }
        })
            .then(function (response) {
                setLoggedEvents([...loggedEvents, event])
                console.log(response.data);
                // setAd(response.data.result)
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    useEffect(() => {

        if (!previewMode) {

            console.log("inView", inView)

            if (inView && adId) {

                // Records previously viewed ads from the last 5 minutes

                // Attempts to prevent duplicate viewed ads for more then 5 minutes

                let unexpiredRecentViews = [

                    {
                        ad_id: adId,
                        date: new Date().toString()
                    },

                    ...viewedAds.filter(obj => {

                        console.log(
                            differenceInMinutes(new Date(), new Date(obj.date))
                        )

                        if (
                            differenceInMinutes(new Date(), new Date(obj.date)) > 5
                        ) {
                            console.log("adsViewed - Remove Old Ad View Object")
                            return
                        } else {
                            console.log("adsViewed - Keep Ad View Object")
                            return (obj)
                        }

                    })

                ]

                console.log("unexpiredRecentViews", unexpiredRecentViews)

                // TODO - Record viewed ad locally to prevent repeat
                // dispatch(
                //     setViewedAds(
                //         unexpiredRecentViews
                //         // []
                //         // [
                //         //     {
                //         //         ad_id: adId,
                //         //         date: new Date().toString()
                //         //     },
                //         //     unexpiredRecentViews,
                //         // ]
                //     )
                // )

                // axios.post(`/api/ads/viewed`, {
                //     ad_id: adId,
                //     section: props.section,
                //     section_id: props.section_id
                // })
                //     .then(function (response) {
                //         // console.log(response);
                //         // setAd(response.data.result)
                //     })
                //     .catch(function (error) {
                //         console.log(error);
                //     });

            }

        }

    }, [inView, adId]);

    // TODO - Log when a ad free member would have viewed an ad to later show them how many ads they avoided
    // TODO - Make component to show to user in membership settings page how many ads they avoided

    return (
        <div
            ref={ref}
            className="ad-wrap"
            style={
                {
                    "--articles-ad-background-color": previewData.background_color || ad?.background_color,
                    "--articles-ad-font-color": previewData.font_color || ad?.font_color,
                    "--articles-ad-border-color": previewData.border_color || ad?.border_color,
                }
            }
        >

            {/* TODO */}
            {/* {modalShow &&
                <SavePromoModal
                    setModalShow={setModalShow}
                    promo={promo}
                    ad={ad}
                />
            }

            {adDetailsExpanded &&
                <AdDetailsModal
                    setModalShow={setAdDetailsExpanded}
                    ad={ad}
                    previewData={previewData}
                />
            } */}

            <div
                className='ad'
            >

                <div
                    className="main-panel"
                >

                    <div className="ad-warning flex-header">

                        <div className=''>{ad?.city && 'Local'} Advertisement</div>

                        {/* TODO - Quick link to manage for devs */}
                        {/* {userReduxState?.roles?.isDev &&
                            <div className=''>
                                <Link
                                    href={`${ROUTES.ADVERTISING}/${ad?._id}`}
                                >
                                    <i
                                        className="fad fa-code action me-0"
                                        style={{
                                            fontSize: '0.7rem',
                                            width: '20px',
                                            height: '20px'
                                        }}
                                    >

                                    </i>
                                </Link>
                            </div>
                        } */}

                    </div>

                    <div className="content-wrap">
                        <div className="photo-banner">

                            <div className="logo">
                                {(previewData.logo?.location || ad?.logo?.location) &&
                                    <img
                                        src={previewData?.logo?.key ?
                                            `${process.env.NEXT_PUBLIC_CDN}${previewData?.logo?.key}`
                                            :
                                            `${process.env.NEXT_PUBLIC_CDN}${ad?.logo?.key}`
                                        }
                                        alt=""
                                    />
                                }
                            </div>

                            <div className="icon d-none">
                                <i className="fas fa-mug-hot"></i>
                            </div>

                            <img
                                className="photo" src={
                                    previewData?.background?.key ?
                                        `${process.env.NEXT_PUBLIC_CDN}${previewData.background?.key}`
                                        :
                                        `${process.env.NEXT_PUBLIC_CDN}${ad?.background?.key}`
                                }
                                alt=""
                            />

                        </div>

                        <div className="details-wrap">

                            <div className="detail-title">

                                <div className="detail">
                                    {/* <span className="icon"><i className="fas fa-store-alt"></i></span> */}
                                    <span className='h4'>{previewData?.business || ad?.business}</span>
                                </div>

                                <div className='flex flex-column d-none'>
                                    <div className="detail">
                                        <span className="icon"><i className="fas fa-search-location"></i></span>
                                        <span>{ad?.city}, {ad?.state}</span>
                                    </div>

                                    <div className="detail">

                                        <span className="icon"><i className="fas fa-clock me-2"></i></span>

                                        <span>
                                            6:30AM–8PM
                                            {/* <i className="fas fa-caret-square-down me-0 ms-1"></i> */}
                                            {/* <OverlayTrigger rootClose trigger="click" placement="bottom" overlay={popover}>
                                                <i style={{ cursor: 'pointer' }} className="fas fa-caret-square-down me-0 ms-1"></i>
                                            </OverlayTrigger> */}
                                        </span>

                                    </div>
                                </div>

                            </div>

                            {ad?.city && <div className="details mb-3 d-none">
                                {/* 
                                <div className="detail">
                                    <span className="icon"><i className="fas fa-search-location"></i></span>
                                    <span>{ad?.city}, {ad?.state}</span>
                                </div> */}

                                {/* <div className="detail">
                                    <span className="icon"><i className="fas fa-user-friends"></i></span>
                                    <span>5-10 Employees</span>
                                </div> */}

                                {/* <div className="detail">
                                    <span className="icon"><i className="fas fa-user-friends"></i></span>
                                    <span>Outdoor Seating</span>
                                </div>                           */}

                            </div>}

                            <div className="short-description">{previewData?.description || ad?.description}</div>

                            {/* <p>{JSON.stringify(previewData)}</p> */}

                        </div>
                    </div>

                    {/* Make dynamic */}
                    {(userReduxState?.roles?.isDev && ad?.populated_promos?.length > 0) &&
                        <div>

                            {/* {ad?.populated_promos && <pre>
                                {
                                    JSON.stringify(ad?.populated_promos[Math.floor(Math.random() * ad?.populated_promos?.length)])
                                }
                            </pre>} */}

                            {/* Active Promo */}
                            {promo && <div className="promos-wrap">
                                {
                                    promo &&
                                    <div
                                        key={promo._id}
                                        className="promo-wrap d-flex justify-content-between align-items-center mx-2 p-1 px-2 border border-2 border-light mb-0"
                                    >

                                        <div className=''>
                                            <div>
                                                {promo.title}
                                            </div>
                                            <div className="small">
                                                <div className="small">
                                                    {promo.details}
                                                </div>
                                            </div>
                                        </div>

                                        <ArticlesButton
                                            className="px-3"
                                            small
                                            onClick={() => {
                                                console.log("Load Save Modal")
                                                setModalShow(true)
                                            }}
                                        >
                                            Save
                                        </ArticlesButton>

                                    </div>

                                }
                            </div>}

                            {/* Controls */}
                            <div className='d-flex justify-content-between'>
                                <div className='px-2'>{ad?.populated_promos?.length} Promos Active</div>
                                <div className='controls'>
                                    <i
                                        className="fad fa-arrow-circle-left"
                                        type="button"
                                        onClick={() => {

                                            if (promoIndex == 0) {
                                                setPromoIndex(ad?.populated_promos?.length - 1)
                                            } else {
                                                setPromoIndex(prev => prev - 1)
                                            }

                                        }}
                                    ></i>
                                    {ad?.populated_promos?.map((obj, obj_i) =>
                                        <i
                                            key={obj._id}
                                            className={`fa-square ${obj_i == promoIndex ? 'fad' : 'fas'}`}
                                        >

                                        </i>
                                    )}
                                    <i
                                        className="fad fa-arrow-circle-right"
                                        type="button"
                                        onClick={() => {

                                            if (promoIndex == ad?.populated_promos?.length - 1) {
                                                setPromoIndex(0)
                                            } else {
                                                setPromoIndex(prev => prev + 1)
                                            }

                                        }}
                                    ></i>
                                </div>
                            </div>

                        </div>
                    }

                    <hr style={{ borderColor: 'white' }} className="mt-auto mb-0" />

                    <div className="action-wrap d-flex justify-content-lg-between px-3 py-2">

                        <div
                            onClick={() => {
                                adDetailsExpandedToggle()
                                logEvent('Details')
                            }}
                            className="action flex-grow-1 flex-shrink-0"
                        >
                            Details
                        </div>

                        {/* <a style={
                            {
                                color: ad?.font_color,
                                borderColor: `${ad?.border_color}!important`
                            }
                        } className="action flex-grow-1 flex-shrink-0" href={ad?.website} target="_blank" rel="noreferrer">
                            <div>
                                Hours
                            </div>
                        </a> */}

                        <span className='px-4'></span>

                        <a
                            className="action flex-grow-1 flex-shrink-0"
                            href={ad?.website}
                            target="_blank"
                            rel="noreferrer"
                            onClick={() => logEvent('Website')}
                        >
                            <div>
                                Website
                            </div>
                        </a>

                    </div>
                </div>

            </div>

            {/* {previewMode &&
                <div className='small'>
                    <pre>
                        {JSON.stringify(previewData, null, 2)}
                    </pre>
                </div>
            } */}

            {!previewMode &&
                <div
                    className='advertise-with-us p-1'
                    style={
                        {
                            // ...(props.previewData ? props.previewData.background_color : ad?.background_color),
                            backgroundColor: previewData.background_color || ad?.background_color,
                            color: previewData.font_color || ad?.font_color,
                            borderColor: previewData.border_color || ad?.border_color
                        }
                    }
                >
                    {/* <Link
                        className='small d-block w-100 text-center'
                        href={ROUTES.ADVERTISING}
                    >
                        <i className="fas fa-share me-1"></i>
                        Advertise with Articles Media!
                    </Link> */}
                    <div
                        className='small d-block w-100 text-center'
                    // href={ROUTES.ADVERTISING}
                    >
                        <i className="fas fa-share me-1"></i>
                        Advertise with Articles Media!
                    </div>
                </div>
            }

        </div>
    );
}

export default memo(Ad)