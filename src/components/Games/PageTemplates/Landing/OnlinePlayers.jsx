"use client"
import { lazy, use } from 'react';

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