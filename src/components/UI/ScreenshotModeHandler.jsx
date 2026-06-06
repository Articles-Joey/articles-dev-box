import { useEffect } from "react";

import "#root/src/styles/components/ScreenshotModeHandler.scss";

/**
 * Handles the screenshot mode functionality.
 *
 * @param {function} A Zustand store hook - With screenshotMode and setScreenshotMode
 * @returns {null} Nothing returned from this function.
 */
export default function ScreenshotModeHandler({ useStore }) {

    const screenshotMode = useStore((state) => state.screenshotMode);
    const hasHydrated = useStore((state) => state._hasHydrated);

    useEffect(() => {

        // TODO - Fix once a way is possible to do this
        // const indicator = document.getElementById("devtools-indicator");
        // const indicator = document.getElementById("articles-dev-box-socket-debug-overlay");
        const indicator = document.querySelector('[data-nextjs-dev-overlay]');

        // console.log("HEllo!>?")

        if (!hasHydrated) return;

        console.log("screenshotMode changed:", screenshotMode);

        if (screenshotMode) {
            document.body.setAttribute("data-articles-dev-box-screenshot-mode", 'enabled');
            if (indicator) {
                indicator.style.display = "none";
            }
        } else {
            document.body.setAttribute("data-articles-dev-box-screenshot-mode", 'disabled');
            if (indicator) {
                indicator.style.display = "block";
            }
        }

    }, [screenshotMode, hasHydrated]);

    return (
        <>
        </>
    );
}