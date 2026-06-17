"use client"
import { lazy, use } from 'react';

import ArticlesButton from '#root/src/components/UI/Button';
import NicknameInput from '../NicknameInput';
import GameMenuPrimaryButtonGroup from '../GameMenuPrimaryButtonGroup';

import useUserDetails from '#root/src/hooks/User/useUserDetails';
import useUserToken from '#root/src/hooks/User/useUserToken';

import OnlinePlayers from '#root/src/components/Games/PageTemplates/Landing/OnlinePlayers';
import Servers from '#root/src/components/Games/PageTemplates/Landing/Servers';

const SessionButton = lazy(() => import('#root/src/components/User/SessionButton'));
const ReturnToLauncherButton = lazy(() => import('#root/src/components/Games/ReturnToLauncherButton'));
const GameScoreboard = lazy(() => import('#root/src/components/Games/GameScoreboard'));
const Ad = lazy(() => import('#root/src/components/Ads/Ad'));

/**
 * Landing page template for a game with single/multiplayer options, scoreboard and ads.
 *
 * @param {Object} props - Component props
 * @param {Function} props.useStore - Zustand (or similar) store hook
 * @param {Function} props.useSocketStore - Socket store hook
 * @param {React.Component|Function|Node} props.RotatingMascot - Mascot component or node
 * @param {Function} props.Link - Router Link component
 * @param {string} props.logoImage - URL for the logo image
 * @param {string} props.backgroundImage - URL for the background image
 * @param {React.Node} [props.CardBodyOverride] - Overrides the default card body
 * @param {React.Node} [props.CardBodyAppendContent] - Content appended to card body
 * @param {React.Node} [props.CardBodyPrependContent] - Content prepended to card body
 * @param {Object} [props.singlePlayerConfig] - Single player configuration
 * @param {Object} [props.multiplayerConfig] - Multiplayer configuration
 * @param {string} [props.brandingTextClass] - Extra class for branding text
 * @param {boolean} [props.disableHero] - Disable hero section
 * @param {React.Node} [props.heroOverride] - Override for hero area
 * @param {boolean} [props.disableAd] - Disable ad slot
 * @param {boolean} [props.disableGameScoreboard] - Disable scoreboard
 * @param {Object} [props.gameScoreboardConfig] - Config for scoreboard
 * @param {string|number} [props.maxInnerWidth] - Max inner width (CSS value)
 * @param {React.Node} [props.AdditionalContent] - Additional top-level content
 * @param {React.Node} [props.PostCardContent] - Content shown after the card
 * @param {React.Node} [props.PostExtrasContent] - Content shown after extras
 * @param {React.Node} [props.PreHeroContent] - Content shown before hero
 * @param {React.Node} [props.PostHeroContent] - Content shown after hero
 * @param {Object} [props.NicknameInputConfig] - Config for `NicknameInput`
 * @param {React.Node} [props.CardOverride] - Completely override the card
 * @param {React.Node} [props.LandingBackgroundAnimation] - Optional background animation node
 * @param {Function} [props.useRouter] - Router hook (optional)
 * @returns {React.Element} Landing page element
 */
