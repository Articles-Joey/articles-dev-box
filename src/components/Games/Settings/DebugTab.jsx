// import { useStore } from "@/hooks/useStore";

// import ArticlesButton from "../Button";
import ArticlesButton from '#root/src/components/UI/Button';

import packageJson from "../../../../package.json";

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

            <div className='mb-3'>
                dev-box version: {packageJson.version}
            </div>

            {/* Note - This is opt out as most games will be using pmndrs/drei */}
            {/* This was only done for blackjack at this time */}
            {config?.tabs?.Debug?.showStats !== false &&
                <div className='mb-3'>
                    <div>Show Debug Stats</div>
                    <div className="">
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
                    </div>
                </div>
            }

            {/* Not seeing any value of adding this in production, will only end up in snoopy users adding cost */}
            {process.env.NODE_ENV === "development" &&
                <div className='mb-3'>
                    <div>Override Model Source</div>
                    <div className="">
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
                    </div>
                </div>
            }

            {config?.tabs?.Debug?.children &&
                <>
                    <hr />
                    {config?.tabs?.Debug?.children}
                </>
            }

        </>
    )

}