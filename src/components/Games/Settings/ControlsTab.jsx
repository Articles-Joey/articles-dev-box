import ArticlesButton from '#root/src/components/UI/Button';

export default function ControlsTab({
    useTouchControlsStore,
    config
}) {

    return (
        <div className="">

            {(
                useTouchControlsStore
                && 
                config?.tabs?.Controls?.touchControls
            ) &&
                <TouchControls
                    useTouchControlsStore={useTouchControlsStore}
                />
            }

            {config?.tabs?.Controls?.children}

        </div>
    )
}

function TouchControls({
    useTouchControlsStore
}) {

    // const touchControls = useTouchControlsStore(state => state.touchControls);
    // const setTouchControls = useTouchControlsStore(state => state.setTouchControls);

    const enabled = useTouchControlsStore((state) => state?.enabled);
    const setEnabled = useTouchControlsStore((state) => state?.setEnabled);

    return (
        <div className="mb-3">

            <div>Touch Controls</div>
            <div className="small mb-1">Adds on screen controls for touch devices.</div>
            <div className="mb-3">
                {[false, true].map((level, i) => (
                    <ArticlesButton
                        key={i}
                        active={enabled === level}
                        onClick={() => {
                            setEnabled(level);
                        }}
                    >
                        {level ? "On" : "Off"}
                    </ArticlesButton>
                ))}
            </div>

            {/* {[false, true].map((level, i) => (
                <ArticlesButton
                    key={i}
                    active={touchControls === level}
                    onClick={() => {
                        setTouchControls(level);
                    }}
                >
                    {level ? "On" : "Off"}
                </ArticlesButton>
            ))} */}

        </div>
    )
}