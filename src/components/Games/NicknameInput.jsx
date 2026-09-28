import ArticlesButton from "../UI/Button";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import ShuffleIcon from '@mui/icons-material/Shuffle';

/**
 * NicknameInput component for managing and displaying the user's nickname.
 *
 * @param {Object} props
 * @param {function} props.useStore - Zustand store hook for accessing nickname state and actions.
 * @returns {JSX.Element|null} The rendered NicknameInput component or null if useStore is not provided.
 */
export default function NicknameInput({
    useStore,
    config,
}) {

    const _hasHydrated = useStore((state) => state._hasHydrated);
    const nickname = useStore((state) => state.nickname);
    const setNickname = useStore((state) => state.setNickname);
    const randomNickname = useStore((state) => state.randomNickname);

    if (!useStore) {
        return null;
    }

    return (
        <Box sx={{ display: 'flex', width: 1 }}>
            {config?.PreComponent &&
                <>
                    {config.PreComponent}
                </>
            }
            <Box sx={{ flexGrow: 1 }}>

                <Box sx={{ mb: 0, mt: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <TextField
                            type="text"
                            value={_hasHydrated ? nickname : ''}
                            disabled={!_hasHydrated}
                            id="nickname"
                            name="nickname"
                            placeholder="Enter your nickname"
                            label="Nickname"
                            size="small"
                            fullWidth
                            sx={{
                                '[data-bs-theme="dark"] &, [data-mui-color-scheme="dark"] &': {
                                    '& .MuiInputLabel-root, & .MuiInputLabel-root.Mui-focused': {
                                        color: '#fff !important',
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        color: '#fff !important',
                                    },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#fff !important',
                                    },
                                    '& .MuiInputBase-input': {
                                        color: '#fff !important',
                                        caretColor: '#fff',
                                        WebkitTextFillColor: '#fff !important',
                                        '&::placeholder': {
                                            color: '#fff !important',
                                            opacity: 1,
                                            WebkitTextFillColor: '#fff !important',
                                        },
                                    },
                                },
                            }}
                            onChange={(e) => {
                                setNickname(e.target.value)
                            }}
                        />
                        <ArticlesButton
                            small
                            sx={{ ml: 0.5, alignSelf: 'stretch' }}
                            onClick={() => {
                                randomNickname()
                            }}
                        >
                            <ShuffleIcon fontSize="small" />
                        </ArticlesButton>
                    </Box>
                </Box>

                <Typography sx={{ mt: 0, fontSize: '0.8rem' }}>Visible to all players</Typography>

            </Box>
        </Box>
    )

}
