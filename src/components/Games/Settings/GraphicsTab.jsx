// import { useStore } from "@/hooks/useStore";

// import ArticlesButton from "../Button";
import ArticlesButton from '#root/src/components/UI/Button';

export default function GraphicsTab({
    useStore
}) {

    const darkMode = useStore((state) => state?.darkMode);
    const setDarkMode = useStore((state) => state?.setDarkMode);

    const graphicsQuality = useStore((state) => state?.graphicsQuality);
    const setGraphicsQuality = useStore((state) => state?.setGraphicsQuality);

    const landingAnimation = useStore((state) => state?.landingAnimation);
    const setLandingAnimation = useStore((state) => state?.setLandingAnimation);

    return (
        <>

            <div>Dark Mode</div>
            <div className="mb-3">
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
            </div>

            <div>Graphics Quality</div>
            <div className="mb-3">
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
            </div>

            <div>Landing Animation</div>
            <div className="mb-3">
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
            </div>

        </>
    )

}