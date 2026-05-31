"use client";
import ArticlesButton from "#root/src/components/UI/Button";
import { lazy, useEffect, useState } from "react";

const GamesDropdown = lazy(() => import('#root/src/components/Games/GamesDropdown'));

export default function ReturnToLauncherButton({
    className,
    id,
    hideGamesDropdown = false,
}) {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    // if (typeof window === "undefined") return null

    const urlParams = new URL(window.location.href).searchParams;
    const paramsObject = Object.fromEntries(urlParams)

    let { launcher_mode } = paramsObject

    launcher_mode = launcher_mode === '1' ? true : false

    // const router = useRouter()

    if (!launcher_mode) {
        return (
            <div className="d-flex">
                <ArticlesButton
                    // ref={el => elementsRef.current[6] = el}
                    className={`${className} w-100`}
                    small
                    id={id}
                    style={{
                        zIndex: 10,
                        position: "relative",
                    }}
                    onClick={() => {
                        // window.history.back()
                        window.location.href = `https://games.articles.media?utm_source=${window.location.hostname}&utm_medium=GamesDropdown`
                    }}
                >
                    <i className="fad fa-gamepad"></i>
                    View our other games
                </ArticlesButton>

                {!hideGamesDropdown &&
                    <GamesDropdown />
                }

            </div>
        )
    }

    return (
        <ArticlesButton
            // ref={el => elementsRef.current[6] = el}
            className={`${className} w-100`}
            id={id}
            small
            style={{
                zIndex: 10,
                position: "relative",
            }}
            onClick={() => {
                // window.history.back()
                window.location.href = `https://games.articles.media?utm_source=${window.location.hostname}&utm_medium=GamesDropdown`
            }}
        >
            <i className="fad fa-gamepad"></i>
            Return to Games
        </ArticlesButton>
    );
}