"use client"
import { lazy, use } from 'react';

import ArticlesButton from '#root/src/components/UI/Button';
import NicknameInput from '../NicknameInput';
import GameMenuPrimaryButtonGroup from '../GameMenuPrimaryButtonGroup';

import useUserDetails from '#root/src/hooks/User/useUserDetails';
import useUserToken from '#root/src/hooks/User/useUserToken';

import OnlinePlayers from '#root/src/components/Games/PageTemplates/Landing/OnlinePlayers';
import Servers from '#root/src/components/Games/PageTemplates/Landing/Servers';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { ArticlesCard, ArticlesCardBody, ArticlesCardFooter, ArticlesCardHeader } from '#root/src/components/UI/muiPrimitives';

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

        <Box
            className="landing-page dev-box-template-landing-page"
            sx={{ 
                position: 'relative', 
                minHeight: '100vh', 
                overflow: 'hidden',
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: 'calc(100vh - 0px)',
            }}
        >

            {AdditionalContent && AdditionalContent}

            <Box className="background-wrap" sx={{ position: 'absolute', inset: 0, zIndex: -1 }}>
                {(LandingBackgroundAnimation && landingAnimation) ?
                    LandingBackgroundAnimation
                    :
                    <Box component="img"
                        src={backgroundImage}
                        alt=""
                        width="100%"
                        height="100%"
                        sx={{ objectFit: 'cover', objectPosition: 'bottom' }}
                    />
                }
            </Box>

            <Box
                data-hide-in-screenshot-mode="true"
                sx={(theme) => ({
                    width: 1,
                    mx: 'auto',
                    px: 1.5,
                    py: 3,
                    display: 'flex',
                    flexDirection: 'column-reverse',
                    justifyContent: 'center',
                    alignItems: 'center',
                    [theme.breakpoints.up(576)]: { maxWidth: 540 },
                    [theme.breakpoints.up(768)]: { maxWidth: 720 },
                    [theme.breakpoints.up(992)]: { maxWidth: 960, flexDirection: 'row' },
                    [theme.breakpoints.up(1200)]: { maxWidth: 1140 },
                    [theme.breakpoints.up(1400)]: { maxWidth: 1320 },
                })}
            >

                <Box
                    sx={{ width: maxInnerWidth }}
                >

                    {PreHeroContent && PreHeroContent}

                    {heroOverride ?
                        heroOverride
                        :
                        !disableHero &&
                        <Box className="landing-hero" sx={{ textAlign: 'center', mb: 2 }}>

                            <Box component="img"
                                src={logoImage}
                                alt=""
                                width="200"
                                height="auto"
                                sx={{ objectFit: 'cover', objectPosition: 'bottom' }}
                            />

                            <Typography component="h1" variant="h2" className={brandingTextClass} sx={{ textAlign: 'center', mb: 0 }}>
                                {process.env.NEXT_PUBLIC_GAME_NAME}
                            </Typography>

                        </Box>
                    }

                    {PostHeroContent && PostHeroContent}

                    {CardOverride ?
                        CardOverride
                        :
                        <ArticlesCard sx={{ mb: 3 }}>

                            <ArticlesCardHeader>

                                <NicknameInput
                                    useStore={useStore}
                                    config={NicknameInputConfig}
                                />

                            </ArticlesCardHeader>

                            {CardBodyOverride ?
                                CardBodyOverride
                                :
                                <ArticlesCardBody>

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
                                                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 3, width: 1 }}
                                                onClick={() => { }}
                                            >
                                                <PlayArrowIcon fontSize="inherit" sx={{ mr: 1 }} />
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

                                </ArticlesCardBody>
                            }

                            <ArticlesCardFooter sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>

                                {CardFooterPrependContent && CardFooterPrependContent}

                                <GameMenuPrimaryButtonGroup
                                    useStore={useStore}
                                    type="Landing"
                                    useRouter={useRouter}
                                />

                                {CardFooterAppendContent && CardFooterAppendContent}

                            </ArticlesCardFooter>

                        </ArticlesCard>
                    }

                    {PostCardContent && PostCardContent}

                    {/* On by default approach  */}
                    {process.env.NEXT_PUBLIC_ENABLE_ARTICLES !== "false" && <Box className="extras">
                        <SessionButton
                            port={process.env.NEXT_PUBLIC_GAME_PORT}
                            friendsButton={true}
                        />

                        <ReturnToLauncherButton />
                    </Box>}

                    {PostExtrasContent && PostExtrasContent}

                </Box>

                {!disableGameScoreboard &&
                    <GameScoreboard
                        game={process.env.NEXT_PUBLIC_GAME_NAME}
                        style="Default"
                        darkMode={darkMode ? true : false}
                        prepend={
                            (typeof RotatingMascot === 'function' && RotatingMascot) ?
                                <>
                                    <Box
                                        sx={{
                                            width: '100%',
                                            height: '200px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        {/* <RotatingMascot /> */}
                                    </Box>
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
                        sx={(theme) => ({
                            mt: '1rem',
                            [theme.breakpoints.up(992)]: {
                                mt: 0,
                                display: 'block',
                                position: 'absolute',
                                right: '1rem',
                                top: '50%',
                                transform: 'translateY(-50%)',
                            },
                        })}
                    />
                }

            </Box>

        </Box>
    );
}
