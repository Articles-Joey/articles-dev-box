// import { useStore } from "@/hooks/useStore";

// import ArticlesButton from "../Button";
import ArticlesButton from '#root/src/components/UI/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function GraphicsTab({
    useStore,
    config
}) {

    const darkMode = useStore((state) => state?.darkMode);
    const setDarkMode = useStore((state) => state?.setDarkMode);

    const graphicsQuality = useStore((state) => state?.graphicsQuality);
    const setGraphicsQuality = useStore((state) => state?.setGraphicsQuality);

    const landingAnimation = useStore((state) => state?.landingAnimation);
    const setLandingAnimation = useStore((state) => state?.setLandingAnimation);

    return (
        <>

            <Typography>Dark Mode</Typography>
            <Box sx={{ mb: 3 }}>
                {[false, true].map((level, i) => (
                    <ArticlesButton
                        key={i}
                        active={darkMode === level}
                        onClick={() => {
                            setDarkMode(level);
                        }}
                    >
                        {level ? "On" : "Off"}
                    </ArticlesButton>
                ))}
            </Box>

            <Typography>Graphics Quality</Typography>
            <Box sx={{ mb: 3 }}>
                {['Low', 'Medium', 'High'].map(level => (
                    <ArticlesButton
                        key={level}
                        active={graphicsQuality === level}
                        onClick={() => {
                            setGraphicsQuality(level);
                        }}
                    >
                        {level}
                    </ArticlesButton>
                ))}
            </Box>

            <Typography>Landing Animation</Typography>
            <Box sx={{ mb: 3 }}>
                <ArticlesButton
                    active={landingAnimation === false}
                    onClick={() => {
                        setLandingAnimation(false);
                    }}
                >
                    Disabled
                </ArticlesButton>
                <ArticlesButton
                    active={landingAnimation === true}
                    onClick={() => {
                        setLandingAnimation(true);
                    }}
                >
                    Enabled
                </ArticlesButton>
            </Box>

            {config?.tabs?.Graphics?.children}

        </>
    )

}
