"use client"
import { useEffect } from "react";

export default function HasNoMouseHandler({ useStore }) {

    const hasHydrated = useStore((state) => state._hasHydrated);

    const hasNoMouse = useStore((state) => state.hasNoMouse);
    const setHasNoMouse = useStore((state) => state.setHasNoMouse);

    const isTouchCapable = useStore((state) => state.isTouchCapable);
    const setIsTouchCapable = useStore((state) => state.setIsTouchCapable);

    useEffect(() => {

        // console.log("Test ?")

        if (!hasHydrated) return;

        // console.log("hasHydrated happened in HasNoMouseHandler")

        if (hasNoMouse === null) {
            const hasMouse = window.matchMedia("(pointer: fine)").matches;
            // console.log("Has mouse:", hasMouse);
            setHasNoMouse(!hasMouse);
        }

        if (isTouchCapable === null) {
            const touchCapable = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            // console.log("Is touch capable:", touchCapable);
            setIsTouchCapable(touchCapable);
        }

    }, [hasHydrated, hasNoMouse, isTouchCapable, setHasNoMouse, setIsTouchCapable]);

    return (
        <>
        </>
    );
}