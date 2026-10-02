import ArticlesButton from '#root/src/components/UI/Button';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
// import { useAudioStore } from "@/hooks/useAudioStore";

export default function AudioTab({
    useAudioStore,
    config
}) {

    const audioSettings = useAudioStore((state) => state?.audioSettings);
    const setAudioSettings = useAudioStore((state) => state?.setAudioSettings);

    return (
        <Box
            sx={{
                '[data-bs-theme="dark"] &, [data-mui-color-scheme="dark"] &': {
                    color: '#fff',
                    '& .MuiFormLabel-root, & .MuiInputLabel-root, & .MuiInputLabel-root.Mui-focused, & .MuiInputBase-input': {
                        color: '#fff',
                    },
                    '& .MuiFormHelperText-root': {
                        color: 'rgba(255, 255, 255, 0.7)',
                    },
                    '& .MuiInputBase-input::placeholder': {
                        color: '#fff',
                        opacity: 0.7,
                    },
                    '& .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(255, 255, 255, 0.7)',
                    },
                },
            }}
        >

            <Typography>Sound</Typography>
            <Box sx={{ mb: 3 }}>
                <ArticlesButton
                    active={!audioSettings?.enabled}
                    onClick={() => {
                        setAudioSettings({
                            ...audioSettings,
                            enabled: false
                        });
                    }}
                >
                    Disabled
                </ArticlesButton>
                <ArticlesButton
                    active={audioSettings?.enabled}
                    onClick={() => {
                        setAudioSettings({
                            ...audioSettings,
                            enabled: true
                        });
                    }}
                >
                    Enabled
                </ArticlesButton>
            </Box>

            <Box sx={{ border: 1, borderColor: 'divider', mb: 3, p: 2 }}>
                {config?.tabs?.Audio?.sliders?.map((slider_obj, i) => {
                    return (
                        <Box key={slider_obj.key + '_' + i} sx={{ mb: 3 }}>

                            <FormLabel component="div" sx={{ mb: 0 }}>
                                <span>{slider_obj.label}</span>
                                {audioSettings?.[slider_obj.key] != null &&
                                    <Box component="span" sx={{ ml: 1 }}>
                                        - {audioSettings[slider_obj.key]}%
                                    </Box>
                                }
                            </FormLabel>

                            <Slider
                                value={Number(audioSettings?.[slider_obj.key] || 0)}
                                min={slider_obj.min ?? 0}
                                max={slider_obj.max ?? 100}
                                onChange={(_event, value) => {
                                    setAudioSettings({
                                        ...audioSettings,
                                        [slider_obj.key]: value
                                    });
                                }}
                                sx={(theme) => {
                                    const primaryColor = theme.palette?.primary?.main ?? '#f9edcd';
                                    const primaryContrastColor = theme.palette.getContrastText(primaryColor);
                                    const primaryCssColor = `var(--mui-palette-primary-main, ${primaryColor})`;
                                    const primaryFocusColor = `color-mix(in srgb, ${primaryCssColor} 50%, transparent)`;

                                    return ({
                                        color: primaryCssColor,
                                        '& .MuiSlider-rail, & .MuiSlider-track': { height: 8 },
                                        '& .MuiSlider-thumb': {
                                            width: 16,
                                            height: 16,
                                            border: `1px solid #888888`,
                                        },
                                        '& .MuiSlider-thumb:hover, & .MuiSlider-thumb.Mui-focusVisible': {
                                            boxShadow: `0 0 0 8px ${primaryFocusColor}`,
                                        },
                                        '& .MuiSlider-thumb.Mui-active': {
                                            boxShadow: `0 0 0 14px ${primaryFocusColor}`,
                                        },
                                    });
                                }}
                            />
    
                        </Box>
                    )
                })}
            </Box>

            {config?.tabs?.Audio?.children}

            {/* <Form.Label className="mb-0">Game Volume</Form.Label>
            <Form.Range
                value={audioSettings?.game_volume}
                onChange={(value) => {
                    console.log("Value", value)
                    setAudioSettings({
                        ...audioSettings,
                        game_volume: value.target.value
                    });
                }}
            />

            <Form.Label className="mb-0">Music Volume</Form.Label>
            <Form.Range
                value={audioSettings?.music_volume}
                onChange={(value) => {
                    console.log("Value", value)
                    setAudioSettings({
                        ...audioSettings,
                        music_volume: value.target.value
                    });
                }}
            /> */}

        </Box>
    )

}
