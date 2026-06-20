// import { useStore } from "@/hooks/useStore";

// import ArticlesButton from "../Button";
import ArticlesButton from '#root/src/components/UI/Button';

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

            <div>Debug Mode</div>
            <div className="mb-3">
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
            </div>

            {config?.tabs?.Other?.toontownMode &&
                <>
                    <div>Toontown Mode</div>
                    <div className="small mb-1">Mimics Toontown Online graphics.</div>
                    <div className="mb-3">
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
                    </div>
                </>
            }

            {(
                config?.tabs?.Other?.screenshotMode !== false
                &&
                process.env.NODE_ENV !== "production"
            ) &&
                <>
                    <div>Screenshot Mode</div>
                    <div className="small mb-1">Enables screenshot mode for the game. (Default command is slash+/ss)</div>
                    <div className="mb-3">
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
                    </div>
                </>
            }

            {config?.tabs?.Other?.children}

        </>
    )

}