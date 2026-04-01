export default function ControlsTab({
    useTouchControlsStore
}) {

    return (
        <div className="">

            <div>
                <h5>Control Settings</h5>
                <p>Configure your key bindings and control preferences here.</p>
            </div>

            {useTouchControlsStore &&
                <TouchControls
                    useTouchControlsStore={useTouchControlsStore}
                />
            }

        </div>
    )
}

function TouchControls({
    useTouchControlsStore
}) {

    const touchControls = useTouchControlsStore(state => state.touchControls);
    const setTouchControls = useTouchControlsStore(state => state.setTouchControls);

    return (
        <div className="mb-3">
            {[false, true].map((level, i) => (
                <ArticlesButton
                    key={i}
                    active={touchControls === level}
                    onClick={() => {
                        setTouchControls(level);
                    }}
                >
                    {level ? "On" : "Off"}
                </ArticlesButton>
            ))}
        </div>
    )
}