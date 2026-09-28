import ArticlesButton from '#root/src/components/UI/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function ControlsTab({
    useTouchControlsStore,
    config
}) {

    return (
        <Box>

            {config?.tabs?.Controls?.ControlsPanel &&
                <>
                    {config?.tabs?.Controls?.ControlsPanel}
                </>
            }

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

        </Box>
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
        <Box sx={{ mb: 3 }}>

            <Typography>Touch Controls</Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>Adds on screen controls for touch devices.</Typography>
            <Box sx={{ mb: 3 }}>
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
            </Box>

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

        </Box>
    )
}
