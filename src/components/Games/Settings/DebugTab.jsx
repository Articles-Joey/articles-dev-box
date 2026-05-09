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

            {config?.tabs?.Debug?.children &&
                <>
                    <hr />
                    {config?.tabs?.Debug?.children}
                </>
            }

        </>
    )

}