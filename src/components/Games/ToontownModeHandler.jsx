// Handles setting the state for toontown mode via URL parameters, which is used to enable toontown-specific features in the game.
import { useEffect } from "react";

export default function ToontownModeHandler({
    useStore,
}) {

    // const setToontownMode = useStore((state) => state?.setToontownMode);

    useEffect(() => {

        const setToontownMode = useStore.getState()?.setToontownMode;

        const urlParams = new URLSearchParams(window.location.search);
        const toontownModeParam = urlParams.get('toontownMode');

        if (toontownModeParam) {
            setToontownMode(true);
            // Remove toontownMode from URL
            urlParams.delete('toontownMode');
            const newUrl = window.location.pathname + (urlParams.toString() ? `?${urlParams.toString()}` : '') + window.location.hash;
            window.history.replaceState({}, '', newUrl);
        }

    }, []);

    return null;
}