// "use client"
// import { useStore } from "@/hooks/useStore";
import { useEffect } from "react";

// import { useEightBallStore } from "@/hooks/useEightBallStore";
// import { useStore } from "../hooks/useStore";

/**
 * Adds two numbers together.
 *
 * @param {function} A Zustand store hook - With darkMode and setDarkMode
 * @returns {null} Nothing returned from this function.
 */
export default function DarkModeHandler({ useStore }) {

    // const theme = useEightBallStore(state => state.theme);
    const darkMode = useStore((state) => state.darkMode);
    const hasHydrated = useStore((state) => state._hasHydrated);

    useEffect(() => {

        if (!hasHydrated) return;

        if (darkMode == null) {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            useStore.getState().setDarkMode(prefersDark ? true : false);
        }

        if (darkMode) {
            document.body.setAttribute("data-bs-theme", 'dark');
        } else {
            document.body.setAttribute("data-bs-theme", 'light');
        }

    }, [darkMode, hasHydrated]);

    return (
        <>
        </>
    );
}