export default function PageTemplateLandingPage({
    useStore,
    useSocketStore,
    RotatingMascot,
    Link,
    logoImage,
    backgroundImage,
    CardBodyOverride,
    CardBodyAppendContent,
    CardBodyPrependContent,
    CardFooterAppendContent,
    CardFooterPrependContent,
    singlePlayerConfig,
    multiplayerConfig,
    brandingTextClass,
    disableHero,
    heroOverride,
    disableAd,
    disableGameScoreboard,
    gameScoreboardConfig,
    maxInnerWidth = "20rem",
    AdditionalContent = null,
    PostCardContent = null,
    PostExtrasContent = null,
    PreHeroContent = null,
    PostHeroContent = null,
    NicknameInputConfig = null,
    CardOverride = null,
    LandingBackgroundAnimation = null,
    useRouter = null,
}) {

    // const {
    //     socket,
    // } = useSocketStore(state => ({
    //     socket: state.socket,
    // }));

    const {
        data: userToken,
        error: userTokenError,
        isLoading: userTokenLoading,
        mutate: userTokenMutate
    } = useUserToken(
        process.env.NEXT_PUBLIC_GAME_PORT
    );

    const {
        data: userDetails,
        error: userDetailsError,
        isLoading: userDetailsLoading,
        mutate: userDetailsMutate
    } = useUserDetails({
        token: userToken
    });

    const darkMode = useStore(state => state.darkMode)
    const lobbyDetails = useStore(state => state.lobbyDetails)
    const landingAnimation = useStore(state => state.landingAnimation)

    function finalSinglePlayerLink(singlePlayerConfig) {

        if (singlePlayerConfig?.attachUrlParams) {
            const url = new URL('/play', window.location.origin);

            Object.entries(singlePlayerConfig.attachUrlParams).forEach(([key, value]) => {
                url.searchParams.set(key, value);
            });

            return url.pathname + url.search;
        } else {
            return '/play';
        }

    }

    return (

        <div className="landing-page dev-box-template-landing-page">

            {AdditionalContent && AdditionalContent}

            <div className='background-wrap'>
                {(LandingBackgroundAnimation && landingAnimation) ?
                    LandingBackgroundAnimation
                    :
                    <img
                        src={backgroundImage}
                        alt=""
                        width="100%"
                        height="100%"
                        style={{ objectFit: 'cover', objectPosition: 'bottom' }}
                    />
                }
            </div>

            <div
                className="container d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center py-3"
            >

                <div
                    className=''
                    style={{ "width": maxInnerWidth }}
                >

                    {PreHeroContent && PreHeroContent}

                    {heroOverride ?
                        heroOverride
                        :
                        !disableHero &&
                        <div className='landing-hero text-center mb-2'>

                            <img
                                src={logoImage}
                                alt=""
                                width="200"
                                height="auto"
                                style={{ objectFit: 'cover', objectPosition: 'bottom' }}
                            />

                            <h1 className={`text-center mb-0 ${brandingTextClass}`}>
                                {process.env.NEXT_PUBLIC_GAME_NAME}
                            </h1>

                        </div>
                    }

                    {PostHeroContent && PostHeroContent}

                    {CardOverride ?
                        CardOverride
                        :
                        <div className="card card-articles mb-3">

                            <div className="card-header">

                                <NicknameInput
                                    useStore={useStore}
                                    config={NicknameInputConfig}
                                />

                            </div>

                            {CardBodyOverride ?
                                CardBodyOverride
                                :
                                <div className="card-body">

                                    {CardBodyPrependContent && CardBodyPrependContent}

                                    {singlePlayerConfig &&
                                        <Link
                                            href={finalSinglePlayerLink(singlePlayerConfig)}
                                            style={{
                                                textDecoration: "none"
                                            }}
                                        >
                                            <ArticlesButton
                                                variant=""
                                                className="d-flex justify-content-center align-items-center mb-3 w-100"
                                                onClick={() => { }}
                                            >
                                                <i className='fad fa-play me-2'></i>
                                                Single Player
                                            </ArticlesButton>
                                        </Link>
                                    }

                                    {multiplayerConfig &&
                                        <>
                                            <OnlinePlayers
                                                useStore={useStore}
                                                multiplayerConfig={multiplayerConfig}
                                            />

                                            <Servers
                                                useStore={useStore}
                                                multiplayerConfig={multiplayerConfig}
                                                Link={Link}
                                            />
                                        </>
                                    }

                                    {CardBodyAppendContent && CardBodyAppendContent}

                                </div>
                            }

                            <div className="card-footer d-flex flex-wrap justify-content-center">

                                {CardFooterPrependContent && CardFooterPrependContent}

                                <GameMenuPrimaryButtonGroup
                                    useStore={useStore}
                                    type="Landing"
                                    useRouter={useRouter}
                                />

                                {CardFooterAppendContent && CardFooterAppendContent}

                            </div>

                        </div>
                    }

                    {PostCardContent && PostCardContent}

                    {/* On by default approach  */}
                    {process.env.NEXT_PUBLIC_ENABLE_ARTICLES !== "false" && <div className="extras">
                        <SessionButton
                            port={process.env.NEXT_PUBLIC_GAME_PORT}
                            friendsButton={true}
                        />

                        <ReturnToLauncherButton />
                    </div>}

                    {PostExtrasContent && PostExtrasContent}

                </div>

                {!disableGameScoreboard &&
                    <GameScoreboard
                        game={process.env.NEXT_PUBLIC_GAME_NAME}
                        style="Default"
                        darkMode={darkMode ? true : false}
                        prepend={
                            (typeof RotatingMascot === 'function' && RotatingMascot) ?
                                <>
                                    <div
                                        style={{
                                            width: '100%',
                                            height: '200px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        {/* <RotatingMascot /> */}
                                    </div>
                                </>
                                :
                                <>
                                    {RotatingMascot}
                                </>
                        }
                        {...gameScoreboardConfig}
                    />
                }

                {!disableAd &&
                    <Ad
                        style="Default"
                        section={"Games"}
                        section_id={process.env.NEXT_PUBLIC_GAME_NAME}
                        darkMode={darkMode ? true : false}
                        user_ad_token={userToken}
                        userDetails={userDetails}
                        userDetailsLoading={userDetailsLoading}
                    />
                }

            </div>

        </div>
    );
}