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

    return (
        <>

            <div className='mb-3'>
                dev-box version: {packageJson.version}
            </div>

            {/* <div>Future Thing</div>
            <div className="mb-3">
                {[false, true].map((level, i) => (
                    <ArticlesButton
                        key={i}
                        onClick={() => {}}
                    >
                        Placeholder
                    </ArticlesButton>
                ))}
            </div> */}

            {config?.tabs?.Debug?.children &&
                <>
                    <hr />
                    {config?.tabs?.Debug?.children}
                </>
            }

        </>
    )

}