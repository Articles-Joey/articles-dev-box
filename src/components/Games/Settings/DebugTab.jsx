// import { useStore } from "@/hooks/useStore";

// import ArticlesButton from "../Button";
import ArticlesButton from '#root/src/components/UI/Button';

import packageJson from "../../../../package.json";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function DebugTab({
    useStore,
    config,
}) {

    // const debug = useStore((state) => state?.debug);
    // const setDebug = useStore((state) => state?.setDebug);

    // const toontownMode = useStore((state) => state?.toontownMode);
    // const setToontownMode = useStore((state) => state?.setToontownMode);

    const showStats = useStore((state) => state?.debugConfig?.showStats);
    const setDebugConfigKey = useStore((state) => state?.setDebugConfigKey);

    const modelSource = useStore((state) => state?.modelSource);
    const setModelSource = useStore((state) => state?.setModelSource);

    return (
        <>

            <Box sx={{ mb: 3 }}>
                dev-box version: {packageJson.version}
            </Box>

            {/* Note - This is opt out as most games will be using pmndrs/drei */}
            {/* This was only done for blackjack at this time */}
            {config?.tabs?.Debug?.showStats !== false &&
                <Box sx={{ mb: 3 }}>
                    <Typography>Show Debug Stats</Typography>
                    <Box>
                        {[false, true].map((level, i) => (
                            <ArticlesButton
                                key={i}
                                active={showStats === level}
                                onClick={() => {
                                    setDebugConfigKey("showStats", level);

                                }}
                            >
                                {level ? "Enabled" : "Disabled"}
                            </ArticlesButton>
                        ))}
                    </Box>
                </Box>
            }

            {/* Not seeing any value of adding this in production, will only end up in snoopy users adding cost */}
            {process.env.NODE_ENV === "development" &&
                <Box sx={{ mb: 3 }}>
                    <Typography>Override Model Source</Typography>
                    <Box>
                        <ArticlesButton
                            active={modelSource === 'CDN'}
                            onClick={() => {
                                setModelSource("CDN");

                            }}
                        >
                            CDN
                        </ArticlesButton>
                        <ArticlesButton
                            active={modelSource === 'Local'}
                            onClick={() => {
                                setModelSource("Local");

                            }}
                        >
                            Local
                        </ArticlesButton>
                    </Box>
                </Box>
            }

            {config?.tabs?.Debug?.children &&
                <>
                    <Divider />
                    {config?.tabs?.Debug?.children}
                </>
            }

        </>
    )

}
