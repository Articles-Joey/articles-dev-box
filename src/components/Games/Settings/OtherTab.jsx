// import { useStore } from "@/hooks/useStore";

// import ArticlesButton from "../Button";
import ArticlesButton from '#root/src/components/UI/Button';

export default function OtherTab({
    useStore,
    config,
    children
}) {

    const debug = useStore((state) => state?.debug);
    const setDebug = useStore((state) => state?.setDebug);

    const toontownMode = useStore((state) => state?.toontownMode);
    const setToontownMode = useStore((state) => state?.setToontownMode);

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

            {children && <div>
                <div className='mb-3'>Other Settings</div>
                <div className="mb-3">
                    {children}
                </div>
            </div>}

        </>
    )

}