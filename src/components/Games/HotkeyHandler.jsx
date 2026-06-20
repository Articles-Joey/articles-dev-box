// import { useStore } from "@/hooks/useStore";
// import { useHotkeys } from "react-hotkeys-hook";

export default function HotkeyHandler({
    useHotkeys,
    useStore,
    disabled = false,
}) {

    useHotkeys('r', () => {
        if (disabled) return;
        console.log("Reloading Scene")
        useStore.getState().reloadScene();
    }, [disabled])

    useHotkeys('slash+s', () => {
        if (disabled) return;
        console.log("Toggling Screenshot Mode")
        useStore.getState().toggleScreenshotMode();
    }, [disabled])

    useHotkeys('slash+m', () => {
        if (disabled) return;
        console.log("Toggling Settings")
        useStore.getState().setShowSettingsModal(!useStore.getState().showSettingsModal);
    }, [disabled])

    useHotkeys('slash+d', () => {
        if (disabled) return;
        console.log("Toggling Debug")
        useStore.getState().toggleDebug();
        useStore.getState().reloadScene();
    }, [disabled])

}