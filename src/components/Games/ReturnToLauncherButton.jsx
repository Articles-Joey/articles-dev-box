"use client";
import ArticlesButton from "#root/src/components/UI/Button";
import { lazy, useEffect, useState } from "react";
import Box from '@mui/material/Box';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

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
            <Box sx={{ display: 'flex' }}>
                <ArticlesButton
                    // ref={el => elementsRef.current[6] = el}
                    className={className}
                    small
                    id={id}
                    sx={{
                        width: 1,
                        zIndex: 10,
                        position: "relative",
                    }}
                    onClick={() => {
                        // window.history.back()
                        window.location.href = `https://games.articles.media?utm_source=${window.location.hostname}&utm_medium=GamesDropdown`
                    }}
                >
                    <SportsEsportsIcon fontSize="inherit" sx={{ mr: 0.75 }} />
                    View our other games
                </ArticlesButton>

                {!hideGamesDropdown &&
                    <GamesDropdown />
                }

            </Box>
        )
    }

    return (
        <ArticlesButton
            // ref={el => elementsRef.current[6] = el}
            className={className}
            id={id}
            small
            sx={{
                width: 1,
                zIndex: 10,
                position: "relative",
            }}
            onClick={() => {
                // window.history.back()
                window.location.href = `https://games.articles.media?utm_source=${window.location.hostname}&utm_medium=GamesDropdown`
            }}
        >
            <SportsEsportsIcon fontSize="inherit" sx={{ mr: 0.75 }} />
            Return to Games
        </ArticlesButton>
    );
}
