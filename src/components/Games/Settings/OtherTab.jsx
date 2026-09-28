// import { useStore } from "@/hooks/useStore";

// import ArticlesButton from "../Button";
import ArticlesButton from '#root/src/components/UI/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function OtherTab({
    useStore,
    config,
}) {

    const debug = useStore((state) => state?.debug);
    const setDebug = useStore((state) => state?.setDebug);

    const toontownMode = useStore((state) => state?.toontownMode);
    const setToontownMode = useStore((state) => state?.setToontownMode);

    const screenshotMode = useStore((state) => state?.screenshotMode);
    const setScreenshotMode = useStore((state) => state?.setScreenshotMode);

    return (
        <>

            <Typography>Debug Mode</Typography>
            <Box sx={{ mb: 3 }}>
                {[false, true].map((level, i) => (
                    <ArticlesButton
                        key={i}
                        active={debug === level}
                        onClick={() => {
                            setDebug(level);
                        }}
                    >
                        {level ? "On" : "Off"}
                    </ArticlesButton>
                ))}
            </Box>

            {config?.tabs?.Other?.toontownMode &&
                <>
                    <Typography>Toontown Mode</Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}>Mimics Toontown Online graphics.</Typography>
                    <Box sx={{ mb: 3 }}>
                        {[false, true].map((level, i) => (
                            <ArticlesButton
                                key={i}
                                active={toontownMode === level}
                                onClick={() => {
                                    setToontownMode(level);
                                }}
                            >
                                {level ? "On" : "Off"}
                            </ArticlesButton>
                        ))}
                    </Box>
                </>
            }

            {(
                config?.tabs?.Other?.screenshotMode !== false
                &&
                process.env.NODE_ENV !== "production"
            ) &&
                <>
                    <Typography>Screenshot Mode</Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}>Enables screenshot mode for the game. (Default command is <span style={{ fontWeight: 'bold', border: '1px solid rgba(129, 129, 129, 0.175)', display: "inline-block", borderRadius: "10px", padding: "5px" }}>/</span> + <span style={{ fontWeight: 'bold', border: '1px solid rgba(129, 129, 129, 0.17)', display: "inline-block", borderRadius: "10px", padding: "5px" }}>s</span> key at same time)</Typography>
                    <Box sx={{ mb: 3 }}>
                        {[false, true].map((level, i) => (
                            <ArticlesButton
                                key={i}
                                active={screenshotMode === level}
                                onClick={() => {
                                    setScreenshotMode(level);
                                }}
                            >
                                {level ? "On" : "Off"}
                            </ArticlesButton>
                        ))}
                    </Box>
                </>
            }

            {config?.tabs?.Other?.children}

        </>
    )

}
