"use client"
import { lazy, use } from 'react';

import ArticlesButton from '#root/src/components/UI/Button';

/**
 * Server list renderer used on the landing page. Shows available servers and join buttons.
 *
 * @param {Object} props
 * @param {Function} props.useStore - Store hook to access lobby details
 * @param {Object} props.multiplayerConfig - Multiplayer configuration (e.g. defaultServers)
 * @param {Function|Component} props.Link - Router Link component
 * @returns {React.Element}
 */
export default function Servers({
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