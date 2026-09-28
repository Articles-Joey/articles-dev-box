"use client"
import { lazy, use } from 'react';

import ArticlesButton from '#root/src/components/UI/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

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
        <Box className="servers" sx={{ display: 'grid', gap: 1 }}>

            {Array.from({ length: multiplayerConfig?.defaultServers }).map((_, id) => {

                const serverNumber = id + 1;

                let lobbyLookup = lobbyDetails?.games?.find(lobby =>
                    parseInt(lobby.server_id) == serverNumber
                )

                return (
                    <Box key={id} className="server" sx={{ border: 1, borderColor: 'divider', borderRadius: 1, p: 1.5 }}>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: 1, mb: 2 }}>
                            <Typography sx={{ mb: 0, fontSize: '0.9rem', fontWeight: 700 }}>Server {serverNumber}</Typography>
                            <Box sx={{ mb: 0 }}>{lobbyLookup?.players?.length || 0}/4</Box>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-around', width: 1, mb: 1 }}>
                            {[1, 2, 3, 4].map(player_count => {

                                let playerLookup = false

                                if (lobbyLookup?.players?.length >= player_count) playerLookup = true

                                return (
                                    <Box key={player_count} className="icon" sx={{
                                        width: '20px',
                                        height: '20px',
                                        ...(playerLookup ? {
                                            backgroundColor: 'black',
                                        } : {
                                            backgroundColor: 'gray',
                                        }),
                                        border: '1px solid black'
                                    }}>

                                    </Box>
                                )
                            })}
                        </Box>

                        <Link
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
                                sx={{ px: 3 }}
                                disabled={multiplayerConfig?.comingSoon}
                            >
                                {multiplayerConfig?.comingSoon ? "Coming Soon" : "Join Game"}
                            </ArticlesButton>
                        </Link>

                    </Box>
                )
            })}

        </Box>
    )
}
