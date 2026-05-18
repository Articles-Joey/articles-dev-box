import { useEffect, useRef, useState } from "react"

import useUserDetails from "#root/src/hooks/User/useUserDetails.js"
import useUserToken from "#root/src/hooks/User/useUserToken.js"

export default function ReusedSocketLogicHandler({
    pathname,
    useStore,
    useGameStore,
    useSocketStore,
    debugConfig,
    landingConfig,
    gameConfig,
    server,
}) {

    const initialized = useRef(false)
    const [isVisible, setIsVisible] = useState(true)

    const socket = useSocketStore((state) => state.socket)
    const connectSocket = useSocketStore((state) => state.connectSocket)
    const loginSocket = useSocketStore((state) => state.loginSocket)
    const connected = useSocketStore((state) => state.connected)
    const setConnected = useSocketStore((state) => state.setConnected)
    const authenticated = useSocketStore((state) => state.authenticated)
    const setAuthenticated = useSocketStore((state) => state.setAuthenticated)

    const setLobbyDetails = useStore(state => state.setLobbyDetails)
    const debug = useStore(state => state.debug)
    const nickname = useStore(state => state.nickname)

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

    function debugLog(...args) {
        if (debug) {
            console.log("[📶ReusedSocketLogicHandler]", ...args)
        }
    }

    useEffect(() => {

        // Makes sure connect is only called once during reactStrictMode
        if (!initialized.current) {
            initialized.current = true
            connectSocket()
        }

        // if (!socket.connected) return

        socket.on('connect', () => {
            debugLog("Connected to server!");
            setConnected(true);
        });

        socket.on('disconnect', () => {
            debugLog("Disconnected from server!");
            setConnected(false);
            setAuthenticated(false);
        });

        socket.on('force-page', (data) => {
            debugLog("You are being forced to a new page!", data)
            window.location.href = data.page
        });

        socket.on('authenticated', (data) => {
            debugLog("Socket authenticated with server!")
            setAuthenticated(true)
        });

        // console.log(`[📶 Socket] Page change emit`)
        // socket.emit('activePage', pathname);

        socket.on(`landing-details`, function (msg) {
            debugLog(`landing-details`, msg)
            if (landingConfig?.onLandingDetails) {
                landingConfig.onLandingDetails(msg)
            }

            const currentLobbyDetails = useStore.getState().lobbyDetails
            if (JSON.stringify(msg) !== JSON.stringify(currentLobbyDetails)) {
                setLobbyDetails(msg)
            }
        });

        socket.on(`game-update`, function (msg) {

            debugLog(`game-update`, msg)
            if (gameConfig?.onGameUpdate) {
                gameConfig.onGameUpdate(msg)
            }

            const currentGameState = useGameStore.getState().gameState
            const setGameState = useGameStore.getState().setGameState

            if (JSON.stringify(msg) !== JSON.stringify(currentGameState)) {
                debugLog("Updating game state with new data from server")
                setGameState(msg)
            }

        });

        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('force-page');
            socket.off('authenticated');
            socket.off(`landing-details`);
            socket.off(`game-update`);
        };

    }, [socket]);

    // Landing Room Logic
    useEffect(() => {

        if (
            pathname == "/"
            &&
            landingConfig?.handleLandingDetails
        ) {

            if (socket.connected) {
                socket.emit('join-room', `game:${process.env.NEXT_PUBLIC_GAME_KEY}-landing`);
            }

            return function cleanup() {
                socket.emit('leave-room', `game:${process.env.NEXT_PUBLIC_GAME_KEY}-landing`);
                setLobbyDetails({
                    players: [],
                    games: [],
                })
            };

        }

    }, [
        connected,
        landingConfig?.handleLandingDetails,
        pathname,
    ]);

    // Game Room Logic
    useEffect(() => {

        if (
            server
            &&
            connected
            &&
            gameConfig?.handleGameUpdates
            &&
            pathname == "/play"
        ) {
            const roomName = `game:${process.env.NEXT_PUBLIC_GAME_KEY}-room-${server}`;
            // console.log("[📶Socket] Joining game room: ", roomName)
            debugLog("Joining game room: ", roomName)
            socket.emit('join-room', roomName, {
                game_id: server,
                nickname: nickname,
                client_version: '1',

            });

            return function cleanup() {
                socket.emit('leave-room', roomName)
            };
        }

    }, [
        server,
        connected,
        nickname,
        gameConfig?.handleGameUpdates,
        pathname,
    ]);

    // Authentication Logic
    useEffect(() => {

        if (
            connected
            &&
            !authenticated
            &&
            userDetails?.user_id
            &&
            userToken
        ) {

            debugLog("Socket is now connected and not authenticated with a logged in user!")

            loginSocket({
                user_id: userDetails?.user_id,
                socket_id: socket.id,
                token: userToken,
            })

        }

    }, [
        connected,
        authenticated,
        userDetails?.user_id,
        userToken
    ]);

    useEffect(() => {
        if (debugConfig.enabled && debugConfig.autoHide) {
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, debugConfig.autoHideDelay);
            return () => clearTimeout(timer);
        }
    }, [debugConfig.enabled]);

    if (
        debugConfig.enabled
        &&
        isVisible
        &&
        process.env.NODE_ENV !== 'production'
    ) {
        return (
            <div
                style={{
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    color: "white",
                    fontSize: "11px",
                    zIndex: 9999,
                    backgroundColor: "rgba(0,0,0,0.5)",
                    padding: "2px",
                    display: "flex",
                    gap: "8px",
                }}
            >
                <div>Connected: {connected ? "Yes" : "No"}</div>
                <div>Authenticated: {authenticated ? "Yes" : "No"}</div>
                <div>ID: {socket.id}</div>
                <div>Host: {socket.io.uri}</div>
            </div>
        )
    }
}