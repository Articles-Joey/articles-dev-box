// import { useStore } from "@/hooks/useStore";

// import ArticlesButton from "../Button";
import ArticlesButton from '#root/src/components/UI/Button';

export default function OtherTab({
    useStore,
    children
}) {

    const debug = useStore((state) => state?.debug);
    const setDebug = useStore((state) => state?.setDebug);

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
        
            {children && <div>
                <div className='mb-3'>Other Settings</div>
                <div className="mb-3">
                    {children}
                </div>
            </div>}

        </>
    )

}