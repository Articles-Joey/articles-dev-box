"use client"
import { lazy, use } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ArticlesBadge } from '#root/src/components/UI/muiPrimitives';

/**
 * Online players summary component.
 *
 * @param {Object} props
 * @param {Function} props.useStore - Store hook to access lobby/player counts
 * @param {Object} props.multiplayerConfig - Multiplayer configuration defining templates
 * @returns {React.Element}
 */
export default function OnlinePlayers({
    useStore,
    multiplayerConfig
}) {

    const lobbyDetails = useStore(state => state.lobbyDetails)
    const landing_player_count = useStore(state => state.lobbyDetails.landing_player_count)
    const online_player_count = useStore(state => state.lobbyDetails.online_player_count)

    switch (multiplayerConfig.onlinePlayersTemplate) {

        case "2.0":
            return (
                <Box>

                    <Typography variant="body2" sx={{ fontWeight: 700, mb: 0, textAlign: 'center' }}>
                        {(
                            online_player_count || 0
                        )} player{(online_player_count !== 1) && 's'} {online_player_count === 1 ? 'is' : 'are'} online.
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 0.5, mb: 2 }}>
                        <ArticlesBadge sx={{ bgcolor: '#000', color: '#fff' }}>
                            {(
                                landing_player_count || 0
                            )} in lobby
                        </ArticlesBadge>
                        <ArticlesBadge sx={{ bgcolor: '#000', color: '#fff' }}>
                            {(
                                (online_player_count - landing_player_count) || 0
                            )} in game
                        </ArticlesBadge>
                    </Box>

                </Box>
            )
        default:
            return (
                <Typography variant="body2" sx={{ fontWeight: 700, mb: 1, textAlign: 'center' }}>
                    {(
                        lobbyDetails?.online_player_count
                        ||
                        lobbyDetails?.players?.length || 0
                    )} player{(lobbyDetails?.online_player_count || lobbyDetails?.players?.length !== 1) && 's'} in the lobby.
                </Typography>
            )
    }

}
