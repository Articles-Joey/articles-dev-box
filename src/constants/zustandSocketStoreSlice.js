// import { create } from "zustand";
// import { createWithEqualityFn as create } from 'zustand/traditional'
// import { io } from "socket.io-client";

const game_name_key = process.env.NEXT_PUBLIC_GAME_KEY

export default function zustandSocketStoreSlice(set, get, io) {
    let cleanupSocketListeners;

    return {
        socket: io({
            autoConnect: false
        }),
        serverUrl: process.env.NEXT_PUBLIC_NODE_SERVER, // Default server URL
        connectSocket: (url) => {
            // console.log("[📶Socket] connectSocket called")
            cleanupSocketListeners?.();
            get().socket?.disconnect();

            const newSocket = io(url || process.env.NEXT_PUBLIC_NODE_SERVER, {
                transports: ["websocket"],
                autoConnect: false,
                reconnection: true,
                reconnectionDelay: 5000,
                reconnectionDelayMax: 10000,
                query: {
                    client: process.env.NEXT_PUBLIC_GAME_KEY,
                },
            });
            // Ignore events from a socket that has since been replaced.
            const updateConnection = (state) => {
                if (get().socket === newSocket) {
                    set(state);
                }
            };
            const onConnect = () => updateConnection({
                connected: true,
                connecting: false,
                failedConnection: false,
            });
            const onConnectionFailed = () => updateConnection({
                connected: false,
                connecting: false,
                failedConnection: true,
                authenticated: false,
            });
            const onDisconnect = (reason) => updateConnection({
                connected: false,
                connecting: false,
                failedConnection: reason !== 'io client disconnect',
                authenticated: false,
            });
            // Keep a failure visible during automatic retries until connected.
            const onReconnectAttempt = () => updateConnection({ connecting: true });

            newSocket.on('connect', onConnect);
            newSocket.on('connect_error', onConnectionFailed);
            newSocket.on('disconnect', onDisconnect);
            newSocket.io.on('reconnect_attempt', onReconnectAttempt);
            newSocket.io.on('reconnect_failed', onConnectionFailed);
            cleanupSocketListeners = () => {
                newSocket.off('connect', onConnect);
                newSocket.off('connect_error', onConnectionFailed);
                newSocket.off('disconnect', onDisconnect);
                newSocket.io.off('reconnect_attempt', onReconnectAttempt);
                newSocket.io.off('reconnect_failed', onConnectionFailed);
            };

            set({
                socket: newSocket,
                connected: false,
                connecting: true,
                failedConnection: false,
                authenticated: false,
            });
            newSocket.connect();
        },
        setServerUrl: (url) => set({ serverUrl: url }),
        disconnectSocket: () => {
            get().socket?.disconnect();
            set({
                connected: false,
                connecting: false,
                failedConnection: false,
                authenticated: false,
            });
            // Disconnect but do not dump socket store or socket.on and socket.connected will be undefined if not careful
            // return { socket: null };
        },
        startGame: (gameId, status) => {
            set((state) => {
                state.socket.emit(`game:${game_name_key}:start`, {
                    game_id: gameId,
                    status: status
                });
                return {}
            })
        },
        totalUsers: 0,
        setTotalUsers: (total) => set({ totalUsers: total }),
        connected: false,
        connecting: false,
        failedConnection: false,
        setConnected: (total) => set({ connected: total }),
        authenticated: false,
        setAuthenticated: (value) => set({ authenticated: value }),
        loginSocket: (data) => {
            set((state) => {
                const socket = state.socket;
                socket.emit('login-socket', {
                    ...data,
                    game_name: process.env.NEXT_PUBLIC_GAME_NAME,
                });
                return {}
            })
        }

    }

}
