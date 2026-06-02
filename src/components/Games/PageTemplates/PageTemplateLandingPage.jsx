"use client"
import { lazy, use } from 'react';

import ArticlesButton from '../../UI/Button';
import NicknameInput from '../NicknameInput';
import GameMenuPrimaryButtonGroup from '../GameMenuPrimaryButtonGroup';

import useUserDetails from '../../../hooks/User/useUserDetails';
import useUserToken from '../../../hooks/User/useUserToken';

const SessionButton = lazy(() => import('../../User/SessionButton'));
const ReturnToLauncherButton = lazy(() => import('../ReturnToLauncherButton'));
const GameScoreboard = lazy(() => import('../GameScoreboard'));
const Ad = lazy(() => import('../../Ads/Ad'));

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
                                            href="/play"
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
                                <GameMenuPrimaryButtonGroup
                                    useStore={useStore}
                                    type="Landing"
                                    useRouter={useRouter}
                                />
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

function Servers({
    useStore,
    multiplayerConfig,
    Link,
}) {

    const lobbyDetails = useStore(state => state.lobbyDetails)
    const online_player_count = useStore(state => state.lobbyDetails.online_player_count)
    const landing_player_count = useStore(state => state.lobbyDetails.landing_player_count)

    return (
        <div className="servers">

            {Array.from({ length: multiplayerConfig?.defaultServers }).map((_, id) => {

                const serverNumber = id + 1;

                let lobbyLookup = lobbyDetails?.games?.find(lobby =>
                    parseInt(lobby.server_id) == serverNumber
                )

                return (
                    <div key={id} className="server">

                        <div className='d-flex justify-content-between align-items-center w-100 mb-2'>
                            <div className="mb-0" style={{ fontSize: '0.9rem' }}><b>Server {serverNumber}</b></div>
                            <div className='mb-0'>{lobbyLookup?.players?.length || 0}/4</div>
                        </div>

                        <div className='d-flex justify-content-around w-100 mb-1'>
                            {[1, 2, 3, 4].map(player_count => {

                                let playerLookup = false

                                if (lobbyLookup?.players?.length >= player_count) playerLookup = true

                                return (
                                    <div key={player_count} className="icon" style={{
                                        width: '20px',
                                        height: '20px',
                                        ...(playerLookup ? {
                                            backgroundColor: 'black',
                                        } : {
                                            backgroundColor: 'gray',
                                        }),
                                        border: '1px solid black'
                                    }}>

                                    </div>
                                )
                            })}
                        </div>

                        <Link
                            className={``}
                            href={{
                                pathname: `/play`,
                                query: {
                                    server: serverNumber
                                }
                            }}
                            style={{
                                ...(multiplayerConfig?.comingSoon ? {
                                    pointerEvents: "none"
                                } : {

                                })
                            }}
                        >
                            <ArticlesButton
                                small
                                className="px-3"
                                disabled={multiplayerConfig?.comingSoon}
                            >
                                {multiplayerConfig?.comingSoon ? "Coming Soon" : "Join Game"}
                            </ArticlesButton>
                        </Link>

                    </div>
                )
            })}

        </div>
    )
}

function OnlinePlayers({
    useStore,
    multiplayerConfig
}) {

    const lobbyDetails = useStore(state => state.lobbyDetails)
    const landing_player_count = useStore(state => state.lobbyDetails.landing_player_count)
    const online_player_count = useStore(state => state.lobbyDetails.online_player_count)

    switch (multiplayerConfig.onlinePlayersTemplate) {

        case "2.0":
            return (
                <div>

                    <div className="fw-bold mb-0 small text-center">
                        {(
                            online_player_count || 0
                        )} player{(online_player_count !== 1) && 's'} {online_player_count === 1 ? 'is' : 'are'} online.
                    </div>

                    <div className='d-flex justify-content-center mb-2'>
                        <div className="badge bg-black text-white me-1">
                            {(
                                landing_player_count || 0
                            )} in lobby
                        </div>
                        <div className="badge bg-black text-white">
                            {(
                                (online_player_count - landing_player_count) || 0
                            )} in game
                        </div>
                    </div>

                </div>
            )
        default:
            return (
                <div className="fw-bold mb-1 small text-center">
                    {(
                        lobbyDetails?.online_player_count
                        ||
                        lobbyDetails?.players?.length || 0
                    )} player{(lobbyDetails?.online_player_count || lobbyDetails?.players?.length !== 1) && 's'} in the lobby.
                </div>
            )
    }

}