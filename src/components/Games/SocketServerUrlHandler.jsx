// Handles setting the state for the socket server URL via URL parameters, which is used to configure the game server connection.
import { useEffect } from "react";

// TODO - Still needs work, I want to add confirmation process in case of bad actors.

export default function SocketServerUrlHandler({
    useStore,
}) {

    // const setSocketServerUrl = useStore((state) => state?.setSocketServerUrl);

    useEffect(() => {

        const setSocketServerUrl = useStore.getState()?.setSocketServerUrl;

        const urlParams = new URLSearchParams(window.location.search);
        const socketServerUrlParam = urlParams.get('socketServerUrl');

        if (socketServerUrlParam) {
            setSocketServerUrl(socketServerUrlParam);
            // Remove socketServerUrl from URL
            urlParams.delete('socketServerUrl');
            const newUrl = window.location.pathname + (urlParams.toString() ? `?${urlParams.toString()}` : '') + window.location.hash;
            window.history.replaceState({}, '', newUrl);
        }

    }, []);

    return null;
}